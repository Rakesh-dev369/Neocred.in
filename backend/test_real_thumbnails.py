#!/usr/bin/env python3
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import feedparser
import re

def test_single_feed():
    print("Testing real thumbnail extraction...")
    
    # Test with Economic Times feed
    feed_url = "https://economictimes.indiatimes.com/rssfeedstopstories.cms"
    print(f"Testing feed: {feed_url}")
    
    feed = feedparser.parse(feed_url)
    
    if feed.entries:
        entry = feed.entries[0]
        print(f"\nFirst entry: {entry.title[:60]}...")
        
        # Check all possible thumbnail sources
        print("\nChecking thumbnail sources:")
        
        # Media thumbnail
        if hasattr(entry, 'media_thumbnail') and entry.media_thumbnail:
            print(f"media_thumbnail: {entry.media_thumbnail}")
        
        # Media content
        if hasattr(entry, 'media_content') and entry.media_content:
            print(f"media_content: {entry.media_content}")
        
        # Links
        if hasattr(entry, 'links'):
            print(f"links: {[link for link in entry.links if 'image' in str(link)]}")
        
        # Summary/description content
        summary = entry.get('summary', '')
        description = entry.get('description', '')
        
        print(f"\nSummary length: {len(summary)}")
        print(f"Description length: {len(description)}")
        
        # Look for images in HTML
        html_content = summary + ' ' + description
        img_matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html_content, re.IGNORECASE)
        
        if img_matches:
            print(f"Found {len(img_matches)} images in HTML:")
            for i, img in enumerate(img_matches[:3]):
                print(f"  {i+1}. {img}")
        else:
            print("No images found in HTML content")
            
        # Show raw HTML snippet
        if html_content:
            print(f"\nHTML snippet: {html_content[:200]}...")

if __name__ == "__main__":
    test_single_feed()