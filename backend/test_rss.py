import feedparser
import requests

# Test RSS feeds
RSS_FEEDS = [
    {'name': 'Economic Times', 'url': 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms'},
    {'name': 'Business Standard', 'url': 'https://www.business-standard.com/rss/markets-106.rss'},
    {'name': 'Moneycontrol', 'url': 'https://www.moneycontrol.com/rss/business.xml'},
]

print("Testing RSS feeds...")
for feed_info in RSS_FEEDS:
    try:
        print(f"\nTesting {feed_info['name']}...")
        feed = feedparser.parse(feed_info['url'])
        print(f"Status: {feed.status if hasattr(feed, 'status') else 'Unknown'}")
        print(f"Entries found: {len(feed.entries)}")
        if feed.entries:
            print(f"First entry: {feed.entries[0].title[:50]}...")
    except Exception as e:
        print(f"Error: {e}")