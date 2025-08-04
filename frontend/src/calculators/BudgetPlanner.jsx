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

  const handleAddExpense = (values, { resetForm, setSubmitting }) => {
    const updated = [...expenses, { category: values.category, amount: parseFloat(values.amount) }];
    setExpenses(updated);
    resetForm();
    setSubmitting(false);
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
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Monthly Budget Planner</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Monthly Income</h3>
            <Formik
              initialValues={{ income: income }}
              validationSchema={Yup.object({
                income: Yup.number()
                  .required('Monthly income is required')
                  .min(1000, 'Minimum income is ₹1,000')
                  .max(10000000, 'Maximum income is ₹1 crore')
              })}
              onSubmit={(values, { setSubmitting }) => {
                setIncome(values.income);
                setSubmitting(false);
              }}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                      Monthly Income (₹)
                    </label>
                    <Field
                      name="income"
                      type="number" onWheel={(e) => e.target.blur()}
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

          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Expense</h3>
            <Formik
              initialValues={{ category: '', amount: '' }}
              validationSchema={expenseSchema}
              onSubmit={handleAddExpense}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                      Amount (₹)
                    </label>
                    <Field
                      name="amount"
                      type="number" onWheel={(e) => e.target.blur()}
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

          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Current Expenses</h3>
            <ul className="divide-y divide-gray-300 dark:divide-white/20">
              {expenses.map((exp, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-3 hover:bg-gray-300 dark:hover:bg-white/5"
                >
                  <span className="text-gray-900 dark:text-white">{exp.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white">₹{exp.amount.toLocaleString()}</span>
                    <button
                      onClick={() => handleRemoveExpense(idx)}
                      className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-700 dark:text-red-300 hover:underline"
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
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Budget Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                <span className="text-gray-700 dark:text-white/80">Monthly Income:</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{income.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                <span className="text-gray-700 dark:text-white/80">Total Expenses:</span>
                <span className="text-orange-600 dark:text-orange-400 font-semibold">₹{totalExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-white/80">Remaining Balance:</span>
                <span className={`font-bold text-lg ${
                  remaining < 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
                }`}>
                  ₹{remaining.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Expense Distribution</h3>
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
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {chartData.map((_, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(val) => [`₹${val.toLocaleString()}`, 'Amount']}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    color: '#000000'
                  }}
                  labelStyle={{ color: '#000000' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '10px', color: 'currentColor' }}
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