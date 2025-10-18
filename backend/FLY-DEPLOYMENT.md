# NeoCred Fly.io Deployment Guide

## 🚀 Quick Deployment

### 1. Install Fly.io CLI
```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login to Fly.io
flyctl auth login
```

### 2. Initialize App (First Time Only)
```bash
# Create app
flyctl apps create neocred-backend --org personal

# Set secrets
flyctl secrets set \
  ENVIRONMENT=production \
  DATABASE_URL="your-postgres-url" \
  REDIS_URL="your-redis-url" \
  SECRET_KEY="your-secret-key" \
  OPENAI_API_KEY="your-openai-key" \
  --app neocred-backend
```

### 3. Deploy
```bash
# Deploy application
flyctl deploy --app neocred-backend

# Check status
flyctl status --app neocred-backend
```

## 🔒 SSL Certificate

**Fly.io automatically provides SSL certificates via Let's Encrypt:**

- ✅ **Automatic SSL**: Certificates are provisioned automatically
- ✅ **Auto-renewal**: Certificates renew automatically before expiration
- ✅ **HTTPS redirect**: Configured in `fly.toml`
- ✅ **Security headers**: Added via middleware
- ✅ **HSTS**: Strict Transport Security enabled

### SSL Verification
```bash
# Test SSL certificate
curl -I https://neocred-backend.fly.dev/health

# Check certificate details
openssl s_client -connect neocred-backend.fly.dev:443 -servername neocred-backend.fly.dev
```

## 🌐 Production URLs

- **Backend API**: https://neocred-backend.fly.dev
- **Health Check**: https://neocred-backend.fly.dev/health
- **API Docs**: https://neocred-backend.fly.dev/docs (disabled in production)

## 🔧 Configuration

### Fly.toml Features
- **Force HTTPS**: All HTTP traffic redirected to HTTPS
- **Health checks**: Automatic health monitoring
- **Auto-scaling**: Machines start/stop based on traffic
- **Mumbai region**: Optimized for Indian users

### Security Headers
- `Strict-Transport-Security`: Force HTTPS for 1 year
- `X-Content-Type-Options`: Prevent MIME sniffing
- `X-Frame-Options`: Prevent clickjacking
- `X-XSS-Protection`: XSS filtering
- `Content-Security-Policy`: Restrict resource loading

## 📊 Monitoring

```bash
# View logs
flyctl logs --app neocred-backend

# Monitor metrics
flyctl metrics --app neocred-backend

# Scale application
flyctl scale count 2 --app neocred-backend
```

## 🔄 Updates

```bash
# Deploy updates
flyctl deploy --app neocred-backend

# Rollback if needed
flyctl releases --app neocred-backend
flyctl rollback --app neocred-backend
```

## 🛡️ Security Features

1. **Automatic SSL/TLS**: Let's Encrypt certificates
2. **HTTPS Redirect**: Force secure connections
3. **Security Headers**: Comprehensive protection
4. **Trusted Hosts**: Whitelist allowed domains
5. **CORS**: Restricted to production domains

**SSL Status: ✅ IMPLEMENTED** - Fly.io handles Let's Encrypt automatically