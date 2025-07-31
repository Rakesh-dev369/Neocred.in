from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, Float, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(255), unique=True, index=True)
    ip_address = Column(String(45))
    created_at = Column(DateTime, default=func.now())
    last_active = Column(DateTime, default=func.now())
    total_requests = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)

class ChatSession(Base):
    __tablename__ = "chat_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(255), unique=True, index=True)
    user_id = Column(String(255), index=True)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
    message_count = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)

class ChatMessage(Base):
    __tablename__ = "chat_messages"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(255), index=True)
    user_id = Column(String(255), index=True)
    message = Column(Text)
    response = Column(Text)
    sender = Column(String(10))  # 'user' or 'bot'
    tokens_used = Column(Integer)
    response_time = Column(Float)
    tool_link = Column(String(500))
    suggestions = Column(JSON)
    created_at = Column(DateTime, default=func.now())
    is_error = Column(Boolean, default=False)

class APIMetrics(Base):
    __tablename__ = "api_metrics"
    
    id = Column(Integer, primary_key=True, index=True)
    endpoint = Column(String(255))
    method = Column(String(10))
    status_code = Column(Integer)
    response_time = Column(Float)
    user_id = Column(String(255))
    ip_address = Column(String(45))
    user_agent = Column(Text)
    created_at = Column(DateTime, default=func.now())
    tokens_used = Column(Integer)
    error_message = Column(Text)