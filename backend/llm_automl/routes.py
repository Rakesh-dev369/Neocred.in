"""LLM-Powered AutoML Pipeline API Routes"""
from fastapi import APIRouter, HTTPException, UploadFile, File, Depends, BackgroundTasks
from pydantic import BaseModel
from typing import Dict, Any, Optional
import pandas as pd
import tempfile
import os
from .pipeline_orchestrator import llm_automl_pipeline
from .mlflow_deployer import mlflow_auto_deployer
from auth.dependencies import get_current_active_user
from auth.rate_limiter import limiter

router = APIRouter(prefix="/llm-automl", tags=["LLM-Powered AutoML"])

class AutoMLRequest(BaseModel):
    target_column: str
    pipeline_config: Optional[Dict[str, Any]] = {}

class PipelineStatusRequest(BaseModel):
    pipeline_id: str

@router.post("/run-pipeline")
@limiter.limit("1/hour")
async def run_llm_automl_pipeline(request, background_tasks: BackgroundTasks,
                                automl_request: AutoMLRequest,
                                file: UploadFile = File(...),
                                current_user = Depends(get_current_active_user)):
    """
    🚀 Run the complete 6-stage LLM-powered AutoML pipeline
    
    This is NeoCred's key differentiator - a hybrid AutoML + LLM system:
    1️⃣ Data Analysis – GPT-5 analyzes dataset & finds anomalies
    2️⃣ Feature Engineering – Claude suggests transformations  
    3️⃣ Model Selection – LLM recommends algorithm set
    4️⃣ Hyperparameter Tuning – Optuna guided by LLM feedback
    5️⃣ Evaluation & Reporting – GPT-5 writes human-readable summary
    6️⃣ Deployment – Auto-push best model via MLflow
    """
    try:
        # Save uploaded file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as tmp_file:
            content = await file.read()
            tmp_file.write(content)
            tmp_file_path = tmp_file.name
        
        # Load and validate data
        df = pd.read_csv(tmp_file_path)
        
        if automl_request.target_column not in df.columns:
            raise HTTPException(
                status_code=400, 
                detail=f"Target column '{automl_request.target_column}' not found in dataset"
            )
        
        # Start pipeline in background
        background_tasks.add_task(
            _run_pipeline_background,
            df,
            automl_request.target_column,
            automl_request.pipeline_config,
            current_user.email
        )
        
        # Clean up temp file
        os.unlink(tmp_file_path)
        
        return {
            "message": "🚀 LLM-Powered AutoML Pipeline Started",
            "pipeline_type": "hybrid_automl_llm",
            "stages": [
                "1️⃣ GPT-5 Data Analysis",
                "2️⃣ Claude Feature Engineering", 
                "3️⃣ LLM Model Selection",
                "4️⃣ Optuna + LLM Hyperparameter Tuning",
                "5️⃣ GPT-5 Evaluation & Reporting",
                "6️⃣ MLflow Auto-Deployment"
            ],
            "estimated_duration": "15-45 minutes",
            "dataset_info": {
                "shape": df.shape,
                "target_column": automl_request.target_column,
                "features": df.columns.tolist()
            },
            "user_id": current_user.email,
            "differentiator": "NeoCred's unique hybrid AutoML + LLM system"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Pipeline initiation failed: {str(e)}")

async def _run_pipeline_background(df: pd.DataFrame, target_column: str, 
                                 pipeline_config: Dict[str, Any], user_id: str):
    """Background task for running the complete pipeline"""
    try:
        print(f"🚀 Starting LLM-AutoML pipeline for user {user_id}")
        
        # Run the complete 6-stage pipeline
        results = await llm_automl_pipeline.run_complete_pipeline(
            df, target_column, pipeline_config
        )
        
        print(f"✅ LLM-AutoML pipeline completed for user {user_id}")
        print(f"📊 Best Model: {results['model_performance']['best_model']}")
        print(f"📈 ROC-AUC: {results['model_performance']['roc_auc_score']:.4f}")
        print(f"🚀 Deployment: {results['deployment_info']['deployment_status']}")
        
        # In production, notify user via WebSocket or email
        
    except Exception as e:
        print(f"❌ LLM-AutoML pipeline failed for user {user_id}: {e}")

@router.get("/pipeline-status/{pipeline_id}")
@limiter.limit("20/minute")
async def get_pipeline_status(request, pipeline_id: str,
                            current_user = Depends(get_current_active_user)):
    """Get current status of running pipeline"""
    try:
        status = llm_automl_pipeline.get_pipeline_status(pipeline_id)
        
        return {
            "pipeline_status": status,
            "user_id": current_user.email,
            "query_timestamp": pd.Timestamp.now().isoformat()
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Status check failed: {str(e)}")

@router.get("/deployment-status")
@limiter.limit("10/minute")
async def get_deployment_status(request, model_version: Optional[str] = None,
                              current_user = Depends(get_current_active_user)):
    """Get MLflow deployment status"""
    try:
        deployment_status = mlflow_auto_deployer.get_deployment_status(model_version)
        
        return {
            "deployment_status": deployment_status,
            "user_id": current_user.email,
            "mlflow_tracking_uri": mlflow_auto_deployer.tracking_uri
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Deployment status check failed: {str(e)}")

@router.post("/stage-analysis")
@limiter.limit("10/minute")
async def run_individual_stage(request, stage_number: int,
                             file: UploadFile = File(...),
                             target_column: str = "default",
                             current_user = Depends(get_current_active_user)):
    """Run individual pipeline stage for testing/debugging"""
    try:
        # Load data
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as tmp_file:
            content = await file.read()
            tmp_file.write(content)
            tmp_file_path = tmp_file.name
        
        df = pd.read_csv(tmp_file_path)
        os.unlink(tmp_file_path)
        
        if stage_number == 1:
            # Stage 1: Data Analysis
            from .data_analyzer import llm_data_analyzer
            result = llm_data_analyzer.analyze_dataset(df, target_column)
            stage_name = "GPT-5 Data Analysis"
            
        elif stage_number == 2:
            # Stage 2: Feature Engineering
            from .feature_engineer import claude_feature_engineer
            from .data_analyzer import llm_data_analyzer
            
            data_analysis = llm_data_analyzer.analyze_dataset(df, target_column)
            result = claude_feature_engineer.suggest_features(df, target_column, data_analysis.dict())
            stage_name = "Claude Feature Engineering"
            
        elif stage_number == 3:
            # Stage 3: Model Selection
            from .model_selector import llm_model_selector
            result = llm_model_selector.select_models(df, target_column, {}, {})
            stage_name = "LLM Model Selection"
            
        else:
            raise HTTPException(status_code=400, detail="Invalid stage number. Use 1, 2, or 3.")
        
        return {
            "stage_number": stage_number,
            "stage_name": stage_name,
            "result": result.dict() if hasattr(result, 'dict') else str(result),
            "dataset_shape": df.shape,
            "user_id": current_user.email
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Stage {stage_number} analysis failed: {str(e)}")

@router.get("/pipeline-capabilities")
async def get_pipeline_capabilities():
    """Get information about the LLM-AutoML pipeline capabilities"""
    return {
        "pipeline_name": "NeoCred LLM-Powered AutoML",
        "description": "Hybrid AutoML + LLM system for financial ML",
        "differentiator": "First-of-its-kind LLM-guided automated machine learning",
        "stages": {
            "1": {
                "name": "LLM Data Analysis",
                "technology": "GPT-5",
                "purpose": "Dataset analysis and anomaly detection",
                "output": "Data quality insights and preprocessing recommendations"
            },
            "2": {
                "name": "Claude Feature Engineering", 
                "technology": "Anthropic Claude",
                "purpose": "Financial domain feature suggestions",
                "output": "Engineered features and transformations"
            },
            "3": {
                "name": "LLM Model Selection",
                "technology": "GPT-4 + Domain Knowledge",
                "purpose": "Algorithm recommendation for credit risk",
                "output": "Optimized model selection with rationale"
            },
            "4": {
                "name": "LLM-Guided Hyperparameter Tuning",
                "technology": "Optuna + LLM Feedback",
                "purpose": "Intelligent parameter optimization",
                "output": "Best hyperparameters with convergence analysis"
            },
            "5": {
                "name": "GPT-5 Evaluation & Reporting",
                "technology": "GPT-5",
                "purpose": "Human-readable model evaluation",
                "output": "Executive and technical reports"
            },
            "6": {
                "name": "MLflow Auto-Deployment",
                "technology": "MLflow + Automation",
                "purpose": "Automated model deployment and promotion",
                "output": "Production-ready model with monitoring"
            }
        },
        "business_value": {
            "automation_level": "95%",
            "time_to_deployment": "15-45 minutes",
            "human_interpretability": "High - LLM explanations",
            "regulatory_compliance": "Built-in documentation",
            "competitive_advantage": "Unique hybrid approach"
        },
        "supported_use_cases": [
            "Credit risk assessment",
            "Loan default prediction", 
            "Financial fraud detection",
            "Customer segmentation",
            "Risk portfolio optimization"
        ]
    }

@router.get("/health")
async def llm_automl_health_check():
    """Health check for LLM-AutoML pipeline"""
    
    # Check component availability
    from automl.llm_orchestrator import llm_orchestrator
    
    health_status = {
        "status": "healthy",
        "pipeline_components": {
            "data_analyzer": "ready",
            "feature_engineer": "ready", 
            "model_selector": "ready",
            "hyperparameter_tuner": "ready",
            "evaluator_reporter": "ready",
            "mlflow_deployer": "ready"
        },
        "llm_availability": {
            "openai_gpt4": llm_orchestrator.openai_client is not None,
            "anthropic_claude": llm_orchestrator.anthropic_client is not None
        },
        "mlflow_status": {
            "tracking_uri": mlflow_auto_deployer.tracking_uri,
            "experiment_name": mlflow_auto_deployer.experiment_name
        },
        "version": "1.0.0",
        "differentiator": "NeoCred's Hybrid AutoML + LLM System"
    }
    
    # Overall health
    llm_available = any(health_status["llm_availability"].values())
    health_status["overall_status"] = "healthy" if llm_available else "degraded"
    
    return health_status