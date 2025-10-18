"""Imbalanced Learning for Credit Risk"""
import pandas as pd
import numpy as np
from imblearn.over_sampling import SMOTE, ADASYN, RandomOverSampler
from imblearn.under_sampling import RandomUnderSampler, TomekLinks, EditedNearestNeighbours
from imblearn.combine import SMOTEENN, SMOTETomek
from imblearn.ensemble import BalancedRandomForestClassifier, BalancedBaggingClassifier
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score
from typing import Tuple, Dict, Any

class ImbalancedLearningHandler:
    """Handle class imbalance in credit risk datasets"""
    
    def __init__(self):
        self.samplers = {}
        self.models = {}
    
    def analyze_imbalance(self, y: pd.Series) -> Dict[str, Any]:
        """Analyze class imbalance in target variable"""
        class_counts = y.value_counts()
        total_samples = len(y)
        
        analysis = {
            'class_counts': class_counts.to_dict(),
            'class_percentages': (class_counts / total_samples * 100).to_dict(),
            'imbalance_ratio': class_counts.max() / class_counts.min(),
            'minority_class': class_counts.idxmin(),
            'majority_class': class_counts.idxmax(),
            'total_samples': total_samples
        }
        
        return analysis
    
    def apply_smote(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Tuple[pd.DataFrame, pd.Series]:
        """Apply SMOTE oversampling"""
        smote = SMOTE(random_state=random_state)
        X_resampled, y_resampled = smote.fit_resample(X, y)
        
        self.samplers['smote'] = smote
        
        return pd.DataFrame(X_resampled, columns=X.columns), pd.Series(y_resampled)
    
    def apply_adasyn(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Tuple[pd.DataFrame, pd.Series]:
        """Apply ADASYN oversampling"""
        adasyn = ADASYN(random_state=random_state)
        X_resampled, y_resampled = adasyn.fit_resample(X, y)
        
        self.samplers['adasyn'] = adasyn
        
        return pd.DataFrame(X_resampled, columns=X.columns), pd.Series(y_resampled)
    
    def apply_random_oversampling(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Tuple[pd.DataFrame, pd.Series]:
        """Apply random oversampling"""
        ros = RandomOverSampler(random_state=random_state)
        X_resampled, y_resampled = ros.fit_resample(X, y)
        
        self.samplers['random_over'] = ros
        
        return pd.DataFrame(X_resampled, columns=X.columns), pd.Series(y_resampled)
    
    def apply_random_undersampling(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Tuple[pd.DataFrame, pd.Series]:
        """Apply random undersampling"""
        rus = RandomUnderSampler(random_state=random_state)
        X_resampled, y_resampled = rus.fit_resample(X, y)
        
        self.samplers['random_under'] = rus
        
        return pd.DataFrame(X_resampled, columns=X.columns), pd.Series(y_resampled)
    
    def apply_smote_tomek(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Tuple[pd.DataFrame, pd.Series]:
        """Apply SMOTE + Tomek links combination"""
        smote_tomek = SMOTETomek(random_state=random_state)
        X_resampled, y_resampled = smote_tomek.fit_resample(X, y)
        
        self.samplers['smote_tomek'] = smote_tomek
        
        return pd.DataFrame(X_resampled, columns=X.columns), pd.Series(y_resampled)
    
    def apply_smote_enn(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Tuple[pd.DataFrame, pd.Series]:
        """Apply SMOTE + Edited Nearest Neighbours combination"""
        smote_enn = SMOTEENN(random_state=random_state)
        X_resampled, y_resampled = smote_enn.fit_resample(X, y)
        
        self.samplers['smote_enn'] = smote_enn
        
        return pd.DataFrame(X_resampled, columns=X.columns), pd.Series(y_resampled)
    
    def train_balanced_random_forest(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Dict[str, Any]:
        """Train Balanced Random Forest for imbalanced data"""
        brf = BalancedRandomForestClassifier(
            n_estimators=100,
            random_state=random_state,
            class_weight='balanced'
        )
        
        brf.fit(X, y)
        self.models['balanced_rf'] = brf
        
        # Feature importance
        feature_importance = pd.DataFrame({
            'feature': X.columns,
            'importance': brf.feature_importances_
        }).sort_values('importance', ascending=False)
        
        return {
            'model': brf,
            'feature_importance': feature_importance,
            'oob_score': brf.oob_score_
        }
    
    def train_balanced_bagging(self, X: pd.DataFrame, y: pd.Series, random_state: int = 42) -> Dict[str, Any]:
        """Train Balanced Bagging Classifier"""
        bbc = BalancedBaggingClassifier(
            n_estimators=100,
            random_state=random_state
        )
        
        bbc.fit(X, y)
        self.models['balanced_bagging'] = bbc
        
        return {'model': bbc}
    
    def compare_sampling_methods(self, X: pd.DataFrame, y: pd.Series, test_X: pd.DataFrame, test_y: pd.Series) -> Dict[str, Dict[str, Any]]:
        """Compare different sampling methods"""
        from sklearn.ensemble import RandomForestClassifier
        
        methods = {
            'original': (X, y),
            'smote': self.apply_smote(X, y),
            'adasyn': self.apply_adasyn(X, y),
            'random_over': self.apply_random_oversampling(X, y),
            'smote_tomek': self.apply_smote_tomek(X, y)
        }
        
        results = {}
        
        for method_name, (X_train, y_train) in methods.items():
            # Train model
            rf = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
            rf.fit(X_train, y_train)
            
            # Predictions
            y_pred = rf.predict(test_X)
            y_prob = rf.predict_proba(test_X)[:, 1]
            
            # Metrics
            results[method_name] = {
                'classification_report': classification_report(test_y, y_pred, output_dict=True),
                'confusion_matrix': confusion_matrix(test_y, y_pred).tolist(),
                'roc_auc': roc_auc_score(test_y, y_prob),
                'training_samples': len(X_train),
                'class_distribution': pd.Series(y_train).value_counts().to_dict()
            }
        
        return results
    
    def get_optimal_threshold(self, y_true: np.ndarray, y_prob: np.ndarray) -> Dict[str, float]:
        """Find optimal classification threshold for imbalanced data"""
        from sklearn.metrics import precision_recall_curve, f1_score
        
        precision, recall, thresholds = precision_recall_curve(y_true, y_prob)
        f1_scores = 2 * (precision * recall) / (precision + recall)
        
        # Find threshold that maximizes F1 score
        optimal_idx = np.argmax(f1_scores)
        optimal_threshold = thresholds[optimal_idx]
        
        return {
            'optimal_threshold': optimal_threshold,
            'optimal_f1': f1_scores[optimal_idx],
            'optimal_precision': precision[optimal_idx],
            'optimal_recall': recall[optimal_idx]
        }