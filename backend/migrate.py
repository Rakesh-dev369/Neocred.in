#!/usr/bin/env python3
"""
Database migration script for NeoCred FinBot
"""
import os
import sys
from sqlalchemy import create_engine, text
from database import DATABASE_URL, engine
from models import Base

def create_tables():
    """Create all database tables"""
    print("🔄 Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("✅ Database tables created successfully")

def drop_tables():
    """Drop all database tables"""
    print("⚠️ Dropping all database tables...")
    Base.metadata.drop_all(bind=engine)
    print("✅ Database tables dropped successfully")

def reset_database():
    """Reset database by dropping and recreating tables"""
    drop_tables()
    create_tables()

def check_database():
    """Check database connection and tables"""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1"))
            print("✅ Database connection successful")
            
            # Check if tables exist
            tables = ['users', 'chat_sessions', 'chat_messages', 'api_metrics']
            for table in tables:
                try:
                    conn.execute(text(f"SELECT COUNT(*) FROM {table}"))
                    print(f"✅ Table '{table}' exists")
                except Exception:
                    print(f"❌ Table '{table}' does not exist")
                    
    except Exception as e:
        print(f"❌ Database connection failed: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python migrate.py [create|drop|reset|check]")
        sys.exit(1)
    
    command = sys.argv[1].lower()
    
    if command == "create":
        create_tables()
    elif command == "drop":
        drop_tables()
    elif command == "reset":
        reset_database()
    elif command == "check":
        check_database()
    else:
        print("Invalid command. Use: create, drop, reset, or check")
        sys.exit(1)