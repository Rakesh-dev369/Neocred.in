# Purpose: Database session management for SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./neocred.db")

# Sync engine and session
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Async engine and session
ASYNC_DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://") if "postgresql" in DATABASE_URL else "sqlite+aiosqlite:///./neocred.db"
async_engine = create_async_engine(ASYNC_DATABASE_URL)
AsyncSessionLocal = async_sessionmaker(async_engine, class_=AsyncSession, expire_on_commit=False)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def get_async_session():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()