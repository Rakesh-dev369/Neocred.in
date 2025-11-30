# Purpose: Analytics data models for tracking
# /backend/analytics/models.py
from datetime import datetime
import uuid
from typing import Optional, Dict, Any

from sqlalchemy import Column, DateTime, String, text
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import declarative_base
from pydantic import BaseModel, Field

Base = declarative_base()

class Event(Base):
    __tablename__ = "events"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), nullable=True, index=True)
    event_type = Column(String, nullable=False, index=True)
    event_metadata = Column(JSONB, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=text("CURRENT_TIMESTAMP"), index=True)

# ---------- Pydantic Schemas ----------

class EventCreate(BaseModel):
    user_id: Optional[str] = Field(None, description="UUID of the user (if available)")
    event_type: str = Field(..., description="Event name, e.g. signup, login, tool_used")
    event_metadata: Optional[Dict[str, Any]] = Field(default_factory=dict)

class EventRead(BaseModel):
    id: str
    user_id: Optional[str]
    event_type: str
    event_metadata: Optional[Dict[str, Any]]
    created_at: datetime

    class Config:
        orm_mode = True
