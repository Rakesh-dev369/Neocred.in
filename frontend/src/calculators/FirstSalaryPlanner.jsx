import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  salary: Yup.number()
    .required('Salary is required')
    .min(15000, 'Minimum salary is ₹15,000')
    .max(200000, 'Maximum salary is ₹2 lakhs')
});

const COLORS = ['#10b981', '#ef4444', '#8b5cf6', '#f59e0b'];

const FirstSalaryPlanner = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculatePlan = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
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
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="First Salary Planner" 
      description="Smart financial planning for your first job"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💼 First Salary Planner</h3>
          
          <Formik
            initialValues={{
              salary: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculatePlan(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="salary"
                  label="Your First Salary (₹)"
                  type="number"
                  placeholder="25000"
                  helpText="Enter your monthly take-home salary"
                  icon="💵"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Planning...' : 'Plan My Salary'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Planning Guide */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
              <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">💰 Invest (30%)</h4>
              <p className="text-green-900 dark:text-green-100 text-sm">SIP, PPF, ELSS, Emergency Fund - Start early for compound growth</p>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-lg">
              <h4 className="text-red-700 dark:text-red-300 font-semibold mb-2">🏠 Expenses (50%)</h4>
              <p className="text-red-900 dark:text-red-100 text-sm">Rent, food, transport, utilities, phone - Keep it minimal initially</p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/30 rounded-lg">
              <h4 className="text-purple-700 dark:text-purple-300 font-semibold mb-2">📚 Learning (10%)</h4>
              <p className="text-purple-900 dark:text-purple-100 text-sm">Courses, books, certifications - Invest in your skills</p>
            </div>
            
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-700 dark:text-yellow-300 font-semibold mb-2">🎉 Fun (10%)</h4>
              <p className="text-yellow-900 dark:text-yellow-100 text-sm">Entertainment, outings, hobbies - Enjoy your hard work</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Salary Allocation"
              variant="success"
              results={[
                { label: 'Monthly Salary', value: `₹${result.salary.toLocaleString()}`, color: 'blue' },
                { label: '💰 Invest (30%)', value: `₹${result.invest.toLocaleString()}`, color: 'green', highlight: true },
                { label: '🏠 Expenses (50%)', value: `₹${result.expenses.toLocaleString()}`, color: 'red' },
                { label: '📚 Learning (10%)', value: `₹${result.selfGrowth.toLocaleString()}`, color: 'purple' },
                { label: '🎉 Fun (10%)', value: `₹${result.fun.toLocaleString()}`, color: 'yellow' }
              ]}
              tip={{
                icon: '💼',
                text: 'Start investing early, even small amounts. Avoid lifestyle inflation and build good financial habits.'
              }}
            />

            <AnimatedChart
              title="Salary Distribution"
              data={result.data}
              type="pie"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default FirstSalaryPlanner;