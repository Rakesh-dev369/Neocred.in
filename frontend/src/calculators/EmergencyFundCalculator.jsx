import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

  const calculateEmergencyFund = (values) => {
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
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Emergency Fund Calculator</h2>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Monthly Expenses (₹)
                  </label>
                  <Field
                    name="monthlyExpenses"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="30000"
                  />
                  <ErrorMessage name="monthlyExpenses" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Include rent, food, utilities, EMIs, etc.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Emergency Fund Duration
                  </label>
                  <Field
                    name="months"
                    as="select"
                    className="input-field"
                  >
                    <option value={3}>3 Months (Minimum)</option>
                    <option value={6}>6 Months (Recommended)</option>
                    <option value={9}>9 Months (Conservative)</option>
                    <option value={12}>12 Months (Very Safe)</option>
                  </Field>
                  <ErrorMessage name="months" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Emergency Fund
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Emergency Fund Plan</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Monthly Expenses:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.monthlyExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Coverage Period:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.months} months</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Emergency Fund Needed:</span>
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">₹{result.totalFund.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Monthly Savings Target:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">₹{result.monthlyTarget.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <p className="text-green-900 dark:text-green-100 text-sm">
                  🛡️ <strong>Emergency Tip:</strong> Keep your emergency fund in a liquid savings account or FD for easy access during emergencies.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Emergency Fund Options</h3>
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
                    fill="url(#emergencyGradient)"
                  />
                  <defs>
                    <linearGradient id="emergencyGradient" x1="0" y1="0" x2="0" y2="1">
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

export default EmergencyFundCalculator;