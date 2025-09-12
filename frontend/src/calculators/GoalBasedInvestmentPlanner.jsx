import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { CalculatorLayout, AnimatedInput, AnimatedResults, AnimatedChart, AnimatedButton } from '../components/calculator';

const validationSchema = Yup.object({
  goalAmount: Yup.number()
    .required('Goal amount is required')
    .min(10000, 'Minimum goal amount is ₹10,000')
    .max(100000000, 'Maximum goal amount is ₹10 crores'),
  years: Yup.number()
    .required('Investment duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(50, 'Maximum duration is 50 years'),
  returnRate: Yup.number()
    .required('Expected return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%')
});

const GoalBasedInvestmentPlanner = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [status, setStatus] = useState(null);

  const calculateGoalInvestment = async (values) => {
    setIsCalculating(true);
    setStatus({ type: 'info', message: 'Calculating your investment plan...' });
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    try {
      const { goalAmount, years, returnRate } = values;
      const r = returnRate / 100 / 12; // Monthly rate
      const n = years * 12; // Total months
      
      const monthlyInvestment = (goalAmount * r) / (Math.pow(1 + r, n) - 1);
      const totalInvestment = monthlyInvestment * n;
      
      setResult({
        monthlyInvestment: Math.round(monthlyInvestment),
        totalInvestment: Math.round(totalInvestment),
        goalAmount: goalAmount,
        data: [
          { name: 'Total Investment', amount: Math.round(totalInvestment) },
          { name: 'Goal Amount', amount: goalAmount }
        ]
      });
      
      setStatus({ type: 'success', message: 'Goal-based investment plan created successfully!' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Error calculating investment plan. Please try again.' });
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <CalculatorLayout 
      title="Goal-Based Investment Planner" 
      status={status}
      showProgress={true}
      steps={['Set Goal', 'Calculate Plan', 'Review Strategy']}
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
            className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🎯
            </motion.span>
            Goal-Based Investment Planner
          </motion.h3>
          
          <Formik
            initialValues={{
              goalAmount: '',
              years: '',
              returnRate: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateGoalInvestment(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <AnimatedInput
                  name="goalAmount"
                  label="Goal Amount"
                  placeholder="1000000"
                  prefix="₹"
                />
                
                <AnimatedInput
                  name="years"
                  label="Years to Achieve Goal"
                  placeholder="10"
                  suffix=" years"
                  prefix=""
                />
                
                <AnimatedInput
                  name="returnRate"
                  label="Expected Annual Return"
                  placeholder="12"
                  suffix="%"
                  step="0.1"
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
                  {isCalculating ? 'Creating Plan...' : 'Calculate Monthly Investment'}
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
            results={{
              monthlyInvestmentRequired: result?.monthlyInvestment,
              totalInvestment: result?.totalInvestment,
              goalAmount: result?.goalAmount
            }} 
            isVisible={!!result} 
            title="Investment Plan"
          />
          
          {result && (
            <motion.div className="mt-6">
              <AnimatedChart
                data={result.data}
                type="bar"
                title="Goal vs Investment"
                colors={['#10b981', '#059669', '#047857']}
              />
              
              <motion.div 
                className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-green-900 dark:text-green-100 text-sm">
                  💡 <strong>Investment Strategy:</strong> Invest ₹{result.monthlyInvestment.toLocaleString()} monthly 
                  to reach your goal of ₹{result.goalAmount.toLocaleString()}.
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </CalculatorLayout>
  );
};

export default GoalBasedInvestmentPlanner;