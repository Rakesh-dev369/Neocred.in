#!/usr/bin/env python3
"""
Simple server starter with Anthropic integration
"""
import uvicorn
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

if __name__ == "__main__":
    print("🚀 Starting NeoCred Backend with Anthropic AI...")
    print(f"📡 Server will run on: http://localhost:8001")
    print(f"🤖 AI Provider: Anthropic Claude")
    
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8001,
        reload=True,
        log_level="info"
    )