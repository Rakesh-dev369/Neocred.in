# Purpose: Real Anthropic API integration for chat
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict, Any
import os
import requests
import json

router = APIRouter(prefix="/api", tags=["Chat"])

# 🧠 Multi-Prompt Architecture
def get_system_prompt() -> str:
    """Global system prompt - Neo's identity and core guidelines"""
    return """You are Neo — an AI Financial Advisor for NeoCred, India's intelligent financial education and advisory platform.

Mission:
Educate and guide users on personal finance, investments, savings, loans, credit, and responsible money management — specifically for the Indian financial ecosystem.

Formatting Guidelines:
1. Always structure responses with clear headings and bullet points
2. Use relevant emojis for each section (💰 for money, 📊 for investments, 🏦 for banking, etc.)
3. Format like: "## 💰 Main Topic\n\n• Point 1\n• Point 2\n\n## 📊 Next Section\n\n• Point 1"
4. Use bullet points (•) instead of numbered lists for better readability

Core Guidelines:
1. Provide detailed, structured answers with clear sections.
2. Use real-world Indian data, examples, and ₹ currency.
3. Explain the "why" behind every recommendation clearly.
4. Reference Indian financial products like PPF, ELSS, NPS, SIP, NSC, FDs, RDs, credit cards, and CIBIL scores.
5. Never give false or speculative data. Use "typically," "on average," or "as per RBI/SEBI norms."
6. Promote user awareness, consent, and financial literacy before action.
7. Be friendly, empathetic, professional — sound like a trustworthy financial guide, not a marketer.
8. Always use relevant emojis and structured formatting with headings and bullet points."""

def get_context_prompt(user_query: str) -> str:
    """Dynamic context selection based on user query"""
    query = user_query.lower()
    
    if any(word in query for word in ["invest", "mutual fund", "sip", "elss", "nps", "portfolio"]):
        return """Focus: Help users make smart, long-term investment decisions.

Include:
- Compare mutual funds, SIPs, ELSS, NPS, and fixed deposits.
- Explain tax implications under Section 80C and LTCG/STCG.
- Suggest portfolio allocation examples (e.g., 60% equity, 30% debt, 10% gold).
- Always mention diversification and risk levels."""
    
    elif any(word in query for word in ["credit", "cibil", "score", "credit card"]):
        return """Focus: Educate users about credit scores, reports, and credit health.

Include:
- Explain what impacts a CIBIL score (repayment history, utilization ratio, inquiries).
- Suggest actionable steps to improve credit score with timelines.
- Include safe credit card habits and responsible loan management.
- Mention Indian credit bureaus: CIBIL, Experian, Equifax, CRIF."""
    
    elif any(word in query for word in ["loan", "emi", "home loan", "personal loan", "education loan"]):
        return """Focus: Compare loan products and improve loan eligibility.

Include:
- Compare personal loan, home loan, and education loan options from Indian banks/NBFCs.
- Explain how credit score and income affect approval.
- Provide EMI calculation examples with interest rates.
- Emphasize reading loan agreements and understanding floating vs fixed rates."""
    
    elif any(word in query for word in ["save", "saving", "budget", "emergency fund", "fd", "rd", "ppf"]):
        return """Focus: Help users build disciplined savings habits.

Include:
- Compare short-term vs long-term saving products (FD, RD, PPF).
- Explain emergency fund planning (3–6 months of expenses).
- Provide budget allocation examples using the 50/30/20 rule.
- Encourage goal-based saving (travel, education, home)."""
    
    elif any(word in query for word in ["learn", "education", "explain", "what is", "how does"]):
        return """Focus: Financial education and awareness.

Include:
- Explain concepts like inflation, compounding, taxation, and risk.
- Use analogies and real-life Indian examples.
- Encourage lifelong financial learning with small actionable steps."""
    
    else:
        return ""

class ChatMessage(BaseModel):
    message: str
    context: Optional[Dict[str, Any]] = None

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

@router.post("/chat", response_model=ChatResponse)
async def anthropic_chat(chat_request: ChatMessage):
    """
    Real Anthropic Claude API integration
    """
    try:
        anthropic_api_key = os.getenv("ANTHROPIC_API_KEY")
        if not anthropic_api_key:
            # Fallback to keyword responses if no API key
            return get_fallback_response(chat_request.message)

        # Multi-prompt architecture
        system_prompt = get_system_prompt()
        context_prompt = get_context_prompt(chat_request.message)
        
        # Combine system and context prompts
        final_prompt = f"{system_prompt}\n\n{context_prompt}" if context_prompt else system_prompt

        # Prepare conversation history
        messages = []
        if chat_request.context and "conversation_history" in chat_request.context:
            for msg in chat_request.context["conversation_history"][-3:]:
                if msg.get("from") == "user":
                    messages.append({"role": "user", "content": msg.get("text", "")})
                elif msg.get("from") == "bot":
                    messages.append({"role": "assistant", "content": msg.get("text", "")})

        # Add current message
        messages.append({"role": "user", "content": chat_request.message})

        # Call Anthropic API
        headers = {
            "Content-Type": "application/json",
            "x-api-key": anthropic_api_key,
            "anthropic-version": "2023-06-01"
        }

        payload = {
            "model": "claude-3-5-sonnet-20241022",
            "max_tokens": 800,
            "system": final_prompt,
            "messages": messages
        }

        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=payload,
            timeout=30
        )

        if response.status_code == 200:
            result = response.json()
            ai_response = result["content"][0]["text"]
            # Decode HTML entities that might be encoded by Anthropic API
            clean_response = ai_response.replace('&#39;', "'").replace('&amp;', '&').replace('&quot;', '"')
            return ChatResponse(response=clean_response)
        else:
            print(f"Anthropic API error: {response.status_code} - {response.text}")
            return get_fallback_response(chat_request.message)

    except Exception as e:
        print(f"Chat API error: {e}")
        return get_fallback_response(chat_request.message)

def get_fallback_response(message: str) -> ChatResponse:
    """Fallback responses when API fails"""
    msg = message.lower()
    
    if any(word in msg for word in ["emergency", "fund"]):
        response = "Emergency fund should cover 6 months of expenses. Keep in liquid funds or high-yield savings account for easy access during emergencies. This is your financial safety net."
    elif any(word in msg for word in ["life", "insurance"]):
        response = "Term life insurance is essential - get 10-15x your annual income coverage. Health insurance is equally important for medical emergencies. Start early for lower premiums."
    elif any(word in msg for word in ["etf", "exchange"]):
        response = "ETFs offer low-cost diversified investing. Consider Nifty 50 ETF for large-cap exposure or Gold ETF for portfolio diversification. Lower expense ratios than mutual funds."
    elif any(word in msg for word in ["mutual", "fund"]):
        response = "Mutual funds pool money from investors to buy diversified portfolios. Start with SIP in equity funds for long-term growth. Consider large-cap funds for stability."
    elif any(word in msg for word in ["sip", "systematic"]):
        response = "SIP (Systematic Investment Plan) is excellent for regular investing. Start with ₹1000-5000 monthly in equity mutual funds for wealth creation over 5+ years."
    elif any(word in msg for word in ["saving", "save", "plan"]):
        response = "Follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings. Build 6-month emergency fund first, then invest in PPF, ELSS for tax benefits."
    elif any(word in msg for word in ["credit", "score", "cibil"]):
        response = "Maintain credit utilization below 30%, pay all bills on time, check CIBIL report annually. Good credit score (750+) gets better loan rates."
    elif any(word in msg for word in ["loan", "emi", "interest"]):
        response = "Compare interest rates across banks, ensure EMI doesn't exceed 40% of income. Consider prepayment to reduce total interest burden."
    elif any(word in msg for word in ["tax", "80c", "deduction"]):
        response = "Maximize ₹1.5L deduction under 80C via ELSS, PPF, NSC. Use 80D for health insurance premiums. Plan investments before March for tax efficiency."
    else:
        response = "I'm here to help with investments, savings, credit, loans, tax planning, and financial goals. What specific area would you like guidance on?"
    
    return ChatResponse(response=response)