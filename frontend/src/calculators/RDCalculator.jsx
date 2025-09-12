import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { CalculatorLayout, AnimatedInput, AnimatedResults, AnimatedChart, AnimatedButton } from '../components/calculator';

const validationSchema = Yup.object({
  monthlyInvestment: Yup.number()
    .required('Monthly investment is required')
    .min(100, 'Minimum amount is ₹100')
    .max(50000, 'Maximum amount is ₹50,000'),
  annualRate: Yup.number()
    .required('Annual rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(15, 'Maximum rate is 15%'),
  tenureMonths: Yup.number()
    .required('Tenure is required')
    .min(6, 'Minimum tenure is 6 months')
    .max(120, 'Maximum tenure is 120 months')
});

function calculateRD({ monthlyInvestment, annualRate, tenureMonths }) {
  const r = annualRate / 400; // Quarterly rate (4 times a year)
  let maturity = 0;
  for (let i = 0; i < tenureMonths; i++) {
    maturity += monthlyInvestment * Math.pow(1 + r, (tenureMonths - i) / 3);
  }
  return maturity;
}

const RDCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [status, setStatus] = useState(null);

  const calculateRDResult = async (values) => {
    setIsCalculating(true);
    setStatus({ type: 'info', message: 'Calculating your RD returns...' });
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      const maturityAmount = calculateRD(values);
      const totalInvested = values.monthlyInvestment * values.tenureMonths;
      const interestEarned = maturityAmount - totalInvested;

      setResult({
        totalInvested,
        interestEarned,
        maturityAmount,
        data: [
          { name: 'Invested', amount: totalInvested },
          { name: 'Interest', amount: interestEarned },
          { name: 'Maturity', amount: maturityAmount }
        ]
      });
      
      setStatus({ type: 'success', message: 'RD calculation completed successfully!' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Error calculating RD returns. Please try again.' });
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <CalculatorLayout 
      title="RD Calculator" 
      status={status}
      showProgress={true}
      steps={['Enter Details', 'Calculate', 'View Results']}
      currentStep={result ? 2 : isCalculating ? 1 : 0}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="text-xl font-semibold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Recurring Deposit Calculator
          </motion.h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              annualRate: '',
              tenureMonths: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateRDResult(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <AnimatedInput
                  name="monthlyInvestment"
                  label="Monthly Investment"
                  placeholder="2000"
                  prefix="₹"
                />
                
                <AnimatedInput
                  name="annualRate"
                  label="Annual Interest Rate"
                  placeholder="7"
                  suffix="%"
                  step="0.1"
                  prefix=""
                />
                
                <AnimatedInput
                  name="tenureMonths"
                  label="Tenure"
                  placeholder="60"
                  suffix=" months"
                  prefix=""
                />

                <AnimatedButton
                  type="submit"
                  loading={isCalculating}
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                  variant="success"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate RD Returns'}
                </AnimatedButton>
              </Form>
            )}
          </Formik>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedResults 
            results={result} 
            isVisible={!!result} 
            title="RD Investment Results"
          />
          
          {result && (
            <motion.div className="mt-6">
              <AnimatedChart
                data={result.data}
                type="bar"
                title="RD Breakdown"
                colors={['#10b981', '#34d399', '#6ee7b7']}
              />
              
              <motion.div 
                className="mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-500/30 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-green-800 dark:text-green-100 text-sm">
                  💰 <strong>RD Tip:</strong> Recurring Deposits offer guaranteed returns with quarterly compounding. Perfect for disciplined savings!
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </CalculatorLayout>
  );
};

export default RDCalculator;