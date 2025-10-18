# NeoCred Vercel Deployment Guide

## 🚀 Quick Deployment

### 1. Install Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login
```

### 2. Initialize Project (First Time Only)
```bash
# Navigate to frontend directory
cd frontend

# Initialize Vercel project
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: neocred-frontend
# - Directory: ./
# - Override settings? No
```

### 3. Configure Environment Variables
```bash
# Set production environment variables
vercel env add NEXT_PUBLIC_API_URL production
# Enter: https://neocred-backend.fly.dev

vercel env add NEXT_PUBLIC_FRONTEND_URL production
# Enter: https://neocred.in

vercel env add NEXT_PUBLIC_ENVIRONMENT production
# Enter: production
```

### 4. Deploy to Production
```bash
# Deploy to production
vercel --prod

# Or use the deployment script
chmod +x deploy-vercel.sh
./deploy-vercel.sh
```

## 🔧 Configuration Features

### Vercel.json Configuration
- ✅ **API Proxy**: Routes `/api/*` to Fly.io backend
- ✅ **Security Headers**: HSTS, XSS protection, content type options
- ✅ **Redirects**: `/docs` redirects to backend documentation
- ✅ **Environment Variables**: Production-ready configuration

### Next.js Configuration
- ✅ **Image Optimization**: WebP and AVIF support
- ✅ **Performance**: Compression, CSS optimization
- ✅ **Security**: CSP headers, security middleware
- ✅ **API Rewrites**: Seamless backend integration

### SSL & Security
- ✅ **Automatic SSL**: Vercel provides SSL certificates
- ✅ **Custom Domain**: Support for neocred.in
- ✅ **Security Headers**: Comprehensive protection
- ✅ **Content Security Policy**: Strict resource loading

## 🌐 Production URLs

- **Frontend**: https://neocred.in
- **API Proxy**: https://neocred.in/api/* → https://neocred-backend.fly.dev/api/*
- **Docs Redirect**: https://neocred.in/docs → https://neocred-backend.fly.dev/docs

## 📊 Monitoring & Analytics

### Built-in Analytics
- ✅ **Vercel Analytics**: Automatic performance monitoring
- ✅ **Web Vitals**: Core performance metrics
- ✅ **Real User Monitoring**: Production insights

### Custom Analytics
- ✅ **Google Analytics**: User behavior tracking
- ✅ **Hotjar**: User experience insights
- ✅ **Sentry**: Error tracking and performance

## 🔄 Deployment Workflow

### Automatic Deployments
- **Production**: Push to `main` branch → Auto-deploy to neocred.in
- **Preview**: Push to any branch → Auto-deploy preview URL
- **Pull Requests**: Automatic preview deployments

### Manual Deployments
```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# Check deployment status
vercel ls

# View logs
vercel logs
```

## 🛡️ Security Features

### Headers Configuration
```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

### Content Security Policy
- **Scripts**: Self, Vercel Analytics, Hotjar
- **Styles**: Self, inline styles
- **Images**: Self, data URLs, HTTPS
- **Connect**: Self, backend API, analytics

## 🔧 Environment Variables

### Required Variables
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_FRONTEND_URL`: Frontend URL
- `NEXT_PUBLIC_ENVIRONMENT`: Environment name

### Optional Variables
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`: Analytics ID
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: GA tracking ID
- `NEXT_PUBLIC_HOTJAR_ID`: Hotjar site ID
- `NEXT_PUBLIC_SENTRY_DSN`: Error tracking DSN

## 📈 Performance Optimizations

### Build Optimizations
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Remove unused code
- **Compression**: Gzip/Brotli compression

### Runtime Optimizations
- **Edge Functions**: Global distribution
- **CDN**: Automatic asset caching
- **ISR**: Incremental Static Regeneration
- **API Routes**: Serverless functions

## 🚨 Troubleshooting

### Common Issues
1. **Build Failures**: Check environment variables
2. **API Errors**: Verify backend URL and CORS
3. **SSL Issues**: Ensure HTTPS in all URLs
4. **Performance**: Check bundle size and images

### Debug Commands
```bash
# Check build locally
npm run build

# Analyze bundle
npm run analyze

# Check environment variables
vercel env ls

# View deployment logs
vercel logs [deployment-url]
```

## 🎯 Custom Domain Setup

### Add Custom Domain
1. Go to Vercel Dashboard
2. Select project → Settings → Domains
3. Add `neocred.in` and `www.neocred.in`
4. Configure DNS records as instructed
5. SSL certificates are automatically provisioned

### DNS Configuration
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Vercel Setup Status: ✅ FULLY IMPLEMENTED**

Your frontend is now production-ready with:
- ✅ Automatic SSL certificates
- ✅ Global CDN distribution
- ✅ API proxy to Fly.io backend
- ✅ Security headers and CSP
- ✅ Performance optimizations
- ✅ Analytics integration