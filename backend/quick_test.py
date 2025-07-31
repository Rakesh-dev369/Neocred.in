from news_service import news_service

# Quick test
print("Testing news service...")
try:
    news = news_service.fetch_all_news()
    print(f"SUCCESS: Fetched {len(news)} articles")
    if news:
        print(f"Sample: {news[0]['title']}")
        print(f"Tags: {news[0]['tags']}")
except Exception as e:
    print(f"ERROR: {e}")