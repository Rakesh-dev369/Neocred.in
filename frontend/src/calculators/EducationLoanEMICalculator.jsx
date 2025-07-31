import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Loan amount is required')
    .min(50000, 'Minimum amount is ₹50,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  interest: Yup.number()
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(20, 'Maximum rate is 20%'),
  years: Yup.number()
    .required('Tenure is required')
    .min(1, 'Minimum tenure is 1 year')
    .max(15, 'Maximum tenure is 15 years')
});

const EducationLoanEMICalculator = () => {
  const [result, setResult] = useState(null);

  const calculateEMI = (values) => {
    const { amount, interest, years } = values;
    const months = years * 12;
    const monthlyRate = interest / 12 / 100;
    
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - amount;

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: amount,
      data: [
        { name: 'Principal', amount: amount },
        { name: 'Interest', amount: Math.round(totalInterest) },
        { name: 'Total Amount', amount: Math.round(totalAmount) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Education Loan EMI Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">🎓 Education Loan EMI Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              interest: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateEMI}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Loan Amount (₹)
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    className="input-field"
                    placeholder="500000"
                  />
                  <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
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
                    placeholder="9"
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
                  Calculate EMI
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">EMI Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly EMI:</span>
                  <span className="text-blue-400 font-bold text-xl">₹{result.emi.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Principal Amount:</span>
                  <span className="text-green-400 font-semibold">₹{result.principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Interest:</span>
                  <span className="text-red-400 font-semibold">₹{result.totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Total Amount:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.totalAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  🎓 <strong>Student Tip:</strong> Consider moratorium period and tax benefits under Section 80E for education loan interest.
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
                    fill="url(#eduLoanGradient)"
                  />
                  <defs>
                    <linearGradient id="eduLoanGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
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

export default EducationLoanEMICalculator;