"""Stage 6: MLflow Auto-Deployment Pipeline"""
import mlflow
import mlflow.sklearn
import mlflow.xgboost
import mlflow.lightgbm
import pandas as pd
import numpy as np
from typing import Dict, Any, Optional
import joblib
import os
from datetime import datetime
import json

class MLflowAutoDeployer:
    """Automated model deployment using MLflow"""
    
    def __init__(self):
        self.tracking_uri = os.getenv("MLFLOW_TRACKING_URI", "sqlite:///mlflow.db")
        self.experiment_name = "neocred_credit_risk"
        self.model_registry_name = "neocred_credit_model"
        
        # Setup MLflow
        mlflow.set_tracking_uri(self.tracking_uri)
        
        # Create experiment if it doesn't exist
        try:
            mlflow.create_experiment(self.experiment_name)
        except:
            pass  # Experiment already exists
        
        mlflow.set_experiment(self.experiment_name)
    
    def deploy_best_model(self, model, model_info: Dict[str, Any], 
                         evaluation_metrics: Dict[str, Any],
                         training_history: Dict[str, Any],
                         X_test: pd.DataFrame, y_test: pd.Series) -> Dict[str, Any]:
        """Deploy the best model to MLflow with comprehensive tracking"""
        
        with mlflow.start_run(run_name=f"automl_deployment_{datetime.now().strftime('%Y%m%d_%H%M%S')}"):
            
            # Log parameters
            self._log_model_parameters(model, model_info, training_history)
            
            # Log metrics
            self._log_evaluation_metrics(evaluation_metrics)
            
            # Log model artifacts
            model_info_logged = self._log_model_artifacts(model, model_info, X_test)
            
            # Register model
            model_version = self._register_model(model, model_info)
            
            # Create deployment config
            deployment_config = self._create_deployment_config(
                model_info, evaluation_metrics, model_version
            )
            
            # Log deployment artifacts
            self._log_deployment_artifacts(deployment_config, evaluation_metrics)
            
            # Auto-promote to staging if performance is good
            promotion_result = self._auto_promote_model(evaluation_metrics, model_version)
            
            return {
                'run_id': mlflow.active_run().info.run_id,
                'model_version': model_version,
                'deployment_config': deployment_config,
                'promotion_result': promotion_result,
                'model_uri': model_info_logged['model_uri'],
                'deployment_status': 'success'
            }
    
    def _log_model_parameters(self, model, model_info: Dict[str, Any], 
                            training_history: Dict[str, Any]):
        """Log model parameters and hyperparameters"""
        
        # Model type and basic info
        mlflow.log_param("model_type", model_info.get('model_type', 'unknown'))
        mlflow.log_param("algorithm", model.__class__.__name__)
        mlflow.log_param("dataset_shape", model_info.get('dataset_shape', 'unknown'))
        
        # Hyperparameters
        if hasattr(model, 'get_params'):
            params = model.get_params()
            for key, value in params.items():
                if isinstance(value, (int, float, str, bool)):
                    mlflow.log_param(f"hp_{key}", value)
        
        # Training history
        if training_history:
            mlflow.log_param("optimization_trials", training_history.get('n_trials', 0))
            mlflow.log_param("best_score", training_history.get('best_score', 0))
            mlflow.log_param("training_time", training_history.get('training_time', 'unknown'))
    
    def _log_evaluation_metrics(self, metrics: Dict[str, Any]):
        """Log comprehensive evaluation metrics"""
        
        # Primary metrics
        mlflow.log_metric("roc_auc", metrics.get('roc_auc', 0))
        mlflow.log_metric("pr_auc", metrics.get('pr_auc', 0))
        mlflow.log_metric("accuracy", metrics.get('accuracy', 0))
        
        # Classification report metrics
        if 'classification_report' in metrics:
            cr = metrics['classification_report']
            
            # Class 1 (default) metrics
            if '1' in cr:
                mlflow.log_metric("precision_class1", cr['1']['precision'])
                mlflow.log_metric("recall_class1", cr['1']['recall'])
                mlflow.log_metric("f1_class1", cr['1']['f1-score'])
            
            # Overall metrics
            if 'weighted avg' in cr:
                mlflow.log_metric("precision_weighted", cr['weighted avg']['precision'])
                mlflow.log_metric("recall_weighted", cr['weighted avg']['recall'])
                mlflow.log_metric("f1_weighted", cr['weighted avg']['f1-score'])
        
        # Business metrics
        if 'business_metrics' in metrics:
            bm = metrics['business_metrics']
            mlflow.log_metric("total_cost_impact", bm.get('total_cost_impact', 0))
            mlflow.log_metric("default_rate_actual", bm.get('default_rate_actual', 0))
            mlflow.log_metric("default_rate_predicted", bm.get('default_rate_predicted', 0))
            mlflow.log_metric("precision_at_10pct", bm.get('precision_at_10_percent', 0))
    
    def _log_model_artifacts(self, model, model_info: Dict[str, Any], 
                           X_test: pd.DataFrame) -> Dict[str, Any]:
        """Log model and related artifacts"""
        
        # Determine model flavor for MLflow
        model_class_name = model.__class__.__name__
        
        if 'XGB' in model_class_name:
            model_uri = mlflow.xgboost.log_model(model, "model").model_uri
        elif 'LGB' in model_class_name or 'LightGBM' in model_class_name:
            model_uri = mlflow.lightgbm.log_model(model, "model").model_uri
        else:
            model_uri = mlflow.sklearn.log_model(model, "model").model_uri
        
        # Log feature names
        feature_names = X_test.columns.tolist()
        with open("feature_names.json", "w") as f:
            json.dump(feature_names, f)
        mlflow.log_artifact("feature_names.json")
        os.remove("feature_names.json")
        
        # Log model info
        with open("model_info.json", "w") as f:
            json.dump(model_info, f, default=str)
        mlflow.log_artifact("model_info.json")
        os.remove("model_info.json")
        
        # Log feature importance if available
        if hasattr(model, 'feature_importances_'):
            importance_df = pd.DataFrame({
                'feature': feature_names,
                'importance': model.feature_importances_
            }).sort_values('importance', ascending=False)
            
            importance_df.to_csv("feature_importance.csv", index=False)
            mlflow.log_artifact("feature_importance.csv")
            os.remove("feature_importance.csv")
        
        return {'model_uri': model_uri}
    
    def _register_model(self, model, model_info: Dict[str, Any]) -> str:
        """Register model in MLflow Model Registry"""
        
        try:
            # Register the model
            model_version = mlflow.register_model(
                f"runs:/{mlflow.active_run().info.run_id}/model",
                self.model_registry_name,
                description=f"AutoML generated credit risk model - {model.__class__.__name__}"
            )
            
            # Add tags to the model version
            client = mlflow.tracking.MlflowClient()
            client.set_model_version_tag(
                self.model_registry_name,
                model_version.version,
                "deployment_method", "automl"
            )
            client.set_model_version_tag(
                self.model_registry_name,
                model_version.version,
                "model_type", model.__class__.__name__
            )
            client.set_model_version_tag(
                self.model_registry_name,
                model_version.version,
                "created_by", "llm_automl_pipeline"
            )
            
            return model_version.version
            
        except Exception as e:
            print(f"Model registration failed: {e}")
            return "unknown"
    
    def _create_deployment_config(self, model_info: Dict[str, Any], 
                                metrics: Dict[str, Any], model_version: str) -> Dict[str, Any]:
        """Create deployment configuration"""
        
        config = {
            'model_version': model_version,
            'model_name': self.model_registry_name,
            'deployment_timestamp': datetime.now().isoformat(),
            'performance_requirements': {
                'min_roc_auc': 0.75,
                'min_precision': 0.70,
                'max_inference_time_ms': 100
            },
            'monitoring_config': {
                'drift_detection': True,
                'performance_monitoring': True,
                'alert_thresholds': {
                    'roc_auc_drop': 0.05,
                    'prediction_drift': 0.1
                }
            },
            'scaling_config': {
                'min_instances': 1,
                'max_instances': 10,
                'target_cpu_utilization': 70
            },
            'feature_schema': {
                'required_features': model_info.get('feature_names', []),
                'feature_types': 'numerical_and_categorical'
            }
        }
        
        return config
    
    def _log_deployment_artifacts(self, deployment_config: Dict[str, Any], 
                                metrics: Dict[str, Any]):
        """Log deployment-related artifacts"""
        
        # Deployment config
        with open("deployment_config.json", "w") as f:
            json.dump(deployment_config, f, indent=2, default=str)
        mlflow.log_artifact("deployment_config.json")
        os.remove("deployment_config.json")
        
        # Model card
        model_card = self._generate_model_card(deployment_config, metrics)
        with open("model_card.md", "w") as f:
            f.write(model_card)
        mlflow.log_artifact("model_card.md")
        os.remove("model_card.md")
        
        # Inference example
        inference_example = self._generate_inference_example()
        with open("inference_example.py", "w") as f:
            f.write(inference_example)
        mlflow.log_artifact("inference_example.py")
        os.remove("inference_example.py")
    
    def _auto_promote_model(self, metrics: Dict[str, Any], model_version: str) -> Dict[str, Any]:
        """Automatically promote model based on performance"""
        
        roc_auc = metrics.get('roc_auc', 0)
        precision = metrics.get('classification_report', {}).get('1', {}).get('precision', 0)
        
        client = mlflow.tracking.MlflowClient()
        
        try:
            # Promotion logic
            if roc_auc >= 0.85 and precision >= 0.80:
                # Promote to Production
                client.transition_model_version_stage(
                    self.model_registry_name,
                    model_version,
                    "Production"
                )
                promotion_status = "promoted_to_production"
                
            elif roc_auc >= 0.75 and precision >= 0.70:
                # Promote to Staging
                client.transition_model_version_stage(
                    self.model_registry_name,
                    model_version,
                    "Staging"
                )
                promotion_status = "promoted_to_staging"
                
            else:
                promotion_status = "no_promotion_performance_insufficient"
            
            return {
                'status': promotion_status,
                'roc_auc': roc_auc,
                'precision': precision,
                'promotion_timestamp': datetime.now().isoformat()
            }
            
        except Exception as e:
            return {
                'status': 'promotion_failed',
                'error': str(e)
            }
    
    def _generate_model_card(self, deployment_config: Dict[str, Any], 
                           metrics: Dict[str, Any]) -> str:
        """Generate model card documentation"""
        
        model_card = f"""# NeoCred Credit Risk Model Card

## Model Overview
- **Model Name**: {self.model_registry_name}
- **Version**: {deployment_config['model_version']}
- **Created**: {deployment_config['deployment_timestamp']}
- **Purpose**: Credit risk assessment for loan applications

## Performance Metrics
- **ROC-AUC**: {metrics.get('roc_auc', 'N/A'):.4f}
- **Precision**: {metrics.get('classification_report', {}).get('1', {}).get('precision', 'N/A')}
- **Recall**: {metrics.get('classification_report', {}).get('1', {}).get('recall', 'N/A')}
- **F1-Score**: {metrics.get('classification_report', {}).get('1', {}).get('f1-score', 'N/A')}

## Business Impact
- **Expected Cost Reduction**: ₹{metrics.get('business_metrics', {}).get('total_cost_impact', 0):,.0f}
- **Default Detection Rate**: {metrics.get('business_metrics', {}).get('precision_at_10_percent', 0):.2%}

## Usage Guidelines
- **Input**: Financial profile data (income, debt, credit history)
- **Output**: Default probability score (0-1)
- **Threshold**: Recommended 0.5 for balanced precision-recall
- **Latency**: < 100ms per prediction

## Monitoring Requirements
- Monitor prediction drift monthly
- Retrain quarterly with new data
- Alert if ROC-AUC drops below 0.75
- Validate against business outcomes

## Limitations
- Trained on historical data - may not capture future trends
- Performance may vary across demographic groups
- Requires regular retraining for optimal performance
- Should not be the sole factor in lending decisions

## Contact
- **Team**: NeoCred ML Engineering
- **Email**: ml-team@neocred.in
- **Documentation**: https://docs.neocred.in/models
"""
        
        return model_card
    
    def _generate_inference_example(self) -> str:
        """Generate inference example code"""
        
        example_code = f'''"""
NeoCred Credit Risk Model Inference Example
"""
import mlflow
import pandas as pd

# Load model from MLflow
model_uri = "models:/{self.model_registry_name}/Production"
model = mlflow.pyfunc.load_model(model_uri)

# Example input data
sample_data = pd.DataFrame({{
    'monthly_income': [50000],
    'monthly_expenses': [30000],
    'total_debt': [200000],
    'credit_used': [15000],
    'credit_limit': [50000],
    'age': [30],
    'employment_months': [24],
    'credit_types': [3],
    'missed_payments': [0]
}})

# Make prediction
prediction = model.predict(sample_data)
print(f"Default probability: {{prediction[0]:.4f}}")

# Interpretation
if prediction[0] > 0.5:
    print("High risk - recommend loan rejection")
else:
    print("Low risk - loan can be approved")
'''
        
        return example_code
    
    def get_deployment_status(self, model_version: Optional[str] = None) -> Dict[str, Any]:
        """Get current deployment status"""
        
        client = mlflow.tracking.MlflowClient()
        
        try:
            if model_version:
                # Get specific version
                model_version_info = client.get_model_version(self.model_registry_name, model_version)
                versions = [model_version_info]
            else:
                # Get all versions
                versions = client.search_model_versions(f"name='{self.model_registry_name}'")
            
            deployment_info = []
            for version in versions:
                deployment_info.append({
                    'version': version.version,
                    'stage': version.current_stage,
                    'status': version.status,
                    'creation_timestamp': version.creation_timestamp,
                    'last_updated_timestamp': version.last_updated_timestamp
                })
            
            return {
                'model_name': self.model_registry_name,
                'versions': deployment_info,
                'total_versions': len(deployment_info)
            }
            
        except Exception as e:
            return {
                'error': f"Failed to get deployment status: {e}",
                'model_name': self.model_registry_name
            }

# Global MLflow deployer
mlflow_auto_deployer = MLflowAutoDeployer()