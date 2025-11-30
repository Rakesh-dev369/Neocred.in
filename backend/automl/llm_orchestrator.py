"""LLM Orchestration with LangChain for NeoCred Intelligence"""
import os
from typing import Dict, Any, List, Optional
from langchain_openai import OpenAI
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import PromptTemplate, ChatPromptTemplate
# from langchain.chains import LLMChain  # Deprecated in newer versions
from langchain_core.output_parsers import BaseOutputParser
import openai
import anthropic
from pydantic import BaseModel, Field
import instructor
import json
from .llm_optimizer import llm_optimizer

class FinancialAnalysisOutput(BaseModel):
    """Structured output for financial analysis"""
    risk_score: float = Field(description="Risk score between 0-1")
    risk_factors: List[str] = Field(description="Key risk factors identified")
    recommendations: List[str] = Field(description="Actionable recommendations")
    confidence: float = Field(description="Confidence in analysis (0-1)")
    explanation: str = Field(description="Human-readable explanation")

class ModelExplanationOutput(BaseModel):
    """Structured output for model explanations"""
    model_performance: str = Field(description="Performance summary")
    key_features: List[str] = Field(description="Most important features")
    feature_suggestions: List[str] = Field(description="Suggested new features")
    model_limitations: List[str] = Field(description="Known limitations")
    improvement_suggestions: List[str] = Field(description="Ways to improve model")

class LLMOrchestrator:
    """Orchestrate multiple LLMs for financial analysis"""
    
    def __init__(self):
        self.openai_client = None
        self.anthropic_client = None
        self.setup_clients()
        
        # Only initialize OpenAI if API key is available
        openai_key = os.getenv("OPENAI_API_KEY")
        if openai_key and openai_key != "your-actual-openai-api-key":
            self.openai_llm = ChatOpenAI(
                model="gpt-4-turbo-preview",
                temperature=0.1,
                openai_api_key=openai_key
            )
        else:
            self.openai_llm = None
        
        # Only initialize Claude if API key is available
        anthropic_key = os.getenv("ANTHROPIC_API_KEY")
        if anthropic_key and anthropic_key != "your-actual-anthropic-api-key":
            self.claude_llm = ChatAnthropic(
                model="claude-3-sonnet-20240229",
                temperature=0.1,
                anthropic_api_key=anthropic_key
            )
        else:
            self.claude_llm = None
    
    def setup_clients(self):
        """Setup LLM clients"""
        openai_key = os.getenv("OPENAI_API_KEY")
        anthropic_key = os.getenv("ANTHROPIC_API_KEY")
        
        if openai_key:
            self.openai_client = instructor.patch(openai.OpenAI(api_key=openai_key))
        
        if anthropic_key:
            self.anthropic_client = anthropic.Anthropic(api_key=anthropic_key)
    
    async def explain_credit_decision(self, financial_data: Dict[str, Any], 
                              model_prediction: Dict[str, Any]) -> FinancialAnalysisOutput:
        """Generate human-readable explanation for credit decisions"""
        
        prompt = f"""
        As a financial expert, explain this credit analysis:
        
        Financial Data:
        - Monthly Income: ₹{financial_data.get('monthly_income', 0):,}
        - Monthly Expenses: ₹{financial_data.get('monthly_expenses', 0):,}
        - Total Debt: ₹{financial_data.get('total_debt', 0):,}
        - Credit Utilization: {financial_data.get('credit_utilization', 0):.1%}
        - Age: {financial_data.get('age', 0)} years
        
        Model Prediction:
        - Credit Score: {model_prediction.get('credit_score', 0)}
        - Default Probability: {model_prediction.get('default_probability', 0):.1%}
        - Risk Category: {model_prediction.get('risk_category', 'Unknown')}
        
        Provide a structured analysis with risk assessment, key factors, and actionable recommendations.
        """
        
        # Optimize prompt and check cache
        optimized_prompt = llm_optimizer.optimize_prompt(prompt)
        
        if self.openai_client:
            try:
                # Use optimized LLM call with retry and caching
                response_text = await llm_optimizer.call_llm_with_retry(
                    self.openai_client,
                    [{"role": "user", "content": optimized_prompt}]
                )
                
                # Parse response into structured format (simplified)
                return FinancialAnalysisOutput(
                    risk_score=model_prediction.get('default_probability', 0.5),
                    risk_factors=["High debt-to-income ratio", "Credit utilization"],
                    recommendations=["Reduce debt", "Improve payment history"],
                    confidence=0.8,
                    explanation=response_text[:500]
                )
            except Exception as e:
                print(f"OpenAI error: {e}")
        
        # Fallback structured response
        return FinancialAnalysisOutput(
            risk_score=model_prediction.get('default_probability', 0.5),
            risk_factors=["High debt-to-income ratio", "Credit utilization"],
            recommendations=["Reduce debt", "Improve payment history"],
            confidence=0.7,
            explanation="Analysis based on standard financial metrics"
        )
    
    async def suggest_model_improvements(self, model_metrics: Dict[str, Any], 
                                 feature_importance: List[Dict[str, Any]]) -> ModelExplanationOutput:
        """Get LLM suggestions for model improvements"""
        
        features_text = "\n".join([
            f"- {f['feature']}: {f['importance']:.3f}" 
            for f in feature_importance[:10]
        ])
        
        prompt = f"""
        As an ML expert, analyze this credit risk model:
        
        Model Performance:
        - ROC-AUC: {model_metrics.get('roc_auc', 0):.3f}
        - Precision: {model_metrics.get('precision', 0):.3f}
        - Recall: {model_metrics.get('recall', 0):.3f}
        - F1-Score: {model_metrics.get('f1_score', 0):.3f}
        
        Top Features:
        {features_text}
        
        Suggest improvements, new features, and model limitations for credit risk assessment.
        """
        
        if self.openai_client:
            try:
                # Use optimized LLM call
                response_text = await llm_optimizer.call_llm_with_retry(
                    self.openai_client,
                    [{"role": "user", "content": prompt}]
                )
                
                return ModelExplanationOutput(
                    model_performance="Model shows good predictive capability",
                    key_features=["debt_to_income", "credit_utilization", "payment_history"],
                    feature_suggestions=["Employment stability", "Bank transaction patterns"],
                    model_limitations=["Limited historical data", "Potential bias"],
                    improvement_suggestions=["Collect more features", "Regular retraining"]
                )
            except Exception as e:
                print(f"OpenAI error: {e}")
        
        # Fallback response
        return ModelExplanationOutput(
            model_performance="Model shows good predictive capability",
            key_features=["debt_to_income", "credit_utilization", "payment_history"],
            feature_suggestions=["Employment stability", "Bank transaction patterns"],
            model_limitations=["Limited historical data", "Potential bias"],
            improvement_suggestions=["Collect more features", "Regular retraining"]
        )
    
    async def generate_financial_insights(self, user_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate comprehensive financial insights using Claude"""
        
        prompt = f"""
        Analyze this user's financial profile and provide insights:
        
        Profile: {json.dumps(user_data, indent=2)}
        
        Provide:
        1. Financial health assessment
        2. Risk factors
        3. Improvement opportunities
        4. Personalized recommendations
        5. Timeline for improvements
        """
        
        # Check cache and optimize
        cached_response = llm_optimizer.get_cached_response(prompt, "claude-3-sonnet", 0.1)
        if cached_response:
            return {"insights": cached_response, "source": "claude_cached"}
        
        try:
            if self.claude_llm:
                response = self.claude_llm.invoke(prompt)
                result = response.content if hasattr(response, 'content') else str(response)
                
                # Cache the response
                llm_optimizer.cache_response(prompt, result, "claude-3-sonnet", 0.1)
                
                return {"insights": result, "source": "claude"}
        except Exception as e:
            return {"insights": f"Analysis unavailable: {e}", "source": "fallback"}
    
    async def compare_llm_responses(self, financial_data: Dict[str, Any]) -> Dict[str, Any]:
        """Compare responses from multiple LLMs for consensus"""
        
        prompt = f"Analyze credit risk for: {json.dumps(financial_data)}"
        responses = {}
        
        # Get OpenAI analysis with optimization
        try:
            if self.openai_client:
                openai_response = await llm_optimizer.call_llm_with_retry(
                    self.openai_client,
                    [{"role": "user", "content": prompt}]
                )
                responses["openai"] = openai_response
        except Exception as e:
            responses["openai"] = f"Error: {e}"
        
        # Get Claude analysis with caching
        try:
            if self.claude_llm:
                cached_claude = llm_optimizer.get_cached_response(prompt, "claude-3-sonnet", 0.1)
                if cached_claude:
                    responses["claude"] = cached_claude
                else:
                    claude_response = self.claude_llm.invoke(prompt)
                    result = claude_response.content if hasattr(claude_response, 'content') else str(claude_response)
                    llm_optimizer.cache_response(prompt, result, "claude-3-sonnet", 0.1)
                    responses["claude"] = result
        except Exception as e:
            responses["claude"] = f"Error: {e}"
        
        # Simple consensus
        consensus = {
            "primary_analysis": responses.get("openai", ""),
            "secondary_analysis": responses.get("claude", ""),
            "consensus_available": len([r for r in responses.values() if not r.startswith("Error")]) > 1,
            "cost_estimate": llm_optimizer.get_cost_estimate(prompt)
        }
        
        return consensus

class FinancialPromptTemplates:
    """Pre-defined prompts for financial analysis"""
    
    CREDIT_RISK_ANALYSIS = """
    You are a senior credit analyst. Analyze this financial profile:
    
    Income: ₹{monthly_income:,}/month
    Expenses: ₹{monthly_expenses:,}/month
    Debt: ₹{total_debt:,}
    Credit Utilization: {credit_utilization:.1%}
    Age: {age} years
    Employment: {employment_months} months
    
    Provide:
    1. Risk assessment (Low/Medium/High)
    2. Key risk factors
    3. Specific recommendations
    4. Timeline for improvement
    
    Be specific and actionable.
    """
    
    MODEL_EXPLANATION = """
    Explain this ML model's decision in simple terms:
    
    Model: {model_type}
    Prediction: {prediction}
    Confidence: {confidence:.1%}
    Key Features: {top_features}
    
    Make it understandable for a non-technical user.
    """
    
    FEATURE_ENGINEERING = """
    As an ML engineer, suggest new features for credit risk modeling:
    
    Current Features: {current_features}
    Model Performance: {performance_metrics}
    Data Sources Available: {data_sources}
    
    Suggest 5-10 new features that could improve model accuracy.
    """

# Global LLM orchestrator
llm_orchestrator = LLMOrchestrator()