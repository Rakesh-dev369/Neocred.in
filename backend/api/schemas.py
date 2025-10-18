"""Pydantic Schemas for Data Validation"""
from pydantic import BaseModel, EmailStr, validator
from typing import Optional, List, Dict, Any
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str
    
    @validator('password')
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters')
        return v

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

class ChatSessionCreate(BaseModel):
    user_id: Optional[int] = None
    session_data: Dict[str, Any]

class ChatSessionResponse(BaseModel):
    id: int
    user_id: Optional[int]
    session_data: Dict[str, Any]
    created_at: datetime
    
    class Config:
        from_attributes = True

class FinancialDataCreate(BaseModel):
    user_id: Optional[int] = None
    data_type: str
    data_json: Dict[str, Any]
    
    @validator('data_type')
    def validate_data_type(cls, v):
        allowed_types = ['sip', 'loan', 'investment', 'insurance']
        if v not in allowed_types:
            raise ValueError(f'data_type must be one of {allowed_types}')
        return v

class FinancialDataResponse(BaseModel):
    id: int
    user_id: Optional[int]
    data_type: str
    data_json: Dict[str, Any]
    created_at: datetime
    
    class Config:
        from_attributes = True