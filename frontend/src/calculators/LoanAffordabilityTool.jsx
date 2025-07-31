import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  emi: Yup.number()
    .required('Affordable EMI is required')
    .min(1000, 'Minimum EMI is ₹1,000')
    .max(200000, 'Maximum EMI is ₹2 lakhs'),
  interest: Yup.number()
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(25, 'Maximum rate is 25%'),
  years: Yup.number()
    .required('Tenure is required')
    .min(1, 'Minimum tenure is 1 year')
    .max(30, 'Maximum tenure is 30 years')
});

const LoanAffordabilityTool = () => {
  const [result, setResult] = useState(null);

  const calculateAffordability = (values) => {
    const { emi, interest, years } = values;
    const months = years * 12;
    const monthlyRate = interest / 12 / 100;
    
    const loanAmount = emi * (Math.pow(1 + monthlyRate, months) - 1) /
                       (monthlyRate * Math.pow(1 + monthlyRate, months));
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;

    setResult({
      emi,
      loanAmount: Math.round(loanAmount),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      data: [
        { name: 'Loan Amount', amount: Math.round(loanAmount) },
        { name: 'Total Interest', amount: Math.round(totalInterest) },
        { name: 'Total Payment', amount: Math.round(totalAmount) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Loan Affordability Tool</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">💰 Loan Affordability Tool</h3>
          
          <Formik
            initialValues={{
              emi: '',
              interest: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateAffordability}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Affordable Monthly EMI (₹)
                  </label>
                  <Field
                    name="emi"
                    type="number"
                    className="input-field"
                    placeholder="15000"
                  />
                  <ErrorMessage name="emi" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Interest Rate (% per annum)
                  </label>
                  <Field
                    name="interest"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="8"
                  />
                  <ErrorMessage name="interest" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Loan Tenure (Years)
                  </label>
                  <Field
                    name="years"
                    type="number"
                    className="input-field"
                    placeholder="5"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Loan Amount
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Affordability Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly EMI:</span>
                  <span className="text-blue-400 font-semibold">₹{result.emi.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Loan Amount You Can Afford:</span>
                  <span className="text-green-400 font-bold text-xl">₹{result.loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Interest:</span>
                  <span className="text-red-400 font-semibold">₹{result.totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Total Payment:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.totalAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-100 text-sm">
                  💰 <strong>Affordability Tip:</strong> Ensure your EMI doesn't exceed 40-50% of your monthly income for comfortable repayment.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Loan Breakdown</h3>
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
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
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
                    fill="url(#affordabilityGradient)"
                  />
                  <defs>
                    <linearGradient id="affordabilityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#6d28d9" />
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

export default LoanAffordabilityTool;