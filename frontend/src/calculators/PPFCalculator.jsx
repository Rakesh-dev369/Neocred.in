import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  yearlyInvestment: Yup.number()
    .required('Yearly investment is required')
    .min(500, 'Minimum amount is ₹500')
    .max(150000, 'Maximum amount is ₹1,50,000'),
  annualRate: Yup.number()
    .min(1, 'Minimum rate is 1%')
    .max(15, 'Maximum rate is 15%'),
  tenureYears: Yup.number()
    .min(15, 'PPF has a minimum lock-in period of 15 years')
    .max(50, 'Maximum tenure is 50 years')
});

function calculatePPF({ yearlyInvestment, annualRate = 7.1, tenureYears = 15 }) {
  let total = 0;
  for (let i = 0; i < tenureYears; i++) {
    total += yearlyInvestment * Math.pow(1 + annualRate / 100, tenureYears - i);
  }
  return total;
}

const PPFCalculator = () => {
  const [result, setResult] = useState(null);

  const calculatePPFResult = (values) => {
    const maturityAmount = calculatePPF(values);
    const totalInvested = values.yearlyInvestment * values.tenureYears;
    const interestEarned = maturityAmount - totalInvested;

    setResult({
      totalInvested,
      interestEarned,
      maturityAmount,
      data: [
        { name: 'Invested', amount: totalInvested },
        { name: 'Interest', amount: interestEarned },
        { name: 'Maturity', amount: maturityAmount }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 p-6 rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">PPF Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">PPF Calculator</h3>
          
          <Formik
            initialValues={{
              yearlyInvestment: '',
              annualRate: 7.1,
              tenureYears: 15
            }}
            validationSchema={validationSchema}
            onSubmit={calculatePPFResult}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Yearly Investment (₹)
                  </label>
                  <Field
                    name="yearlyInvestment"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="150000"
                  />
                  <ErrorMessage name="yearlyInvestment" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Annual Interest Rate (%)
                  </label>
                  <Field
                    name="annualRate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="7.1"
                  />
                  <ErrorMessage name="annualRate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Current PPF rate: 7.1%</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Tenure (Years)
                  </label>
                  <Field
                    name="tenureYears"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="15"
                  />
                  <ErrorMessage name="tenureYears" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Minimum: 15 years (lock-in period)</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate PPF Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Invested:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.totalInvested.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Interest Earned:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.interestEarned.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Maturity Amount:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">₹{result.maturityAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">PPF Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    className="text-gray-900 dark:text-white"
                  />
                  <YAxis 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                    className="text-gray-900 dark:text-white"
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
                    fill="url(#ppfGradient)"
                  />
                  <defs>
                    <linearGradient id="ppfGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#b45309" />
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

export default PPFCalculator;