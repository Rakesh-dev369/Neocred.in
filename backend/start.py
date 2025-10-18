#!/usr/bin/env python3
"""
NeoCred Enterprise Startup Script
Enterprise-grade startup with health checks and monitoring
"""

import os
import sys
from deploy import EnterpriseDeployer

def main():
    """Main startup function using enterprise deployer"""
    
    # Get environment
    env = os.getenv("ENVIRONMENT", "development")
    port = int(os.getenv("PORT", 8000))
    
    print(f"🚀 Starting NeoCred Enterprise Backend in {env} mode on port {port}")
    
    # Use enterprise deployer
    deployer = EnterpriseDeployer()
    success = deployer.deploy()
    
    if not success:
        print("❌ Enterprise deployment failed")
        sys.exit(1)

if __name__ == "__main__":
    main()