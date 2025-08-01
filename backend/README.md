# NeoCred FinBot Backend v2.0

🚀 **Enhanced FastAPI backend** for the NeoCred FinBot AI assistant with advanced features including caching, monitoring, authentication, and comprehensive analytics.

## ✨ Features

### Core Features
- 🤖 **OpenAI GPT-4 Turbo** integration with circuit breaker
- 🔄 **Redis caching** for improved performance
- 🛡️ **Rate limiting** with Redis backend
- 🔐 **JWT Authentication** support
- 📊 **Prometheus metrics** and monitoring
- 🗄️ **Database persistence** (SQLite/PostgreSQL)
- 🌐 **CORS & Security** middleware
- 🔒 **SSL/HTTPS** support

### Advanced Features
- ⚡ **Response caching** (5-minute TTL)
- 📈 **Real-time analytics** and usage stats
- 🔧 **Circuit breaker** for API resilience
- 📝 **Structured logging** with JSON output
- 🎯 **Session management** for chat history
- 🚨 **Health checks** with dependency status
- 📊 **Metrics endpoint** for monitoring

## 🚀 Quick Setup

### Option 1: Automated Setup
```bash
python setup.py
```

### Option 2: Manual Setup

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Setup database:**
```bash
python migrate.py create
```

3. **Configure environment** (update `.env`):
```env
OPENAI_API_KEY=your_openai_api_key_here
SECRET_KEY=your_secure_secret_key
REDIS_URL=redis://localhost:6379/0
```

4. **Start the server:**
```bash
python main.py
```

## 📡 API Endpoints

### Chat API
- `POST /api/chat` - Enhanced chat with caching & analytics
- `GET /api/sessions/{user_id}` - Get user chat sessions

### Monitoring & Admin
- `GET /health` - Comprehensive health check
- `GET /api/stats` - Detailed usage statistics
- `GET /metrics` - Prometheus metrics
- `POST /api/clear-cache` - Clear response cache

### Core
- `GET /` - API status

## 🔧 Configuration

### Environment Variables

#### OpenAI Configuration
```env
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4-turbo-preview
OPENAI_MAX_TOKENS=600
OPENAI_TEMPERATURE=0.7
```

#### Server Configuration
```env
PORT=8000
HOST=127.0.0.1
ENVIRONMENT=development
SSL_ENABLED=false
```

#### Security
```env
SECRET_KEY=your-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

#### Redis & Caching
```env
REDIS_URL=redis://localhost:6379/0
CACHE_ENABLED=true
CACHE_TTL=300
```

#### Database
```env
DATABASE_URL=sqlite:///./finbot.db
# For PostgreSQL:
# DATABASE_URL=postgresql://user:password@localhost/finbot
```

#### Rate Limiting
```env
RATE_LIMIT_REQUESTS=30
RATE_LIMIT_WINDOW=60
```

#### Monitoring
```env
METRICS_ENABLED=true
LOG_LEVEL=INFO
```

## 🗄️ Database Management

```bash
# Check database status
python migrate.py check

# Create tables
python migrate.py create

# Reset database (⚠️ destroys data)
python migrate.py reset

# Drop all tables
python migrate.py drop
```

## 📊 Monitoring & Analytics

### Prometheus Metrics
Access metrics at: `http://localhost:8000/metrics`

**Available metrics:**
- `http_requests_total` - Total HTTP requests
- `http_request_duration_seconds` - Request duration
- `openai_requests_total` - OpenAI API requests
- `openai_tokens_total` - Total tokens used
- `cache_hits_total` - Cache hits
- `cache_misses_total` - Cache misses

### Health Check
```bash
curl http://localhost:8000/health
```

**Response includes:**
- API key configuration status
- OpenAI API connectivity
- Redis connection status
- Database connectivity
- System version & timestamp

### Usage Statistics
```bash
curl http://localhost:8000/api/stats
```

**Provides:**
- Total requests processed
- Active users count
- Cache hit rate
- Average response time
- Total tokens consumed

## 🔒 SSL/HTTPS Setup

1. **Generate certificates:**
```bash
python generate_ssl.py
```

2. **Enable HTTPS:**
```env
SSL_ENABLED=true
SSL_CERT_PATH=ssl/cert.pem
SSL_KEY_PATH=ssl/key.pem
```

## 🐳 Docker Support

```dockerfile
# Dockerfile example
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "main.py"]
```

## 🔍 Troubleshooting

### Common Issues

1. **Redis Connection Failed**
   - Install Redis: `sudo apt install redis-server`
   - Or disable caching: `CACHE_ENABLED=false`

2. **Database Errors**
   - Reset database: `python migrate.py reset`
   - Check permissions on SQLite file

3. **OpenAI API Errors**
   - Verify API key in `.env`
   - Check API quota and billing

4. **High Memory Usage**
   - Reduce `CACHE_TTL`
   - Lower `OPENAI_MAX_TOKENS`

### Debug Mode
```env
LOG_LEVEL=DEBUG
ENVIRONMENT=development
```

## 📈 Performance Optimization

### Recommended Settings

**Production:**
```env
CACHE_ENABLED=true
CACHE_TTL=300
RATE_LIMIT_REQUESTS=50
OPENAI_MAX_TOKENS=500
LOG_LEVEL=INFO
```

**Development:**
```env
CACHE_ENABLED=false
LOG_LEVEL=DEBUG
RATE_LIMIT_REQUESTS=100
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Add tests for new features
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Version:** 2.0.0  
**Last Updated:** 2024  
**Maintainer:** NeoCred Team