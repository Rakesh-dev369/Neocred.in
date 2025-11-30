import os
import requests
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")

def test_supabase_connection():
    """Test Supabase connection using direct HTTP requests"""
    try:
        # Test the REST API health endpoint
        headers = {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}"
        }
        
        response = requests.get(f"{SUPABASE_URL}/rest/v1/", headers=headers, timeout=10)
        
        if response.status_code == 200:
            print("SUCCESS: Supabase connection successful!")
            print(f"URL: {SUPABASE_URL}")
            print(f"Status: {response.status_code}")
            return True
        else:
            print(f"FAILED: Supabase connection failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"ERROR: Error connecting to Supabase: {e}")
        return False

if __name__ == "__main__":
    test_supabase_connection()