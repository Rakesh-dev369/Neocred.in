"""API Routes with SQLAlchemy Integration"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from database.database import get_db
from api.schemas import UserCreate, UserResponse, ChatSessionCreate, ChatSessionResponse, FinancialDataCreate, FinancialDataResponse
from api.crud import create_user, get_user_by_email, create_chat_session, get_user_chat_sessions, create_financial_data
from auth.dependencies import get_current_active_user
from auth.rate_limiter import limiter
from typing import List

router = APIRouter(prefix="/api", tags=["API"])

@router.post("/users", response_model=UserResponse)
@limiter.limit("5/minute")
async def create_user_endpoint(request, user: UserCreate, db: AsyncSession = Depends(get_db)):
    db_user = await get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return await create_user(db=db, user=user)

@router.get("/users/me", response_model=UserResponse)
async def get_current_user_endpoint(current_user = Depends(get_current_active_user), db: AsyncSession = Depends(get_db)):
    db_user = await get_user_by_email(db, email=current_user.email)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.post("/chat-sessions", response_model=ChatSessionResponse)
async def create_chat_session_endpoint(session: ChatSessionCreate, db: AsyncSession = Depends(get_db)):
    return await create_chat_session(db=db, session=session)

@router.get("/chat-sessions", response_model=List[ChatSessionResponse])
async def get_chat_sessions_endpoint(current_user = Depends(get_current_active_user), db: AsyncSession = Depends(get_db)):
    user = await get_user_by_email(db, email=current_user.email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return await get_user_chat_sessions(db=db, user_id=user.id)

@router.post("/financial-data", response_model=FinancialDataResponse)
async def create_financial_data_endpoint(data: FinancialDataCreate, db: AsyncSession = Depends(get_db)):
    return await create_financial_data(db=db, data=data)