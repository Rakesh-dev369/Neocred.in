#!/usr/bin/env python3
"""
Simple script to start the server and test news endpoint
"""

import uvicorn
import threading
import time
import requests
import sys
import os

def test_news_api():
    """Test the news API endpoint"""
    time.sleep(2)  # Wait for server to start
    
    try:
        print("Testing news API endpoint...")
        response = requests.get("http://localhost:8001/api/news?limit=3")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✓ API working! Found {len(data.get('data', []))} news items")
            
            # Show sample news
            for i, item in enumerate(data.get('data', [])[:2], 1):
                print(f"{i}. {item['title'][:60]}...")
                print(f"   Source: {item['source']}")
                print(f"   Has thumbnail: {bool(item.get('thumbnail'))}")
                
        else:
            print(f"✗ API error: {response.status_code}")
            
    except Exception as e:
        print(f"✗ Test failed: {e}")

def start_server():
    """Start the FastAPI server"""
    print("Starting NeoCred backend server on http://localhost:8001")
    print("Press Ctrl+C to stop")
    
    # Start test in background
    test_thread = threading.Thread(target=test_news_api)
    test_thread.daemon = True
    test_thread.start()
    
    # Start server
    uvicorn.run("main_simple:app", host="127.0.0.1", port=8001, reload=False)

if __name__ == "__main__":
    start_server()