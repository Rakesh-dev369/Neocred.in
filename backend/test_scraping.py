#!/usr/bin/env python3
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from news_service import news_service
    
    # Test scraping a real article
    test_urls = [
        "https://economictimes.indiatimes.com/markets/stocks/news/nse-reaches-rs-40-35-crore-settlement-with-sebi/articleshow/116736088.cms",
        "https://www.moneycontrol.com/news/business/markets/market-outlook-2025-12-key-themes-to-watch-out-for-12916871.html"
    ]
    
    print("Testing thumbnail scraping...")
    
    for url in test_urls:
        print(f"\nTesting: {url[:60]}...")
        thumbnail = news_service.scrape_article_thumbnail(url)
        if thumbnail:
            print(f"Found thumbnail: {thumbnail}")
        else:
            print("No thumbnail found")
            
except ImportError as e:
    print(f"Import error: {e}")
    print("Please install: pip install beautifulsoup4")
except Exception as e:
    print(f"Error: {e}")