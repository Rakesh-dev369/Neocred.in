"""Async Tests"""
import pytest
from api.crud import create_user, get_user_by_email
from api.schemas import UserCreate

class TestAsync:
    """Test async operations"""
    
    @pytest.mark.asyncio
    async def test_create_user_async(self, db_session):
        """Test async user creation"""
        user_data = UserCreate(
            email="async@example.com",
            password="password123",
            full_name="Async User"
        )
        user = await create_user(db_session, user_data)
        assert user.email == "async@example.com"
        assert user.full_name == "Async User"
    
    @pytest.mark.asyncio
    async def test_get_user_by_email_async(self, db_session):
        """Test async user retrieval"""
        # First create a user
        user_data = UserCreate(
            email="retrieve@example.com",
            password="password123"
        )
        created_user = await create_user(db_session, user_data)
        
        # Then retrieve it
        retrieved_user = await get_user_by_email(db_session, "retrieve@example.com")
        assert retrieved_user is not None
        assert retrieved_user.email == created_user.email
    
    @pytest.mark.asyncio
    async def test_nonexistent_user(self, db_session):
        """Test retrieving nonexistent user"""
        user = await get_user_by_email(db_session, "nonexistent@example.com")
        assert user is None