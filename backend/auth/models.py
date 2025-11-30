# Purpose: Authentication models for auth module
from typing import Optional
from pydantic import BaseModel, EmailStr, Field
from enum import Enum

class OAuthProvider(str, Enum):
    GOOGLE = "google"
    APPLE = "apple"
    GITHUB = "github"
    FACEBOOK = "facebook"

class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8)
    full_name: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int = 3600
    refresh_token: Optional[str] = None

class TokenData(BaseModel):
    email: Optional[str] = None
    user_id: Optional[str] = None