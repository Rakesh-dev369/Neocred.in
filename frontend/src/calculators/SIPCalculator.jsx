import React, { useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import CalculatorLayout from '../components/calculator/CalculatorLayout';
import AnimatedInput from '../components/calculator/AnimatedInput';
import AnimatedResults from '../components/calculator/AnimatedResults';
import AnimatedChart from '../components/calculator/AnimatedChart';
import AnimatedButton from '../components/calculator/AnimatedButton';

const validationSchema = Yup.object({
  monthlyInvestment: Yup.number()
    .required('Monthly investment is required')
    .min(500, 'Minimum amount is ₹500')
    .max(100000, 'Maximum amount is ₹1,00,000'),
  annualRate: Yup.number()
    .required('Annual return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%'),
  duration: Yup.number()
    .required('Duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(40, 'Maximum duration is 40 years')
});

const SIPCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [status, setStatus] = useState(null);

  const calculateSIP = async (values) => {
    setIsCalculating(true);
    setStatus({ type: 'info', message: 'Calculating your SIP returns...' });
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      const { monthlyInvestment, annualRate, duration } = values;
      const months = duration * 12;
      const monthlyRate = annualRate / 12 / 100;

      const maturityAmount = Array.from({ length: months }).reduce((acc, _, i) => {
        return acc + monthlyInvestment * Math.pow(1 + monthlyRate, months - i);
      }, 0);

      const totalInvested = monthlyInvestment * months;
      const estimatedReturns = maturityAmount - totalInvested;

      setResult({
        totalInvested,
        estimatedReturns,
        maturityAmount,
        data: [
          { name: "Invested", amount: totalInvested },
          { name: "Returns", amount: estimatedReturns },
          { name: "Maturity", amount: maturityAmount },
        ]
      });
      
      setStatus({ type: 'success', message: 'SIP calculation completed successfully!' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Error calculating SIP returns. Please try again.' });
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <CalculatorLayout 
      title="SIP Calculator" 
      status={status}
      showProgress={true}
      steps={['Input Details', 'Calculate', 'View Results']}
      currentStep={result ? 2 : isCalculating ? 1 : 0}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
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
            SIP Calculator
          </motion.h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              annualRate: '',
              duration: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateSIP(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <AnimatedInput
                  name="monthlyInvestment"
                  label="Monthly Investment"
                  placeholder="5000"
                  prefix="₹"
                />
                
                <AnimatedInput
                  name="annualRate"
                  label="Expected Annual Return"
                  placeholder="12"
                  suffix="%"
                  step="0.1"
                  prefix=""
                />
                
                <AnimatedInput
                  name="duration"
                  label="Investment Duration"
                  placeholder="10"
                  suffix=" years"
                  prefix=""
                />

                <AnimatedButton
                  type="submit"
                  loading={isCalculating}
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate SIP Returns'}
                </AnimatedButton>
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedResults 
            results={result} 
            isVisible={!!result} 
            title="SIP Investment Results"
          />
          
          {result && (
            <motion.div className="mt-6">
              <AnimatedChart
                data={result.data}
                type="bar"
                title="Investment Breakdown"
                colors={['#60a5fa', '#34d399', '#fbbf24']}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </CalculatorLayout>
  );
};

export default SIPCalculator;