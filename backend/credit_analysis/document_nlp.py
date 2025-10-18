"""Document NLP for OCR and Text Analysis"""
import pytesseract
from PIL import Image
import PyPDF2
import cv2
import numpy as np
from transformers import pipeline, AutoTokenizer, AutoModel
import torch
import re
from typing import Dict, Any, List, Optional
import io
import base64

class DocumentOCR:
    """OCR processing for document analysis"""
    
    def __init__(self):
        # Configure tesseract path if needed
        # pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
        pass
    
    def preprocess_image(self, image: np.ndarray) -> np.ndarray:
        """Preprocess image for better OCR"""
        # Convert to grayscale
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        
        # Apply Gaussian blur
        blurred = cv2.GaussianBlur(gray, (5, 5), 0)
        
        # Apply threshold
        _, thresh = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        
        return thresh
    
    def extract_text_from_image(self, image_path: str) -> str:
        """Extract text from image using OCR"""
        try:
            # Load image
            image = cv2.imread(image_path)
            
            # Preprocess
            processed = self.preprocess_image(image)
            
            # OCR
            text = pytesseract.image_to_string(processed, lang='eng')
            
            return text.strip()
        except Exception as e:
            return f"OCR Error: {str(e)}"
    
    def extract_text_from_pdf(self, pdf_path: str) -> str:
        """Extract text from PDF"""
        try:
            text = ""
            with open(pdf_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                for page in pdf_reader.pages:
                    text += page.extract_text() + "\n"
            
            return text.strip()
        except Exception as e:
            return f"PDF Error: {str(e)}"
    
    def extract_from_base64(self, base64_data: str) -> str:
        """Extract text from base64 encoded image"""
        try:
            # Decode base64
            image_data = base64.b64decode(base64_data)
            image = Image.open(io.BytesIO(image_data))
            
            # Convert PIL to OpenCV
            image_cv = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
            
            # Preprocess and OCR
            processed = self.preprocess_image(image_cv)
            text = pytesseract.image_to_string(processed, lang='eng')
            
            return text.strip()
        except Exception as e:
            return f"Base64 OCR Error: {str(e)}"

class FinancialDocumentAnalyzer:
    """Analyze financial documents using NLP"""
    
    def __init__(self):
        self.ocr = DocumentOCR()
        # Initialize transformer models (lightweight versions)
        try:
            self.classifier = pipeline("text-classification", 
                                     model="distilbert-base-uncased-finetuned-sst-2-english")
            self.ner = pipeline("ner", model="dbmdz/bert-large-cased-finetuned-conll03-english")
        except:
            self.classifier = None
            self.ner = None
    
    def extract_financial_entities(self, text: str) -> Dict[str, List[str]]:
        """Extract financial entities from text"""
        entities = {
            'amounts': [],
            'dates': [],
            'account_numbers': [],
            'names': [],
            'organizations': []
        }
        
        # Extract amounts (currency patterns)
        amount_patterns = [
            r'₹\s*[\d,]+\.?\d*',
            r'Rs\.?\s*[\d,]+\.?\d*',
            r'INR\s*[\d,]+\.?\d*',
            r'\$\s*[\d,]+\.?\d*'
        ]
        
        for pattern in amount_patterns:
            amounts = re.findall(pattern, text, re.IGNORECASE)
            entities['amounts'].extend(amounts)
        
        # Extract dates
        date_patterns = [
            r'\d{1,2}[/-]\d{1,2}[/-]\d{2,4}',
            r'\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{2,4}',
            r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{2,4}'
        ]
        
        for pattern in date_patterns:
            dates = re.findall(pattern, text, re.IGNORECASE)
            entities['dates'].extend(dates)
        
        # Extract account numbers
        account_patterns = [
            r'\b\d{9,18}\b',  # Bank account numbers
            r'\b\d{4}\s*\d{4}\s*\d{4}\s*\d{4}\b'  # Card numbers (masked)
        ]
        
        for pattern in account_patterns:
            accounts = re.findall(pattern, text)
            entities['account_numbers'].extend(accounts)
        
        # Use NER if available
        if self.ner:
            try:
                ner_results = self.ner(text)
                for entity in ner_results:
                    if entity['entity'] == 'B-PER' or entity['entity'] == 'I-PER':
                        entities['names'].append(entity['word'])
                    elif entity['entity'] == 'B-ORG' or entity['entity'] == 'I-ORG':
                        entities['organizations'].append(entity['word'])
            except:
                pass
        
        return entities
    
    def analyze_bank_statement(self, text: str) -> Dict[str, Any]:
        """Analyze bank statement text"""
        analysis = {
            'document_type': 'bank_statement',
            'entities': self.extract_financial_entities(text),
            'transactions': [],
            'summary': {}
        }
        
        # Extract transaction patterns
        transaction_patterns = [
            r'(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\s+([A-Za-z\s]+)\s+(₹?\s*[\d,]+\.?\d*)',
            r'(\d{1,2}\s+\w{3}\s+\d{2,4})\s+([A-Za-z\s]+)\s+(₹?\s*[\d,]+\.?\d*)'
        ]
        
        for pattern in transaction_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                analysis['transactions'].append({
                    'date': match[0],
                    'description': match[1].strip(),
                    'amount': match[2]
                })
        
        # Calculate summary
        amounts = []
        for amount_str in analysis['entities']['amounts']:
            # Clean and convert amount
            clean_amount = re.sub(r'[₹Rs\.,\s]', '', amount_str)
            try:
                amounts.append(float(clean_amount))
            except:
                continue
        
        if amounts:
            analysis['summary'] = {
                'total_transactions': len(analysis['transactions']),
                'total_amount': sum(amounts),
                'average_amount': np.mean(amounts),
                'max_amount': max(amounts),
                'min_amount': min(amounts)
            }
        
        return analysis
    
    def analyze_income_document(self, text: str) -> Dict[str, Any]:
        """Analyze income documents (salary slips, etc.)"""
        analysis = {
            'document_type': 'income_document',
            'entities': self.extract_financial_entities(text),
            'income_details': {},
            'deductions': {}
        }
        
        # Extract salary components
        salary_patterns = {
            'basic_salary': r'basic\s*salary\s*:?\s*(₹?\s*[\d,]+\.?\d*)',
            'gross_salary': r'gross\s*salary\s*:?\s*(₹?\s*[\d,]+\.?\d*)',
            'net_salary': r'net\s*salary\s*:?\s*(₹?\s*[\d,]+\.?\d*)',
            'hra': r'hra\s*:?\s*(₹?\s*[\d,]+\.?\d*)',
            'pf': r'pf\s*:?\s*(₹?\s*[\d,]+\.?\d*)',
            'tax': r'tax\s*:?\s*(₹?\s*[\d,]+\.?\d*)'
        }
        
        for component, pattern in salary_patterns.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                analysis['income_details'][component] = matches[0]
        
        return analysis
    
    def analyze_kyc_document(self, text: str) -> Dict[str, Any]:
        """Analyze KYC documents"""
        analysis = {
            'document_type': 'kyc_document',
            'entities': self.extract_financial_entities(text),
            'document_info': {},
            'verification_status': 'pending'
        }
        
        # Extract document-specific patterns
        kyc_patterns = {
            'pan_number': r'[A-Z]{5}\d{4}[A-Z]',
            'aadhaar_number': r'\d{4}\s*\d{4}\s*\d{4}',
            'driving_license': r'[A-Z]{2}\d{2}\s*\d{11}',
            'passport_number': r'[A-Z]\d{7}'
        }
        
        for doc_type, pattern in kyc_patterns.items():
            matches = re.findall(pattern, text)
            if matches:
                analysis['document_info'][doc_type] = matches[0]
                analysis['verification_status'] = 'detected'
        
        return analysis
    
    def process_document(self, file_path: str, document_type: str = 'auto') -> Dict[str, Any]:
        """Process document end-to-end"""
        # Extract text
        if file_path.lower().endswith('.pdf'):
            text = self.ocr.extract_text_from_pdf(file_path)
        else:
            text = self.ocr.extract_text_from_image(file_path)
        
        # Analyze based on type
        if document_type == 'auto':
            # Auto-detect document type
            if 'bank' in text.lower() or 'statement' in text.lower():
                return self.analyze_bank_statement(text)
            elif 'salary' in text.lower() or 'pay slip' in text.lower():
                return self.analyze_income_document(text)
            elif any(pattern in text.upper() for pattern in ['PAN', 'AADHAAR', 'PASSPORT']):
                return self.analyze_kyc_document(text)
        
        elif document_type == 'bank_statement':
            return self.analyze_bank_statement(text)
        elif document_type == 'income':
            return self.analyze_income_document(text)
        elif document_type == 'kyc':
            return self.analyze_kyc_document(text)
        
        # Default analysis
        return {
            'document_type': 'unknown',
            'raw_text': text,
            'entities': self.extract_financial_entities(text)
        }

# Global document analyzer
document_analyzer = FinancialDocumentAnalyzer()