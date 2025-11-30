"""WebSocket Client Example for Testing"""
import asyncio
import websockets
import json

async def websocket_client_example():
    """Example WebSocket client for testing"""
    uri = "ws://localhost:8000/ws/test_client?user_id=user123"
    
    try:
        async with websockets.connect(uri) as websocket:
            print("🔗 Connected to NeoCred WebSocket")
            
            # Send ping
            await websocket.send(json.dumps({"type": "ping"}))
            
            # Subscribe to updates
            await websocket.send(json.dumps({
                "type": "subscribe",
                "subscription": "credit_updates"
            }))
            
            # Request credit analysis
            await websocket.send(json.dumps({
                "type": "request_credit_analysis"
            }))
            
            # Listen for messages
            async for message in websocket:
                data = json.loads(message)
                print(f"📨 Received: {data}")
                
                # Handle different message types
                if data.get("type") == "pong":
                    print("💓 Heartbeat received")
                elif data.get("type") == "credit_analysis":
                    print(f"📊 Credit Analysis: {data.get('data')}")
                elif data.get("type") == "calculation_progress":
                    progress = data.get("progress", 0)
                    print(f"⏳ Progress: {progress}%")
                    if progress >= 100:
                        print("✅ Analysis complete!")
    
    except Exception as e:
        print(f"❌ WebSocket error: {e}")

async def sse_client_example():
    """Example SSE client using aiohttp"""
    try:
        import aiohttp
        
        async with aiohttp.ClientSession() as session:
            async with session.get('http://localhost:8000/sse/market-updates') as resp:
                print("📡 Connected to SSE stream")
                
                async for line in resp.content:
                    if line.startswith(b'data: '):
                        data = json.loads(line[6:].decode())
                        print(f"📈 Market Update: {data}")
    
    except ImportError:
        print("⚠️ aiohttp not installed. Install with: pip install aiohttp")
    except Exception as e:
        print(f"❌ SSE error: {e}")

if __name__ == "__main__":
    print("🚀 NeoCred Real-time Client Examples")
    print("1. WebSocket Client")
    print("2. SSE Client")
    
    choice = input("Choose (1 or 2): ")
    
    if choice == "1":
        asyncio.run(websocket_client_example())
    elif choice == "2":
        asyncio.run(sse_client_example())
    else:
        print("Invalid choice")