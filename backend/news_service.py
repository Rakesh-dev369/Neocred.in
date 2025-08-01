import feedparser
import openai
import os
import re
from datetime import datetime, timedelta
from typing import List, Dict, Optional
from urllib.parse import urlparse, urljoin
import requests
from dotenv import load_dotenv
# from bs4 import BeautifulSoup  # Not needed for current implementation

load_dotenv()

class NewsService:
    def __init__(self):
        self.openai_client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.rss_feeds = [
            {"url": "https://feeds.feedburner.com/ndtvprofit-latest", "source": "NDTV Profit", "has_images": True},
            {"url": "https://www.moneycontrol.com/rss/MCtopnews.xml", "source": "MoneyControl", "has_images": True},
            {"url": "https://economictimes.indiatimes.com/rssfeedstopstories.cms", "source": "Economic Times", "has_images": False},
            {"url": "https://news.google.com/rss/search?q=finance+india&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News", "has_images": False},
            {"url": "https://news.google.com/rss/search?q=RBI+Reserve+Bank+India&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News - RBI", "has_images": False},
            {"url": "https://news.google.com/rss/search?q=stock+market+india+NSE+BSE&hl=en-IN&gl=IN&ceid=IN:en", "source": "Google News - Markets", "has_images": False}
        ]
        
        self.finance_keywords = [
            'rbi', 'reserve bank', 'banking', 'finance', 'economy', 'market', 'stock',
            'mutual fund', 'sip', 'investment', 'loan', 'credit', 'debit', 'upi',
            'digital payment', 'fintech', 'insurance', 'tax', 'gst', 'budget',
            'inflation', 'interest rate', 'nifty', 'sensex', 'rupee', 'currency',
            'sebi', 'ipo', 'bond', 'fd', 'ppf', 'nps', 'epf', 'pension'
        ]

    def generate_content_thumbnail(self, title: str, source: str) -> str:
        """Generate a content-aware thumbnail using a reliable service"""
        # Use a more sophisticated thumbnail generation
        source_themes = {
            'Economic Times': {'bg': '1a365d', 'icon': 'ET'},
            'MoneyControl': {'bg': '553c9a', 'icon': 'MC'},
            'NDTV Profit': {'bg': 'c53030', 'icon': 'NDTV'},
            'Google News': {'bg': '4285f4', 'icon': 'NEWS'},
            'Google News - RBI': {'bg': '1976d2', 'icon': 'RBI'},
            'Google News - Markets': {'bg': '388e3c', 'icon': 'MARKET'},
            'Google News - MF': {'bg': '7b1fa2', 'icon': 'MF'},
            'Google News - Banking': {'bg': 'f57c00', 'icon': 'BANK'}
        }
        
        theme = source_themes.get(source, {'bg': '6b7280', 'icon': '📰'})
        
        # Create a more informative thumbnail with title preview
        title_preview = title[:40] + '...' if len(title) > 40 else title
        title_encoded = title_preview.replace(' ', '%20').replace('&', '%26')
        
        return f"https://via.placeholder.com/400x250/{theme['bg']}/ffffff?text={theme['icon']}+{source.replace(' ', '+')}"

    def extract_tags(self, text: str) -> List[str]:
        """Extract relevant finance tags from text"""
        text_lower = text.lower()
        tags = []
        
        tag_mapping = {
            'rbi': 'RBI', 'reserve bank': 'RBI', 'banking': 'Banking',
            'upi': 'UPI', 'digital payment': 'Digital Payment', 'fintech': 'FinTech',
            'mutual fund': 'Mutual Fund', 'sip': 'SIP', 'investment': 'Investment',
            'loan': 'Loan', 'credit': 'Credit', 'insurance': 'Insurance',
            'tax': 'Tax', 'gst': 'GST', 'budget': 'Budget', 'inflation': 'Inflation',
            'interest rate': 'Interest Rate', 'nifty': 'Nifty', 'sensex': 'Sensex',
            'rupee': 'Currency', 'sebi': 'SEBI', 'ipo': 'IPO', 'stock': 'Stock Market'
        }
        
        for keyword, tag in tag_mapping.items():
            if keyword in text_lower and tag not in tags:
                tags.append(tag)
        
        return tags[:5]  # Limit to 5 tags

    def is_finance_related(self, title: str, summary: str) -> bool:
        """Check if news is finance-related"""
        text = f"{title} {summary}".lower()
        return any(keyword in text for keyword in self.finance_keywords)

    def parse_feed(self, feed_url: str, source: str, has_images: bool = False) -> List[Dict]:
        """Parse RSS feed and extract news items"""
        try:
            print(f"Parsing feed: {source} - {feed_url}")
            feed = feedparser.parse(feed_url)
            
            if not feed.entries:
                print(f"No entries found in feed: {source}")
                return []
            
            print(f"Found {len(feed.entries)} entries in {source}")
            news_items = []
            
            for entry in feed.entries[:15]:  # Limit to 15 items per feed
                title = entry.get('title', '')
                summary = entry.get('summary', entry.get('description', ''))
                
                # For Google News, assume all are finance-related since we're using finance queries
                # For other sources, check if finance-related
                if 'google' not in feed_url.lower() and not self.is_finance_related(title, summary):
                    continue
                
                # Clean HTML tags from summary
                summary = re.sub(r'<[^>]+>', '', summary)
                summary = summary.strip()[:300]  # Limit summary length
                
                # Parse date with multiple formats
                published = entry.get('published', '')
                pub_date = datetime.now()
                
                if published:
                    date_formats = [
                        '%a, %d %b %Y %H:%M:%S %z',
                        '%a, %d %b %Y %H:%M:%S %Z',
                        '%Y-%m-%dT%H:%M:%SZ',
                        '%Y-%m-%dT%H:%M:%S%z',
                        '%a, %d %b %Y %H:%M:%S GMT'
                    ]
                    
                    for fmt in date_formats:
                        try:
                            pub_date = datetime.strptime(published, fmt)
                            break
                        except:
                            continue
                
                # Extract thumbnail if available
                thumbnail = None
                
                # Method 1: Media thumbnail
                if hasattr(entry, 'media_thumbnail') and entry.media_thumbnail:
                    thumbnail = entry.media_thumbnail[0].get('url')
                
                # Method 2: Media content
                if not thumbnail and hasattr(entry, 'media_content') and entry.media_content:
                    for media in entry.media_content:
                        if media.get('type', '').startswith('image'):
                            thumbnail = media.get('url')
                            break
                
                # Method 3: Enclosures
                if not thumbnail and hasattr(entry, 'enclosures') and entry.enclosures:
                    for enclosure in entry.enclosures:
                        if hasattr(enclosure, 'type') and enclosure.type and 'image' in enclosure.type:
                            thumbnail = enclosure.href
                            break
                
                # Method 4: Links with image type
                if not thumbnail and hasattr(entry, 'links'):
                    for link in entry.links:
                        if link.get('type', '').startswith('image'):
                            thumbnail = link.get('href')
                            break
                
                # Method 5: Extract from HTML content (summary/description)
                if not thumbnail:
                    html_content = entry.get('summary', '') + ' ' + entry.get('description', '')
                    if hasattr(entry, 'content') and entry.content:
                        for content_item in entry.content:
                            if hasattr(content_item, 'value'):
                                html_content += ' ' + content_item.value
                    
                    # Look for img tags
                    img_patterns = [
                        r'<img[^>]+src=["\']([^"\'>]+\.(jpg|jpeg|png|gif|webp))["\'][^>]*>',
                        r'<img[^>]+src=["\']([^"\'>]+)["\'][^>]*>',
                        r'https?://[^\s<>"]+\.(jpg|jpeg|png|gif|webp)',
                    ]
                    
                    for pattern in img_patterns:
                        img_match = re.search(pattern, html_content, re.IGNORECASE)
                        if img_match:
                            potential_url = img_match.group(1)
                            # Skip small icons and logos
                            if not any(skip in potential_url.lower() for skip in ['icon', 'logo', 'favicon', '1x1', '16x16', '32x32']):
                                thumbnail = potential_url
                                break
                    
                    if thumbnail:
                        break
                
                # Method 6: Generate better thumbnails using article content
                if not thumbnail:
                    thumbnail = self.generate_content_thumbnail(title, source)
                
                news_item = {
                    'title': title,
                    'link': entry.get('link', ''),
                    'summary': summary,
                    'published': pub_date.isoformat(),
                    'source': source,
                    'tags': self.extract_tags(f"{title} {summary}"),
                    'thumbnail': thumbnail  # Will be None if no real image found
                }
                
                news_items.append(news_item)
            
            print(f"Successfully parsed {len(news_items)} items from {source}")
            return news_items
        except Exception as e:
            print(f"Error parsing feed {feed_url}: {e}")
            return []

    def fetch_all_news(self, query: Optional[str] = None, limit: int = 50) -> List[Dict]:
        """Fetch news from all RSS feeds"""
        all_news = []
        
        for feed_info in self.rss_feeds:
            news_items = self.parse_feed(feed_info['url'], feed_info['source'], feed_info.get('has_images', False))
            all_news.extend(news_items)
        
        # Sort by published date (newest first)
        all_news.sort(key=lambda x: x['published'], reverse=True)
        
        # Filter by query if provided
        if query:
            query_lower = query.lower()
            all_news = [
                item for item in all_news
                if query_lower in item['title'].lower() or 
                   query_lower in item['summary'].lower() or
                   any(query_lower in tag.lower() for tag in item['tags'])
            ]
        
        return all_news[:limit]

    def generate_summary(self, title: str, content: str = "") -> str:
        """Generate AI summary for news article"""
        try:
            prompt = f"""
            Summarize this financial news in 2-3 sentences for Indian readers:
            
            Title: {title}
            Content: {content[:500]}
            
            Focus on:
            - Key financial impact
            - Relevance to common investors
            - Actionable insights if any
            
            Keep it concise and easy to understand.
            """
            
            response = self.openai_client.chat.completions.create(
                model=os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview"),
                messages=[{"role": "user", "content": prompt}],
                max_tokens=150,
                temperature=0.3
            )
            
            return response.choices[0].message.content.strip()
        except Exception as e:
            print(f"Error generating summary: {e}")
            return "Summary not available."

    def generate_daily_digest(self, news_items: List[Dict]) -> Dict:
        """Generate daily digest with comprehensive AI analysis"""
        try:
            # Get top 8 news from today
            today = datetime.now().date()
            today_news = [
                item for item in news_items
                if datetime.fromisoformat(item['published'].replace('Z', '+00:00')).date() == today
            ][:8]
            
            if not today_news:
                today_news = news_items[:8]  # Fallback to latest 8
            
            # Generate comprehensive digest summary
            news_details = []
            for i, item in enumerate(today_news, 1):
                news_details.append(f"{i}. **{item['title']}** - {item['source']}")
                if item.get('summary'):
                    news_details.append(f"   Summary: {item['summary'][:150]}...")
            
            digest_prompt = f"""
            Create a comprehensive daily financial digest for Indian investors based on these top finance news stories:
            
            {chr(10).join(news_details)}
            
            Please provide:
            
            ### Daily Financial Digest
            
            **Overview of Today's Key Financial Themes:**
            Write a 3-4 sentence overview highlighting the main financial themes, market trends, and important developments that Indian investors should know about today.
            
            **Headlines Briefs:**
            
            For each headline, provide:
            - **[Headline Title] - [Source]**
            - A concise 1-2 sentence explanation of what this means for Indian investors, focusing on practical impact and relevance.
            
            Keep the tone professional yet accessible, and focus on actionable insights for retail investors in India.
            """
            
            response = self.openai_client.chat.completions.create(
                model=os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview"),
                messages=[{"role": "user", "content": digest_prompt}],
                max_tokens=800,
                temperature=0.3
            )
            
            return {
                "date": today.isoformat(),
                "overview": response.choices[0].message.content.strip(),
                "top_news": today_news[:5],  # Still show top 5 in the UI
                "total_count": len(today_news)
            }
        except Exception as e:
            print(f"Error generating daily digest: {e}")
            return {
                "date": datetime.now().date().isoformat(),
                "overview": "### Daily Financial Digest\n\n**Overview of Today's Key Financial Themes:**\nUnable to generate AI digest at this time. Please check back later for comprehensive market analysis and news summaries.\n\n**Headlines Briefs:**\nPlease refer to the individual news items below for the latest financial updates.",
                "top_news": news_items[:5],
                "total_count": 5
            }

# Global instance
news_service = NewsService()