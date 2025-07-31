import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Monthly contribution is required')
    .min(500, 'Minimum contribution is ₹500')
    .max(200000, 'Maximum contribution is ₹2 lakhs'),
  rate: Yup.number()
    .required('Expected rate is required')
    .min(5, 'Minimum rate is 5%')
    .max(20, 'Maximum rate is 20%'),
  years: Yup.number()
    .required('Investment years is required')
    .min(10, 'Minimum period is 10 years')
    .max(40, 'Maximum period is 40 years')
});

const NPSReturnCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateNPS = (values) => {
    const { amount, rate, years } = values;
    
    // NPS calculation with monthly compounding
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const maturityValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate;
    
    const totalInvestment = amount * months;
    const totalReturns = maturityValue - totalInvestment;
    
    // At maturity, 60% can be withdrawn, 40% goes to annuity
    const lumpSumWithdrawal = maturityValue * 0.6;
    const annuityAmount = maturityValue * 0.4;
    const monthlyPension = (annuityAmount * 0.06) / 12; // Assuming 6% annuity rate

    setResult({
      totalInvestment: Math.round(totalInvestment),
      maturityValue: Math.round(maturityValue),
      totalReturns: Math.round(totalReturns),
      lumpSumWithdrawal: Math.round(lumpSumWithdrawal),
      annuityAmount: Math.round(annuityAmount),
      monthlyPension: Math.round(monthlyPension),
      data: [
        { name: 'Invested', amount: Math.round(totalInvestment) },
        { name: 'Returns', amount: Math.round(totalReturns) },
        { name: 'Maturity Value', amount: Math.round(maturityValue) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">NPS Return Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">📊 NPS Return Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              rate: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateNPS}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Monthly Contribution (₹)
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    className="input-field"
                    placeholder="5000"
                  />
                  <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <Field
                    name="rate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="10"
                  />
                  <ErrorMessage name="rate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Investment Period (Years)
                  </label>
                  <Field
                    name="years"
                    type="number"
                    className="input-field"
                    placeholder="20"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate NPS Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">NPS Projection</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Investment:</span>
                  <span className="text-blue-400 font-semibold">₹{result.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Returns:</span>
                  <span className="text-green-400 font-semibold">₹{result.totalReturns.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Maturity Value:</span>
                  <span className="text-yellow-400 font-bold text-xl">₹{result.maturityValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Lump Sum (60%):</span>
                  <span className="text-purple-400 font-semibold">₹{result.lumpSumWithdrawal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Annuity Amount (40%):</span>
                  <span className="text-orange-400 font-semibold">₹{result.annuityAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Monthly Pension:</span>
                  <span className="text-cyan-400 font-bold text-lg">₹{result.monthlyPension.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  📊 <strong>NPS Benefit:</strong> Tax deduction up to ₹2 lakhs under Section 80CCD. Lock-in until 60 years with pension benefits.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">NPS Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#ffffff', fontSize: 10 }}
                    axisLine={{ stroke: '#ffffff', strokeWidth: 1 }}
                  />
                  <YAxis 
                    tick={{ fill: '#ffffff', fontSize: 10 }}
                    axisLine={{ stroke: '#ffffff', strokeWidth: 1 }}
                    tickFormatter={(val) => `₹${(val/100000).toFixed(0)}L`}
                  />
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Bar 
                    dataKey="amount" 
                    radius={[4, 4, 0, 0]}
                    fill="url(#npsGradient)"
                  />
                  <defs>
                    <linearGradient id="npsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
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

export default NPSReturnCalculator;