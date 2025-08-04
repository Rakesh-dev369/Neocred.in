import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  grams: Yup.number()
    .required('Gold quantity is required')
    .min(0.1, 'Minimum quantity is 0.1 grams')
    .max(10000, 'Maximum quantity is 10,000 grams'),
  buyPrice: Yup.number()
    .required('Buy price is required')
    .min(1000, 'Minimum price is ₹1,000 per gram')
    .max(100000, 'Maximum price is ₹1,00,000 per gram'),
  currentPrice: Yup.number()
    .required('Current price is required')
    .min(1000, 'Minimum price is ₹1,000 per gram')
    .max(100000, 'Maximum price is ₹1,00,000 per gram')
});

const GoldInvestmentCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateGoldReturns = (values) => {
    const { grams, buyPrice, currentPrice } = values;
    const totalInvestment = grams * buyPrice;
    const currentValue = grams * currentPrice;
    const absoluteReturn = currentValue - totalInvestment;
    const percentageReturn = ((currentValue - totalInvestment) / totalInvestment) * 100;
    
    setResult({
      grams,
      buyPrice,
      currentPrice,
      totalInvestment,
      currentValue,
      absoluteReturn,
      percentageReturn: percentageReturn.toFixed(2),
      data: [
        { name: 'Investment', amount: totalInvestment },
        { name: 'Current Value', amount: currentValue },
        { name: absoluteReturn >= 0 ? 'Profit' : 'Loss', amount: Math.abs(absoluteReturn) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Gold Investment Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🏅 Gold Investment Calculator</h3>
          
          <Formik
            initialValues={{
              grams: '',
              buyPrice: '',
              currentPrice: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateGoldReturns(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Quantity of Gold (Grams)
                  </label>
                  <Field
                    name="grams"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="10"
                  />
                  <ErrorMessage name="grams" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Buy Price per Gram (₹)
                  </label>
                  <Field
                    name="buyPrice"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="5000"
                  />
                  <ErrorMessage name="buyPrice" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Current Price per Gram (₹)
                  </label>
                  <Field
                    name="currentPrice"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="5500"
                  />
                  <ErrorMessage name="currentPrice" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Gold Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Gold Investment Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Gold Quantity:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.grams} grams</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Investment:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Current Value:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">₹{result.currentValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Absolute Return:</span>
                  <span className={`font-semibold ${result.absoluteReturn >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {result.absoluteReturn >= 0 ? '+' : ''}₹{result.absoluteReturn.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Percentage Return:</span>
                  <span className={`font-bold text-lg ${result.absoluteReturn >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {result.absoluteReturn >= 0 ? '+' : ''}{result.percentageReturn}%
                  </span>
                </div>
              </div>
              
              <div className={`mt-6 p-4 rounded-lg border ${result.absoluteReturn >= 0 ? 'bg-yellow-900/20 border-yellow-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
                <p className={`text-sm ${result.absoluteReturn >= 0 ? 'text-yellow-900 dark:text-yellow-100' : 'text-red-900 dark:text-red-100'}`}>
                  {result.absoluteReturn >= 0 ? '📈' : '📉'} <strong>Gold Performance:</strong> Your {result.grams}g gold investment has {result.absoluteReturn >= 0 ? 'gained' : 'lost'} ₹{Math.abs(result.absoluteReturn).toLocaleString()} ({result.percentageReturn}%).
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Investment vs Current Value</h3>
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
                    fill="url(#goldGradient)"
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
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

export default GoldInvestmentCalculator;