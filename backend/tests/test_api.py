"""API Tests"""
import pytest
from fastapi.testclient import TestClient
from tests.factories import UserFactory, ChatSessionFactory, FinancialDataFactory

class TestAPI:
    """Test API endpoints"""
    
    def test_health_check(self, client: TestClient):
        """Test health check endpoint"""
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert data["service"] == "NeoCred Backend"
    
    def test_create_user(self, client: TestClient):
        """Test user creation via API"""
        user_data = {
            "email": "api@example.com",
            "password": "password123",
            "full_name": "API User"
        }
        response = client.post("/api/users", json=user_data)
        assert response.status_code == 200
        data = response.json()
        assert data["email"] == user_data["email"]
        assert data["full_name"] == user_data["full_name"]
    
    def test_create_chat_session(self, client: TestClient):
        """Test chat session creation"""
        session_data = {
            "user_id": 1,
            "session_data": {"messages": ["Hello", "Hi there"]}
        }
        response = client.post("/api/chat-sessions", json=session_data)
        assert response.status_code == 200
        data = response.json()
        assert data["user_id"] == session_data["user_id"]
    
    def test_create_financial_data(self, client: TestClient):
        """Test financial data creation"""
        financial_data = {
            "user_id": 1,
            "data_type": "sip",
            "data_json": {"amount": 5000, "duration": 24}
        }
        response = client.post("/api/financial-data", json=financial_data)
        assert response.status_code == 200
        data = response.json()
        assert data["data_type"] == "sip"
    
    def test_invalid_data_type(self, client: TestClient):
        """Test invalid financial data type"""
        financial_data = {
            "user_id": 1,
            "data_type": "invalid_type",
            "data_json": {"amount": 5000}
        }
        response = client.post("/api/financial-data", json=financial_data)
        assert response.status_code == 422  # Validation error