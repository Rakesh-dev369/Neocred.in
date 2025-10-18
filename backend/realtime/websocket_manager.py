"""WebSocket Manager for Real-time Updates"""
from fastapi import WebSocket, WebSocketDisconnect
from typing import Dict, List, Any
import json
import asyncio
from datetime import datetime

class ConnectionManager:
    """Manage WebSocket connections"""
    
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}
        self.user_connections: Dict[str, WebSocket] = {}
    
    async def connect(self, websocket: WebSocket, client_id: str, user_id: str = None):
        """Accept WebSocket connection"""
        await websocket.accept()
        
        # Add to active connections by client_id
        if client_id not in self.active_connections:
            self.active_connections[client_id] = []
        self.active_connections[client_id].append(websocket)
        
        # Map user to connection if user_id provided
        if user_id:
            self.user_connections[user_id] = websocket
    
    def disconnect(self, websocket: WebSocket, client_id: str, user_id: str = None):
        """Remove WebSocket connection"""
        if client_id in self.active_connections:
            if websocket in self.active_connections[client_id]:
                self.active_connections[client_id].remove(websocket)
            
            # Clean up empty lists
            if not self.active_connections[client_id]:
                del self.active_connections[client_id]
        
        # Remove user mapping
        if user_id and user_id in self.user_connections:
            del self.user_connections[user_id]
    
    async def send_personal_message(self, message: str, websocket: WebSocket):
        """Send message to specific WebSocket"""
        try:
            await websocket.send_text(message)
        except:
            pass  # Connection closed
    
    async def send_to_user(self, message: Dict[str, Any], user_id: str):
        """Send message to specific user"""
        if user_id in self.user_connections:
            websocket = self.user_connections[user_id]
            await self.send_personal_message(json.dumps(message), websocket)
    
    async def broadcast_to_group(self, message: Dict[str, Any], client_id: str):
        """Broadcast message to all connections in a group"""
        if client_id in self.active_connections:
            message_str = json.dumps(message)
            for connection in self.active_connections[client_id]:
                await self.send_personal_message(message_str, connection)
    
    async def broadcast_all(self, message: Dict[str, Any]):
        """Broadcast message to all active connections"""
        message_str = json.dumps(message)
        for client_connections in self.active_connections.values():
            for connection in client_connections:
                await self.send_personal_message(message_str, connection)

# Global connection manager
manager = ConnectionManager()

class CreditFeedbackStreamer:
    """Stream real-time credit feedback"""
    
    @staticmethod
    async def stream_credit_analysis(user_id: str, analysis_data: Dict[str, Any]):
        """Stream credit analysis results"""
        message = {
            "type": "credit_analysis",
            "timestamp": datetime.now().isoformat(),
            "user_id": user_id,
            "data": analysis_data
        }
        await manager.send_to_user(message, user_id)
    
    @staticmethod
    async def stream_risk_score_update(user_id: str, risk_score: float, factors: List[str]):
        """Stream risk score updates"""
        message = {
            "type": "risk_score_update",
            "timestamp": datetime.now().isoformat(),
            "risk_score": risk_score,
            "factors": factors,
            "severity": "high" if risk_score > 0.7 else "medium" if risk_score > 0.4 else "low"
        }
        await manager.send_to_user(message, user_id)
    
    @staticmethod
    async def stream_calculation_progress(user_id: str, calculator_type: str, progress: int):
        """Stream calculation progress"""
        message = {
            "type": "calculation_progress",
            "timestamp": datetime.now().isoformat(),
            "calculator_type": calculator_type,
            "progress": progress,
            "status": "completed" if progress >= 100 else "processing"
        }
        await manager.send_to_user(message, user_id)

class DashboardStreamer:
    """Stream dashboard updates"""
    
    @staticmethod
    async def stream_portfolio_update(user_id: str, portfolio_data: Dict[str, Any]):
        """Stream portfolio value updates"""
        message = {
            "type": "portfolio_update",
            "timestamp": datetime.now().isoformat(),
            "portfolio": portfolio_data
        }
        await manager.send_to_user(message, user_id)
    
    @staticmethod
    async def stream_market_alert(alert_data: Dict[str, Any]):
        """Broadcast market alerts to all users"""
        message = {
            "type": "market_alert",
            "timestamp": datetime.now().isoformat(),
            "alert": alert_data
        }
        await manager.broadcast_all(message)