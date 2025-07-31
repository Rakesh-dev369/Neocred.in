import redis
import json
import hashlib
import os
from typing import Optional

class CacheService:
    def __init__(self):
        self.redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
        self.cache_ttl = int(os.getenv("CACHE_TTL", "300"))
        self.rate_limit_ttl = int(os.getenv("REDIS_RATE_LIMIT_TTL", "60"))
        self.enabled = os.getenv("CACHE_ENABLED", "true").lower() == "true"
        
        try:
            self.redis_client = redis.from_url(self.redis_url, decode_responses=True)
            self.redis_client.ping()
            print("✅ Redis connected successfully")
        except Exception as e:
            print(f"⚠️ Redis connection failed: {e}")
            self.redis_client = None
            self.enabled = False

    def _generate_cache_key(self, message: str, context: str = "") -> str:
        content = f"{message}:{context}"
        return f"chat_cache:{hashlib.md5(content.encode()).hexdigest()}"

    def get_cached_response(self, message: str, context: str = "") -> Optional[dict]:
        if not self.enabled or not self.redis_client:
            return None
        
        try:
            cache_key = self._generate_cache_key(message, context)
            cached_data = self.redis_client.get(cache_key)
            if cached_data:
                return json.loads(cached_data)
        except Exception as e:
            print(f"Cache get error: {e}")
        return None

    def cache_response(self, message: str, response: dict, context: str = "") -> bool:
        if not self.enabled or not self.redis_client:
            return False
        
        try:
            cache_key = self._generate_cache_key(message, context)
            self.redis_client.setex(cache_key, self.cache_ttl, json.dumps(response))
            return True
        except Exception as e:
            print(f"Cache set error: {e}")
            return False

    def check_rate_limit(self, user_id: str, max_requests: int = 30) -> bool:
        if not self.redis_client:
            return True
        
        try:
            key = f"rate_limit:{user_id}"
            current = self.redis_client.get(key)
            
            if current is None:
                self.redis_client.setex(key, self.rate_limit_ttl, 1)
                return True
            
            if int(current) >= max_requests:
                return False
            
            self.redis_client.incr(key)
            return True
        except Exception:
            return True

    def get_user_request_count(self, user_id: str) -> int:
        if not self.redis_client:
            return 0
        
        try:
            key = f"rate_limit:{user_id}"
            count = self.redis_client.get(key)
            return int(count) if count else 0
        except Exception:
            return 0

cache_service = CacheService()