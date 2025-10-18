"""Load Testing with Locust (Optional)"""
from locust import HttpUser, task, between
import json

class NeoCredUser(HttpUser):
    """Simulate NeoCred user behavior"""
    wait_time = between(1, 3)
    
    def on_start(self):
        """Setup user session"""
        # Register user
        user_data = {
            "email": f"loadtest{self.environment.runner.user_count}@example.com",
            "password": "password123",
            "full_name": "Load Test User"
        }
        response = self.client.post("/auth/register", json=user_data)
        if response.status_code == 200:
            self.token = response.json()["access_token"]
            self.headers = {"Authorization": f"Bearer {self.token}"}
        else:
            self.headers = {}
    
    @task(3)
    def health_check(self):
        """Test health endpoint"""
        self.client.get("/health")
    
    @task(2)
    def create_chat_session(self):
        """Test chat session creation"""
        session_data = {
            "user_id": 1,
            "session_data": {"messages": ["Hello", "Test message"]}
        }
        self.client.post("/api/chat-sessions", json=session_data)
    
    @task(2)
    def create_financial_data(self):
        """Test financial data creation"""
        financial_data = {
            "user_id": 1,
            "data_type": "sip",
            "data_json": {"amount": 10000, "duration": 12}
        }
        self.client.post("/api/financial-data", json=financial_data)
    
    @task(1)
    def get_metrics(self):
        """Test metrics endpoint"""
        self.client.get("/metrics")
    
    @task(1)
    def get_current_user(self):
        """Test authenticated endpoint"""
        if self.headers:
            self.client.get("/auth/me", headers=self.headers)