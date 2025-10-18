"""AutoML Pipeline with TPOT and Optuna"""
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import roc_auc_score, classification_report
from sklearn.preprocessing import StandardScaler, LabelEncoder
from tpot import TPOTClassifier
import optuna
from optuna.integration import SklearnIntegration
import joblib
from typing import Dict, Any, Tuple, List, Optional
import warnings
warnings.filterwarnings('ignore')

class AutoMLPipeline:
    """Automated ML pipeline for credit risk modeling"""
    
    def __init__(self):
        self.best_pipeline = None
        self.best_params = None
        self.scaler = StandardScaler()
        self.label_encoders = {}
        self.feature_names = []
        self.study = None
        
    def prepare_data(self, df: pd.DataFrame, target_column: str) -> Tuple[pd.DataFrame, pd.Series]:
        """Prepare data for AutoML"""
        # Separate features and target
        X = df.drop(columns=[target_column])
        y = df[target_column]
        
        # Handle categorical variables
        categorical_columns = X.select_dtypes(include=['object']).columns
        
        for col in categorical_columns:
            le = LabelEncoder()
            X[col] = le.fit_transform(X[col].astype(str))
            self.label_encoders[col] = le
        
        # Handle missing values
        X = X.fillna(X.median())
        
        # Store feature names
        self.feature_names = X.columns.tolist()
        
        return X, y
    
    def run_tpot_optimization(self, X: pd.DataFrame, y: pd.Series, 
                            generations: int = 5, population_size: int = 20) -> Dict[str, Any]:
        """Run TPOT automated ML pipeline optimization"""
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Initialize TPOT
        tpot = TPOTClassifier(
            generations=generations,
            population_size=population_size,
            cv=3,
            random_state=42,
            scoring='roc_auc',
            verbosity=2,
            n_jobs=-1,
            early_stop=3
        )
        
        # Fit TPOT
        print("🤖 Running TPOT AutoML optimization...")
        tpot.fit(X_train, y_train)
        
        # Evaluate
        y_pred = tpot.predict(X_test)
        y_prob = tpot.predict_proba(X_test)[:, 1]
        
        roc_auc = roc_auc_score(y_test, y_prob)
        
        # Store best pipeline
        self.best_pipeline = tpot.fitted_pipeline_
        
        results = {
            "best_pipeline": str(tpot.fitted_pipeline_),
            "roc_auc": roc_auc,
            "test_score": tpot.score(X_test, y_test),
            "cv_scores": cross_val_score(tpot.fitted_pipeline_, X_train, y_train, cv=3, scoring='roc_auc'),
            "classification_report": classification_report(y_test, y_pred, output_dict=True)
        }
        
        return results
    
    def optimize_hyperparameters(self, X: pd.DataFrame, y: pd.Series, 
                                model_class, n_trials: int = 50) -> Dict[str, Any]:
        """Optimize hyperparameters using Optuna"""
        
        def objective(trial):
            # Define hyperparameter search space based on model
            if 'XGBoost' in str(model_class):
                params = {
                    'n_estimators': trial.suggest_int('n_estimators', 50, 300),
                    'max_depth': trial.suggest_int('max_depth', 3, 10),
                    'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
                    'subsample': trial.suggest_float('subsample', 0.6, 1.0),
                    'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0)
                }
            elif 'RandomForest' in str(model_class):
                params = {
                    'n_estimators': trial.suggest_int('n_estimators', 50, 200),
                    'max_depth': trial.suggest_int('max_depth', 5, 20),
                    'min_samples_split': trial.suggest_int('min_samples_split', 2, 10),
                    'min_samples_leaf': trial.suggest_int('min_samples_leaf', 1, 5)
                }
            else:
                # Default parameters for other models
                params = {}
            
            # Create model with suggested parameters
            model = model_class(**params, random_state=42)
            
            # Cross-validation score
            scores = cross_val_score(model, X, y, cv=3, scoring='roc_auc')
            return scores.mean()
        
        # Create study
        self.study = optuna.create_study(direction='maximize')
        self.study.optimize(objective, n_trials=n_trials)
        
        # Get best parameters
        self.best_params = self.study.best_params
        
        return {
            "best_params": self.best_params,
            "best_score": self.study.best_value,
            "n_trials": len(self.study.trials),
            "optimization_history": [trial.value for trial in self.study.trials]
        }
    
    def create_ensemble_model(self, X: pd.DataFrame, y: pd.Series) -> Dict[str, Any]:
        """Create ensemble model using MLxtend"""
        from mlxtend.classifier import StackingCVClassifier
        from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
        from sklearn.linear_model import LogisticRegression
        from sklearn.svm import SVC
        
        # Base models
        rf = RandomForestClassifier(n_estimators=100, random_state=42)
        gb = GradientBoostingClassifier(n_estimators=100, random_state=42)
        svm = SVC(probability=True, random_state=42)
        
        # Meta-classifier
        meta_classifier = LogisticRegression(random_state=42)
        
        # Stacking classifier
        stacking_clf = StackingCVClassifier(
            classifiers=[rf, gb, svm],
            meta_classifier=meta_classifier,
            cv=3,
            random_state=42
        )
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Fit ensemble
        print("🔗 Training ensemble model...")
        stacking_clf.fit(X_train, y_train)
        
        # Evaluate
        y_pred = stacking_clf.predict(X_test)
        y_prob = stacking_clf.predict_proba(X_test)[:, 1]
        
        roc_auc = roc_auc_score(y_test, y_prob)
        
        # Store best model
        self.best_pipeline = stacking_clf
        
        return {
            "ensemble_type": "stacking",
            "base_models": ["RandomForest", "GradientBoosting", "SVM"],
            "meta_classifier": "LogisticRegression",
            "roc_auc": roc_auc,
            "classification_report": classification_report(y_test, y_pred, output_dict=True)
        }
    
    def auto_feature_engineering(self, df: pd.DataFrame) -> pd.DataFrame:
        """Automated feature engineering"""
        engineered_df = df.copy()
        
        # Numerical features
        numerical_cols = df.select_dtypes(include=[np.number]).columns
        
        for col in numerical_cols:
            if col != 'target':  # Avoid target column
                # Log transformation
                if (df[col] > 0).all():
                    engineered_df[f'{col}_log'] = np.log1p(df[col])
                
                # Square root transformation
                if (df[col] >= 0).all():
                    engineered_df[f'{col}_sqrt'] = np.sqrt(df[col])
                
                # Binning
                engineered_df[f'{col}_binned'] = pd.cut(df[col], bins=5, labels=False)
        
        # Interaction features (for important pairs)
        important_pairs = [
            ('monthly_income', 'monthly_expenses'),
            ('credit_used', 'credit_limit'),
            ('total_debt', 'monthly_income')
        ]
        
        for col1, col2 in important_pairs:
            if col1 in df.columns and col2 in df.columns:
                engineered_df[f'{col1}_{col2}_ratio'] = df[col1] / (df[col2] + 1)
                engineered_df[f'{col1}_{col2}_diff'] = df[col1] - df[col2]
        
        return engineered_df
    
    def run_full_automl(self, df: pd.DataFrame, target_column: str) -> Dict[str, Any]:
        """Run complete AutoML pipeline"""
        results = {
            "data_info": {},
            "feature_engineering": {},
            "tpot_results": {},
            "ensemble_results": {},
            "best_model_info": {}
        }
        
        # Data info
        results["data_info"] = {
            "shape": df.shape,
            "target_distribution": df[target_column].value_counts().to_dict(),
            "missing_values": df.isnull().sum().to_dict()
        }
        
        # Feature engineering
        print("🔧 Running automated feature engineering...")
        engineered_df = self.auto_feature_engineering(df)
        results["feature_engineering"] = {
            "original_features": len(df.columns),
            "engineered_features": len(engineered_df.columns),
            "new_features": list(set(engineered_df.columns) - set(df.columns))
        }
        
        # Prepare data
        X, y = self.prepare_data(engineered_df, target_column)
        
        # Run TPOT optimization
        try:
            tpot_results = self.run_tpot_optimization(X, y, generations=3, population_size=15)
            results["tpot_results"] = tpot_results
        except Exception as e:
            print(f"TPOT failed: {e}")
            results["tpot_results"] = {"error": str(e)}
        
        # Create ensemble model
        try:
            ensemble_results = self.create_ensemble_model(X, y)
            results["ensemble_results"] = ensemble_results
        except Exception as e:
            print(f"Ensemble failed: {e}")
            results["ensemble_results"] = {"error": str(e)}
        
        # Select best model
        tpot_score = results["tpot_results"].get("roc_auc", 0)
        ensemble_score = results["ensemble_results"].get("roc_auc", 0)
        
        if tpot_score > ensemble_score:
            results["best_model_info"] = {
                "model_type": "tpot_optimized",
                "score": tpot_score,
                "pipeline": results["tpot_results"].get("best_pipeline", "")
            }
        else:
            results["best_model_info"] = {
                "model_type": "ensemble_stacking",
                "score": ensemble_score,
                "components": results["ensemble_results"].get("base_models", [])
            }
        
        return results
    
    def save_automl_results(self, results: Dict[str, Any], filepath: str):
        """Save AutoML results and best model"""
        # Save results
        joblib.dump({
            "results": results,
            "best_pipeline": self.best_pipeline,
            "scaler": self.scaler,
            "label_encoders": self.label_encoders,
            "feature_names": self.feature_names
        }, filepath)
    
    def load_automl_results(self, filepath: str) -> Dict[str, Any]:
        """Load AutoML results and model"""
        data = joblib.load(filepath)
        self.best_pipeline = data["best_pipeline"]
        self.scaler = data["scaler"]
        self.label_encoders = data["label_encoders"]
        self.feature_names = data["feature_names"]
        return data["results"]

# Global AutoML pipeline
automl_pipeline = AutoMLPipeline()