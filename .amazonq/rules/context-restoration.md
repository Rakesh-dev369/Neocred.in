# Amazon Q Context Restoration Guide

## Instant Context Recovery Commands

When Amazon Q conversation clears, use these commands immediately:

### 1. Full Project Context
```
@workspace - Loads entire project context
```

### 2. Critical Files (Use these exact commands)
```
@frontend/src/App.jsx - Main routing and navigation
@frontend/src/pages/Chatbot.jsx - AI chat with rate limiting
@backend/main_simple.py - FastAPI server with OpenAI
@frontend/.env - Production environment config
```

### 3. Quick Status Check
```
Current status: Production ready at https://neocred.in
Backend: https://neocred-backend.fly.dev
Tech: React 19 + FastAPI + GPT-4-turbo
Features: 29+ calculators, AI chat, 8-pillar learning
```

## Context Preservation Strategy

### Auto-Loaded Rules (Always Active)
- This file and all `.amazonq/rules/` files load automatically
- No need to reference them manually
- Updated with every major change

### Manual Context Loading
- Use `@file` syntax for specific files
- Use `@folder` for directory context
- Use `@workspace` for full project overview

## Never Clear History Unless...
- **DON'T** clear history for context issues
- **DO** clear only if Amazon Q becomes unresponsive
- **ALWAYS** use these restoration commands after clearing

## Emergency Recovery
If you must clear history:
1. Start new conversation
2. Type: `@workspace`
3. Follow with: "Restore NeoCred project context"
4. Reference this guide: `@.amazonq/rules/context-restoration.md`