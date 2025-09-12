import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  principal: Yup.number()
    .required('Principal amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  annualRate: Yup.number()
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(15, 'Maximum rate is 15%'),
  tenureYears: Yup.number()
    .required('Tenure is required')
    .min(1, 'Minimum tenure is 1 year')
    .max(10, 'Maximum tenure is 10 years')
});

function calculateCompoundInterest(principal, rate, time, frequency = 1) {
  const r = rate / 100;
  const n = frequency;
  return principal * Math.pow(1 + r / n, n * time);
}

function calculatePostOfficeFD({ principal, annualRate, tenureYears }) {
  const maturity = calculateCompoundInterest(principal, annualRate, tenureYears, 4); // Quarterly compounding
  return maturity;
}

const PostOfficeFDCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateFDResult = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const maturityAmount = calculatePostOfficeFD(values);
    const interestEarned = maturityAmount - values.principal;

    setResult({
      principal: values.principal,
      interestEarned,
      maturityAmount,
      data: [
        { name: 'Principal', amount: values.principal },
        { name: 'Interest', amount: interestEarned },
        { name: 'Maturity', amount: maturityAmount }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Post Office FD Calculator" 
      description="Government-backed fixed deposit returns"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🏦 Post Office FD Calculator</h3>
          
          <Formik
            initialValues={{
              principal: '',
              annualRate: '',
              tenureYears: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateFDResult(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="principal"
                  label="Principal Amount (₹)"
                  type="number"
                  placeholder="100000"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="annualRate"
                  label="Annual Interest Rate (%)"
                  type="number"
                  step="0.1"
                  placeholder="6.8"
                  helpText="Quarterly compounding"
                  icon="📈"
                />
                
                <AnimatedInput
                  name="tenureYears"
                  label="Tenure (Years)"
                  type="number"
                  placeholder="5"
                  icon="⏰"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate FD Returns'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="FD Results"
              variant="success"
              results={[
                { label: 'Principal Amount', value: `₹${result.principal.toLocaleString()}`, color: 'blue' },
                { label: 'Interest Earned', value: `₹${result.interestEarned.toLocaleString()}`, color: 'green' },
                { label: 'Maturity Amount', value: `₹${result.maturityAmount.toLocaleString()}`, color: 'yellow', highlight: true }
              ]}
              tip={{
                icon: '🏦',
                text: 'Post Office FDs offer guaranteed returns with government backing and quarterly compounding.'
              }}
            />

            <AnimatedChart
              title="FD Breakdown"
              data={result.data}
              type="bar"
              gradientId="pofdGradient"
              gradientColors={['#8b5cf6', '#7c3aed', '#6d28d9']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default PostOfficeFDCalculator;