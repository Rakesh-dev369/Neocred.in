import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Monthly income is required')
    .min(10000, 'Minimum income is ₹10,000')
    .max(1000000, 'Maximum income is ₹10 lakhs')
});

const COLORS = ['#ef4444', '#f59e0b', '#10b981'];

const BudgetRuleCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateBudget = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
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
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="50/30/20 Rule Budgeter" 
      description="Smart income allocation strategy"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">📊 50/30/20 Budget Calculator</h3>
          
          <Formik
            initialValues={{
              income: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateBudget(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="income"
                  label="Monthly Income (₹)"
                  type="number"
                  placeholder="50000"
                  helpText="Enter your after-tax monthly income"
                  icon="💰"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Budget'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Budget Rule Explanation */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-lg">
              <h4 className="text-red-700 dark:text-red-300 font-semibold mb-2">🧾 Needs (50%)</h4>
              <p className="text-red-900 dark:text-red-100 text-sm">Rent, groceries, utilities, minimum debt payments, insurance</p>
            </div>
            
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-700 dark:text-yellow-300 font-semibold mb-2">🎯 Wants (30%)</h4>
              <p className="text-yellow-900 dark:text-yellow-100 text-sm">Dining out, entertainment, hobbies, shopping, subscriptions</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
              <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">💰 Savings (20%)</h4>
              <p className="text-green-900 dark:text-green-100 text-sm">Emergency fund, investments, retirement, extra debt payments</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Budget Breakdown"
              variant="info"
              results={[
                { label: 'Monthly Income', value: `₹${result.income.toLocaleString()}`, color: 'blue' },
                { label: '🧾 Needs (50%)', value: `₹${result.needs.toLocaleString()}`, color: 'red' },
                { label: '🎯 Wants (30%)', value: `₹${result.wants.toLocaleString()}`, color: 'yellow' },
                { label: '💰 Savings (20%)', value: `₹${result.savings.toLocaleString()}`, color: 'green', highlight: true }
              ]}
              tip={{
                icon: '📊',
                text: 'The 50/30/20 rule is a guideline. Adjust percentages based on your financial goals and situation.'
              }}
            />

            <AnimatedChart
              title="Budget Distribution"
              data={result.data}
              type="pie"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default BudgetRuleCalculator;