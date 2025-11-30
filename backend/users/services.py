# Purpose: User business logic and services
# /backend/users/services.py
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import update
from users.models import User, UserCreate
from database.session import get_async_session  # your async engine session dependency

# ---------------- Core Logic ----------------

async def create_or_update_user_from_supabase(user_obj: dict, update_last_login: bool = False, changes: dict = None):
    """
    Upsert a user record from a Supabase webhook event.
    """
    async with get_async_session() as session:
        stmt = select(User).where(User.id == user_obj["id"])
        result = await session.execute(stmt)
        user = result.scalar_one_or_none()

        if user:
            # Update existing
            if changes:
                for k, v in changes.items():
                    if hasattr(user, k):
                        setattr(user, k, v)
            user.full_name = user_obj.get("raw_user_meta_data", {}).get("full_name") or user.full_name
            user.email = user_obj.get("email") or user.email
            user.avatar_url = user_obj.get("user_metadata", {}).get("avatar_url") or user.avatar_url
            user.provider = user_obj.get("app_metadata", {}).get("provider") or user.provider
            if update_last_login:
                user.last_login = datetime.utcnow()
        else:
            # Create new user
            new_user = User(
                id=user_obj["id"],
                email=user_obj.get("email"),
                full_name=user_obj.get("raw_user_meta_data", {}).get("full_name"),
                provider=user_obj.get("app_metadata", {}).get("provider"),
                avatar_url=user_obj.get("user_metadata", {}).get("avatar_url"),
                goal=user_obj.get("goal"),
                user_stage="new",
                last_login=datetime.utcnow() if update_last_login else None,
            )
            session.add(new_user)

        await session.commit()
        return True


async def get_user_by_id(user_id: str, session: AsyncSession):
    result = await session.execute(select(User).where(User.id == user_id))
    return result.scalar_one_or_none()


async def list_users(session: AsyncSession, skip: int = 0, limit: int = 50):
    result = await session.execute(select(User).offset(skip).limit(limit))
    return result.scalars().all()
