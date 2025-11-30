"""Server-Sent Events Routes (Optional)"""
from fastapi import APIRouter, Request
from sse_starlette.sse import EventSourceResponse
import asyncio
import json
from datetime import datetime
from typing import AsyncGenerator

router = APIRouter()

class SSEStreamer:
    """Server-Sent Events streamer"""
    
    @staticmethod
    async def credit_score_stream(user_id: str) -> AsyncGenerator[str, None]:
        """Stream credit score updates"""
        while True:
            # Simulate credit score data
            credit_data = {
                "timestamp": datetime.now().isoformat(),
                "credit_score": 750,
                "change": "+5",
                "factors": ["On-time payments", "Low utilization"]
            }
            
            yield f"data: {json.dumps(credit_data)}\n\n"
            await asyncio.sleep(30)  # Update every 30 seconds
    
    @staticmethod
    async def market_updates_stream() -> AsyncGenerator[str, None]:
        """Stream market updates"""
        while True:
            # Simulate market data
            market_data = {
                "timestamp": datetime.now().isoformat(),
                "nifty": 19500,
                "sensex": 65000,
                "change": "+0.5%",
                "status": "market_open"
            }
            
            yield f"data: {json.dumps(market_data)}\n\n"
            await asyncio.sleep(60)  # Update every minute
    
    @staticmethod
    async def calculation_progress_stream(calculation_id: str) -> AsyncGenerator[str, None]:
        """Stream calculation progress"""
        for progress in range(0, 101, 10):
            progress_data = {
                "calculation_id": calculation_id,
                "progress": progress,
                "status": "completed" if progress == 100 else "processing",
                "timestamp": datetime.now().isoformat()
            }
            
            yield f"data: {json.dumps(progress_data)}\n\n"
            
            if progress == 100:
                break
            
            await asyncio.sleep(0.5)  # Simulate processing time

@router.get("/sse/credit-score/{user_id}")
async def credit_score_sse(request: Request, user_id: str):
    """SSE endpoint for credit score updates"""
    return EventSourceResponse(
        SSEStreamer.credit_score_stream(user_id),
        headers={"Cache-Control": "no-cache"}
    )

@router.get("/sse/market-updates")
async def market_updates_sse(request: Request):
    """SSE endpoint for market updates"""
    return EventSourceResponse(
        SSEStreamer.market_updates_stream(),
        headers={"Cache-Control": "no-cache"}
    )

@router.get("/sse/calculation/{calculation_id}")
async def calculation_progress_sse(request: Request, calculation_id: str):
    """SSE endpoint for calculation progress"""
    return EventSourceResponse(
        SSEStreamer.calculation_progress_stream(calculation_id),
        headers={"Cache-Control": "no-cache"}
    )