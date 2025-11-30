# Purpose: Analytics event tracking and logging
# /backend/analytics/events.py
import logging
from typing import Optional, Dict, Any

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import insert
from analytics.models import Event, EventCreate
from database.session import get_async_session

logger = logging.getLogger("neocred.analytics")

# Core event tracker
async def track_event(user_id: Optional[str], event_type: str, metadata: Optional[Dict[str, Any]] = None):
    """
    Insert an analytics event into events table.
    Use this from webhooks, frontend ingestion, background jobs, etc.
    """
    metadata = metadata or {}
    async with get_async_session() as session:
        stmt = insert(Event).values(
            user_id=user_id,
            event_type=event_type,
            event_metadata=metadata
        ).returning(Event)
        result = await session.execute(stmt)
        await session.commit()
        event_row = result.fetchone()
        if event_row:
            logger.debug("Tracked event %s for user %s", event_type, user_id)
            return event_row[0]
        return None

# Convenience helpers
async def track_signup(user_id: Optional[str], metadata: Optional[Dict[str, Any]] = None):
    return await track_event(user_id=user_id, event_type="signup", metadata=metadata)

async def track_login(user_id: Optional[str], metadata: Optional[Dict[str, Any]] = None):
    return await track_event(user_id=user_id, event_type="login", metadata=metadata)

async def track_tool_used(user_id: Optional[str], tool_name: str, metadata: Optional[Dict[str, Any]] = None):
    meta = metadata or {}
    meta.update({"tool": tool_name})
    return await track_event(user_id=user_id, event_type="tool_used", metadata=meta)
