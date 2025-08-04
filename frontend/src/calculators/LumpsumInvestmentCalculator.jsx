import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Investment amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  rate: Yup.number()
    .required('Annual return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%'),
  years: Yup.number()
    .required('Investment duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(50, 'Maximum duration is 50 years')
});

const LumpsumInvestmentCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateLumpsum = (values) => {
    const { amount, rate, years } = values;
    const r = rate / 100;
    const futureValue = amount * Math.pow(1 + r, years);
    const totalReturns = futureValue - amount;
    
    // Calculate CAGR
    const cagr = ((futureValue / amount) ** (1 / years) - 1) * 100;

    setResult({
      principal: amount,
      futureValue: Math.round(futureValue),
      totalReturns: Math.round(totalReturns),
      cagr: cagr.toFixed(2),
      data: [
        { name: 'Principal', amount: amount },
        { name: 'Returns', amount: Math.round(totalReturns) },
        { name: 'Future Value', amount: Math.round(futureValue) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Lumpsum Investment Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Lumpsum Investment Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              rate: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateLumpsum(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Investment Amount (₹)
                  </label>
                  <Field
                    name="amount"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <Field
                    name="rate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="12"
                  />
                  <ErrorMessage name="rate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Investment Duration (Years)
                  </label>
                  <Field
                    name="years"
                    type="number" onWheel={(e) => e.target.blur()}
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
                  Calculate Lumpsum Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Principal Amount:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Returns:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.totalReturns.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">CAGR:</span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">{result.cagr}%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Future Value:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">₹{result.futureValue.toLocaleString()}</span>
                </div>
              
              <div className="mt-6 p-4 bg-cyan-100 dark:bg-cyan-900/20 border border-cyan-300 dark:border-cyan-500/30 rounded-lg">
                <p className="text-cyan-800 dark:text-cyan-900 dark:text-cyan-100 text-sm">
                  💰 <strong>Lumpsum Tip:</strong> Lumpsum investments work best when markets are low. Consider rupee cost averaging for volatile markets.
                </p>
              </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Investment Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                  />
                  <YAxis 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Bar 
                    dataKey="amount" 
                    radius={[4, 4, 0, 0]}
                    fill="url(#lumpsumGradient)"
                  />
                  <defs>
                    <linearGradient id="lumpsumGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#0891b2" />
                      <stop offset="100%" stopColor="#0e7490" />
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

export default LumpsumInvestmentCalculator;