"""Stage 3: LLM-Guided Model Selection"""
import pandas as pd
import numpy as np
from typing import Dict, Any, List, Type
from pydantic import BaseModel, Field
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
import xgboost as xgb
import lightgbm as lgb
from automl.llm_orchestrator import llm_orchestrator

class ModelSelectionOutput(BaseModel):
    """Structured output for model selection"""
    recommended_models: List[str] = Field(description="Recommended model algorithms")
    model_rationale: Dict[str, str] = Field(description="Reasoning for each model")
    ensemble_strategy: str = Field(description="Ensemble approach recommendation")
    evaluation_metrics: List[str] = Field(description="Recommended evaluation metrics")
    cross_validation_strategy: str = Field(description="CV strategy recommendation")
    priority_order: List[str] = Field(description="Models ordered by priority")

class LLMModelSelector:
    """LLM-guided model selection for financial ML"""
    
    def __init__(self):
        self.model_catalog = {
            'logistic_regression': {
                'class': LogisticRegression,
                'type': 'linear',
                'interpretability': 'high',
                'speed': 'fast',
                'description': 'Linear model with high interpretability'
            },
            'random_forest': {
                'class': RandomForestClassifier,
                'type': 'ensemble',
                'interpretability': 'medium',
                'speed': 'medium',
                'description': 'Robust ensemble method with feature importance'
            },
            'gradient_boosting': {
                'class': GradientBoostingClassifier,
                'type': 'boosting',
                'interpretability': 'medium',
                'speed': 'medium',
                'description': 'Sequential boosting with strong performance'
            },
            'xgboost': {
                'class': xgb.XGBClassifier,
                'type': 'boosting',
                'interpretability': 'medium',
                'speed': 'fast',
                'description': 'Optimized gradient boosting with regularization'
            },
            'lightgbm': {
                'class': lgb.LGBMClassifier,
                'type': 'boosting',
                'interpretability': 'medium',
                'speed': 'very_fast',
                'description': 'Fast gradient boosting with memory efficiency'
            },
            'svm': {
                'class': SVC,
                'type': 'kernel',
                'interpretability': 'low',
                'speed': 'slow',
                'description': 'Support vector machine with kernel tricks'
            },
            'naive_bayes': {
                'class': GaussianNB,
                'type': 'probabilistic',
                'interpretability': 'high',
                'speed': 'very_fast',
                'description': 'Fast probabilistic classifier'
            },
            'knn': {
                'class': KNeighborsClassifier,
                'type': 'instance_based',
                'interpretability': 'medium',
                'speed': 'slow',
                'description': 'Instance-based learning with local patterns'
            }
        }
    
    def select_models(self, df: pd.DataFrame, target_column: str,
                     data_analysis: Dict[str, Any],
                     feature_analysis: Dict[str, Any]) -> ModelSelectionOutput:
        """LLM-guided model selection based on data characteristics"""
        
        # Prepare context for LLM
        selection_context = self._prepare_selection_context(df, target_column, data_analysis, feature_analysis)
        
        selection_prompt = f"""
        As an ML expert specializing in credit risk modeling, recommend the best algorithms:
        
        Dataset Characteristics:
        {selection_context}
        
        Available Models:
        {self._format_model_catalog()}
        
        Business Requirements:
        - High interpretability for regulatory compliance
        - Robust performance on imbalanced data
        - Fast inference for real-time scoring
        - Feature importance for risk factor identification
        
        Recommend:
        1. Top 3-5 models with rationale
        2. Ensemble strategy (stacking, voting, blending)
        3. Evaluation metrics (ROC-AUC, Precision-Recall, etc.)
        4. Cross-validation approach
        5. Priority order for testing
        
        Consider financial domain requirements and regulatory constraints.
        """
        
        try:
            if llm_orchestrator.openai_client:
                response = llm_orchestrator.openai_client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    response_model=ModelSelectionOutput,
                    messages=[{"role": "user", "content": selection_prompt}]
                )
                return response
            else:
                return self._fallback_model_selection(df, target_column)
                
        except Exception as e:
            print(f"LLM model selection failed: {e}")
            return self._fallback_model_selection(df, target_column)
    
    def get_model_instances(self, selection: ModelSelectionOutput) -> Dict[str, Any]:
        """Get actual model instances based on LLM selection"""
        
        model_instances = {}
        
        for model_name in selection.recommended_models:
            # Map LLM recommendation to actual model
            model_key = self._map_model_name(model_name)
            
            if model_key in self.model_catalog:
                model_class = self.model_catalog[model_key]['class']
                
                # Get default parameters optimized for credit risk
                default_params = self._get_default_params(model_key)
                
                try:
                    model_instances[model_name] = model_class(**default_params)
                except Exception as e:
                    print(f"Failed to instantiate {model_name}: {e}")
                    # Fallback to basic instantiation
                    model_instances[model_name] = model_class(random_state=42)
        
        return model_instances
    
    def _prepare_selection_context(self, df: pd.DataFrame, target_column: str,
                                 data_analysis: Dict[str, Any],
                                 feature_analysis: Dict[str, Any]) -> str:
        """Prepare context for model selection"""
        
        context = []
        
        # Dataset characteristics
        context.append(f"Dataset size: {df.shape[0]} samples, {df.shape[1]} features")
        
        # Target distribution
        if target_column in df.columns:
            target_dist = df[target_column].value_counts(normalize=True)
            context.append(f"Class distribution: {target_dist.to_dict()}")
            
            # Check for imbalance
            imbalance_ratio = target_dist.max() / target_dist.min()
            context.append(f"Imbalance ratio: {imbalance_ratio:.2f}")
        
        # Feature characteristics
        numerical_features = len(df.select_dtypes(include=[np.number]).columns)
        categorical_features = len(df.select_dtypes(include=['object']).columns)
        context.append(f"Feature types: {numerical_features} numerical, {categorical_features} categorical")
        
        # Data quality insights
        if 'quality_issues' in data_analysis:
            context.append(f"Data quality: {data_analysis['quality_issues']}")
        
        if 'anomalies_detected' in data_analysis:
            context.append(f"Anomalies: {data_analysis['anomalies_detected']}")
        
        # Feature engineering insights
        if 'transformations' in feature_analysis:
            context.append(f"Applied transformations: {feature_analysis['transformations']}")
        
        # Missing values
        missing_pct = (df.isnull().sum().sum() / (df.shape[0] * df.shape[1])) * 100
        context.append(f"Missing data: {missing_pct:.1f}%")
        
        # Dimensionality
        if df.shape[1] > 50:
            context.append("High-dimensional dataset - consider dimensionality reduction")
        
        return "\n".join(context)
    
    def _format_model_catalog(self) -> str:
        """Format model catalog for LLM"""
        
        catalog_text = []
        for name, info in self.model_catalog.items():
            catalog_text.append(
                f"- {name}: {info['description']} "
                f"(Type: {info['type']}, Interpretability: {info['interpretability']}, "
                f"Speed: {info['speed']})"
            )
        
        return "\n".join(catalog_text)
    
    def _map_model_name(self, llm_model_name: str) -> str:
        """Map LLM model name to catalog key"""
        
        name_lower = llm_model_name.lower()
        
        # Mapping logic
        if 'logistic' in name_lower or 'linear' in name_lower:
            return 'logistic_regression'
        elif 'random forest' in name_lower or 'rf' in name_lower:
            return 'random_forest'
        elif 'xgboost' in name_lower or 'xgb' in name_lower:
            return 'xgboost'
        elif 'lightgbm' in name_lower or 'lgb' in name_lower:
            return 'lightgbm'
        elif 'gradient boost' in name_lower or 'gbm' in name_lower:
            return 'gradient_boosting'
        elif 'svm' in name_lower or 'support vector' in name_lower:
            return 'svm'
        elif 'naive bayes' in name_lower or 'nb' in name_lower:
            return 'naive_bayes'
        elif 'knn' in name_lower or 'k-nearest' in name_lower:
            return 'knn'
        else:
            return 'random_forest'  # Default fallback
    
    def _get_default_params(self, model_key: str) -> Dict[str, Any]:
        """Get optimized default parameters for each model"""
        
        params = {
            'logistic_regression': {
                'random_state': 42,
                'max_iter': 1000,
                'class_weight': 'balanced'
            },
            'random_forest': {
                'n_estimators': 100,
                'random_state': 42,
                'class_weight': 'balanced',
                'n_jobs': -1
            },
            'gradient_boosting': {
                'n_estimators': 100,
                'random_state': 42,
                'learning_rate': 0.1
            },
            'xgboost': {
                'n_estimators': 100,
                'random_state': 42,
                'eval_metric': 'logloss',
                'use_label_encoder': False
            },
            'lightgbm': {
                'n_estimators': 100,
                'random_state': 42,
                'verbose': -1,
                'class_weight': 'balanced'
            },
            'svm': {
                'random_state': 42,
                'probability': True,
                'class_weight': 'balanced'
            },
            'naive_bayes': {},
            'knn': {
                'n_neighbors': 5,
                'n_jobs': -1
            }
        }
        
        return params.get(model_key, {'random_state': 42})
    
    def _fallback_model_selection(self, df: pd.DataFrame, target_column: str) -> ModelSelectionOutput:
        """Fallback model selection when LLM is unavailable"""
        
        # Analyze dataset characteristics for rule-based selection
        n_samples, n_features = df.shape
        
        # Check class imbalance
        if target_column in df.columns:
            class_dist = df[target_column].value_counts(normalize=True)
            is_imbalanced = class_dist.max() / class_dist.min() > 3
        else:
            is_imbalanced = False
        
        # Rule-based model selection
        recommended_models = []
        rationale = {}
        
        # Always include these for credit risk
        recommended_models.extend(['XGBoost', 'Random Forest', 'Logistic Regression'])
        rationale.update({
            'XGBoost': 'Excellent performance on tabular data with built-in regularization',
            'Random Forest': 'Robust to outliers with interpretable feature importance',
            'Logistic Regression': 'High interpretability required for regulatory compliance'
        })
        
        # Add based on dataset characteristics
        if n_samples > 10000:
            recommended_models.append('LightGBM')
            rationale['LightGBM'] = 'Fast training on large datasets'
        
        if is_imbalanced:
            recommended_models.append('Gradient Boosting')
            rationale['Gradient Boosting'] = 'Good performance on imbalanced datasets'
        
        return ModelSelectionOutput(
            recommended_models=recommended_models,
            model_rationale=rationale,
            ensemble_strategy='Stacking with Logistic Regression meta-learner',
            evaluation_metrics=['ROC-AUC', 'Precision-Recall AUC', 'F1-Score', 'Balanced Accuracy'],
            cross_validation_strategy='Stratified 5-fold cross-validation',
            priority_order=recommended_models
        )

# Global model selector
llm_model_selector = LLMModelSelector()