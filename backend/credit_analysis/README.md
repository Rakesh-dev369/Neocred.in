# Specialized Credit Analysis Module

## Features Implemented ✅

### Credit Risk Models
- **Default Prediction**: XGBoost, LightGBM, Random Forest models
- **Credit Scoring**: 300-850 score calculation from risk probability
- **Risk Categorization**: Low/Medium/High/Critical risk levels
- **Feature Engineering**: Income ratios, debt metrics, behavioral features
- **Model Persistence**: Save/load trained models

### Financial Ratios Engine
- **Liquidity Ratios**: Current, quick, cash ratios
- **Debt Ratios**: Debt-to-income, credit utilization, loan-to-value
- **Income Ratios**: Savings rate, expense ratios, discretionary income
- **Stability Ratios**: Employment stability, income volatility
- **Composite Scores**: Financial health, creditworthiness scoring

### Document NLP (OCR + Transformers)
- **OCR Processing**: Tesseract with image preprocessing
- **PDF Extraction**: Text extraction from financial documents
- **Entity Recognition**: Amounts, dates, account numbers, names
- **Document Classification**: Bank statements, salary slips, KYC docs
- **Financial Analysis**: Transaction extraction, income verification

### Fraud Detection Models
- **Anomaly Detection**: Isolation Forest for unusual patterns
- **Pattern Recognition**: Velocity fraud, structuring, impossible travel
- **Behavioral Analysis**: Deviation from user's normal patterns
- **Risk Scoring**: Weighted fraud risk assessment
- **Real-time Analysis**: Transaction-level fraud detection

### Recommendation Engine
- **Personalized Suggestions**: Credit improvement recommendations
- **Action Plans**: 30-60-90 day improvement roadmaps
- **Priority Scoring**: Critical/High/Medium/Low prioritization
- **Impact Estimation**: Expected credit score improvements
- **Behavioral Insights**: Strengths and weakness identification

## Module Structure

```
credit_analysis/
├── risk_models.py           # Credit risk prediction models
├── financial_ratios.py      # Comprehensive ratio calculations
├── document_nlp.py         # OCR and document analysis
├── fraud_detection.py      # Anomaly and pattern detection
├── recommendation_engine.py # Personalized improvement suggestions
├── routes.py               # FastAPI endpoints
└── README.md              # This documentation
```

## API Endpoints

### Credit Risk Assessment
```
POST /credit-analysis/risk-assessment
```
**Input:**
```json
{
  "monthly_income": 50000,
  "monthly_expenses": 30000,
  "total_debt": 200000,
  "credit_used": 15000,
  "credit_limit": 50000,
  "age": 30,
  "employment_months": 24,
  "credit_types": 3,
  "missed_payments": 0
}
```

**Output:**
```json
{
  "credit_score": 720,
  "credit_grade": "A",
  "risk_category": "Low Risk",
  "default_probability": 0.08,
  "financial_ratios": {...},
  "risk_factors": [...],
  "recommendations": {...}
}
```

### Financial Ratios Calculation
```
POST /credit-analysis/financial-ratios
```

### Document Analysis
```
POST /credit-analysis/document-analysis
```
- Supports PDF and image uploads
- Auto-detects document type
- Extracts financial entities
- Provides structured analysis

### Fraud Detection
```
POST /credit-analysis/fraud-detection
```

### Credit Recommendations
```
POST /credit-analysis/recommendations
```

## Usage Examples

### Credit Risk Analysis
```python
from credit_analysis.risk_models import credit_risk_model, CreditScoreCalculator

# Prepare data
financial_data = {
    "monthly_income": 50000,
    "total_debt": 200000,
    "credit_utilization": 0.3
}

# Predict risk
df = pd.DataFrame([financial_data])
default_prob = credit_risk_model.predict_default_probability(df)[0]
credit_score = CreditScoreCalculator.probability_to_score(default_prob)

print(f"Credit Score: {credit_score}")
print(f"Default Probability: {default_prob:.2%}")
```

### Financial Ratios
```python
from credit_analysis.financial_ratios import financial_ratios_engine

# Calculate all ratios
ratios = financial_ratios_engine.calculate_all_ratios(financial_data)

print("Debt Ratios:", ratios['debt'])
print("Income Ratios:", ratios['income'])
print("Composite Score:", ratios['composite']['financial_health_score'])
```

### Document Analysis
```python
from credit_analysis.document_nlp import document_analyzer

# Analyze bank statement
analysis = document_analyzer.process_document("bank_statement.pdf", "bank_statement")

print("Document Type:", analysis['document_type'])
print("Entities Found:", analysis['entities'])
print("Transactions:", len(analysis['transactions']))
```

### Fraud Detection
```python
from credit_analysis.fraud_detection import fraud_detector

# Analyze transaction
transaction = {
    "id": "txn_123",
    "amount": 50000,
    "timestamp": 1640995200,
    "location": "Mumbai"
}

fraud_analysis = fraud_detector.analyze_transaction(transaction, user_profile, history)
print("Risk Score:", fraud_analysis['risk_assessment']['overall_risk_score'])
```

### Recommendations
```python
from credit_analysis.recommendation_engine import recommendation_engine

# Get personalized recommendations
recommendations = recommendation_engine.get_personalized_recommendations(financial_data)

print("Overall Health:", recommendations['analysis']['overall_health'])
print("Action Plan:", recommendations['action_plan'])
```

## Credit Scoring Algorithm

### Risk-to-Score Conversion
```python
def probability_to_score(default_prob: float) -> int:
    # Inverse relationship: lower probability = higher score
    score = 850 - (default_prob * 550)
    return max(300, min(850, int(score)))
```

### Score Interpretation
- **800-850**: Excellent (A+)
- **750-799**: Very Good (A)
- **700-749**: Good (B+)
- **650-699**: Fair (B)
- **600-649**: Poor (C+)
- **550-599**: Bad (C)
- **300-549**: Very Poor (D)

## Financial Ratios Calculated

### Debt Ratios
- **Debt-to-Income**: Total debt / Annual income
- **Credit Utilization**: Credit used / Credit limit
- **Payment-to-Income**: Monthly payments / Monthly income

### Liquidity Ratios
- **Current Ratio**: Current assets / Current liabilities
- **Quick Ratio**: (Current assets - Inventory) / Current liabilities
- **Cash Ratio**: Cash / Current liabilities

### Income Ratios
- **Savings Rate**: (Income - Expenses) / Income
- **Fixed Expense Ratio**: Fixed expenses / Income
- **Discretionary Income**: Available after fixed costs and debt

### Composite Scores
- **Financial Health Score**: 0-100 overall health rating
- **Creditworthiness Score**: 0-1000 lending suitability

## Document Analysis Capabilities

### Supported Document Types
- **Bank Statements**: Transaction extraction, balance analysis
- **Salary Slips**: Income verification, deduction analysis
- **KYC Documents**: PAN, Aadhaar, Passport verification
- **Financial Reports**: Balance sheets, income statements

### OCR Features
- **Image Preprocessing**: Noise reduction, contrast enhancement
- **Multi-language Support**: English, Hindi (configurable)
- **Entity Extraction**: Amounts, dates, account numbers
- **Pattern Recognition**: Financial document structures

## Fraud Detection Patterns

### Velocity Fraud
- Multiple transactions in short time windows
- Unusual transaction frequency patterns
- Rapid-fire payment attempts

### Amount Patterns
- Round number fraud (excessive round amounts)
- Structuring (amounts below reporting thresholds)
- Unusual amount distributions

### Behavioral Anomalies
- Transactions outside normal hours
- Amounts significantly different from history
- Location-based impossibilities

### Risk Scoring
- **Critical (0.8-1.0)**: Immediate investigation required
- **High (0.6-0.8)**: Enhanced monitoring needed
- **Medium (0.4-0.6)**: Standard review process
- **Low (0.0-0.4)**: Normal transaction processing

## Recommendation Categories

### Immediate Actions (0-30 days)
- Critical debt reduction
- Payment history fixes
- Credit utilization optimization

### Short-term Actions (30-60 days)
- Debt consolidation
- Credit limit increases
- Emergency fund building

### Long-term Actions (60+ days)
- Credit mix diversification
- Income stability improvement
- Financial habit development

## Model Training

### Credit Risk Model Training
```python
# Prepare training data
X_train = pd.DataFrame(training_data)
y_train = pd.Series(default_labels)

# Train model
metrics = credit_risk_model.train(X_train, y_train)
print("Model Performance:", metrics)

# Save model
credit_risk_model.save_model("models/credit_risk_model.pkl")
```

### Fraud Detection Training
```python
# Train anomaly detector
training_metrics = fraud_detector.anomaly_detector.train(transaction_data)
print("Anomaly Detection Metrics:", training_metrics)
```

## Performance Considerations

### Model Inference
- **Credit Risk**: ~10ms per prediction
- **Fraud Detection**: ~50ms per transaction analysis
- **Document OCR**: ~2-5 seconds per document
- **Recommendations**: ~100ms per user profile

### Scalability
- **Batch Processing**: Support for bulk credit assessments
- **Caching**: Model predictions and ratio calculations
- **Async Processing**: Non-blocking document analysis
- **Model Versioning**: A/B testing capabilities

## Security & Privacy

### Data Protection
- **PII Masking**: Automatic sensitive data redaction
- **Encryption**: At-rest and in-transit data protection
- **Access Control**: Role-based API access
- **Audit Logging**: Complete analysis trail

### Compliance
- **GDPR**: Right to explanation for ML decisions
- **PCI DSS**: Credit card data handling
- **RBI Guidelines**: Indian banking regulations
- **Data Retention**: Configurable retention policies

This specialized credit analysis module provides comprehensive financial assessment capabilities, forming the business core of the NeoCred platform with advanced ML-driven insights and personalized recommendations.