import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  monthlyExpenses: Yup.number()
    .required('Monthly expenses is required')
    .min(5000, 'Minimum expenses is ₹5,000')
    .max(500000, 'Maximum expenses is ₹5 lakhs'),
  months: Yup.number()
    .required('Number of months is required')
    .min(3, 'Minimum is 3 months')
    .max(12, 'Maximum is 12 months')
});

const EmergencyFundCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateEmergencyFund = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    // Simulate calculation progress
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { monthlyExpenses, months } = values;
    const totalFund = monthlyExpenses * months;
    const monthlyTarget = totalFund / 12; // If saving over 1 year
    
    setResult({
      monthlyExpenses,
      months,
      totalFund,
      monthlyTarget: Math.round(monthlyTarget),
      data: [
        { name: '3 Months', amount: monthlyExpenses * 3 },
        { name: '6 Months', amount: monthlyExpenses * 6 },
        { name: '9 Months', amount: monthlyExpenses * 9 },
        { name: '12 Months', amount: monthlyExpenses * 12 }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="Emergency Fund Calculator" 
      description="Plan your financial safety net"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🛡️ Emergency Fund Calculator</h3>
          
          <Formik
            initialValues={{
              monthlyExpenses: '',
              months: 6
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateEmergencyFund(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="monthlyExpenses"
                  label="Monthly Expenses (₹)"
                  type="number"
                  placeholder="30000"
                  helpText="Include rent, food, utilities, EMIs, etc."
                  icon="💰"
                />
                
                <AnimatedInput
                  name="months"
                  label="Emergency Fund Duration"
                  type="select"
                  options={[
                    { value: 3, label: '3 Months (Minimum)' },
                    { value: 6, label: '6 Months (Recommended)' },
                    { value: 9, label: '9 Months (Conservative)' },
                    { value: 12, label: '12 Months (Very Safe)' }
                  ]}
                  icon="⏰"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Emergency Fund'}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Emergency Fund Plan"
              variant="success"
              results={[
                { label: 'Monthly Expenses', value: `₹${result.monthlyExpenses.toLocaleString()}`, color: 'blue' },
                { label: 'Coverage Period', value: `${result.months} months`, color: 'gray' },
                { label: 'Emergency Fund Needed', value: `₹${result.totalFund.toLocaleString()}`, color: 'green', highlight: true },
                { label: 'Monthly Savings Target', value: `₹${result.monthlyTarget.toLocaleString()}`, color: 'yellow' }
              ]}
              tip={{
                icon: '🛡️',
                text: 'Keep your emergency fund in a liquid savings account or FD for easy access during emergencies.'
              }}
            />

            <AnimatedChart
              title="Emergency Fund Options"
              data={result.data}
              type="bar"
              gradientId="emergencyGradient"
              gradientColors={['#10b981', '#059669', '#047857']}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default EmergencyFundCalculator;