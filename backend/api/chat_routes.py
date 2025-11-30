# Purpose: Chat API routes with Anthropic integration
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
import os
import httpx
import json

router = APIRouter(prefix="/api", tags=["Chat"])

class ChatMessage(BaseModel):
    message: str
    context: Optional[Dict[str, Any]] = None

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

@router.post("/chat", response_model=ChatResponse)
async def chat_with_ai(chat_request: ChatMessage):
    """
    Chat with AI using Anthropic Claude API
    """
    try:
        anthropic_api_key = os.getenv("ANTHROPIC_API_KEY")
        if not anthropic_api_key:
            raise HTTPException(status_code=500, detail="Anthropic API key not configured")

        # Prepare the system prompt for financial advisor
        system_prompt = """You are Neo, an AI financial advisor for NeoCred, a financial platform in India. 
        You provide helpful, accurate financial advice about investments, credit, savings, loans, and financial planning.
        Keep responses concise, practical, and relevant to Indian financial markets.
        Always be helpful and professional."""

        # Prepare conversation history
        messages = []
        if chat_request.context and "conversation_history" in chat_request.context:
            for msg in chat_request.context["conversation_history"][-3:]:  # Last 3 messages
                if msg["from"] == "user":
                    messages.append({"role": "user", "content": msg["text"]})
                elif msg["from"] == "bot":
                    messages.append({"role": "assistant", "content": msg["text"]})

        # Add current message
        messages.append({"role": "user", "content": chat_request.message})

        # Call Anthropic API
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.anthropic.com/v1/messages",
                headers={
                    "Content-Type": "application/json",
                    "x-api-key": anthropic_api_key,
                    "anthropic-version": "2023-06-01"
                },
                json={
                    "model": "claude-3-sonnet-20240229",
                    "max_tokens": 1000,
                    "system": system_prompt,
                    "messages": messages
                },
                timeout=30.0
            )

        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Failed to get AI response")

        result = response.json()
        ai_response = result["content"][0]["text"]

        return ChatResponse(response=ai_response)

    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="AI service timeout")
    except Exception as e:
        print(f"Chat API error: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")