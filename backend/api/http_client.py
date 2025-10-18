"""Async HTTP Client with aiohttp"""
import aiohttp
import asyncio
from typing import Dict, Any, Optional
import json

class HTTPClient:
    def __init__(self, timeout: int = 30):
        self.timeout = aiohttp.ClientTimeout(total=timeout)
        self.session: Optional[aiohttp.ClientSession] = None
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession(timeout=self.timeout)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    async def get(self, url: str, headers: Dict = None) -> Dict[str, Any]:
        async with self.session.get(url, headers=headers) as response:
            return await response.json()
    
    async def post(self, url: str, data: Dict = None, headers: Dict = None) -> Dict[str, Any]:
        async with self.session.post(url, json=data, headers=headers) as response:
            return await response.json()

# Global client instance
http_client = HTTPClient()

async def fetch_financial_data(api_url: str) -> Dict[str, Any]:
    """Fetch external financial data"""
    async with http_client as client:
        return await client.get(api_url)

async def send_webhook(url: str, data: Dict[str, Any]) -> Dict[str, Any]:
    """Send webhook notifications"""
    async with http_client as client:
        return await client.post(url, data)