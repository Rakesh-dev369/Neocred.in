"""Fraud Detection Models for Anomaly and Pattern Detection"""
import numpy as np
import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import classification_report
import joblib
from typing import Dict, Any, List, Tuple
from datetime import datetime, timedelta
import hashlib

class AnomalyDetector:
    """Detect anomalies in financial behavior"""
    
    def __init__(self):
        self.isolation_forest = IsolationForest(contamination=0.1, random_state=42)
        self.scaler = StandardScaler()
        self.is_trained = False
        self.feature_names = []
    
    def prepare_features(self, data: pd.DataFrame) -> pd.DataFrame:
        """Prepare features for anomaly detection"""
        features = data.copy()
        
        # Transaction amount features
        if 'amount' in features.columns:
            features['amount_log'] = np.log1p(features['amount'])
            features['amount_zscore'] = (features['amount'] - features['amount'].mean()) / features['amount'].std()
        
        # Time-based features
        if 'timestamp' in features.columns:
            features['hour'] = pd.to_datetime(features['timestamp']).dt.hour
            features['day_of_week'] = pd.to_datetime(features['timestamp']).dt.dayofweek
            features['is_weekend'] = features['day_of_week'].isin([5, 6]).astype(int)
            features['is_night'] = ((features['hour'] < 6) | (features['hour'] > 22)).astype(int)
        
        # Frequency features
        if 'user_id' in features.columns:
            user_counts = features['user_id'].value_counts()
            features['user_transaction_frequency'] = features['user_id'].map(user_counts)
        
        # Location features (if available)
        if 'location' in features.columns:
            location_counts = features['location'].value_counts()
            features['location_frequency'] = features['location'].map(location_counts)
        
        return features
    
    def train(self, data: pd.DataFrame) -> Dict[str, Any]:
        """Train anomaly detection model"""
        # Prepare features
        features = self.prepare_features(data)
        
        # Select numerical features
        numerical_features = features.select_dtypes(include=[np.number])
        self.feature_names = numerical_features.columns.tolist()
        
        # Scale features
        X_scaled = self.scaler.fit_transform(numerical_features)
        
        # Train isolation forest
        self.isolation_forest.fit(X_scaled)
        
        # Get anomaly scores
        anomaly_scores = self.isolation_forest.decision_function(X_scaled)
        anomalies = self.isolation_forest.predict(X_scaled)
        
        self.is_trained = True
        
        return {
            "total_samples": len(data),
            "anomalies_detected": np.sum(anomalies == -1),
            "anomaly_rate": np.mean(anomalies == -1),
            "mean_anomaly_score": np.mean(anomaly_scores)
        }
    
    def detect_anomalies(self, data: pd.DataFrame) -> Dict[str, Any]:
        """Detect anomalies in new data"""
        if not self.is_trained:
            raise ValueError("Model not trained. Call train() first.")
        
        # Prepare features
        features = self.prepare_features(data)
        numerical_features = features[self.feature_names]
        
        # Scale features
        X_scaled = self.scaler.transform(numerical_features)
        
        # Predict anomalies
        anomaly_scores = self.isolation_forest.decision_function(X_scaled)
        anomalies = self.isolation_forest.predict(X_scaled)
        
        # Create results
        results = {
            "anomaly_scores": anomaly_scores.tolist(),
            "is_anomaly": (anomalies == -1).tolist(),
            "anomaly_indices": np.where(anomalies == -1)[0].tolist(),
            "total_anomalies": np.sum(anomalies == -1),
            "anomaly_rate": np.mean(anomalies == -1)
        }
        
        return results

class PatternDetector:
    """Detect suspicious patterns in financial behavior"""
    
    def __init__(self):
        self.suspicious_patterns = []
    
    def detect_velocity_fraud(self, transactions: List[Dict[str, Any]], 
                            time_window: int = 300) -> List[Dict[str, Any]]:
        """Detect high-velocity transactions (many transactions in short time)"""
        suspicious = []
        
        # Sort by timestamp
        sorted_transactions = sorted(transactions, key=lambda x: x.get('timestamp', 0))
        
        for i, transaction in enumerate(sorted_transactions):
            # Count transactions in time window
            current_time = transaction.get('timestamp', 0)
            count = 1
            total_amount = transaction.get('amount', 0)
            
            # Look at subsequent transactions
            for j in range(i + 1, len(sorted_transactions)):
                next_transaction = sorted_transactions[j]
                next_time = next_transaction.get('timestamp', 0)
                
                if next_time - current_time <= time_window:
                    count += 1
                    total_amount += next_transaction.get('amount', 0)
                else:
                    break
            
            # Flag if too many transactions in short time
            if count >= 5:  # 5+ transactions in 5 minutes
                suspicious.append({
                    "type": "velocity_fraud",
                    "transaction_id": transaction.get('id'),
                    "count": count,
                    "total_amount": total_amount,
                    "time_window": time_window,
                    "risk_score": min(count / 10, 1.0)
                })
        
        return suspicious
    
    def detect_amount_patterns(self, transactions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Detect suspicious amount patterns"""
        suspicious = []
        amounts = [t.get('amount', 0) for t in transactions]
        
        # Round number fraud (amounts ending in 00)
        round_amounts = [a for a in amounts if a > 0 and a % 100 == 0]
        if len(round_amounts) / len(amounts) > 0.8:  # 80% round amounts
            suspicious.append({
                "type": "round_amount_pattern",
                "pattern": "excessive_round_amounts",
                "percentage": len(round_amounts) / len(amounts),
                "risk_score": 0.7
            })
        
        # Structuring (amounts just below reporting threshold)
        threshold = 50000  # Example threshold
        near_threshold = [a for a in amounts if threshold * 0.9 <= a < threshold]
        if len(near_threshold) >= 3:
            suspicious.append({
                "type": "structuring_pattern",
                "pattern": "amounts_below_threshold",
                "count": len(near_threshold),
                "threshold": threshold,
                "risk_score": 0.8
            })
        
        return suspicious
    
    def detect_location_anomalies(self, transactions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Detect location-based anomalies"""
        suspicious = []
        locations = [t.get('location') for t in transactions if t.get('location')]
        
        if not locations:
            return suspicious
        
        # Impossible travel (transactions in different cities too quickly)
        for i in range(len(transactions) - 1):
            current = transactions[i]
            next_trans = transactions[i + 1]
            
            current_location = current.get('location')
            next_location = next_trans.get('location')
            
            if current_location and next_location and current_location != next_location:
                time_diff = next_trans.get('timestamp', 0) - current.get('timestamp', 0)
                
                # If different cities within 1 hour (simplified check)
                if time_diff < 3600:  # 1 hour
                    suspicious.append({
                        "type": "impossible_travel",
                        "from_location": current_location,
                        "to_location": next_location,
                        "time_difference": time_diff,
                        "risk_score": 0.9
                    })
        
        return suspicious
    
    def detect_behavioral_anomalies(self, user_profile: Dict[str, Any], 
                                  current_transaction: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Detect behavioral anomalies based on user profile"""
        suspicious = []
        
        # Amount deviation
        avg_amount = user_profile.get('average_transaction_amount', 0)
        current_amount = current_transaction.get('amount', 0)
        
        if avg_amount > 0 and current_amount > avg_amount * 5:  # 5x normal amount
            suspicious.append({
                "type": "amount_deviation",
                "normal_amount": avg_amount,
                "current_amount": current_amount,
                "deviation_factor": current_amount / avg_amount,
                "risk_score": min((current_amount / avg_amount) / 10, 1.0)
            })
        
        # Time deviation
        usual_hours = user_profile.get('usual_transaction_hours', [])
        current_hour = datetime.fromtimestamp(
            current_transaction.get('timestamp', 0)
        ).hour
        
        if usual_hours and current_hour not in usual_hours:
            suspicious.append({
                "type": "time_deviation",
                "usual_hours": usual_hours,
                "current_hour": current_hour,
                "risk_score": 0.6
            })
        
        return suspicious

class FraudRiskScorer:
    """Calculate overall fraud risk score"""
    
    def __init__(self):
        self.risk_weights = {
            "velocity_fraud": 0.3,
            "amount_deviation": 0.25,
            "impossible_travel": 0.2,
            "round_amount_pattern": 0.1,
            "structuring_pattern": 0.15
        }
    
    def calculate_risk_score(self, suspicious_patterns: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Calculate overall fraud risk score"""
        if not suspicious_patterns:
            return {
                "overall_risk_score": 0.0,
                "risk_level": "Low",
                "contributing_factors": []
            }
        
        # Calculate weighted risk score
        total_score = 0.0
        contributing_factors = []
        
        for pattern in suspicious_patterns:
            pattern_type = pattern.get("type", "unknown")
            pattern_score = pattern.get("risk_score", 0.0)
            weight = self.risk_weights.get(pattern_type, 0.1)
            
            weighted_score = pattern_score * weight
            total_score += weighted_score
            
            contributing_factors.append({
                "type": pattern_type,
                "score": pattern_score,
                "weight": weight,
                "weighted_score": weighted_score
            })
        
        # Normalize score to 0-1 range
        overall_score = min(total_score, 1.0)
        
        # Determine risk level
        if overall_score >= 0.8:
            risk_level = "Critical"
        elif overall_score >= 0.6:
            risk_level = "High"
        elif overall_score >= 0.4:
            risk_level = "Medium"
        elif overall_score >= 0.2:
            risk_level = "Low"
        else:
            risk_level = "Very Low"
        
        return {
            "overall_risk_score": overall_score,
            "risk_level": risk_level,
            "contributing_factors": contributing_factors,
            "total_patterns_detected": len(suspicious_patterns)
        }

class FraudDetectionEngine:
    """Main fraud detection engine"""
    
    def __init__(self):
        self.anomaly_detector = AnomalyDetector()
        self.pattern_detector = PatternDetector()
        self.risk_scorer = FraudRiskScorer()
    
    def analyze_transaction(self, transaction: Dict[str, Any], 
                          user_profile: Dict[str, Any] = None,
                          transaction_history: List[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Comprehensive fraud analysis for a transaction"""
        results = {
            "transaction_id": transaction.get("id"),
            "timestamp": transaction.get("timestamp"),
            "suspicious_patterns": [],
            "anomaly_detection": {},
            "risk_assessment": {}
        }
        
        # Pattern detection
        if transaction_history:
            # Add current transaction to history for analysis
            full_history = transaction_history + [transaction]
            
            # Detect various patterns
            velocity_patterns = self.pattern_detector.detect_velocity_fraud(full_history)
            amount_patterns = self.pattern_detector.detect_amount_patterns(full_history)
            location_patterns = self.pattern_detector.detect_location_anomalies(full_history)
            
            results["suspicious_patterns"].extend(velocity_patterns)
            results["suspicious_patterns"].extend(amount_patterns)
            results["suspicious_patterns"].extend(location_patterns)
        
        # Behavioral analysis
        if user_profile:
            behavioral_patterns = self.pattern_detector.detect_behavioral_anomalies(
                user_profile, transaction
            )
            results["suspicious_patterns"].extend(behavioral_patterns)
        
        # Anomaly detection (if model is trained)
        if self.anomaly_detector.is_trained and transaction_history:
            df = pd.DataFrame(transaction_history + [transaction])
            anomaly_results = self.anomaly_detector.detect_anomalies(df)
            results["anomaly_detection"] = anomaly_results
        
        # Calculate overall risk score
        risk_assessment = self.risk_scorer.calculate_risk_score(results["suspicious_patterns"])
        results["risk_assessment"] = risk_assessment
        
        return results

# Global fraud detection engine
fraud_detector = FraudDetectionEngine()