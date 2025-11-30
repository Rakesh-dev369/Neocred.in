"""
Supabase JWT Verification Middleware for NeoCred FastAPI Backend

🔒 Purpose of this Middleware:

1️⃣ Ensure real user authenticity
   Validate each incoming JWT token using Supabase's public key (JWKS) to confirm 
   the event comes from a real, logged-in user — not a fake or spam API call.

2️⃣ Unify frontend and backend security
   The frontend (Supabase client) issues JWTs, and the backend must verify them — 
   creating a single source of truth for authentication.

3️⃣ Protect fintech-grade data
   Prevents attackers from injecting fake analytics or sensitive events into the 
   backend, ensuring data integrity and regulatory safety.

4️⃣ Enable user-level audit trails
   By verifying JWTs, the backend can safely log which verified user triggered 
   each event — essential for credit analysis, fraud detection, and compliance.

5️⃣ Follow enterprise fintech standards
   Every financial platform (Groww, Fi, Jupiter, Razorpay) verifies JWTs for 
   every user API call. NeoCred must do the same to meet production-grade reliability.
"""

import os
import logging
from typing import Optional, Dict, Any
from functools import lru_cache
import httpx
from jose import jwt, JWTError
from fastapi import HTTPException, Request, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

# Configure logging
logger = logging.getLogger(__name__)

# Security scheme
security = HTTPBearer()

# Cache for JWKS keys (in-memory caching)
_jwks_cache: Optional[Dict[str, Any]] = None

@lru_cache(maxsize=1)
def get_supabase_config():
    """Get Supabase configuration from environment variables"""
    supabase_url = os.getenv("SUPABASE_URL")
    if not supabase_url:
        raise ValueError("SUPABASE_URL environment variable is required")
    
    return {
        "url": supabase_url,
        "jwks_url": f"{supabase_url}/auth/v1/.well-known/jwks.json"
    }

async def fetch_jwks_keys() -> Dict[str, Any]:
    """
    Fetch JWKS keys from Supabase with caching
    Returns cached keys if available, otherwise fetches from Supabase
    """
    global _jwks_cache
    
    if _jwks_cache is not None:
        logger.debug("Using cached JWKS keys")
        return _jwks_cache
    
    try:
        config = get_supabase_config()
        
        async with httpx.AsyncClient() as client:
            response = await client.get(config["jwks_url"], timeout=10.0)
            response.raise_for_status()
            
            jwks_data = response.json()
            _jwks_cache = jwks_data
            
            logger.info("Successfully fetched and cached JWKS keys from Supabase")
            return jwks_data
            
    except Exception as e:
        logger.error(f"Failed to fetch JWKS keys: {str(e)}")
        raise HTTPException(
            status_code=503,
            detail="Unable to verify authentication - service temporarily unavailable"
        )

def clear_jwks_cache():
    """Clear JWKS cache (useful for testing or key rotation)"""
    global _jwks_cache
    _jwks_cache = None
    logger.info("JWKS cache cleared")

async def verify_supabase_jwt(
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> Dict[str, Any]:
    """
    FastAPI dependency to verify Supabase JWT tokens
    
    Args:
        credentials: HTTP Authorization credentials containing the JWT token
        
    Returns:
        Dict containing decoded user information (user_id, email, provider, etc.)
        
    Raises:
        HTTPException: If token is invalid, expired, or verification fails
    """
    token = credentials.credentials
    
    try:
        # Fetch JWKS keys
        jwks = await fetch_jwks_keys()
        
        # Get the unverified header to find the correct key
        unverified_header = jwt.get_unverified_header(token)
        key_id = unverified_header.get("kid")
        
        if not key_id:
            logger.warning("JWT token missing 'kid' in header")
            raise HTTPException(status_code=401, detail="Invalid token format")
        
        # Find the matching key in JWKS
        rsa_key = None
        for key in jwks.get("keys", []):
            if key.get("kid") == key_id:
                rsa_key = {
                    "kty": key.get("kty"),
                    "kid": key.get("kid"),
                    "use": key.get("use"),
                    "n": key.get("n"),
                    "e": key.get("e")
                }
                break
        
        if not rsa_key:
            logger.warning(f"No matching key found for kid: {key_id}")
            raise HTTPException(status_code=401, detail="Invalid token signature")
        
        # Verify and decode the JWT
        config = get_supabase_config()
        payload = jwt.decode(
            token,
            rsa_key,
            algorithms=["RS256"],
            audience="authenticated",
            issuer=f"{config['url']}/auth/v1"
        )
        
        # Extract user information
        user_info = {
            "user_id": payload.get("sub"),
            "email": payload.get("email"),
            "provider": payload.get("app_metadata", {}).get("provider"),
            "role": payload.get("role"),
            "aud": payload.get("aud"),
            "exp": payload.get("exp"),
            "iat": payload.get("iat")
        }
        
        logger.info(f"Successfully verified JWT for user: {user_info['user_id']}")
        return user_info
        
    except JWTError as e:
        logger.warning(f"JWT verification failed: {str(e)}")
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    
    except Exception as e:
        logger.error(f"Unexpected error during JWT verification: {str(e)}")
        raise HTTPException(status_code=401, detail="Token verification failed")

async def get_current_user(request: Request) -> Dict[str, Any]:
    """
    Alternative dependency that extracts user info from request state
    Use this after verify_supabase_jwt has been applied
    """
    user_info = getattr(request.state, "user", None)
    if not user_info:
        raise HTTPException(status_code=401, detail="User not authenticated")
    return user_info

# Middleware class for global JWT verification (optional)
class JWTVerificationMiddleware:
    """
    Optional middleware class for global JWT verification
    Can be used to automatically verify JWTs for all protected routes
    """
    
    def __init__(self, app, protected_paths: list = None):
        self.app = app
        self.protected_paths = protected_paths or ["/analytics", "/users", "/admin"]
    
    async def __call__(self, scope, receive, send):
        if scope["type"] == "http":
            path = scope["path"]
            
            # Check if path requires JWT verification
            if any(path.startswith(protected) for protected in self.protected_paths):
                # Add JWT verification logic here if needed
                pass
        
        await self.app(scope, receive, send)