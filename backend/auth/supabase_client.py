"""Supabase Authentication Client"""
from supabase import create_client, Client
import os

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_ANON_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY) if SUPABASE_URL and SUPABASE_KEY else None

async def sign_up_with_email(email: str, password: str):
    if not supabase:
        return {"error": "Supabase not configured"}
    
    try:
        response = supabase.auth.sign_up({"email": email, "password": password})
        return response
    except Exception as e:
        return {"error": str(e)}

async def sign_in_with_email(email: str, password: str):
    if not supabase:
        return {"error": "Supabase not configured"}
    
    try:
        response = supabase.auth.sign_in_with_password({"email": email, "password": password})
        return response
    except Exception as e:
        return {"error": str(e)}

async def sign_in_with_oauth(provider: str):
    if not supabase:
        return {"error": "Supabase not configured"}
    
    try:
        response = supabase.auth.sign_in_with_oauth({"provider": provider})
        return response
    except Exception as e:
        return {"error": str(e)}