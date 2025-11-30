# Purpose: User management API routes
# /backend/users/routes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from database.session import get_async_session
from users import services
from users.models import UserRead

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/", response_model=list[UserRead])
async def list_all_users(skip: int = 0, limit: int = 50, session: AsyncSession = Depends(get_async_session)):
    """Admin endpoint – list all users."""
    users = await services.list_users(session, skip, limit)
    return users

@router.get("/{user_id}", response_model=UserRead)
async def get_user(user_id: str, session: AsyncSession = Depends(get_async_session)):
    """Get single user details."""
    user = await services.get_user_by_id(user_id, session)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
