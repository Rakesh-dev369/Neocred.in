"""
Dask Parallel Processing
For ML preprocessing and large dataset operations
"""

import dask.dataframe as dd
import dask.array as da
import pandas as pd
import numpy as np
from dask.distributed import Client
from typing import Dict, List, Any

class DaskProcessor:
    """Dask parallel processing for financial data"""
    
    def __init__(self, n_workers=4):
        self.client = None
        self.n_workers = n_workers
    
    def start_client(self):
        """Start Dask client"""
        try:
            self.client = Client(n_workers=self.n_workers, threads_per_worker=2)
            print(f"✅ Dask client started with {self.n_workers} workers")
            return self.client
        except Exception as e:
            print(f"❌ Failed to start Dask client: {e}")
            return None
    
    def stop_client(self):
        """Stop Dask client"""
        if self.client:
            self.client.close()
            print("🔌 Dask client stopped")
    
    def process_large_dataset(self, data_path: str, chunk_size: str = "100MB"):
        """Process large CSV files with Dask"""
        try:
            # Read large CSV with Dask
            df = dd.read_csv(data_path, blocksize=chunk_size)
            
            # Financial data processing
            if 'income' in df.columns and 'expenses' in df.columns:
                df['savings_rate'] = (df['income'] - df['expenses']) / df['income']
            
            if 'credit_limit' in df.columns and 'credit_used' in df.columns:
                df['credit_utilization'] = df['credit_used'] / df['credit_limit']
            
            # Compute results
            result = df.compute()
            return result
            
        except Exception as e:
            print(f"❌ Error processing dataset: {e}")
            return None
    
    def parallel_feature_engineering(self, df: pd.DataFrame):
        """Parallel feature engineering with Dask"""
        try:
            # Convert to Dask DataFrame
            ddf = dd.from_pandas(df, npartitions=4)
            
            # Feature engineering operations
            if 'age' in ddf.columns:
                ddf['age_group'] = ddf['age'].apply(
                    lambda x: 'young' if x < 30 else 'middle' if x < 50 else 'senior',
                    meta=('age_group', 'object')
                )
            
            if 'income' in ddf.columns:
                ddf['income_log'] = ddf['income'].apply(np.log1p, meta=('income_log', 'float64'))
            
            # Compute and return
            result = ddf.compute()
            return result
            
        except Exception as e:
            print(f"❌ Error in feature engineering: {e}")
            return df
    
    def parallel_ml_preprocessing(self, X: np.ndarray, y: np.ndarray):
        """Parallel ML preprocessing with Dask arrays"""
        try:
            # Convert to Dask arrays
            X_da = da.from_array(X, chunks=(1000, X.shape[1]))
            y_da = da.from_array(y, chunks=1000)
            
            # Standardization
            X_mean = da.mean(X_da, axis=0)
            X_std = da.std(X_da, axis=0)
            X_scaled = (X_da - X_mean) / X_std
            
            # Compute results
            X_result = X_scaled.compute()
            y_result = y_da.compute()
            
            return X_result, y_result
            
        except Exception as e:
            print(f"❌ Error in ML preprocessing: {e}")
            return X, y
    
    def batch_prediction(self, model, X: np.ndarray, batch_size: int = 1000):
        """Batch predictions with Dask"""
        try:
            # Convert to Dask array
            X_da = da.from_array(X, chunks=(batch_size, X.shape[1]))
            
            # Apply model prediction in batches
            predictions = X_da.map_blocks(
                lambda chunk: model.predict(chunk),
                dtype=np.float64,
                drop_axis=1
            )
            
            return predictions.compute()
            
        except Exception as e:
            print(f"❌ Error in batch prediction: {e}")
            return None
    
    def aggregate_financial_metrics(self, df: pd.DataFrame, group_by: str):
        """Parallel aggregation of financial metrics"""
        try:
            # Convert to Dask DataFrame
            ddf = dd.from_pandas(df, npartitions=4)
            
            # Group by and aggregate
            aggregations = {
                'income': ['mean', 'sum', 'std'],
                'expenses': ['mean', 'sum', 'std'],
                'savings': ['mean', 'sum', 'std']
            }
            
            result = ddf.groupby(group_by).agg(aggregations).compute()
            return result
            
        except Exception as e:
            print(f"❌ Error in aggregation: {e}")
            return None

# Global Dask processor instance
dask_processor = DaskProcessor()