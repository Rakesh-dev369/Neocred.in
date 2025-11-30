# Purpose: User data models for backend storage
# /backend/users/models.py
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr
from sqlalchemy import Column, String, DateTime, text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True)
    full_name = Column(String, nullable=True)
    email = Column(String, unique=True, index=True, nullable=False)
    goal = Column(String, nullable=True)
    user_stage = Column(String, default="new", server_default="new")
    provider = Column(String, nullable=True)
    avatar_url = Column(String, nullable=True)
    last_login = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=text("CURRENT_TIMESTAMP"))
    updated_at = Column(DateTime(timezone=True), onupdate=datetime.utcnow)

# ---------- Pydantic Schemas ----------

class UserCreate(BaseModel):
    id: str
    email: EmailStr
    full_name: Optional[str] = None
    provider: Optional[str] = None
    avatar_url: Optional[str] = None
    goal: Optional[str] = None
    user_stage: Optional[str] = "new"

class UserUpdate(BaseModel):
    full_name: Optional[str]
    goal: Optional[str]
    user_stage: Optional[str]
    avatar_url: Optional[str]

class UserRead(BaseModel):
    id: str
    full_name: Optional[str]
    email: EmailStr
    goal: Optional[str]
    user_stage: str
    provider: Optional[str]
    avatar_url: Optional[str]
    last_login: Optional[datetime]
    created_at: datetime

    class Config:
        orm_mode = True
