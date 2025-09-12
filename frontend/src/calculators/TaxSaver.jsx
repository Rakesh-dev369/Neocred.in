import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Annual income is required')
    .min(250000, 'Minimum income is ₹2.5 lakhs')
    .max(10000000, 'Maximum income is ₹1 crore'),
  investment: Yup.number()
    .required('Investment amount is required')
    .min(0, 'Investment cannot be negative')
    .max(150000, 'Maximum 80C limit is ₹1.5 lakhs')
});

const TaxSaver = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateTaxSaving = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { income, investment } = values;
    
    // Tax calculation for new regime (simplified)
    const calculateTax = (taxableIncome) => {
      let tax = 0;
      if (taxableIncome > 1500000) tax += (taxableIncome - 1500000) * 0.3;
      if (taxableIncome > 1200000) tax += Math.min(taxableIncome - 1200000, 300000) * 0.25;
      if (taxableIncome > 900000) tax += Math.min(taxableIncome - 900000, 300000) * 0.2;
      if (taxableIncome > 600000) tax += Math.min(taxableIncome - 600000, 300000) * 0.15;
      if (taxableIncome > 300000) tax += Math.min(taxableIncome - 300000, 300000) * 0.1;
      if (taxableIncome > 250000) tax += Math.min(taxableIncome - 250000, 50000) * 0.05;
      return tax;
    };

    const taxWithoutInvestment = calculateTax(income);
    const taxWithInvestment = calculateTax(income - investment);
    const taxSaved = taxWithoutInvestment - taxWithInvestment;
    const effectiveReturn = (taxSaved / investment) * 100;

    setResult({
      income,
      investment,
      taxWithoutInvestment: Math.round(taxWithoutInvestment),
      taxWithInvestment: Math.round(taxWithInvestment),
      taxSaved: Math.round(taxSaved),
      effectiveReturn: Math.round(effectiveReturn * 100) / 100,
      data: [
        { name: 'Without 80C', amount: taxWithoutInvestment },
        { name: 'With 80C', amount: taxWithInvestment },
        { name: 'Tax Saved', amount: taxSaved }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Tax Saver (80C)" 
      description="Calculate tax savings under Section 80C"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💰 Tax Saver Calculator</h3>
          
          <Formik
            initialValues={{
              income: '',
              investment: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateTaxSaving(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="income"
                  label="Annual Income (₹)"
                  type="number"
                  placeholder="500000"
                  helpText="Enter your gross annual income"
                  icon="💼"
                />
                
                <AnimatedInput
                  name="investment"
                  label="80C Investment (₹)"
                  type="number"
                  placeholder="150000"
                  helpText="PPF, ELSS, Life Insurance, etc. (Max ₹1.5L)"
                  icon="📊"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Tax Savings'}
                </button>
              </Form>
            )}
          </Formik>

          {/* 80C Options */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Popular 80C Options:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">📊 ELSS Mutual Funds</div>
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">🏛️ PPF</div>
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded">🛡️ Life Insurance</div>
              <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">🏦 NSC</div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Tax Savings Breakdown"
              variant="success"
              results={[
                { label: 'Annual Income', value: `₹${result.income.toLocaleString()}`, color: 'blue' },
                { label: '80C Investment', value: `₹${result.investment.toLocaleString()}`, color: 'purple' },
                { label: 'Tax Without 80C', value: `₹${result.taxWithoutInvestment.toLocaleString()}`, color: 'red' },
                { label: 'Tax With 80C', value: `₹${result.taxWithInvestment.toLocaleString()}`, color: 'orange' },
                { label: 'Tax Saved', value: `₹${result.taxSaved.toLocaleString()}`, color: 'green', highlight: true },
                { label: 'Effective Return', value: `${result.effectiveReturn}%`, color: 'green' }
              ]}
              tip={{
                icon: '💡',
                text: 'ELSS funds offer tax savings with potential for higher returns compared to traditional options.'
              }}
            />

            <AnimatedChart
              title="Tax Comparison"
              data={result.data}
              type="bar"
              gradientId="taxGradient"
              gradientColors={['#ef4444', '#f59e0b', '#10b981']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default TaxSaver;