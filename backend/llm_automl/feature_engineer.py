"""Stage 2: Claude-Powered Feature Engineering"""
import pandas as pd
import numpy as np
from typing import Dict, Any, List, Callable
from pydantic import BaseModel, Field
from automl.llm_orchestrator import llm_orchestrator

class FeatureEngineeringOutput(BaseModel):
    """Structured output for feature engineering"""
    transformations: List[str] = Field(description="Recommended transformations")
    new_features: List[str] = Field(description="New features to create")
    feature_interactions: List[str] = Field(description="Feature interaction suggestions")
    scaling_recommendations: List[str] = Field(description="Feature scaling suggestions")
    encoding_strategies: List[str] = Field(description="Categorical encoding strategies")
    rationale: str = Field(description="Reasoning behind recommendations")

class ClaudeFeatureEngineer:
    """Claude-powered feature engineering for financial data"""
    
    def __init__(self):
        self.transformation_functions = {
            'log_transform': self._log_transform,
            'sqrt_transform': self._sqrt_transform,
            'reciprocal_transform': self._reciprocal_transform,
            'polynomial_features': self._polynomial_features,
            'ratio_features': self._ratio_features,
            'binning': self._binning,
            'interaction_features': self._interaction_features
        }
    
    def suggest_features(self, df: pd.DataFrame, target_column: str, 
                        data_analysis: Dict[str, Any]) -> FeatureEngineeringOutput:
        """Get Claude's feature engineering suggestions"""
        
        # Prepare context for Claude
        feature_context = self._prepare_feature_context(df, target_column, data_analysis)
        
        feature_prompt = f"""
        As an expert ML engineer specializing in financial data, suggest feature engineering strategies:
        
        Dataset Context:
        {feature_context}
        
        Domain: Credit Risk Assessment
        
        Provide specific recommendations for:
        1. Mathematical transformations (log, sqrt, polynomial)
        2. Financial ratio features (debt-to-income, utilization rates)
        3. Categorical encoding strategies
        4. Feature interactions and combinations
        5. Binning and discretization
        6. Scaling and normalization
        
        Focus on features that improve credit risk prediction accuracy.
        Explain the financial reasoning behind each suggestion.
        """
        
        try:
            if llm_orchestrator.claude_llm:
                response = llm_orchestrator.claude_llm.invoke(feature_prompt)
                return self._parse_claude_response(response.content)
            else:
                return self._fallback_feature_suggestions(df, target_column)
                
        except Exception as e:
            print(f"Claude feature engineering failed: {e}")
            return self._fallback_feature_suggestions(df, target_column)
    
    def apply_transformations(self, df: pd.DataFrame, 
                            suggestions: FeatureEngineeringOutput) -> pd.DataFrame:
        """Apply Claude's feature engineering suggestions"""
        
        engineered_df = df.copy()
        
        # Apply transformations based on suggestions
        for transformation in suggestions.transformations:
            if 'log' in transformation.lower():
                engineered_df = self._apply_log_transforms(engineered_df)
            elif 'sqrt' in transformation.lower():
                engineered_df = self._apply_sqrt_transforms(engineered_df)
            elif 'polynomial' in transformation.lower():
                engineered_df = self._apply_polynomial_features(engineered_df)
        
        # Create new features
        for feature_desc in suggestions.new_features:
            if 'ratio' in feature_desc.lower():
                engineered_df = self._create_ratio_features(engineered_df)
            elif 'interaction' in feature_desc.lower():
                engineered_df = self._create_interaction_features(engineered_df)
            elif 'binning' in feature_desc.lower():
                engineered_df = self._apply_binning(engineered_df)
        
        return engineered_df
    
    def _prepare_feature_context(self, df: pd.DataFrame, target_column: str, 
                               data_analysis: Dict[str, Any]) -> str:
        """Prepare context for Claude"""
        context = []
        
        # Dataset info
        context.append(f"Dataset: {df.shape[0]} rows, {df.shape[1]} columns")
        context.append(f"Target: {target_column}")
        
        # Feature types
        numerical_cols = df.select_dtypes(include=[np.number]).columns.tolist()
        categorical_cols = df.select_dtypes(include=['object']).columns.tolist()
        
        context.append(f"Numerical features ({len(numerical_cols)}): {numerical_cols[:10]}")
        context.append(f"Categorical features ({len(categorical_cols)}): {categorical_cols[:10]}")
        
        # Data analysis insights
        if 'anomalies_detected' in data_analysis:
            context.append(f"Anomalies: {data_analysis['anomalies_detected']}")
        
        if 'quality_issues' in data_analysis:
            context.append(f"Quality issues: {data_analysis['quality_issues']}")
        
        # Financial domain features
        financial_features = []
        for col in df.columns:
            col_lower = col.lower()
            if any(term in col_lower for term in ['income', 'debt', 'credit', 'payment', 'balance']):
                financial_features.append(col)
        
        if financial_features:
            context.append(f"Financial features: {financial_features}")
        
        return "\n".join(context)
    
    def _parse_claude_response(self, response: str) -> FeatureEngineeringOutput:
        """Parse Claude's response into structured output"""
        
        # Extract recommendations (simplified parsing)
        transformations = []
        new_features = []
        interactions = []
        scaling = []
        encoding = []
        
        lines = response.split('\n')
        current_section = None
        
        for line in lines:
            line = line.strip()
            if 'transformation' in line.lower():
                current_section = 'transformations'
            elif 'new feature' in line.lower() or 'ratio' in line.lower():
                current_section = 'new_features'
            elif 'interaction' in line.lower():
                current_section = 'interactions'
            elif 'scaling' in line.lower() or 'normalization' in line.lower():
                current_section = 'scaling'
            elif 'encoding' in line.lower():
                current_section = 'encoding'
            elif line.startswith('-') or line.startswith('•'):
                suggestion = line.lstrip('-•').strip()
                if current_section == 'transformations':
                    transformations.append(suggestion)
                elif current_section == 'new_features':
                    new_features.append(suggestion)
                elif current_section == 'interactions':
                    interactions.append(suggestion)
                elif current_section == 'scaling':
                    scaling.append(suggestion)
                elif current_section == 'encoding':
                    encoding.append(suggestion)
        
        return FeatureEngineeringOutput(
            transformations=transformations or ["Log transform for skewed features"],
            new_features=new_features or ["Debt-to-income ratio", "Credit utilization rate"],
            feature_interactions=interactions or ["Income × Employment length"],
            scaling_recommendations=scaling or ["StandardScaler for numerical features"],
            encoding_strategies=encoding or ["One-hot encoding for categorical features"],
            rationale=response[:500] + "..." if len(response) > 500 else response
        )
    
    def _fallback_feature_suggestions(self, df: pd.DataFrame, target_column: str) -> FeatureEngineeringOutput:
        """Fallback feature suggestions when Claude is unavailable"""
        
        numerical_cols = df.select_dtypes(include=[np.number]).columns.tolist()
        categorical_cols = df.select_dtypes(include=['object']).columns.tolist()
        
        return FeatureEngineeringOutput(
            transformations=[
                "Log transform for right-skewed numerical features",
                "Square root transform for count features",
                "Polynomial features (degree 2) for non-linear relationships"
            ],
            new_features=[
                "Debt-to-income ratio from total_debt and monthly_income",
                "Credit utilization from credit_used and credit_limit",
                "Savings rate from income and expenses",
                "Age groups (binned age feature)"
            ],
            feature_interactions=[
                "Income × Employment length interaction",
                "Credit score × Credit utilization interaction",
                "Age × Income interaction"
            ],
            scaling_recommendations=[
                "StandardScaler for all numerical features",
                "MinMaxScaler for bounded features like utilization rates"
            ],
            encoding_strategies=[
                "One-hot encoding for low-cardinality categorical features",
                "Target encoding for high-cardinality categorical features",
                "Ordinal encoding for ordered categories"
            ],
            rationale="Standard financial feature engineering practices for credit risk modeling"
        )
    
    # Transformation methods
    def _apply_log_transforms(self, df: pd.DataFrame) -> pd.DataFrame:
        """Apply log transformations to appropriate columns"""
        numerical_cols = df.select_dtypes(include=[np.number]).columns
        
        for col in numerical_cols:
            if (df[col] > 0).all():  # Only positive values
                skewness = df[col].skew()
                if abs(skewness) > 1:  # Highly skewed
                    df[f'{col}_log'] = np.log1p(df[col])
        
        return df
    
    def _apply_sqrt_transforms(self, df: pd.DataFrame) -> pd.DataFrame:
        """Apply square root transformations"""
        numerical_cols = df.select_dtypes(include=[np.number]).columns
        
        for col in numerical_cols:
            if (df[col] >= 0).all():  # Non-negative values
                df[f'{col}_sqrt'] = np.sqrt(df[col])
        
        return df
    
    def _create_ratio_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """Create financial ratio features"""
        
        # Common financial ratios
        if 'total_debt' in df.columns and 'monthly_income' in df.columns:
            df['debt_to_income'] = df['total_debt'] / (df['monthly_income'] * 12 + 1)
        
        if 'credit_used' in df.columns and 'credit_limit' in df.columns:
            df['credit_utilization'] = df['credit_used'] / (df['credit_limit'] + 1)
        
        if 'monthly_income' in df.columns and 'monthly_expenses' in df.columns:
            df['savings_rate'] = (df['monthly_income'] - df['monthly_expenses']) / (df['monthly_income'] + 1)
        
        return df
    
    def _create_interaction_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """Create interaction features"""
        numerical_cols = df.select_dtypes(include=[np.number]).columns
        
        # Create interactions for important pairs
        important_pairs = [
            ('monthly_income', 'age'),
            ('credit_score', 'employment_months'),
            ('total_debt', 'monthly_income')
        ]
        
        for col1, col2 in important_pairs:
            if col1 in df.columns and col2 in df.columns:
                df[f'{col1}_{col2}_interaction'] = df[col1] * df[col2]
        
        return df
    
    def _apply_binning(self, df: pd.DataFrame) -> pd.DataFrame:
        """Apply binning to numerical features"""
        
        if 'age' in df.columns:
            df['age_group'] = pd.cut(df['age'], bins=[0, 25, 35, 50, 100], labels=['Young', 'Adult', 'Middle', 'Senior'])
        
        if 'monthly_income' in df.columns:
            df['income_bracket'] = pd.qcut(df['monthly_income'], q=5, labels=['Low', 'Below_Avg', 'Average', 'Above_Avg', 'High'])
        
        return df
    
    def _apply_polynomial_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """Apply polynomial features to key variables"""
        from sklearn.preprocessing import PolynomialFeatures
        
        # Apply to selected important features only
        key_features = ['monthly_income', 'credit_score', 'employment_months']
        available_features = [f for f in key_features if f in df.columns]
        
        if available_features:
            poly = PolynomialFeatures(degree=2, include_bias=False, interaction_only=True)
            poly_features = poly.fit_transform(df[available_features])
            poly_feature_names = poly.get_feature_names_out(available_features)
            
            # Add only interaction terms (not squares)
            for i, name in enumerate(poly_feature_names):
                if ' ' in name:  # Interaction term
                    df[f'poly_{name.replace(" ", "_")}'] = poly_features[:, i]
        
        return df
    
    # Missing transformation methods referenced in __init__
    def _log_transform(self, df: pd.DataFrame, column: str) -> pd.DataFrame:
        """Apply log transformation to a specific column"""
        if column in df.columns and (df[column] > 0).all():
            df[f'{column}_log'] = np.log1p(df[column])
        return df
    
    def _sqrt_transform(self, df: pd.DataFrame, column: str) -> pd.DataFrame:
        """Apply square root transformation to a specific column"""
        if column in df.columns and (df[column] >= 0).all():
            df[f'{column}_sqrt'] = np.sqrt(df[column])
        return df
    
    def _reciprocal_transform(self, df: pd.DataFrame, column: str) -> pd.DataFrame:
        """Apply reciprocal transformation to a specific column"""
        if column in df.columns and (df[column] != 0).all():
            df[f'{column}_reciprocal'] = 1 / (df[column] + 1e-8)
        return df
    
    def _polynomial_features(self, df: pd.DataFrame, columns: List[str]) -> pd.DataFrame:
        """Apply polynomial features to specified columns"""
        from sklearn.preprocessing import PolynomialFeatures
        available_cols = [col for col in columns if col in df.columns]
        if available_cols:
            poly = PolynomialFeatures(degree=2, include_bias=False)
            poly_features = poly.fit_transform(df[available_cols])
            feature_names = poly.get_feature_names_out(available_cols)
            for i, name in enumerate(feature_names):
                if name not in available_cols:  # Skip original features
                    df[f'poly_{name}'] = poly_features[:, i]
        return df
    
    def _ratio_features(self, df: pd.DataFrame, numerator: str, denominator: str) -> pd.DataFrame:
        """Create ratio feature between two columns"""
        if numerator in df.columns and denominator in df.columns:
            df[f'{numerator}_{denominator}_ratio'] = df[numerator] / (df[denominator] + 1e-8)
        return df
    
    def _binning(self, df: pd.DataFrame, column: str, bins: int = 5) -> pd.DataFrame:
        """Apply binning to a specific column"""
        if column in df.columns:
            df[f'{column}_binned'] = pd.qcut(df[column], q=bins, duplicates='drop')
        return df
    
    def _interaction_features(self, df: pd.DataFrame, col1: str, col2: str) -> pd.DataFrame:
        """Create interaction feature between two columns"""
        if col1 in df.columns and col2 in df.columns:
            df[f'{col1}_{col2}_interaction'] = df[col1] * df[col2]
        return df

# Global feature engineer
claude_feature_engineer = ClaudeFeatureEngineer()