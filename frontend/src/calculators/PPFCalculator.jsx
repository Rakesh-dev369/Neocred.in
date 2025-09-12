import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout } from '../components/calculator';

const validationSchema = Yup.object({
  monthlyInvestment: Yup.number()
    .required('Monthly investment is required')
    .min(500, 'Minimum investment is ₹500')
    .max(12500, 'Maximum monthly investment is ₹12,500 (₹1.5L annually)'),
  currentAge: Yup.number()
    .required('Current age is required')
    .min(18, 'Minimum age is 18')
    .max(50, 'Maximum age is 50 for new PPF account')
});

const PPFCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculatePPF = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { monthlyInvestment, currentAge } = values;
    const annualInvestment = monthlyInvestment * 12;
    const ppfRate = 7.1; // Current PPF rate
    const tenure = 15; // PPF lock-in period
    
    // Calculate PPF maturity using compound interest
    let maturityAmount = 0;
    let yearlyData = [];
    let totalInvested = 0;
    
    for (let year = 1; year <= tenure; year++) {
      totalInvested += annualInvestment;
      maturityAmount = (maturityAmount + annualInvestment) * (1 + ppfRate / 100);
      
      yearlyData.push({
        year,
        invested: totalInvested,
        maturity: Math.round(maturityAmount),
        age: currentAge + year
      });
    }
    
    const totalInterest = maturityAmount - totalInvested;
    const taxSaved = totalInvested * 0.3; // Assuming 30% tax bracket

    setResult({
      monthlyInvestment,
      annualInvestment,
      totalInvested,
      maturityAmount: Math.round(maturityAmount),
      totalInterest: Math.round(totalInterest),
      taxSaved: Math.round(taxSaved),
      maturityAge: currentAge + tenure,
      yearlyData,
      data: [
        { name: 'Total Invested', amount: totalInvested },
        { name: 'Interest Earned', amount: totalInterest },
        { name: 'Tax Saved', amount: taxSaved }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <CalculatorLayout 
      title="PPF Calculator" 
      description="15-year tax-free wealth building"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🏛️ PPF Calculator</h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              currentAge: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculatePPF(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <AnimatedInput
                  name="monthlyInvestment"
                  label="Monthly Investment (₹)"
                  type="number"
                  placeholder="12500"
                  helpText="Maximum ₹1.5 lakhs per year"
                  icon="💰"
                />
                
                <AnimatedInput
                  name="currentAge"
                  label="Current Age"
                  type="number"
                  placeholder="25"
                  helpText="PPF matures when you turn (current age + 15)"
                  icon="👤"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isCalculating}
                  className="btn-primary w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate PPF Returns'}
                </button>
              </Form>
            )}
          </Formik>

          {/* PPF Benefits */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">PPF Benefits:</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Tax deduction under 80C</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Tax-free interest & maturity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Government guaranteed returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Partial withdrawal after 7 years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="PPF Projection"
              variant="success"
              results={[
                { label: 'Monthly Investment', value: `₹${result.monthlyInvestment.toLocaleString()}`, color: 'blue' },
                { label: 'Total Invested (15 years)', value: `₹${result.totalInvested.toLocaleString()}`, color: 'purple' },
                { label: 'Interest Earned', value: `₹${result.totalInterest.toLocaleString()}`, color: 'green' },
                { label: 'Tax Saved', value: `₹${result.taxSaved.toLocaleString()}`, color: 'yellow' },
                { label: 'Maturity Amount', value: `₹${result.maturityAmount.toLocaleString()}`, color: 'green', highlight: true },
                { label: 'Maturity Age', value: `${result.maturityAge} years`, color: 'gray' }
              ]}
              tip={{
                icon: '🏛️',
                text: 'PPF offers triple tax benefit - deduction, tax-free growth, and tax-free withdrawal.'
              }}
            />

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">PPF Growth Over 15 Years</h3>
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
                    tickFormatter={(val) => `₹${(val/100000).toFixed(1)}L`}
                  />
                  <Tooltip 
                    formatter={(val, name) => [
                      `₹${Number(val).toLocaleString()}`, 
                      name === 'invested' ? 'Invested' : 'Maturity Value'
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
                    dataKey="invested" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="maturity" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
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

export default PPFCalculator;