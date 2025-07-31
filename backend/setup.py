#!/usr/bin/env python3
"""
Setup script for NEOC₹ED FinBot Backend
"""
import os
import subprocess
import sys

def install_dependencies():
    """Install Python dependencies"""
    print("📦 Installing Python dependencies...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Dependencies installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install dependencies: {e}")
        return False
    return True

def setup_database():
    """Setup database tables"""
    print("🗄️ Setting up database...")
    try:
        from migrate import create_tables
        create_tables()
        return True
    except Exception as e:
        print(f"❌ Database setup failed: {e}")
        return False

def check_redis():
    """Check Redis connection"""
    print("🔄 Checking Redis connection...")
    try:
        import redis
        redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
        client = redis.from_url(redis_url)
        client.ping()
        print("✅ Redis connection successful")
        return True
    except Exception as e:
        print(f"⚠️ Redis connection failed: {e}")
        print("💡 Install Redis or update REDIS_URL in .env file")
        return False

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
    print("🚀 Setting up NEOC₹ED FinBot Backend...")
    print("=" * 50)
    
    # Check environment
    if not setup_environment():
        print("❌ Environment setup failed")
        return False
    
    # Install dependencies
    if not install_dependencies():
        print("❌ Setup failed at dependency installation")
        return False
    
    # Setup database
    if not setup_database():
        print("❌ Setup failed at database setup")
        return False
    
    # Check Redis (optional)
    check_redis()
    
    print("=" * 50)
    print("✅ Setup completed successfully!")
    print("\n🎯 Next steps:")
    print("1. Update your OpenAI API key in .env file")
    print("2. Install and start Redis (optional, for caching)")
    print("3. Run: python main.py")
    print("\n📚 Available commands:")
    print("- python migrate.py check    # Check database status")
    print("- python migrate.py reset    # Reset database")
    print("- python main.py            # Start the server")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)