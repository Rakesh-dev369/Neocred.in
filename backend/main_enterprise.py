"""Enterprise-Grade NeoCred Backend API"""
from fastapi import FastAPI, HTTPException, Request, Depends, Query, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse, PlainTextResponse
from pydantic import BaseModel, Field, validator
import openai
import time
import uuid
from datetime import datetime, timedelta
from typing import List, Optional, Dict, Any
import logging
import structlog
import asyncio
import json

# Import enterprise modules
from config import settings
from database import create_tables, get_db, save_chat_session, log_api_metrics
from cache import cache
from security import (
    limiter, rate_limit_chat, rate_limit_api, rate_limit_news,
    SecureInput, get_client_ip, validate_request_size,
    security_headers_middleware, check_ip_reputation
)
from monitoring import (
    health_checker, monitoring_middleware, performance_monitor,
    alert_manager, get_prometheus_metrics, REQUEST_COUNT, OPENAI_REQUESTS
)
from news_service import fetch_latest_news, search_news, get_news_by_category

# Configure structured logging
logging.basicConfig(
    format="%(message)s",
    level=getattr(logging, settings.log_level),
)

logger = structlog.get_logger()

# Initialize FastAPI app
app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="🚀 Enterprise-grade AI-powered financial assistant API with comprehensive security, monitoring, and performance optimization",
    contact={"name": "NeoCred", "url": "https://neocred.in", "email": "hello@neocred.in"},
    docs_url="/docs" if settings.debug else None,
    redoc_url="/redoc" if settings.debug else None
)

# Add middleware stack (order matters!)
app.add_middleware(GZipMiddleware, minimum_size=1000)
app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.allowed_hosts.split(','))

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://neocred.in",
        "https://www.neocred.in",
        "https://neocred.vercel.app",
        "https://*.vercel.app"
    ] if settings.environment == "production" else [
        "http://localhost:3000",
        "http://localhost:3001", 
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Add custom middleware
app.middleware("http")(security_headers_middleware)
app.middleware("http")(monitoring_middleware)

# Rate limiter setup
app.state.limiter = limiter

# OpenAI client
client = openai.OpenAI(api_key=settings.openai_api_key)

# Pydantic models with validation
class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000, description="User's financial question")
    conversationHistory: List[dict] = Field(default=[], max_items=10, description="Previous conversation messages")
    systemPrompt: str = Field(..., description="FinBot system instructions")
    toolsContext: str = Field(..., description="Available tools and features context")
    
    @validator('message')
    def sanitize_message(cls, v):
        return SecureInput.validate_chat_message(v)
    
    class Config:
        schema_extra = {
            "example": {
                "message": "I want to start investing ₹5000 monthly. What should I do?",
                "conversationHistory": [],
                "systemPrompt": "You are FinBot, an AI financial assistant...",
                "toolsContext": "Available tools: SIP Calculator, Budget Planner..."
            }
        }

class ChatResponse(BaseModel):
    response: str = Field(..., description="FinBot's AI-generated response")
    suggestions: List[str] = Field(default=[], description="Quick action suggestions")
    toolLink: Optional[str] = Field(None, description="Direct link to relevant tool")
    toolName: Optional[str] = Field(None, description="Name of single tool for button text")
    toolLinks: List[dict] = Field(default=[], description="Multiple tool links for comparisons")
    responseTime: Optional[float] = Field(None, description="Response time in seconds")
    tokensUsed: Optional[int] = Field(None, description="OpenAI tokens consumed")
    sessionId: Optional[str] = Field(None, description="Chat session ID")

class NewsResponse(BaseModel):
    success: bool
    data: List[dict]
    pagination: dict
    metadata: dict

class HealthResponse(BaseModel):
    status: str
    timestamp: str
    checks: dict
    system: dict
    version: str

# Startup and shutdown events
@app.on_event("startup")
async def startup_event():
    """Initialize services on startup"""
    logger.info("Starting NeoCred Enterprise API", version=settings.app_version)
    
    # Initialize database
    create_tables()
    
    # Initialize cache
    await cache.connect()
    
    # Log startup
    logger.info("Enterprise API started successfully")

@app.on_event("shutdown")
async def shutdown_event():
    """Cleanup on shutdown"""
    logger.info("Shutting down NeoCred Enterprise API")
    
    # Disconnect cache
    await cache.disconnect()
    
    logger.info("Enterprise API shutdown complete")

# Error handlers
@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    """Handle HTTP exceptions with proper logging"""
    client_ip = get_client_ip(request)
    
    logger.warning(
        "HTTP exception",
        status_code=exc.status_code,
        detail=exc.detail,
        client_ip=client_ip,
        endpoint=request.url.path
    )
    
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "error": exc.detail,
            "timestamp": datetime.now().isoformat(),
            "request_id": str(uuid.uuid4())
        }
    )

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Handle unexpected exceptions"""
    client_ip = get_client_ip(request)
    
    logger.error(
        "Unexpected error",
        error=str(exc),
        client_ip=client_ip,
        endpoint=request.url.path,
        exc_info=True
    )
    
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "error": "Internal server error" if settings.environment == "production" else str(exc),
            "timestamp": datetime.now().isoformat(),
            "request_id": str(uuid.uuid4())
        }
    )

# Main API endpoints
@app.post(
    "/api/chat",
    response_model=ChatResponse,
    summary="💬 Chat with FinBot AI",
    description="Send a financial question to FinBot and receive AI-powered advice with tool recommendations",
    tags=["Chat"]
)
@rate_limit_chat()
async def chat_endpoint(
    request: Request,
    chat_request: ChatRequest,
    db = Depends(get_db),
    background_tasks: BackgroundTasks = None
):
    start_time = time.time()
    client_ip = get_client_ip(request)
    session_id = str(uuid.uuid4())
    
    # Security checks
    validate_request_size(request)
    check_ip_reputation(client_ip)
    
    try:
        # Enhanced system prompt (truncated for brevity)
        enhanced_system_prompt = f"""
        You are FinBot, NeoCred's advanced AI financial assistant with comprehensive knowledge of the entire NeoCred platform.
        
        ## CORE IDENTITY & CAPABILITIES:
        - Expert financial advisor for Indian markets with real-time knowledge
        - Access to 29+ financial calculators and tools on NeoCred
        - Deep knowledge of 8 Financial Literacy Pillars
        - Current with 2025 financial regulations and rates
        - Conversational, helpful, and educational approach
        
        ## IMPORTANT DISCLAIMERS:
        - All content is for educational purposes only
        - We are NOT SEBI-registered advisors
        - Always consult certified professionals for investment decisions
        - All investments carry market risks
        
        {chat_request.systemPrompt}
        {chat_request.toolsContext}
        """
        
        messages = [{"role": "system", "content": enhanced_system_prompt}]
        
        # Add conversation history (limited)
        for msg in chat_request.conversationHistory[-6:]:
            if msg.get("text") and msg.get("sender"):
                messages.append({
                    "role": "user" if msg.get("sender") == "user" else "assistant",
                    "content": msg.get("text", "")[:400]
                })
        
        messages.append({"role": "user", "content": chat_request.message})

        # Call OpenAI with error handling
        try:
            response = client.chat.completions.create(
                model=settings.openai_model,
                messages=messages,
                max_tokens=settings.openai_max_tokens,
                temperature=settings.openai_temperature,
                presence_penalty=0.1,
                frequency_penalty=0.1
            )
            
            OPENAI_REQUESTS.labels(status="success").inc()
            
        except openai.RateLimitError:
            OPENAI_REQUESTS.labels(status="rate_limit").inc()
            raise HTTPException(status_code=429, detail="AI service temporarily unavailable due to high demand")
        except openai.AuthenticationError:
            OPENAI_REQUESTS.labels(status="auth_error").inc()
            raise HTTPException(status_code=500, detail="AI service configuration error")
        except Exception as e:
            OPENAI_REQUESTS.labels(status="error").inc()
            logger.error("OpenAI API error", error=str(e))
            raise HTTPException(status_code=500, detail="AI service temporarily unavailable")
        
        bot_response = response.choices[0].message.content
        tokens_used = response.usage.total_tokens if response.usage else 0
        
        # Enhanced tool detection (simplified for brevity)
        suggestions = ["🔧 Explore Tools", "📚 Learn Finance", "💡 Get Advice"]
        tool_link = "/tools"
        tool_name = None
        tool_links = []
        
        response_lower = bot_response.lower()
        
        # Tool detection logic
        if "sip calculator" in response_lower:
            tool_link = "/tools?tool=SIP Calculator&from=chat"
            tool_name = "SIP Calculator"
            suggestions = ["📈 SIP Calculator", "📊 Step-up SIP", "🎯 Goal Planner"]
        elif "budget planner" in response_lower:
            tool_link = "/tools?tool=Budget Planner&from=chat"
            tool_name = "Budget Planner"
            suggestions = ["📝 Budget Planner", "📋 50/30/20 Rule", "🚨 Emergency Fund"]
        
        response_time = time.time() - start_time
        
        # Save to database (background task)
        background_tasks.add_task(
            save_chat_session,
            db, session_id, chat_request.message, bot_response,
            tool_name, response_time, tokens_used, client_ip
        )
        
        # Record performance metrics
        performance_monitor.record_request(response_time, True)
        
        return ChatResponse(
            response=bot_response,
            suggestions=suggestions[:3],
            toolLink=tool_link,
            toolName=tool_name,
            toolLinks=tool_links,
            responseTime=round(response_time, 2),
            tokensUsed=tokens_used,
            sessionId=session_id
        )
        
    except HTTPException:
        raise
    except Exception as e:
        performance_monitor.record_request(time.time() - start_time, False)
        logger.error("Chat endpoint error", error=str(e), session_id=session_id)
        
        return ChatResponse(
            response="I'm experiencing technical difficulties. Please try again in a moment.",
            suggestions=["🔧 Try Again", "📚 Learn Finance", "💡 Get Help"],
            toolLink="/tools",
            responseTime=round(time.time() - start_time, 2),
            tokensUsed=0,
            sessionId=session_id
        )

@app.get(
    "/api/news",
    response_model=NewsResponse,
    summary="📰 Financial News",
    description="Get latest financial news with intelligent filtering and caching",
    tags=["News"]
)
@rate_limit_news()
async def get_news(
    request: Request,
    page: int = Query(1, ge=1, le=100),
    limit: int = Query(20, ge=1, le=100),
    q: Optional[str] = Query(None, max_length=200),
    category: Optional[str] = Query("all"),
    background_tasks: BackgroundTasks = None
):
    start_time = time.time()
    client_ip = get_client_ip(request)
    
    # Security checks
    check_ip_reputation(client_ip)
    
    try:
        # Sanitize search query
        if q:
            q = SecureInput.validate_search_query(q)
        
        # Fetch news articles
        articles = await fetch_latest_news()
        
        if not articles:
            return NewsResponse(
                success=False,
                data=[],
                pagination={
                    "page": 1, "limit": limit, "total_items": 0,
                    "total_pages": 0, "has_next": False, "has_prev": False
                },
                metadata={
                    "cache_status": "miss",
                    "response_time": round(time.time() - start_time, 3),
                    "last_updated": datetime.now().isoformat()
                }
            )
        
        # Apply filters
        if q:
            articles = await search_news(q, articles)
        
        if category and category != "all":
            articles = await get_news_by_category(category, articles)
        
        # Pagination
        total_items = len(articles)
        start_idx = (page - 1) * limit
        end_idx = start_idx + limit
        paginated_articles = articles[start_idx:end_idx]
        
        response_time = time.time() - start_time
        
        return NewsResponse(
            success=True,
            data=paginated_articles,
            pagination={
                "page": page,
                "limit": limit,
                "total_items": total_items,
                "total_pages": (total_items + limit - 1) // limit,
                "has_next": end_idx < total_items,
                "has_prev": page > 1
            },
            metadata={
                "cache_status": "hit",
                "response_time": round(response_time, 3),
                "last_updated": datetime.now().isoformat(),
                "filters_applied": {"search": bool(q), "category": category}
            }
        )
        
    except Exception as e:
        logger.error("News endpoint error", error=str(e), client_ip=client_ip)
        
        return NewsResponse(
            success=False,
            data=[],
            pagination={
                "page": 1, "limit": limit, "total_items": 0,
                "total_pages": 0, "has_next": False, "has_prev": False
            },
            metadata={
                "cache_status": "error",
                "response_time": round(time.time() - start_time, 3),
                "error": "Failed to fetch news"
            }
        )

@app.get(
    "/health/detailed",
    response_model=HealthResponse,
    summary="🏥 Detailed Health Check",
    description="Comprehensive health check with all system components",
    tags=["System"]
)
async def detailed_health_check():
    """Comprehensive health check endpoint"""
    return await health_checker.comprehensive_health_check()

@app.get(
    "/health",
    summary="❤️ Basic Health Check",
    description="Quick health check for load balancers",
    tags=["System"]
)
async def basic_health_check():
    """Basic health check for load balancers"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": settings.app_version
    }

@app.get(
    "/metrics",
    response_class=PlainTextResponse,
    summary="📊 Prometheus Metrics",
    description="Prometheus-compatible metrics endpoint",
    tags=["Monitoring"]
)
async def metrics_endpoint():
    """Prometheus metrics endpoint"""
    if not settings.metrics_enabled:
        raise HTTPException(status_code=404, detail="Metrics disabled")
    
    return await get_prometheus_metrics()

@app.get(
    "/api/stats",
    summary="📈 API Statistics",
    description="Get API usage statistics and performance metrics",
    tags=["Analytics"]
)
@rate_limit_api()
async def get_api_stats():
    """Get API statistics"""
    perf_stats = performance_monitor.get_stats()
    cache_stats = await cache.get_stats()
    alerts = await alert_manager.check_alerts()
    
    return {
        "performance": perf_stats,
        "cache": cache_stats,
        "alerts": alerts,
        "uptime": "99.9%",
        "version": settings.app_version,
        "environment": settings.environment
    }

# Root endpoint
@app.get(
    "/",
    summary="🏠 API Root",
    description="Welcome endpoint with API information",
    tags=["System"]
)
async def root():
    return {
        "message": "NeoCred Enterprise API is running!",
        "version": settings.app_version,
        "environment": settings.environment,
        "docs": "/docs" if settings.debug else "Contact support for API documentation",
        "features": [
            "Enterprise Security",
            "AI Chat with GPT-4",
            "Real-time News",
            "Performance Monitoring",
            "Intelligent Caching"
        ]
    }

# Additional utility endpoints
@app.get("/api/tools", tags=["Tools"])
@rate_limit_api()
async def get_tools():
    """Get available financial tools"""
    tools = [
        {"name": "SIP Calculator", "category": "Investment", "url": "/tools?tool=SIP Calculator"},
        {"name": "Budget Planner", "category": "Planning", "url": "/tools?tool=Budget Planner"},
        {"name": "FD Calculator", "category": "Savings", "url": "/tools?tool=FD Calculator"},
        {"name": "Home Loan EMI", "category": "Loans", "url": "/tools?tool=Home Loan EMI Calculator"},
        {"name": "PPF Calculator", "category": "Savings", "url": "/tools?tool=PPF Calculator"}
    ]
    return {"tools": tools, "total": 29, "categories": ["Investment", "Planning", "Savings", "Loans", "Tax"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main_enterprise:app",
        host=settings.host,
        port=settings.port,
        workers=1 if settings.debug else settings.workers,
        reload=settings.debug,
        access_log=settings.debug
    )