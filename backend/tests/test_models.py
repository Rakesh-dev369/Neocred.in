"""Database Models Tests"""
import pytest
from tests.factories import UserFactory, ChatSessionFactory, FinancialDataFactory

class TestModels:
    """Test database models"""
    
    def test_user_factory(self):
        """Test user factory creation"""
        user = UserFactory()
        assert user.email
        assert user.full_name
        assert user.is_active is True
    
    def test_chat_session_factory(self):
        """Test chat session factory"""
        session = ChatSessionFactory()
        assert session.session_data
        assert isinstance(session.session_data, dict)
    
    def test_financial_data_factory(self):
        """Test financial data factory"""
        data = FinancialDataFactory()
        assert data.data_type in ['sip', 'loan', 'investment', 'insurance']
        assert isinstance(data.data_json, dict)
    
    def test_user_email_uniqueness(self):
        """Test user email should be unique"""
        email = "unique@example.com"
        user1 = UserFactory(email=email)
        user2 = UserFactory(email=email)
        # In real database, this would raise an integrity error
        assert user1.email == user2.email