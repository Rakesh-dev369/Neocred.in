# Real-time & Streaming Module

## Features Implemented ✅

### WebSockets
- **Live Credit Feedback**: Real-time AI credit analysis updates
- **Dashboard Streaming**: Portfolio updates, risk monitoring
- **Connection Management**: User-specific and group broadcasting
- **Progress Tracking**: Calculation progress streaming
- **Heartbeat Support**: Connection health monitoring

### Server-Sent Events (Optional)
- **Credit Score Updates**: Periodic credit score streaming
- **Market Data**: Real-time market updates
- **Calculation Progress**: Long-running calculation updates
- **One-way Communication**: Server-to-client streaming

### Future Streaming (Kafka/RabbitMQ)
- **Infrastructure Stubs**: Ready for Kafka/RabbitMQ integration
- **Topic Configuration**: Pre-defined topics for scaling
- **Message Patterns**: Producer/consumer patterns prepared
- **Scalability Ready**: Easy migration to distributed streaming

## Module Structure

```
realtime/
├── websocket_manager.py      # WebSocket connection management
├── websocket_routes.py       # WebSocket endpoints
├── sse_routes.py            # Server-Sent Events endpoints
├── streaming_future.py      # Kafka/RabbitMQ stubs
├── client_example.py        # Testing client examples
└── README.md               # This documentation
```

## WebSocket Endpoints

### Main WebSocket
```
ws://localhost:8000/realtime/ws/{client_id}?user_id={user_id}
```

**Features:**
- Client-specific connections
- User authentication support
- Message type handling
- Subscription management

### Dashboard WebSocket
```
ws://localhost:8000/realtime/ws/dashboard/{user_id}
```

**Features:**
- Dedicated dashboard streaming
- Portfolio updates
- Market alerts
- Risk monitoring

## Server-Sent Events Endpoints

### Credit Score Updates
```
GET /realtime/sse/credit-score/{user_id}
```

### Market Updates
```
GET /realtime/sse/market-updates
```

### Calculation Progress
```
GET /realtime/sse/calculation/{calculation_id}
```

## Usage Examples

### WebSocket Client (JavaScript)
```javascript
// Connect to WebSocket
const ws = new WebSocket('ws://localhost:8000/realtime/ws/client123?user_id=user456');

// Handle messages
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    switch(data.type) {
        case 'credit_analysis':
            updateCreditScore(data.data);
            break;
        case 'risk_score_update':
            updateRiskIndicator(data.risk_score);
            break;
        case 'calculation_progress':
            updateProgressBar(data.progress);
            break;
    }
};

// Send messages
ws.send(JSON.stringify({
    type: 'subscribe',
    subscription: 'credit_updates'
}));
```

### Server-Sent Events (JavaScript)
```javascript
// Connect to SSE
const eventSource = new EventSource('/realtime/sse/market-updates');

// Handle events
eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    updateMarketData(data);
};
```

### Python Client
```python
import asyncio
import websockets
import json

async def connect_websocket():
    uri = "ws://localhost:8000/realtime/ws/test_client?user_id=user123"
    
    async with websockets.connect(uri) as websocket:
        # Send subscription
        await websocket.send(json.dumps({
            "type": "subscribe",
            "subscription": "credit_updates"
        }))
        
        # Listen for messages
        async for message in websocket:
            data = json.loads(message)
            print(f"Received: {data}")
```

## Real-time Features

### Credit Feedback Streaming
- **Analysis Progress**: Step-by-step credit analysis updates
- **Risk Score Changes**: Real-time risk score calculations
- **Factor Updates**: Contributing factor explanations
- **Recommendations**: Live improvement suggestions

### Dashboard Updates
- **Portfolio Values**: Real-time investment tracking
- **Market Alerts**: Breaking financial news
- **Goal Progress**: SIP and investment goal tracking
- **Risk Monitoring**: Credit utilization alerts

### Calculator Integration
- **Progress Streaming**: Long-running calculation updates
- **Result Broadcasting**: Instant result delivery
- **Error Handling**: Real-time error notifications
- **Multi-user Support**: Concurrent calculation handling

## Connection Management

### Connection Types
- **Personal**: User-specific connections
- **Group**: Client-group broadcasting
- **Global**: System-wide announcements

### Message Types
```python
# Connection messages
{"type": "connection", "status": "connected"}
{"type": "ping"} / {"type": "pong"}

# Credit updates
{"type": "credit_analysis", "data": {...}}
{"type": "risk_score_update", "risk_score": 0.75}

# Progress tracking
{"type": "calculation_progress", "progress": 50}

# Dashboard updates
{"type": "portfolio_update", "portfolio": {...}}
{"type": "market_alert", "alert": {...}}
```

## Scaling Considerations

### Current (MVP Level)
- **WebSockets**: Direct FastAPI WebSocket handling
- **In-Memory**: Connection management in application memory
- **Single Instance**: Works for moderate concurrent users

### Future Scaling (Kafka/RabbitMQ)
- **Message Queues**: Distributed message handling
- **Horizontal Scaling**: Multiple application instances
- **Persistent Messaging**: Message durability and replay
- **Load Balancing**: WebSocket connection distribution

## Testing

### Run Test Client
```bash
# WebSocket client
python realtime/client_example.py

# Choose option 1 for WebSocket testing
# Choose option 2 for SSE testing
```

### Manual Testing
```bash
# Start server
uvicorn main:app --reload

# Connect with browser or tools like:
# - WebSocket King (Chrome extension)
# - Postman WebSocket
# - curl for SSE endpoints
```

## Integration with Frontend

### React Integration
```jsx
import { useEffect, useState } from 'react';

function CreditDashboard({ userId }) {
    const [creditScore, setCreditScore] = useState(null);
    const [ws, setWs] = useState(null);
    
    useEffect(() => {
        const websocket = new WebSocket(
            `ws://localhost:8000/realtime/ws/dashboard/${userId}`
        );
        
        websocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'credit_analysis') {
                setCreditScore(data.data.score);
            }
        };
        
        setWs(websocket);
        
        return () => websocket.close();
    }, [userId]);
    
    return (
        <div>
            <h2>Credit Score: {creditScore}</h2>
            {/* Real-time updates will appear here */}
        </div>
    );
}
```

### API Integration
```python
# Trigger WebSocket updates from API endpoints
from realtime.websocket_manager import CreditFeedbackStreamer

@app.post("/api/analyze-credit/{user_id}")
async def analyze_credit(user_id: str, credit_data: dict):
    # Perform analysis
    analysis_result = perform_credit_analysis(credit_data)
    
    # Stream results in real-time
    await CreditFeedbackStreamer.stream_credit_analysis(
        user_id, analysis_result
    )
    
    return {"status": "analysis_complete"}
```

## Performance Considerations

### WebSocket Optimization
- **Connection Pooling**: Efficient connection management
- **Message Batching**: Reduce message frequency for high-volume updates
- **Compression**: Enable WebSocket compression for large messages
- **Heartbeat**: Regular ping/pong for connection health

### Memory Management
- **Connection Cleanup**: Automatic disconnection handling
- **Message Queuing**: Prevent memory leaks from undelivered messages
- **Resource Limits**: Maximum connections per user/client

### Monitoring
- **Connection Metrics**: Active connections, message rates
- **Error Tracking**: WebSocket connection failures
- **Performance**: Message delivery latency
- **Resource Usage**: Memory and CPU impact

This real-time module provides MVP-level WebSocket functionality for live credit feedback and dashboard updates, with clear migration path to distributed streaming when scaling requirements increase.