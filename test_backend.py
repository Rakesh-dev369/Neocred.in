import requests
import json

# Test the backend API
def test_conversation_context():
    url = "http://localhost:8000/api/chat"
    
    # First message
    first_request = {
        "message": "Calculate SIP returns",
        "conversationHistory": [],
        "systemPrompt": "You are FinBot, a financial assistant.",
        "toolsContext": "Available tools: SIP Calculator, Budget Planner"
    }
    
    print("Sending first message...")
    response1 = requests.post(url, json=first_request)
    print(f"Response 1: {response1.status_code}")
    if response1.status_code == 200:
        data1 = response1.json()
        print(f"Bot response: {data1['response'][:100]}...")
        
        # Second message with context
        second_request = {
            "message": "Need assistance",
            "conversationHistory": [
                {"text": "Calculate SIP returns", "sender": "user"},
                {"text": data1['response'], "sender": "bot"}
            ],
            "systemPrompt": "You are FinBot, a financial assistant.",
            "toolsContext": "Available tools: SIP Calculator, Budget Planner"
        }
        
        print("\nSending second message with context...")
        response2 = requests.post(url, json=second_request)
        print(f"Response 2: {response2.status_code}")
        if response2.status_code == 200:
            data2 = response2.json()
            print(f"Bot response: {data2['response'][:100]}...")
        else:
            print(f"Error: {response2.text}")
    else:
        print(f"Error: {response1.text}")

if __name__ == "__main__":
    test_conversation_context()