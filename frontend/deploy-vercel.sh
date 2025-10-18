#!/bin/bash
# Vercel Deployment Script for NeoCred Frontend

set -e

echo "🚀 Deploying NeoCred Frontend to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

# Check if logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel. Please run: vercel login"
    exit 1
fi

# Set environment variables for production
echo "🔧 Setting production environment variables..."

vercel env add NEXT_PUBLIC_API_URL production <<< "https://neocred-backend.fly.dev"
vercel env add NEXT_PUBLIC_FRONTEND_URL production <<< "https://neocred.in"
vercel env add NEXT_PUBLIC_ENVIRONMENT production <<< "production"
vercel env add NEXT_TELEMETRY_DISABLED production <<< "1"

# Deploy to Vercel
echo "📦 Deploying to production..."
vercel --prod

# Get deployment URL
DEPLOYMENT_URL=$(vercel ls --scope=personal | grep neocred | head -1 | awk '{print $2}')

echo "✅ Deployment completed successfully!"
echo "🌐 Frontend URL: https://neocred.in"
echo "📊 Deployment URL: $DEPLOYMENT_URL"
echo "🔗 Vercel Dashboard: https://vercel.com/dashboard"

# Test deployment
echo "🧪 Testing deployment..."
curl -I https://neocred.in

echo "🎉 NeoCred Frontend is live!"