#!/usr/bin/env python3
"""
Test script to check thumbnail extraction
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from news_service import news_service

def test_thumbnails():
    print("Testing thumbnail extraction...")
    try:
        # Test fetching news with thumbnails
        news = news_service.fetch_all_news(limit=10)
        print(f"Fetched {len(news)} news items")
        
        if news:
            print("\nThumbnail status:")
            for i, item in enumerate(news[:5], 1):
                has_thumbnail = bool(item.get('thumbnail'))
                thumbnail_url = item.get('thumbnail', 'None')
                print(f"{i}. {item['title'][:60]}...")
                print(f"   Source: {item['source']}")
                print(f"   Has thumbnail: {has_thumbnail}")
                if has_thumbnail:
                    print(f"   Thumbnail URL: {thumbnail_url[:100]}...")
                print()
        else:
            print("No news items found")
            
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_thumbnails()