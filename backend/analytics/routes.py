# Purpose: Analytics API routes for data collection
# /backend/analytics/routes.py
from datetime import datetime
from typing import Optional, List, Dict, Any

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, and_, text
from sqlalchemy.future import select as future_select

from analytics.models import Event, EventRead, EventCreate
from database.session import get_async_session
from analytics import events as analytics_events

router = APIRouter(prefix="/analytics", tags=["analytics"])

# Ingest event (can be called by webhooks or frontend analytics client)
@router.post("/events", response_model=EventRead)
async def ingest_event(payload: EventCreate, session: AsyncSession = Depends(get_async_session)):
    """
    Ingest a single analytics event.
    Intended to be called by backend webhooks or frontend analytics client.
    """
    evt = await analytics_events.track_event(payload.user_id, payload.event_type, payload.event_metadata)
    if not evt:
        raise HTTPException(status_code=500, detail="Failed to track event")
    # evt may be a sqlalchemy row; convert to ORM object or fetch it (we returned Event object in insert)
    # For safety, re-query the event by id:
    stmt = select(Event).where(Event.id == evt.id)
    res = await session.execute(stmt)
    event_obj = res.scalar_one_or_none()
    if not event_obj:
        raise HTTPException(status_code=500, detail="Event stored but retrieval failed")
    return event_obj

# Query events with filters (admin/BI)
@router.get("/events", response_model=List[EventRead])
async def list_events(
    user_id: Optional[str] = Query(None),
    event_type: Optional[str] = Query(None),
    start: Optional[datetime] = Query(None),
    end: Optional[datetime] = Query(None),
    limit: int = Query(100, le=1000),
    offset: int = Query(0),
    session: AsyncSession = Depends(get_async_session),
):
    conditions = []
    if user_id:
        conditions.append(Event.user_id == user_id)
    if event_type:
        conditions.append(Event.event_type == event_type)
    if start:
        conditions.append(Event.created_at >= start)
    if end:
        conditions.append(Event.created_at <= end)

    stmt = select(Event).where(and_(*conditions)) if conditions else select(Event)
    stmt = stmt.order_by(Event.created_at.desc()).limit(limit).offset(offset)
    res = await session.execute(stmt)
    events = res.scalars().all()
    return events

# Aggregate endpoint for BI: counts by event_type in date range
@router.get("/events/aggregate")
async def aggregate_events(
    start: Optional[datetime] = Query(None),
    end: Optional[datetime] = Query(None),
    session: AsyncSession = Depends(get_async_session),
) -> Dict[str, Any]:
    """
    Returns counts per event_type and total events in the window.
    """
    conditions = []
    if start:
        conditions.append(Event.created_at >= start)
    if end:
        conditions.append(Event.created_at <= end)

    stmt = select(Event.event_type, func.count(Event.id)).where(and_(*conditions)) if conditions else select(Event.event_type, func.count(Event.id))
    stmt = stmt.group_by(Event.event_type)
    res = await session.execute(stmt)
    rows = res.all()
    counts = {r[0]: r[1] for r in rows}

    # total events
    total_stmt = select(func.count(Event.id)).where(and_(*conditions)) if conditions else select(func.count(Event.id))
    total_res = await session.execute(total_stmt)
    total = total_res.scalar_one()

    return {"counts_by_type": counts, "total": total}
