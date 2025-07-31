import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const validationSchema = Yup.object({
  monthlyInvestment: Yup.number()
    .required('Monthly investment is required')
    .min(500, 'Minimum amount is ₹500')
    .max(100000, 'Maximum amount is ₹1,00,000'),
  annualRate: Yup.number()
    .required('Annual return is required')
    .min(1, 'Minimum rate is 1%')
    .max(30, 'Maximum rate is 30%'),
  duration: Yup.number()
    .required('Duration is required')
    .min(1, 'Minimum duration is 1 year')
    .max(40, 'Maximum duration is 40 years')
});

const SIPCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateSIP = (values) => {
    const { monthlyInvestment, annualRate, duration } = values;
    const months = duration * 12;
    const monthlyRate = annualRate / 12 / 100;

    const maturityAmount = Array.from({ length: months }).reduce((acc, _, i) => {
      return acc + monthlyInvestment * Math.pow(1 + monthlyRate, months - i);
    }, 0);

    const totalInvested = monthlyInvestment * months;
    const estimatedReturns = maturityAmount - totalInvested;

    setResult({
      totalInvested,
      estimatedReturns,
      maturityAmount,
      data: [
        { name: "Invested", amount: totalInvested },
        { name: "Returns", amount: estimatedReturns },
        { name: "Maturity", amount: maturityAmount },
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">SIP Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">SIP Calculator</h3>
          
          <Formik
            initialValues={{
              monthlyInvestment: '',
              annualRate: '',
              duration: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateSIP}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Monthly Investment (₹)
                  </label>
                  <Field
                    name="monthlyInvestment"
                    type="number"
                    className="input-field"
                    placeholder="5000"
                  />
                  <ErrorMessage name="monthlyInvestment" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <Field
                    name="annualRate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="12"
                  />
                  <ErrorMessage name="annualRate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Investment Duration (Years)
                  </label>
                  <Field
                    name="duration"
                    type="number"
                    className="input-field"
                    placeholder="10"
                  />
                  <ErrorMessage name="duration" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate SIP Returns
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Invested:</span>
                  <span className="text-blue-400 font-semibold">₹{result.totalInvested.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Estimated Returns:</span>
                  <span className="text-green-400 font-semibold">₹{result.estimatedReturns.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Maturity Amount:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.maturityAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Investment Breakdown</h3>
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
                    fill="url(#sipGradient)"
                  />
                  <defs>
                    <linearGradient id="sipGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#3b82f6" />
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

export default SIPCalculator;