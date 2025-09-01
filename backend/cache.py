"""Enterprise Caching System"""
import json
import aioredis
import asyncio
from typing import Optional, Any
from datetime import datetime, timedelta
import logging
from config import settings

logger = logging.getLogger(__name__)

class CacheManager:
    def __init__(self):
        self.redis_client = None
        self.local_cache = {}
        self.cache_enabled = settings.cache_enabled
    
    async def connect(self):
        """Initialize Redis connection"""
        if not self.cache_enabled:
            return
        
        try:
            self.redis_client = await aioredis.from_url(
                settings.redis_url,
                encoding="utf-8",
                decode_responses=True,
                socket_connect_timeout=5,
                socket_timeout=5
            )
            await self.redis_client.ping()
            logger.info("Redis connection established")
        except Exception as e:
            logger.warning(f"Redis connection failed, using local cache: {e}")
            self.redis_client = None
    
    async def disconnect(self):
        """Close Redis connection"""
        if self.redis_client:
            await self.redis_client.close()
    
    async def get(self, key: str) -> Optional[Any]:
        """Get value from cache"""
        if not self.cache_enabled:
            return None
        
        # Try Redis first
        if self.redis_client:
            try:
                value = await self.redis_client.get(key)
                if value:
                    return json.loads(value)
            except Exception as e:
                logger.warning(f"Redis get error: {e}")
        
        # Fallback to local cache
        cache_item = self.local_cache.get(key)
        if cache_item:
            if datetime.now() < cache_item['expires']:
                return cache_item['data']
            else:
                del self.local_cache[key]
        
        return None
    
    async def set(self, key: str, value: Any, ttl: int = 3600):
        """Set value in cache"""
        if not self.cache_enabled:
            return
        
        try:
            serialized_value = json.dumps(value, default=str)
        except Exception as e:
            logger.error(f"Cache serialization error: {e}")
            return
        
        # Try Redis first
        if self.redis_client:
            try:
                await self.redis_client.setex(key, ttl, serialized_value)
                return
            except Exception as e:
                logger.warning(f"Redis set error: {e}")
        
        # Fallback to local cache
        self.local_cache[key] = {
            'data': value,
            'expires': datetime.now() + timedelta(seconds=ttl)
        }
        
        # Clean up expired local cache items
        await self._cleanup_local_cache()
    
    async def delete(self, key: str):
        """Delete value from cache"""
        if not self.cache_enabled:
            return
        
        # Delete from Redis
        if self.redis_client:
            try:
                await self.redis_client.delete(key)
            except Exception as e:
                logger.warning(f"Redis delete error: {e}")
        
        # Delete from local cache
        self.local_cache.pop(key, None)
    
    async def clear_pattern(self, pattern: str):
        """Clear cache keys matching pattern"""
        if not self.cache_enabled:
            return
        
        if self.redis_client:
            try:
                keys = await self.redis_client.keys(pattern)
                if keys:
                    await self.redis_client.delete(*keys)
            except Exception as e:
                logger.warning(f"Redis clear pattern error: {e}")
        
        # Clear from local cache
        keys_to_delete = [key for key in self.local_cache.keys() if pattern.replace('*', '') in key]
        for key in keys_to_delete:
            del self.local_cache[key]
    
    async def _cleanup_local_cache(self):
        """Remove expired items from local cache"""
        now = datetime.now()
        expired_keys = [
            key for key, item in self.local_cache.items()
            if now >= item['expires']
        ]
        for key in expired_keys:
            del self.local_cache[key]
    
    async def get_stats(self) -> dict:
        """Get cache statistics"""
        stats = {
            "cache_enabled": self.cache_enabled,
            "redis_connected": self.redis_client is not None,
            "local_cache_size": len(self.local_cache)
        }
        
        if self.redis_client:
            try:
                info = await self.redis_client.info()
                stats.update({
                    "redis_memory_used": info.get("used_memory_human", "N/A"),
                    "redis_connected_clients": info.get("connected_clients", 0),
                    "redis_keyspace_hits": info.get("keyspace_hits", 0),
                    "redis_keyspace_misses": info.get("keyspace_misses", 0)
                })
            except Exception as e:
                logger.warning(f"Redis stats error: {e}")
        
        return stats

# Global cache instance
cache = CacheManager()

# Cache decorators
def cached(ttl: int = 3600, key_prefix: str = ""):
    """Decorator for caching function results"""
    def decorator(func):
        async def wrapper(*args, **kwargs):
            # Generate cache key
            cache_key = f"{key_prefix}:{func.__name__}:{hash(str(args) + str(kwargs))}"
            
            # Try to get from cache
            cached_result = await cache.get(cache_key)
            if cached_result is not None:
                return cached_result
            
            # Execute function and cache result
            result = await func(*args, **kwargs)
            await cache.set(cache_key, result, ttl)
            return result
        
        return wrapper
    return decorator

# Specific cache functions for common use cases
async def cache_news_articles(articles: list, ttl: int = None):
    """Cache news articles"""
    ttl = ttl or settings.news_cache_ttl
    await cache.set("news:articles", articles, ttl)

async def get_cached_news_articles() -> Optional[list]:
    """Get cached news articles"""
    return await cache.get("news:articles")

async def cache_digest(digest_data: dict, ttl: int = None):
    """Cache daily digest"""
    ttl = ttl or settings.digest_cache_ttl
    await cache.set("news:digest", digest_data, ttl)

async def get_cached_digest() -> Optional[dict]:
    """Get cached digest"""
    return await cache.get("news:digest")

async def cache_chat_response(user_message: str, response: dict, ttl: int = 1800):
    """Cache chat response for similar questions"""
    cache_key = f"chat:response:{hash(user_message.lower())}"
    await cache.set(cache_key, response, ttl)

async def get_cached_chat_response(user_message: str) -> Optional[dict]:
    """Get cached chat response"""
    cache_key = f"chat:response:{hash(user_message.lower())}"
    return await cache.get(cache_key)