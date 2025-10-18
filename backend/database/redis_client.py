"""
Redis Client Configuration
Cache and session store
"""

import os
import json
import redis.asyncio as redis
from typing import Optional, Any
from datetime import timedelta

class RedisClient:
    """Redis client for caching and sessions"""
    
    def __init__(self):
        self.redis_url = os.getenv("REDIS_URL", "redis://localhost:6379")
        self.redis = None
    
    async def connect(self):
        """Connect to Redis"""
        self.redis = redis.from_url(self.redis_url, decode_responses=True)
        return self.redis
    
    async def disconnect(self):
        """Disconnect from Redis"""
        if self.redis:
            await self.redis.aclose()
    
    async def set(self, key: str, value: Any, expire: Optional[int] = None):
        """Set key-value pair with optional expiration"""
        if isinstance(value, (dict, list)):
            value = json.dumps(value)
        
        if expire:
            await self.redis.setex(key, expire, value)
        else:
            await self.redis.set(key, value)
    
    async def get(self, key: str) -> Optional[Any]:
        """Get value by key"""
        value = await self.redis.get(key)
        if value:
            try:
                return json.loads(value)
            except json.JSONDecodeError:
                return value
        return None
    
    async def delete(self, key: str):
        """Delete key"""
        await self.redis.delete(key)
    
    async def exists(self, key: str) -> bool:
        """Check if key exists"""
        return await self.redis.exists(key)
    
    # Cache methods
    async def cache_user_session(self, user_id: int, session_data: dict, expire: int = 3600):
        """Cache user session"""
        key = f"session:{user_id}"
        await self.set(key, session_data, expire)
    
    async def get_user_session(self, user_id: int) -> Optional[dict]:
        """Get user session"""
        key = f"session:{user_id}"
        return await self.get(key)
    
    async def cache_ml_prediction(self, user_id: int, model_name: str, prediction: dict, expire: int = 1800):
        """Cache ML model prediction"""
        key = f"ml_prediction:{user_id}:{model_name}"
        await self.set(key, prediction, expire)
    
    async def get_ml_prediction(self, user_id: int, model_name: str) -> Optional[dict]:
        """Get cached ML prediction"""
        key = f"ml_prediction:{user_id}:{model_name}"
        return await self.get(key)
    
    async def cache_financial_data(self, user_id: int, data: dict, expire: int = 900):
        """Cache financial data"""
        key = f"financial_data:{user_id}"
        await self.set(key, data, expire)
    
    async def get_financial_data(self, user_id: int) -> Optional[dict]:
        """Get cached financial data"""
        key = f"financial_data:{user_id}"
        return await self.get(key)

# Global Redis client instance
redis_client = RedisClient()