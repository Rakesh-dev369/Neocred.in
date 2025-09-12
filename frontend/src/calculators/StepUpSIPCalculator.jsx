import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { CalculatorLayout, AnimatedInput, AnimatedResults, AnimatedChart, AnimatedButton } from '../components/calculator';

const validationSchema = Yup.object({
  monthlyInvestment: Yup.number()
    .required('Monthly investment is required')
    .min(500, 'Minimum amount is ₹500')
    .max(100000, 'Maximum amount is ₹1,00,000'),
  stepUpPercent: Yup.number()
    .required('Step-up percentage is required')
    .min(1, 'Minimum step-up is 1%')
    .max(50, 'Maximum step-up is 50%'),
  annualReturnRate: Yup.number()
    .required('Annual return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%'),
  investmentYears: Yup.number()
    .required('Investment duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(40, 'Maximum duration is 40 years')
});

const StepUpSIPCalculator = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [status, setStatus] = useState(null);

  const calculateStepUpSIP = async (values) => {
    setIsCalculating(true);
    setStatus({ type: 'info', message: 'Calculating your Step-up SIP returns...' });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
    let { monthlyInvestment, stepUpPercent, annualReturnRate, investmentYears } = values;
    let totalInvestment = 0;
    let futureValue = 0;
    let monthlyRate = annualReturnRate / 12 / 100;

    for (let year = 1; year <= investmentYears; year++) {
      let yearlyInvestment = monthlyInvestment * 12;
      totalInvestment += yearlyInvestment;

      for (let month = 1; month <= 12; month++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyRate);
      }

      monthlyInvestment *= 1 + stepUpPercent / 100;
    }

    const totalReturns = futureValue - totalInvestment;

      setResult({
        totalInvestment: Math.round(totalInvestment),
        futureValue: Math.round(futureValue),
        totalReturns: Math.round(totalReturns),
        data: [
          { name: 'Invested', amount: Math.round(totalInvestment) },
          { name: 'Returns', amount: Math.round(totalReturns) },
          { name: 'Future Value', amount: Math.round(futureValue) }
        ]
      });
      
      setStatus({ type: 'success', message: 'Step-up SIP calculation completed successfully!' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Error calculating Step-up SIP returns. Please try again.' });
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <CalculatorLayout 
      title="Step-up SIP Calculator" 
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
            Step-up SIP Calculator
          </motion.h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              stepUpPercent: '',
              annualReturnRate: '',
              investmentYears: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateStepUpSIP(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <AnimatedInput
                  name="monthlyInvestment"
                  label="Initial Monthly Investment"
                  placeholder="10000"
                  prefix="₹"
                />
                
                <div>
                  <AnimatedInput
                    name="stepUpPercent"
                    label="Annual Step-up Percentage"
                    placeholder="10"
                    suffix="%"
                    step="0.1"
                    prefix=""
                  />
                  <motion.p 
                    className="text-xs text-gray-700 dark:text-gray-300 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    SIP amount increases by this % every year
                  </motion.p>
                </div>
                
                <AnimatedInput
                  name="annualReturnRate"
                  label="Expected Annual Return"
                  placeholder="12"
                  suffix="%"
                  step="0.1"
                  prefix=""
                />
                
                <AnimatedInput
                  name="investmentYears"
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
                  variant="primary"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Step-up SIP'}
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
            title="Step-up SIP Results"
          />
          
          {result && (
            <motion.div className="mt-6">
              <AnimatedChart
                data={result.data}
                type="bar"
                title="Step-up SIP Breakdown"
                colors={['#f97316', '#ea580c', '#c2410c']}
              />
              
              <motion.div 
                className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-500/30 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-orange-800 dark:text-orange-100 text-sm">
                  📈 <strong>Step-up SIP Tip:</strong> Increase your SIP amount annually to beat inflation and accelerate wealth creation!
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </CalculatorLayout>
  );
};

export default StepUpSIPCalculator;