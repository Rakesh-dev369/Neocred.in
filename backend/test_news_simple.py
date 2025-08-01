#!/usr/bin/env python3
"""
Simple test script to check if news service is working
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from news_service import news_service

def test_news_fetch():
    print("Testing news service...")
    try:
        # Test fetching news
        news = news_service.fetch_all_news(limit=5)
        print(f"Successfully fetched {len(news)} news items")
        
        if news:
            print("\nSample news items:")
            for i, item in enumerate(news[:3], 1):
                print(f"{i}. {item['title'][:80]}...")
                print(f"   Source: {item['source']}")
                print(f"   Tags: {', '.join(item['tags'])}")
                print()
        else:
            print("No news items found")
            
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_news_fetch()