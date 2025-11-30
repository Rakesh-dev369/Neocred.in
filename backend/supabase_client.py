import os
from dotenv import load_dotenv

# Import supabase with explicit path to avoid conflicts
import sys
sys.path.insert(0, os.path.dirname(__file__))
try:
    from supabase import create_client, Client
except ImportError as e:
    print(f"Supabase import error: {e}")
    # Fallback - we'll handle this in the functions
    create_client = None
    Client = None

load_dotenv()

# Supabase configuration
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

def get_supabase_client():
    """Get regular Supabase client for user operations"""
    if create_client is None:
        raise ImportError("Supabase client not available")
    return create_client(SUPABASE_URL, SUPABASE_ANON_KEY)

def get_supabase_admin():
    """Get admin Supabase client for admin operations"""
    if create_client is None:
        raise ImportError("Supabase client not available")
    return create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)