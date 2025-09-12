import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Investment amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  goldPrice: Yup.number()
    .required('Current gold price is required')
    .min(3000, 'Minimum price is ₹3,000/gram')
    .max(10000, 'Maximum price is ₹10,000/gram'),
  years: Yup.number()
    .required('Investment period is required')
    .min(1, 'Minimum period is 1 year')
    .max(30, 'Maximum period is 30 years'),
  expectedReturn: Yup.number()
    .required('Expected return is required')
    .min(1, 'Minimum return is 1%')
    .max(20, 'Maximum return is 20%')
});

const GoldInvestmentCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateGoldInvestment = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { amount, goldPrice, years, expectedReturn } = values;
    
    // Calculate gold quantity
    const goldQuantity = amount / goldPrice;
    
    // Calculate future value
    const futureValue = amount * Math.pow(1 + expectedReturn / 100, years);
    const totalGains = futureValue - amount;
    
    // Calculate future gold price
    const futureGoldPrice = goldPrice * Math.pow(1 + expectedReturn / 100, years);
    
    // Generate yearly data
    const yearlyData = [];
    for (let year = 0; year <= years; year++) {
      const yearValue = amount * Math.pow(1 + expectedReturn / 100, year);
      const yearGoldPrice = goldPrice * Math.pow(1 + expectedReturn / 100, year);
      yearlyData.push({
        year,
        value: Math.round(yearValue),
        goldPrice: Math.round(yearGoldPrice)
      });
    }

    setResult({
      amount,
      goldPrice,
      goldQuantity: goldQuantity.toFixed(2),
      years,
      expectedReturn,
      futureValue: Math.round(futureValue),
      totalGains: Math.round(totalGains),
      futureGoldPrice: Math.round(futureGoldPrice),
      yearlyData,
      data: [
        { name: 'Investment', amount: amount },
        { name: 'Gains', amount: totalGains },
        { name: 'Future Value', amount: futureValue }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Gold Investment Calculator" 
      description="Digital gold and SGB investment planning"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🥇 Gold Investment Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              goldPrice: '6500',
              years: '',
              expectedReturn: '8'
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateGoldInvestment(values);
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
                  name="goldPrice"
                  label="Current Gold Price (₹/gram)"
                  type="number"
                  placeholder="6500"
                  helpText="Current market price per gram"
                  icon="🥇"
                />
                
                <AnimatedInput
                  name="years"
                  label="Investment Period (Years)"
                  type="number"
                  placeholder="10"
                  icon="⏰"
                />
                
                <AnimatedInput
                  name="expectedReturn"
                  label="Expected Annual Return (%)"
                  type="number"
                  step="0.1"
                  placeholder="8"
                  helpText="Historical gold returns: 8-10%"
                  icon="📈"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Gold Returns'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Gold Investment Options */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Gold Investment Options:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">🥇 Digital Gold</div>
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">📊 Gold ETFs</div>
              <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded">🏛️ Sovereign Gold Bonds</div>
              <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">💍 Physical Gold</div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Gold Investment Projection"
              variant="success"
              results={[
                { label: 'Investment Amount', value: `₹${result.amount.toLocaleString()}`, color: 'blue' },
                { label: 'Gold Quantity', value: `${result.goldQuantity} grams`, color: 'yellow' },
                { label: 'Current Gold Price', value: `₹${result.goldPrice.toLocaleString()}/gram`, color: 'orange' },
                { label: 'Future Gold Price', value: `₹${result.futureGoldPrice.toLocaleString()}/gram`, color: 'orange' },
                { label: 'Total Gains', value: `₹${result.totalGains.toLocaleString()}`, color: 'green' },
                { label: 'Future Value', value: `₹${result.futureValue.toLocaleString()}`, color: 'yellow', highlight: true }
              ]}
              tip={{
                icon: '🥇',
                text: 'Gold is a hedge against inflation. Consider SGBs for tax benefits and additional interest.'
              }}
            />

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Gold Price & Investment Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={result.yearlyData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                  />
                  <YAxis 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(val, name) => [
                      name === 'value' ? `₹${Number(val).toLocaleString()}` : `₹${Number(val).toLocaleString()}/gram`,
                      name === 'value' ? 'Investment Value' : 'Gold Price'
                    ]}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="goldPrice" 
                    stroke="#eab308" 
                    strokeWidth={2}
                    dot={{ fill: '#eab308', strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default GoldInvestmentCalculator;