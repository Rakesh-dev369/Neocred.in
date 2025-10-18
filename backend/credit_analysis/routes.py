"""Credit Analysis API Routes"""
from fastapi import APIRouter, HTTPException, UploadFile, File, Depends
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
import pandas as pd
from .risk_models import credit_risk_model, CreditScoreCalculator
from .financial_ratios import financial_ratios_engine
from .document_nlp import document_analyzer
from .fraud_detection import fraud_detector
from .recommendation_engine import recommendation_engine
from auth.dependencies import get_current_active_user
from auth.rate_limiter import limiter
import tempfile
import os

router = APIRouter(prefix="/credit-analysis", tags=["Credit Analysis"])

# Pydantic models
class CreditAnalysisRequest(BaseModel):
    monthly_income: float
    monthly_expenses: float
    total_debt: float
    credit_used: float
    credit_limit: float
    age: int
    employment_months: int
    credit_types: Optional[int] = 1
    missed_payments: Optional[int] = 0

class TransactionData(BaseModel):
    id: str
    amount: float
    timestamp: int
    location: Optional[str] = None
    description: Optional[str] = None

class FraudAnalysisRequest(BaseModel):
    transaction: TransactionData
    user_profile: Optional[Dict[str, Any]] = None
    transaction_history: Optional[List[TransactionData]] = None

@router.post("/risk-assessment")
@limiter.limit("10/minute")
async def assess_credit_risk(request, data: CreditAnalysisRequest, 
                           current_user = Depends(get_current_active_user)):
    """Comprehensive credit risk assessment"""
    try:
        # Convert to DataFrame for model
        df = pd.DataFrame([data.dict()])
        
        # Calculate financial ratios
        ratios = financial_ratios_engine.calculate_all_ratios(data.dict())
        
        # Predict default probability (if model is trained)
        default_probability = 0.15  # Default fallback
        risk_factors = []
        
        if credit_risk_model.is_trained:
            default_prob = credit_risk_model.predict_default_probability(df)[0]
            default_probability = float(default_prob)
            risk_factors = credit_risk_model.get_risk_factors(df)
        
        # Calculate credit score
        credit_score = CreditScoreCalculator.probability_to_score(default_probability)
        credit_grade = CreditScoreCalculator.score_to_grade(credit_score)
        risk_category = CreditScoreCalculator.get_risk_category(credit_score)
        
        # Get recommendations
        recommendations = recommendation_engine.get_personalized_recommendations(data.dict())
        
        return {
            "credit_score": credit_score,
            "credit_grade": credit_grade,
            "risk_category": risk_category,
            "default_probability": default_probability,
            "financial_ratios": ratios,
            "risk_factors": risk_factors,
            "recommendations": recommendations,
            "analysis_timestamp": pd.Timestamp.now().isoformat()
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Risk assessment failed: {str(e)}")

@router.post("/financial-ratios")
@limiter.limit("20/minute")
async def calculate_financial_ratios(request, financial_data: Dict[str, float]):
    """Calculate comprehensive financial ratios"""
    try:
        ratios = financial_ratios_engine.calculate_all_ratios(financial_data)
        
        # Add interpretations
        interpretations = {}
        for category, category_ratios in ratios.items():
            if isinstance(category_ratios, dict):
                interpretations[category] = {}
                for ratio_name, value in category_ratios.items():
                    interpretation = financial_ratios_engine.get_ratio_interpretation(ratio_name, value)
                    interpretations[category][ratio_name] = interpretation
        
        return {
            "ratios": ratios,
            "interpretations": interpretations,
            "calculated_at": pd.Timestamp.now().isoformat()
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ratio calculation failed: {str(e)}")

@router.post("/document-analysis")
@limiter.limit("5/minute")
async def analyze_document(request, file: UploadFile = File(...), 
                         document_type: str = "auto",
                         current_user = Depends(get_current_active_user)):
    """Analyze financial documents using OCR and NLP"""
    try:
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=f".{file.filename.split('.')[-1]}") as tmp_file:
            content = await file.read()
            tmp_file.write(content)
            tmp_file_path = tmp_file.name
        
        try:
            # Process document
            analysis = document_analyzer.process_document(tmp_file_path, document_type)
            
            return {
                "filename": file.filename,
                "document_type": analysis.get("document_type", "unknown"),
                "analysis": analysis,
                "processed_at": pd.Timestamp.now().isoformat()
            }
        
        finally:
            # Clean up temporary file
            if os.path.exists(tmp_file_path):
                os.unlink(tmp_file_path)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Document analysis failed: {str(e)}")

@router.post("/fraud-detection")
@limiter.limit("15/minute")
async def detect_fraud(request, data: FraudAnalysisRequest,
                      current_user = Depends(get_current_active_user)):
    """Analyze transaction for fraud patterns"""
    try:
        # Convert transaction history to dict format
        transaction_history = []
        if data.transaction_history:
            transaction_history = [t.dict() for t in data.transaction_history]
        
        # Analyze transaction
        fraud_analysis = fraud_detector.analyze_transaction(
            data.transaction.dict(),
            data.user_profile,
            transaction_history
        )
        
        return {
            "transaction_id": data.transaction.id,
            "fraud_analysis": fraud_analysis,
            "analyzed_at": pd.Timestamp.now().isoformat()
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Fraud detection failed: {str(e)}")

@router.post("/recommendations")
@limiter.limit("10/minute")
async def get_credit_recommendations(request, financial_data: Dict[str, Any],
                                   current_user = Depends(get_current_active_user)):
    """Get personalized credit improvement recommendations"""
    try:
        recommendations = recommendation_engine.get_personalized_recommendations(financial_data)
        
        return {
            "recommendations": recommendations,
            "generated_at": pd.Timestamp.now().isoformat()
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Recommendation generation failed: {str(e)}")

@router.get("/credit-score/{score}/interpretation")
async def interpret_credit_score(score: int):
    """Get credit score interpretation and improvement tips"""
    try:
        grade = CreditScoreCalculator.score_to_grade(score)
        risk_category = CreditScoreCalculator.get_risk_category(score)
        
        # Score interpretation
        interpretations = {
            "A+": "Excellent credit - you qualify for the best rates and terms",
            "A": "Very good credit - access to competitive rates",
            "B+": "Good credit - decent rates available",
            "B": "Fair credit - some limitations on rates and terms",
            "C+": "Poor credit - limited options, higher rates",
            "C": "Bad credit - very limited options",
            "D": "Very poor credit - major rebuilding needed"
        }
        
        improvement_tips = {
            "A+": ["Maintain current habits", "Monitor for identity theft"],
            "A": ["Keep utilization low", "Maintain payment history"],
            "B+": ["Pay down balances", "Avoid new credit inquiries"],
            "B": ["Focus on payment history", "Reduce credit utilization"],
            "C+": ["Pay all bills on time", "Consider secured credit cards"],
            "C": ["Debt consolidation", "Credit counseling"],
            "D": ["Professional credit repair", "Secured credit products"]
        }
        
        return {
            "score": score,
            "grade": grade,
            "risk_category": risk_category,
            "interpretation": interpretations.get(grade, "Unknown"),
            "improvement_tips": improvement_tips.get(grade, []),
            "score_ranges": {
                "Excellent": "750-850",
                "Very Good": "700-749",
                "Good": "650-699",
                "Fair": "600-649",
                "Poor": "550-599",
                "Very Poor": "300-549"
            }
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Score interpretation failed: {str(e)}")

@router.get("/health")
async def credit_analysis_health():
    """Health check for credit analysis services"""
    return {
        "status": "healthy",
        "services": {
            "risk_model": "ready" if credit_risk_model.is_trained else "not_trained",
            "ratios_engine": "ready",
            "document_analyzer": "ready",
            "fraud_detector": "ready",
            "recommendation_engine": "ready"
        },
        "version": "1.0.0"
    }