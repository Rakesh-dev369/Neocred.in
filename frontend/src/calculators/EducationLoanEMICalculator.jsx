import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Loan amount is required')
    .min(50000, 'Minimum amount is ₹50,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  interest: Yup.number()
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(20, 'Maximum rate is 20%'),
  years: Yup.number()
    .required('Tenure is required')
    .min(1, 'Minimum tenure is 1 year')
    .max(15, 'Maximum tenure is 15 years')
});

const EducationLoanEMICalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateEMI = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { amount, interest, years } = values;
    const months = years * 12;
    const monthlyRate = interest / 12 / 100;
    
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - amount;

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: amount,
      data: [
        { name: 'Principal', amount: amount },
        { name: 'Interest', amount: Math.round(totalInterest) },
        { name: 'Total Amount', amount: Math.round(totalAmount) }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Education Loan EMI Calculator" 
      description="Plan your education financing"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🎓 Education Loan EMI Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              interest: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateEMI(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="amount"
                  label="Loan Amount (₹)"
                  type="number"
                  placeholder="500000"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="interest"
                  label="Interest Rate (% per annum)"
                  type="number"
                  step="0.1"
                  placeholder="9"
                  icon="📈"
                />
                
                <AnimatedInput
                  name="years"
                  label="Loan Tenure (Years)"
                  type="number"
                  placeholder="5"
                  icon="⏰"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate EMI'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="EMI Breakdown"
              variant="info"
              results={[
                { label: 'Monthly EMI', value: `₹${result.emi.toLocaleString()}`, color: 'blue', highlight: true },
                { label: 'Principal Amount', value: `₹${result.principal.toLocaleString()}`, color: 'green' },
                { label: 'Total Interest', value: `₹${result.totalInterest.toLocaleString()}`, color: 'red' },
                { label: 'Total Amount', value: `₹${result.totalAmount.toLocaleString()}`, color: 'yellow' }
              ]}
              tip={{
                icon: '🎓',
                text: 'Consider moratorium period and tax benefits under Section 80E for education loan interest.'
              }}
            />

            <AnimatedChart
              title="Loan Breakdown"
              data={result.data}
              type="bar"
              gradientId="eduLoanGradient"
              gradientColors={['#10b981', '#059669', '#047857']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default EducationLoanEMICalculator;