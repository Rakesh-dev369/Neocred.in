"""Document Indexing with LlamaIndex for Model Data"""
from llama_index import VectorStoreIndex, Document, ServiceContext
from llama_index.llms import OpenAI
from llama_index.embeddings import OpenAIEmbedding
from llama_index.storage.storage_context import StorageContext
from llama_index.storage.docstore import SimpleDocumentStore
from llama_index.storage.index_store import SimpleIndexStore
from llama_index.storage.vector_store import SimpleVectorStore
import os
import json
from typing import Dict, Any, List, Optional
import pandas as pd

class ModelDocumentIndexer:
    """Index and query model documentation and data"""
    
    def __init__(self):
        self.index = None
        self.service_context = None
        self.setup_service_context()
    
    def setup_service_context(self):
        """Setup LlamaIndex service context"""
        openai_api_key = os.getenv("OPENAI_API_KEY")
        
        if openai_api_key:
            llm = OpenAI(model="gpt-3.5-turbo", api_key=openai_api_key)
            embed_model = OpenAIEmbedding(api_key=openai_api_key)
            
            self.service_context = ServiceContext.from_defaults(
                llm=llm,
                embed_model=embed_model
            )
    
    def create_model_documents(self, model_results: Dict[str, Any]) -> List[Document]:
        """Create documents from model results"""
        documents = []
        
        # Model performance document
        perf_text = f"""
        Model Performance Report
        
        Model Type: {model_results.get('model_type', 'Unknown')}
        ROC-AUC Score: {model_results.get('roc_auc', 0):.3f}
        Accuracy: {model_results.get('accuracy', 0):.3f}
        Precision: {model_results.get('precision', 0):.3f}
        Recall: {model_results.get('recall', 0):.3f}
        
        Training Date: {model_results.get('training_date', 'Unknown')}
        Dataset Size: {model_results.get('dataset_size', 0)} samples
        
        Key Insights:
        - Model shows {'good' if model_results.get('roc_auc', 0) > 0.8 else 'moderate'} predictive performance
        - Best suited for {'high-risk' if model_results.get('roc_auc', 0) > 0.85 else 'general'} credit assessment
        """
        
        documents.append(Document(
            text=perf_text,
            metadata={
                "doc_type": "model_performance",
                "model_id": model_results.get('model_id', 'unknown'),
                "score": model_results.get('roc_auc', 0)
            }
        ))
        
        # Feature importance document
        if 'feature_importance' in model_results:
            features = model_results['feature_importance']
            feature_text = "Feature Importance Analysis\n\n"
            
            for i, feature in enumerate(features[:10]):
                feature_text += f"{i+1}. {feature.get('feature', 'Unknown')}: {feature.get('importance', 0):.3f}\n"
            
            feature_text += "\nInterpretation:\n"
            feature_text += "- Higher importance scores indicate stronger predictive power\n"
            feature_text += "- Top features drive most of the model's decisions\n"
            feature_text += "- Consider these features for manual risk assessment\n"
            
            documents.append(Document(
                text=feature_text,
                metadata={
                    "doc_type": "feature_importance",
                    "model_id": model_results.get('model_id', 'unknown'),
                    "top_feature": features[0].get('feature', 'unknown') if features else 'none'
                }
            ))
        
        # Model limitations and recommendations
        limitations_text = f"""
        Model Limitations and Recommendations
        
        Known Limitations:
        - Training data may not represent all population segments
        - Model performance may degrade over time without retraining
        - Predictions are probabilistic, not deterministic
        - May exhibit bias in certain demographic groups
        
        Recommendations:
        - Retrain model quarterly with new data
        - Monitor performance metrics continuously
        - Validate predictions with domain experts
        - Consider ensemble methods for critical decisions
        
        Use Cases:
        - Primary: Credit risk assessment for loan applications
        - Secondary: Portfolio risk monitoring
        - Tertiary: Customer segmentation for financial products
        
        Not Recommended For:
        - Final lending decisions without human review
        - Regulatory compliance as sole decision factor
        - Real-time fraud detection (use specialized models)
        """
        
        documents.append(Document(
            text=limitations_text,
            metadata={
                "doc_type": "model_guidelines",
                "model_id": model_results.get('model_id', 'unknown')
            }
        ))
        
        return documents
    
    def index_model_data(self, model_results: Dict[str, Any]):
        """Index model data for querying"""
        if not self.service_context:
            print("⚠️ OpenAI API key not available, skipping indexing")
            return
        
        # Create documents
        documents = self.create_model_documents(model_results)
        
        # Create index
        self.index = VectorStoreIndex.from_documents(
            documents,
            service_context=self.service_context
        )
        
        print(f"✅ Indexed {len(documents)} model documents")
    
    def query_model_info(self, query: str) -> str:
        """Query indexed model information"""
        if not self.index:
            return "No model data indexed. Please index model results first."
        
        try:
            query_engine = self.index.as_query_engine()
            response = query_engine.query(query)
            return str(response)
        except Exception as e:
            return f"Query failed: {str(e)}"
    
    def get_model_summary(self) -> str:
        """Get comprehensive model summary"""
        summary_query = """
        Provide a comprehensive summary of the model including:
        1. Performance metrics
        2. Key features
        3. Limitations
        4. Recommended use cases
        5. Maintenance requirements
        """
        
        return self.query_model_info(summary_query)
    
    def explain_prediction(self, prediction_data: Dict[str, Any]) -> str:
        """Explain a specific prediction using indexed knowledge"""
        explanation_query = f"""
        Explain why the model made this prediction:
        
        Prediction: {prediction_data.get('prediction', 'Unknown')}
        Confidence: {prediction_data.get('confidence', 0):.2f}
        Key Features: {prediction_data.get('key_features', [])}
        
        Use the model's feature importance and performance characteristics to explain this decision.
        """
        
        return self.query_model_info(explanation_query)
    
    def suggest_improvements(self) -> str:
        """Get suggestions for model improvements"""
        improvement_query = """
        Based on the model's current performance and limitations, 
        suggest specific improvements including:
        1. Data collection strategies
        2. Feature engineering ideas
        3. Model architecture changes
        4. Validation approaches
        """
        
        return self.query_model_info(improvement_query)

class FinancialKnowledgeBase:
    """Knowledge base for financial domain expertise"""
    
    def __init__(self):
        self.indexer = ModelDocumentIndexer()
        self.financial_documents = []
        self.setup_financial_knowledge()
    
    def setup_financial_knowledge(self):
        """Setup financial domain knowledge"""
        financial_concepts = [
            {
                "title": "Credit Risk Assessment",
                "content": """
                Credit risk is the probability that a borrower will default on their loan obligations.
                
                Key Factors:
                - Payment history (35% of credit score)
                - Credit utilization (30% of credit score)
                - Length of credit history (15% of credit score)
                - Credit mix (10% of credit score)
                - New credit inquiries (10% of credit score)
                
                Risk Categories:
                - Low Risk: Default probability < 5%
                - Medium Risk: Default probability 5-15%
                - High Risk: Default probability 15-30%
                - Very High Risk: Default probability > 30%
                
                Mitigation Strategies:
                - Diversified lending portfolio
                - Regular credit monitoring
                - Dynamic pricing based on risk
                - Early intervention programs
                """
            },
            {
                "title": "Financial Ratios for Credit Analysis",
                "content": """
                Key Financial Ratios for Credit Assessment:
                
                Debt Ratios:
                - Debt-to-Income: Should be < 36% for good credit
                - Credit Utilization: Should be < 30% for optimal scores
                - Payment-to-Income: Should be < 28% for housing
                
                Liquidity Ratios:
                - Current Ratio: Current assets / Current liabilities
                - Quick Ratio: (Current assets - Inventory) / Current liabilities
                - Cash Ratio: Cash / Current liabilities
                
                Stability Indicators:
                - Employment tenure: > 2 years preferred
                - Income volatility: Lower is better
                - Savings rate: > 10% indicates financial discipline
                
                Red Flags:
                - Debt-to-income > 50%
                - Credit utilization > 80%
                - Multiple recent credit inquiries
                - Irregular income patterns
                """
            }
        ]
        
        for concept in financial_concepts:
            doc = Document(
                text=concept["content"],
                metadata={
                    "doc_type": "financial_knowledge",
                    "title": concept["title"]
                }
            )
            self.financial_documents.append(doc)
    
    def index_financial_knowledge(self):
        """Index financial domain knowledge"""
        if not self.indexer.service_context:
            print("⚠️ OpenAI API key not available, skipping financial knowledge indexing")
            return
        
        # Combine model documents with financial knowledge
        all_documents = self.financial_documents
        
        # Create comprehensive index
        self.indexer.index = VectorStoreIndex.from_documents(
            all_documents,
            service_context=self.indexer.service_context
        )
        
        print(f"✅ Indexed {len(all_documents)} financial knowledge documents")
    
    def get_financial_advice(self, user_query: str) -> str:
        """Get financial advice based on indexed knowledge"""
        return self.indexer.query_model_info(user_query)

# Global instances
model_indexer = ModelDocumentIndexer()
financial_kb = FinancialKnowledgeBase()