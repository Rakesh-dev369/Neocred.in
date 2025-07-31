import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Monthly income is required')
    .min(10000, 'Minimum income is ₹10,000')
    .max(1000000, 'Maximum income is ₹10 lakhs')
});

const COLORS = ['#ef4444', '#f59e0b', '#10b981'];

const BudgetRuleCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateBudget = (values) => {
    const { income } = values;
    
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;
    
    const data = [
      { name: 'Needs (50%)', value: needs, color: '#ef4444' },
      { name: 'Wants (30%)', value: wants, color: '#f59e0b' },
      { name: 'Savings (20%)', value: savings, color: '#10b981' }
    ];

    setResult({
      income,
      needs: Math.round(needs),
      wants: Math.round(wants),
      savings: Math.round(savings),
      data
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">50/30/20 Rule Budgeter</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">📊 50/30/20 Budget Calculator</h3>
          
          <Formik
            initialValues={{
              income: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateBudget}
          >
            {({ isSubmitting }) => (
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
                  <p className="text-xs text-gray-400 mt-1">Enter your after-tax monthly income</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Budget
                </button>
              </Form>
            )}
          </Formik>

          {/* Budget Rule Explanation */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <h4 className="text-red-300 font-semibold mb-2">🧾 Needs (50%)</h4>
              <p className="text-red-100 text-sm">Rent, groceries, utilities, minimum debt payments, insurance</p>
            </div>
            
            <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-300 font-semibold mb-2">🎯 Wants (30%)</h4>
              <p className="text-yellow-100 text-sm">Dining out, entertainment, hobbies, shopping, subscriptions</p>
            </div>
            
            <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <h4 className="text-green-300 font-semibold mb-2">💰 Savings (20%)</h4>
              <p className="text-green-100 text-sm">Emergency fund, investments, retirement, extra debt payments</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Budget Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Income:</span>
                  <span className="text-blue-400 font-semibold">₹{result.income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">🧾 Needs (50%):</span>
                  <span className="text-red-400 font-bold text-lg">₹{result.needs.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">🎯 Wants (30%):</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.wants.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">💰 Savings (20%):</span>
                  <span className="text-green-400 font-bold text-lg">₹{result.savings.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  📊 <strong>Budget Tip:</strong> The 50/30/20 rule is a guideline. Adjust percentages based on your financial goals and situation.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Budget Distribution</h3>
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

export default BudgetRuleCalculator;