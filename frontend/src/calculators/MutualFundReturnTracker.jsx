import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  invested: Yup.number()
    .required('Invested amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  currentValue: Yup.number()
    .required('Current value is required')
    .min(0, 'Current value cannot be negative')
    .max(50000000, 'Maximum value is ₹5 crores')
});

const COLORS = ['#3b82f6', '#10b981', '#ef4444'];

const MutualFundReturnTracker = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateReturns = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { invested, currentValue } = values;
    const absoluteReturn = currentValue - invested;
    const percentageReturn = ((currentValue - invested) / invested) * 100;
    
    const data = [
      { name: 'Invested Amount', value: invested, color: '#3b82f6' },
      { name: absoluteReturn >= 0 ? 'Gains' : 'Loss', value: Math.abs(absoluteReturn), color: absoluteReturn >= 0 ? '#10b981' : '#ef4444' }
    ];

    setResult({
      invested,
      currentValue,
      absoluteReturn,
      percentageReturn: percentageReturn.toFixed(2),
      data
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Mutual Fund Return Tracker" 
      description="Track your mutual fund performance"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">📈 MF Return Tracker</h3>
          
          <Formik
            initialValues={{
              invested: '',
              currentValue: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateReturns(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="invested"
                  label="Total Invested Amount (₹)"
                  type="number"
                  placeholder="100000"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="currentValue"
                  label="Current Fund Value (₹)"
                  type="number"
                  placeholder="120000"
                  icon="📈"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Returns'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Return Analysis"
              variant={result.absoluteReturn >= 0 ? 'success' : 'warning'}
              results={[
                { label: 'Invested Amount', value: `₹${result.invested.toLocaleString()}`, color: 'blue' },
                { label: 'Current Value', value: `₹${result.currentValue.toLocaleString()}`, color: 'gray' },
                { label: 'Absolute Return', value: `${result.absoluteReturn >= 0 ? '+' : ''}₹${result.absoluteReturn.toLocaleString()}`, color: result.absoluteReturn >= 0 ? 'green' : 'red' },
                { label: 'Percentage Return', value: `${result.absoluteReturn >= 0 ? '+' : ''}${result.percentageReturn}%`, color: result.absoluteReturn >= 0 ? 'green' : 'red', highlight: true }
              ]}
              tip={{
                icon: result.absoluteReturn >= 0 ? '📈' : '📉',
                text: `Your mutual fund has ${result.absoluteReturn >= 0 ? 'gained' : 'lost'} ₹${Math.abs(result.absoluteReturn).toLocaleString()} (${result.percentageReturn}%).`
              }}
            />

            <AnimatedChart
              title="Investment Breakdown"
              data={result.data}
              type="pie"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default MutualFundReturnTracker;