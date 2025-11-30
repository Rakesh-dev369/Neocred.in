"""WebSocket Routes for Real-time Communication"""
from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends, Query
from .websocket_manager import manager, CreditFeedbackStreamer, DashboardStreamer
from auth.dependencies import get_current_user
import json
import asyncio

router = APIRouter()

@router.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: str, user_id: str = Query(None)):
    """Main WebSocket endpoint"""
    await manager.connect(websocket, client_id, user_id)
    
    try:
        # Send welcome message
        welcome_msg = {
            "type": "connection",
            "message": "Connected to NeoCred real-time updates",
            "client_id": client_id,
            "user_id": user_id
        }
        await manager.send_personal_message(json.dumps(welcome_msg), websocket)
        
        while True:
            # Listen for client messages
            data = await websocket.receive_text()
            message = json.loads(data)
            
            # Handle different message types
            await handle_websocket_message(message, websocket, client_id, user_id)
            
    except WebSocketDisconnect:
        manager.disconnect(websocket, client_id, user_id)

async def handle_websocket_message(message: dict, websocket: WebSocket, client_id: str, user_id: str):
    """Handle incoming WebSocket messages"""
    message_type = message.get("type")
    
    if message_type == "ping":
        # Heartbeat
        await manager.send_personal_message(json.dumps({"type": "pong"}), websocket)
    
    elif message_type == "subscribe":
        # Subscribe to specific updates
        subscription = message.get("subscription")
        response = {
            "type": "subscription_confirmed",
            "subscription": subscription,
            "status": "active"
        }
        await manager.send_personal_message(json.dumps(response), websocket)
    
    elif message_type == "request_credit_analysis":
        # Trigger credit analysis
        if user_id:
            # Simulate analysis progress
            for progress in [25, 50, 75, 100]:
                await CreditFeedbackStreamer.stream_calculation_progress(
                    user_id, "credit_analysis", progress
                )
                await asyncio.sleep(0.5)  # Simulate processing time

@router.websocket("/ws/dashboard/{user_id}")
async def dashboard_websocket(websocket: WebSocket, user_id: str):
    """Dedicated dashboard WebSocket"""
    await manager.connect(websocket, f"dashboard_{user_id}", user_id)
    
    try:
        # Send initial dashboard data
        initial_data = {
            "type": "dashboard_init",
            "message": "Dashboard connected",
            "features": ["portfolio_updates", "market_alerts", "risk_monitoring"]
        }
        await manager.send_personal_message(json.dumps(initial_data), websocket)
        
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            
            # Handle dashboard-specific messages
            if message.get("type") == "request_portfolio_update":
                # Simulate portfolio data
                portfolio_data = {
                    "total_value": 150000,
                    "daily_change": 2.5,
                    "investments": [
                        {"name": "SIP Portfolio", "value": 75000, "change": 1.8},
                        {"name": "Fixed Deposits", "value": 50000, "change": 0.5},
                        {"name": "Mutual Funds", "value": 25000, "change": 3.2}
                    ]
                }
                await DashboardStreamer.stream_portfolio_update(user_id, portfolio_data)
    
    except WebSocketDisconnect:
        manager.disconnect(websocket, f"dashboard_{user_id}", user_id)

# REST endpoints for triggering WebSocket messages
@router.post("/trigger/credit-analysis/{user_id}")
async def trigger_credit_analysis(user_id: str, analysis_data: dict):
    """Trigger credit analysis WebSocket update"""
    await CreditFeedbackStreamer.stream_credit_analysis(user_id, analysis_data)
    return {"status": "analysis_triggered", "user_id": user_id}

@router.post("/trigger/risk-score/{user_id}")
async def trigger_risk_score_update(user_id: str, risk_data: dict):
    """Trigger risk score WebSocket update"""
    risk_score = risk_data.get("risk_score", 0.5)
    factors = risk_data.get("factors", ["Credit utilization", "Payment history"])
    
    await CreditFeedbackStreamer.stream_risk_score_update(user_id, risk_score, factors)
    return {"status": "risk_score_updated", "user_id": user_id}

@router.post("/trigger/market-alert")
async def trigger_market_alert(alert_data: dict):
    """Broadcast market alert to all users"""
    await DashboardStreamer.stream_market_alert(alert_data)
    return {"status": "market_alert_sent", "recipients": "all_users"}