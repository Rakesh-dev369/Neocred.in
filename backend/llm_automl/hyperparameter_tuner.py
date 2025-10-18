"""Stage 4: LLM-Guided Hyperparameter Tuning with Optuna"""
import optuna
import pandas as pd
import numpy as np
from typing import Dict, Any, List, Callable
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.metrics import roc_auc_score
from pydantic import BaseModel, Field
from automl.llm_orchestrator import llm_orchestrator

class HyperparameterTuningOutput(BaseModel):
    """Structured output for hyperparameter tuning"""
    parameter_ranges: Dict[str, Dict[str, Any]] = Field(description="Recommended parameter ranges")
    tuning_strategy: str = Field(description="Optimization strategy recommendation")
    objective_function: str = Field(description="Objective function to optimize")
    early_stopping: Dict[str, Any] = Field(description="Early stopping configuration")
    search_budget: Dict[str, int] = Field(description="Search budget recommendations")
    rationale: str = Field(description="Reasoning behind recommendations")

class LLMGuidedHyperparameterTuner:
    """Optuna hyperparameter tuning guided by LLM insights"""
    
    def __init__(self):
        self.studies = {}
        self.best_params = {}
        
    def get_tuning_strategy(self, model_name: str, dataset_info: Dict[str, Any],
                          model_selection_info: Dict[str, Any]) -> HyperparameterTuningOutput:
        """Get LLM recommendations for hyperparameter tuning"""
        
        tuning_prompt = f"""
        As an ML optimization expert, recommend hyperparameter tuning strategy:
        
        Model: {model_name}
        Dataset: {dataset_info.get('shape', 'Unknown')} samples
        Class Distribution: {dataset_info.get('class_distribution', 'Unknown')}
        
        Model Selection Context:
        {model_selection_info.get('rationale', 'Standard credit risk modeling')}
        
        Provide specific recommendations for:
        1. Parameter ranges to explore (learning_rate, n_estimators, max_depth, etc.)
        2. Optimization strategy (TPE, Random, Grid)
        3. Objective function (ROC-AUC, F1, Custom)
        4. Early stopping criteria
        5. Search budget (number of trials)
        6. Cross-validation strategy
        
        Focus on credit risk modeling requirements:
        - Balance between performance and interpretability
        - Avoid overfitting on financial data
        - Consider regulatory constraints
        """
        
        try:
            if llm_orchestrator.openai_client:
                response = llm_orchestrator.openai_client.chat.completions.create(
                    model="gpt-4-turbo-preview",
                    response_model=HyperparameterTuningOutput,
                    messages=[{"role": "user", "content": tuning_prompt}]
                )
                return response
            else:
                return self._fallback_tuning_strategy(model_name, dataset_info)
                
        except Exception as e:
            print(f"LLM hyperparameter tuning failed: {e}")
            return self._fallback_tuning_strategy(model_name, dataset_info)
    
    def optimize_model(self, model_class, X: pd.DataFrame, y: pd.Series,
                      tuning_strategy: HyperparameterTuningOutput,
                      n_trials: int = 100) -> Dict[str, Any]:
        """Optimize model hyperparameters using Optuna with LLM guidance"""
        
        # Create study
        study_name = f"{model_class.__name__}_optimization"
        study = optuna.create_study(
            direction='maximize',
            study_name=study_name,
            sampler=optuna.samplers.TPESampler(seed=42)
        )
        
        # Define objective function
        def objective(trial):
            # Get parameters based on LLM recommendations
            params = self._suggest_parameters(trial, model_class.__name__, tuning_strategy)
            
            try:
                # Create model with suggested parameters
                model = model_class(**params)
                
                # Cross-validation
                cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
                scores = cross_val_score(model, X, y, cv=cv, scoring='roc_auc', n_jobs=-1)
                
                return scores.mean()
                
            except Exception as e:
                print(f"Trial failed: {e}")
                return 0.0
        
        # Optimize
        study.optimize(objective, n_trials=n_trials, timeout=3600)  # 1 hour timeout
        
        # Store results
        self.studies[study_name] = study
        self.best_params[study_name] = study.best_params
        
        return {
            'best_params': study.best_params,
            'best_score': study.best_value,
            'n_trials': len(study.trials),
            'study': study
        }
    
    def _suggest_parameters(self, trial, model_name: str, 
                          tuning_strategy: HyperparameterTuningOutput) -> Dict[str, Any]:
        """Suggest parameters based on LLM recommendations and model type"""
        
        params = {'random_state': 42}
        
        # Get parameter ranges from LLM or use defaults
        param_ranges = tuning_strategy.parameter_ranges.get(model_name.lower(), {})
        
        if 'xgb' in model_name.lower() or 'xgboost' in model_name.lower():
            params.update({
                'n_estimators': trial.suggest_int('n_estimators', 
                    param_ranges.get('n_estimators', {}).get('min', 50),
                    param_ranges.get('n_estimators', {}).get('max', 300)),
                'max_depth': trial.suggest_int('max_depth',
                    param_ranges.get('max_depth', {}).get('min', 3),
                    param_ranges.get('max_depth', {}).get('max', 10)),
                'learning_rate': trial.suggest_float('learning_rate',
                    param_ranges.get('learning_rate', {}).get('min', 0.01),
                    param_ranges.get('learning_rate', {}).get('max', 0.3)),
                'subsample': trial.suggest_float('subsample',
                    param_ranges.get('subsample', {}).get('min', 0.6),
                    param_ranges.get('subsample', {}).get('max', 1.0)),
                'colsample_bytree': trial.suggest_float('colsample_bytree',
                    param_ranges.get('colsample_bytree', {}).get('min', 0.6),
                    param_ranges.get('colsample_bytree', {}).get('max', 1.0)),
                'reg_alpha': trial.suggest_float('reg_alpha', 0, 1),
                'reg_lambda': trial.suggest_float('reg_lambda', 0, 1),
                'eval_metric': 'logloss',
                'use_label_encoder': False
            })
            
        elif 'lightgbm' in model_name.lower() or 'lgb' in model_name.lower():
            params.update({
                'n_estimators': trial.suggest_int('n_estimators', 50, 300),
                'max_depth': trial.suggest_int('max_depth', 3, 10),
                'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
                'num_leaves': trial.suggest_int('num_leaves', 10, 100),
                'subsample': trial.suggest_float('subsample', 0.6, 1.0),
                'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0),
                'reg_alpha': trial.suggest_float('reg_alpha', 0, 1),
                'reg_lambda': trial.suggest_float('reg_lambda', 0, 1),
                'verbose': -1
            })
            
        elif 'randomforest' in model_name.lower() or 'rf' in model_name.lower():
            params.update({
                'n_estimators': trial.suggest_int('n_estimators', 50, 200),
                'max_depth': trial.suggest_int('max_depth', 5, 20),
                'min_samples_split': trial.suggest_int('min_samples_split', 2, 10),
                'min_samples_leaf': trial.suggest_int('min_samples_leaf', 1, 5),
                'max_features': trial.suggest_categorical('max_features', ['sqrt', 'log2', None]),
                'class_weight': 'balanced',
                'n_jobs': -1
            })
            
        elif 'gradientboosting' in model_name.lower():
            params.update({
                'n_estimators': trial.suggest_int('n_estimators', 50, 200),
                'max_depth': trial.suggest_int('max_depth', 3, 8),
                'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
                'subsample': trial.suggest_float('subsample', 0.6, 1.0),
                'min_samples_split': trial.suggest_int('min_samples_split', 2, 10),
                'min_samples_leaf': trial.suggest_int('min_samples_leaf', 1, 5)
            })
            
        elif 'logistic' in model_name.lower():
            params.update({
                'C': trial.suggest_float('C', 0.01, 100, log=True),
                'penalty': trial.suggest_categorical('penalty', ['l1', 'l2', 'elasticnet']),
                'solver': trial.suggest_categorical('solver', ['liblinear', 'saga']),
                'max_iter': 1000,
                'class_weight': 'balanced'
            })
            
        elif 'svm' in model_name.lower() or 'svc' in model_name.lower():
            params.update({
                'C': trial.suggest_float('C', 0.1, 100, log=True),
                'kernel': trial.suggest_categorical('kernel', ['rbf', 'poly', 'sigmoid']),
                'gamma': trial.suggest_categorical('gamma', ['scale', 'auto']),
                'class_weight': 'balanced',
                'probability': True
            })
        
        return params
    
    def _fallback_tuning_strategy(self, model_name: str, dataset_info: Dict[str, Any]) -> HyperparameterTuningOutput:
        """Fallback tuning strategy when LLM is unavailable"""
        
        # Default parameter ranges based on model type
        default_ranges = {
            'xgboost': {
                'n_estimators': {'min': 50, 'max': 300},
                'max_depth': {'min': 3, 'max': 10},
                'learning_rate': {'min': 0.01, 'max': 0.3},
                'subsample': {'min': 0.6, 'max': 1.0},
                'colsample_bytree': {'min': 0.6, 'max': 1.0}
            },
            'random_forest': {
                'n_estimators': {'min': 50, 'max': 200},
                'max_depth': {'min': 5, 'max': 20},
                'min_samples_split': {'min': 2, 'max': 10},
                'min_samples_leaf': {'min': 1, 'max': 5}
            },
            'logistic_regression': {
                'C': {'min': 0.01, 'max': 100}
            }
        }
        
        return HyperparameterTuningOutput(
            parameter_ranges=default_ranges,
            tuning_strategy='TPE (Tree-structured Parzen Estimator) for efficient search',
            objective_function='ROC-AUC for credit risk classification',
            early_stopping={
                'patience': 20,
                'min_improvement': 0.001
            },
            search_budget={
                'n_trials': 100,
                'timeout_hours': 1
            },
            rationale='Standard hyperparameter optimization for credit risk modeling'
        )
    
    def get_optimization_insights(self, study_name: str) -> Dict[str, Any]:
        """Get insights from completed optimization"""
        
        if study_name not in self.studies:
            return {"error": "Study not found"}
        
        study = self.studies[study_name]
        
        # Parameter importance
        try:
            importance = optuna.importance.get_param_importances(study)
        except:
            importance = {}
        
        # Optimization history
        trials_df = study.trials_dataframe()
        
        insights = {
            'best_params': study.best_params,
            'best_score': study.best_value,
            'n_trials': len(study.trials),
            'parameter_importance': importance,
            'optimization_history': trials_df['value'].tolist() if not trials_df.empty else [],
            'convergence_analysis': self._analyze_convergence(study)
        }
        
        return insights
    
    def _analyze_convergence(self, study) -> Dict[str, Any]:
        """Analyze optimization convergence"""
        
        values = [trial.value for trial in study.trials if trial.value is not None]
        
        if len(values) < 10:
            return {"status": "insufficient_data"}
        
        # Check if optimization is converging
        recent_values = values[-20:]  # Last 20 trials
        early_values = values[:20]    # First 20 trials
        
        recent_mean = np.mean(recent_values)
        early_mean = np.mean(early_values)
        
        improvement = recent_mean - early_mean
        
        return {
            'status': 'converging' if improvement > 0.01 else 'converged',
            'improvement': improvement,
            'best_trial_number': study.best_trial.number,
            'recommendation': 'Continue optimization' if improvement > 0.01 else 'Optimization complete'
        }

# Global hyperparameter tuner
llm_hyperparameter_tuner = LLMGuidedHyperparameterTuner()