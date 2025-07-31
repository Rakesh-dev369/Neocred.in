import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  investmentReturn: Yup.number()
    .required('Investment return is required')
    .min(-20, 'Minimum return is -20%')
    .max(50, 'Maximum return is 50%'),
  inflationRate: Yup.number()
    .required('Inflation rate is required')
    .min(0, 'Minimum inflation is 0%')
    .max(20, 'Maximum inflation is 20%'),
  investmentAmount: Yup.number()
    .required('Investment amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  years: Yup.number()
    .required('Investment period is required')
    .min(1, 'Minimum period is 1 year')
    .max(30, 'Maximum period is 30 years')
});

const RealReturnsCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateRealReturns = (values) => {
    const { investmentReturn, inflationRate, investmentAmount, years } = values;
    
    // Real return calculation
    const realReturn = ((1 + investmentReturn / 100) / (1 + inflationRate / 100) - 1) * 100;
    
    // Future value calculations
    const nominalFutureValue = investmentAmount * Math.pow(1 + investmentReturn / 100, years);
    const realFutureValue = investmentAmount * Math.pow(1 + realReturn / 100, years);
    const inflationAdjustedValue = nominalFutureValue / Math.pow(1 + inflationRate / 100, years);
    
    // Purchasing power loss
    const purchasingPowerLoss = nominalFutureValue - inflationAdjustedValue;
    
    setResult({
      investmentReturn,
      inflationRate,
      realReturn: realReturn.toFixed(2),
      investmentAmount,
      years,
      nominalFutureValue: Math.round(nominalFutureValue),
      realFutureValue: Math.round(realFutureValue),
      inflationAdjustedValue: Math.round(inflationAdjustedValue),
      purchasingPowerLoss: Math.round(purchasingPowerLoss),
      data: [
        { name: 'Nominal Returns', amount: Math.round(nominalFutureValue - investmentAmount) },
        { name: 'Real Returns', amount: Math.round(realFutureValue - investmentAmount) },
        { name: 'Inflation Impact', amount: Math.round(purchasingPowerLoss) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Real Returns Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">📈 Real Returns Calculator</h3>
          
          <Formik
            initialValues={{
              investmentReturn: '',
              inflationRate: '',
              investmentAmount: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateRealReturns}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Investment Return (% per annum)
                  </label>
                  <Field
                    name="investmentReturn"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="12"
                  />
                  <ErrorMessage name="investmentReturn" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Inflation Rate (% per annum)
                  </label>
                  <Field
                    name="inflationRate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="6"
                  />
                  <ErrorMessage name="inflationRate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Current India inflation: ~6%</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Investment Amount (₹)
                  </label>
                  <Field
                    name="investmentAmount"
                    type="number"
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="investmentAmount" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Investment Period (Years)
                  </label>
                  <Field
                    name="years"
                    type="number"
                    className="input-field"
                    placeholder="10"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Real Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Real Returns Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Investment Amount:</span>
                  <span className="text-blue-400 font-semibold">₹{result.investmentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Nominal Return:</span>
                  <span className="text-white font-semibold">{result.investmentReturn}%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Inflation Rate:</span>
                  <span className="text-red-400 font-semibold">{result.inflationRate}%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Real Return:</span>
                  <span className={`font-bold text-xl ${parseFloat(result.realReturn) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {result.realReturn}%
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Nominal Future Value:</span>
                  <span className="text-yellow-400 font-semibold">₹{result.nominalFutureValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Real Future Value:</span>
                  <span className="text-green-400 font-semibold">₹{result.realFutureValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Purchasing Power Loss:</span>
                  <span className="text-red-400 font-bold text-lg">₹{result.purchasingPowerLoss.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                <p className="text-orange-100 text-sm">
                  📈 <strong>Real Returns Tip:</strong> Always consider inflation when evaluating investments. A 12% return with 6% inflation gives only 5.66% real return.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Returns Comparison</h3>
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
                    tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
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
                    fill="url(#realReturnsGradient)"
                  />
                  <defs>
                    <linearGradient id="realReturnsGradient" x1="0" y1="0" x2="0" y2="1">
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

export default RealReturnsCalculator;