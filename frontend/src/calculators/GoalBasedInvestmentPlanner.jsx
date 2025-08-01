import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  goalAmount: Yup.number()
    .required('Goal amount is required')
    .min(10000, 'Minimum goal amount is ₹10,000')
    .max(100000000, 'Maximum goal amount is ₹10 crores'),
  years: Yup.number()
    .required('Investment duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(50, 'Maximum duration is 50 years'),
  returnRate: Yup.number()
    .required('Expected return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%')
});

const GoalBasedInvestmentPlanner = () => {
  const [result, setResult] = useState(null);

  const calculateGoalInvestment = (values) => {
    const { goalAmount, years, returnRate } = values;
    const r = returnRate / 100 / 12; // Monthly rate
    const n = years * 12; // Total months
    
    const monthlyInvestment = (goalAmount * r) / (Math.pow(1 + r, n) - 1);
    const totalInvestment = monthlyInvestment * n;
    
    setResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalInvestment: Math.round(totalInvestment),
      goalAmount: goalAmount,
      data: [
        { name: 'Total Investment', amount: Math.round(totalInvestment) },
        { name: 'Goal Amount', amount: goalAmount }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Goal-Based Investment Planner</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🎯 Goal-Based Investment Planner</h3>
          
          <Formik
            initialValues={{
              goalAmount: '',
              years: '',
              returnRate: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateGoalInvestment}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Goal Amount (₹)
                  </label>
                  <Field
                    name="goalAmount"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="1000000"
                  />
                  <ErrorMessage name="goalAmount" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Years to Achieve Goal
                  </label>
                  <Field
                    name="years"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="10"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <Field
                    name="returnRate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="12"
                  />
                  <ErrorMessage name="returnRate" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Monthly Investment
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investment Plan</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Monthly Investment Required:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.monthlyInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Investment:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Goal Amount:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">₹{result.goalAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <p className="text-green-900 dark:text-green-100 text-sm">
                  💡 <strong>Investment Strategy:</strong> Invest ₹{result.monthlyInvestment.toLocaleString()} monthly 
                  to reach your goal of ₹{result.goalAmount.toLocaleString()}.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Goal vs Investment</h3>
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
                    fill="url(#goalGradient)"
                  />
                  <defs>
                    <linearGradient id="goalGradient" x1="0" y1="0" x2="0" y2="1">
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

export default GoalBasedInvestmentPlanner;