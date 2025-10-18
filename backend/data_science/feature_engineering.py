"""Feature Engineering with Feature-engine"""
import pandas as pd
import numpy as np
from feature_engine.discretisation import EqualFrequencyDiscretiser, EqualWidthDiscretiser
from feature_engine.encoding import OneHotEncoder, OrdinalEncoder
from feature_engine.imputation import MeanMedianImputer, CategoricalImputer
from feature_engine.outliers import Winsorizer
from feature_engine.selection import DropFeatures
from feature_engine.transformation import LogTransformer, PowerTransformer

class FinancialFeatureEngineer:
    """Feature engineering for financial data"""
    
    def __init__(self):
        self.transformers = {}
    
    def create_income_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """Create income-based features"""
        df = df.copy()
        
        # Income ratios
        if 'monthly_income' in df.columns and 'monthly_expenses' in df.columns:
            df['income_expense_ratio'] = df['monthly_income'] / (df['monthly_expenses'] + 1)
            df['savings_rate'] = (df['monthly_income'] - df['monthly_expenses']) / df['monthly_income']
        
        # Income categories
        if 'monthly_income' in df.columns:
            df['income_category'] = pd.cut(
                df['monthly_income'], 
                bins=[0, 25000, 50000, 100000, float('inf')],
                labels=['Low', 'Medium', 'High', 'Very High']
            )
        
        return df
    
    def create_credit_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """Create credit-related features"""
        df = df.copy()
        
        # Credit utilization
        if 'credit_used' in df.columns and 'credit_limit' in df.columns:
            df['credit_utilization'] = df['credit_used'] / (df['credit_limit'] + 1)
        
        # Debt-to-income ratio
        if 'total_debt' in df.columns and 'monthly_income' in df.columns:
            df['debt_to_income'] = df['total_debt'] / (df['monthly_income'] + 1)
        
        return df
    
    def handle_outliers(self, df: pd.DataFrame, variables: list) -> pd.DataFrame:
        """Handle outliers using Winsorization"""
        winsorizer = Winsorizer(capping_method='iqr', tail='both', fold=1.5, variables=variables)
        df_transformed = winsorizer.fit_transform(df)
        self.transformers['winsorizer'] = winsorizer
        return df_transformed
    
    def encode_categorical(self, df: pd.DataFrame, variables: list) -> pd.DataFrame:
        """Encode categorical variables"""
        encoder = OneHotEncoder(variables=variables, drop_last=True)
        df_encoded = encoder.fit_transform(df)
        self.transformers['encoder'] = encoder
        return df_encoded
    
    def transform_numerical(self, df: pd.DataFrame, variables: list) -> pd.DataFrame:
        """Apply log transformation to numerical variables"""
        transformer = LogTransformer(variables=variables)
        df_transformed = transformer.fit_transform(df)
        self.transformers['log_transformer'] = transformer
        return df_transformed