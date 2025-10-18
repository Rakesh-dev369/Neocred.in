"""
ML Utilities for NeoCred
Data preprocessing, feature engineering, model evaluation
"""

import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns

class DataPreprocessor:
    """Data preprocessing utilities"""
    
    def __init__(self):
        self.scalers = {}
        self.encoders = {}
    
    def preprocess_financial_data(self, df):
        """Preprocess financial dataset"""
        # Handle missing values
        df = df.fillna(df.median(numeric_only=True))
        
        # Feature engineering
        if 'income' in df.columns and 'expenses' in df.columns:
            df['savings_rate'] = (df['income'] - df['expenses']) / df['income']
        
        if 'credit_limit' in df.columns and 'credit_used' in df.columns:
            df['credit_utilization'] = df['credit_used'] / df['credit_limit']
        
        return df
    
    def scale_features(self, X_train, X_test, feature_cols):
        """Scale numerical features"""
        scaler = StandardScaler()
        X_train_scaled = X_train.copy()
        X_test_scaled = X_test.copy()
        
        X_train_scaled[feature_cols] = scaler.fit_transform(X_train[feature_cols])
        X_test_scaled[feature_cols] = scaler.transform(X_test[feature_cols])
        
        self.scalers['features'] = scaler
        return X_train_scaled, X_test_scaled

class ModelEvaluator:
    """Model evaluation utilities"""
    
    @staticmethod
    def evaluate_classification(y_true, y_pred, model_name="Model"):
        """Comprehensive classification evaluation"""
        print(f"\n{model_name} Performance:")
        print("=" * 50)
        print(classification_report(y_true, y_pred))
        
        # Confusion Matrix
        cm = confusion_matrix(y_true, y_pred)
        plt.figure(figsize=(8, 6))
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
        plt.title(f'{model_name} Confusion Matrix')
        plt.ylabel('Actual')
        plt.xlabel('Predicted')
        plt.show()
        
        return {
            'classification_report': classification_report(y_true, y_pred, output_dict=True),
            'confusion_matrix': cm
        }

class FeatureEngineer:
    """Feature engineering for financial data"""
    
    @staticmethod
    def create_financial_features(df):
        """Create financial-specific features"""
        features = df.copy()
        
        # Risk ratios
        if 'debt' in df.columns and 'income' in df.columns:
            features['debt_to_income'] = df['debt'] / df['income']
        
        # Age groups
        if 'age' in df.columns:
            features['age_group'] = pd.cut(df['age'], 
                                         bins=[0, 25, 35, 50, 65, 100], 
                                         labels=['Young', 'Adult', 'Middle', 'Senior', 'Elder'])
        
        # Income categories
        if 'income' in df.columns:
            features['income_category'] = pd.qcut(df['income'], 
                                                q=5, 
                                                labels=['Low', 'Below_Avg', 'Average', 'Above_Avg', 'High'])
        
        return features