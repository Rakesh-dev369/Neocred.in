import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  principal: Yup.number()
    .required('Principal amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  annualRate: Yup.number()
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(15, 'Maximum rate is 15%'),
  tenureYears: Yup.number()
    .required('Tenure is required')
    .min(1, 'Minimum tenure is 1 year')
    .max(10, 'Maximum tenure is 10 years')
});

function calculateCompoundInterest(principal, rate, time, frequency = 1) {
  const r = rate / 100;
  const n = frequency;
  return principal * Math.pow(1 + r / n, n * time);
}

function calculatePostOfficeFD({ principal, annualRate, tenureYears }) {
  const maturity = calculateCompoundInterest(principal, annualRate, tenureYears, 4); // Quarterly compounding
  return maturity;
}

const PostOfficeFDCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateFDResult = (values) => {
    const maturityAmount = calculatePostOfficeFD(values);
    const interestEarned = maturityAmount - values.principal;

    setResult({
      principal: values.principal,
      interestEarned,
      maturityAmount,
      data: [
        { name: 'Principal', amount: values.principal },
        { name: 'Interest', amount: interestEarned },
        { name: 'Maturity', amount: maturityAmount }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Post Office FD Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">Post Office FD Calculator</h3>
          
          <Formik
            initialValues={{
              principal: '',
              annualRate: '',
              tenureYears: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateFDResult}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Principal Amount (₹)
                  </label>
                  <Field
                    name="principal"
                    type="number"
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="principal" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Annual Interest Rate (%)
                  </label>
                  <Field
                    name="annualRate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="6.8"
                  />
                  <ErrorMessage name="annualRate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Quarterly compounding</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Tenure (Years)
                  </label>
                  <Field
                    name="tenureYears"
                    type="number"
                    className="input-field"
                    placeholder="5"
                  />
                  <ErrorMessage name="tenureYears" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate FD Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Principal Amount:</span>
                  <span className="text-blue-400 font-semibold">₹{result.principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Interest Earned:</span>
                  <span className="text-green-400 font-semibold">₹{result.interestEarned.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Maturity Amount:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.maturityAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">FD Breakdown</h3>
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
                    fill="url(#pofdGradient)"
                  />
                  <defs>
                    <linearGradient id="pofdGradient" x1="0" y1="0" x2="0" y2="1">
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

export default PostOfficeFDCalculator;