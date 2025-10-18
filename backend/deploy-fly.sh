#!/bin/bash
# Fly.io Deployment Script for NeoCred Backend

set -e

echo "🚀 Deploying NeoCred Backend to Fly.io..."

# Check if flyctl is installed
if ! command -v flyctl &> /dev/null; then
    echo "❌ flyctl is not installed. Please install it first:"
    echo "curl -L https://fly.io/install.sh | sh"
    exit 1
fi

# Check if logged in to Fly.io
if ! flyctl auth whoami &> /dev/null; then
    echo "❌ Not logged in to Fly.io. Please run: flyctl auth login"
    exit 1
fi

# Set environment variables for production
echo "🔧 Setting production environment variables..."

flyctl secrets set \
  ENVIRONMENT=production \
  DATABASE_URL="$DATABASE_URL" \
  REDIS_URL="$REDIS_URL" \
  SECRET_KEY="$SECRET_KEY" \
  OPENAI_API_KEY="$OPENAI_API_KEY" \
  SENTRY_DSN="$SENTRY_DSN" \
  --app neocred-backend

# Deploy to Fly.io
echo "📦 Deploying application..."
flyctl deploy --app neocred-backend

# Check deployment status
echo "🏥 Checking deployment health..."
flyctl status --app neocred-backend

# Test SSL certificate
echo "🔒 Testing SSL certificate..."
curl -I https://neocred-backend.fly.dev/health

echo "✅ Deployment completed successfully!"
echo "🌐 Backend URL: https://neocred-backend.fly.dev"
echo "📊 Health Check: https://neocred-backend.fly.dev/health"
echo "📚 API Docs: https://neocred-backend.fly.dev/docs"