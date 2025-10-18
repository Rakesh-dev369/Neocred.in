"""Data Visualization with Plotly and Seaborn"""
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import seaborn as sns
import matplotlib.pyplot as plt
from typing import Dict, Any

class FinancialVisualizer:
    """Financial data visualization toolkit"""
    
    def __init__(self):
        sns.set_style("whitegrid")
        plt.style.use('seaborn-v0_8')
    
    def plot_income_distribution(self, df: pd.DataFrame, income_col: str = 'monthly_income') -> go.Figure:
        """Plot income distribution with Plotly"""
        fig = px.histogram(
            df, 
            x=income_col,
            title="Income Distribution",
            nbins=30,
            color_discrete_sequence=['#1f77b4']
        )
        fig.update_layout(
            xaxis_title="Monthly Income (₹)",
            yaxis_title="Count",
            showlegend=False
        )
        return fig
    
    def plot_credit_risk_matrix(self, df: pd.DataFrame) -> go.Figure:
        """Plot credit risk correlation matrix"""
        risk_cols = ['credit_score', 'debt_to_income', 'credit_utilization', 'default_risk']
        available_cols = [col for col in risk_cols if col in df.columns]
        
        if len(available_cols) < 2:
            return go.Figure().add_annotation(text="Insufficient data for correlation matrix")
        
        corr_matrix = df[available_cols].corr()
        
        fig = px.imshow(
            corr_matrix,
            title="Credit Risk Correlation Matrix",
            color_continuous_scale='RdBu_r',
            aspect='auto'
        )
        return fig
    
    def plot_feature_importance(self, feature_names: list, importance_scores: list) -> go.Figure:
        """Plot feature importance scores"""
        df_importance = pd.DataFrame({
            'feature': feature_names,
            'importance': importance_scores
        }).sort_values('importance', ascending=True)
        
        fig = px.bar(
            df_importance,
            x='importance',
            y='feature',
            orientation='h',
            title="Feature Importance",
            color='importance',
            color_continuous_scale='viridis'
        )
        return fig
    
    def plot_class_distribution(self, y: pd.Series, title: str = "Class Distribution") -> go.Figure:
        """Plot class distribution for imbalanced datasets"""
        class_counts = y.value_counts()
        
        fig = px.pie(
            values=class_counts.values,
            names=class_counts.index,
            title=title
        )
        return fig
    
    def create_financial_dashboard(self, df: pd.DataFrame) -> Dict[str, go.Figure]:
        """Create comprehensive financial dashboard"""
        dashboard = {}
        
        # Income distribution
        if 'monthly_income' in df.columns:
            dashboard['income_dist'] = self.plot_income_distribution(df)
        
        # Credit risk matrix
        dashboard['risk_matrix'] = self.plot_credit_risk_matrix(df)
        
        # Age vs Income scatter
        if 'age' in df.columns and 'monthly_income' in df.columns:
            dashboard['age_income'] = px.scatter(
                df, x='age', y='monthly_income',
                title="Age vs Income",
                trendline="ols"
            )
        
        return dashboard
    
    def plot_model_performance(self, y_true: np.ndarray, y_pred: np.ndarray, y_prob: np.ndarray = None) -> Dict[str, go.Figure]:
        """Plot model performance metrics"""
        from sklearn.metrics import confusion_matrix, roc_curve, auc
        
        plots = {}
        
        # Confusion Matrix
        cm = confusion_matrix(y_true, y_pred)
        plots['confusion_matrix'] = px.imshow(
            cm, 
            title="Confusion Matrix",
            color_continuous_scale='Blues',
            text_auto=True
        )
        
        # ROC Curve (if probabilities available)
        if y_prob is not None:
            fpr, tpr, _ = roc_curve(y_true, y_prob)
            roc_auc = auc(fpr, tpr)
            
            plots['roc_curve'] = go.Figure()
            plots['roc_curve'].add_trace(go.Scatter(
                x=fpr, y=tpr,
                mode='lines',
                name=f'ROC Curve (AUC = {roc_auc:.2f})'
            ))
            plots['roc_curve'].add_trace(go.Scatter(
                x=[0, 1], y=[0, 1],
                mode='lines',
                line=dict(dash='dash'),
                name='Random'
            ))
            plots['roc_curve'].update_layout(
                title="ROC Curve",
                xaxis_title="False Positive Rate",
                yaxis_title="True Positive Rate"
            )
        
        return plots