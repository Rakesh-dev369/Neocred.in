# NeoCred Quick Reference

## PERMANENT SOLUTION: Never Clear History!
**Amazon Q context is preserved in `.amazonq/rules/` - these files auto-load every conversation**

## When Amazon Q Conversation Clears
**SOLUTION**: Use these commands immediately (don't clear history):

### Project Overview
- **Live Site**: https://neocred.in
- **Backend**: https://neocred-backend.fly.dev  
- **Tech**: React 19 + FastAPI + GPT-4-turbo
- **Status**: Production ready, 29+ calculators, AI chat

### Key File References
```
@workspace - Full project context
@frontend/src/App.jsx - Main routing
@frontend/src/pages/Chatbot.jsx - AI chat with rate limiting
@backend/main_simple.py - FastAPI server
@frontend/.env - Production config
```

### Common Tasks
- **Fix JSX errors**: Check calculator pages in `@frontend/src/pages/`
- **Update AI chat**: Modify `@frontend/src/pages/Chatbot.jsx`
- **Backend changes**: Edit `@backend/main_simple.py`
- **Styling updates**: Use Tailwind classes, check existing components

### Development Rules
- Minimal changes only
- Test builds before deploy
- Use existing components
- Keep live site stable

### Recent Status
- ✅ Rate limiting implemented
- ✅ Export features added
- ✅ JSX syntax fixed
- ✅ Personal Finance colors updated
- ✅ Unused files cleaned up