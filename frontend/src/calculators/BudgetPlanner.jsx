import React, { useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { CalculatorLayout, AnimatedInput, AnimatedResults, AnimatedChart, AnimatedButton } from '../components/calculator';

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
  const [isCalculating, setIsCalculating] = useState(false);
  const [status, setStatus] = useState(null);

  const handleAddExpense = async (values, { resetForm, setSubmitting }) => {
    setIsCalculating(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const updated = [...expenses, { category: values.category, amount: parseFloat(values.amount) }];
    setExpenses(updated);
    setStatus({ type: 'success', message: `Added ${values.category} expense successfully!` });
    setTimeout(() => setStatus(null), 2000);
    resetForm();
    setSubmitting(false);
    setIsCalculating(false);
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
    <CalculatorLayout 
      title="Monthly Budget Planner" 
      status={status}
      showProgress={true}
      steps={['Set Income', 'Add Expenses', 'View Budget']}
      currentStep={expenses.length > 0 ? 2 : income > 0 ? 1 : 0}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Monthly Income
            </motion.h3>
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
                  <AnimatedInput
                    name="income"
                    label="Monthly Income"
                    placeholder="50000"
                    prefix="₹"
                  />
                  <AnimatedButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    variant="primary"
                  >
                    Update Income
                  </AnimatedButton>
                </Form>
              )}
            </Formik>
          </div>

          <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Add New Expense
            </motion.h3>
            <Formik
              initialValues={{ category: '', amount: '' }}
              validationSchema={expenseSchema}
              onSubmit={handleAddExpense}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <AnimatedInput
                    name="category"
                    label="Category"
                    type="text"
                    placeholder="Expense Category"
                    prefix=""
                  />
                  <AnimatedInput
                    name="amount"
                    label="Amount"
                    placeholder="Amount"
                    prefix="₹"
                  />
                  <AnimatedButton
                    type="submit"
                    loading={isCalculating}
                    disabled={isSubmitting}
                    className="w-full"
                    variant="success"
                  >
                    {isCalculating ? 'Adding...' : 'Add Expense'}
                  </AnimatedButton>
                </Form>
              )}
            </Formik>
          </div>

          <div className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl">
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Current Expenses
            </motion.h3>
            <div className="divide-y divide-gray-300 dark:divide-white/20">
              <AnimatePresence>
                {expenses.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-center py-3 hover:bg-gray-300 dark:hover:bg-white/5 rounded-lg px-2"
                  >
                    <span className="text-gray-900 dark:text-white">{exp.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900 dark:text-white">₹{exp.amount.toLocaleString()}</span>
                      <motion.button
                        onClick={() => handleRemoveExpense(idx)}
                        className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 hover:underline"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Delete
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedResults 
            results={{
              monthlyIncome: income,
              totalExpenses: totalExpenses,
              remainingBalance: remaining
            }} 
            isVisible={true} 
            title="Budget Summary"
          />
          
          <AnimatedChart
            data={chartData}
            type="pie"
            title="Expense Distribution"
            colors={COLORS}
            height={300}
          />
        </motion.div>
      </div>
    </CalculatorLayout>
  );
};

export default BudgetPlanner;