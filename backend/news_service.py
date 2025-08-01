import feedparser
import openai
import os
import re
from datetime import datetime, timedelta
from typing import List, Dict, Optional
from urllib.parse import urlparse
import requests
from dotenv import load_dotenv

load_dotenv()

class NewsService:
    def __init__(self):
        self.openai_client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.rss_feeds = [
            {"url": "https://pib.gov.in/PressRelease/rssfeed.aspx", "source": "PIB"},
            {"url": "https://www.rbi.org.in/scripts/RSSView.aspx?head=Press%20Releases", "source": "RBI"},
            {"url": "https://www.moneycontrol.com/rss/MCtopnews.xml", "source": "MoneyControl"},
            {"url": "https://www.business-standard.com/rss/home_page_top_stories.rss", "source": "Business Standard"},
            {"url": "https://news.google.com/rss/search?q=finance+india", "source": "Google News"}
        ]
        
        self.finance_keywords = [
            'rbi', 'reserve bank', 'banking', 'finance', 'economy', 'market', 'stock',
            'mutual fund', 'sip', 'investment', 'loan', 'credit', 'debit', 'upi',
            'digital payment', 'fintech', 'insurance', 'tax', 'gst', 'budget',
            'inflation', 'interest rate', 'nifty', 'sensex', 'rupee', 'currency',
            'sebi', 'ipo', 'bond', 'fd', 'ppf', 'nps', 'epf', 'pension'
        ]

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

    def parse_feed(self, feed_url: str, source: str) -> List[Dict]:
        """Parse RSS feed and extract news items"""
        try:
            feed = feedparser.parse(feed_url)
            news_items = []
            
            for entry in feed.entries[:20]:  # Limit to 20 items per feed
                title = entry.get('title', '')
                summary = entry.get('summary', entry.get('description', ''))
                
                # Filter finance-related news
                if not self.is_finance_related(title, summary):
                    continue
                
                # Clean HTML tags from summary
                summary = re.sub(r'<[^>]+>', '', summary)
                summary = summary.strip()[:300]  # Limit summary length
                
                # Parse date
                published = entry.get('published', '')
                try:
                    pub_date = datetime.strptime(published, '%a, %d %b %Y %H:%M:%S %z')
                except:
                    try:
                        pub_date = datetime.strptime(published, '%a, %d %b %Y %H:%M:%S %Z')
                    except:
                        pub_date = datetime.now()
                
                # Extract thumbnail if available
                thumbnail = None
                if hasattr(entry, 'media_thumbnail'):
                    thumbnail = entry.media_thumbnail[0]['url'] if entry.media_thumbnail else None
                elif hasattr(entry, 'enclosures') and entry.enclosures:
                    for enclosure in entry.enclosures:
                        if enclosure.type and 'image' in enclosure.type:
                            thumbnail = enclosure.href
                            break
                
                news_item = {
                    'title': title,
                    'link': entry.get('link', ''),
                    'summary': summary,
                    'published': pub_date.isoformat(),
                    'source': source,
                    'tags': self.extract_tags(f"{title} {summary}"),
                    'thumbnail': thumbnail
                }
                
                news_items.append(news_item)
            
            return news_items
        except Exception as e:
            print(f"Error parsing feed {feed_url}: {e}")
            return []

    def fetch_all_news(self, query: Optional[str] = None) -> List[Dict]:
        """Fetch news from all RSS feeds"""
        all_news = []
        
        for feed_info in self.rss_feeds:
            news_items = self.parse_feed(feed_info['url'], feed_info['source'])
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
        
        return all_news[:50]  # Limit to 50 items

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