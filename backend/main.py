from fastapi import FastAPI, HTTPException, Request, Depends, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from pydantic import BaseModel, Field
import openai
import os
import time
import json
import uuid
from typing import Optional, List
from dotenv import load_dotenv
from sqlalchemy.orm import Session

# Import custom modules
from database import get_db, init_db
from models import User, ChatSession, ChatMessage, APIMetrics
from cache import cache_service
from auth import get_user_id_from_request
from monitoring import MetricsMiddleware, logger, log_openai_request, log_cache_hit, log_cache_miss, metrics_endpoint
from circuit_breaker import openai_circuit_breaker

# Load environment variables
load_dotenv()

# Initialize database
init_db()

app = FastAPI(
    title="NEOC₹ED FinBot API", 
    version="2.0.0",
    description="Enhanced AI-powered financial assistant with caching, monitoring, and analytics"
)

# Add monitoring middleware
app.add_middleware(MetricsMiddleware)

# Security middleware
app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=["localhost", "127.0.0.1", "*.neocred.in"]
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173", "http://127.0.0.1:5173",
        "https://localhost:5173", "https://127.0.0.1:5173",
        "https://neocred.in", "https://www.neocred.in"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Singleton OpenAI client
class OpenAIClient:
    _instance = None
    _client = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def get_client(self):
        if self._client is None:
            api_key = os.getenv("OPENAI_API_KEY")
            if not api_key:
                raise ValueError("OpenAI API key not configured")
            self._client = openai.OpenAI(api_key=api_key)
        return self._client

openai_client = OpenAIClient()

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000)
    conversationHistory: List[dict] = Field(default=[], max_items=20)
    systemPrompt: str
    toolsContext: str
    userId: Optional[str] = None
    sessionId: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    suggestions: List[str] = []
    toolLink: Optional[str] = None
    success: bool = True
    responseTime: Optional[float] = None
    tokensUsed: Optional[int] = None
    cached: bool = False
    sessionId: str

class HealthResponse(BaseModel):
    status: str
    api_key_configured: bool
    openai_status: str
    redis_status: str
    database_status: str
    version: str
    timestamp: float

class StatsResponse(BaseModel):
    total_requests: int
    active_users: int
    cache_hit_rate: float
    avg_response_time: float
    total_tokens_used: int

# Configuration
RATE_LIMIT_REQUESTS = int(os.getenv("RATE_LIMIT_REQUESTS", "30"))
RATE_LIMIT_WINDOW = int(os.getenv("RATE_LIMIT_WINDOW", "60"))
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview")
OPENAI_MAX_TOKENS = int(os.getenv("OPENAI_MAX_TOKENS", "600"))
OPENAI_TEMPERATURE = float(os.getenv("OPENAI_TEMPERATURE", "0.7"))

def get_or_create_user(db: Session, user_id: str, ip_address: str) -> User:
    """Get existing user or create new one"""
    user = db.query(User).filter(User.user_id == user_id).first()
    if not user:
        user = User(user_id=user_id, ip_address=ip_address)
        db.add(user)
        db.commit()
        db.refresh(user)
    else:
        user.last_active = time.time()
        user.total_requests += 1
        db.commit()
    return user

def create_chat_session(db: Session, user_id: str) -> str:
    """Create new chat session"""
    session_id = str(uuid.uuid4())
    session = ChatSession(session_id=session_id, user_id=user_id)
    db.add(session)
    db.commit()
    return session_id

def save_chat_message(db: Session, session_id: str, user_id: str, message: str, 
                     response: str, tokens_used: int, response_time: float, 
                     tool_link: str = None, suggestions: List[str] = None):
    """Save chat message to database"""
    chat_msg = ChatMessage(
        session_id=session_id,
        user_id=user_id,
        message=message,
        response=response,
        sender="user",
        tokens_used=tokens_used,
        response_time=response_time,
        tool_link=tool_link,
        suggestions=suggestions or []
    )
    db.add(chat_msg)
    db.commit()

def extract_suggestions_and_tools(response_text: str) -> tuple:
    """Extract tool suggestions based on response content with comprehensive tool mapping"""
    suggestions = []
    tool_link = None
    
    response_lower = response_text.lower()
    
    # Comprehensive tool mapping - exact matches first
    tool_mappings = {
        # Core Tools
        'fd calculator': ('/tools?tool=FD Calculator', ["💰 FD Calculator", "🔄 RD Calculator", "🏛️ PPF Calculator"]),
        'sip calculator': ('/tools?tool=SIP Calculator', ["📈 SIP Calculator", "📊 Step-up SIP", "🎯 Goal Planner"]),
        'budget planner': ('/tools?tool=Budget Planner', ["📝 Budget Planner", "📋 50/30/20 Rule", "🚨 Emergency Fund"]),
        'tax saver': ('/tools?tool=Tax Saver', ["💸 Tax Saver", "🏠 HRA Calculator", "📄 Form 16 Tool"]),
        
        # Investment Tools
        'goal-based investment planner': ('/tools?tool=Goal-Based Investment Planner', ["🎯 Goal-Based Planner", "📈 SIP Calculator", "💎 Lumpsum Calculator"]),
        'step-up sip calculator': ('/tools?tool=Step-up SIP Calculator', ["📊 Step-up SIP", "📈 SIP Calculator", "🎯 Goal Planner"]),
        'lumpsum investment calculator': ('/tools?tool=Lumpsum Investment Calculator', ["💎 Lumpsum Calculator", "📈 SIP Calculator", "📊 CAGR Calculator"]),
        'rule of 72 calculator': ('/tools?tool=Rule of 72 Calculator', ["⚡ Rule of 72", "📈 SIP Calculator", "💎 Lumpsum Calculator"]),
        
        # Loan Tools
        'home loan emi calculator': ('/tools?tool=Home Loan EMI Calculator', ["🏠 Home Loan EMI", "✅ Loan Eligibility", "💰 Affordability Tool"]),
        'education loan emi calculator': ('/tools?tool=Education Loan EMI Calculator', ["🎓 Education Loan", "🏠 Home Loan EMI", "✅ Loan Eligibility"]),
        'car/bike loan emi calculator': ('/tools?tool=Car/Bike Loan EMI Calculator', ["🚗 Car/Bike Loan", "🏠 Home Loan EMI", "✅ Loan Eligibility"]),
        
        # Personal Planning Tools
        '50/30/20 rule budgeter': ('/tools?tool=50/30/20 Rule Budgeter', ["📋 50/30/20 Rule", "📝 Budget Planner", "🚨 Emergency Fund"]),
        'emergency fund calculator': ('/tools?tool=Emergency Fund Calculator', ["🚨 Emergency Fund", "📋 50/30/20 Rule", "📝 Budget Planner"]),
        'first salary planner': ('/tools?tool=First Salary Planner', ["💼 First Salary", "📋 50/30/20 Rule", "📝 Budget Planner"]),
        
        # Savings & Deposits
        'rd calculator': ('/tools?tool=RD Calculator', ["🔄 RD Calculator", "💰 FD Calculator", "🏛️ PPF Calculator"]),
        'ppf calculator': ('/tools?tool=PPF Calculator', ["🏛️ PPF Calculator", "💰 FD Calculator", "🔄 RD Calculator"]),
        
        # Insurance Tools
        'term life insurance estimator': ('/tools?tool=Term Life Insurance Estimator', ["🛡️ Term Insurance", "🏥 Health Insurance", "🚗 Vehicle Insurance"]),
        'health insurance premium estimator': ('/tools?tool=Health Insurance Premium Estimator', ["🏥 Health Insurance", "🛡️ Term Insurance", "🚗 Vehicle Insurance"]),
        
        # Tax Tools
        'hra exemption calculator': ('/tools?tool=HRA Exemption Calculator', ["🏠 HRA Calculator", "💸 Tax Saver", "📄 Form 16 Tool"]),
        'form 16 breakdown tool': ('/tools?tool=Form 16 Breakdown Tool', ["📄 Form 16 Tool", "🏠 HRA Calculator", "💸 Tax Saver"]),
        
        # Retirement Tools
        'retirement goal planner': ('/tools?tool=Retirement Goal Planner', ["👴 Retirement Planner", "🏦 NPS Calculator", "🏢 EPF Calculator"]),
        'nps return calculator': ('/tools?tool=NPS Return Calculator', ["🏦 NPS Calculator", "👴 Retirement Planner", "🏢 EPF Calculator"])
    }
    
    # Check for exact tool name matches first
    for tool_name, (link, tool_suggestions) in tool_mappings.items():
        if tool_name in response_lower:
            tool_link = link
            suggestions = tool_suggestions
            break
    
    # If no exact match, use keyword-based fallback
    if not tool_link:
        if any(keyword in response_lower for keyword in ['50/30/20', 'rule budgeter', '50 30 20']):
            tool_link = "/tools?tool=50/30/20 Rule Budgeter"
            suggestions = ["📋 50/30/20 Rule", "📝 Budget Planner", "🚨 Emergency Fund"]
        elif any(keyword in response_lower for keyword in ['emergency fund']):
            tool_link = "/tools?tool=Emergency Fund Calculator"
            suggestions = ["🚨 Emergency Fund", "📋 50/30/20 Rule", "📝 Budget Planner"]
        elif any(keyword in response_lower for keyword in ['goal', 'target', 'planning']) and 'investment' in response_lower:
            tool_link = "/tools?tool=Goal-Based Investment Planner"
            suggestions = ["🎯 Goal-Based Planner", "📈 SIP Calculator", "💎 Lumpsum Calculator"]
        elif any(keyword in response_lower for keyword in ['sip', 'systematic']):
            tool_link = "/tools?tool=SIP Calculator"
            suggestions = ["📈 SIP Calculator", "📊 Step-up SIP", "🎯 Goal Planner"]
        elif any(keyword in response_lower for keyword in ['fd', 'fixed deposit']):
            tool_link = "/tools?tool=FD Calculator"
            suggestions = ["💰 FD Calculator", "🔄 RD Calculator", "🏛️ PPF Calculator"]
        elif any(keyword in response_lower for keyword in ['budget', 'expense']):
            tool_link = "/tools?tool=Budget Planner"
            suggestions = ["📝 Budget Planner", "📋 50/30/20 Rule", "🚨 Emergency Fund"]
        elif any(keyword in response_lower for keyword in ['home loan', 'property']):
            tool_link = "/tools?tool=Home Loan EMI Calculator"
            suggestions = ["🏠 Home Loan EMI", "✅ Loan Eligibility", "💰 Affordability Tool"]
        elif any(keyword in response_lower for keyword in ['tax', '80c']):
            tool_link = "/tools?tool=Tax Saver"
            suggestions = ["💸 Tax Saver", "🏠 HRA Calculator", "📄 Form 16 Tool"]
        elif any(keyword in response_lower for keyword in ['rule of 72', 'doubling']):
            tool_link = "/tools?tool=Rule of 72 Calculator"
            suggestions = ["⚡ Rule of 72", "📈 SIP Calculator", "💎 Lumpsum Calculator"]
        else:
            tool_link = "/tools"
            suggestions = ["🔧 Explore Tools", "📚 Learn Finance", "💡 Get Advice"]
    
    return suggestions[:3], tool_link

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(
    request: ChatRequest, 
    http_request: Request,
    user_id: str = Depends(get_user_id_from_request),
    db: Session = Depends(get_db)
):
    start_time = time.time()
    
    # Rate limiting with Redis
    if not cache_service.check_rate_limit(user_id, RATE_LIMIT_REQUESTS):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please wait a moment before trying again."
        )
    
    # Get or create user
    get_or_create_user(db, user_id, http_request.client.host)
    
    # Create or get session
    session_id = request.sessionId or create_chat_session(db, user_id)
    
    try:
        # Check cache first
        context_key = f"{request.systemPrompt[:100]}:{request.toolsContext[:100]}"
        cached_response = cache_service.get_cached_response(request.message, context_key)
        
        if cached_response:
            log_cache_hit()
            logger.info("Cache hit", user_id=user_id, message_length=len(request.message))
            
            return ChatResponse(
                response=cached_response["response"],
                suggestions=cached_response.get("suggestions", []),
                toolLink=cached_response.get("toolLink"),
                success=True,
                responseTime=round(time.time() - start_time, 2),
                tokensUsed=0,
                cached=True,
                sessionId=session_id
            )
        
        log_cache_miss()
        
        # Build conversation messages
        messages = [
            {
                "role": "system",
                "content": f"{request.systemPrompt}\n\n{request.toolsContext}\n\nIMPORTANT: Always use emojis abundantly in your responses. Start every response with relevant emojis. Use markdown formatting with **bold** for headings and important terms. Make responses visually engaging and user-friendly."
            }
        ]
        
        # Add conversation history (last 6 messages for better context)
        for msg in request.conversationHistory[-6:]:
            if msg.get("text") and msg.get("sender"):
                messages.append({
                    "role": "user" if msg.get("sender") == "user" else "assistant",
                    "content": msg.get("text", "")[:400]  # Limit message length
                })
        
        # Add current message
        messages.append({
            "role": "user",
            "content": request.message
        })

        # Call OpenAI API with circuit breaker
        async def make_openai_call():
            client = openai_client.get_client()
            return client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=messages,
                max_tokens=OPENAI_MAX_TOKENS,
                temperature=OPENAI_TEMPERATURE,
                presence_penalty=0.1,
                frequency_penalty=0.1
            )
        
        response = await openai_circuit_breaker.call_openai(make_openai_call)
        
        bot_response = response.choices[0].message.content
        tokens_used = response.usage.total_tokens if response.usage else 0
        
        # Log successful OpenAI request
        log_openai_request("success", tokens_used)
        
        # Extract suggestions and tool links
        suggestions, tool_link = extract_suggestions_and_tools(bot_response)
        
        response_time = round(time.time() - start_time, 2)
        
        # Cache the response
        cache_data = {
            "response": bot_response,
            "suggestions": suggestions,
            "toolLink": tool_link
        }
        cache_service.cache_response(request.message, cache_data, context_key)
        
        # Save to database
        save_chat_message(
            db, session_id, user_id, request.message, bot_response,
            tokens_used, response_time, tool_link, suggestions
        )
        
        logger.info(
            "Chat response generated",
            user_id=user_id,
            session_id=session_id,
            tokens_used=tokens_used,
            response_time=response_time,
            cached=False
        )
        
        return ChatResponse(
            response=bot_response,
            suggestions=suggestions,
            toolLink=tool_link,
            success=True,
            responseTime=response_time,
            tokensUsed=tokens_used,
            cached=False,
            sessionId=session_id
        )

    except openai.RateLimitError:
        log_openai_request("rate_limit")
        raise HTTPException(
            status_code=429,
            detail="OpenAI API rate limit exceeded. Please try again in a moment."
        )
    except openai.AuthenticationError:
        log_openai_request("auth_error")
        raise HTTPException(
            status_code=500,
            detail="OpenAI API authentication failed. Please check configuration."
        )
    except openai.APIError as e:
        log_openai_request("api_error")
        logger.error("OpenAI API Error", error=str(e), user_id=user_id)
        raise HTTPException(
            status_code=500,
            detail="OpenAI service temporarily unavailable. Please try again."
        )
    except Exception as e:
        log_openai_request("unknown_error")
        logger.error("Unexpected error", error=str(e), user_id=user_id)
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred. Please try again."
        )

@app.get("/")
async def root():
    return {"message": "NEOC₹ED FinBot API is running!"}

@app.get("/health", response_model=HealthResponse)
async def health_check(db: Session = Depends(get_db)):
    api_key_configured = bool(os.getenv("OPENAI_API_KEY"))
    
    # Test OpenAI connection
    openai_status = "not_configured"
    if api_key_configured:
        try:
            client = openai_client.get_client()
            client.models.list()
            openai_status = "connected"
        except Exception:
            openai_status = "error"
    
    # Test Redis connection
    redis_status = "connected" if cache_service.redis_client else "disconnected"
    
    # Test database connection
    database_status = "connected"
    try:
        db.execute("SELECT 1")
    except Exception:
        database_status = "error"
    
    return HealthResponse(
        status="healthy",
        api_key_configured=api_key_configured,
        openai_status=openai_status,
        redis_status=redis_status,
        database_status=database_status,
        version="2.0.0",
        timestamp=time.time()
    )

@app.get("/api/stats", response_model=StatsResponse)
async def get_stats(db: Session = Depends(get_db)):
    """Get comprehensive API usage statistics"""
    
    # Database stats
    total_requests = db.query(ChatMessage).count()
    active_users = db.query(User).filter(User.is_active == True).count()
    
    # Calculate average response time
    avg_response_time = db.query(ChatMessage).filter(
        ChatMessage.response_time.isnot(None)
    ).with_entities(
        db.func.avg(ChatMessage.response_time)
    ).scalar() or 0.0
    
    # Total tokens used
    total_tokens = db.query(ChatMessage).filter(
        ChatMessage.tokens_used.isnot(None)
    ).with_entities(
        db.func.sum(ChatMessage.tokens_used)
    ).scalar() or 0
    
    # Cache hit rate (simplified calculation)
    cache_hit_rate = 0.75  # Placeholder - would need more sophisticated tracking
    
    return StatsResponse(
        total_requests=total_requests,
        active_users=active_users,
        cache_hit_rate=cache_hit_rate,
        avg_response_time=round(avg_response_time, 2),
        total_tokens_used=total_tokens
    )

# Additional endpoints
@app.get("/metrics")
async def get_metrics():
    """Prometheus metrics endpoint"""
    return await metrics_endpoint()

@app.post("/api/clear-cache")
async def clear_cache():
    """Clear response cache"""
    success = cache_service.clear_cache()
    return {"success": success, "message": "Cache cleared" if success else "Cache clear failed"}

@app.get("/api/sessions/{user_id}")
async def get_user_sessions(user_id: str, db: Session = Depends(get_db)):
    """Get user's chat sessions"""
    sessions = db.query(ChatSession).filter(
        ChatSession.user_id == user_id,
        ChatSession.is_active == True
    ).order_by(ChatSession.updated_at.desc()).limit(10).all()
    
    return {
        "sessions": [
            {
                "session_id": s.session_id,
                "created_at": s.created_at.isoformat(),
                "updated_at": s.updated_at.isoformat(),
                "message_count": s.message_count
            } for s in sessions
        ]
    }

if __name__ == "__main__":
    import uvicorn
    
    port = int(os.getenv("PORT", "8000"))
    host = os.getenv("HOST", "127.0.0.1")
    ssl_enabled = os.getenv("SSL_ENABLED", "false").lower() == "true"
    
    print(f"🚀 Starting NEOC₹ED FinBot API v2.0.0")
    print(f"📊 Monitoring: Enabled")
    print(f"🔄 Caching: {'Enabled' if cache_service.enabled else 'Disabled'}")
    print(f"🛡️ Circuit Breaker: Enabled")
    
    if ssl_enabled:
        ssl_keyfile = os.getenv("SSL_KEY_PATH", "ssl/key.pem")
        ssl_certfile = os.getenv("SSL_CERT_PATH", "ssl/cert.pem")
        
        if not os.path.exists(ssl_keyfile) or not os.path.exists(ssl_certfile):
            print("⚠️  SSL certificates not found. Run: python generate_ssl.py")
            print("🔄 Starting HTTP server instead...")
            uvicorn.run(app, host=host, port=port)
        else:
            print(f"🔒 Starting HTTPS server on https://{host}:{port}")
            uvicorn.run(
                app, 
                host=host, 
                port=port,
                ssl_keyfile=ssl_keyfile,
                ssl_certfile=ssl_certfile
            )
    else:
        print(f"🌐 Starting HTTP server on http://{host}:{port}")
        uvicorn.run(app, host=host, port=port)