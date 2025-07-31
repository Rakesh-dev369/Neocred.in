import time
import structlog
from prometheus_client import Counter, Histogram, Gauge, generate_latest
from fastapi import Request, Response
from typing import Callable
import os

# Configure structured logging
structlog.configure(
    processors=[
        structlog.stdlib.filter_by_level,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        structlog.stdlib.PositionalArgumentsFormatter(),
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.processors.format_exc_info,
        structlog.processors.UnicodeDecoder(),
        structlog.processors.JSONRenderer()
    ],
    context_class=dict,
    logger_factory=structlog.stdlib.LoggerFactory(),
    wrapper_class=structlog.stdlib.BoundLogger,
    cache_logger_on_first_use=True,
)

logger = structlog.get_logger()

# Prometheus metrics
REQUEST_COUNT = Counter('http_requests_total', 'Total HTTP requests', ['method', 'endpoint', 'status'])
REQUEST_DURATION = Histogram('http_request_duration_seconds', 'HTTP request duration')
ACTIVE_CONNECTIONS = Gauge('active_connections', 'Active connections')
OPENAI_REQUESTS = Counter('openai_requests_total', 'Total OpenAI API requests', ['status'])
OPENAI_TOKENS = Counter('openai_tokens_total', 'Total OpenAI tokens used')
CACHE_HITS = Counter('cache_hits_total', 'Cache hits')
CACHE_MISSES = Counter('cache_misses_total', 'Cache misses')

class MetricsMiddleware:
    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        start_time = time.time()
        
        async def send_wrapper(message):
            if message["type"] == "http.response.start":
                status_code = message["status"]
                duration = time.time() - start_time
                
                # Record metrics
                REQUEST_COUNT.labels(
                    method=scope["method"],
                    endpoint=scope["path"],
                    status=status_code
                ).inc()
                REQUEST_DURATION.observe(duration)
                
                # Log request
                logger.info(
                    "HTTP request",
                    method=scope["method"],
                    path=scope["path"],
                    status_code=status_code,
                    duration=duration,
                    client=scope.get("client", ["unknown", 0])[0]
                )
            
            await send(message)

        await self.app(scope, receive, send_wrapper)

def log_openai_request(status: str, tokens: int = 0):
    OPENAI_REQUESTS.labels(status=status).inc()
    if tokens > 0:
        OPENAI_TOKENS.inc(tokens)

def log_cache_hit():
    CACHE_HITS.inc()

def log_cache_miss():
    CACHE_MISSES.inc()

async def metrics_endpoint():
    return Response(generate_latest(), media_type="text/plain")