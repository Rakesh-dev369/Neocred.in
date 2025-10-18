"""Financial Ratios Engine for Credit Metrics"""
import pandas as pd
import numpy as np
from typing import Dict, Any, List
from datetime import datetime, timedelta

class FinancialRatiosEngine:
    """Calculate comprehensive financial ratios for credit analysis"""
    
    def __init__(self):
        self.ratios = {}
    
    def calculate_liquidity_ratios(self, data: Dict[str, float]) -> Dict[str, float]:
        """Calculate liquidity ratios"""
        ratios = {}
        
        # Current Ratio
        if 'current_assets' in data and 'current_liabilities' in data:
            ratios['current_ratio'] = data['current_assets'] / (data['current_liabilities'] + 1)
        
        # Quick Ratio
        if all(k in data for k in ['current_assets', 'inventory', 'current_liabilities']):
            ratios['quick_ratio'] = (data['current_assets'] - data['inventory']) / (data['current_liabilities'] + 1)
        
        # Cash Ratio
        if 'cash' in data and 'current_liabilities' in data:
            ratios['cash_ratio'] = data['cash'] / (data['current_liabilities'] + 1)
        
        return ratios
    
    def calculate_debt_ratios(self, data: Dict[str, float]) -> Dict[str, float]:
        """Calculate debt and leverage ratios"""
        ratios = {}
        
        # Debt-to-Income Ratio
        if 'total_debt' in data and 'monthly_income' in data:
            ratios['debt_to_income'] = data['total_debt'] / (data['monthly_income'] * 12 + 1)
        
        # Debt-to-Asset Ratio
        if 'total_debt' in data and 'total_assets' in data:
            ratios['debt_to_asset'] = data['total_debt'] / (data['total_assets'] + 1)
        
        # Credit Utilization Ratio
        if 'credit_used' in data and 'credit_limit' in data:
            ratios['credit_utilization'] = data['credit_used'] / (data['credit_limit'] + 1)
        
        # Loan-to-Value Ratio (for secured loans)
        if 'loan_amount' in data and 'collateral_value' in data:
            ratios['loan_to_value'] = data['loan_amount'] / (data['collateral_value'] + 1)
        
        return ratios
    
    def calculate_income_ratios(self, data: Dict[str, float]) -> Dict[str, float]:
        """Calculate income and expense ratios"""
        ratios = {}
        
        # Income-to-Expense Ratio
        if 'monthly_income' in data and 'monthly_expenses' in data:
            ratios['income_expense_ratio'] = data['monthly_income'] / (data['monthly_expenses'] + 1)
        
        # Savings Rate
        if 'monthly_income' in data and 'monthly_expenses' in data:
            savings = data['monthly_income'] - data['monthly_expenses']
            ratios['savings_rate'] = savings / data['monthly_income'] if data['monthly_income'] > 0 else 0
        
        # Fixed Expense Ratio
        if 'fixed_expenses' in data and 'monthly_income' in data:
            ratios['fixed_expense_ratio'] = data['fixed_expenses'] / (data['monthly_income'] + 1)
        
        # Discretionary Income Ratio
        if all(k in data for k in ['monthly_income', 'fixed_expenses', 'debt_payments']):
            discretionary = data['monthly_income'] - data['fixed_expenses'] - data['debt_payments']
            ratios['discretionary_income_ratio'] = discretionary / data['monthly_income']
        
        return ratios
    
    def calculate_credit_ratios(self, data: Dict[str, float]) -> Dict[str, float]:
        """Calculate credit-specific ratios"""
        ratios = {}
        
        # Payment-to-Income Ratio
        if 'monthly_debt_payments' in data and 'monthly_income' in data:
            ratios['payment_to_income'] = data['monthly_debt_payments'] / (data['monthly_income'] + 1)
        
        # Available Credit Ratio
        if 'credit_limit' in data and 'credit_used' in data:
            available_credit = data['credit_limit'] - data['credit_used']
            ratios['available_credit_ratio'] = available_credit / (data['credit_limit'] + 1)
        
        # Credit Mix Score (diversity of credit types)
        if 'credit_accounts' in data:
            credit_types = data.get('credit_types', 1)
            ratios['credit_mix_score'] = min(credit_types / 5, 1.0)  # Normalized to 0-1
        
        return ratios
    
    def calculate_stability_ratios(self, data: Dict[str, float]) -> Dict[str, float]:
        """Calculate financial stability ratios"""
        ratios = {}
        
        # Employment Stability Score
        if 'employment_months' in data:
            ratios['employment_stability'] = min(data['employment_months'] / 24, 1.0)  # 2 years = stable
        
        # Income Volatility (if historical data available)
        if 'income_variance' in data and 'monthly_income' in data:
            ratios['income_volatility'] = data['income_variance'] / (data['monthly_income'] ** 2 + 1)
        
        # Emergency Fund Ratio
        if 'emergency_fund' in data and 'monthly_expenses' in data:
            ratios['emergency_fund_ratio'] = data['emergency_fund'] / (data['monthly_expenses'] * 6 + 1)
        
        return ratios
    
    def calculate_all_ratios(self, financial_data: Dict[str, float]) -> Dict[str, Any]:
        """Calculate all financial ratios"""
        all_ratios = {}
        
        # Calculate different ratio categories
        all_ratios['liquidity'] = self.calculate_liquidity_ratios(financial_data)
        all_ratios['debt'] = self.calculate_debt_ratios(financial_data)
        all_ratios['income'] = self.calculate_income_ratios(financial_data)
        all_ratios['credit'] = self.calculate_credit_ratios(financial_data)
        all_ratios['stability'] = self.calculate_stability_ratios(financial_data)
        
        # Calculate composite scores
        all_ratios['composite'] = self.calculate_composite_scores(all_ratios)
        
        return all_ratios
    
    def calculate_composite_scores(self, ratios: Dict[str, Dict[str, float]]) -> Dict[str, float]:
        """Calculate composite financial health scores"""
        composite = {}
        
        # Financial Health Score (0-100)
        health_factors = []
        
        # Debt health (lower is better)
        debt_ratios = ratios.get('debt', {})
        if 'debt_to_income' in debt_ratios:
            debt_score = max(0, 100 - (debt_ratios['debt_to_income'] * 100))
            health_factors.append(debt_score)
        
        # Income health (higher is better)
        income_ratios = ratios.get('income', {})
        if 'savings_rate' in income_ratios:
            savings_score = min(100, income_ratios['savings_rate'] * 100)
            health_factors.append(savings_score)
        
        # Credit health
        credit_ratios = ratios.get('credit', {})
        if 'credit_utilization' in credit_ratios:
            credit_score = max(0, 100 - (credit_ratios['credit_utilization'] * 100))
            health_factors.append(credit_score)
        
        if health_factors:
            composite['financial_health_score'] = np.mean(health_factors)
        
        # Creditworthiness Score (0-1000)
        creditworthiness_factors = []
        
        # Payment capacity
        if 'payment_to_income' in credit_ratios:
            payment_capacity = max(0, 1 - credit_ratios['payment_to_income'])
            creditworthiness_factors.append(payment_capacity * 300)
        
        # Financial stability
        stability_ratios = ratios.get('stability', {})
        if 'employment_stability' in stability_ratios:
            creditworthiness_factors.append(stability_ratios['employment_stability'] * 200)
        
        # Debt management
        if 'debt_to_income' in debt_ratios:
            debt_management = max(0, 1 - debt_ratios['debt_to_income'])
            creditworthiness_factors.append(debt_management * 300)
        
        # Liquidity
        liquidity_ratios = ratios.get('liquidity', {})
        if 'current_ratio' in liquidity_ratios:
            liquidity_score = min(1, liquidity_ratios['current_ratio'] / 2)  # 2.0 is ideal
            creditworthiness_factors.append(liquidity_score * 200)
        
        if creditworthiness_factors:
            composite['creditworthiness_score'] = sum(creditworthiness_factors)
        
        return composite
    
    def get_ratio_interpretation(self, ratio_name: str, value: float) -> Dict[str, str]:
        """Get interpretation of financial ratio"""
        interpretations = {
            'debt_to_income': {
                'excellent': (0, 0.2, "Excellent debt management"),
                'good': (0.2, 0.36, "Good debt levels"),
                'fair': (0.36, 0.5, "Manageable debt"),
                'poor': (0.5, float('inf'), "High debt burden")
            },
            'credit_utilization': {
                'excellent': (0, 0.1, "Excellent credit usage"),
                'good': (0.1, 0.3, "Good credit management"),
                'fair': (0.3, 0.5, "Moderate credit usage"),
                'poor': (0.5, float('inf'), "High credit utilization")
            },
            'savings_rate': {
                'excellent': (0.2, float('inf'), "Excellent savings habit"),
                'good': (0.1, 0.2, "Good savings rate"),
                'fair': (0.05, 0.1, "Moderate savings"),
                'poor': (0, 0.05, "Low savings rate")
            }
        }
        
        if ratio_name not in interpretations:
            return {"category": "unknown", "description": "No interpretation available"}
        
        for category, (min_val, max_val, description) in interpretations[ratio_name].items():
            if min_val <= value < max_val:
                return {"category": category, "description": description}
        
        return {"category": "unknown", "description": "Value out of range"}

# Global ratios engine
financial_ratios_engine = FinancialRatiosEngine()