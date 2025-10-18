"""Recommendation Engine for Personalized Credit Improvement"""
import numpy as np
import pandas as pd
from typing import Dict, Any, List, Tuple
from datetime import datetime, timedelta
import json

class CreditRecommendationEngine:
    """Generate personalized credit improvement recommendations"""
    
    def __init__(self):
        self.recommendation_rules = self._load_recommendation_rules()
        self.priority_weights = {
            "critical": 1.0,
            "high": 0.8,
            "medium": 0.6,
            "low": 0.4
        }
    
    def _load_recommendation_rules(self) -> Dict[str, Any]:
        """Load recommendation rules and templates"""
        return {
            "debt_to_income": {
                "thresholds": [0.2, 0.36, 0.5],
                "recommendations": [
                    {
                        "condition": "ratio > 0.5",
                        "priority": "critical",
                        "title": "Reduce High Debt Burden",
                        "description": "Your debt-to-income ratio is critically high. Focus on debt reduction immediately.",
                        "actions": [
                            "Consider debt consolidation",
                            "Create aggressive debt payoff plan",
                            "Avoid taking new debt",
                            "Increase income sources"
                        ],
                        "impact": "High credit score improvement",
                        "timeline": "6-12 months"
                    },
                    {
                        "condition": "0.36 < ratio <= 0.5",
                        "priority": "high",
                        "title": "Optimize Debt Management",
                        "description": "Your debt levels are manageable but could be improved.",
                        "actions": [
                            "Pay more than minimum payments",
                            "Focus on high-interest debt first",
                            "Consider balance transfers",
                            "Track spending closely"
                        ],
                        "impact": "Moderate credit improvement",
                        "timeline": "3-6 months"
                    }
                ]
            },
            "credit_utilization": {
                "thresholds": [0.1, 0.3, 0.5],
                "recommendations": [
                    {
                        "condition": "ratio > 0.5",
                        "priority": "critical",
                        "title": "Reduce Credit Utilization Immediately",
                        "description": "High credit utilization is severely impacting your credit score.",
                        "actions": [
                            "Pay down credit card balances",
                            "Make multiple payments per month",
                            "Request credit limit increases",
                            "Avoid closing old credit cards"
                        ],
                        "impact": "Immediate score improvement",
                        "timeline": "1-2 months"
                    },
                    {
                        "condition": "0.3 < ratio <= 0.5",
                        "priority": "high",
                        "title": "Lower Credit Card Usage",
                        "description": "Reduce credit utilization below 30% for better scores.",
                        "actions": [
                            "Pay balances before statement dates",
                            "Spread balances across multiple cards",
                            "Set up automatic payments",
                            "Monitor utilization weekly"
                        ],
                        "impact": "Significant score boost",
                        "timeline": "1-3 months"
                    }
                ]
            },
            "payment_history": {
                "recommendations": [
                    {
                        "condition": "missed_payments > 0",
                        "priority": "critical",
                        "title": "Establish Perfect Payment History",
                        "description": "Payment history is the most important factor in credit scoring.",
                        "actions": [
                            "Set up automatic payments",
                            "Pay at least minimum amounts",
                            "Create payment calendar",
                            "Contact lenders for payment plans"
                        ],
                        "impact": "Major long-term improvement",
                        "timeline": "6-24 months"
                    }
                ]
            },
            "credit_mix": {
                "recommendations": [
                    {
                        "condition": "credit_types < 3",
                        "priority": "medium",
                        "title": "Diversify Credit Portfolio",
                        "description": "Having different types of credit can improve your score.",
                        "actions": [
                            "Consider a small personal loan",
                            "Add a retail credit card",
                            "Keep old accounts open",
                            "Use credit responsibly"
                        ],
                        "impact": "Gradual score improvement",
                        "timeline": "6-12 months"
                    }
                ]
            },
            "savings_rate": {
                "recommendations": [
                    {
                        "condition": "rate < 0.1",
                        "priority": "high",
                        "title": "Build Emergency Fund",
                        "description": "Low savings rate indicates financial vulnerability.",
                        "actions": [
                            "Start with 1% of income",
                            "Automate savings transfers",
                            "Cut unnecessary expenses",
                            "Find additional income sources"
                        ],
                        "impact": "Financial stability",
                        "timeline": "3-6 months"
                    }
                ]
            }
        }
    
    def analyze_credit_profile(self, financial_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze credit profile and identify improvement areas"""
        analysis = {
            "current_metrics": {},
            "improvement_areas": [],
            "strengths": [],
            "overall_health": "unknown"
        }
        
        # Calculate key metrics
        metrics = self._calculate_key_metrics(financial_data)
        analysis["current_metrics"] = metrics
        
        # Identify improvement areas
        for metric, value in metrics.items():
            if metric in self.recommendation_rules:
                recommendations = self._get_recommendations_for_metric(metric, value, financial_data)
                analysis["improvement_areas"].extend(recommendations)
        
        # Identify strengths
        analysis["strengths"] = self._identify_strengths(metrics)
        
        # Calculate overall health
        analysis["overall_health"] = self._calculate_overall_health(metrics)
        
        return analysis
    
    def _calculate_key_metrics(self, data: Dict[str, Any]) -> Dict[str, float]:
        """Calculate key financial metrics"""
        metrics = {}
        
        # Debt-to-income ratio
        if 'total_debt' in data and 'monthly_income' in data:
            annual_income = data['monthly_income'] * 12
            metrics['debt_to_income'] = data['total_debt'] / (annual_income + 1)
        
        # Credit utilization
        if 'credit_used' in data and 'credit_limit' in data:
            metrics['credit_utilization'] = data['credit_used'] / (data['credit_limit'] + 1)
        
        # Savings rate
        if 'monthly_income' in data and 'monthly_expenses' in data:
            savings = data['monthly_income'] - data['monthly_expenses']
            metrics['savings_rate'] = savings / data['monthly_income'] if data['monthly_income'] > 0 else 0
        
        # Payment history score (if available)
        if 'missed_payments' in data:
            metrics['payment_history_score'] = max(0, 1 - (data['missed_payments'] / 12))
        
        # Credit mix score
        if 'credit_types' in data:
            metrics['credit_mix_score'] = min(data['credit_types'] / 5, 1.0)
        
        return metrics
    
    def _get_recommendations_for_metric(self, metric: str, value: float, 
                                      financial_data: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Get recommendations for a specific metric"""
        recommendations = []
        
        if metric not in self.recommendation_rules:
            return recommendations
        
        rules = self.recommendation_rules[metric]
        
        for rule in rules.get("recommendations", []):
            condition = rule["condition"]
            
            # Evaluate condition
            if self._evaluate_condition(condition, value, financial_data):
                recommendation = rule.copy()
                recommendation["metric"] = metric
                recommendation["current_value"] = value
                recommendation["personalized_actions"] = self._personalize_actions(
                    rule["actions"], financial_data
                )
                recommendations.append(recommendation)
        
        return recommendations
    
    def _evaluate_condition(self, condition: str, value: float, data: Dict[str, Any]) -> bool:
        """Evaluate recommendation condition"""
        try:
            # Replace 'ratio' with actual value
            condition = condition.replace("ratio", str(value))
            
            # Handle special conditions
            if "missed_payments" in condition:
                missed_payments = data.get("missed_payments", 0)
                condition = condition.replace("missed_payments", str(missed_payments))
            
            if "credit_types" in condition:
                credit_types = data.get("credit_types", 0)
                condition = condition.replace("credit_types", str(credit_types))
            
            # Evaluate the condition
            return eval(condition)
        except:
            return False
    
    def _personalize_actions(self, actions: List[str], data: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Personalize actions based on user data"""
        personalized = []
        
        for action in actions:
            personalized_action = {
                "action": action,
                "specific_steps": [],
                "estimated_impact": "Medium",
                "difficulty": "Medium"
            }
            
            # Add specific steps based on user data
            if "debt consolidation" in action.lower():
                if data.get("total_debt", 0) > 100000:
                    personalized_action["specific_steps"] = [
                        "Research personal loan options",
                        "Compare interest rates",
                        "Calculate potential savings",
                        "Apply for consolidation loan"
                    ]
                    personalized_action["estimated_impact"] = "High"
            
            elif "credit limit increase" in action.lower():
                if data.get("credit_score", 0) > 650:
                    personalized_action["specific_steps"] = [
                        "Contact credit card companies",
                        "Request limit increase online",
                        "Provide income documentation",
                        "Wait for approval"
                    ]
                    personalized_action["difficulty"] = "Easy"
            
            elif "emergency fund" in action.lower():
                monthly_income = data.get("monthly_income", 0)
                if monthly_income > 0:
                    target_amount = monthly_income * 6
                    personalized_action["specific_steps"] = [
                        f"Set target of ₹{target_amount:,.0f}",
                        f"Save ₹{target_amount/12:,.0f} per month",
                        "Open high-yield savings account",
                        "Automate monthly transfers"
                    ]
            
            personalized.append(personalized_action)
        
        return personalized
    
    def _identify_strengths(self, metrics: Dict[str, float]) -> List[Dict[str, Any]]:
        """Identify user's financial strengths"""
        strengths = []
        
        # Good debt-to-income ratio
        if metrics.get("debt_to_income", 1.0) < 0.2:
            strengths.append({
                "area": "Debt Management",
                "description": "Excellent debt-to-income ratio",
                "impact": "Strong foundation for credit growth"
            })
        
        # Low credit utilization
        if metrics.get("credit_utilization", 1.0) < 0.1:
            strengths.append({
                "area": "Credit Utilization",
                "description": "Very low credit utilization",
                "impact": "Positive impact on credit score"
            })
        
        # Good savings rate
        if metrics.get("savings_rate", 0.0) > 0.2:
            strengths.append({
                "area": "Savings Discipline",
                "description": "Strong savings habit",
                "impact": "Financial stability and emergency preparedness"
            })
        
        # Perfect payment history
        if metrics.get("payment_history_score", 0.0) >= 0.95:
            strengths.append({
                "area": "Payment History",
                "description": "Excellent payment track record",
                "impact": "Strong positive factor for credit score"
            })
        
        return strengths
    
    def _calculate_overall_health(self, metrics: Dict[str, float]) -> str:
        """Calculate overall financial health"""
        scores = []
        
        # Debt health (lower is better)
        debt_ratio = metrics.get("debt_to_income", 0.5)
        debt_score = max(0, 1 - debt_ratio)
        scores.append(debt_score)
        
        # Credit utilization health (lower is better)
        util_ratio = metrics.get("credit_utilization", 0.5)
        util_score = max(0, 1 - util_ratio)
        scores.append(util_score)
        
        # Savings health (higher is better)
        savings_rate = metrics.get("savings_rate", 0.0)
        savings_score = min(savings_rate * 5, 1.0)  # 20% savings = perfect score
        scores.append(savings_score)
        
        # Payment history health
        payment_score = metrics.get("payment_history_score", 0.8)
        scores.append(payment_score)
        
        # Calculate average
        if scores:
            avg_score = np.mean(scores)
            
            if avg_score >= 0.8:
                return "Excellent"
            elif avg_score >= 0.6:
                return "Good"
            elif avg_score >= 0.4:
                return "Fair"
            else:
                return "Needs Improvement"
        
        return "Unknown"
    
    def generate_action_plan(self, recommendations: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Generate prioritized action plan"""
        # Sort by priority
        priority_order = {"critical": 0, "high": 1, "medium": 2, "low": 3}
        sorted_recommendations = sorted(
            recommendations, 
            key=lambda x: priority_order.get(x.get("priority", "low"), 3)
        )
        
        # Create 30-60-90 day plan
        action_plan = {
            "immediate_actions": [],  # 0-30 days
            "short_term_actions": [],  # 30-60 days
            "long_term_actions": [],  # 60+ days
            "estimated_score_improvement": 0
        }
        
        total_impact = 0
        
        for i, rec in enumerate(sorted_recommendations):
            timeline = rec.get("timeline", "3-6 months")
            priority = rec.get("priority", "medium")
            
            # Estimate score impact
            impact_scores = {"critical": 50, "high": 30, "medium": 20, "low": 10}
            score_impact = impact_scores.get(priority, 10)
            total_impact += score_impact
            
            action_item = {
                "title": rec["title"],
                "priority": priority,
                "actions": rec.get("personalized_actions", []),
                "estimated_impact": score_impact,
                "metric": rec.get("metric", "unknown")
            }
            
            # Categorize by timeline
            if "1-2 months" in timeline or i < 2:
                action_plan["immediate_actions"].append(action_item)
            elif "3-6 months" in timeline or i < 4:
                action_plan["short_term_actions"].append(action_item)
            else:
                action_plan["long_term_actions"].append(action_item)
        
        action_plan["estimated_score_improvement"] = min(total_impact, 100)
        
        return action_plan
    
    def get_personalized_recommendations(self, financial_data: Dict[str, Any]) -> Dict[str, Any]:
        """Get complete personalized recommendations"""
        # Analyze credit profile
        analysis = self.analyze_credit_profile(financial_data)
        
        # Generate action plan
        action_plan = self.generate_action_plan(analysis["improvement_areas"])
        
        # Combine results
        return {
            "analysis": analysis,
            "action_plan": action_plan,
            "generated_at": datetime.now().isoformat(),
            "user_profile": {
                "risk_level": analysis["overall_health"],
                "primary_focus_areas": [
                    rec["metric"] for rec in analysis["improvement_areas"][:3]
                ],
                "strengths_count": len(analysis["strengths"])
            }
        }

# Global recommendation engine
recommendation_engine = CreditRecommendationEngine()