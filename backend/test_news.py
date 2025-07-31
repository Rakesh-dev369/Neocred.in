#!/usr/bin/env python3
"""
Test script for the Finance News API
"""
import requests
import json
from datetime import datetime

API_BASE = "http://localhost:8001"

def test_news_endpoints():
    print("🧪 Testing Finance News API Endpoints")
    print("=" * 50)
    
    # Test 1: Fetch all news
    print("\n1. Testing /api/news endpoint...")
    try:
        response = requests.get(f"{API_BASE}/api/news")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success: Found {data['total']} articles")
            if data['data']:
                print(f"   Sample: {data['data'][0]['title'][:60]}...")
        else:
            print(f"❌ Failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 2: Search news
    print("\n2. Testing /api/news?q=RBI endpoint...")
    try:
        response = requests.get(f"{API_BASE}/api/news?q=RBI")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success: Found {data['total']} RBI-related articles")
        else:
            print(f"❌ Failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 3: Generate summary
    print("\n3. Testing /api/news/summary endpoint...")
    try:
        response = requests.post(f"{API_BASE}/api/news/summary?title=RBI Monetary Policy Update&content=Reserve Bank announces new policy measures")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success: Generated summary")
            print(f"   Summary: {data['summary'][:100]}...")
        else:
            print(f"❌ Failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 4: Daily digest
    print("\n4. Testing /api/news/daily-digest endpoint...")
    try:
        response = requests.get(f"{API_BASE}/api/news/daily-digest")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success: Generated daily digest")
            print(f"   Date: {data['digest']['date']}")
            print(f"   Top news count: {data['digest']['total_count']}")
        else:
            print(f"❌ Failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 5: News sources
    print("\n5. Testing /api/news/sources endpoint...")
    try:
        response = requests.get(f"{API_BASE}/api/news/sources")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Success: Found {len(data['sources'])} news sources")
        else:
            print(f"❌ Failed: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    print("\n" + "=" * 50)
    print("🎉 News API testing completed!")

if __name__ == "__main__":
    test_news_endpoints()