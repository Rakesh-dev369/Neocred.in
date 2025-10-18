"""AutoML Intelligence Layer API Routes with LLM Optimization"""
from fastapi import APIRouter, HTTPException, UploadFile, File, Depends, BackgroundTasks
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
import pandas as pd
import json
from .intelligence_layer import intelligence_layer
from .automl_pipeline import automl_pipeline
from .llm_orchestrator import llm_orchestrator
from .document_indexing import model_indexer, financial_kb
from .llm_optimizer import llm_optimizer
from auth.dependencies import get_current_active_user
from auth.rate_limiter import limiter
import tempfile
import os

router = APIRouter(prefix="/intelligence", tags=["AI Intelligence"])

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

class ModelTrainingRequest(BaseModel):
    target_column: str
    automl_config: Optional[Dict[str, Any]] = {}

class ExplanationRequest(BaseModel):
    prediction: float
    confidence: float
    key_features: List[str]
    financial_data: Dict[str, Any]

@router.post("/analyze-credit")
@limiter.limit("5/minute")
async def analyze_credit_with_ai(request, data: CreditAnalysisRequest,
                               current_user = Depends(get_current_active_user)):
    """Comprehensive AI-powered credit analysis with LLM optimization"""
    try:
        # Convert to dict for processing
        financial_data = data.dict()
        
        # Run comprehensive AI analysis
        analysis = await intelligence_layer.analyze_credit_with_ai(financial_data)
        
        # Get cost estimate for the analysis
        cost_estimate = llm_optimizer.get_cost_estimate(
            json.dumps(financial_data), 
            json.dumps(analysis)
        )
        
        return {
            "user_id": current_user.email,
            "analysis": analysis,
            "processing_time": "~2-3 seconds",
            "ai_components_used": ["ml_models", "llm_explanation", "knowledge_base"],
            "cost_estimate": cost_estimate,
            "optimization_used": ["token_optimization", "caching", "retry_logic"]
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI analysis failed: {str(e)}")

@router.post("/train-automl")
@limiter.limit("1/hour")
async def train_automl_model(request, background_tasks: BackgroundTasks,
                           training_request: ModelTrainingRequest,
                           file: UploadFile = File(...),
                           current_user = Depends(get_current_active_user)):
    """Train new model using AutoML pipeline"""
    try:
        # Save uploaded file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as tmp_file:
            content = await file.read()
            tmp_file.write(content)
            tmp_file_path = tmp_file.name
        
        # Load data
        df = pd.read_csv(tmp_file_path)
        
        # Validate target column
        if training_request.target_column not in df.columns:
            raise HTTPException(status_code=400, detail=f"Target column '{training_request.target_column}' not found")
        
        # Start training in background
        background_tasks.add_task(
            _train_model_background,
            df,
            training_request.target_column,
            current_user.email
        )
        
        # Clean up temp file
        os.unlink(tmp_file_path)
        
        return {
            "message": "AutoML training started",
            "status": "processing",
            "estimated_time": "10-30 minutes",
            "dataset_shape": df.shape,
            "target_column": training_request.target_column,
            "user_id": current_user.email,
            "optimization_features": ["llm_caching", "token_optimization", "retry_logic"]
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Training initiation failed: {str(e)}")

async def _train_model_background(df: pd.DataFrame, target_column: str, user_id: str):
    """Background task for model training"""
    try:
        results = await intelligence_layer.train_automl_model(df, target_column)
        print(f"✅ AutoML training completed for user {user_id}")
        # In production, you'd notify the user via WebSocket or email
    except Exception as e:
        print(f"❌ AutoML training failed for user {user_id}: {e}")

@router.get("/llm-optimization-stats")
@limiter.limit("20/minute")
async def get_llm_optimization_stats(request, current_user = Depends(get_current_active_user)):
    """Get LLM optimization statistics"""
    try:
        cache_stats = llm_optimizer.get_cache_stats()
        
        return {
            "cache_statistics": cache_stats,
            "optimization_features": {
                "tiktoken_enabled": True,
                "tenacity_retry": True,
                "redis_caching": cache_stats.get("cache_available", False)
            },
            "user_id": current_user.email
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Stats retrieval failed: {str(e)}")

@router.post("/clear-llm-cache")
@limiter.limit("5/minute")
async def clear_llm_cache(request, current_user = Depends(get_current_active_user)):
    """Clear LLM response cache"""
    try:
        cleared_count = llm_optimizer.clear_cache()
        
        return {
            "message": "LLM cache cleared",
            "cleared_keys": cleared_count,
            "user_id": current_user.email
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Cache clear failed: {str(e)}")

@router.post("/explain-prediction")
@limiter.limit("10/minute")
async def explain_model_prediction(request, data: ExplanationRequest,
                                 current_user = Depends(get_current_active_user)):
    """Explain a specific model prediction using AI"""
    try:
        prediction_data = data.dict()
        
        # Get comprehensive explanation
        explanation = await intelligence_layer.explain_model_decision(prediction_data)
        
        return {
            "explanation": explanation,
            "user_id": current_user.email,
            "explanation_type": "ai_powered_optimized"
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Explanation failed: {str(e)}")

@router.get("/model-insights")
@limiter.limit("10/minute")
async def get_model_insights(request, current_user = Depends(get_current_active_user)):
    """Get comprehensive model insights and suggestions"""
    try:
        insights = await intelligence_layer.get_model_insights()
        
        return {
            "insights": insights,
            "user_id": current_user.email,
            "insights_type": "comprehensive_optimized"
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Insights retrieval failed: {str(e)}")

@router.post("/query-knowledge")
@limiter.limit("15/minute")
async def query_financial_knowledge(request, query: str,
                                  current_user = Depends(get_current_active_user)):
    """Query the financial knowledge base"""
    try:
        # Get answer from knowledge base
        answer = financial_kb.get_financial_advice(query)
        
        # Get cost estimate
        cost_estimate = llm_optimizer.get_cost_estimate(query, answer)
        
        return {
            "query": query,
            "answer": answer,
            "source": "financial_knowledge_base",
            "user_id": current_user.email,
            "cost_estimate": cost_estimate
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Knowledge query failed: {str(e)}")

@router.post("/llm-analysis")
@limiter.limit("8/minute")
async def get_llm_financial_analysis(request, financial_data: Dict[str, Any],
                                   current_user = Depends(get_current_active_user)):
    """Get pure LLM analysis of financial data"""
    try:
        # Get insights from LLM orchestrator
        insights = await llm_orchestrator.generate_financial_insights(financial_data)
        
        # Get consensus from multiple LLMs
        consensus = await llm_orchestrator.compare_llm_responses(financial_data)
        
        return {
            "llm_insights": insights,
            "llm_consensus": consensus,
            "user_id": current_user.email,
            "analysis_type": "pure_llm_optimized"
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"LLM analysis failed: {str(e)}")

@router.get("/system-status")
async def get_intelligence_system_status():
    """Get status of all AI components"""
    try:
        status = intelligence_layer.get_system_status()
        cache_stats = llm_optimizer.get_cache_stats()
        
        return {
            "system_status": status,
            "llm_optimization": {
                "tiktoken_available": True,
                "tenacity_retry": True,
                "redis_caching": cache_stats.get("cache_available", False),
                "cache_keys": cache_stats.get("total_keys", 0)
            },
            "overall_health": "healthy" if all([
                status["llm_orchestrator"]["openai_available"],
                status["automl_pipeline"]["tpot_available"],
                status["document_indexing"]["model_indexer_ready"]
            ]) else "degraded"
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Status check failed: {str(e)}")

@router.get("/health")
async def intelligence_health_check():
    """Health check for intelligence layer"""
    return {
        "status": "healthy",
        "components": {
            "llm_orchestrator": "ready",
            "automl_pipeline": "ready",
            "document_indexing": "ready",
            "intelligence_layer": "ready",
            "llm_optimizer": "ready"
        },
        "optimization_features": {
            "tiktoken": "enabled",
            "tenacity": "enabled", 
            "redis_caching": "enabled",
            "async_processing": "enabled"
        },
        "version": "1.0.0",
        "capabilities": [
            "ai_credit_analysis",
            "automl_training",
            "model_explanation",
            "knowledge_querying",
            "hyperparameter_optimization",
            "llm_cost_optimization",
            "response_caching"
        ]
    }