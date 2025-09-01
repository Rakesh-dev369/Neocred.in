"""Enterprise News Service with Circuit Breaker"""
import asyncio
import aiohttp
import feedparser
from datetime import datetime, timedelta
from typing import List, Dict, Any, Optional
import logging
from circuitbreaker import circuit
from tenacity import retry, stop_after_attempt, wait_exponential
import json
import re
from config import settings
from cache import cache_news_articles, get_cached_news_articles
from database import get_db, save_news_article

logger = logging.getLogger(__name__)

# RSS Feed Configuration
RSS_FEEDS = [
    {
        'name': 'Economic Times',
        'url': 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms',
        'priority': 1,
        'timeout': 8
    },
    {
        'name': 'LiveMint',
        'url': 'https://www.livemint.com/rss/money',
        'priority': 1,
        'timeout': 8
    },
    {
        'name': 'Business Standard',
        'url': 'https://www.business-standard.com/rss/markets-106.rss',
        'priority': 2,
        'timeout': 10
    },
    {
        'name': 'Moneycontrol',
        'url': 'https://www.moneycontrol.com/rss/business.xml',
        'priority': 2,
        'timeout': 10
    },
    {
        'name': 'Financial Express',
        'url': 'https://www.financialexpress.com/market/rss',
        'priority': 3,
        'timeout': 12
    }
]

# Financial keywords for relevance scoring
FINANCIAL_KEYWORDS = [
    'market', 'stock', 'investment', 'economy', 'finance', 'banking',
    'mutual fund', 'sip', 'loan', 'insurance', 'tax', 'rbi', 'sebi',
    'nifty', 'sensex', 'rupee', 'inflation', 'gdp', 'fiscal',
    'monetary', 'policy', 'interest rate', 'bond', 'equity', 'debt',
    'ipo', 'dividend', 'earnings', 'revenue', 'profit', 'loss'
]

class NewsService:
    def __init__(self):
        self.session = None
        self.circuit_breaker_failures = {}
    
    async def __aenter__(self):
        """Async context manager entry"""
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=15),
            connector=aiohttp.TCPConnector(limit=10, limit_per_host=3)
        )
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        """Async context manager exit"""
        if self.session:
            await self.session.close()
    
    @circuit(failure_threshold=3, recovery_timeout=60, expected_exception=Exception)
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=8)
    )
    async def fetch_single_feed(self, feed_info: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Fetch articles from a single RSS feed with circuit breaker and retry"""
        articles = []
        
        try:
            if not self.session:
                raise Exception("HTTP session not initialized")
            
            logger.info(f"Fetching feed: {feed_info['name']}")
            
            async with self.session.get(
                feed_info['url'],
                timeout=aiohttp.ClientTimeout(total=feed_info['timeout'])
            ) as response:
                
                if response.status != 200:
                    raise Exception(f"HTTP {response.status} for {feed_info['name']}")
                
                content = await response.text()
                
                # Parse RSS feed
                feed = feedparser.parse(content)
                
                if not hasattr(feed, 'entries') or not feed.entries:
                    logger.warning(f"No entries found in {feed_info['name']}")
                    return []
                
                # Process entries
                for entry in feed.entries[:10]:  # Limit to 10 articles per feed
                    try:
                        article = await self.process_article(entry, feed_info['name'])
                        if article:
                            articles.append(article)
                    except Exception as e:
                        logger.warning(f"Error processing article from {feed_info['name']}: {e}")
                        continue
                
                logger.info(f"Successfully fetched {len(articles)} articles from {feed_info['name']}")
                return articles
                
        except asyncio.TimeoutError:
            logger.error(f"Timeout fetching {feed_info['name']}")
            raise Exception(f"Timeout fetching {feed_info['name']}")
        except Exception as e:
            logger.error(f"Error fetching {feed_info['name']}: {e}")
            raise
    
    async def process_article(self, entry: Any, source: str) -> Optional[Dict[str, Any]]:
        """Process individual RSS entry into article format"""
        try:
            # Extract title
            title = getattr(entry, 'title', 'No Title')
            if not title or title == 'No Title':
                return None
            
            # Clean title
            title = re.sub(r'<[^>]+>', '', str(title)).strip()
            if len(title) < 10:  # Skip very short titles
                return None
            
            # Extract summary
            summary = getattr(entry, 'summary', getattr(entry, 'description', ''))
            if summary:
                summary = re.sub(r'<[^>]+>', '', str(summary))
                summary = summary.strip()[:500] + '...' if len(summary) > 500 else summary
            else:
                summary = title[:200] + '...' if len(title) > 200 else title
            
            # Extract link
            link = getattr(entry, 'link', '#')
            if not link or link == '#':
                return None
            
            # Extract published date
            published = datetime.now()
            if hasattr(entry, 'published_parsed') and entry.published_parsed:
                try:
                    published = datetime(*entry.published_parsed[:6])
                except:
                    pass
            
            # Calculate relevance score
            relevance_score = self.calculate_relevance_score(title, summary)
            
            # Generate tags
            tags = self.generate_tags(title, summary)
            
            article = {
                'title': title,
                'summary': summary,
                'link': link,
                'source': source,
                'published': published.isoformat(),
                'relevance_score': relevance_score,
                'tags': tags,
                'processed_at': datetime.now().isoformat()
            }
            
            return article
            
        except Exception as e:
            logger.error(f"Error processing article: {e}")
            return None
    
    def calculate_relevance_score(self, title: str, summary: str) -> float:
        """Calculate relevance score based on financial keywords"""
        content = (title + ' ' + summary).lower()
        score = 0.0
        
        for keyword in FINANCIAL_KEYWORDS:
            if keyword in content:
                # Weight based on keyword importance
                if keyword in ['rbi', 'sebi', 'nifty', 'sensex']:
                    score += 2.0
                elif keyword in ['market', 'stock', 'investment', 'economy']:
                    score += 1.5
                else:
                    score += 1.0
        
        # Bonus for title keywords
        title_lower = title.lower()
        for keyword in FINANCIAL_KEYWORDS[:10]:  # Top keywords
            if keyword in title_lower:
                score += 0.5
        
        return min(score, 10.0)  # Cap at 10.0
    
    def generate_tags(self, title: str, summary: str) -> List[str]:
        """Generate relevant tags for the article"""
        content = (title + ' ' + summary).lower()
        tags = ['Finance', 'Business']
        
        # Category-based tags
        if any(word in content for word in ['market', 'stock', 'equity', 'nifty', 'sensex']):
            tags.append('Markets')
        
        if any(word in content for word in ['rbi', 'policy', 'rate', 'monetary']):
            tags.append('Policy')
        
        if any(word in content for word in ['bank', 'banking', 'loan', 'credit']):
            tags.append('Banking')
        
        if any(word in content for word in ['mutual fund', 'sip', 'investment']):
            tags.append('Investment')
        
        if any(word in content for word in ['tax', 'gst', 'income tax']):
            tags.append('Tax')
        
        if any(word in content for word in ['insurance', 'lic', 'health insurance']):
            tags.append('Insurance')
        
        if any(word in content for word in ['rupee', 'dollar', 'forex', 'currency']):
            tags.append('Currency')
        
        return list(set(tags))  # Remove duplicates
    
    async def fetch_all_feeds(self) -> List[Dict[str, Any]]:
        """Fetch articles from all RSS feeds concurrently"""
        all_articles = []
        
        # Group feeds by priority
        priority_groups = {}
        for feed in RSS_FEEDS:
            priority = feed['priority']
            if priority not in priority_groups:
                priority_groups[priority] = []
            priority_groups[priority].append(feed)
        
        # Fetch feeds by priority (higher priority first)
        for priority in sorted(priority_groups.keys()):
            feeds = priority_groups[priority]
            
            # Fetch feeds in this priority group concurrently
            tasks = [self.fetch_single_feed(feed) for feed in feeds]
            
            try:
                results = await asyncio.gather(*tasks, return_exceptions=True)
                
                for i, result in enumerate(results):
                    if isinstance(result, Exception):
                        logger.error(f"Feed {feeds[i]['name']} failed: {result}")
                    elif isinstance(result, list):
                        all_articles.extend(result)
                        
            except Exception as e:
                logger.error(f"Error fetching priority {priority} feeds: {e}")
        
        # Sort by relevance score and published date
        all_articles.sort(
            key=lambda x: (x['relevance_score'], x['published']),
            reverse=True
        )
        
        # Filter and limit articles
        filtered_articles = []
        seen_titles = set()
        
        for article in all_articles:
            # Remove duplicates based on title similarity
            title_words = set(article['title'].lower().split())
            is_duplicate = False
            
            for seen_title in seen_titles:
                seen_words = set(seen_title.lower().split())
                if len(title_words.intersection(seen_words)) / len(title_words.union(seen_words)) > 0.7:
                    is_duplicate = True
                    break
            
            if not is_duplicate and article['relevance_score'] > 0.5:
                filtered_articles.append(article)
                seen_titles.add(article['title'])
                
                if len(filtered_articles) >= 50:  # Limit to 50 articles
                    break
        
        logger.info(f"Fetched and filtered {len(filtered_articles)} articles from {len(RSS_FEEDS)} feeds")
        return filtered_articles
    
    async def save_articles_to_db(self, articles: List[Dict[str, Any]]):
        """Save articles to database"""
        try:
            db = next(get_db())
            saved_count = 0
            
            for article in articles:
                try:
                    published_date = datetime.fromisoformat(article['published'].replace('Z', '+00:00'))
                    
                    saved_article = save_news_article(
                        db=db,
                        title=article['title'],
                        summary=article['summary'],
                        link=article['link'],
                        source=article['source'],
                        published=published_date,
                        relevance_score=article['relevance_score'],
                        tags=json.dumps(article['tags'])
                    )
                    
                    if saved_article:
                        saved_count += 1
                        
                except Exception as e:
                    logger.warning(f"Error saving article to DB: {e}")
                    continue
            
            logger.info(f"Saved {saved_count} articles to database")
            
        except Exception as e:
            logger.error(f"Error saving articles to database: {e}")
        finally:
            if 'db' in locals():
                db.close()

# Global news service functions
async def fetch_latest_news(force_refresh: bool = False) -> List[Dict[str, Any]]:
    """Fetch latest news with caching"""
    # Check cache first
    if not force_refresh:
        cached_articles = await get_cached_news_articles()
        if cached_articles:
            logger.info(f"Returning {len(cached_articles)} cached articles")
            return cached_articles
    
    # Fetch fresh articles
    logger.info("Fetching fresh news articles")
    
    async with NewsService() as news_service:
        try:
            articles = await news_service.fetch_all_feeds()
            
            if articles:
                # Cache the articles
                await cache_news_articles(articles, settings.news_cache_ttl)
                
                # Save to database (async, don't wait)
                asyncio.create_task(news_service.save_articles_to_db(articles))
                
                logger.info(f"Successfully fetched {len(articles)} fresh articles")
                return articles
            else:
                logger.warning("No articles fetched, returning empty list")
                return []
                
        except Exception as e:
            logger.error(f"Error fetching news: {e}")
            
            # Try to return cached articles as fallback
            cached_articles = await get_cached_news_articles()
            if cached_articles:
                logger.info("Returning cached articles as fallback")
                return cached_articles
            
            return []

async def search_news(query: str, articles: List[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
    """Search news articles by query"""
    if not articles:
        articles = await fetch_latest_news()
    
    if not query:
        return articles
    
    query_lower = query.lower()
    matching_articles = []
    
    for article in articles:
        # Search in title and summary
        title_match = query_lower in article['title'].lower()
        summary_match = query_lower in article['summary'].lower()
        
        if title_match or summary_match:
            # Calculate match score
            match_score = 0
            if title_match:
                match_score += 2
            if summary_match:
                match_score += 1
            
            article_copy = article.copy()
            article_copy['match_score'] = match_score
            matching_articles.append(article_copy)
    
    # Sort by match score and relevance
    matching_articles.sort(
        key=lambda x: (x['match_score'], x['relevance_score']),
        reverse=True
    )
    
    return matching_articles

async def get_news_by_category(category: str, articles: List[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
    """Filter news articles by category"""
    if not articles:
        articles = await fetch_latest_news()
    
    if category == 'all':
        return articles
    
    category_keywords = {
        'markets': ['market', 'stock', 'equity', 'nifty', 'sensex', 'trading'],
        'banking': ['bank', 'banking', 'loan', 'credit', 'deposit'],
        'policy': ['rbi', 'sebi', 'policy', 'regulation', 'government'],
        'investment': ['investment', 'mutual fund', 'sip', 'portfolio'],
        'currency': ['rupee', 'dollar', 'forex', 'currency', 'exchange'],
        'tax': ['tax', 'gst', 'income tax', 'deduction']
    }
    
    keywords = category_keywords.get(category.lower(), [])
    if not keywords:
        return articles
    
    filtered_articles = []
    for article in articles:
        content = (article['title'] + ' ' + article['summary']).lower()
        if any(keyword in content for keyword in keywords):
            filtered_articles.append(article)
    
    return filtered_articles