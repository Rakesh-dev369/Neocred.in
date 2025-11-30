# Purpose: Simple chat API without complex dependencies
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict, Any
import os
import json

router = APIRouter(prefix="/api", tags=["Chat"])

class ChatMessage(BaseModel):
    message: str
    context: Optional[Dict[str, Any]] = None

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

# Simple responses for testing
FINANCIAL_RESPONSES = {
    "sip": "SIP (Systematic Investment Plan) is a great way to invest regularly in mutual funds. Start with ₹1000-5000 monthly based on your income.",
    "saving": "For savings, follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings. Build an emergency fund of 6 months expenses first.",
    "investment": "Diversify your investments across equity mutual funds, PPF, and ELSS for tax benefits. Start early for compound growth.",
    "credit": "Maintain credit utilization below 30%, pay bills on time, and check your credit report regularly for a good credit score.",
    "loan": "Compare interest rates, check your eligibility, and ensure EMI doesn't exceed 40% of your income before taking any loan.",
    "default": "I'm here to help with your financial questions! Ask me about investments, savings, credit, loans, or financial planning."
}

@router.post("/chat", response_model=ChatResponse)
async def simple_chat(chat_request: ChatMessage):
    """
    Simple chat endpoint with predefined responses
    """
    try:
        message = chat_request.message.lower()
        
        # Check for keywords and provide relevant response
        if any(word in message for word in ["sip", "systematic", "mutual fund"]):
            response = FINANCIAL_RESPONSES["sip"]
        elif any(word in message for word in ["saving", "save", "emergency fund"]):
            response = FINANCIAL_RESPONSES["saving"]
        elif any(word in message for word in ["investment", "invest", "portfolio"]):
            response = FINANCIAL_RESPONSES["investment"]
        elif any(word in message for word in ["credit", "score", "cibil"]):
            response = FINANCIAL_RESPONSES["credit"]
        elif any(word in message for word in ["loan", "emi", "interest"]):
            response = FINANCIAL_RESPONSES["loan"]
        else:
            response = FINANCIAL_RESPONSES["default"]
        
        return ChatResponse(response=response)
        
    except Exception as e:
        print(f"Chat error: {e}")
        return ChatResponse(
            response="I'm experiencing some technical difficulties. Please try again.",
            status="error"
        )