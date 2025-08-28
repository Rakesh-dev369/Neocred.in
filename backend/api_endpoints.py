from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
from datetime import datetime

app = FastAPI(title="NeoCred Content API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Personal Finance Pillar Data
personal_finance_data = {
    "id": "personal-finance",
    "title": "Personal Finance",
    "description": "Master money management, wealth building, and financial independence",
    "sections": [
        {
            "id": "introduction",
            "title": "Introduction",
            "content": "Personal finance refers to the management of an individual's or household's financial activities, including earning, saving, investing, budgeting, spending, and protecting money.",
            "level": "foundation"
        },
        {
            "id": "core-components",
            "title": "Core Components",
            "content": "Income Management, Budgeting & Expense Management, Saving & Emergency Planning, Investment Management, Debt & Credit Management, Retirement Planning, Insurance & Risk Management, Tax Planning",
            "level": "foundation"
        },
        {
            "id": "budgeting",
            "title": "Budgeting & Planning",
            "content": "50/30/20 rule, zero-based budgeting, envelope system, expense tracking",
            "level": "foundation",
            "takeaway": "Budgeting helps you plan, prioritize, and prevent overspending. Start with the 50/30/20 rule."
        },
        {
            "id": "saving",
            "title": "Saving & Emergency",
            "content": "Emergency funds, high-yield savings (7-8% rates), liquid funds",
            "level": "foundation",
            "takeaway": "Build 6 months of expenses in high-yield savings accounts (7-8% rates in 2025)."
        },
        {
            "id": "investing",
            "title": "Investment Management",
            "content": "Asset classes, risk-return trade-off, diversification, SIP strategies",
            "level": "advanced",
            "takeaway": "Diversify investments across asset classes. Start with SIP in equity funds for long-term wealth creation."
        },
        {
            "id": "debt",
            "title": "Debt & Credit",
            "content": "CIBIL score management, debt repayment strategies, good vs bad debt",
            "level": "advanced",
            "takeaway": "Maintain CIBIL score above 750 for best loan rates. Prioritize high-interest debt repayment."
        },
        {
            "id": "retirement",
            "title": "Retirement Planning",
            "content": "EPF, PPF, NPS, retirement corpus calculation, early start advantage",
            "level": "advanced",
            "takeaway": "Start retirement planning early to leverage compounding. Diversify between EPF, PPF, NPS, and equity."
        },
        {
            "id": "insurance",
            "title": "Insurance & Risk",
            "content": "Life insurance, health insurance, risk management strategies",
            "level": "advanced",
            "takeaway": "Insurance protects your wealth from unexpected events. Get adequate life and health coverage."
        },
        {
            "id": "tax",
            "title": "Tax Planning",
            "content": "Section 80C, 80D deductions, tax regime comparison, optimization strategies",
            "level": "advanced",
            "takeaway": "Optimize taxes legally through 80C, 80D deductions. Choose the right tax regime."
        }
    ],
    "tools": [
        {"name": "Budget Planner", "url": "/calculators/budget-planner"},
        {"name": "Emergency Fund Calculator", "url": "/calculators/emergency-fund"},
        {"name": "SIP Calculator", "url": "/calculators/sip"},
        {"name": "Debt Repayment Planner", "url": "/calculators/debt-repayment"}
    ],
    "lastUpdated": "2025-01-27"
}

@app.get("/")
async def root():
    return {"message": "NeoCred Content API", "version": "1.0.0", "endpoints": ["/api/learn", "/api/pillars", "/api/calculators"]}

@app.get("/api/learn")
async def get_all_pillars():
    return {
        "pillars": [
            {"id": "personal-finance", "title": "Personal Finance", "sections": 9},
            {"id": "traditional-investments", "title": "Traditional Investments", "sections": 6},
            {"id": "market-linked-investments", "title": "Market-Linked Investments", "sections": 9},
            {"id": "banking-payments", "title": "Banking & Payments", "sections": 5},
            {"id": "insurance-risk", "title": "Insurance & Risk", "sections": 4},
            {"id": "corporate-finance", "title": "Corporate Finance", "sections": 6},
            {"id": "govt-public-finance", "title": "Government & Public Finance", "sections": 5},
            {"id": "alt-fintech", "title": "Alternative Finance & Fintech", "sections": 7}
        ],
        "totalPillars": 8,
        "lastUpdated": datetime.now().isoformat()
    }

@app.get("/api/pillars/{pillar_id}")
async def get_pillar(pillar_id: str):
    if pillar_id == "personal-finance":
        return personal_finance_data
    else:
        raise HTTPException(status_code=404, detail="Pillar not found")

@app.get("/api/calculators")
async def get_calculators():
    return {
        "categories": {
            "investment": ["SIP Calculator", "Lumpsum Calculator", "Step-up SIP", "Goal Based Investment"],
            "loans": ["Home Loan EMI", "Car Loan EMI", "Education Loan EMI", "Personal Loan EMI"],
            "savings": ["FD Calculator", "RD Calculator", "PPF Calculator", "Emergency Fund"],
            "insurance": ["Term Life Insurance", "Health Insurance", "Vehicle Insurance"],
            "tax": ["HRA Exemption", "Form 16 Breakdown", "80C Calculator"],
            "retirement": ["Retirement Goal", "NPS Return", "EPF Maturity", "Annuity Calculator"]
        },
        "totalCalculators": 33,
        "popular": ["SIP Calculator", "Home Loan EMI", "Budget Planner", "Emergency Fund", "FD Calculator"]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)