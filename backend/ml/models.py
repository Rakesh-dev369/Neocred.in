"""
ML Models for NeoCred
Scikit-learn, XGBoost, LightGBM, TensorFlow, PyTorch implementations
"""

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier, GradientBoostingRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import xgboost as xgb
import lightgbm as lgb
import tensorflow as tf
import torch
import torch.nn as nn
# import mlflow
# import wandb  # Uncomment when needed

class FinancialRiskModel:
    """Financial risk assessment using multiple ML frameworks"""
    
    def __init__(self, model_type="xgboost"):
        self.model_type = model_type
        self.model = None
        self.scaler = StandardScaler()
        
    def train_xgboost(self, X, y):
        """Train XGBoost model"""
        self.model = xgb.XGBClassifier(
            n_estimators=100,
            max_depth=6,
            learning_rate=0.1
        )
        self.model.fit(X, y)
        
    def train_lightgbm(self, X, y):
        """Train LightGBM model"""
        self.model = lgb.LGBMClassifier(
            n_estimators=100,
            max_depth=6,
            learning_rate=0.1
        )
        self.model.fit(X, y)

class CreditScorePredictor(nn.Module):
    """PyTorch neural network for credit score prediction"""
    
    def __init__(self, input_size, hidden_size=64):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_size, hidden_size),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_size, hidden_size),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_size, 1),
            nn.Sigmoid()
        )
    
    def forward(self, x):
        return self.network(x)

class TensorFlowRiskModel:
    """TensorFlow model for financial risk assessment"""
    
    def __init__(self):
        self.model = None
        
    def build_model(self, input_shape):
        """Build TensorFlow model"""
        self.model = tf.keras.Sequential([
            tf.keras.layers.Dense(64, activation='relu', input_shape=input_shape),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        
        self.model.compile(
            optimizer='adam',
            loss='binary_crossentropy',
            metrics=['accuracy']
        )