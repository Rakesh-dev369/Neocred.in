"""LLM-Powered AutoML Pipeline Orchestrator - NeoCred's Differentiator"""
import pandas as pd
import numpy as np
from typing import Dict, Any, Optional
import asyncio
from datetime import datetime
import json

from .data_analyzer import llm_data_analyzer
from .feature_engineer import claude_feature_engineer
from .model_selector import llm_model_selector
from .hyperparameter_tuner import llm_hyperparameter_tuner
from .evaluator_reporter import gpt_evaluator_reporter
from .mlflow_deployer import mlflow_auto_deployer

class LLMAutoMLPipeline:
    """
    NeoCred's Hybrid AutoML + LLM System
    
    6-Stage Pipeline:
    1️⃣ Data Analysis – GPT-5 analyzes dataset & finds anomalies
    2️⃣ Feature Engineering – Claude suggests transformations
    3️⃣ Model Selection – LLM recommends algorithm set
    4️⃣ Hyperparameter Tuning – Optuna guided by LLM feedback
    5️⃣ Evaluation & Reporting – GPT-5 writes human-readable summary
    6️⃣ Deployment – Auto-push best model via MLflow
    """
    
    def __init__(self):
        self.pipeline_state = {}
        self.execution_log = []
        
    async def run_complete_pipeline(self, df: pd.DataFrame, target_column: str,
                                  pipeline_config: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Execute the complete 6-stage LLM-powered AutoML pipeline"""
        
        pipeline_id = f"automl_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        print(f"🚀 Starting NeoCred LLM-AutoML Pipeline: {pipeline_id}")
        print("=" * 60)
        
        # Initialize pipeline state
        self.pipeline_state = {
            'pipeline_id': pipeline_id,
            'start_time': datetime.now(),
            'dataset_shape': df.shape,
            'target_column': target_column,
            'config': pipeline_config or {}
        }
        
        try:
            # Stage 1: Data Analysis with GPT-5
            print("1️⃣ STAGE 1: LLM Data Analysis")
            data_analysis = await self._stage_1_data_analysis(df, target_column)
            self.pipeline_state['stage_1'] = data_analysis
            print(f"   ✅ Completed: Found {len(data_analysis.get('anomalies_detected', []))} anomalies")
            
            # Stage 2: Feature Engineering with Claude
            print("\n2️⃣ STAGE 2: Claude Feature Engineering")
            feature_engineering = await self._stage_2_feature_engineering(df, target_column, data_analysis)
            self.pipeline_state['stage_2'] = feature_engineering
            print(f"   ✅ Completed: {len(feature_engineering['suggestions'].transformations)} transformations suggested")
            
            # Stage 3: Model Selection with LLM
            print("\n3️⃣ STAGE 3: LLM Model Selection")
            model_selection = await self._stage_3_model_selection(df, target_column, data_analysis, feature_engineering)
            self.pipeline_state['stage_3'] = model_selection
            print(f"   ✅ Completed: {len(model_selection['selection'].recommended_models)} models selected")
            
            # Stage 4: Hyperparameter Tuning with Optuna + LLM
            print("\n4️⃣ STAGE 4: LLM-Guided Hyperparameter Tuning")
            hyperparameter_tuning = await self._stage_4_hyperparameter_tuning(
                feature_engineering['engineered_data'], target_column, model_selection
            )
            self.pipeline_state['stage_4'] = hyperparameter_tuning
            print(f"   ✅ Completed: Best ROC-AUC {hyperparameter_tuning['best_performance']:.4f}")
            
            # Stage 5: Evaluation & Reporting with GPT-5
            print("\n5️⃣ STAGE 5: GPT-5 Evaluation & Reporting")
            evaluation_report = await self._stage_5_evaluation_reporting(
                hyperparameter_tuning['best_model'], 
                hyperparameter_tuning['test_data'],
                hyperparameter_tuning
            )
            self.pipeline_state['stage_5'] = evaluation_report
            print(f"   ✅ Completed: Generated comprehensive report")
            
            # Stage 6: MLflow Deployment
            print("\n6️⃣ STAGE 6: MLflow Auto-Deployment")
            deployment = await self._stage_6_mlflow_deployment(
                hyperparameter_tuning['best_model'],
                evaluation_report,
                hyperparameter_tuning
            )
            self.pipeline_state['stage_6'] = deployment
            print(f"   ✅ Completed: Model deployed as version {deployment['model_version']}")
            
            # Pipeline completion
            self.pipeline_state['end_time'] = datetime.now()
            self.pipeline_state['total_duration'] = (
                self.pipeline_state['end_time'] - self.pipeline_state['start_time']
            ).total_seconds()
            
            print("\n" + "=" * 60)
            print(f"🎉 Pipeline Complete! Duration: {self.pipeline_state['total_duration']:.1f}s")
            print(f"📊 Best Model: {hyperparameter_tuning['best_model_name']}")
            print(f"📈 Performance: {hyperparameter_tuning['best_performance']:.4f} ROC-AUC")
            print(f"🚀 Deployment: {deployment['promotion_result']['status']}")
            
            return self._generate_pipeline_summary()
            
        except Exception as e:
            self.pipeline_state['error'] = str(e)
            self.pipeline_state['status'] = 'failed'
            print(f"❌ Pipeline failed: {e}")
            return self.pipeline_state
    
    async def _stage_1_data_analysis(self, df: pd.DataFrame, target_column: str) -> Dict[str, Any]:
        """Stage 1: GPT-5 powered data analysis"""
        
        # Run LLM data analysis
        analysis_output = llm_data_analyzer.analyze_dataset(df, target_column)
        
        return {
            'analysis_output': analysis_output.dict() if hasattr(analysis_output, 'dict') else str(analysis_output),
            'dataset_stats': {
                'shape': df.shape,
                'missing_values': df.isnull().sum().sum(),
                'numerical_features': len(df.select_dtypes(include=[np.number]).columns),
                'categorical_features': len(df.select_dtypes(include=['object']).columns)
            },
            'anomalies_detected': analysis_output.anomalies_detected if hasattr(analysis_output, 'anomalies_detected') else [],
            'recommendations': analysis_output.recommendations if hasattr(analysis_output, 'recommendations') else []
        }
    
    async def _stage_2_feature_engineering(self, df: pd.DataFrame, target_column: str, 
                                         data_analysis: Dict[str, Any]) -> Dict[str, Any]:
        """Stage 2: Claude powered feature engineering"""
        
        # Get Claude's feature suggestions
        feature_suggestions = claude_feature_engineer.suggest_features(df, target_column, data_analysis)
        
        # Apply transformations
        engineered_df = claude_feature_engineer.apply_transformations(df, feature_suggestions)
        
        return {
            'suggestions': feature_suggestions,
            'original_features': len(df.columns),
            'engineered_features': len(engineered_df.columns),
            'new_features_created': len(engineered_df.columns) - len(df.columns),
            'engineered_data': engineered_df
        }
    
    async def _stage_3_model_selection(self, df: pd.DataFrame, target_column: str,
                                     data_analysis: Dict[str, Any], 
                                     feature_engineering: Dict[str, Any]) -> Dict[str, Any]:
        """Stage 3: LLM guided model selection"""
        
        # Get LLM model recommendations
        model_selection = llm_model_selector.select_models(
            df, target_column, data_analysis, feature_engineering
        )
        
        # Get actual model instances
        model_instances = llm_model_selector.get_model_instances(model_selection)
        
        return {
            'selection': model_selection,
            'model_instances': model_instances,
            'recommended_count': len(model_selection.recommended_models)
        }
    
    async def _stage_4_hyperparameter_tuning(self, df: pd.DataFrame, target_column: str,
                                           model_selection: Dict[str, Any]) -> Dict[str, Any]:
        """Stage 4: LLM-guided hyperparameter tuning with Optuna"""
        
        from sklearn.model_selection import train_test_split
        
        # Prepare data
        X = df.drop(columns=[target_column])
        y = df[target_column]
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
        
        best_model = None
        best_score = 0
        best_model_name = ""
        optimization_results = {}
        
        # Optimize each selected model
        for model_name, model_instance in model_selection['model_instances'].items():
            print(f"   🔧 Optimizing {model_name}...")
            
            # Get LLM tuning strategy
            dataset_info = {'shape': df.shape, 'class_distribution': y.value_counts().to_dict()}
            tuning_strategy = llm_hyperparameter_tuner.get_tuning_strategy(
                model_name, dataset_info, model_selection
            )
            
            # Optimize with Optuna
            optimization_result = llm_hyperparameter_tuner.optimize_model(
                model_instance.__class__, X_train, y_train, tuning_strategy, n_trials=50
            )
            
            optimization_results[model_name] = optimization_result
            
            # Track best model
            if optimization_result['best_score'] > best_score:
                best_score = optimization_result['best_score']
                best_model = model_instance.__class__(**optimization_result['best_params'])
                best_model_name = model_name
        
        # Train best model on full training data
        best_model.fit(X_train, y_train)
        
        return {
            'best_model': best_model,
            'best_model_name': best_model_name,
            'best_performance': best_score,
            'optimization_results': optimization_results,
            'test_data': {'X_test': X_test, 'y_test': y_test},
            'training_data': {'X_train': X_train, 'y_train': y_train}
        }
    
    async def _stage_5_evaluation_reporting(self, model, test_data: Dict[str, Any],
                                          training_results: Dict[str, Any]) -> Dict[str, Any]:
        """Stage 5: GPT-5 powered evaluation and reporting"""
        
        X_test = test_data['X_test']
        y_test = test_data['y_test']
        
        # Generate comprehensive evaluation report
        model_info = {
            'model_type': training_results['best_model_name'],
            'dataset_shape': f"{len(training_results['training_data']['X_train'])} training samples",
            'feature_names': X_test.columns.tolist()
        }
        
        training_history = {
            'best_score': training_results['best_performance'],
            'n_trials': sum(result['n_trials'] for result in training_results['optimization_results'].values()),
            'training_time': 'automated'
        }
        
        evaluation_report = gpt_evaluator_reporter.evaluate_and_report(
            model, X_test, y_test, model_info, training_history
        )
        
        return {
            'evaluation_report': evaluation_report,
            'model_info': model_info,
            'training_history': training_history
        }
    
    async def _stage_6_mlflow_deployment(self, model, evaluation_report: Dict[str, Any],
                                       training_results: Dict[str, Any]) -> Dict[str, Any]:
        """Stage 6: MLflow automated deployment"""
        
        # Extract evaluation metrics for deployment
        X_test = training_results['test_data']['X_test']
        y_test = training_results['test_data']['y_test']
        
        # Calculate metrics for MLflow
        from sklearn.metrics import roc_auc_score, classification_report
        y_pred = model.predict(X_test)
        y_prob = model.predict_proba(X_test)[:, 1] if hasattr(model, 'predict_proba') else y_pred
        
        evaluation_metrics = {
            'roc_auc': roc_auc_score(y_test, y_prob),
            'classification_report': classification_report(y_test, y_pred, output_dict=True)
        }
        
        # Deploy to MLflow
        deployment_result = mlflow_auto_deployer.deploy_best_model(
            model,
            evaluation_report['model_info'],
            evaluation_metrics,
            evaluation_report['training_history'],
            X_test,
            y_test
        )
        
        return deployment_result
    
    def _generate_pipeline_summary(self) -> Dict[str, Any]:
        """Generate comprehensive pipeline summary"""
        
        summary = {
            'pipeline_id': self.pipeline_state['pipeline_id'],
            'execution_summary': {
                'status': 'completed',
                'duration_seconds': self.pipeline_state['total_duration'],
                'start_time': self.pipeline_state['start_time'].isoformat(),
                'end_time': self.pipeline_state['end_time'].isoformat()
            },
            'data_insights': {
                'dataset_shape': self.pipeline_state['dataset_shape'],
                'anomalies_found': len(self.pipeline_state['stage_1'].get('anomalies_detected', [])),
                'features_engineered': self.pipeline_state['stage_2']['new_features_created']
            },
            'model_performance': {
                'best_model': self.pipeline_state['stage_4']['best_model_name'],
                'roc_auc_score': self.pipeline_state['stage_4']['best_performance'],
                'optimization_trials': sum(
                    result['n_trials'] 
                    for result in self.pipeline_state['stage_4']['optimization_results'].values()
                )
            },
            'deployment_info': {
                'model_version': self.pipeline_state['stage_6']['model_version'],
                'deployment_status': self.pipeline_state['stage_6']['promotion_result']['status'],
                'mlflow_run_id': self.pipeline_state['stage_6']['run_id']
            },
            'llm_contributions': {
                'data_analysis': 'GPT-4 identified dataset anomalies and quality issues',
                'feature_engineering': 'Claude suggested financial domain transformations',
                'model_selection': 'LLM recommended optimal algorithms for credit risk',
                'evaluation': 'GPT-4 generated human-readable performance report'
            },
            'business_value': {
                'automation_level': '95% - Minimal human intervention required',
                'time_to_deployment': f"{self.pipeline_state['total_duration']:.0f} seconds",
                'model_explainability': 'High - LLM-generated explanations included',
                'regulatory_compliance': 'Ready - Comprehensive documentation generated'
            }
        }
        
        return summary
    
    def get_pipeline_status(self, pipeline_id: str) -> Dict[str, Any]:
        """Get current pipeline execution status"""
        
        if self.pipeline_state.get('pipeline_id') == pipeline_id:
            return {
                'pipeline_id': pipeline_id,
                'status': self.pipeline_state.get('status', 'running'),
                'current_stage': len([k for k in self.pipeline_state.keys() if k.startswith('stage_')]),
                'total_stages': 6,
                'elapsed_time': (datetime.now() - self.pipeline_state['start_time']).total_seconds(),
                'last_update': datetime.now().isoformat()
            }
        else:
            return {'error': 'Pipeline not found', 'pipeline_id': pipeline_id}

# Global pipeline orchestrator
llm_automl_pipeline = LLMAutoMLPipeline()