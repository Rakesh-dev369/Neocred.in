import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Monthly income is required')
    .min(15000, 'Minimum income is ₹15,000')
    .max(1000000, 'Maximum income is ₹10 lakhs'),
  expenses: Yup.number()
    .required('Monthly expenses are required')
    .min(5000, 'Minimum expenses is ₹5,000')
    .max(500000, 'Maximum expenses is ₹5 lakhs'),
  existingEMI: Yup.number()
    .min(0, 'EMI cannot be negative')
    .max(200000, 'Maximum EMI is ₹2 lakhs'),
  creditScore: Yup.number()
    .required('Credit score is required')
    .min(300, 'Minimum score is 300')
    .max(900, 'Maximum score is 900'),
  age: Yup.number()
    .required('Age is required')
    .min(21, 'Minimum age is 21')
    .max(65, 'Maximum age is 65')
});

const LoanEligibilityChecker = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateEligibility = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { income, expenses, existingEMI, creditScore, age } = values;
    
    // Calculate disposable income
    const disposableIncome = income - expenses - (existingEMI || 0);
    
    // Maximum EMI (40% of disposable income)
    const maxEMI = disposableIncome * 0.4;
    
    // Loan eligibility based on credit score and age
    let multiplier = 60; // Base multiplier
    
    if (creditScore >= 750) multiplier = 80;
    else if (creditScore >= 700) multiplier = 70;
    else if (creditScore >= 650) multiplier = 60;
    else if (creditScore >= 600) multiplier = 50;
    else multiplier = 40;
    
    // Age factor
    if (age < 30) multiplier += 5;
    else if (age > 50) multiplier -= 5;
    
    const maxLoanAmount = maxEMI * multiplier;
    
    // Eligibility status
    let status = 'Poor';
    let statusColor = 'red';
    if (creditScore >= 750 && disposableIncome > 20000) {
      status = 'Excellent';
      statusColor = 'green';
    } else if (creditScore >= 700 && disposableIncome > 15000) {
      status = 'Good';
      statusColor = 'blue';
    } else if (creditScore >= 650 && disposableIncome > 10000) {
      status = 'Fair';
      statusColor = 'yellow';
    }

    const data = [
      { name: 'Income', value: income, color: '#10b981' },
      { name: 'Expenses', value: expenses, color: '#ef4444' },
      { name: 'Existing EMI', value: existingEMI || 0, color: '#f59e0b' },
      { name: 'Available', value: Math.max(0, disposableIncome), color: '#3b82f6' }
    ];

    setResult({
      income,
      expenses,
      existingEMI: existingEMI || 0,
      disposableIncome: Math.max(0, disposableIncome),
      maxEMI: Math.round(maxEMI),
      maxLoanAmount: Math.round(maxLoanAmount),
      creditScore,
      status,
      statusColor,
      data
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Loan Eligibility Checker" 
      description="Check your loan qualification instantly"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">✅ Loan Eligibility Checker</h3>
          
          <Formik
            initialValues={{
              income: '',
              expenses: '',
              existingEMI: '',
              creditScore: '',
              age: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateEligibility(values);
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
                  icon="💰"
                />
                
                <AnimatedInput
                  name="expenses"
                  label="Monthly Expenses (₹)"
                  type="number"
                  placeholder="25000"
                  helpText="Include rent, utilities, food, etc."
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
                  name="creditScore"
                  label="Credit Score"
                  type="number"
                  placeholder="750"
                  helpText="CIBIL score (300-900)"
                  icon="📊"
                />
                
                <AnimatedInput
                  name="age"
                  label="Age (Years)"
                  type="number"
                  placeholder="30"
                  icon="👤"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Checking...' : 'Check Eligibility'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Eligibility Assessment"
              variant={result.status === 'Excellent' ? 'success' : result.status === 'Poor' ? 'warning' : 'info'}
              results={[
                { label: 'Eligibility Status', value: result.status, color: result.statusColor, highlight: true },
                { label: 'Monthly Income', value: `₹${result.income.toLocaleString()}`, color: 'green' },
                { label: 'Disposable Income', value: `₹${result.disposableIncome.toLocaleString()}`, color: 'blue' },
                { label: 'Max EMI Capacity', value: `₹${result.maxEMI.toLocaleString()}`, color: 'purple' },
                { label: 'Max Loan Amount', value: `₹${result.maxLoanAmount.toLocaleString()}`, color: 'yellow' },
                { label: 'Credit Score', value: result.creditScore, color: result.creditScore >= 750 ? 'green' : result.creditScore >= 650 ? 'yellow' : 'red' }
              ]}
              tip={{
                icon: '✅',
                text: result.status === 'Excellent' ? 'Great! You qualify for premium loan rates.' :
                      result.status === 'Good' ? 'Good eligibility. Consider improving credit score for better rates.' :
                      result.status === 'Fair' ? 'Fair eligibility. Work on increasing income or reducing expenses.' :
                      'Improve credit score and reduce expenses to enhance eligibility.'
              }}
            />

            <AnimatedChart
              title="Income Distribution"
              data={result.data}
              type="pie"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default LoanEligibilityChecker;