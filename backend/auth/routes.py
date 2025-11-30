"""Authentication Routes"""
from fastapi import APIRouter, HTTPException, Depends, status
from .models import UserCreate, UserLogin, Token, OAuthProvider
from .jwt_handler import create_access_token, verify_password, hash_password
from .supabase_client import sign_up_with_email, sign_in_with_email, sign_in_with_oauth
from .dependencies import get_current_active_user
from .rate_limiter import limiter

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=Token)
@limiter.limit("5/minute")
async def register(request, user: UserCreate):
    # Try Supabase signup
    supabase_response = await sign_up_with_email(user.email, user.password)
    
    if "error" not in supabase_response:
        # Create JWT token for immediate access
        access_token = create_access_token(data={"sub": user.email})
        return {"access_token": access_token, "token_type": "bearer"}
    
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Registration failed"
    )

@router.post("/login", response_model=Token)
@limiter.limit("10/minute")
async def login(request, user: UserLogin):
    # Try Supabase authentication
    supabase_response = await sign_in_with_email(user.email, user.password)
    
    if "error" not in supabase_response:
        access_token = create_access_token(data={"sub": user.email})
        return {"access_token": access_token, "token_type": "bearer"}
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect email or password"
    )

@router.post("/oauth/{provider}")
@limiter.limit("10/minute")
async def oauth_login(request, provider: str):
    response = await sign_in_with_oauth(provider)
    
    if "error" not in response:
        return response
    
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail=f"OAuth login with {provider} failed"
    )

@router.get("/me")
async def get_current_user_info(current_user = Depends(get_current_active_user)):
    return {"email": current_user.email}