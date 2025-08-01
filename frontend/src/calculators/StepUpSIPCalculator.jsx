import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

  const calculateStepUpSIP = (values) => {
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
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Step-up SIP Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Step-up SIP Calculator</h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              stepUpPercent: '',
              annualReturnRate: '',
              investmentYears: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateStepUpSIP}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Initial Monthly Investment (₹)
                  </label>
                  <Field
                    name="monthlyInvestment"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="10000"
                  />
                  <ErrorMessage name="monthlyInvestment" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Annual Step-up Percentage (%)
                  </label>
                  <Field
                    name="stepUpPercent"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="10"
                  />
                  <ErrorMessage name="stepUpPercent" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">SIP amount increases by this % every year</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <Field
                    name="annualReturnRate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="12"
                  />
                  <ErrorMessage name="annualReturnRate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Investment Duration (Years)
                  </label>
                  <Field
                    name="investmentYears"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="10"
                  />
                  <ErrorMessage name="investmentYears" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Step-up SIP
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
                  <span className="text-gray-700 dark:text-white/80">Total Investment:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Returns:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.totalReturns.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Future Value:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">₹{result.futureValue.toLocaleString()}</span>
                </div>
              
              <div className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-500/30 rounded-lg">
                <p className="text-orange-800 dark:text-orange-900 dark:text-orange-100 text-sm">
                  📈 <strong>Step-up SIP Tip:</strong> Increase your SIP amount annually to beat inflation and accelerate wealth creation!
                </p>
              </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Step-up SIP Breakdown</h3>
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
                    fill="url(#stepupGradient)"
                  />
                  <defs>
                    <linearGradient id="stepupGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#c2410c" />
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

export default StepUpSIPCalculator;