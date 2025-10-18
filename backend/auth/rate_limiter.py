"""Rate Limiting with FastAPI-Limiter"""
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi import Request
import redis.asyncio as redis
import os

# Redis connection for rate limiting
redis_url = os.getenv("REDIS_URL", "redis://localhost:6379")

try:
    redis_client = redis.from_url(redis_url, encoding="utf-8", decode_responses=True)
except:
    redis_client = None

limiter = Limiter(
    key_func=get_remote_address,
    storage_uri=redis_url if redis_client else "memory://",
    default_limits=["100/minute"]
)

# Custom rate limit handler
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return {
        "error": "Rate limit exceeded",
        "detail": f"Rate limit exceeded: {exc.detail}",
        "retry_after": exc.retry_after
    }