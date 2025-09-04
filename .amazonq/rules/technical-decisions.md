# NeoCred Technical Decisions Log

## Architecture Decisions
- **Frontend**: React 19 + Vite (chosen for performance and modern features)
- **Styling**: Tailwind CSS (utility-first, responsive design)
- **Backend**: FastAPI (fast, async, auto-documentation)
- **AI Integration**: OpenAI GPT-4-turbo (best financial reasoning)
- **Deployment**: Fly.dev (reliable, global edge network)

## API Configuration
- **Base URL**: https://neocred-backend.fly.dev
- **Timeout**: 30 seconds (handles AI processing time)
- **Retries**: 3 attempts (network reliability)
- **Rate Limiting**: 2s between messages, 10/minute (prevents abuse)

## Security Measures
- Environment variables for sensitive data
- No API keys in frontend code
- CORS properly configured
- CSP and HSTS enabled in production

## Performance Optimizations
- Service Worker enabled
- Lazy loading for components
- Chunk size monitoring (500kb warning)
- Preloading for critical resources

## User Experience Features
- Dark/Light mode toggle
- Mobile-responsive design
- Conversation export (JSON/CSV/TXT)
- Search functionality in chat
- Analytics integration (GA4, Plausible)