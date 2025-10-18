"""
SSL and Security Configuration for Production
Fly.io handles SSL automatically, this configures security headers
"""

from fastapi import FastAPI, Request, Response
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
import os

def configure_ssl_security(app: FastAPI):
    """Configure SSL and security for production deployment"""
    
    environment = os.getenv("ENVIRONMENT", "development")
    
    if environment == "production":
        # Force HTTPS redirect
        app.add_middleware(HTTPSRedirectMiddleware)
        
        # Trusted hosts for production
        app.add_middleware(
            TrustedHostMiddleware,
            allowed_hosts=[
                "neocred-backend.fly.dev",
                "*.neocred-backend.fly.dev",
                "neocred.in",
                "*.neocred.in"
            ]
        )
        
        # Security headers middleware
        @app.middleware("http")
        async def add_security_headers(request: Request, call_next):
            response = await call_next(request)
            
            # Security headers
            response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
            response.headers["X-Content-Type-Options"] = "nosniff"
            response.headers["X-Frame-Options"] = "DENY"
            response.headers["X-XSS-Protection"] = "1; mode=block"
            response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
            response.headers["Content-Security-Policy"] = "default-src 'self'"
            
            return response

# CORS configuration for production
PRODUCTION_CORS_ORIGINS = [
    "https://neocred.in",
    "https://www.neocred.in",
    "https://neocred.vercel.app",
    "https://*.vercel.app"  # For Vercel preview deployments
]

def get_cors_origins():
    """Get CORS origins based on environment"""
    environment = os.getenv("ENVIRONMENT", "development")
    
    if environment == "production":
        return PRODUCTION_CORS_ORIGINS
    elif environment == "staging":
        return PRODUCTION_CORS_ORIGINS + [
            "https://staging.neocred.in",
            "http://localhost:3000",
            "http://localhost:5173"
        ]
    else:
        return ["*"]  # Development - allow all