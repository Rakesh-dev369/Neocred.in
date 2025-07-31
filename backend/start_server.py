import uvicorn
from main_simple import app

if __name__ == "__main__":
    print("Starting NEOCRED FinBot API with News on port 8002...")
    uvicorn.run(app, host="127.0.0.1", port=8002)