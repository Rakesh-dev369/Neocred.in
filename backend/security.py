"""Enterprise Security & Rate Limiting"""
from fastapi import HTTPException, Request, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import bleach
import re
from typing import Optional
import logging
from config import settings

logger = logging.getLogger(__name__)

# Rate limiter setup
limiter = Limiter(key_func=get_remote_address)

# Security utilities
def sanitize_input(text: str, max_length: int = 1000) -> str:
    """Sanitize user input to prevent XSS and injection attacks"""
    if not text:
        return ""
    
    # Remove HTML tags and dangerous characters
    cleaned = bleach.clean(text, tags=[], strip=True)
    
    # Remove potentially dangerous patterns
    cleaned = re.sub(r'[<>"\']', '', cleaned)
    
    # Limit length
    return cleaned[:max_length].strip()

def validate_email(email: str) -> bool:
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def get_client_ip(request: Request) -> str:
    """Get client IP address with proxy support"""
    # Check for forwarded headers (common in production)
    forwarded_for = request.headers.get("X-Forwarded-For")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    
    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip
    
    return request.client.host if request.client else "unknown"

def validate_request_size(request: Request, max_size: int = 1024 * 1024):
    """Validate request size to prevent DoS attacks"""
    content_length = request.headers.get("content-length")
    if content_length and int(content_length) > max_size:
        raise HTTPException(
            status_code=413,
            detail="Request payload too large"
        )

# Security middleware
async def security_headers_middleware(request: Request, call_next):
    """Add security headers to all responses"""
    response = await call_next(request)
    
    # Security headers
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    
    # CORS headers for production
    if settings.environment == "production":
        response.headers["Access-Control-Allow-Origin"] = "https://neocred.in"
    
    return response

# Rate limiting decorators
def rate_limit_chat():
    """Rate limit for chat endpoints"""
    return limiter.limit(f"{settings.chat_rate_limit}/minute")

def rate_limit_api():
    """Rate limit for general API endpoints"""
    return limiter.limit(f"{settings.rate_limit_requests}/minute")

def rate_limit_news():
    """Rate limit for news endpoints"""
    return limiter.limit("200/minute")  # Higher limit for news

# Input validation classes
class SecureInput:
    """Secure input validation"""
    
    @staticmethod
    def validate_chat_message(message: str) -> str:
        """Validate and sanitize chat message"""
        if not message or not message.strip():
            raise HTTPException(
                status_code=400,
                detail="Message cannot be empty"
            )
        
        if len(message) > 1000:
            raise HTTPException(
                status_code=400,
                detail="Message too long (max 1000 characters)"
            )
        
        # Check for suspicious patterns
        suspicious_patterns = [
            r'<script',
            r'javascript:',
            r'data:text/html',
            r'vbscript:',
            r'onload=',
            r'onerror='
        ]
        
        message_lower = message.lower()
        for pattern in suspicious_patterns:
            if re.search(pattern, message_lower):
                raise HTTPException(
                    status_code=400,
                    detail="Invalid characters in message"
                )
        
        return sanitize_input(message)
    
    @staticmethod
    def validate_search_query(query: str) -> str:
        """Validate search query"""
        if not query:
            return ""
        
        if len(query) > 200:
            raise HTTPException(
                status_code=400,
                detail="Search query too long"
            )
        
        return sanitize_input(query, 200)

# Authentication (for future admin endpoints)
security = HTTPBearer(auto_error=False)

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Get current authenticated user (placeholder for future implementation)"""
    if not credentials:
        return None
    
    # TODO: Implement JWT token validation
    # For now, return None (no authentication required)
    return None

# IP-based blocking (simple implementation)
BLOCKED_IPS = set()
SUSPICIOUS_IPS = {}

def check_ip_reputation(ip: str) -> bool:
    """Check if IP is blocked or suspicious"""
    if ip in BLOCKED_IPS:
        raise HTTPException(
            status_code=403,
            detail="Access denied"
        )
    
    # Track suspicious activity
    if ip in SUSPICIOUS_IPS:
        SUSPICIOUS_IPS[ip] += 1
        if SUSPICIOUS_IPS[ip] > 100:  # Block after 100 suspicious requests
            BLOCKED_IPS.add(ip)
            logger.warning(f"IP {ip} blocked due to suspicious activity")
            raise HTTPException(
                status_code=403,
                detail="Access denied due to suspicious activity"
            )
    
    return True

def mark_suspicious_activity(ip: str):
    """Mark IP as suspicious"""
    SUSPICIOUS_IPS[ip] = SUSPICIOUS_IPS.get(ip, 0) + 1

# Content Security Policy
CSP_POLICY = (
    "default-src 'self'; "
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; "
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
    "font-src 'self' https://fonts.gstatic.com; "
    "img-src 'self' data: https:; "
    "connect-src 'self' https://api.neocred.in; "
    "frame-ancestors 'none';"
)

def add_csp_header(response):
    """Add Content Security Policy header"""
    response.headers["Content-Security-Policy"] = CSP_POLICY
    return response

# Error handling for security violations
class SecurityError(Exception):
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code

async def security_error_handler(request: Request, exc: SecurityError):
    """Handle security-related errors"""
    client_ip = get_client_ip(request)
    mark_suspicious_activity(client_ip)
    
    logger.warning(f"Security violation from {client_ip}: {exc.message}")
    
    raise HTTPException(
        status_code=exc.status_code,
        detail="Security violation detected"
    )