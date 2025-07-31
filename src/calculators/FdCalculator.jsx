import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { formatCurrency } from '../utils/formatCurrency';

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

  const calculateFD = (values) => {
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
      tenure: t
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">FD Calculator</h3>
          
          <Formik
            initialValues={{
              principal: '',
              rate: '',
              tenure: '',
              compounding: 'quarterly'
            }}
            validationSchema={validationSchema}
            onSubmit={calculateFD}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Principal Amount (₹)
                  </label>
                  <Field
                    name="principal"
                    type="number"
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="principal" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Interest Rate (% per annum)
                  </label>
                  <Field
                    name="rate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="7.5"
                  />
                  <ErrorMessage name="rate" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Tenure (Years)
                  </label>
                  <Field
                    name="tenure"
                    type="number"
                    className="input-field"
                    placeholder="5"
                  />
                  <ErrorMessage name="tenure" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Compounding Frequency
                  </label>
                  <Field 
                    as="select" 
                    name="compounding" 
                    className="w-full px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white/40 text-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="yearly" className="bg-gray-800 text-white">Yearly</option>
                    <option value="half-yearly" className="bg-gray-800 text-white">Half-Yearly</option>
                    <option value="quarterly" className="bg-gray-800 text-white">Quarterly</option>
                    <option value="monthly" className="bg-gray-800 text-white">Monthly</option>
                  </Field>
                  <ErrorMessage name="compounding" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate FD Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {result && (
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-6 text-white">Calculation Results</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/70">Principal Amount:</span>
                <span className="font-semibold text-blue-400">{formatCurrency(result.principal)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/70">Interest Earned:</span>
                <span className="font-semibold text-green-400">{formatCurrency(result.interestEarned)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/70">Maturity Amount:</span>
                <span className="font-bold text-yellow-400 text-lg">{formatCurrency(result.maturityAmount)}</span>
              </div>
              
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <p className="text-sm text-white/90">
                  Your FD will mature to <strong className="text-yellow-400">{formatCurrency(result.maturityAmount)}</strong> after {result.tenure} years,
                  earning you <strong className="text-green-400">{formatCurrency(result.interestEarned)}</strong> in interest.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}