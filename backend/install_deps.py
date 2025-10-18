#!/usr/bin/env python3
"""
Install Dependencies Script
Handles installation of all required packages
"""

import subprocess
import sys

def install_package(package):
    """Install a single package"""
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        print(f"✅ {package} installed successfully")
        return True
    except subprocess.CalledProcessError:
        print(f"❌ Failed to install {package}")
        return False

def main():
    """Install all dependencies"""
    print("🚀 Installing NeoCred Backend Dependencies...")
    
    # Core packages that should work
    core_packages = [
        "fastapi==0.104.1",
        "uvicorn[standard]==0.24.0",
        "gunicorn==21.2.0",
        "pydantic==2.5.0",
        "python-multipart==0.0.6",
        "python-dotenv==1.0.0",
        "httpx==0.25.2"
    ]
    
    # Database packages (may have compatibility issues)
    db_packages = [
        "redis[hiredis]==5.0.1",
        "pymongo==4.6.0",
        "motor==3.3.2",
        "sqlalchemy==2.0.23",
        "psycopg2-binary==2.9.9"
    ]
    
    # ML packages (large downloads)
    ml_packages = [
        "scikit-learn==1.3.2",
        "pandas==2.1.4",
        "numpy==1.25.2",
        "xgboost==2.0.2",
        "lightgbm==4.1.0"
    ]
    
    print("\n📦 Installing core packages...")
    for package in core_packages:
        install_package(package)
    
    print("\n🗄️ Installing database packages...")
    for package in db_packages:
        install_package(package)
    
    print("\n🤖 Installing ML packages (this may take a while)...")
    for package in ml_packages:
        install_package(package)
    
    print("\n🎉 Installation complete! You can now run the backend.")

if __name__ == "__main__":
    main()