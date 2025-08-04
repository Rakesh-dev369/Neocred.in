import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  incomeType: Yup.string()
    .required('Income type is required'),
  income: Yup.number()
    .required('Income amount is required')
    .min(1000, 'Minimum income is ₹1,000')
    .max(10000000, 'Maximum income is ₹1 crore'),
  tdsRate: Yup.number()
    .min(0.1, 'Minimum TDS rate is 0.1%')
    .max(30, 'Maximum TDS rate is 30%')
});

const TDSEstimator = () => {
  const [result, setResult] = useState(null);

  const getTDSRate = (incomeType) => {
    const rates = {
      salary: 0, // No TDS on salary (handled via monthly TDS)
      freelance: 10,
      professional: 10,
      commission: 5,
      rent: 10,
      interest: 10,
      dividend: 10,
      winnings: 30,
      other: 10
    };
    return rates[incomeType] || 10;
  };

  const calculateTDS = (values) => {
    const { incomeType, income } = values;
    const defaultRate = getTDSRate(incomeType);
    const tdsRate = values.tdsRate || defaultRate;
    
    const tdsAmount = (income * tdsRate) / 100;
    const netIncome = income - tdsAmount;
    const effectiveRate = ((tdsAmount / income) * 100).toFixed(2);
    
    setResult({
      incomeType,
      income,
      tdsRate,
      tdsAmount: Math.round(tdsAmount),
      netIncome: Math.round(netIncome),
      effectiveRate,
      data: [
        { name: 'Gross Income', amount: income },
        { name: 'TDS Deducted', amount: Math.round(tdsAmount) },
        { name: 'Net Income', amount: Math.round(netIncome) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">TDS Estimator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-white">🧾 TDS Estimator</h3>
          
          <Formik
            initialValues={{
              incomeType: '',
              income: '',
              tdsRate: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculateTDS(values);
              setSubmitting(false);
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Income Type
                  </label>
                  <Field
                    name="incomeType"
                    as="select"
                    className="input-field"
                    onChange={(e) => {
                      const incomeType = e.target.value;
                      setFieldValue('incomeType', incomeType);
                      setFieldValue('tdsRate', getTDSRate(incomeType));
                    }}
                  >
                    <option value="">Select Income Type</option>
                    <option value="salary">Salary</option>
                    <option value="freelance">Freelance/Contract Work</option>
                    <option value="professional">Professional Services</option>
                    <option value="commission">Commission</option>
                    <option value="rent">Rent Income</option>
                    <option value="interest">Interest Income</option>
                    <option value="dividend">Dividend</option>
                    <option value="winnings">Lottery/Winnings</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="incomeType" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Income Amount (₹)
                  </label>
                  <Field
                    name="income"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="100000"
                  />
                  <ErrorMessage name="income" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    TDS Rate (%)
                  </label>
                  <Field
                    name="tdsRate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="10"
                  />
                  <ErrorMessage name="tdsRate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">
                    {values.incomeType && `Default rate for ${values.incomeType}: ${getTDSRate(values.incomeType)}%`}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Estimate TDS
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">TDS Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Income Type:</span>
                  <span className="text-white font-semibold capitalize">{result.incomeType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Gross Income:</span>
                  <span className="text-blue-400 font-semibold">₹{result.income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">TDS Rate:</span>
                  <span className="text-white font-semibold">{result.tdsRate}%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">TDS Amount:</span>
                  <span className="text-red-400 font-bold text-xl">₹{result.tdsAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Net Income:</span>
                  <span className="text-green-400 font-bold text-lg">₹{result.netIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Effective Rate:</span>
                  <span className="text-purple-400 font-semibold">{result.effectiveRate}%</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-500/30 rounded-lg">
                <p className="text-orange-900 dark:text-orange-100 text-sm">
                  🧾 <strong>TDS Tip:</strong> TDS is advance tax. You can claim refund if total tax liability is less than TDS deducted.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Income Breakdown</h3>
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
                    fill="url(#tdsGradient)"
                  />
                  <defs>
                    <linearGradient id="tdsGradient" x1="0" y1="0" x2="0" y2="1">
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

export default TDSEstimator;