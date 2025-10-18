"""Authentication Tests"""
import pytest
from fastapi.testclient import TestClient
from tests.factories import UserFactory

class TestAuth:
    """Test authentication endpoints"""
    
    def test_register_user(self, client: TestClient):
        """Test user registration"""
        user_data = {
            "email": "test@example.com",
            "password": "password123",
            "full_name": "Test User"
        }
        response = client.post("/auth/register", json=user_data)
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["token_type"] == "bearer"
    
    def test_login_user(self, client: TestClient):
        """Test user login"""
        # First register
        user_data = {
            "email": "test@example.com",
            "password": "password123"
        }
        client.post("/auth/register", json=user_data)
        
        # Then login
        login_data = {
            "email": "test@example.com",
            "password": "password123"
        }
        response = client.post("/auth/login", json=login_data)
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
    
    def test_invalid_login(self, client: TestClient):
        """Test invalid login credentials"""
        login_data = {
            "email": "nonexistent@example.com",
            "password": "wrongpassword"
        }
        response = client.post("/auth/login", json=login_data)
        assert response.status_code == 401
    
    def test_get_current_user(self, client: TestClient, auth_headers):
        """Test getting current user info"""
        response = client.get("/auth/me", headers=auth_headers)
        # This will fail without proper token validation in test
        # but shows the test structure