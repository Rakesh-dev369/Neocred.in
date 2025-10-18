"""Stage 1: LLM-Powered Data Analysis"""
import pandas as pd
import numpy as np
from typing import Dict, Any, List
import json
from pydantic import BaseModel, Field
from automl.llm_orchestrator import llm_orchestrator

class DataAnalysisOutput(BaseModel):
    """Structured output for data analysis"""
    dataset_summary: str = Field(description="Overall dataset summary")
    anomalies_detected: List[str] = Field(description="Data anomalies found")
    quality_issues: List[str] = Field(description="Data quality problems")
    recommendations: List[str] = Field(description="Data preprocessing recommendations")
    feature_insights: List[str] = Field(description="Feature-specific insights")
    target_analysis: str = Field(description="Target variable analysis")

class LLMDataAnalyzer:
    """GPT-5 powered data analysis for AutoML"""
    
    def __init__(self):
        self.analysis_cache = {}
    
    def analyze_dataset(self, df: pd.DataFrame, target_column: str) -> DataAnalysisOutput:
        """Comprehensive dataset analysis using GPT-5"""
        
        # Generate dataset statistics
        stats = self._generate_dataset_stats(df, target_column)
        
        # Create analysis prompt
        analysis_prompt = f"""
        As a senior data scientist, analyze this financial dataset:
        
        Dataset Overview:
        - Shape: {df.shape}
        - Target: {target_column}
        - Features: {list(df.columns)}
        
        Statistical Summary:
        {stats}
        
        Provide comprehensive analysis including:
        1. Dataset quality assessment
        2. Anomalies and outliers
        3. Missing data patterns
        4. Feature distributions
        5. Target variable insights
        6. Preprocessing recommendations
        
        Focus on financial data characteristics and credit risk modeling.
        """
        
        try:
            if llm_orchestrator.openai_client:
                response = llm_orchestrator.openai_client.chat.completions.create(
                    model="gpt-4-turbo-preview",  # Will use GPT-5 when available
                    response_model=DataAnalysisOutput,
                    messages=[{"role": "user", "content": analysis_prompt}]
                )
                return response
            else:
                return self._fallback_analysis(df, target_column)
                
        except Exception as e:
            print(f"LLM analysis failed: {e}")
            return self._fallback_analysis(df, target_column)
    
    def _generate_dataset_stats(self, df: pd.DataFrame, target_column: str) -> str:
        """Generate comprehensive dataset statistics"""
        stats = []
        
        # Basic info
        stats.append(f"Rows: {len(df)}, Columns: {len(df.columns)}")
        stats.append(f"Memory usage: {df.memory_usage(deep=True).sum() / 1024**2:.1f} MB")
        
        # Missing values
        missing = df.isnull().sum()
        if missing.sum() > 0:
            stats.append(f"Missing values: {missing[missing > 0].to_dict()}")
        
        # Target distribution
        if target_column in df.columns:
            target_dist = df[target_column].value_counts()
            stats.append(f"Target distribution: {target_dist.to_dict()}")
        
        # Numerical features
        numerical_cols = df.select_dtypes(include=[np.number]).columns
        if len(numerical_cols) > 0:
            stats.append(f"Numerical features: {len(numerical_cols)}")
            stats.append(f"Numerical summary:\n{df[numerical_cols].describe().to_string()}")
        
        # Categorical features
        categorical_cols = df.select_dtypes(include=['object']).columns
        if len(categorical_cols) > 0:
            stats.append(f"Categorical features: {len(categorical_cols)}")
            for col in categorical_cols[:5]:  # Limit to first 5
                unique_count = df[col].nunique()
                stats.append(f"{col}: {unique_count} unique values")
        
        # Potential anomalies
        for col in numerical_cols:
            q1, q3 = df[col].quantile([0.25, 0.75])
            iqr = q3 - q1
            outliers = ((df[col] < (q1 - 1.5 * iqr)) | (df[col] > (q3 + 1.5 * iqr))).sum()
            if outliers > 0:
                stats.append(f"{col}: {outliers} potential outliers")
        
        return "\n".join(stats)
    
    def _fallback_analysis(self, df: pd.DataFrame, target_column: str) -> DataAnalysisOutput:
        """Fallback analysis when LLM is unavailable"""
        
        # Basic anomaly detection
        anomalies = []
        quality_issues = []
        recommendations = []
        
        # Check for missing values
        missing = df.isnull().sum()
        if missing.sum() > 0:
            quality_issues.append(f"Missing values in {missing[missing > 0].index.tolist()}")
            recommendations.append("Handle missing values with imputation or removal")
        
        # Check for duplicates
        duplicates = df.duplicated().sum()
        if duplicates > 0:
            quality_issues.append(f"{duplicates} duplicate rows found")
            recommendations.append("Remove or investigate duplicate records")
        
        # Check for high cardinality
        for col in df.select_dtypes(include=['object']).columns:
            if df[col].nunique() > len(df) * 0.8:
                anomalies.append(f"High cardinality in {col}")
        
        # Check target imbalance
        if target_column in df.columns:
            target_dist = df[target_column].value_counts(normalize=True)
            if target_dist.min() < 0.1:
                anomalies.append("Severe class imbalance in target variable")
                recommendations.append("Consider resampling techniques for imbalanced data")
        
        return DataAnalysisOutput(
            dataset_summary=f"Dataset with {df.shape[0]} rows and {df.shape[1]} columns",
            anomalies_detected=anomalies,
            quality_issues=quality_issues,
            recommendations=recommendations,
            feature_insights=["Automated analysis - LLM unavailable"],
            target_analysis=f"Target variable: {target_column}"
        )
    
    def detect_data_drift(self, reference_df: pd.DataFrame, current_df: pd.DataFrame) -> Dict[str, Any]:
        """Detect data drift using LLM analysis"""
        
        drift_prompt = f"""
        Compare these two datasets for data drift:
        
        Reference Dataset:
        - Shape: {reference_df.shape}
        - Columns: {list(reference_df.columns)}
        
        Current Dataset:
        - Shape: {current_df.shape}
        - Columns: {list(current_df.columns)}
        
        Statistical Differences:
        {self._compare_distributions(reference_df, current_df)}
        
        Identify potential data drift and recommend actions.
        """
        
        try:
            if llm_orchestrator.openai_client:
                response = llm_orchestrator.openai_client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    messages=[{"role": "user", "content": drift_prompt}]
                )
                return {"drift_analysis": response.choices[0].message.content}
            else:
                return {"drift_analysis": "LLM drift analysis unavailable"}
        except Exception as e:
            return {"drift_analysis": f"Drift analysis failed: {e}"}
    
    def _compare_distributions(self, df1: pd.DataFrame, df2: pd.DataFrame) -> str:
        """Compare statistical distributions between datasets"""
        comparisons = []
        
        common_cols = set(df1.columns) & set(df2.columns)
        numerical_cols = df1[list(common_cols)].select_dtypes(include=[np.number]).columns
        
        for col in numerical_cols:
            mean1, mean2 = df1[col].mean(), df2[col].mean()
            std1, std2 = df1[col].std(), df2[col].std()
            
            mean_diff = abs(mean1 - mean2) / mean1 if mean1 != 0 else 0
            std_diff = abs(std1 - std2) / std1 if std1 != 0 else 0
            
            if mean_diff > 0.1 or std_diff > 0.1:
                comparisons.append(f"{col}: Mean {mean1:.2f} -> {mean2:.2f}, Std {std1:.2f} -> {std2:.2f}")
        
        return "\n".join(comparisons) if comparisons else "No significant distribution changes detected"

# Global data analyzer
llm_data_analyzer = LLMDataAnalyzer()