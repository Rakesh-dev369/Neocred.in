"""
ML Training Pipeline with MLflow and Weights & Biases
"""

import mlflow
import mlflow.sklearn
import mlflow.xgboost
import mlflow.pytorch
import wandb
import pandas as pd
import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score
from .models import FinancialRiskModel, CreditScorePredictor, TensorFlowRiskModel

class MLTrainingPipeline:
    """ML training pipeline with experiment tracking"""
    
    def __init__(self, use_wandb=True, use_mlflow=True):
        self.use_wandb = use_wandb
        self.use_mlflow = use_mlflow
        
        if self.use_mlflow:
            mlflow.set_tracking_uri("sqlite:///mlflow.db")
            mlflow.set_experiment("neocred-financial-models")
            
        if self.use_wandb:
            wandb.init(project="neocred-ml", entity="neocred-team")
    
    def train_model(self, model_type, X_train, y_train, X_test, y_test):
        """Train model with experiment tracking"""
        
        with mlflow.start_run() if self.use_mlflow else nullcontext():
            # Initialize model
            model = FinancialRiskModel(model_type=model_type)
            
            # Train based on type
            if model_type == "xgboost":
                model.train_xgboost(X_train, y_train)
            elif model_type == "lightgbm":
                model.train_lightgbm(X_train, y_train)
            
            # Predictions
            y_pred = model.model.predict(X_test)
            
            # Metrics
            accuracy = accuracy_score(y_test, y_pred)
            precision = precision_score(y_test, y_pred, average='weighted')
            recall = recall_score(y_test, y_pred, average='weighted')
            
            # Log to MLflow
            if self.use_mlflow:
                mlflow.log_param("model_type", model_type)
                mlflow.log_metric("accuracy", accuracy)
                mlflow.log_metric("precision", precision)
                mlflow.log_metric("recall", recall)
                
                if model_type == "xgboost":
                    mlflow.xgboost.log_model(model.model, "model")
                else:
                    mlflow.sklearn.log_model(model.model, "model")
            
            # Log to Weights & Biases
            if self.use_wandb:
                wandb.log({
                    "accuracy": accuracy,
                    "precision": precision,
                    "recall": recall,
                    "model_type": model_type
                })
            
            return model, {
                "accuracy": accuracy,
                "precision": precision,
                "recall": recall
            }

from contextlib import nullcontext