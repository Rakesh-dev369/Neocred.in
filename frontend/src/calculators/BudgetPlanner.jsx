import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#8b5cf6", "#ec4899", "#64748b"];

const expenseSchema = Yup.object({
  category: Yup.string().required('Category is required'),
  amount: Yup.number()
    .required('Amount is required')
    .min(1, 'Minimum amount is ₹1')
});

const BudgetPlanner = () => {
  const [income, setIncome] = useState(50000);
  const [expenses, setExpenses] = useState([
    { category: "Rent", amount: 15000 },
    { category: "Food", amount: 8000 },
    { category: "Transport", amount: 3000 },
  ]);

  const handleAddExpense = (values, { resetForm }) => {
    const updated = [...expenses, { category: values.category, amount: parseFloat(values.amount) }];
    setExpenses(updated);
    resetForm();
  };

  const handleRemoveExpense = (index) => {
    const updated = [...expenses];
    updated.splice(index, 1);
    setExpenses(updated);
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = income - totalExpenses;
  
  // Create chart data including available balance
  const chartData = remaining > 0 
    ? [...expenses, { category: "Available Balance", amount: remaining }]
    : expenses;

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Monthly Budget Planner</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="glass-card">
            <h3 className="text-lg font-semibold mb-4 text-white">Monthly Income</h3>
            <Formik
              initialValues={{ income: income }}
              validationSchema={Yup.object({
                income: Yup.number()
                  .required('Monthly income is required')
                  .min(1000, 'Minimum income is ₹1,000')
                  .max(10000000, 'Maximum income is ₹1 crore')
              })}
              onSubmit={(values) => setIncome(values.income)}
              enableReinitialize
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
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    Update Income
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="glass-card">
            <h3 className="text-lg font-semibold mb-4 text-white">Add New Expense</h3>
            <Formik
              initialValues={{ category: '', amount: '' }}
              validationSchema={expenseSchema}
              onSubmit={handleAddExpense}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Category
                    </label>
                    <Field
                      name="category"
                      type="text"
                      className="input-field"
                      placeholder="Expense Category"
                    />
                    <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      Amount (₹)
                    </label>
                    <Field
                      name="amount"
                      type="number"
                      className="input-field"
                      placeholder="Amount"
                    />
                    <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    Add Expense
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="glass-card">
            <h3 className="text-lg font-semibold mb-4 text-white">Current Expenses</h3>
            <ul className="divide-y divide-white/20">
              {expenses.map((exp, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-3 hover:bg-white/5"
                >
                  <span className="text-white">{exp.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">₹{exp.amount.toLocaleString()}</span>
                    <button
                      onClick={() => handleRemoveExpense(idx)}
                      className="text-sm text-red-400 hover:text-red-300 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white mb-4">Budget Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/80">Monthly Income:</span>
                <span className="text-blue-400 font-semibold">₹{income.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/80">Total Expenses:</span>
                <span className="text-orange-400 font-semibold">₹{totalExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/80">Remaining Balance:</span>
                <span className={`font-bold text-lg ${
                  remaining < 0 ? "text-red-400" : "text-green-400"
                }`}>
                  ₹{remaining.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Expense Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={30}
                  fill="#8884d8"
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                  stroke="#ffffff"
                  strokeWidth={2}
                >
                  {chartData.map((_, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(val) => [`₹${val.toLocaleString()}`, 'Amount']}
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#ffffff !important',
                    fontSize: '14px',
                    padding: '8px 12px'
                  }}
                  labelStyle={{
                    color: '#ffffff !important',
                    fontWeight: 'bold'
                  }}
                  itemStyle={{
                    color: '#ffffff !important'
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
      </div>
    </div>
  );
};

export default BudgetPlanner;