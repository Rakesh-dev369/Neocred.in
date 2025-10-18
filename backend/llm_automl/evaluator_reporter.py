"""Stage 5: GPT-5 Evaluation & Human-Readable Reporting"""
import pandas as pd
import numpy as np
from typing import Dict, Any, List
from sklearn.metrics import (
    classification_report, confusion_matrix, roc_auc_score, 
    precision_recall_curve, roc_curve, auc
)
from pydantic import BaseModel, Field
from automl.llm_orchestrator import llm_orchestrator
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64

class ModelEvaluationReport(BaseModel):
    """Structured model evaluation report"""
    executive_summary: str = Field(description="High-level summary for executives")
    technical_summary: str = Field(description="Technical summary for ML engineers")
    performance_analysis: str = Field(description="Detailed performance analysis")
    business_impact: str = Field(description="Business impact assessment")
    recommendations: List[str] = Field(description="Actionable recommendations")
    risk_assessment: str = Field(description="Model risk assessment")
    deployment_readiness: str = Field(description="Deployment readiness evaluation")
    monitoring_suggestions: List[str] = Field(description="Production monitoring suggestions")

class GPTEvaluatorReporter:
    """GPT-5 powered model evaluation and reporting"""
    
    def __init__(self):
        self.evaluation_cache = {}
    
    def evaluate_and_report(self, model, X_test: pd.DataFrame, y_test: pd.Series,
                          model_info: Dict[str, Any], training_history: Dict[str, Any]) -> ModelEvaluationReport:
        """Comprehensive model evaluation with GPT-5 generated report"""
        
        # Calculate comprehensive metrics
        metrics = self._calculate_comprehensive_metrics(model, X_test, y_test)
        
        # Generate visualizations
        visualizations = self._generate_evaluation_plots(model, X_test, y_test, metrics)
        
        # Prepare context for GPT-5
        evaluation_context = self._prepare_evaluation_context(
            metrics, model_info, training_history, visualizations
        )
        
        # Generate human-readable report
        report_prompt = f"""
        As a senior ML consultant, create a comprehensive model evaluation report:
        
        Model Performance:
        {evaluation_context}
        
        Generate a professional report including:
        
        1. EXECUTIVE SUMMARY (2-3 sentences for business stakeholders)
        2. TECHNICAL SUMMARY (detailed metrics for ML engineers)
        3. PERFORMANCE ANALYSIS (strengths, weaknesses, edge cases)
        4. BUSINESS IMPACT (expected ROI, risk reduction, operational benefits)
        5. RECOMMENDATIONS (specific actions for improvement)
        6. RISK ASSESSMENT (model limitations, potential failures)
        7. DEPLOYMENT READINESS (production considerations)
        8. MONITORING SUGGESTIONS (KPIs to track in production)
        
        Context: Credit risk modeling for NeoCred financial platform
        Audience: Mixed technical and business stakeholders
        Tone: Professional, data-driven, actionable
        
        Focus on financial domain implications and regulatory considerations.
        """
        
        try:
            if llm_orchestrator.openai_client:
                response = llm_orchestrator.openai_client.chat.completions.create(
                    model="gpt-4-turbo-preview",  # Will use GPT-5 when available
                    response_model=ModelEvaluationReport,
                    messages=[{"role": "user", "content": report_prompt}]
                )
                return response
            else:
                return self._fallback_evaluation_report(metrics, model_info)
                
        except Exception as e:
            print(f"GPT evaluation failed: {e}")
            return self._fallback_evaluation_report(metrics, model_info)
    
    def _calculate_comprehensive_metrics(self, model, X_test: pd.DataFrame, y_test: pd.Series) -> Dict[str, Any]:
        """Calculate comprehensive evaluation metrics"""
        
        # Predictions
        y_pred = model.predict(X_test)
        y_prob = model.predict_proba(X_test)[:, 1] if hasattr(model, 'predict_proba') else y_pred
        
        # Classification metrics
        metrics = {
            'accuracy': (y_pred == y_test).mean(),
            'roc_auc': roc_auc_score(y_test, y_prob),
            'classification_report': classification_report(y_test, y_pred, output_dict=True),
            'confusion_matrix': confusion_matrix(y_test, y_pred).tolist()
        }
        
        # Precision-Recall metrics
        precision, recall, pr_thresholds = precision_recall_curve(y_test, y_prob)
        metrics['pr_auc'] = auc(recall, precision)
        
        # ROC curve data
        fpr, tpr, roc_thresholds = roc_curve(y_test, y_prob)
        metrics['roc_curve'] = {'fpr': fpr.tolist(), 'tpr': tpr.tolist()}
        
        # Business metrics for credit risk
        metrics['business_metrics'] = self._calculate_business_metrics(y_test, y_pred, y_prob)
        
        # Model-specific metrics
        if hasattr(model, 'feature_importances_'):
            feature_names = X_test.columns.tolist()
            importance_dict = dict(zip(feature_names, model.feature_importances_))
            metrics['feature_importance'] = sorted(importance_dict.items(), key=lambda x: x[1], reverse=True)
        
        return metrics
    
    def _calculate_business_metrics(self, y_true: pd.Series, y_pred: np.ndarray, y_prob: np.ndarray) -> Dict[str, Any]:
        """Calculate business-specific metrics for credit risk"""
        
        # Confusion matrix components
        tn, fp, fn, tp = confusion_matrix(y_true, y_pred).ravel()
        
        # Business impact calculations (simplified)
        avg_loan_amount = 100000  # Average loan amount in INR
        default_loss_rate = 0.6   # Percentage of loan lost on default
        
        # Cost calculations
        cost_of_false_positive = avg_loan_amount * 0.05  # Opportunity cost
        cost_of_false_negative = avg_loan_amount * default_loss_rate  # Actual loss
        
        total_cost = (fp * cost_of_false_positive) + (fn * cost_of_false_negative)
        
        # Risk metrics
        default_rate_actual = y_true.mean()
        default_rate_predicted = y_pred.mean()
        
        return {
            'total_cost_impact': total_cost,
            'false_positive_cost': fp * cost_of_false_positive,
            'false_negative_cost': fn * cost_of_false_negative,
            'default_rate_actual': default_rate_actual,
            'default_rate_predicted': default_rate_predicted,
            'precision_at_10_percent': self._precision_at_k(y_true, y_prob, 0.1),
            'recall_at_90_percent_precision': self._recall_at_precision(y_true, y_prob, 0.9)
        }
    
    def _precision_at_k(self, y_true: pd.Series, y_prob: np.ndarray, k: float) -> float:
        """Calculate precision at top k% of predictions"""
        threshold_idx = int(len(y_prob) * k)
        top_k_indices = np.argsort(y_prob)[-threshold_idx:]
        return y_true.iloc[top_k_indices].mean()
    
    def _recall_at_precision(self, y_true: pd.Series, y_prob: np.ndarray, target_precision: float) -> float:
        """Calculate recall at target precision"""
        precision, recall, thresholds = precision_recall_curve(y_true, y_prob)
        
        # Find threshold that achieves target precision
        valid_indices = precision >= target_precision
        if not np.any(valid_indices):
            return 0.0
        
        return recall[valid_indices].max()
    
    def _generate_evaluation_plots(self, model, X_test: pd.DataFrame, y_test: pd.Series, 
                                 metrics: Dict[str, Any]) -> Dict[str, str]:
        """Generate evaluation plots and return as base64 strings"""
        
        plots = {}
        
        try:
            # ROC Curve
            plt.figure(figsize=(8, 6))
            fpr = metrics['roc_curve']['fpr']
            tpr = metrics['roc_curve']['tpr']
            plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {metrics["roc_auc"]:.3f})')
            plt.plot([0, 1], [0, 1], 'k--', label='Random')
            plt.xlabel('False Positive Rate')
            plt.ylabel('True Positive Rate')
            plt.title('ROC Curve')
            plt.legend()
            plots['roc_curve'] = self._plot_to_base64()
            plt.close()
            
            # Confusion Matrix
            plt.figure(figsize=(6, 5))
            cm = np.array(metrics['confusion_matrix'])
            sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
            plt.title('Confusion Matrix')
            plt.ylabel('True Label')
            plt.xlabel('Predicted Label')
            plots['confusion_matrix'] = self._plot_to_base64()
            plt.close()
            
            # Feature Importance (if available)
            if 'feature_importance' in metrics:
                plt.figure(figsize=(10, 6))
                features, importance = zip(*metrics['feature_importance'][:10])
                plt.barh(range(len(features)), importance)
                plt.yticks(range(len(features)), features)
                plt.xlabel('Importance')
                plt.title('Top 10 Feature Importance')
                plots['feature_importance'] = self._plot_to_base64()
                plt.close()
                
        except Exception as e:
            print(f"Plot generation failed: {e}")
        
        return plots
    
    def _plot_to_base64(self) -> str:
        """Convert current matplotlib plot to base64 string"""
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png', bbox_inches='tight', dpi=100)
        buffer.seek(0)
        plot_data = buffer.getvalue()
        buffer.close()
        
        return base64.b64encode(plot_data).decode()
    
    def _prepare_evaluation_context(self, metrics: Dict[str, Any], model_info: Dict[str, Any],
                                  training_history: Dict[str, Any], visualizations: Dict[str, str]) -> str:
        """Prepare comprehensive context for GPT evaluation"""
        
        context = []
        
        # Model information
        context.append(f"Model Type: {model_info.get('model_type', 'Unknown')}")
        context.append(f"Training Dataset: {model_info.get('dataset_shape', 'Unknown')} samples")
        
        # Performance metrics
        context.append(f"\nPERFORMANCE METRICS:")
        context.append(f"- ROC-AUC: {metrics['roc_auc']:.4f}")
        context.append(f"- PR-AUC: {metrics['pr_auc']:.4f}")
        context.append(f"- Accuracy: {metrics['accuracy']:.4f}")
        
        # Classification report
        if 'classification_report' in metrics:
            cr = metrics['classification_report']
            context.append(f"- Precision (Class 1): {cr['1']['precision']:.4f}")
            context.append(f"- Recall (Class 1): {cr['1']['recall']:.4f}")
            context.append(f"- F1-Score (Class 1): {cr['1']['f1-score']:.4f}")
        
        # Business metrics
        if 'business_metrics' in metrics:
            bm = metrics['business_metrics']
            context.append(f"\nBUSINESS IMPACT:")
            context.append(f"- Total Cost Impact: ₹{bm['total_cost_impact']:,.0f}")
            context.append(f"- Default Rate (Actual): {bm['default_rate_actual']:.2%}")
            context.append(f"- Default Rate (Predicted): {bm['default_rate_predicted']:.2%}")
            context.append(f"- Precision at 10%: {bm['precision_at_10_percent']:.4f}")
        
        # Feature importance
        if 'feature_importance' in metrics:
            context.append(f"\nTOP FEATURES:")
            for feature, importance in metrics['feature_importance'][:5]:
                context.append(f"- {feature}: {importance:.4f}")
        
        # Training history
        if training_history:
            context.append(f"\nTRAINING INFO:")
            context.append(f"- Best Score: {training_history.get('best_score', 'Unknown')}")
            context.append(f"- Training Time: {training_history.get('training_time', 'Unknown')}")
            context.append(f"- Hyperparameter Trials: {training_history.get('n_trials', 'Unknown')}")
        
        return "\n".join(context)
    
    def _fallback_evaluation_report(self, metrics: Dict[str, Any], model_info: Dict[str, Any]) -> ModelEvaluationReport:
        """Fallback evaluation report when GPT is unavailable"""
        
        roc_auc = metrics.get('roc_auc', 0)
        accuracy = metrics.get('accuracy', 0)
        
        # Determine performance level
        if roc_auc >= 0.9:
            performance_level = "Excellent"
        elif roc_auc >= 0.8:
            performance_level = "Good"
        elif roc_auc >= 0.7:
            performance_level = "Fair"
        else:
            performance_level = "Poor"
        
        return ModelEvaluationReport(
            executive_summary=f"The credit risk model shows {performance_level.lower()} performance with {roc_auc:.1%} ROC-AUC score. Model is {'ready for production' if roc_auc >= 0.8 else 'needs improvement'} deployment.",
            
            technical_summary=f"Model achieved ROC-AUC of {roc_auc:.4f} and accuracy of {accuracy:.4f}. Performance metrics indicate {performance_level.lower()} predictive capability for credit risk assessment.",
            
            performance_analysis=f"The model demonstrates {performance_level.lower()} discriminative ability between default and non-default cases. ROC-AUC of {roc_auc:.4f} suggests {'strong' if roc_auc >= 0.8 else 'moderate'} predictive power.",
            
            business_impact=f"Expected to {'significantly reduce' if roc_auc >= 0.8 else 'moderately improve'} credit losses through better risk assessment. Model can help optimize lending decisions and portfolio risk management.",
            
            recommendations=[
                "Monitor model performance regularly",
                "Retrain quarterly with new data",
                "Validate predictions with domain experts",
                "Implement A/B testing for deployment"
            ],
            
            risk_assessment=f"Model risk is {'low' if roc_auc >= 0.8 else 'moderate to high'}. {'Suitable' if roc_auc >= 0.8 else 'Not recommended'} for automated decision making without human oversight.",
            
            deployment_readiness=f"Model is {'ready' if roc_auc >= 0.8 else 'not ready'} for production deployment. {'Proceed with gradual rollout' if roc_auc >= 0.8 else 'Requires further development'}.",
            
            monitoring_suggestions=[
                "Track prediction accuracy over time",
                "Monitor feature drift and data quality",
                "Measure business impact metrics",
                "Set up alerting for performance degradation"
            ]
        )

# Global evaluator reporter
gpt_evaluator_reporter = GPTEvaluatorReporter()