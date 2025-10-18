# NeoCred Backend Setup Guide

## Python Version Compatibility Issues

### Problem
You're using **Python 3.13**, but many ML/Database packages don't have pre-built wheels for Python 3.13 yet, causing compilation errors.

### Solutions

#### Option 1: Use Python 3.11 or 3.12 (Recommended)
```bash
# Install Python 3.11 or 3.12
# Then install full requirements
pip install -r requirements-full.txt
```

#### Option 2: Stay with Python 3.13 (Limited functionality)
```bash
# Install minimal requirements only
pip install -r requirements-minimal.txt
```

#### Option 3: Install Build Tools for Python 3.13
```bash
# Install Microsoft C++ Build Tools
# Download from: https://visualstudio.microsoft.com/visual-cpp-build-tools/

# Install Rust (for some packages)
# Download from: https://rustup.rs/

# Then try full installation
pip install -r requirements-full.txt
```

## Current Status with Minimal Setup

✅ **Working Features:**
- FastAPI server
- Basic API endpoints
- OpenAI integration
- Authentication (basic)

❌ **Missing Features (need full setup):**
- PostgreSQL database
- Redis caching
- MongoDB logging
- ML models (scikit-learn, XGBoost, etc.)
- Advanced data processing

## Quick Start (Minimal)

```bash
# Install minimal requirements
pip install -r requirements-minimal.txt

# Start server
python main.py
```

## Recommended: Switch to Python 3.11/3.12

For full functionality, use Python 3.11 or 3.12:

```bash
# Check Python version
python --version

# If using Python 3.13, consider switching to 3.11/3.12
# Then install full requirements
pip install -r requirements-full.txt
```