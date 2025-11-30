from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="NeoCred Simple Server", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "NeoCred Simple Server", "status": "running"}

@app.get("/test-supabase")
async def test_supabase():
    try:
        SUPABASE_URL = os.getenv("SUPABASE_URL")
        SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")
        
        headers = {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}"
        }
        
        response = requests.get(f"{SUPABASE_URL}/rest/v1/", headers=headers, timeout=10)
        
        return {
            "status": "connected" if response.status_code == 200 else "failed",
            "message": "Supabase connection successful" if response.status_code == 200 else f"Failed with status {response.status_code}",
            "url": SUPABASE_URL,
            "status_code": response.status_code
        }
    except Exception as e:
        return {
            "status": "error",
            "message": f"Supabase connection failed: {str(e)}"
        }

if __name__ == "__main__":
    uvicorn.run("simple_server:app", host="127.0.0.1", port=8001, reload=True)