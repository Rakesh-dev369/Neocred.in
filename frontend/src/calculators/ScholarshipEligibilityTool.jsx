import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Annual family income is required')
    .min(50000, 'Minimum income is ₹50,000')
    .max(5000000, 'Maximum income is ₹50 lakhs'),
  marks: Yup.number()
    .required('Academic marks are required')
    .min(40, 'Minimum marks is 40%')
    .max(100, 'Maximum marks is 100%'),
  category: Yup.string()
    .required('Category is required'),
  state: Yup.string()
    .required('State is required')
});

const ScholarshipEligibilityTool = () => {
  const [result, setResult] = useState(null);

  const checkEligibility = (values) => {
    const { income, marks, category, state } = values;
    
    let eligible = false;
    let scholarships = [];
    let reason = '';
    
    // Central Government Scholarships
    if (income <= 800000 && marks >= 75) {
      eligible = true;
      scholarships.push('Merit-cum-Means Scholarship');
    }
    
    // Category-based scholarships
    if (category === 'SC/ST' && income <= 250000 && marks >= 50) {
      eligible = true;
      scholarships.push('SC/ST Scholarship');
    }
    
    if (category === 'OBC' && income <= 100000 && marks >= 60) {
      eligible = true;
      scholarships.push('OBC Scholarship');
    }
    
    // State-specific (example for major states)
    if (income <= 600000 && marks >= 70) {
      eligible = true;
      scholarships.push(`${state} State Scholarship`);
    }
    
    // Minority scholarships
    if (income <= 200000 && marks >= 50) {
      scholarships.push('Minority Scholarship (if applicable)');
    }
    
    if (!eligible) {
      if (income > 800000) reason = 'Family income exceeds eligibility limit';
      else if (marks < 50) reason = 'Academic marks below minimum requirement';
      else reason = 'Does not meet specific category requirements';
    }

    setResult({
      eligible,
      scholarships: eligible ? scholarships : [],
      reason,
      income,
      marks,
      category,
      state
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Scholarship Eligibility Tool</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-white">🎓 Scholarship Eligibility Tool</h3>
          
          <Formik
            initialValues={{
              income: '',
              marks: '',
              category: '',
              state: ''
            }}
            validationSchema={validationSchema}
            onSubmit={checkEligibility}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Annual Family Income (₹)
                  </label>
                  <Field
                    name="income"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="500000"
                  />
                  <ErrorMessage name="income" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Academic Marks (%)
                  </label>
                  <Field
                    name="marks"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="85"
                  />
                  <ErrorMessage name="marks" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Category
                  </label>
                  <Field
                    name="category"
                    as="select"
                    className="input-field"
                  >
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="SC/ST">SC/ST</option>
                    <option value="OBC">OBC</option>
                    <option value="EWS">EWS</option>
                    <option value="Minority">Minority</option>
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    State
                  </label>
                  <Field
                    name="state"
                    as="select"
                    className="input-field"
                  >
                    <option value="">Select State</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Check Eligibility
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Eligibility Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Family Income:</span>
                  <span className="text-blue-400 font-semibold">₹{result.income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Academic Marks:</span>
                  <span className="text-white font-semibold">{result.marks}%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Category:</span>
                  <span className="text-white font-semibold">{result.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">State:</span>
                  <span className="text-white font-semibold">{result.state}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Eligibility Status:</span>
                  <span className={`font-bold text-lg ${result.eligible ? 'text-green-400' : 'text-red-400'}`}>
                    {result.eligible ? '✅ Eligible' : '❌ Not Eligible'}
                  </span>
                </div>
              </div>
              
              {result.eligible ? (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                  <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">Available Scholarships:</h4>
                  <ul className="text-green-900 dark:text-green-100 text-sm space-y-1">
                    {result.scholarships.map((scholarship, index) => (
                      <li key={index}>• {scholarship}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-lg">
                  <p className="text-red-900 dark:text-red-100 text-sm">
                    <strong>Reason:</strong> {result.reason}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">General Scholarship Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-white/80">
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white">Merit-cum-Means:</strong> Income ≤ ₹8 lakhs, Marks ≥ 75%
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white">SC/ST Scholarship:</strong> Income ≤ ₹2.5 lakhs, Marks ≥ 50%
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white">OBC Scholarship:</strong> Income ≤ ₹1 lakh, Marks ≥ 60%
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white">State Scholarships:</strong> Vary by state, generally Income ≤ ₹6 lakhs
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipEligibilityTool;