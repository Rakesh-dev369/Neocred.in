import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const validationSchema = Yup.object({
  salary: Yup.number()
    .required('Salary is required')
    .min(15000, 'Minimum salary is ₹15,000')
    .max(200000, 'Maximum salary is ₹2 lakhs')
});

const COLORS = ['#10b981', '#ef4444', '#8b5cf6', '#f59e0b'];

const FirstSalaryPlanner = () => {
  const [result, setResult] = useState(null);

  const calculatePlan = (values) => {
    const { salary } = values;
    
    const invest = salary * 0.3;
    const expenses = salary * 0.5;
    const selfGrowth = salary * 0.1;
    const fun = salary * 0.1;
    
    const data = [
      { name: 'Invest (30%)', value: invest, color: '#10b981' },
      { name: 'Expenses (50%)', value: expenses, color: '#ef4444' },
      { name: 'Learning (10%)', value: selfGrowth, color: '#8b5cf6' },
      { name: 'Fun (10%)', value: fun, color: '#f59e0b' }
    ];

    setResult({
      salary,
      invest: Math.round(invest),
      expenses: Math.round(expenses),
      selfGrowth: Math.round(selfGrowth),
      fun: Math.round(fun),
      data
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">First Salary Planner</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">💼 First Salary Planner</h3>
          
          <Formik
            initialValues={{
              salary: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculatePlan}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Your First Salary (₹)
                  </label>
                  <Field
                    name="salary"
                    type="number"
                    className="input-field"
                    placeholder="25000"
                  />
                  <ErrorMessage name="salary" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Enter your monthly take-home salary</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Plan My Salary
                </button>
              </Form>
            )}
          </Formik>

          {/* Planning Guide */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <h4 className="text-green-300 font-semibold mb-2">💰 Invest (30%)</h4>
              <p className="text-green-100 text-sm">SIP, PPF, ELSS, Emergency Fund - Start early for compound growth</p>
            </div>
            
            <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <h4 className="text-red-300 font-semibold mb-2">🏠 Expenses (50%)</h4>
              <p className="text-red-100 text-sm">Rent, food, transport, utilities, phone - Keep it minimal initially</p>
            </div>
            
            <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
              <h4 className="text-purple-300 font-semibold mb-2">📚 Learning (10%)</h4>
              <p className="text-purple-100 text-sm">Courses, books, certifications - Invest in your skills</p>
            </div>
            
            <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-300 font-semibold mb-2">🎉 Fun (10%)</h4>
              <p className="text-yellow-100 text-sm">Entertainment, outings, hobbies - Enjoy your hard work</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Salary Allocation</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Salary:</span>
                  <span className="text-blue-400 font-semibold">₹{result.salary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">💰 Invest (30%):</span>
                  <span className="text-green-400 font-bold text-lg">₹{result.invest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">🏠 Expenses (50%):</span>
                  <span className="text-red-400 font-bold text-lg">₹{result.expenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">📚 Learning (10%):</span>
                  <span className="text-purple-400 font-bold text-lg">₹{result.selfGrowth.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">🎉 Fun (10%):</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.fun.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  💼 <strong>First Job Tip:</strong> Start investing early, even small amounts. Avoid lifestyle inflation and build good financial habits.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Salary Distribution</h3>
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

export default FirstSalaryPlanner;