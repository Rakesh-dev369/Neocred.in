import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Monthly income is required')
    .min(20000, 'Minimum income is ₹20,000')
    .max(1000000, 'Maximum income is ₹10 lakhs'),
  expenses: Yup.number()
    .required('Monthly expenses are required')
    .min(5000, 'Minimum expenses is ₹5,000')
    .max(500000, 'Maximum expenses is ₹5 lakhs'),
  existingEMI: Yup.number()
    .min(0, 'EMI cannot be negative')
    .max(200000, 'Maximum EMI is ₹2 lakhs'),
  desiredEMI: Yup.number()
    .required('Desired EMI is required')
    .min(1000, 'Minimum EMI is ₹1,000')
    .max(100000, 'Maximum EMI is ₹1 lakh')
});

const LoanAffordabilityTool = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateAffordability = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { income, expenses, existingEMI, desiredEMI } = values;
    
    const totalEMI = (existingEMI || 0) + desiredEMI;
    const disposableIncome = income - expenses;
    const remainingIncome = disposableIncome - totalEMI;
    
    // Affordability ratios
    const emiToIncomeRatio = (totalEMI / income) * 100;
    const expenseToIncomeRatio = (expenses / income) * 100;
    const savingsRatio = (remainingIncome / income) * 100;
    
    // Affordability status
    let affordability = 'Not Affordable';
    let affordabilityColor = 'red';
    let recommendation = 'Reduce EMI amount or increase income';
    
    if (emiToIncomeRatio <= 40 && remainingIncome >= 10000) {
      affordability = 'Highly Affordable';
      affordabilityColor = 'green';
      recommendation = 'Excellent! You can comfortably afford this EMI';
    } else if (emiToIncomeRatio <= 50 && remainingIncome >= 5000) {
      affordability = 'Affordable';
      affordabilityColor = 'blue';
      recommendation = 'Manageable, but keep emergency fund ready';
    } else if (emiToIncomeRatio <= 60 && remainingIncome >= 0) {
      affordability = 'Tight Budget';
      affordabilityColor = 'yellow';
      recommendation = 'Very tight budget, consider reducing EMI';
    }
    
    const data = [
      { name: 'Expenses', amount: expenses, percentage: expenseToIncomeRatio },
      { name: 'Total EMI', amount: totalEMI, percentage: emiToIncomeRatio },
      { name: 'Remaining', amount: Math.max(0, remainingIncome), percentage: Math.max(0, savingsRatio) }
    ];

    setResult({
      income,
      expenses,
      existingEMI: existingEMI || 0,
      desiredEMI,
      totalEMI,
      disposableIncome,
      remainingIncome,
      emiToIncomeRatio: Math.round(emiToIncomeRatio * 10) / 10,
      expenseToIncomeRatio: Math.round(expenseToIncomeRatio * 10) / 10,
      savingsRatio: Math.round(savingsRatio * 10) / 10,
      affordability,
      affordabilityColor,
      recommendation,
      data
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Loan Affordability Tool" 
      description="Check if you can afford the EMI comfortably"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💰 Loan Affordability Tool</h3>
          
          <Formik
            initialValues={{
              income: '',
              expenses: '',
              existingEMI: '',
              desiredEMI: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateAffordability(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="income"
                  label="Monthly Income (₹)"
                  type="number"
                  placeholder="60000"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="expenses"
                  label="Monthly Expenses (₹)"
                  type="number"
                  placeholder="30000"
                  helpText="Fixed expenses like rent, utilities, food"
                  icon="💸"
                />
                
                <AnimatedInput
                  name="existingEMI"
                  label="Existing EMI (₹)"
                  type="number"
                  placeholder="0"
                  helpText="Current loan EMIs (optional)"
                  icon="📋"
                />
                
                <AnimatedInput
                  name="desiredEMI"
                  label="Desired New EMI (₹)"
                  type="number"
                  placeholder="15000"
                  helpText="EMI for the new loan you want"
                  icon="🎯"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Analyzing...' : 'Check Affordability'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Affordability Guidelines */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Affordability Guidelines:</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>EMI ≤ 40% of income: Highly Affordable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                <span>EMI ≤ 50% of income: Affordable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⚠</span>
                <span>EMI ≤ 60% of income: Tight Budget</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">✗</span>
                <span>EMI > 60% of income: Not Affordable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Affordability Analysis"
              variant={result.affordability === 'Highly Affordable' ? 'success' : 
                      result.affordability === 'Not Affordable' ? 'warning' : 'info'}
              results={[
                { label: 'Affordability Status', value: result.affordability, color: result.affordabilityColor, highlight: true },
                { label: 'Monthly Income', value: `₹${result.income.toLocaleString()}`, color: 'green' },
                { label: 'Total EMI', value: `₹${result.totalEMI.toLocaleString()}`, color: 'blue' },
                { label: 'EMI to Income Ratio', value: `${result.emiToIncomeRatio}%`, color: result.emiToIncomeRatio <= 40 ? 'green' : result.emiToIncomeRatio <= 50 ? 'yellow' : 'red' },
                { label: 'Remaining Income', value: `₹${result.remainingIncome.toLocaleString()}`, color: result.remainingIncome >= 10000 ? 'green' : result.remainingIncome >= 0 ? 'yellow' : 'red' },
                { label: 'Savings Potential', value: `${result.savingsRatio}%`, color: result.savingsRatio >= 20 ? 'green' : result.savingsRatio >= 10 ? 'yellow' : 'red' }
              ]}
              tip={{
                icon: '💰',
                text: result.recommendation
              }}
            />

            <AnimatedChart
              title="Income Allocation"
              data={result.data}
              type="bar"
              gradientId="affordabilityGradient"
              gradientColors={['#ef4444', '#3b82f6', '#10b981']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default LoanAffordabilityTool;