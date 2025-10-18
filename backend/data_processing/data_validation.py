"""
Great Expectations Data Quality Validation
Ensures data integrity for financial processing
"""

import great_expectations as gx
from great_expectations.core import ExpectationSuite
import pandas as pd
from typing import Dict, List, Any
import os

class DataValidator:
    """Data quality validation using Great Expectations"""
    
    def __init__(self):
        self.context = None
        self.setup_context()
    
    def setup_context(self):
        """Setup Great Expectations context"""
        try:
            # Initialize Great Expectations context
            self.context = gx.get_context()
            print("✅ Great Expectations context initialized")
        except Exception as e:
            print(f"❌ Failed to initialize GX context: {e}")
    
    def create_financial_data_suite(self) -> ExpectationSuite:
        """Create expectation suite for financial data"""
        try:
            suite_name = "financial_data_suite"
            
            # Create or get existing suite
            try:
                suite = self.context.get_expectation_suite(suite_name)
            except:
                suite = self.context.add_expectation_suite(suite_name)
            
            # Financial data expectations
            expectations = [
                # Income validation
                {
                    "expectation_type": "expect_column_values_to_be_between",
                    "kwargs": {
                        "column": "income",
                        "min_value": 0,
                        "max_value": 10000000  # 1 crore max
                    }
                },
                # Age validation
                {
                    "expectation_type": "expect_column_values_to_be_between",
                    "kwargs": {
                        "column": "age",
                        "min_value": 18,
                        "max_value": 100
                    }
                },
                # Credit score validation
                {
                    "expectation_type": "expect_column_values_to_be_between",
                    "kwargs": {
                        "column": "credit_score",
                        "min_value": 300,
                        "max_value": 850
                    }
                },
                # Email format validation
                {
                    "expectation_type": "expect_column_values_to_match_regex",
                    "kwargs": {
                        "column": "email",
                        "regex": r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    }
                },
                # Required columns
                {
                    "expectation_type": "expect_table_columns_to_match_set",
                    "kwargs": {
                        "column_set": ["user_id", "income", "age", "email"]
                    }
                },
                # No null values in critical columns
                {
                    "expectation_type": "expect_column_values_to_not_be_null",
                    "kwargs": {
                        "column": "user_id"
                    }
                }
            ]
            
            # Add expectations to suite
            for expectation in expectations:
                suite.add_expectation(**expectation)
            
            return suite
            
        except Exception as e:
            print(f"❌ Error creating expectation suite: {e}")
            return None
    
    def validate_financial_data(self, df: pd.DataFrame) -> Dict[str, Any]:
        """Validate financial data against expectations"""
        try:
            # Create expectation suite
            suite = self.create_financial_data_suite()
            if not suite:
                return {"status": "error", "message": "Failed to create suite"}
            
            # Create validator
            validator = self.context.get_validator(
                batch_request=gx.core.batch.RuntimeBatchRequest(
                    datasource_name="pandas_datasource",
                    data_connector_name="runtime_data_connector",
                    data_asset_name="financial_data",
                    runtime_parameters={"batch_data": df},
                    batch_identifiers={"default_identifier_name": "financial_batch"}
                ),
                expectation_suite_name=suite.expectation_suite_name
            )
            
            # Run validation
            results = validator.validate()
            
            return {
                "status": "completed",
                "success": results.success,
                "statistics": results.statistics,
                "results": [
                    {
                        "expectation_type": result.expectation_config.expectation_type,
                        "success": result.success,
                        "result": result.result
                    }
                    for result in results.results
                ]
            }
            
        except Exception as e:
            return {
                "status": "error",
                "message": str(e)
            }
    
    def validate_user_profile(self, user_data: Dict[str, Any]) -> Dict[str, Any]:
        """Validate individual user profile data"""
        validation_results = {
            "valid": True,
            "errors": [],
            "warnings": []
        }
        
        # Income validation
        if 'income' in user_data:
            income = user_data['income']
            if not isinstance(income, (int, float)) or income < 0:
                validation_results["valid"] = False
                validation_results["errors"].append("Income must be a positive number")
            elif income > 10000000:  # 1 crore
                validation_results["warnings"].append("Income seems unusually high")
        
        # Age validation
        if 'age' in user_data:
            age = user_data['age']
            if not isinstance(age, int) or age < 18 or age > 100:
                validation_results["valid"] = False
                validation_results["errors"].append("Age must be between 18 and 100")
        
        # Credit score validation
        if 'credit_score' in user_data:
            score = user_data['credit_score']
            if not isinstance(score, int) or score < 300 or score > 850:
                validation_results["valid"] = False
                validation_results["errors"].append("Credit score must be between 300 and 850")
        
        # Email validation
        if 'email' in user_data:
            email = user_data['email']
            import re
            if not re.match(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", email):
                validation_results["valid"] = False
                validation_results["errors"].append("Invalid email format")
        
        return validation_results
    
    def create_data_quality_report(self, df: pd.DataFrame) -> Dict[str, Any]:
        """Generate comprehensive data quality report"""
        try:
            report = {
                "dataset_info": {
                    "rows": len(df),
                    "columns": len(df.columns),
                    "memory_usage": df.memory_usage(deep=True).sum()
                },
                "missing_data": df.isnull().sum().to_dict(),
                "data_types": df.dtypes.astype(str).to_dict(),
                "numeric_summary": {},
                "categorical_summary": {}
            }
            
            # Numeric columns summary
            numeric_cols = df.select_dtypes(include=[np.number]).columns
            for col in numeric_cols:
                report["numeric_summary"][col] = {
                    "mean": df[col].mean(),
                    "std": df[col].std(),
                    "min": df[col].min(),
                    "max": df[col].max(),
                    "outliers": len(df[df[col] > df[col].quantile(0.95)])
                }
            
            # Categorical columns summary
            categorical_cols = df.select_dtypes(include=['object']).columns
            for col in categorical_cols:
                report["categorical_summary"][col] = {
                    "unique_values": df[col].nunique(),
                    "most_common": df[col].value_counts().head().to_dict()
                }
            
            return report
            
        except Exception as e:
            return {"error": str(e)}

# Global data validator instance
data_validator = DataValidator()