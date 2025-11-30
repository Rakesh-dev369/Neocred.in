# Purpose: Database tables for user and analytics data
# /backend/database/user_tables.py
"""
NeoCred Database Table Definitions
----------------------------------
This module defines the SQLAlchemy metadata for `users` and `events` tables.
It can be imported by Alembic migrations or used at startup to ensure schema consistency.
"""

from sqlalchemy import (
    Table, Column, String, DateTime, ForeignKey, MetaData, text, Index
)
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid

metadata = MetaData()

# ---------------- Users Table ----------------
users_table = Table(
    "users",
    metadata,
    Column("id", UUID(as_uuid=True), primary_key=True, default=uuid.uuid4),
    Column("full_name", String, nullable=True),
    Column("email", String, unique=True, nullable=False, index=True),
    Column("goal", String, nullable=True),
    Column("user_stage", String, nullable=False, server_default="new"),
    Column("provider", String, nullable=True),
    Column("avatar_url", String, nullable=True),
    Column("last_login", DateTime(timezone=True), nullable=True),
    Column("created_at", DateTime(timezone=True), server_default=text("CURRENT_TIMESTAMP")),
    Column("updated_at", DateTime(timezone=True), onupdate=text("CURRENT_TIMESTAMP")),
)

# Indexes for faster lookup
Index("idx_users_stage", users_table.c.user_stage)
Index("idx_users_created_at", users_table.c.created_at)

# ---------------- Events Table ----------------
events_table = Table(
    "events",
    metadata,
    Column("id", UUID(as_uuid=True), primary_key=True, default=uuid.uuid4),
    Column("user_id", UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL")),
    Column("event_type", String, nullable=False, index=True),
    Column("metadata", JSONB, nullable=True),
    Column("created_at", DateTime(timezone=True), server_default=text("CURRENT_TIMESTAMP"), index=True),
)

Index("idx_events_user_id", events_table.c.user_id)
Index("idx_events_event_type", events_table.c.event_type)
Index("idx_events_created_at", events_table.c.created_at)

# ---------------- Utility Functions ----------------

async def create_tables(engine):
    """
    Create all necessary tables if they don't exist.
    You can call this from your FastAPI startup event.
    """
    async with engine.begin() as conn:
        await conn.run_sync(metadata.create_all)
        print("✅ Users and Events tables ensured in database.")
