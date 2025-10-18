"""Monitoring Middleware"""
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
import time
from .prometheus import REQUEST_COUNT, REQUEST_DURATION, update_system_metrics
from .logging import log_request, log_error
from .sentry_config import capture_exception

class MonitoringMiddleware(BaseHTTPMiddleware):
    """Middleware for monitoring requests"""
    
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()
        method = request.method
        path = request.url.path
        
        try:
            response = await call_next(request)
            status_code = response.status_code
            
            # Calculate duration
            duration = time.time() - start_time
            
            # Update metrics
            REQUEST_COUNT.labels(method=method, endpoint=path, status=status_code).inc()
            REQUEST_DURATION.labels(method=method, endpoint=path).observe(duration)
            
            # Log request
            log_request(method, path, status_code, duration)
            
            # Update system metrics periodically
            if path == "/health":
                update_system_metrics()
            
            return response
            
        except Exception as e:
            # Log and track errors
            log_error(e, {"method": method, "path": path})
            capture_exception(e, {"method": method, "path": path})
            
            # Update error metrics
            REQUEST_COUNT.labels(method=method, endpoint=path, status=500).inc()
            
            raise e