#!/usr/bin/env python3
"""
Simple setup script for NEOC₹ED FinBot Backend
"""
import os
import subprocess
import sys

def install_essential_dependencies():
    """Install only essential Python dependencies"""
    essential_deps = [
        "fastapi>=0.104.0",
        "uvicorn[standard]>=0.24.0", 
        "openai>=1.3.0",
        "python-dotenv>=1.0.0",
        "pydantic>=2.5.0"
    ]
    
    print("📦 Installing essential dependencies...")
    try:
        for dep in essential_deps:
            print(f"Installing {dep}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", dep])
        print("✅ Essential dependencies installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install dependencies: {e}")
        return False
    return True

def generate_secret_key():
    """Generate a secure secret key"""
    import secrets
    return secrets.token_urlsafe(32)

def setup_environment():
    """Setup environment variables"""
    env_file = ".env"
    if not os.path.exists(env_file):
        print("❌ .env file not found")
        return False
    
    # Check if secret key needs to be updated
    with open(env_file, 'r') as f:
        content = f.read()
    
    if "your-secret-key-change-this-in-production" in content:
        print("🔐 Generating secure secret key...")
        new_secret = generate_secret_key()
        content = content.replace(
            "your-secret-key-change-this-in-production",
            new_secret
        )
        with open(env_file, 'w') as f:
            f.write(content)
        print("✅ Secret key updated")
    
    return True

def main():
    """Main setup function"""
    print("🚀 Setting up NEOC₹ED FinBot Backend (Simple Version)...")
    print("=" * 50)
    
    # Check environment
    if not setup_environment():
        print("❌ Environment setup failed")
        return False
    
    # Install essential dependencies
    if not install_essential_dependencies():
        print("❌ Setup failed at dependency installation")
        return False
    
    print("=" * 50)
    print("✅ Simple setup completed successfully!")
    print("\n🎯 Next steps:")
    print("1. Update your OpenAI API key in .env file")
    print("2. Run: python main_simple.py")
    print("\n📚 Available endpoints:")
    print("- POST /api/chat     # Chat with FinBot")
    print("- GET /health        # Health check")
    print("- GET /api/stats     # Usage statistics")
    print("- POST /api/clear-cache # Clear cache")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)