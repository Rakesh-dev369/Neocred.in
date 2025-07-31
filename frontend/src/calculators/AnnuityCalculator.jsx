import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Annuity corpus is required')
    .min(100000, 'Minimum corpus is ₹1 lakh')
    .max(100000000, 'Maximum corpus is ₹10 crores'),
  rate: Yup.number()
    .required('Annuity rate is required')
    .min(3, 'Minimum rate is 3%')
    .max(15, 'Maximum rate is 15%'),
  years: Yup.number()
    .required('Payout years is required')
    .min(5, 'Minimum period is 5 years')
    .max(50, 'Maximum period is 50 years'),
  payoutType: Yup.string()
    .required('Payout type is required')
});

const AnnuityCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateAnnuity = (values) => {
    const { amount, rate, years, payoutType } = values;
    
    let annualPayout, monthlyPayout, totalPayout;
    
    if (payoutType === 'immediate') {
      // Immediate annuity - simple interest based
      annualPayout = (amount * rate) / 100;
      monthlyPayout = annualPayout / 12;
      totalPayout = annualPayout * years;
    } else {
      // Deferred annuity - compound growth then payout
      const maturityValue = amount * Math.pow(1 + rate / 100, years);
      annualPayout = (maturityValue * rate) / 100;
      monthlyPayout = annualPayout / 12;
      totalPayout = annualPayout * years;
    }
    
    const remainingCorpus = payoutType === 'immediate' ? Math.max(0, amount - totalPayout) : amount;

    setResult({
      amount,
      rate,
      years,
      payoutType: payoutType === 'immediate' ? 'Immediate' : 'Deferred',
      annualPayout: Math.round(annualPayout),
      monthlyPayout: Math.round(monthlyPayout),
      totalPayout: Math.round(totalPayout),
      remainingCorpus: Math.round(remainingCorpus),
      data: [
        { name: 'Initial Corpus', amount: amount },
        { name: 'Annual Payout', amount: Math.round(annualPayout) },
        { name: 'Total Payout', amount: Math.round(totalPayout) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Annuity Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">💰 Annuity Calculator</h3>
          
          <Formik
            initialValues={{
              amount: '',
              rate: '',
              years: '',
              payoutType: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateAnnuity}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Annuity Type
                  </label>
                  <Field
                    name="payoutType"
                    as="select"
                    className="input-field"
                  >
                    <option value="">Select Annuity Type</option>
                    <option value="immediate">Immediate Annuity</option>
                    <option value="deferred">Deferred Annuity</option>
                  </Field>
                  <ErrorMessage name="payoutType" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Annuity Corpus (₹)
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    className="input-field"
                    placeholder="1000000"
                  />
                  <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Annuity Rate (% per annum)
                  </label>
                  <Field
                    name="rate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="7"
                  />
                  <ErrorMessage name="rate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Payout Period (Years)
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
                  Calculate Annuity
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Annuity Projection</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Annuity Type:</span>
                  <span className="text-white font-semibold">{result.payoutType}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Initial Corpus:</span>
                  <span className="text-blue-400 font-semibold">₹{result.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Annuity Rate:</span>
                  <span className="text-white font-semibold">{result.rate}% per annum</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Payout Period:</span>
                  <span className="text-white font-semibold">{result.years} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Payout:</span>
                  <span className="text-green-400 font-bold text-xl">₹{result.monthlyPayout.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Annual Payout:</span>
                  <span className="text-purple-400 font-semibold">₹{result.annualPayout.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Total Payout:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.totalPayout.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <p className="text-purple-100 text-sm">
                  💰 <strong>Annuity Tip:</strong> {result.payoutType === 'Immediate' ? 'Immediate annuity provides regular income from day one.' : 'Deferred annuity grows your corpus before starting payouts.'}
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Annuity Breakdown</h3>
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
                    fill="url(#annuityGradient)"
                  />
                  <defs>
                    <linearGradient id="annuityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#6d28d9" />
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

export default AnnuityCalculator;