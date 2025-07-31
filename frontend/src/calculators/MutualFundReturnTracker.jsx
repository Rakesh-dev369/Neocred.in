import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const validationSchema = Yup.object({
  invested: Yup.number()
    .required('Invested amount is required')
    .min(1000, 'Minimum amount is ₹1,000')
    .max(10000000, 'Maximum amount is ₹1 crore'),
  currentValue: Yup.number()
    .required('Current value is required')
    .min(0, 'Current value cannot be negative')
    .max(50000000, 'Maximum value is ₹5 crores')
});

const COLORS = ['#3b82f6', '#10b981', '#ef4444'];

const MutualFundReturnTracker = () => {
  const [result, setResult] = useState(null);

  const calculateReturns = (values) => {
    const { invested, currentValue } = values;
    const absoluteReturn = currentValue - invested;
    const percentageReturn = ((currentValue - invested) / invested) * 100;
    
    const data = [
      { name: 'Invested Amount', value: invested, color: '#3b82f6' },
      { name: absoluteReturn >= 0 ? 'Gains' : 'Loss', value: Math.abs(absoluteReturn), color: absoluteReturn >= 0 ? '#10b981' : '#ef4444' }
    ];

    setResult({
      invested,
      currentValue,
      absoluteReturn,
      percentageReturn: percentageReturn.toFixed(2),
      data
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Mutual Fund Return Tracker</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">📈 Mutual Fund Return Tracker</h3>
          
          <Formik
            initialValues={{
              invested: '',
              currentValue: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateReturns}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Total Invested Amount (₹)
                  </label>
                  <Field
                    name="invested"
                    type="number"
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="invested" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Current Fund Value (₹)
                  </label>
                  <Field
                    name="currentValue"
                    type="number"
                    className="input-field"
                    placeholder="120000"
                  />
                  <ErrorMessage name="currentValue" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Return Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Invested Amount:</span>
                  <span className="text-blue-400 font-semibold">₹{result.invested.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Current Value:</span>
                  <span className="text-white font-semibold">₹{result.currentValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Absolute Return:</span>
                  <span className={`font-semibold ${result.absoluteReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {result.absoluteReturn >= 0 ? '+' : ''}₹{result.absoluteReturn.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Percentage Return:</span>
                  <span className={`font-bold text-lg ${result.absoluteReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {result.absoluteReturn >= 0 ? '+' : ''}{result.percentageReturn}%
                  </span>
                </div>
              </div>
              
              <div className={`mt-6 p-4 rounded-lg border ${result.absoluteReturn >= 0 ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
                <p className={`text-sm ${result.absoluteReturn >= 0 ? 'text-green-100' : 'text-red-100'}`}>
                  {result.absoluteReturn >= 0 ? '📈' : '📉'} <strong>Performance:</strong> Your mutual fund has {result.absoluteReturn >= 0 ? 'gained' : 'lost'} ₹{Math.abs(result.absoluteReturn).toLocaleString()} ({result.percentageReturn}%).
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Investment Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={result.data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={30}
                    stroke="#ffffff"
                    strokeWidth={2}
                  >
                    {result.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '10px', color: '#ffffff' }}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MutualFundReturnTracker;