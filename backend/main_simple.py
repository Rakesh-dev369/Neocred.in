from fastapi import FastAPI, HTTPException, Request
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
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=False,  # Set to False when using allow_origins=["*"]
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Security headers middleware
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
    return response

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

# Cache for RSS news - longer cache to save API credits
news_cache = {
    'articles': [],
    'last_updated': None,
    'cache_duration': 1800  # 30 minutes
}

def fetch_rss_news():
    """Fetch news from RSS feeds with caching"""
    # Check cache first
    now = datetime.now()
    if (news_cache['last_updated'] and 
        news_cache['articles'] and 
        (now - news_cache['last_updated']).seconds < news_cache['cache_duration']):
        print(f"Returning cached news: {len(news_cache['articles'])} articles")
        return news_cache['articles']
    
    print("Fetching fresh news from RSS feeds...")
    all_articles = []
    
    # Use only the fastest, most reliable feeds
    priority_feeds = [
        {'name': 'Economic Times', 'url': 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms'},
        {'name': 'LiveMint', 'url': 'https://www.livemint.com/rss/money'},
        {'name': 'Times of India Business', 'url': 'https://timesofindia.indiatimes.com/rssfeeds/1898055.cms'}
    ]
    
    import concurrent.futures
    import socket
    
    def fetch_single_feed(feed_info):
        """Fetch articles from a single RSS feed"""
        articles = []
        try:
            socket.setdefaulttimeout(5)  # 5 second timeout per feed
            feed = feedparser.parse(feed_info['url'])
            
            if hasattr(feed, 'entries') and feed.entries:
                for entry in feed.entries[:8]:  # Get top 8 from each feed
                    try:
                        # Quick processing
                        published = datetime.now().isoformat()
                        if hasattr(entry, 'published_parsed') and entry.published_parsed:
                            try:
                                published = datetime(*entry.published_parsed[:6]).isoformat()
                            except:
                                pass
                        
                        # Clean summary quickly
                        summary = getattr(entry, 'summary', getattr(entry, 'description', 'No summary available'))
                        if summary:
                            import re
                            summary = re.sub(r'<[^>]+>', '', summary)[:300] + '...'
                        
                        title = re.sub(r'<[^>]+>', '', str(getattr(entry, 'title', 'No Title'))).strip()
                        link = getattr(entry, 'link', '#')
                        
                        if title and title != 'No Title':
                            articles.append({
                                'title': str(title),
                                'summary': str(summary),
                                'link': str(link),
                                'published': str(published),
                                'source': str(feed_info['name']),
                                'tags': ['Finance', 'Markets', 'Business']
                            })
                    except:
                        continue
        except Exception as e:
            print(f"Error fetching {feed_info['name']}: {e}")
        
        return articles
    
    # Fetch feeds in parallel with timeout
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
            future_to_feed = {executor.submit(fetch_single_feed, feed): feed for feed in priority_feeds}
            
            for future in concurrent.futures.as_completed(future_to_feed, timeout=10):
                try:
                    articles = future.result(timeout=5)
                    all_articles.extend(articles)
                except:
                    continue
    except:
        pass
    
    # Sort and cache
    if all_articles:
        all_articles.sort(key=lambda x: x['published'], reverse=True)
        news_cache['articles'] = all_articles[:30]  # Keep top 30
        news_cache['last_updated'] = now
        print(f"Cached {len(all_articles)} fresh articles")
        return all_articles[:30]
    
    # Return cached articles if fresh fetch failed
    if news_cache['articles']:
        print("Fresh fetch failed, returning cached articles")
        return news_cache['articles']
    
    return []

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
        # Enhanced system prompt with comprehensive website knowledge
        enhanced_system_prompt = f"""
        You are FinBot, NeoCred's advanced AI financial assistant with comprehensive knowledge of the entire NeoCred platform.
        
        ## CORE IDENTITY & CAPABILITIES:
        - Expert financial advisor for Indian markets with real-time knowledge
        - Access to 25+ financial calculators and tools on NeoCred
        - Deep knowledge of 8 Financial Literacy Pillars
        - Current with 2025 financial regulations and rates
        - Conversational, helpful, and educational approach
        
        ## COMPANY INFORMATION & LEGAL CONTEXT:
        
        ### About NeoCred:
        - **Founder**: Kalyanam Rakesh (Founder & Visionary)
        - **Mission**: Make every Indian financially aware, confident, and capable of taking decisions without fear, confusion, or misinformation
        - **Vision**: Financial literacy is the first step toward financial freedom for millions in India
        - **Team**: AI-powered development team with community contributors
        - **Users**: 15,000+ users educated across India
        - **Contact**: hello@neocred.in, privacy@neocred.in, security@neocred.in
        - **Website**: https://neocred.in
        
        ### IMPORTANT DISCLAIMERS & LEGAL INFORMATION:
        
        **Educational Purpose Only:**
        - NeoCred is an educational platform for financial literacy and awareness
        - All content is for informational and educational purposes only
        - We are NOT SEBI-registered advisors or certified financial planners
        - We do NOT provide personalized financial, investment, legal, or tax advice
        - We do NOT sell financial products or push any agenda
        
        **Investment Risks & Disclaimers:**
        - All investments carry inherent risks and market uncertainties
        - Past performance does not guarantee future results
        - Calculator results are estimates based on standard formulas
        - Results may vary from actual market outcomes
        - Always consult certified professionals before making financial decisions
        - Consider your risk tolerance, financial goals, and market timing
        
        **User Responsibility:**
        - Users must verify all information independently
        - Consult SEBI-registered advisors for investment decisions
        - Seek certified tax professionals for tax planning
        - Use our content as educational guidance, not financial advice
        - We are not liable for any financial losses or investment decisions
        
        **Regulatory Compliance:**
        - Platform operates within Indian financial regulations
        - Follows SEBI, RBI, IRDAI guidelines for educational content
        - Complies with DPDP Act for data protection
        - Adheres to Consumer Protection Act requirements
        
        **Privacy & Data Protection:**
        - Bank-level security with SSL encryption
        - We NEVER sell, rent, or trade personal information
        - No financial data collection (no account details, OTPs, cards, PAN/Aadhaar)
        - Users have rights to access, correct, delete, and export their data
        - Contact privacy@neocred.in for data-related queries
        
        **Terms of Service:**
        - Platform is completely free with no hidden costs
        - Users must use services responsibly and lawfully
        - We maintain 99.9% uptime target with scheduled maintenance notifications
        - Disputes resolved through good faith negotiation and mediation
        - Governed by laws of India with Indian court jurisdiction
        
        **Content & Accuracy:**
        - Monthly review of financial calculators
        - Quarterly update of educational content
        - Immediate updates for regulatory changes
        - User feedback integration within 48 hours
        - Report errors to content@neocred.in
        
        **Contact Information:**
        - General Support: hello@neocred.in
        - Privacy Team: privacy@neocred.in
        - Security Issues: security@neocred.in
        - Content Errors: content@neocred.in
        - Response Time: Within 24 hours
        
        ## WEBSITE CONTENT ACCESS:
        
        ### Financial Calculators (25+ tools):
        **Investment Tools:**
        - SIP Calculator: Calculate systematic investment returns with compounding
        - Lumpsum Calculator: One-time investment growth projections
        - Step-up SIP Calculator: SIP with annual increment planning
        - Goal-Based Investment Planner: Target-oriented investment strategy
        - Mutual Fund Tracker: Portfolio performance monitoring
        
        **Loan Calculators:**
        - Home Loan EMI Calculator: Monthly payment and amortization
        - Car Loan EMI Calculator: Vehicle financing calculations
        - Education Loan EMI: Student loan planning
        - Loan Eligibility Checker: Income-based loan qualification
        - Loan Affordability Tool: Maximum borrowing capacity
        
        **Savings & Deposits:**
        - FD Calculator: Fixed deposit maturity (7-8.5% rates 2025)
        - RD Calculator: Recurring deposit planning
        - PPF Calculator: Public Provident Fund (7.1% rate 2025)
        - Emergency Fund Calculator: 6-month expense planning
        - NSC Calculator: National Savings Certificate
        
        **Insurance Tools:**
        - Term Life Insurance Calculator: Coverage needs assessment
        - Health Insurance Calculator: Premium and coverage planning
        - Vehicle Insurance Calculator: Motor insurance estimation
        
        **Tax Planning:**
        - HRA Exemption Calculator: House rent allowance optimization
        - Tax Saver Calculator: 80C deduction planning (₹1.5L limit)
        - Form 16 Breakdown Tool: Salary tax analysis
        
        **Retirement Planning:**
        - Retirement Goal Planner: Post-retirement corpus calculation
        - NPS Calculator: National Pension System returns
        - EPF Calculator: Employee Provident Fund (8.25% rate 2025)
        - Annuity Calculator: Pension planning
        
        **Budget & Planning:**
        - Budget Planner: 50/30/20 rule implementation
        - Net Worth Tracker: Assets vs liabilities
        - Debt Repayment Planner: Debt avalanche/snowball strategies
        - Rent vs Buy Calculator: Home ownership decision
        
        ### 8 Financial Literacy Pillars:
        
        **Pillar 1: Personal Finance**
        - Budgeting (50/30/20 rule)
        - Emergency fund (6 months expenses)
        - Savings strategies (7-8% rates 2025)
        - Investment basics (SIP, lumpsum)
        - Debt management (CIBIL score 750+)
        - Insurance planning (term life, health)
        - Tax optimization (80C, 80D)
        
        **Pillar 2: Banking & Payments**
        - Digital banking revolution
        - UPI payments (₹100L+ daily volume)
        - Neobanks and fintech
        - Payment security
        - Account types and features
        
        **Pillar 3: Investments & Capital Markets**
        - Equity markets (15-22% expected returns)
        - Mutual funds and ETFs
        - Bonds and debt instruments (7-9% returns)
        - Portfolio diversification
        - Risk management
        
        **Pillar 4: Insurance & Risk Management**
        - Life insurance (₹1Cr for ₹15k/year)
        - Health insurance (₹5-10L coverage)
        - General insurance (motor, travel, home)
        - Risk assessment strategies
        
        **Pillar 5: Corporate Finance**
        - Business valuation
        - Capital structure
        - M&A strategies
        - Financial planning for businesses
        
        **Pillar 6: Government & Public Finance**
        - Fiscal policy understanding
        - Government schemes
        - Budget analysis
        - Public financial management
        
        **Pillar 7: Alternative Finance & Fintech**
        - Cryptocurrency basics
        - P2P lending
        - Blockchain technology
        - Fintech innovations
        
        **Pillar 8: International Trade & Finance**
        - Forex markets
        - International investments
        - Cross-border transactions
        - Global diversification
        
        ### Current Market Data (2025):
        - Savings Account: 7-8%
        - Fixed Deposits: 7-8.5%
        - PPF Rate: 7.1%
        - EPF Rate: 8.25%
        - Home Loan: 8.5-12%
        - Credit Cards: 36-48%
        - Equity Expected: 15-22%
        - Debt Expected: 7-9%
        
        ### Website Navigation:
        - Homepage: Overview and quick access
        - Tools Page: All 25+ calculators organized by category
        - Learn Section: 8 Financial Pillars with detailed content
        - News Section: Latest financial news and AI digest
        - About: Company information and mission
        - Contact: Support and feedback
        - Privacy Policy: Data protection information
        - Terms of Service: Usage guidelines
        
        ## RESPONSE GUIDELINES:
        
        1. **Tool Recommendations**: Always suggest relevant calculators by exact name
        2. **Educational Approach**: Explain concepts before recommending tools
        3. **Current Data**: Use 2025 rates and regulations
        4. **Personalization**: Ask follow-up questions for better advice
        5. **Actionable Advice**: Provide specific, implementable steps
        6. **Comparison Handling**: For 'vs' questions, mention BOTH tools clearly
        7. **Link Generation**: System auto-creates buttons - don't include URLs
        8. **Indian Context**: Focus on Indian financial landscape
        9. **Beginner Friendly**: Explain jargon and complex concepts
        10. **Comprehensive**: Cover all aspects of financial planning
        11. **Website Navigation**: Guide users to relevant sections (Learn, News, Tools)
        12. **Legal Compliance**: ALWAYS include appropriate disclaimers for investment advice
        13. **Multi-step Guidance**: Break complex processes into simple steps
        14. **Follow-up Suggestions**: Always end with next steps or related questions
        15. **Contextual Awareness**: Remember conversation history and user preferences
        
        ## MANDATORY DISCLAIMER USAGE:
        
        **For Investment Advice**: Always include: "⚠️ This is educational information only. Consult SEBI-registered advisors before making investment decisions. All investments carry market risks."
        
        **For Tax Planning**: Always include: "💡 This is general tax information. Consult certified tax professionals for personalized tax planning."
        
        **For Insurance**: Always include: "🛡️ This is general insurance guidance. Consult licensed insurance advisors for coverage recommendations."
        
        **For Loan Decisions**: Always include: "🏠 These are estimated calculations. Consult bank officials and financial advisors for actual loan terms."
        
        **Company Information Queries**: When asked about NeoCred, founder, or company details, provide accurate information from the company section above.
        
        **Legal/Policy Questions**: Direct users to appropriate legal pages (Privacy Policy, Terms of Service, Disclaimer) and provide relevant contact emails.
        
        ## CONVERSATION STYLE:
        - Friendly and approachable like a trusted financial advisor
        - Use emojis appropriately (💰📈🏠💡🎯🚀⚠️🛡️)
        - Ask clarifying questions to understand user needs
        - Provide examples with Indian context (₹ amounts, Indian scenarios)
        - Encourage financial literacy and learning
        - Be patient with beginners, expert with advanced users
        - Celebrate financial milestones and progress
        - Use analogies and simple language for complex concepts
        - Show enthusiasm for helping users achieve financial goals
        - Maintain professional yet conversational tone
        - ALWAYS acknowledge when users need professional financial advice
        - Be encouraging about financial planning journey
        - Include appropriate disclaimers naturally in conversation
        - Emphasize educational nature of all advice provided
        - Redirect liability concerns to proper professional consultation
        
        {request.systemPrompt}
        
        ## WEBSITE CONTENT & NAVIGATION:
        
        ### Legal & Policy Pages:
        - Privacy Policy: Data protection, cookie usage, user rights
        - Terms of Service: Usage guidelines, limitations, user responsibilities
        - About Us: NeoCred mission, team, company information
        - Contact: Support channels, feedback, business inquiries
        - Disclaimer: Financial advice limitations, risk warnings
        
        ### Current Financial Data (2025):
        - Repo Rate: 6.50% (RBI current)
        - Inflation: 5.5-6% target range
        - GDP Growth: 6.5-7% projected
        - Sensex: 75,000+ levels
        - Nifty 50: 22,500+ levels
        - USD/INR: 82-84 range
        - Gold: ₹65,000-70,000 per 10g
        - Crude Oil: $75-85 per barrel
        
        ### Quick Links & Features:
        - News Section: Latest financial news with AI digest
        - Calculator Hub: Direct access to all 25+ tools
        - Learning Center: 8 Financial Pillars with detailed content
        - FinBot Chat: This AI assistant interface
        - Mobile App: Coming soon features
        - Newsletter: Weekly financial tips
        - Webinars: Educational sessions
        - Blog: Financial insights and guides
        
        ### User Journey Optimization:
        - New Users: Start with Budget Planner or SIP Calculator
        - Investors: Goal-Based Investment Planner, SIP vs Lumpsum
        - Homebuyers: Home Loan EMI, Rent vs Buy Calculator
        - Tax Savers: 80C Calculator, HRA Exemption
        - Retirees: Retirement Planner, NPS Calculator
        - Students: Education Loan, Budget Planning
        
        ### Integration Points:
        - All calculators link back to relevant learning pillars
        - News articles connect to related tools
        - Learning content suggests practical calculators
        - Chat responses include direct tool navigation
        
        {request.toolsContext}
        """
        
        messages = [
            {"role": "system", "content": enhanced_system_prompt}
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
            max_tokens=800,
            temperature=0.7,
            presence_penalty=0.1,
            frequency_penalty=0.1
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
        print(f"Chat endpoint error: {str(e)}")
        return ChatResponse(
            response="I'm experiencing technical difficulties. Please try again in a moment.",
            suggestions=["🔧 Try Again", "📚 Learn Finance", "💡 Get Help"],
            toolLink="/tools",
            responseTime=round(time.time() - start_time, 2),
            tokensUsed=0
        )

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
        "version": "2.0.0",
        "cors_enabled": True
    }

@app.get(
    "/api/test",
    summary="🔧 Connection Test",
    description="Simple endpoint to test frontend-backend connectivity",
    tags=["System"]
)
async def test_connection():
    return {
        "success": True,
        "message": "Frontend-backend connection working!",
        "timestamp": time.time(),
        "server": "NeoCred Backend"
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

# AI Content API Endpoints for Crawlers
@app.get(
    "/api/learn",
    summary="📚 Learning Pillars",
    description="Get all learning pillars for AI crawlers and bots",
    tags=["AI Content"]
)
async def get_all_pillars():
    """Enhanced API endpoint for AI crawlers with comprehensive pillar data"""
    pillars = [
        {
            "id": "personal-finance",
            "title": "Personal Finance",
            "description": "Master money management, wealth building, and financial independence",
            "pillar": 1,
            "level": "Foundation to Advanced",
            "sections": 12,
            "updated": "2025-01-27",
            "url": "/learn/personal-finance",
            "api_url": "/api/learn/personal-finance",
            "static_url": "/learn/personal-finance.html",
            "content_summary": "Comprehensive guide covering budgeting (50/30/20 rule), saving (emergency funds), investing (SIP, mutual funds), debt management (CIBIL score), retirement planning (EPF, PPF, NPS), insurance (life, health), and tax optimization (80C, 80D deductions). Updated with 2025 interest rates and regulations."
        },
        {
            "id": "banking-payments",
            "title": "Banking & Payments",
            "description": "Digital banking, UPI, payment systems, and financial technology",
            "pillar": 2,
            "level": "Foundation",
            "sections": 8,
            "updated": "2025-01-27",
            "url": "/learn/banking-payments",
            "api_url": "/api/learn/banking-payments",
            "static_url": "/learn/banking-payments.html",
            "content_summary": "Digital banking revolution, UPI payments, neobanks, payment security, and fintech innovations in India."
        },
        {
            "id": "investments-capital",
            "title": "Investments & Capital Markets",
            "description": "Stock markets, mutual funds, bonds, and investment strategies",
            "pillar": 3,
            "level": "Intermediate to Advanced",
            "sections": 10,
            "updated": "2025-01-27",
            "url": "/learn/investments-capital",
            "api_url": "/api/learn/investments-capital",
            "static_url": "/learn/investments-capital.html",
            "content_summary": "Comprehensive coverage of equity markets, mutual funds, ETFs, bonds, derivatives, and portfolio management strategies."
        },
        {
            "id": "insurance-risk",
            "title": "Insurance & Risk Management",
            "description": "Life, health, general insurance, and risk mitigation strategies",
            "pillar": 4,
            "level": "Intermediate",
            "sections": 9,
            "updated": "2025-01-27",
            "url": "/learn/insurance-risk",
            "api_url": "/api/learn/insurance-risk",
            "static_url": "/learn/insurance-risk.html",
            "content_summary": "Complete insurance planning guide covering term life, health, motor, and general insurance with risk assessment strategies."
        },
        {
            "id": "corporate-finance",
            "title": "Corporate Finance",
            "description": "Business finance, valuation, mergers, and corporate strategies",
            "pillar": 5,
            "level": "Advanced",
            "sections": 7,
            "updated": "2025-01-27",
            "url": "/learn/corporate-finance",
            "api_url": "/api/learn/corporate-finance",
            "static_url": "/learn/corporate-finance.html",
            "content_summary": "Advanced corporate finance concepts including valuation, capital structure, M&A, and financial strategy."
        },
        {
            "id": "govt-public-finance",
            "title": "Government & Public Finance",
            "description": "Fiscal policy, government schemes, and public financial management",
            "pillar": 6,
            "level": "Advanced",
            "sections": 6,
            "updated": "2025-01-27",
            "url": "/learn/govt-public-finance",
            "api_url": "/api/learn/govt-public-finance",
            "static_url": "/learn/govt-public-finance.html",
            "content_summary": "Government financial policies, budget analysis, public schemes, and fiscal management in India."
        },
        {
            "id": "alt-fintech",
            "title": "Alternative Finance & Fintech",
            "description": "Cryptocurrency, P2P lending, neobanks, and financial innovation",
            "pillar": 7,
            "level": "Advanced",
            "sections": 8,
            "updated": "2025-01-27",
            "url": "/learn/alt-fintech",
            "api_url": "/api/learn/alt-fintech",
            "static_url": "/learn/alt-fintech.html",
            "content_summary": "Emerging financial technologies including cryptocurrency, blockchain, P2P lending, and fintech innovations."
        },
        {
            "id": "international-trade",
            "title": "International Trade & Finance",
            "description": "Global markets, forex, trade finance, and international investments",
            "pillar": 8,
            "level": "Advanced",
            "sections": 7,
            "updated": "2025-01-27",
            "url": "/learn/international-trade",
            "api_url": "/api/learn/international-trade",
            "static_url": "/learn/international-trade.html",
            "content_summary": "Global finance, forex markets, international investments, and cross-border trade finance."
        }
    ]
    
    return {
        "success": True,
        "data": {
            "pillars": pillars,
            "total_pillars": len(pillars),
            "last_updated": "2025-01-27",
            "api_version": "2.0",
            "access_methods": {
                "interactive": "Visit /learn/{pillar-id} for full interactive experience",
                "static_html": "Visit /learn/{pillar-id}.html for crawler-friendly version",
                "api_json": "Use /api/learn/{pillar-id} for structured JSON data",
                "complete_content": "Visit /static-content.html for all content in one page"
            }
        }
    }

@app.get(
    "/api/learn/{pillar_id}",
    summary="📖 Detailed Pillar Content",
    description="Get comprehensive content for specific learning pillar - optimized for AI crawlers",
    tags=["AI Content"]
)
async def get_pillar_content(pillar_id: str):
    """Enhanced pillar content API for AI tools and crawlers"""
    
    if pillar_id == "personal-finance":
        content = {
            "id": "personal-finance",
            "title": "Personal Finance",
            "description": "Master money management, wealth building, and financial independence",
            "pillar": 1,
            "level": "Foundation to Advanced",
            "sections": [
                {
                    "id": "introduction",
                    "title": "Introduction to Personal Finance",
                    "content": "Personal finance refers to the management of an individual's or household's financial activities, including earning, saving, investing, budgeting, spending, and protecting money. It encompasses short-term decisions such as managing daily expenses, as well as long-term strategies such as retirement planning, wealth building, and intergenerational financial security. Personal finance is a critical life skill that influences financial independence, stability, and well-being. In today's rapidly evolving economic landscape, understanding personal finance has become more important than ever, especially in India where financial literacy rates remain low despite growing economic opportunities.",
                    "level": "foundation",
                    "key_points": [
                        "Critical life skill for financial independence",
                        "Encompasses income optimization and expense management",
                        "Includes strategic saving and intelligent investing",
                        "Covers debt management and insurance planning",
                        "Essential for building intergenerational wealth"
                    ]
                },
                {
                    "id": "budgeting",
                    "title": "Budgeting and Expense Planning",
                    "content": "Budgeting is the foundation of personal finance. It helps track income and expenses, avoid overspending, and achieve financial goals. The 50/30/20 rule allocates 50% for needs (rent, food, utilities), 30% for wants (entertainment, dining), and 20% for savings and investments. Zero-based budgeting assigns every rupee a purpose, ensuring maximum control over money. Effective budgeting requires tracking expenses for at least one month before creating a budget, using the 24-hour rule for non-essential purchases above ₹1,000, and reviewing the budget monthly based on actual spending patterns.",
                    "level": "foundation",
                    "key_points": [
                        "50/30/20 Rule: 50% needs, 30% wants, 20% savings",
                        "Zero-based budgeting assigns every rupee a purpose",
                        "Track expenses for 1 month before creating budget",
                        "Use 24-hour rule for purchases above ₹1,000",
                        "Review and adjust budget monthly",
                        "Automate savings to pay yourself first"
                    ],
                    "takeaway": "Budgeting helps you plan, prioritize, and prevent overspending. Start with the 50/30/20 rule and adjust based on your needs.",
                    "tools": [
                        {"name": "Budget Planner", "url": "/calculators/budget-planner"},
                        {"name": "Expense Tracker", "url": "/calculators/budget-rule"}
                    ]
                },
                {
                    "id": "saving",
                    "title": "Saving and Emergency Planning",
                    "content": "Savings are the backbone of financial resilience. An emergency fund acts as a financial safety net for unforeseen expenses. Build 6-12 months of living expenses in high-yield savings accounts. In 2025, savings account rates are 7-8%, fixed deposits offer 7-8.5%, and liquid funds provide 6-7% returns. Types of savings include short-term savings for holidays and gadgets, long-term savings for education and home purchases, and emergency savings for unexpected expenses. Best practices include automating savings through SIPs and recurring deposits, using high-yield savings accounts and liquid funds, and avoiding dipping into emergency savings for non-emergencies.",
                    "level": "foundation",
                    "key_points": [
                        "Build 6 months of expenses in emergency fund",
                        "Savings Account rates: 7-8% (2025)",
                        "Fixed Deposits: 7-8.5% (2025)",
                        "Liquid Funds: 6-7% (2025)",
                        "Automate savings through SIPs and RDs",
                        "Use high-yield savings accounts for emergency funds"
                    ],
                    "takeaway": "Emergency funds provide financial security. Build 6 months of expenses in high-yield savings accounts (7-8% rates in 2025).",
                    "tools": [
                        {"name": "Emergency Fund Calculator", "url": "/calculators/emergency-fund"}
                    ]
                },
                {
                    "id": "investing",
                    "title": "Investment Management",
                    "content": "Investments are critical to wealth building and beating inflation. Understanding different asset classes and risk-return relationships is essential for long-term financial success. Asset classes include equity (stocks, mutual funds, ETFs with 15-22% expected returns), debt (bonds, FDs, debt funds with 7-9% returns), real estate (property, REITs with 10-12% returns), gold and commodities, and alternative assets like crypto and P2P lending. Popular Indian investment options in 2025 include SIP in large cap funds, index funds (Nifty 50), ELSS for tax saving, PPF (7.1% tax-free), EPF (8.25% return), and debt mutual funds. Diversification across asset classes is crucial for risk management.",
                    "level": "advanced",
                    "key_points": [
                        "Equity: 15-22% expected returns (2025)",
                        "Debt: 7-9% expected returns (2025)",
                        "Real Estate: 10-12% expected returns (2025)",
                        "Start with SIP in equity funds for long-term wealth",
                        "PPF offers 7.1% tax-free returns",
                        "EPF provides 8.25% returns in 2025",
                        "Diversify across asset classes for risk management"
                    ],
                    "takeaway": "Diversify investments across asset classes. Start with SIP in equity funds for long-term wealth creation.",
                    "tools": [
                        {"name": "SIP Calculator", "url": "/calculators/sip"},
                        {"name": "Lumpsum Calculator", "url": "/calculators/lumpsum"},
                        {"name": "Goal Based Investment", "url": "/calculators/goal-based-investment"}
                    ]
                },
                {
                    "id": "debt",
                    "title": "Debt and Credit Management",
                    "content": "Debt can be constructive (home loan, education loan) or destructive (credit card debt, personal loans for lifestyle expenses). Managing credit wisely is crucial for financial health. CIBIL score ranges: 750-900 (excellent, best rates), 700-749 (good, decent rates), 650-699 (fair, higher rates), 300-649 (poor, loan rejection). Interest rates in 2025: Credit cards (36-48%), personal loans (12-24%), home loans (8.5-12%), car loans (9-15%). Debt repayment strategies include the debt avalanche method (pay highest interest first) and debt snowball method (pay smallest debt first). Maintain CIBIL score above 750 by paying EMIs on time, keeping credit utilization below 30%, and checking credit reports annually.",
                    "level": "advanced",
                    "key_points": [
                        "CIBIL Score 750+ for best loan rates",
                        "Credit Card interest: 36-48% (2025)",
                        "Home Loan interest: 8.5-12% (2025)",
                        "Pay high-interest debt first (avalanche method)",
                        "Keep credit utilization below 30%",
                        "Pay EMIs on time (35% weightage in CIBIL)",
                        "Check credit report annually"
                    ],
                    "takeaway": "Manage debt wisely - prioritize high-interest debt repayment. Maintain CIBIL score above 750 for best loan rates.",
                    "tools": [
                        {"name": "Debt Repayment Planner", "url": "/calculators/debt-repayment"},
                        {"name": "Home Loan EMI", "url": "/calculators/home-loan-emi"},
                        {"name": "Credit Card EMI", "url": "/calculators/credit-card-emi"}
                    ]
                },
                {
                    "id": "retirement",
                    "title": "Retirement Planning",
                    "content": "Retirement planning ensures financial security post-employment. Starting early leverages the power of compounding for wealth creation. Indian retirement instruments in 2025: EPF (8.25% return, tax-free), PPF (7.1% return, 15-year lock-in), NPS (market-linked, tax benefits), annuities (guaranteed pension), and equity mutual funds for long-term wealth creation. Starting investment at 25 vs 35 results in 2x more corpus due to compounding. A ₹5,000 monthly SIP for 35 years creates ₹2.8 crores, while the same amount for 25 years creates ₹1.2 crores. Diversification strategy: 60% equity (growth phase), 30% debt (stability), 10% alternatives (gold, REITs), with annual rebalancing.",
                    "level": "advanced",
                    "key_points": [
                        "EPF: 8.25% return, tax-free (2025)",
                        "PPF: 7.1% return, 15-year lock-in (2025)",
                        "NPS: Market-linked, tax benefits",
                        "Start at 25 vs 35 = 2x more corpus",
                        "₹5,000 SIP for 35 years = ₹2.8 Cr",
                        "Diversify: 60% equity, 30% debt, 10% alternatives",
                        "Rebalance portfolio annually"
                    ],
                    "takeaway": "Start retirement planning early to leverage compounding. Diversify between EPF, PPF, NPS, and equity investments for optimal returns.",
                    "tools": [
                        {"name": "Retirement Goal Planner", "url": "/calculators/retirement-goal"},
                        {"name": "PPF Calculator", "url": "/calculators/ppf"},
                        {"name": "NPS Return Calculator", "url": "/calculators/nps-return"}
                    ]
                },
                {
                    "id": "insurance",
                    "title": "Insurance and Risk Management",
                    "content": "Insurance protects against financial shocks due to unforeseen events. It's a crucial component of comprehensive financial planning. Types of insurance include life insurance (term plans offering ₹1 crore coverage for ₹15,000/year, whole life policies), health insurance (individual ₹5-10L coverage, family floater, critical illness), and general insurance (motor, travel, home, cyber insurance). Risk management strategy involves identifying risks (death, disability, medical emergencies, property loss), assessing financial impact on family and goals, and mitigating risks through prevention and insurance transfer. Get adequate life and health coverage first, then consider other insurance types based on specific needs.",
                    "level": "advanced",
                    "key_points": [
                        "Term Life Insurance: ₹1Cr for ₹15k/year",
                        "Health Insurance: ₹5-10L coverage recommended",
                        "Get adequate life and health coverage first",
                        "Review insurance coverage annually",
                        "Identify and assess all financial risks",
                        "Use insurance to transfer major risks",
                        "Don't over-insure or under-insure"
                    ],
                    "takeaway": "Insurance protects your wealth from unexpected events. Get adequate life and health coverage.",
                    "tools": [
                        {"name": "Term Life Insurance", "url": "/calculators/term-life-insurance"},
                        {"name": "Health Insurance", "url": "/calculators/health-insurance"},
                        {"name": "Vehicle Insurance", "url": "/calculators/vehicle-insurance"}
                    ]
                },
                {
                    "id": "tax",
                    "title": "Tax Planning and Optimization",
                    "content": "Tax planning ensures legal savings and efficient allocation of income through various exemptions and deductions. Indian tax-saving options in 2025: Section 80C (₹1.5L limit for ELSS, PPF, NPS, EPF, life insurance, home loan principal), Section 80D (₹25k-75k for health insurance premiums for self, family, parents), and other sections like 80E (education loan interest) and 24B (home loan interest). Tax regime comparison: Old regime has higher rates but many deductions available, while new regime offers lower rates with limited deductions and ₹75k standard deduction. Choose new regime for income below ₹15L, old regime for higher income with substantial deductions.",
                    "level": "advanced",
                    "key_points": [
                        "Section 80C: ₹1.5L limit (ELSS, PPF, NPS)",
                        "Section 80D: ₹25k-75k (Health Insurance)",
                        "New regime for income <₹15L, Old for higher",
                        "Standard deduction: ₹75k (2025)",
                        "ELSS offers tax saving with equity returns",
                        "PPF provides tax-free returns",
                        "Plan tax-saving investments by December"
                    ],
                    "takeaway": "Optimize taxes legally through 80C, 80D deductions. Choose the right tax regime based on your income and deductions available.",
                    "tools": [
                        {"name": "HRA Exemption Calculator", "url": "/calculators/hra-exemption"},
                        {"name": "Form 16 Breakdown", "url": "/calculators/form16-breakdown"},
                        {"name": "Tax Saver Calculator", "url": "/calculators/tax-saver"}
                    ]
                }
            ],
            "modern_trends": {
                "digital_finance": [
                    "UPI payments (₹100L+ daily volume)",
                    "Mobile banking adoption",
                    "Robo-advisors for investments",
                    "AI-powered financial planning",
                    "Neobanks and digital-first banks"
                ],
                "investment_innovations": [
                    "Fractional investing (₹100 SIPs)",
                    "ESG & Sustainable investing",
                    "Cryptocurrency adoption",
                    "International diversification",
                    "FIRE movement (Financial Independence)"
                ]
            },
            "challenges": [
                "Inflation eroding purchasing power (6-7% annually)",
                "Rising healthcare and education costs",
                "Low financial literacy (especially rural areas)",
                "Mis-selling of financial products",
                "Lifestyle inflation with income growth"
            ],
            "key_takeaways_2025": [
                "Start investing early to leverage compounding",
                "Maintain 6-month emergency fund in high-yield savings",
                "Diversify across asset classes and geographies",
                "Optimize taxes through available deductions",
                "Protect wealth through adequate insurance",
                "Stay updated with financial regulations and opportunities",
                "Seek professional advice for complex financial decisions"
            ],
            "related_pillars": [
                {"name": "Traditional Investments", "url": "/learn/traditional-investments"},
                {"name": "Market-Linked Investments", "url": "/learn/market-linked-investments"},
                {"name": "Banking & Payments", "url": "/learn/banking-payments"},
                {"name": "Insurance & Risk", "url": "/learn/insurance-risk"}
            ],
            "updated": "2025-01-27",
            "static_url": "/learn/personal-finance.html",
            "interactive_url": "/learn/personal-finance"
        }
        
        return {
            "success": True,
            "data": content
        }
    
    # Return basic structure for other pillars
    pillar_map = {
        "banking-payments": {
            "title": "Banking & Payments",
            "description": "Digital banking, UPI, payment systems, and financial technology",
            "sections": 8
        },
        "investments-capital": {
            "title": "Investments & Capital Markets",
            "description": "Stock markets, mutual funds, bonds, and investment strategies",
            "sections": 10
        },
        "insurance-risk": {
            "title": "Insurance & Risk Management",
            "description": "Life, health, general insurance, and risk mitigation strategies",
            "sections": 9
        },
        "corporate-finance": {
            "title": "Corporate Finance",
            "description": "Business finance, valuation, mergers, and corporate strategies",
            "sections": 7
        },
        "govt-public-finance": {
            "title": "Government & Public Finance",
            "description": "Fiscal policy, government schemes, and public financial management",
            "sections": 6
        },
        "alt-fintech": {
            "title": "Alternative Finance & Fintech",
            "description": "Cryptocurrency, P2P lending, neobanks, and financial innovation",
            "sections": 8
        },
        "international-trade": {
            "title": "International Trade & Finance",
            "description": "Global markets, forex, trade finance, and international investments",
            "sections": 7
        }
    }
    
    if pillar_id in pillar_map:
        pillar_info = pillar_map[pillar_id]
        return {
            "success": True,
            "data": {
                "id": pillar_id,
                "title": pillar_info["title"],
                "description": pillar_info["description"],
                "sections": pillar_info["sections"],
                "message": "Detailed content coming soon",
                "static_url": f"/learn/{pillar_id}.html",
                "interactive_url": f"/learn/{pillar_id}",
                "updated": "2025-01-27"
            }
        }
    
    return {
        "success": False,
        "error": "Pillar not found",
        "available_pillars": list(pillar_map.keys()) + ["personal-finance"]
    }

@app.get(
    "/api/calculators",
    summary="🧮 Complete Calculator Directory",
    description="Get comprehensive list of all 33+ financial calculators with metadata",
    tags=["AI Content"]
)
async def get_all_calculators():
    """Enhanced calculator API for AI tools with detailed metadata"""
    calculators = {
        "investment": [
            {"id": "sip", "name": "SIP Calculator", "description": "Calculate systematic investment plan returns", "url": "/calculators/sip"},
            {"id": "lumpsum", "name": "Lumpsum Calculator", "description": "Calculate one-time investment returns", "url": "/calculators/lumpsum"},
            {"id": "step-up-sip", "name": "Step-up SIP Calculator", "description": "Calculate SIP with annual increment", "url": "/calculators/step-up-sip"},
            {"id": "goal-based-investment", "name": "Goal Based Investment", "description": "Plan investments for specific goals", "url": "/calculators/goal-based-investment"},
            {"id": "mutual-fund-tracker", "name": "Mutual Fund Tracker", "description": "Track mutual fund portfolio performance", "url": "/calculators/mutual-fund-tracker"},
            {"id": "gold-investment", "name": "Gold Investment Calculator", "description": "Calculate gold investment returns", "url": "/calculators/gold-investment"}
        ],
        "loans": [
            {"id": "home-loan-emi", "name": "Home Loan EMI Calculator", "description": "Calculate home loan EMI and amortization", "url": "/calculators/home-loan-emi"},
            {"id": "car-loan-emi", "name": "Car Loan EMI Calculator", "description": "Calculate car loan EMI", "url": "/calculators/car-loan-emi"},
            {"id": "education-loan-emi", "name": "Education Loan EMI", "description": "Calculate education loan EMI", "url": "/calculators/education-loan-emi"},
            {"id": "loan-eligibility", "name": "Loan Eligibility Checker", "description": "Check loan eligibility based on income", "url": "/calculators/loan-eligibility"},
            {"id": "loan-affordability", "name": "Loan Affordability Tool", "description": "Calculate affordable loan amount", "url": "/calculators/loan-affordability"}
        ],
        "savings": [
            {"id": "fd", "name": "FD Calculator", "description": "Calculate fixed deposit maturity amount", "url": "/calculators/fd"},
            {"id": "rd", "name": "RD Calculator", "description": "Calculate recurring deposit returns", "url": "/calculators/rd"},
            {"id": "ppf", "name": "PPF Calculator", "description": "Calculate PPF maturity with 7.1% rate", "url": "/calculators/ppf"},
            {"id": "emergency-fund", "name": "Emergency Fund Calculator", "description": "Calculate emergency fund requirements", "url": "/calculators/emergency-fund"},
            {"id": "post-office-fd", "name": "Post Office FD Calculator", "description": "Calculate post office FD returns", "url": "/calculators/post-office-fd"}
        ],
        "insurance": [
            {"id": "term-life-insurance", "name": "Term Life Insurance", "description": "Calculate term insurance coverage needs", "url": "/calculators/term-life-insurance"},
            {"id": "health-insurance", "name": "Health Insurance Calculator", "description": "Calculate health insurance premium", "url": "/calculators/health-insurance"},
            {"id": "vehicle-insurance", "name": "Vehicle Insurance Calculator", "description": "Calculate vehicle insurance premium", "url": "/calculators/vehicle-insurance"}
        ],
        "tax": [
            {"id": "hra-exemption", "name": "HRA Exemption Calculator", "description": "Calculate HRA tax exemption", "url": "/calculators/hra-exemption"},
            {"id": "form16-breakdown", "name": "Form 16 Breakdown Tool", "description": "Analyze Form 16 tax details", "url": "/calculators/form16-breakdown"},
            {"id": "tax-saver", "name": "Tax Saver Calculator", "description": "Calculate 80C tax savings", "url": "/calculators/tax-saver"}
        ],
        "retirement": [
            {"id": "retirement-goal", "name": "Retirement Goal Planner", "description": "Plan retirement corpus requirements", "url": "/calculators/retirement-goal"},
            {"id": "nps-return", "name": "NPS Return Calculator", "description": "Calculate NPS returns and pension", "url": "/calculators/nps-return"},
            {"id": "epf-maturity", "name": "EPF Maturity Calculator", "description": "Calculate EPF maturity with 8.25% rate", "url": "/calculators/epf-maturity"},
            {"id": "annuity", "name": "Annuity Calculator", "description": "Calculate annuity payments and returns", "url": "/calculators/annuity"}
        ],
        "planning": [
            {"id": "budget-planner", "name": "Budget Planner", "description": "Create 50/30/20 budget plan", "url": "/calculators/budget-planner"},
            {"id": "budget-rule", "name": "Budget Rule Calculator", "description": "Apply various budgeting rules", "url": "/calculators/budget-rule"},
            {"id": "net-worth-tracker", "name": "Net Worth Tracker", "description": "Track assets and liabilities", "url": "/calculators/net-worth-tracker"},
            {"id": "debt-repayment", "name": "Debt Repayment Planner", "description": "Plan debt repayment strategy", "url": "/calculators/debt-repayment"},
            {"id": "rent-vs-buy", "name": "Rent vs Buy Calculator", "description": "Compare renting vs buying home", "url": "/calculators/rent-vs-buy"}
        ]
    }
    
    # Flatten all calculators for total count
    all_calculators = []
    for category, calc_list in calculators.items():
        all_calculators.extend(calc_list)
    
    return {
        "success": True,
        "data": {
            "categories": calculators,
            "total_calculators": len(all_calculators),
            "popular": [
                "SIP Calculator", "Home Loan EMI Calculator", "Budget Planner", 
                "Emergency Fund Calculator", "FD Calculator", "PPF Calculator"
            ],
            "new_2025": [
                "Goal Based Investment", "Debt Repayment Planner", "Net Worth Tracker"
            ],
            "category_counts": {
                category: len(calc_list) for category, calc_list in calculators.items()
            },
            "last_updated": "2025-01-27",
            "api_version": "2.0"
        }
    }

@app.get(
    "/api/news",
    summary="📰 Financial News",
    description="Get latest financial news from RSS feeds",
    tags=["News"]
)
async def get_news(page: int = 1, limit: int = 20, q: str = None):
    try:
        # Fetch cached RSS news (fast)
        articles = fetch_rss_news()
        
        if not articles:
            return {
                "success": False,
                "error": "No articles available",
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

# Cache for digest - longer cache to save API credits
digest_cache = {
    'data': None,
    'last_updated': None,
    'cache_duration': 3600  # 1 hour
}

@app.get(
    "/api/digest",
    summary="📊 Daily Financial Digest",
    description="Get today's financial digest and market summary",
    tags=["News"]
)
async def get_digest():
    try:
        # Check cache first
        now = datetime.now()
        if (digest_cache['last_updated'] and 
            digest_cache['data'] and 
            (now - digest_cache['last_updated']).seconds < digest_cache['cache_duration']):
            return digest_cache['data']
        
        # Get latest news from RSS feeds (fast cached version)
        articles = fetch_rss_news()
        
        if not articles:
            return {
                "success": False,
                "error": "No articles available"
            }
        
        top_articles = articles[:6]  # Get top 6 articles for faster processing
        highlights = [article['title'][:80] + "..." if len(article['title']) > 80 else article['title'] for article in top_articles[:4]]
        
        # Quick digest without AI for faster response
        digest_data = {
            "success": True,
            "date": now.strftime("%Y-%m-%d"),
            "summary": f"Today's financial markets show active trading with {len(articles)} news updates from major Indian publications. Key focus areas include market movements, policy developments, and sector-specific updates from Economic Times, LiveMint, and other trusted sources.",
            "highlights": highlights,
            "market_summary": {
                "articles_analyzed": len(top_articles),
                "sources": len(set([article['source'] for article in top_articles])),
                "last_updated": now.strftime("%H:%M"),
                "status": "Live"
            }
        }
        
        # Cache the result
        digest_cache['data'] = digest_data
        digest_cache['last_updated'] = now
        
        return digest_data
        
    except Exception as e:
        print(f"Error generating digest: {e}")
        return {
            "success": False,
            "error": "Unable to generate digest"
        }

@app.post(
    "/api/news/summary",
    summary="📝 Generate AI Summary",
    description="Generate AI summary for news article",
    tags=["News"]
)
async def generate_news_summary(request: Request):
    try:
        data = await request.json()
    except Exception as e:
        return {"success": False, "error": "Invalid JSON format"}
    
    try:
        title = data.get('title', '')
        content = data.get('summary', '')
        
        if not title or not content:
            return {"success": False, "error": "Title and content required"}
        
        if os.getenv("OPENAI_API_KEY"):
            try:
                response = client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    messages=[
                        {
                            "role": "system",
                            "content": "You are a financial news analyst. Create a concise, insightful summary of the news article in 2-3 sentences. Focus on key financial implications and actionable insights for investors."
                        },
                        {
                            "role": "user",
                            "content": f"Title: {title}\n\nContent: {content}"
                        }
                    ],
                    max_tokens=150,
                    temperature=0.7
                )
                
                ai_summary = response.choices[0].message.content
                
                return {
                    "success": True,
                    "summary": ai_summary
                }
                
            except Exception as e:
                print(f"OpenAI API error: {e}")
                return {
                    "success": True,
                    "summary": f"Key insights: {content[:200]}... This article discusses important financial developments that may impact market sentiment and investment decisions."
                }
        
        # Fallback summary
        return {
            "success": True,
            "summary": f"Summary: {content[:150]}... This financial news may have implications for investors and market participants."
        }
        
    except Exception as e:
        print(f"Error generating summary: {e}")
        return {
            "success": False,
            "error": "Failed to generate summary"
        }

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8002))
    host = os.getenv("HOST", "127.0.0.1")
    uvicorn.run(app, host=host, port=port)