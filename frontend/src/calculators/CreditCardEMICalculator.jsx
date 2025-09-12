import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Purchase amount is required')
    .min(5000, 'Minimum amount is ₹5,000')
    .max(1000000, 'Maximum amount is ₹10 lakhs'),
  interest: Yup.number()
    .required('Interest rate is required')
    .min(12, 'Minimum rate is 12%')
    .max(48, 'Maximum rate is 48%'),
  tenure: Yup.number()
    .required('Tenure is required')
    .min(3, 'Minimum tenure is 3 months')
    .max(60, 'Maximum tenure is 60 months')
});

const CreditCardEMICalculator = () => {
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
    
    const { amount, interest, tenure } = values;
    const monthlyRate = interest / 12 / 100;
    
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
                (Math.pow(1 + monthlyRate, tenure) - 1);
    
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - amount;
    const processingFee = amount * 0.02; // 2% processing fee

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      processingFee: Math.round(processingFee),
      principal: amount,
      data: [
        { name: 'Principal', amount: amount },
        { name: 'Interest', amount: Math.round(totalInterest) },
        { name: 'Processing Fee', amount: Math.round(processingFee) },
        { name: 'Total Cost', amount: Math.round(totalAmount + processingFee) }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Credit Card EMI Calculator" 
      description="Convert purchases to affordable EMIs"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💳 Credit Card EMI Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              interest: '24',
              tenure: '12'
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
                  label="Purchase Amount (₹)"
                  type="number"
                  placeholder="50000"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="interest"
                  label="Interest Rate (% per annum)"
                  type="number"
                  step="0.1"
                  placeholder="24"
                  helpText="Typical credit card EMI rates: 18-36%"
                  icon="📈"
                />
                
                <AnimatedInput
                  name="tenure"
                  label="EMI Tenure (Months)"
                  type="number"
                  placeholder="12"
                  helpText="Choose between 3-60 months"
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

          {/* EMI Benefits */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Credit Card EMI Benefits:</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>No additional documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Instant approval</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Flexible tenure options</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                <span>Higher interest rates than personal loans</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="EMI Breakdown"
              variant="warning"
              results={[
                { label: 'Monthly EMI', value: `₹${result.emi.toLocaleString()}`, color: 'blue', highlight: true },
                { label: 'Purchase Amount', value: `₹${result.principal.toLocaleString()}`, color: 'green' },
                { label: 'Total Interest', value: `₹${result.totalInterest.toLocaleString()}`, color: 'red' },
                { label: 'Processing Fee', value: `₹${result.processingFee.toLocaleString()}`, color: 'orange' },
                { label: 'Total Cost', value: `₹${(result.totalAmount + result.processingFee).toLocaleString()}`, color: 'yellow' }
              ]}
              tip={{
                icon: '💳',
                text: 'Credit card EMIs have higher interest rates. Consider personal loans for large purchases.'
              }}
            />

            <AnimatedChart
              title="Cost Breakdown"
              data={result.data}
              type="bar"
              gradientId="creditCardGradient"
              gradientColors={['#dc2626', '#ea580c', '#f59e0b']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default CreditCardEMICalculator;