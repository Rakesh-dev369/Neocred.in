"""CRUD Operations with SQLAlchemy"""
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database.models import User, ChatSession, FinancialData
from api.schemas import UserCreate, ChatSessionCreate, FinancialDataCreate
from auth.jwt_handler import hash_password
from typing import Optional, List

async def create_user(db: AsyncSession, user: UserCreate) -> User:
    hashed_password = hash_password(user.password)
    db_user = User(
        email=user.email,
        full_name=user.full_name,
        hashed_password=hashed_password
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

async def get_user_by_email(db: AsyncSession, email: str) -> Optional[User]:
    result = await db.execute(select(User).where(User.email == email))
    return result.scalar_one_or_none()

async def create_chat_session(db: AsyncSession, session: ChatSessionCreate) -> ChatSession:
    db_session = ChatSession(**session.dict())
    db.add(db_session)
    await db.commit()
    await db.refresh(db_session)
    return db_session

async def get_user_chat_sessions(db: AsyncSession, user_id: int) -> List[ChatSession]:
    result = await db.execute(select(ChatSession).where(ChatSession.user_id == user_id))
    return result.scalars().all()

async def create_financial_data(db: AsyncSession, data: FinancialDataCreate) -> FinancialData:
    db_data = FinancialData(**data.dict())
    db.add(db_data)
    await db.commit()
    await db.refresh(db_data)
    return db_data