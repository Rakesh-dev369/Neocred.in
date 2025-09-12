import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Investment amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  rate: Yup.number()
    .required('Annual return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%'),
  years: Yup.number()
    .required('Investment duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(50, 'Maximum duration is 50 years')
});

const LumpsumInvestmentCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateLumpsum = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { amount, rate, years } = values;
    const r = rate / 100;
    const futureValue = amount * Math.pow(1 + r, years);
    const totalReturns = futureValue - amount;
    
    // Calculate CAGR
    const cagr = ((futureValue / amount) ** (1 / years) - 1) * 100;

    setResult({
      principal: amount,
      futureValue: Math.round(futureValue),
      totalReturns: Math.round(totalReturns),
      cagr: cagr.toFixed(2),
      data: [
        { name: 'Principal', amount: amount },
        { name: 'Returns', amount: Math.round(totalReturns) },
        { name: 'Future Value', amount: Math.round(futureValue) }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Lumpsum Investment Calculator" 
      description="One-time investment growth projection"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💎 Lumpsum Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              rate: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateLumpsum(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="amount"
                  label="Investment Amount (₹)"
                  type="number"
                  placeholder="100000"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="rate"
                  label="Expected Annual Return (%)"
                  type="number"
                  step="0.1"
                  placeholder="12"
                  icon="📈"
                />
                
                <AnimatedInput
                  name="years"
                  label="Investment Duration (Years)"
                  type="number"
                  placeholder="5"
                  icon="⏰"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Lumpsum Returns'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Investment Results"
              variant="success"
              results={[
                { label: 'Principal Amount', value: `₹${result.principal.toLocaleString()}`, color: 'blue' },
                { label: 'Total Returns', value: `₹${result.totalReturns.toLocaleString()}`, color: 'green' },
                { label: 'CAGR', value: `${result.cagr}%`, color: 'purple' },
                { label: 'Future Value', value: `₹${result.futureValue.toLocaleString()}`, color: 'yellow', highlight: true }
              ]}
              tip={{
                icon: '💎',
                text: 'Lumpsum investments work best when markets are low. Consider rupee cost averaging for volatile markets.'
              }}
            />

            <AnimatedChart
              title="Investment Breakdown"
              data={result.data}
              type="bar"
              gradientId="lumpsumGradient"
              gradientColors={['#06b6d4', '#0891b2', '#0e7490']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default LumpsumInvestmentCalculator;