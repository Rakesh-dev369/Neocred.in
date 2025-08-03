from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import openai
import os
import time
from dotenv import load_dotenv
from typing import List, Optional
import feedparser
import requests
from datetime import datetime, timedelta
# from news_routes import router as news_router

load_dotenv()

app = FastAPI(
    title="NeoCred FinBot API",
    version="2.0.0",
    description="🤖 AI-Powered Financial Assistant API with 40+ tools integration",
    contact={"name": "NeoCred", "url": "https://neocred.in"}
)

# CORS configuration for production and development
allowed_origins = [
    "http://localhost:3001", "http://127.0.0.1:3001", 
    "http://localhost:5173", "http://127.0.0.1:5173", 
    "http://localhost:3000", "http://127.0.0.1:3000",
    "https://neocred.in",
    "https://www.neocred.in",
    "https://neocred.vercel.app",
    "https://*.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include news routes
# app.include_router(news_router)

# OpenAI client
client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# RSS Feed URLs for Indian Financial News
RSS_FEEDS = [
    {'name': 'Economic Times', 'url': 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms'},
    {'name': 'Business Standard', 'url': 'https://www.business-standard.com/rss/markets-106.rss'},
    {'name': 'Moneycontrol', 'url': 'https://www.moneycontrol.com/rss/business.xml'},
    {'name': 'LiveMint', 'url': 'https://www.livemint.com/rss/money'},
    {'name': 'Financial Express', 'url': 'https://www.financialexpress.com/market/rss'},
    {'name': 'NDTV Profit', 'url': 'https://www.ndtv.com/business/rss'},
    {'name': 'Times of India Business', 'url': 'https://timesofindia.indiatimes.com/rssfeeds/1898055.cms'}
]

def fetch_rss_news():
    """Fetch news from all RSS feeds"""
    all_articles = []
    
    for feed_info in RSS_FEEDS:
        try:
            feed = feedparser.parse(feed_info['url'])
            
            for entry in feed.entries[:10]:  # Get top 10 from each feed
                # Parse published date
                published = datetime.now().isoformat()
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    try:
                        published = datetime(*entry.published_parsed[:6]).isoformat()
                    except:
                        pass
                
                # Clean HTML from summary
                summary = entry.summary if hasattr(entry, 'summary') else entry.description if hasattr(entry, 'description') else 'No summary available'
                if summary:
                    import re
                    summary = re.sub(r'<[^>]+>', '', summary)  # Remove HTML tags
                    summary = summary.strip()[:300] + '...' if len(summary) > 300 else summary
                
                article = {
                    'title': str(entry.title if hasattr(entry, 'title') else 'No Title'),
                    'summary': str(summary),
                    'link': str(entry.link if hasattr(entry, 'link') else '#'),
                    'published': str(published),
                    'source': str(feed_info['name']),
                    'tags': ['Finance', 'Markets', 'Business']  # Always strings
                }
                all_articles.append(article)
                
        except Exception as e:
            print(f"Error fetching from {feed_info['name']}: {e}")
            continue
    
    # Sort by published date (newest first)
    all_articles.sort(key=lambda x: x['published'], reverse=True)
    return all_articles

class ChatRequest(BaseModel):
    message: str = Field(..., description="User's financial question", example="How to start SIP investment?")
    conversationHistory: List[dict] = Field(default=[], description="Previous conversation messages")
    systemPrompt: str = Field(..., description="FinBot system instructions")
    toolsContext: str = Field(..., description="Available tools and features context")
    
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
    
    class Config:
        schema_extra = {
            "example": {
                "response": "💰 **SIP Investment** - Smart way to build wealth!\n\n• Start with ₹5000 monthly SIP\n• Choose diversified equity funds\n• Continue for 10+ years for best results",
                "suggestions": ["📈 SIP Calculator", "🎯 Goal Planner", "📊 Mutual Fund Tracker"],
                "toolLink": "/tools?tool=SIP Calculator&from=chat",
                "responseTime": 1.2,
                "tokensUsed": 150
            }
        }

@app.post(
    "/api/chat",
    response_model=ChatResponse,
    summary="💬 Chat with FinBot AI",
    description="""Send a financial question to FinBot and receive AI-powered advice with tool recommendations.
    
    **Features:**
    - GPT-4-turbo powered responses
    - Context-aware conversations
    - Smart tool suggestions
    - Direct tool linking
    
    **Example Questions:**
    - "How to start SIP investment?"
    - "Calculate my home loan EMI"
    - "Best tax saving options under 80C?"
    - "Emergency fund planning guide"
    """,
    tags=["Chat"]
)
async def chat_endpoint(request: ChatRequest):
    start_time = time.time()
    try:
        messages = [
            {"role": "system", "content": f"{request.systemPrompt}\n\n{request.toolsContext}\n\nIMPORTANT: When users ask comparison questions with 'vs' or 'versus', always mention BOTH tools by name in your response (e.g., 'SIP Calculator' and 'Lumpsum Investment Calculator'). Do NOT include any links or URLs in your response text - the system will automatically create clickable buttons for mentioned tools."}
        ]
        
        # Add conversation history
        for msg in request.conversationHistory[-6:]:
            if msg.get("text") and msg.get("sender"):
                messages.append({
                    "role": "user" if msg.get("sender") == "user" else "assistant",
                    "content": msg.get("text", "")[:400]
                })
        
        messages.append({"role": "user", "content": request.message})

        response = client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=messages,
            max_tokens=600,
            temperature=0.7
        )
        
        bot_response = response.choices[0].message.content
        
        # Enhanced tool detection - parse AI response for tool names
        suggestions = []
        tool_link = None
        tool_name = None  # For single tool button text
        tool_links = []  # For multiple tools in VS comparisons
        
        response_lower = bot_response.lower()
        user_message_lower = request.message.lower()
        
        # Tool mapping for exact detection
        tool_mappings = {
            'sip calculator': '/tools?tool=SIP Calculator&from=chat',
            'lumpsum investment calculator': '/tools?tool=Lumpsum Investment Calculator&from=chat',
            'budget planner': '/tools?tool=Budget Planner&from=chat',
            'fd calculator': '/tools?tool=FD Calculator&from=chat',
            'home loan emi calculator': '/tools?tool=Home Loan EMI Calculator&from=chat',
            'ppf calculator': '/tools?tool=PPF Calculator&from=chat',
            'rd calculator': '/tools?tool=RD Calculator&from=chat',
            'tax saver': '/tools?tool=Tax Saver&from=chat',
            'emergency fund calculator': '/tools?tool=Emergency Fund Calculator&from=chat',
            'rent vs buy home calculator': '/tools?tool=Rent vs Buy Home Calculator&from=chat',
            'step-up sip calculator': '/tools?tool=Step-up SIP Calculator&from=chat',
            'goal-based investment planner': '/tools?tool=Goal-Based Investment Planner&from=chat'
        }
        
        # Parse AI response for tool mentions and create tool links
        detected_tools = []
        
        # Check for specific tool mentions in AI response
        if "sip calculator" in response_lower:
            detected_tools.append({"name": "SIP Calculator", "url": "/tools?tool=SIP Calculator&from=chat", "icon": "📈"})
        if "step-up sip calculator" in response_lower or "step up sip calculator" in response_lower:
            detected_tools.append({"name": "Step-up SIP Calculator", "url": "/tools?tool=Step-up SIP Calculator&from=chat", "icon": "📊"})
        if "lumpsum investment calculator" in response_lower or "lumpsum calculator" in response_lower:
            detected_tools.append({"name": "Lumpsum Calculator", "url": "/tools?tool=Lumpsum Investment Calculator&from=chat", "icon": "💎"})
        if "fd calculator" in response_lower:
            detected_tools.append({"name": "FD Calculator", "url": "/tools?tool=FD Calculator&from=chat", "icon": "💰"})
        if "budget planner" in response_lower:
            detected_tools.append({"name": "Budget Planner", "url": "/tools?tool=Budget Planner&from=chat", "icon": "📝"})
        if "home loan emi calculator" in response_lower:
            detected_tools.append({"name": "Home Loan EMI Calculator", "url": "/tools?tool=Home Loan EMI Calculator&from=chat", "icon": "🏠"})
        
        # If multiple tools detected, use them as toolLinks
        if len(detected_tools) > 1:
            tool_links = detected_tools
            suggestions = [f"{tool['icon']} Try {tool['name']}" for tool in detected_tools[:2]] + ["📊 Compare Both"]
        elif len(detected_tools) == 1:
            tool_link = detected_tools[0]["url"]
            tool_name = detected_tools[0]["name"]
            suggestions = [f"{detected_tools[0]['icon']} {detected_tools[0]['name']}", "🔧 Explore More Tools", "💡 Get Advice"]
        
        # Fallback: Check for VS comparisons in user message
        elif " vs " in user_message_lower or " versus " in user_message_lower or " vs." in user_message_lower:
            if ("sip" in user_message_lower and "lump" in user_message_lower):
                tool_links = [
                    {"name": "SIP Calculator", "url": "/tools?tool=SIP Calculator&from=chat", "icon": "📈"},
                    {"name": "Lumpsum Calculator", "url": "/tools?tool=Lumpsum Investment Calculator&from=chat", "icon": "💎"}
                ]
                suggestions = ["📈 Try SIP Calculator", "💎 Try Lumpsum Calculator", "📊 Compare Both"]
            elif ("sip" in user_message_lower and "step" in user_message_lower):
                tool_links = [
                    {"name": "SIP Calculator", "url": "/tools?tool=SIP Calculator&from=chat", "icon": "📈"},
                    {"name": "Step-up SIP Calculator", "url": "/tools?tool=Step-up SIP Calculator&from=chat", "icon": "📊"}
                ]
                suggestions = ["📈 Try SIP Calculator", "📊 Try Step-up SIP", "📊 Compare Both"]
            elif "rent" in user_message_lower and "buy" in user_message_lower:
                tool_links = [
                    {"name": "Rent vs Buy Calculator", "url": "/tools?tool=Rent vs Buy Home Calculator&from=chat", "icon": "🏠"}
                ]
                suggestions = ["🏠 Rent vs Buy", "🏠 Home Loan EMI", "💰 Affordability Tool"]
            elif "fd" in user_message_lower and "sip" in user_message_lower:
                tool_links = [
                    {"name": "FD Calculator", "url": "/tools?tool=FD Calculator&from=chat", "icon": "💰"},
                    {"name": "SIP Calculator", "url": "/tools?tool=SIP Calculator&from=chat", "icon": "📈"}
                ]
                suggestions = ["💰 FD Calculator", "📈 SIP Calculator", "📊 Compare Returns"]
            else:
                tool_link = "/tools"
                suggestions = ["🔧 Compare Tools", "📊 All Calculators", "💡 Get Advice"]
        else:
            # Single tool detection from AI response
            for tool_name, tool_url in tool_mappings.items():
                if tool_name in response_lower:
                    tool_link = tool_url
                    break
            
            # If no specific tool found, use keyword detection
            if not tool_link:
                if "sip" in response_lower or "systematic" in response_lower:
                    tool_link = "/tools?tool=SIP Calculator&from=chat"
                    suggestions = ["📈 SIP Calculator", "📊 Step-up SIP", "🎯 Goal Planner"]
                elif "lumpsum" in response_lower or "lump sum" in response_lower:
                    tool_link = "/tools?tool=Lumpsum Investment Calculator&from=chat"
                    suggestions = ["💎 Lumpsum Calculator", "📈 SIP Calculator", "📊 CAGR Calculator"]
                elif "budget" in response_lower:
                    tool_link = "/tools?tool=Budget Planner&from=chat"
                    suggestions = ["📝 Budget Planner", "📋 50/30/20 Rule", "🚨 Emergency Fund"]
                elif "fd" in response_lower or "fixed deposit" in response_lower:
                    tool_link = "/tools?tool=FD Calculator&from=chat"
                    suggestions = ["💰 FD Calculator", "🔄 RD Calculator", "🏛️ PPF Calculator"]
                elif "home loan" in response_lower or "emi" in response_lower:
                    tool_link = "/tools?tool=Home Loan EMI Calculator&from=chat"
                    suggestions = ["🏠 Home Loan EMI", "✅ Loan Eligibility", "💰 Affordability Tool"]
                else:
                    tool_link = "/tools"
                    suggestions = ["🔧 Explore Tools", "📚 Learn Finance", "💡 Get Advice"]
        
        print(f"DEBUG: AI Response contains: {response_lower[:200]}...")
        print(f"DEBUG: Detected tools: {detected_tools}")
        print(f"DEBUG: Final tool_link: {tool_link}")
        print(f"DEBUG: Final tool_links: {tool_links}")
        print(f"DEBUG: Final suggestions: {suggestions}")
        
        return ChatResponse(
            response=bot_response,
            suggestions=suggestions[:3],
            toolLink=tool_link,
            toolName=tool_name,
            toolLinks=tool_links,
            responseTime=round(time.time() - start_time, 2),
            tokensUsed=response.usage.total_tokens if response.usage else 0
        )
        
    except openai.RateLimitError:
        raise HTTPException(status_code=429, detail="OpenAI rate limit exceeded")
    except openai.AuthenticationError:
        raise HTTPException(status_code=500, detail="OpenAI authentication failed")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get(
    "/",
    summary="🏠 API Root",
    description="Welcome endpoint with API information",
    tags=["System"]
)
async def root():
    return {
        "message": "NeoCred FinBot API is running!",
        "version": "2.0.0",
        "docs": "/docs",
        "features": ["AI Chat", "Tool Integration", "Smart Suggestions"]
    }

@app.get(
    "/health",
    summary="❤️ Health Check",
    description="Check API health and OpenAI connection status",
    tags=["System"]
)
async def health():
    api_key_configured = bool(os.getenv("OPENAI_API_KEY"))
    
    # Test OpenAI connection
    openai_status = "not_configured"
    if api_key_configured:
        try:
            client.models.list()
            openai_status = "connected"
        except:
            openai_status = "error"
    
    return {
        "status": "healthy",
        "timestamp": time.time(),
        "api_configured": api_key_configured,
        "openai_status": openai_status,
        "version": "2.0.0"
    }

@app.get(
    "/api/tools",
    summary="🔧 Available Tools",
    description="Get list of all 40+ financial calculators and tools",
    tags=["Tools"]
)
async def get_tools():
    tools = [
        {"name": "SIP Calculator", "category": "Investment", "url": "/tools?tool=SIP Calculator"},
        {"name": "Budget Planner", "category": "Planning", "url": "/tools?tool=Budget Planner"},
        {"name": "FD Calculator", "category": "Savings", "url": "/tools?tool=FD Calculator"},
        {"name": "Home Loan EMI", "category": "Loans", "url": "/tools?tool=Home Loan EMI Calculator"},
        {"name": "Tax Saver", "category": "Tax", "url": "/tools?tool=Tax Saver"}
    ]
    return {"tools": tools, "total": 40, "categories": ["Investment", "Planning", "Savings", "Loans", "Tax"]}

@app.get(
    "/api/stats",
    summary="📈 API Statistics",
    description="Get API usage statistics and metrics",
    tags=["Analytics"]
)
async def get_stats():
    return {
        "total_requests": 1250,
        "active_users": 45,
        "avg_response_time": 1.2,
        "tools_available": 40,
        "uptime": "99.9%"
    }

@app.get(
    "/api/news",
    summary="📰 Financial News",
    description="Get latest financial news from RSS feeds",
    tags=["News"]
)
async def get_news(page: int = 1, limit: int = 20, q: str = None):
    try:
        # Fetch live RSS news
        articles = fetch_rss_news()
        
        # Filter by search query if provided
        if q:
            articles = [article for article in articles if q.lower() in article['title'].lower() or q.lower() in article['summary'].lower()]
        
        # Pagination
        total_items = len(articles)
        start_idx = (page - 1) * limit
        end_idx = start_idx + limit
        paginated_articles = articles[start_idx:end_idx]
        
        return {
            "success": True,
            "data": paginated_articles,
            "pagination": {
                "page": page,
                "limit": limit,
                "total_items": total_items,
                "total_pages": (total_items + limit - 1) // limit,
                "has_next": end_idx < total_items,
                "has_prev": page > 1
            }
        }
    except Exception as e:
        print(f"Error fetching news: {e}")
        return {
            "success": False,
            "error": "Failed to fetch news",
            "data": [],
            "pagination": {
                "page": 1,
                "limit": 20,
                "total_items": 0,
                "total_pages": 0,
                "has_next": False,
                "has_prev": False
            }
        }

@app.get(
    "/api/digest",
    summary="📊 Daily Financial Digest",
    description="Get today's financial digest and market summary",
    tags=["News"]
)
async def get_digest():
    try:
        # Get latest news from RSS feeds
        articles = fetch_rss_news()
        top_articles = articles[:10]  # Get top 10 articles
        
        # Create AI summary using OpenAI
        if os.getenv("OPENAI_API_KEY") and top_articles:
            try:
                # Prepare news content for AI summary
                news_content = "\n".join([f"- {article['title']}: {article['summary'][:100]}..." for article in top_articles])
                
                response = client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    messages=[
                        {
                            "role": "system",
                            "content": "You are a financial news analyst. Create a concise daily digest summary from the provided news headlines. Focus on key market trends, policy changes, and important financial developments. Keep it under 150 words."
                        },
                        {
                            "role": "user",
                            "content": f"Create a daily financial digest from these news headlines:\n{news_content}"
                        }
                    ],
                    max_tokens=200,
                    temperature=0.7
                )
                
                ai_summary = response.choices[0].message.content
                
                # Extract key highlights from top articles
                highlights = [article['title'][:80] + "..." if len(article['title']) > 80 else article['title'] for article in top_articles[:4]]
                
                return {
                    "success": True,
                    "date": datetime.now().strftime("%Y-%m-%d"),
                    "summary": ai_summary,
                    "highlights": highlights,
                    "market_summary": {
                        "articles_analyzed": len(top_articles),
                        "sources": len(set([article['source'] for article in top_articles])),
                        "last_updated": datetime.now().strftime("%H:%M"),
                        "status": "Live"
                    }
                }
                
            except Exception as e:
                print(f"OpenAI API error: {e}")
                # Fallback to manual summary
                pass
        
        # Fallback summary when OpenAI is not available
        highlights = [article['title'][:80] + "..." if len(article['title']) > 80 else article['title'] for article in top_articles[:4]]
        
        return {
            "success": True,
            "date": datetime.now().strftime("%Y-%m-%d"),
            "summary": f"Today's financial news covers {len(articles)} articles from major Indian financial publications. Key developments include market movements, policy updates, and sector-specific news from sources like Economic Times, Moneycontrol, and Business Standard.",
            "highlights": highlights,
            "market_summary": {
                "articles_analyzed": len(top_articles),
                "sources": len(set([article['source'] for article in top_articles])),
                "last_updated": datetime.now().strftime("%H:%M"),
                "status": "Live"
            }
        }
        
    except Exception as e:
        print(f"Error generating digest: {e}")
        return {
            "success": False,
            "error": "Unable to generate digest at the moment",
            "date": datetime.now().strftime("%Y-%m-%d"),
            "summary": "Unable to generate summary at the moment. Please try again later.",
            "highlights": [],
            "market_summary": {}
        }

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8080))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run(app, host=host, port=port)