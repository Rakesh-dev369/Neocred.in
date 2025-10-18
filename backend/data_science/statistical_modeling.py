"""Statistical Modeling with Statsmodels"""
import pandas as pd
import numpy as np
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor
from statsmodels.stats.diagnostic import het_breuschpagan
from statsmodels.stats.stattools import durbin_watson
from typing import Dict, Any, Tuple

class FinancialStatisticalModeler:
    """Statistical modeling for financial data"""
    
    def __init__(self):
        self.models = {}
        self.results = {}
    
    def linear_regression_analysis(self, df: pd.DataFrame, target: str, features: list) -> Dict[str, Any]:
        """Comprehensive linear regression analysis"""
        # Prepare data
        X = df[features].copy()
        y = df[target].copy()
        
        # Add constant for intercept
        X = sm.add_constant(X)
        
        # Fit model
        model = sm.OLS(y, X)
        results = model.fit()
        
        # Store results
        self.models[f'{target}_linear'] = model
        self.results[f'{target}_linear'] = results
        
        # Comprehensive analysis
        analysis = {
            'summary': results.summary(),
            'r_squared': results.rsquared,
            'adj_r_squared': results.rsquared_adj,
            'f_statistic': results.fvalue,
            'f_pvalue': results.f_pvalue,
            'coefficients': results.params.to_dict(),
            'p_values': results.pvalues.to_dict(),
            'confidence_intervals': results.conf_int().to_dict(),
            'residuals': results.resid,
            'fitted_values': results.fittedvalues
        }
        
        return analysis
    
    def logistic_regression_analysis(self, df: pd.DataFrame, target: str, features: list) -> Dict[str, Any]:
        """Logistic regression for binary classification"""
        X = df[features].copy()
        y = df[target].copy()
        X = sm.add_constant(X)
        
        # Fit logistic regression
        model = sm.Logit(y, X)
        results = model.fit()
        
        self.models[f'{target}_logistic'] = model
        self.results[f'{target}_logistic'] = results
        
        analysis = {
            'summary': results.summary(),
            'pseudo_r_squared': results.prsquared,
            'log_likelihood': results.llf,
            'aic': results.aic,
            'bic': results.bic,
            'coefficients': results.params.to_dict(),
            'odds_ratios': np.exp(results.params).to_dict(),
            'p_values': results.pvalues.to_dict(),
            'predictions': results.predict()
        }
        
        return analysis
    
    def multicollinearity_check(self, df: pd.DataFrame, features: list) -> Dict[str, float]:
        """Check for multicollinearity using VIF"""
        X = df[features].copy()
        X = sm.add_constant(X)
        
        vif_data = {}
        for i, feature in enumerate(X.columns):
            if feature != 'const':
                vif_data[feature] = variance_inflation_factor(X.values, i)
        
        return vif_data
    
    def residual_analysis(self, model_key: str) -> Dict[str, Any]:
        """Comprehensive residual analysis"""
        if model_key not in self.results:
            raise ValueError(f"Model {model_key} not found")
        
        results = self.results[model_key]
        residuals = results.resid
        fitted = results.fittedvalues
        
        analysis = {
            'residual_mean': np.mean(residuals),
            'residual_std': np.std(residuals),
            'durbin_watson': durbin_watson(residuals),
            'jarque_bera': sm.stats.jarque_bera(residuals),
            'residuals': residuals,
            'fitted_values': fitted,
            'standardized_residuals': residuals / np.std(residuals)
        }
        
        # Heteroscedasticity test (for linear regression)
        if hasattr(results, 'model') and hasattr(results.model, 'exog'):
            try:
                lm, lm_pvalue, fvalue, f_pvalue = het_breuschpagan(residuals, results.model.exog)
                analysis['breusch_pagan'] = {
                    'lm_statistic': lm,
                    'lm_pvalue': lm_pvalue,
                    'f_statistic': fvalue,
                    'f_pvalue': f_pvalue
                }
            except:
                pass
        
        return analysis
    
    def time_series_analysis(self, df: pd.DataFrame, target: str, date_col: str = None) -> Dict[str, Any]:
        """Basic time series analysis"""
        if date_col and date_col in df.columns:
            df = df.set_index(pd.to_datetime(df[date_col]))
        
        ts_data = df[target].copy()
        
        # Decomposition
        from statsmodels.tsa.seasonal import seasonal_decompose
        decomposition = seasonal_decompose(ts_data, model='additive', period=12)
        
        # Stationarity test
        from statsmodels.tsa.stattools import adfuller
        adf_result = adfuller(ts_data.dropna())
        
        analysis = {
            'trend': decomposition.trend,
            'seasonal': decomposition.seasonal,
            'residual': decomposition.resid,
            'adf_statistic': adf_result[0],
            'adf_pvalue': adf_result[1],
            'adf_critical_values': adf_result[4],
            'is_stationary': adf_result[1] < 0.05
        }
        
        return analysis
    
    def credit_risk_modeling(self, df: pd.DataFrame, default_col: str, features: list) -> Dict[str, Any]:
        """Specialized credit risk statistical modeling"""
        # Logistic regression for default prediction
        logistic_analysis = self.logistic_regression_analysis(df, default_col, features)
        
        # Additional credit risk metrics
        default_rate = df[default_col].mean()
        
        # Feature correlation with default
        correlations = {}
        for feature in features:
            if feature in df.columns:
                correlations[feature] = df[feature].corr(df[default_col])
        
        credit_analysis = {
            'logistic_model': logistic_analysis,
            'default_rate': default_rate,
            'feature_correlations': correlations,
            'sample_size': len(df),
            'positive_cases': df[default_col].sum(),
            'negative_cases': len(df) - df[default_col].sum()
        }
        
        return credit_analysis