import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Monthly income is required')
    .min(10000, 'Minimum income is ₹10,000')
    .max(1000000, 'Maximum income is ₹10 lakhs'),
  expenses: Yup.number()
    .required('Monthly expenses are required')
    .min(5000, 'Minimum expenses is ₹5,000')
    .max(500000, 'Maximum expenses is ₹5 lakhs')
});

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const LoanEligibilityChecker = () => {
  const [result, setResult] = useState(null);

  const calculateEligibility = (values) => {
    const { income, expenses } = values;
    const disposableIncome = income - expenses;
    const maxEMI = disposableIncome * 0.5; // 50% of disposable income
    
    // Assuming 8% interest for 5 years for eligibility calculation
    const rate = 8 / 12 / 100;
    const months = 5 * 12;
    const eligibleLoanAmount = maxEMI * (Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months));
    
    const data = [
      { name: 'Available for EMI', value: maxEMI, color: '#10b981' },
      { name: 'Other Expenses', value: expenses, color: '#f59e0b' },
      { name: 'Remaining Income', value: disposableIncome - maxEMI, color: '#ef4444' }
    ];

    setResult({
      income,
      expenses,
      disposableIncome,
      maxEMI: Math.round(maxEMI),
      eligibleLoanAmount: Math.round(eligibleLoanAmount),
      data
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Loan Eligibility Checker</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">📊 Loan Eligibility Checker</h3>
          
          <Formik
            initialValues={{
              income: '',
              expenses: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateEligibility}
          >
            {({ isSubmitting, values }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Monthly Income (₹)
                  </label>
                  <Field
                    name="income"
                    type="number"
                    className="input-field"
                    placeholder="50000"
                  />
                  <ErrorMessage name="income" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Monthly Expenses (₹)
                  </label>
                  <Field
                    name="expenses"
                    type="number"
                    className="input-field"
                    placeholder="20000"
                  />
                  <ErrorMessage name="expenses" component="div" className="text-red-500 text-sm mt-1" />
                  {values.expenses >= values.income && values.income && (
                    <p className="text-red-400 text-xs mt-1">Expenses cannot exceed income</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || values.expenses >= values.income}
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
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Eligibility Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Income:</span>
                  <span className="text-blue-400 font-semibold">₹{result.income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Expenses:</span>
                  <span className="text-red-400 font-semibold">₹{result.expenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Disposable Income:</span>
                  <span className="text-green-400 font-semibold">₹{result.disposableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Max EMI (50% of disposable):</span>
                  <span className="text-purple-400 font-semibold">₹{result.maxEMI.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Eligible Loan Amount:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.eligibleLoanAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  📊 <strong>Eligibility Note:</strong> Based on 8% interest rate for 5 years. Actual eligibility may vary by lender and credit score.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Income Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={result.data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={30}
                    stroke="#ffffff"
                    strokeWidth={2}
                  >
                    {result.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '10px', color: '#ffffff' }}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanEligibilityChecker;