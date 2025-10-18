# Authentication & Security Module

## Features Implemented ✅

### JWT Authentication
- Token creation and verification
- Password hashing with bcrypt
- Secure token expiration (30 minutes)

### Supabase Integration
- Third-party OAuth (Google, Apple, GitHub)
- Email/password authentication
- User management

### Rate Limiting
- DDoS protection with FastAPI-Limiter
- Redis-backed storage
- Configurable limits per endpoint

### Security Features
- Cryptography utilities
- Password hashing with Passlib
- JWT with python-jose
- Protected route dependencies

## Usage

### Environment Setup
```env
SECRET_KEY=your-super-secret-jwt-key-here
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
REDIS_URL=redis://localhost:6379
```

### API Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/oauth/{provider}` - OAuth login
- `GET /auth/me` - Get current user info

### Protected Routes
```python
from auth.dependencies import get_current_active_user

@app.get("/protected")
async def protected_route(current_user = Depends(get_current_active_user)):
    return {"user": current_user.email}
```

## Installation
```bash
pip install -r requirements.txt
```

## Rate Limits
- Registration: 5/minute
- Login: 10/minute
- OAuth: 10/minute
- Default: 100/minute