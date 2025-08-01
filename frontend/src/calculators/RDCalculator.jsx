import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

  const calculateRDResult = (values) => {
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
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">RD Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">RD Calculator</h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              annualRate: '',
              tenureMonths: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateRDResult}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Monthly Investment (₹)
                  </label>
                  <Field
                    name="monthlyInvestment"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="2000"
                  />
                  <ErrorMessage name="monthlyInvestment" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Annual Interest Rate (%)
                  </label>
                  <Field
                    name="annualRate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="7"
                  />
                  <ErrorMessage name="annualRate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Tenure (Months)
                  </label>
                  <Field
                    name="tenureMonths"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="60"
                  />
                  <ErrorMessage name="tenureMonths" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate RD Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Invested:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.totalInvested.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Interest Earned:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.interestEarned.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Maturity Amount:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">₹{result.maturityAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-500/30 rounded-lg">
                <p className="text-green-800 dark:text-green-900 dark:text-green-100 text-sm">
                  💰 <strong>RD Tip:</strong> Recurring Deposits offer guaranteed returns with quarterly compounding. Perfect for disciplined savings!
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">RD Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    className="text-gray-900 dark:text-white"
                  />
                  <YAxis 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                    className="text-gray-900 dark:text-white"
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
                    fill="url(#rdGradient)"
                  />
                  <defs>
                    <linearGradient id="rdGradient" x1="0" y1="0" x2="0" y2="1">
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
};

export default RDCalculator;