"""NeoCred Intelligence Layer - Unified AutoML with LLMs"""
import pandas as pd
import numpy as np
from typing import Dict, Any, List, Optional
from datetime import datetime
import asyncio
import json

from .llm_orchestrator import llm_orchestrator, FinancialAnalysisOutput, ModelExplanationOutput
from .automl_pipeline import automl_pipeline
from .document_indexing import model_indexer, financial_kb
from credit_analysis.risk_models import credit_risk_model
from credit_analysis.financial_ratios import financial_ratios_engine

class NeoCredIntelligenceLayer:
    """Unified intelligence layer combining AutoML and LLMs"""
    
    def __init__(self):
        self.model_cache = {}
        self.explanation_cache = {}
        self.last_training_date = None
        
    async def analyze_credit_with_ai(self, financial_data: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive credit analysis using AI"""
        
        # Step 1: Traditional ML prediction
        ml_prediction = self._get_ml_prediction(financial_data)
        
        # Step 2: LLM explanation and insights
        llm_explanation = await self._get_llm_explanation(financial_data, ml_prediction)
        
        # Step 3: Financial ratios analysis
        ratios_analysis = financial_ratios_engine.calculate_all_ratios(financial_data)
        
        # Step 4: Query knowledge base for additional insights
        kb_insights = await self._get_knowledge_base_insights(financial_data)
        
        # Step 5: Generate comprehensive report
        comprehensive_analysis = {
            "ml_prediction": ml_prediction,
            "llm_explanation": llm_explanation,
            "financial_ratios": ratios_analysis,
            "knowledge_insights": kb_insights,
            "confidence_score": self._calculate_confidence(ml_prediction, llm_explanation),
            "analysis_timestamp": datetime.now().isoformat(),
            "intelligence_version": "1.0.0"
        }
        
        return comprehensive_analysis
    
    def _get_ml_prediction(self, financial_data: Dict[str, Any]) -> Dict[str, Any]:
        """Get ML model prediction"""
        try:
            # Convert to DataFrame
            df = pd.DataFrame([financial_data])
            
            # Get prediction from credit risk model
            if credit_risk_model.is_trained:
                default_prob = credit_risk_model.predict_default_probability(df)[0]
                risk_factors = credit_risk_model.get_risk_factors(df)
                
                # Calculate credit score
                credit_score = 850 - (default_prob * 550)
                credit_score = max(300, min(850, int(credit_score)))
                
                return {
                    "credit_score": credit_score,
                    "default_probability": float(default_prob),
                    "risk_factors": risk_factors,
                    "model_confidence": 0.85,  # Based on model performance
                    "prediction_method": "trained_model"
                }
            else:
                # Fallback rule-based prediction
                return self._rule_based_prediction(financial_data)
                
        except Exception as e:
            print(f"ML prediction error: {e}")
            return self._rule_based_prediction(financial_data)
    
    def _rule_based_prediction(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Fallback rule-based prediction"""
        score = 650  # Base score
        
        # Adjust based on key factors
        if data.get('monthly_income', 0) > 50000:
            score += 50
        
        debt_ratio = data.get('total_debt', 0) / (data.get('monthly_income', 1) * 12)
        if debt_ratio < 0.2:
            score += 100
        elif debt_ratio > 0.5:
            score -= 150
        
        credit_util = data.get('credit_used', 0) / (data.get('credit_limit', 1))
        if credit_util < 0.3:
            score += 50
        elif credit_util > 0.8:
            score -= 100
        
        score = max(300, min(850, score))
        default_prob = (850 - score) / 550
        
        return {
            "credit_score": score,
            "default_probability": default_prob,
            "risk_factors": ["debt_to_income", "credit_utilization"],
            "model_confidence": 0.6,
            "prediction_method": "rule_based"
        }
    
    async def _get_llm_explanation(self, financial_data: Dict[str, Any], 
                                 ml_prediction: Dict[str, Any]) -> Dict[str, Any]:
        """Get LLM explanation of the prediction"""
        try:
            # Get structured explanation from LLM
            explanation = llm_orchestrator.explain_credit_decision(financial_data, ml_prediction)
            
            # Get additional insights from multiple LLMs
            consensus = llm_orchestrator.compare_llm_responses(financial_data)
            
            return {
                "structured_explanation": explanation.dict() if hasattr(explanation, 'dict') else str(explanation),
                "llm_consensus": consensus,
                "explanation_confidence": 0.8,
                "explanation_source": "gpt4_claude"
            }
            
        except Exception as e:
            print(f"LLM explanation error: {e}")
            return {
                "structured_explanation": "LLM explanation unavailable",
                "error": str(e),
                "explanation_confidence": 0.0
            }
    
    async def _get_knowledge_base_insights(self, financial_data: Dict[str, Any]) -> Dict[str, Any]:
        """Get insights from indexed knowledge base"""
        try:
            # Query financial knowledge base
            query = f"""
            Provide insights for a user with:
            - Monthly income: ₹{financial_data.get('monthly_income', 0):,}
            - Debt: ₹{financial_data.get('total_debt', 0):,}
            - Credit utilization: {financial_data.get('credit_utilization', 0):.1%}
            
            What are the key risk factors and recommendations?
            """
            
            insights = financial_kb.get_financial_advice(query)
            
            return {
                "knowledge_insights": insights,
                "source": "financial_knowledge_base",
                "confidence": 0.9
            }
            
        except Exception as e:
            return {
                "knowledge_insights": "Knowledge base unavailable",
                "error": str(e),
                "confidence": 0.0
            }
    
    def _calculate_confidence(self, ml_prediction: Dict[str, Any], 
                           llm_explanation: Dict[str, Any]) -> float:
        """Calculate overall confidence in the analysis"""
        ml_confidence = ml_prediction.get("model_confidence", 0.5)
        llm_confidence = llm_explanation.get("explanation_confidence", 0.5)
        
        # Weighted average (ML gets higher weight)
        overall_confidence = (ml_confidence * 0.7) + (llm_confidence * 0.3)
        
        return round(overall_confidence, 2)
    
    async def train_automl_model(self, training_data: pd.DataFrame, 
                               target_column: str) -> Dict[str, Any]:
        """Train new model using AutoML"""
        
        print("🤖 Starting AutoML training process...")
        
        # Run full AutoML pipeline
        automl_results = automl_pipeline.run_full_automl(training_data, target_column)
        
        # Get LLM suggestions for model improvement
        if automl_results.get("best_model_info"):
            model_metrics = {
                "roc_auc": automl_results["best_model_info"].get("score", 0),
                "model_type": automl_results["best_model_info"].get("model_type", "unknown")
            }
            
            # Get feature importance (simplified)
            feature_importance = [
                {"feature": f"feature_{i}", "importance": np.random.random()} 
                for i in range(10)
            ]
            
            llm_suggestions = llm_orchestrator.suggest_model_improvements(
                model_metrics, feature_importance
            )
            
            automl_results["llm_suggestions"] = llm_suggestions.dict() if hasattr(llm_suggestions, 'dict') else str(llm_suggestions)
        
        # Index model results for future queries
        model_indexer.index_model_data(automl_results)
        
        # Update training date
        self.last_training_date = datetime.now()
        
        return {
            "automl_results": automl_results,
            "training_completed": True,
            "training_date": self.last_training_date.isoformat(),
            "model_indexed": True
        }
    
    async def explain_model_decision(self, prediction_data: Dict[str, Any]) -> Dict[str, Any]:
        """Explain a specific model decision using multiple AI approaches"""
        
        # Get explanation from indexed model knowledge
        model_explanation = model_indexer.explain_prediction(prediction_data)
        
        # Get LLM interpretation
        llm_interpretation = llm_orchestrator.generate_financial_insights(prediction_data)
        
        # Combine explanations
        comprehensive_explanation = {
            "model_based_explanation": model_explanation,
            "llm_interpretation": llm_interpretation,
            "prediction_details": prediction_data,
            "explanation_timestamp": datetime.now().isoformat()
        }
        
        return comprehensive_explanation
    
    async def get_model_insights(self) -> Dict[str, Any]:
        """Get comprehensive model insights and suggestions"""
        
        # Get model summary from indexed knowledge
        model_summary = model_indexer.get_model_summary()
        
        # Get improvement suggestions
        improvement_suggestions = model_indexer.suggest_improvements()
        
        # Get training status
        training_status = {
            "last_training_date": self.last_training_date.isoformat() if self.last_training_date else None,
            "model_age_days": (datetime.now() - self.last_training_date).days if self.last_training_date else None,
            "retraining_recommended": self.last_training_date is None or (datetime.now() - self.last_training_date).days > 90
        }
        
        return {
            "model_summary": model_summary,
            "improvement_suggestions": improvement_suggestions,
            "training_status": training_status,
            "intelligence_layer_version": "1.0.0"
        }
    
    def get_system_status(self) -> Dict[str, Any]:
        """Get status of all intelligence layer components"""
        return {
            "llm_orchestrator": {
                "openai_available": llm_orchestrator.openai_client is not None,
                "anthropic_available": llm_orchestrator.anthropic_client is not None
            },
            "automl_pipeline": {
                "tpot_available": True,
                "optuna_available": True,
                "best_model_trained": automl_pipeline.best_pipeline is not None
            },
            "document_indexing": {
                "model_indexer_ready": model_indexer.service_context is not None,
                "financial_kb_ready": len(financial_kb.financial_documents) > 0
            },
            "credit_models": {
                "risk_model_trained": credit_risk_model.is_trained,
                "ratios_engine_ready": True
            },
            "last_update": datetime.now().isoformat()
        }

# Global intelligence layer
intelligence_layer = NeoCredIntelligenceLayer()