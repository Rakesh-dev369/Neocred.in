import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
      tenure: t,
      data: [
        { name: 'Principal', amount: P },
        { name: 'Interest', amount: interestEarned },
        { name: 'Maturity', amount: maturityAmount }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">FD Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">FD Calculator</h3>
          
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
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Principal Amount (₹)
                  </label>
                  <Field
                    name="principal"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="principal" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Interest Rate (% per annum)
                  </label>
                  <Field
                    name="rate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="7.5"
                  />
                  <ErrorMessage name="rate" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Tenure (Years)
                  </label>
                  <Field
                    name="tenure"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="5"
                  />
                  <ErrorMessage name="tenure" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Compounding Frequency
                  </label>
                  <Field 
                    as="select" 
                    name="compounding" 
                    className="w-full px-3 py-2 bg-white dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-white/30 focus:border-blue-500 dark:focus:border-white/40 text-gray-900 dark:text-white transition-all duration-300 appearance-none cursor-pointer"
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
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Principal Amount:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{formatCurrency(result.principal)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Interest Earned:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">{formatCurrency(result.interestEarned)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Maturity Amount:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">{formatCurrency(result.maturityAmount)}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-500/30 rounded-lg">
                <p className="text-blue-800 dark:text-blue-900 dark:text-blue-100 text-sm">
                  💰 <strong>FD Tip:</strong> Your FD will mature to <strong>{formatCurrency(result.maturityAmount)}</strong> after {result.tenure} years, earning <strong>{formatCurrency(result.interestEarned)}</strong> in interest.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">FD Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                  />
                  <YAxis 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Bar 
                    dataKey="amount" 
                    radius={[4, 4, 0, 0]}
                    fill="url(#fdGradient)"
                  />
                  <defs>
                    <linearGradient id="fdGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}