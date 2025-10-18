"""Credit Risk Models for Default Prediction"""
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, classification_report
import xgboost as xgb
import lightgbm as lgb
import joblib
from typing import Dict, Any, Tuple, List
import os

class CreditRiskModel:
    """Credit risk prediction model"""
    
    def __init__(self, model_type: str = "xgboost"):
        self.model_type = model_type
        self.model = None
        self.scaler = StandardScaler()
        self.feature_names = []
        self.is_trained = False
    
    def _get_model(self):
        """Get model based on type"""
        models = {
            "logistic": LogisticRegression(random_state=42),
            "random_forest": RandomForestClassifier(n_estimators=100, random_state=42),
            "gradient_boost": GradientBoostingClassifier(random_state=42),
            "xgboost": xgb.XGBClassifier(random_state=42, eval_metric='logloss'),
            "lightgbm": lgb.LGBMClassifier(random_state=42, verbose=-1)
        }
        return models.get(self.model_type, models["xgboost"])
    
    def prepare_features(self, data: pd.DataFrame) -> pd.DataFrame:
        """Prepare features for credit risk modeling"""
        features = data.copy()
        
        # Basic financial ratios
        if 'monthly_income' in features.columns and 'monthly_expenses' in features.columns:
            features['income_expense_ratio'] = features['monthly_income'] / (features['monthly_expenses'] + 1)
            features['savings_rate'] = (features['monthly_income'] - features['monthly_expenses']) / features['monthly_income']
        
        # Credit utilization
        if 'credit_used' in features.columns and 'credit_limit' in features.columns:
            features['credit_utilization'] = features['credit_used'] / (features['credit_limit'] + 1)
        
        # Debt ratios
        if 'total_debt' in features.columns and 'monthly_income' in features.columns:
            features['debt_to_income'] = features['total_debt'] / (features['monthly_income'] + 1)
        
        # Age-based features
        if 'age' in features.columns:
            features['age_group'] = pd.cut(features['age'], bins=[0, 25, 35, 50, 100], labels=[0, 1, 2, 3])
        
        return features
    
    def train(self, X: pd.DataFrame, y: pd.Series) -> Dict[str, Any]:
        """Train credit risk model"""
        # Prepare features
        X_processed = self.prepare_features(X)
        
        # Handle categorical variables
        X_processed = pd.get_dummies(X_processed, drop_first=True)
        
        # Store feature names
        self.feature_names = X_processed.columns.tolist()
        
        # Scale features
        X_scaled = self.scaler.fit_transform(X_processed)
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X_scaled, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Train model
        self.model = self._get_model()
        self.model.fit(X_train, y_train)
        
        # Evaluate
        y_pred = self.model.predict(X_test)
        y_prob = self.model.predict_proba(X_test)[:, 1]
        
        metrics = {
            "roc_auc": roc_auc_score(y_test, y_prob),
            "classification_report": classification_report(y_test, y_pred, output_dict=True)
        }
        
        self.is_trained = True
        return metrics
    
    def predict_default_probability(self, X: pd.DataFrame) -> np.ndarray:
        """Predict default probability"""
        if not self.is_trained:
            raise ValueError("Model not trained. Call train() first.")
        
        # Prepare features
        X_processed = self.prepare_features(X)
        X_processed = pd.get_dummies(X_processed, drop_first=True)
        
        # Align features with training data
        X_processed = X_processed.reindex(columns=self.feature_names, fill_value=0)
        
        # Scale and predict
        X_scaled = self.scaler.transform(X_processed)
        return self.model.predict_proba(X_scaled)[:, 1]
    
    def get_risk_factors(self, X: pd.DataFrame) -> List[Dict[str, Any]]:
        """Get risk factors contributing to default probability"""
        if not self.is_trained:
            return []
        
        # Get feature importance
        if hasattr(self.model, 'feature_importances_'):
            importance = self.model.feature_importances_
        else:
            importance = np.abs(self.model.coef_[0])
        
        # Create risk factors
        risk_factors = []
        for i, (feature, imp) in enumerate(zip(self.feature_names, importance)):
            risk_factors.append({
                "factor": feature,
                "importance": float(imp),
                "impact": "high" if imp > 0.1 else "medium" if imp > 0.05 else "low"
            })
        
        return sorted(risk_factors, key=lambda x: x["importance"], reverse=True)[:10]
    
    def save_model(self, filepath: str):
        """Save trained model"""
        if self.is_trained:
            model_data = {
                "model": self.model,
                "scaler": self.scaler,
                "feature_names": self.feature_names,
                "model_type": self.model_type
            }
            joblib.dump(model_data, filepath)
    
    def load_model(self, filepath: str):
        """Load trained model"""
        if os.path.exists(filepath):
            model_data = joblib.load(filepath)
            self.model = model_data["model"]
            self.scaler = model_data["scaler"]
            self.feature_names = model_data["feature_names"]
            self.model_type = model_data["model_type"]
            self.is_trained = True

class CreditScoreCalculator:
    """Calculate credit score from risk probability"""
    
    @staticmethod
    def probability_to_score(default_prob: float) -> int:
        """Convert default probability to credit score (300-850)"""
        # Inverse relationship: lower probability = higher score
        score = 850 - (default_prob * 550)
        return max(300, min(850, int(score)))
    
    @staticmethod
    def score_to_grade(score: int) -> str:
        """Convert credit score to letter grade"""
        if score >= 800:
            return "A+"
        elif score >= 750:
            return "A"
        elif score >= 700:
            return "B+"
        elif score >= 650:
            return "B"
        elif score >= 600:
            return "C+"
        elif score >= 550:
            return "C"
        else:
            return "D"
    
    @staticmethod
    def get_risk_category(score: int) -> str:
        """Get risk category from credit score"""
        if score >= 750:
            return "Low Risk"
        elif score >= 650:
            return "Medium Risk"
        elif score >= 550:
            return "High Risk"
        else:
            return "Very High Risk"

# Global model instance
credit_risk_model = CreditRiskModel("xgboost")