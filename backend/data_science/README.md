# Data Science & Analytics Module

## Features Implemented ✅

### Jupyter / JupyterLab
- Interactive notebook environment for ML prototyping
- Pre-configured notebooks for financial EDA
- Credit risk modeling examples
- Feature engineering demonstrations

### Plotly / Seaborn Visualization
- Interactive financial dashboards
- Credit risk correlation matrices
- Feature importance plots
- Model performance visualization
- Class distribution analysis

### Statsmodels Statistical Modeling
- Linear and logistic regression analysis
- Multicollinearity detection (VIF)
- Residual analysis and diagnostics
- Time series analysis capabilities
- Credit risk specialized modeling

### Feature-engine Toolkit
- Financial feature engineering
- Income and credit ratio calculations
- Categorical encoding and transformation
- Outlier handling with Winsorization
- Numerical transformations (log, power)

### Imbalanced-learn
- SMOTE, ADASYN oversampling
- Random over/under sampling
- Combined methods (SMOTE+Tomek, SMOTE+ENN)
- Balanced ensemble methods
- Optimal threshold selection

## Module Structure

```
data_science/
├── feature_engineering.py    # Financial feature creation
├── visualization.py          # Interactive plots & dashboards
├── statistical_modeling.py   # Statsmodels analysis
├── imbalanced_learning.py    # Class imbalance handling
└── README.md                # This documentation

notebooks/
├── financial_eda.ipynb      # Comprehensive EDA example
└── credit_risk_modeling.ipynb # Advanced credit risk analysis

visualizations/              # Generated plots and charts
```

## Quick Start

### Start Jupyter Environment
```bash
# Jupyter Notebook
make jupyter

# JupyterLab (recommended)
make lab

# Direct commands
jupyter notebook --port=8888
jupyterlab --port=8888
```

### Feature Engineering Example
```python
from data_science.feature_engineering import FinancialFeatureEngineer

fe = FinancialFeatureEngineer()
df_features = fe.create_income_features(df)
df_features = fe.create_credit_features(df_features)
df_encoded = fe.encode_categorical(df_features, ['category_col'])
```

### Visualization Example
```python
from data_science.visualization import FinancialVisualizer

viz = FinancialVisualizer()
dashboard = viz.create_financial_dashboard(df)
income_fig = viz.plot_income_distribution(df)
income_fig.show()
```

### Statistical Modeling Example
```python
from data_science.statistical_modeling import FinancialStatisticalModeler

sm = FinancialStatisticalModeler()
analysis = sm.credit_risk_modeling(df, 'default', features)
linear_results = sm.linear_regression_analysis(df, 'income', predictors)
```

### Imbalanced Learning Example
```python
from data_science.imbalanced_learning import ImbalancedLearningHandler

imb = ImbalancedLearningHandler()
X_balanced, y_balanced = imb.apply_smote(X, y)
comparison = imb.compare_sampling_methods(X_train, y_train, X_test, y_test)
```

## Key Features for Credit Risk

### Class Imbalance Handling
- **SMOTE**: Synthetic minority oversampling
- **ADASYN**: Adaptive synthetic sampling
- **Combined Methods**: SMOTE+Tomek, SMOTE+ENN
- **Balanced Ensembles**: Random Forest, Bagging
- **Threshold Optimization**: F1-score maximization

### Financial Feature Engineering
- **Income Ratios**: Income/expense, savings rate
- **Credit Metrics**: Utilization, debt-to-income
- **Risk Categories**: Income brackets, risk levels
- **Outlier Treatment**: Winsorization, capping
- **Transformations**: Log, power, discretization

### ML Explainability
- **Feature Importance**: Tree-based, permutation
- **Statistical Significance**: P-values, confidence intervals
- **Model Diagnostics**: Residual analysis, VIF
- **Performance Metrics**: ROC-AUC, precision-recall
- **Visualization**: Interactive plots, dashboards

## Notebook Examples

### 1. Financial EDA (`financial_eda.ipynb`)
- Complete exploratory data analysis workflow
- Feature engineering demonstration
- Statistical modeling examples
- Visualization gallery
- Model comparison

### 2. Credit Risk Modeling (`credit_risk_modeling.ipynb`)
- Advanced imbalanced learning techniques
- Sampling method comparison
- Optimal threshold selection
- Performance visualization
- Feature importance analysis

## Production Integration

### API Endpoints
```python
# Add to FastAPI routes
@app.post("/api/analyze-credit-risk")
async def analyze_credit_risk(data: CreditRiskData):
    # Use data science modules
    fe = FinancialFeatureEngineer()
    imb = ImbalancedLearningHandler()
    
    # Process and analyze
    features = fe.create_credit_features(data.to_dataframe())
    risk_score = model.predict_proba(features)
    
    return {"risk_score": risk_score}
```

### Batch Processing
```python
# Scheduled analysis jobs
from data_science.statistical_modeling import FinancialStatisticalModeler

def monthly_risk_analysis():
    sm = FinancialStatisticalModeler()
    analysis = sm.credit_risk_modeling(monthly_data, 'default', features)
    # Store results, generate reports
```

## Environment Setup

### Required Packages
- **Core**: pandas, numpy, scikit-learn
- **Visualization**: plotly, seaborn, matplotlib
- **Statistics**: statsmodels
- **Feature Engineering**: feature-engine
- **Imbalanced Learning**: imbalanced-learn
- **Notebooks**: jupyter, jupyterlab

### Configuration
```env
JUPYTER_PORT=8888
JUPYTER_TOKEN=your-secure-token
PLOTLY_USERNAME=your-plotly-username
PLOTLY_API_KEY=your-plotly-api-key
```

## Best Practices

### 1. Data Quality
- Handle missing values before feature engineering
- Check for data leakage in time-series data
- Validate feature distributions

### 2. Model Development
- Use stratified splits for imbalanced data
- Cross-validate with appropriate metrics
- Document feature engineering steps

### 3. Explainability
- Generate feature importance plots
- Provide statistical significance tests
- Create interactive dashboards

### 4. Production Readiness
- Serialize feature transformers
- Version control model artifacts
- Monitor model performance drift

## Performance Considerations

- **Memory**: Use chunking for large datasets
- **Speed**: Vectorized operations with pandas/numpy
- **Scalability**: Consider Dask for distributed computing
- **Visualization**: Limit plot complexity for web deployment

This module provides comprehensive ML explainability and EDA capabilities specifically designed for financial data analysis and credit risk modeling.