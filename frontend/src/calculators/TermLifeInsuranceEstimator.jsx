import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  age: Yup.number()
    .required('Age is required')
    .min(18, 'Minimum age is 18 years')
    .max(65, 'Maximum age is 65 years'),
  coverage: Yup.number()
    .required('Coverage amount is required')
    .min(100000, 'Minimum coverage is ₹1 lakh')
    .max(100000000, 'Maximum coverage is ₹10 crores'),
  term: Yup.number()
    .required('Term is required')
    .min(5, 'Minimum term is 5 years')
    .max(40, 'Maximum term is 40 years')
});

const TermLifeInsuranceEstimator = () => {
  const [result, setResult] = useState(null);

  const calculatePremium = (values) => {
    const { age, coverage, term } = values;
    
    // Basic premium calculation formula
    const basePremium = (coverage / 1000) * 0.3 * (term / 10);
    const ageFactor = age * 5;
    const annualPremium = basePremium + ageFactor;
    const totalPremiums = annualPremium * term;
    
    setResult({
      age,
      coverage,
      term,
      annualPremium: Math.round(annualPremium),
      totalPremiums: Math.round(totalPremiums),
      data: [
        { name: 'Annual Premium', amount: Math.round(annualPremium) },
        { name: 'Total Premiums', amount: Math.round(totalPremiums) },
        { name: 'Coverage Amount', amount: coverage }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Term Life Insurance Estimator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-white">🧬 Term Life Insurance Estimator</h3>
          
          <Formik
            initialValues={{
              age: '',
              coverage: '',
              term: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculatePremium}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Age (Years)
                  </label>
                  <Field
                    name="age"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="30"
                  />
                  <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Coverage Amount (₹)
                  </label>
                  <Field
                    name="coverage"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="5000000"
                  />
                  <ErrorMessage name="coverage" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Policy Term (Years)
                  </label>
                  <Field
                    name="term"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="30"
                  />
                  <ErrorMessage name="term" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Premium
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Premium Estimate</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Age:</span>
                  <span className="text-white font-semibold">{result.age} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Coverage Amount:</span>
                  <span className="text-blue-400 font-semibold">₹{result.coverage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Policy Term:</span>
                  <span className="text-white font-semibold">{result.term} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Annual Premium:</span>
                  <span className="text-green-400 font-bold text-xl">₹{result.annualPremium.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Total Premiums:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.totalPremiums.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 rounded-lg">
                <p className="text-blue-900 dark:text-blue-100 text-sm">
                  🧬 <strong>Life Insurance Tip:</strong> Ideal coverage is 10-15 times your annual income. Consider tax benefits under Section 80C.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Insurance Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#ffffff', fontSize: 10 }}
                    axisLine={{ stroke: '#ffffff', strokeWidth: 1 }}
                  />
                  <YAxis 
                    tick={{ fill: '#ffffff', fontSize: 10 }}
                    axisLine={{ stroke: '#ffffff', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/100000).toFixed(0)}L`}
                  />
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Bar 
                    dataKey="amount" 
                    radius={[4, 4, 0, 0]}
                    fill="url(#lifeInsuranceGradient)"
                  />
                  <defs>
                    <linearGradient id="lifeInsuranceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermLifeInsuranceEstimator;