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
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%')
});

const RuleOf72Calculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateRule72 = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 25) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { amount, rate } = values;
    
    // Rule of 72: Time to double = 72 / interest rate
    const timeToDouble = 72 / rate;
    const doubledAmount = amount * 2;
    
    // Calculate actual compound interest for comparison
    const actualTime = Math.log(2) / Math.log(1 + rate / 100);
    const difference = Math.abs(timeToDouble - actualTime);
    
    // Show different investment scenarios
    const scenarios = [
      { name: 'FD (6%)', rate: 6, time: 72/6, amount: amount * Math.pow(1.06, 72/6) },
      { name: 'Mutual Fund (12%)', rate: 12, time: 72/12, amount: amount * Math.pow(1.12, 72/12) },
      { name: 'Equity (15%)', rate: 15, time: 72/15, amount: amount * Math.pow(1.15, 72/15) },
      { name: 'Your Rate', rate: rate, time: timeToDouble, amount: doubledAmount }
    ];

    setResult({
      amount,
      rate,
      timeToDouble: Math.round(timeToDouble * 10) / 10,
      doubledAmount,
      actualTime: Math.round(actualTime * 10) / 10,
      difference: Math.round(difference * 10) / 10,
      scenarios,
      data: [
        { name: 'Initial', amount: amount },
        { name: 'Doubled', amount: doubledAmount },
        { name: 'Rule of 72', amount: doubledAmount }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Rule of 72 Calculator" 
      description="Quick doubling time estimation"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">⚡ Rule of 72 Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              rate: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateRule72(values);
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
                  helpText="Amount you want to double"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="rate"
                  label="Expected Annual Return (%)"
                  type="number"
                  step="0.1"
                  placeholder="12"
                  helpText="Expected annual growth rate"
                  icon="📈"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Doubling Time'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Rule of 72 Explanation */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 rounded-lg">
            <h4 className="text-blue-700 dark:text-blue-300 font-semibold mb-2">📚 What is Rule of 72?</h4>
            <p className="text-blue-900 dark:text-blue-100 text-sm mb-2">
              A quick way to estimate how long it takes for an investment to double.
            </p>
            <p className="text-blue-900 dark:text-blue-100 text-sm">
              <strong>Formula:</strong> Time to Double = 72 ÷ Interest Rate
            </p>
          </div>

          {/* Quick Examples */}
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Examples:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">6% → 12 years</div>
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">8% → 9 years</div>
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">12% → 6 years</div>
              <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">18% → 4 years</div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Doubling Time Analysis"
              variant="info"
              results={[
                { label: 'Investment Amount', value: `₹${result.amount.toLocaleString()}`, color: 'blue' },
                { label: 'Expected Return', value: `${result.rate}% per year`, color: 'purple' },
                { label: 'Rule of 72 Time', value: `${result.timeToDouble} years`, color: 'green', highlight: true },
                { label: 'Actual Time', value: `${result.actualTime} years`, color: 'yellow' },
                { label: 'Difference', value: `${result.difference} years`, color: 'gray' },
                { label: 'Doubled Amount', value: `₹${result.doubledAmount.toLocaleString()}`, color: 'green' }
              ]}
              tip={{
                icon: '⚡',
                text: 'Rule of 72 is most accurate for rates between 6-10%. Higher rates may have larger differences.'
              }}
            />

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Investment Scenarios</h3>
              <div className="space-y-3">
                {result.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">{scenario.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({scenario.rate}%)</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-white">{Math.round(scenario.time * 10) / 10} years</div>
                      <div className="text-sm text-green-600 dark:text-green-400">₹{Math.round(scenario.amount).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnimatedChart
              title="Investment Growth"
              data={result.data}
              type="bar"
              gradientId="rule72Gradient"
              gradientColors={['#3b82f6', '#10b981', '#f59e0b']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default RuleOf72Calculator;