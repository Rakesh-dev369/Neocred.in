# NeoCred Development Context

## Current Development Status
- **Live Website**: https://neocred.in (Production Ready)
- **Backend API**: https://neocred-backend.fly.dev (Deployed)
- **Version**: 2.0.0
- **Last Updated**: December 2024

## Key Components Status
- ✅ FinBot AI Chat (GPT-4-turbo integration)
- ✅ 29+ Financial Calculators
- ✅ 8-Pillar Learning System
- ✅ Financial News Section
- ✅ Responsive Design (Mobile/Desktop)

## Critical Files & Their Purpose
- `frontend/src/App.jsx` - Main routing & navigation
- `frontend/src/pages/Chatbot.jsx` - AI chat interface with rate limiting
- `frontend/src/components/Chat/ChatExport.jsx` - Conversation export features
- `backend/main_simple.py` - FastAPI server with OpenAI integration
- `frontend/.env` - Production environment configuration

## Recent Fixes Applied
- Fixed JSX syntax errors in calculator pages
- Implemented rate limiting (2s between messages, 10/minute)
- Added conversation export (JSON, CSV, TXT formats)
- Updated Personal Finance pillar colors (blue/indigo theme)
- Cleaned up routing and removed unused investment files

## Development Guidelines
- **Minimal Changes Only**: Avoid breaking existing functionality
- **Test Before Deploy**: Always verify builds work
- **Preserve User Experience**: Keep live website stable
- **Use Existing Components**: Don't duplicate functionality