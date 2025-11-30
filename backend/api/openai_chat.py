# Purpose: OpenAI GPT-4 integration for chat
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict, Any
import os
import requests
import json

router = APIRouter(prefix="/api", tags=["Chat"])

class ChatMessage(BaseModel):
    message: str
    context: Optional[Dict[str, Any]] = None

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

@router.post("/chat-openai", response_model=ChatResponse)
async def openai_chat(chat_request: ChatMessage):
    """
    OpenAI GPT-4 integration for financial advice
    """
    try:
        openai_api_key = os.getenv("OPENAI_API_KEY")
        if not openai_api_key or openai_api_key == "your-actual-openai-api-key":
            return get_fallback_response(chat_request.message)

        # System prompt for financial advisor
        system_prompt = """You are Neo, an AI financial advisor for NeoCred, a financial platform in India. 
        You provide helpful, accurate financial advice about investments, credit, savings, loans, and financial planning.
        Keep responses concise (2-3 sentences), practical, and relevant to Indian financial markets.
        Use Indian currency (₹) and mention Indian financial instruments when relevant.
        Be friendly and professional."""

        # Prepare conversation history
        messages = [{"role": "system", "content": system_prompt}]
        
        if chat_request.context and "conversation_history" in chat_request.context:
            for msg in chat_request.context["conversation_history"][-3:]:
                if msg.get("from") == "user":
                    messages.append({"role": "user", "content": msg.get("text", "")})
                elif msg.get("from") == "bot":
                    messages.append({"role": "assistant", "content": msg.get("text", "")})

        # Add current message
        messages.append({"role": "user", "content": chat_request.message})

        # Call OpenAI API
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {openai_api_key}"
        }

        payload = {
            "model": "gpt-4-turbo-preview",
            "messages": messages,
            "max_tokens": 500,
            "temperature": 0.1
        }

        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json=payload,
            timeout=30
        )

        if response.status_code == 200:
            result = response.json()
            ai_response = result["choices"][0]["message"]["content"]
            return ChatResponse(response=ai_response)
        else:
            print(f"OpenAI API error: {response.status_code} - {response.text}")
            return get_fallback_response(chat_request.message)

    except Exception as e:
        print(f"OpenAI Chat API error: {e}")
        return get_fallback_response(chat_request.message)

def get_fallback_response(message: str) -> ChatResponse:
    """Fallback responses when API fails"""
    msg = message.lower()
    
    if any(word in msg for word in ["emergency", "fund"]):
        response = "Emergency fund should cover 6 months of expenses. Keep in liquid funds or high-yield savings account for easy access during emergencies."
    elif any(word in msg for word in ["life", "insurance"]):
        response = "Term life insurance is essential - get 10-15x your annual income coverage. Health insurance is equally important for medical emergencies."
    elif any(word in msg for word in ["etf", "exchange"]):
        response = "ETFs offer low-cost diversified investing. Consider Nifty 50 ETF for large-cap exposure or Gold ETF for portfolio diversification."
    elif any(word in msg for word in ["mutual", "fund"]):
        response = "Mutual funds pool money from investors to buy diversified portfolios. Start with SIP in equity funds for long-term growth."
    elif any(word in msg for word in ["sip", "systematic"]):
        response = "SIP (Systematic Investment Plan) is excellent for regular investing. Start with ₹1000-5000 monthly in equity mutual funds."
    elif any(word in msg for word in ["saving", "save", "plan"]):
        response = "Follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings. Build 6-month emergency fund first."
    elif any(word in msg for word in ["credit", "score", "cibil"]):
        response = "Maintain credit utilization below 30%, pay all bills on time, check CIBIL report annually for good credit score (750+)."
    else:
        response = "I'm here to help with investments, savings, credit, loans, tax planning, and financial goals. What specific area would you like guidance on?"
    
    return ChatResponse(response=response)