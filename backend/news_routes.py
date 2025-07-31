from fastapi import APIRouter, HTTPException, Query
from typing import Optional, List, Dict
from news_service import news_service
import asyncio

router = APIRouter(prefix="/api", tags=["News"])

@router.get("/news")
def get_news(q: Optional[str] = Query(None, description="Search query for filtering news")):
    """
    Fetch finance-related news from multiple RSS sources
    
    - **q**: Optional search query to filter news by title, summary, or tags
    """
    try:
        news_items = news_service.fetch_all_news(query=q)
        
        return {
            "success": True,
            "data": news_items,
            "total": len(news_items),
            "query": q,
            "sources": ["PIB", "RBI", "MoneyControl", "Business Standard", "Google News"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch news: {str(e)}")

@router.post("/news/summary")
def get_news_summary(
    title: str = Query(..., description="News article title"),
    content: Optional[str] = Query("", description="Article content (optional)")
):
    """
    Generate AI-powered summary for a news article
    
    - **title**: News article title (required)
    - **content**: Article content for better summary (optional)
    """
    try:
        if not title.strip():
            raise HTTPException(status_code=400, detail="Title is required")
        
        summary = news_service.generate_summary(title, content)
        
        return {
            "success": True,
            "title": title,
            "summary": summary,
            "generated_at": datetime.now().isoformat()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate summary: {str(e)}")

@router.get("/news/daily-digest")
def get_daily_digest():
    """
    Get today's financial news digest with AI-generated overview
    
    Returns top 5 headlines with summaries and key themes
    """
    try:
        # First fetch all news
        all_news = news_service.fetch_all_news()
        
        # Generate daily digest
        digest = news_service.generate_daily_digest(all_news)
        
        return {
            "success": True,
            "digest": digest
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate daily digest: {str(e)}")

@router.get("/news/sources")
def get_news_sources():
    """Get list of available news sources"""
    return {
        "success": True,
        "sources": [
            {"name": "PIB", "description": "Press Information Bureau", "type": "Government"},
            {"name": "RBI", "description": "Reserve Bank of India", "type": "Central Bank"},
            {"name": "MoneyControl", "description": "Financial News Portal", "type": "Media"},
            {"name": "Business Standard", "description": "Business Newspaper", "type": "Media"},
            {"name": "Google News", "description": "Aggregated Finance News", "type": "Aggregator"}
        ]
    }

@router.get("/news/tags")
def get_available_tags():
    """Get list of available news tags/categories"""
    return {
        "success": True,
        "tags": [
            "RBI", "Banking", "UPI", "Digital Payment", "FinTech",
            "Mutual Fund", "SIP", "Investment", "Loan", "Credit",
            "Insurance", "Tax", "GST", "Budget", "Inflation",
            "Interest Rate", "Nifty", "Sensex", "Currency", "SEBI",
            "IPO", "Stock Market"
        ]
    }