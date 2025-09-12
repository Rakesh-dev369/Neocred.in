import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/formatCurrency';
import { CalculatorLayout, AnimatedInput, AnimatedResults, AnimatedChart, AnimatedButton } from '../components/calculator';

const validationSchema = Yup.object({
  principal: Yup.number()
    .required('Principal amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  rate: Yup.number()
    .required('Interest rate is required')
    .min(1, 'Minimum rate is 1%')
    .max(15, 'Maximum rate is 15%'),
  tenure: Yup.number()
    .required('Tenure is required')
    .min(1, 'Minimum tenure is 1 year')
    .max(10, 'Maximum tenure is 10 years'),
  compounding: Yup.string().required('Compounding frequency is required')
});

export default function FdCalculator() {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [status, setStatus] = useState(null);

  const calculateFD = async (values) => {
    setIsCalculating(true);
    setStatus({ type: 'info', message: 'Calculating your FD returns...' });
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      const { principal, rate, tenure, compounding } = values;
      const P = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseFloat(tenure);
      
      let n;
      switch (compounding) {
        case 'yearly': n = 1; break;
        case 'half-yearly': n = 2; break;
        case 'quarterly': n = 4; break;
        case 'monthly': n = 12; break;
        default: n = 4;
      }

      const maturityAmount = P * Math.pow((1 + r / n), n * t);
      const interestEarned = maturityAmount - P;

      setResult({
        principal: P,
        maturityAmount,
        interestEarned,
        tenure: t,
        data: [
          { name: 'Principal', amount: P },
          { name: 'Interest', amount: interestEarned },
          { name: 'Maturity', amount: maturityAmount }
        ]
      });
      
      setStatus({ type: 'success', message: 'FD calculation completed successfully!' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Error calculating FD returns. Please try again.' });
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <CalculatorLayout 
      title="FD Calculator" 
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
            Fixed Deposit Calculator
          </motion.h3>
          
          <Formik
            initialValues={{
              principal: '',
              rate: '',
              tenure: '',
              compounding: 'quarterly'
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateFD(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <AnimatedInput
                  name="principal"
                  label="Principal Amount"
                  placeholder="100000"
                  prefix="₹"
                />

                <AnimatedInput
                  name="rate"
                  label="Interest Rate (per annum)"
                  placeholder="7.5"
                  suffix="%"
                  step="0.1"
                  prefix=""
                />

                <AnimatedInput
                  name="tenure"
                  label="Tenure"
                  placeholder="5"
                  suffix=" years"
                  prefix=""
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                    Compounding Frequency
                  </label>
                  <Field 
                    as="select" 
                    name="compounding" 
                    className="w-full px-3 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="yearly">Yearly</option>
                    <option value="half-yearly">Half-Yearly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="monthly">Monthly</option>
                  </Field>
                </motion.div>

                <AnimatedButton
                  type="submit"
                  loading={isCalculating}
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                  variant="success"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate FD Returns'}
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
            title="FD Investment Results"
          />
          
          {result && (
            <motion.div className="mt-6">
              <AnimatedChart
                data={result.data}
                type="bar"
                title="FD Breakdown"
                colors={['#10b981', '#34d399', '#6ee7b7']}
              />
              
              <motion.div 
                className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-500/30 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-blue-800 dark:text-blue-100 text-sm">
                  💰 <strong>FD Tip:</strong> Your FD will mature to <strong>{formatCurrency(result.maturityAmount)}</strong> after {result.tenure} years, earning <strong>{formatCurrency(result.interestEarned)}</strong> in interest.
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </CalculatorLayout>
  );
}