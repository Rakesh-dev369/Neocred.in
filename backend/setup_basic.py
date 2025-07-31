import os
import subprocess
import sys

def install_dependencies():
    deps = [
        "fastapi>=0.104.0",
        "uvicorn[standard]>=0.24.0", 
        "openai>=1.3.0",
        "python-dotenv>=1.0.0",
        "pydantic>=2.5.0"
    ]
    
    print("Installing dependencies...")
    try:
        for dep in deps:
            print(f"Installing {dep}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", dep])
        print("Dependencies installed successfully!")
        return True
    except Exception as e:
        print(f"Failed to install dependencies: {e}")
        return False

if __name__ == "__main__":
    if install_dependencies():
        print("Setup complete! Run: python main_simple.py")
    else:
        print("Setup failed!")