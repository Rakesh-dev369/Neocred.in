"""
MongoDB Configuration
For unstructured user data and LLM logs
"""

import os
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient
from datetime import datetime
from typing import Optional, Dict, List, Any

class MongoDB:
    """MongoDB client for unstructured data"""
    
    def __init__(self):
        self.mongo_url = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
        self.database_name = os.getenv("MONGODB_DATABASE", "neocred")
        self.client = None
        self.database = None
    
    async def connect(self):
        """Connect to MongoDB"""
        self.client = AsyncIOMotorClient(self.mongo_url)
        self.database = self.client[self.database_name]
        return self.database
    
    async def disconnect(self):
        """Disconnect from MongoDB"""
        if self.client:
            self.client.close()
    
    # Collections
    @property
    def user_logs(self):
        """User activity logs collection"""
        return self.database.user_logs
    
    @property
    def llm_conversations(self):
        """LLM conversation logs collection"""
        return self.database.llm_conversations
    
    @property
    def financial_insights(self):
        """Financial insights collection"""
        return self.database.financial_insights
    
    @property
    def ml_experiments(self):
        """ML experiment logs collection"""
        return self.database.ml_experiments
    
    # User Logs
    async def log_user_activity(self, user_id: int, activity: str, metadata: Dict[str, Any]):
        """Log user activity"""
        log_entry = {
            "user_id": user_id,
            "activity": activity,
            "metadata": metadata,
            "timestamp": datetime.utcnow()
        }
        await self.user_logs.insert_one(log_entry)
    
    async def get_user_logs(self, user_id: int, limit: int = 100) -> List[Dict]:
        """Get user activity logs"""
        cursor = self.user_logs.find({"user_id": user_id}).sort("timestamp", -1).limit(limit)
        return await cursor.to_list(length=limit)
    
    # LLM Conversations
    async def save_llm_conversation(self, user_id: int, conversation: Dict[str, Any]):
        """Save LLM conversation"""
        conversation_entry = {
            "user_id": user_id,
            "conversation": conversation,
            "timestamp": datetime.utcnow()
        }
        result = await self.llm_conversations.insert_one(conversation_entry)
        return str(result.inserted_id)
    
    async def get_llm_conversations(self, user_id: int, limit: int = 50) -> List[Dict]:
        """Get LLM conversations"""
        cursor = self.llm_conversations.find({"user_id": user_id}).sort("timestamp", -1).limit(limit)
        return await cursor.to_list(length=limit)
    
    # Financial Insights
    async def save_financial_insight(self, user_id: int, insight: Dict[str, Any]):
        """Save financial insight"""
        insight_entry = {
            "user_id": user_id,
            "insight": insight,
            "timestamp": datetime.utcnow()
        }
        await self.financial_insights.insert_one(insight_entry)
    
    async def get_financial_insights(self, user_id: int, category: Optional[str] = None) -> List[Dict]:
        """Get financial insights"""
        query = {"user_id": user_id}
        if category:
            query["insight.category"] = category
        
        cursor = self.financial_insights.find(query).sort("timestamp", -1)
        return await cursor.to_list(length=None)
    
    # ML Experiments
    async def log_ml_experiment(self, experiment_data: Dict[str, Any]):
        """Log ML experiment"""
        experiment_data["timestamp"] = datetime.utcnow()
        await self.ml_experiments.insert_one(experiment_data)
    
    async def get_ml_experiments(self, model_name: Optional[str] = None) -> List[Dict]:
        """Get ML experiments"""
        query = {}
        if model_name:
            query["model_name"] = model_name
        
        cursor = self.ml_experiments.find(query).sort("timestamp", -1)
        return await cursor.to_list(length=None)

# Global MongoDB client instance
mongodb_client = MongoDB()