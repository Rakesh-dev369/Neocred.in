from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from dotenv import load_dotenv
from supabase_client import get_supabase_client

load_dotenv()

app = FastAPI(title="NeoCred Supabase Test", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "NeoCred Supabase Test Server", "status": "running"}

@app.get("/test-supabase")
async def test_supabase():
    try:
        supabase = get_supabase_client()
        # Test connection with a simple query
        response = supabase.rpc('version').execute()
        return {
            "status": "connected",
            "message": "Supabase connection successful",
            "url": os.getenv("SUPABASE_URL"),
            "response": response.data if hasattr(response, 'data') else "OK"
        }
    except Exception as e:
        return {
            "status": "error",
            "message": f"Supabase connection failed: {str(e)}"
        }

if __name__ == "__main__":
    uvicorn.run("simple_supabase_server:app", host="127.0.0.1", port=8001, reload=True)