import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  goal: Yup.number()
    .required('Retirement corpus is required')
    .min(1000000, 'Minimum corpus is ₹10 lakhs')
    .max(500000000, 'Maximum corpus is ₹50 crores'),
  years: Yup.number()
    .required('Years to retire is required')
    .min(5, 'Minimum period is 5 years')
    .max(40, 'Maximum period is 40 years'),
  rate: Yup.number()
    .required('Expected return is required')
    .min(5, 'Minimum rate is 5%')
    .max(20, 'Maximum rate is 20%'),
  currentAge: Yup.number()
    .required('Current age is required')
    .min(18, 'Minimum age is 18 years')
    .max(55, 'Maximum age is 55 years')
});

const RetirementGoalPlanner = () => {
  const [result, setResult] = useState(null);

  const calculateRetirementPlan = (values) => {
    const { goal, years, rate, currentAge } = values;
    
    // Monthly investment needed calculation
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const monthlyInvestment = (goal * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalInvestment = monthlyInvestment * months;
    const retirementAge = currentAge + years;
    
    // Post-retirement monthly income (assuming 6% withdrawal rate)
    const monthlyIncomePostRetirement = (goal * 0.06) / 12;

    setResult({
      goal,
      years,
      currentAge,
      retirementAge,
      monthlyInvestment: Math.round(monthlyInvestment),
      totalInvestment: Math.round(totalInvestment),
      monthlyIncomePostRetirement: Math.round(monthlyIncomePostRetirement),
      data: [
        { name: 'Total Investment', amount: Math.round(totalInvestment) },
        { name: 'Retirement Corpus', amount: goal }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Retirement Goal Planner</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">🎯 Retirement Goal Planner</h3>
          
          <Formik
            initialValues={{
              goal: '',
              years: '',
              rate: '',
              currentAge: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateRetirementPlan}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Current Age (Years)
                  </label>
                  <Field
                    name="currentAge"
                    type="number"
                    className="input-field"
                    placeholder="30"
                  />
                  <ErrorMessage name="currentAge" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Retirement Corpus Needed (₹)
                  </label>
                  <Field
                    name="goal"
                    type="number"
                    className="input-field"
                    placeholder="5000000"
                  />
                  <ErrorMessage name="goal" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Years to Retirement
                  </label>
                  <Field
                    name="years"
                    type="number"
                    className="input-field"
                    placeholder="25"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Plan My Retirement
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Retirement Plan</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Current Age:</span>
                  <span className="text-white font-semibold">{result.currentAge} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Retirement Age:</span>
                  <span className="text-white font-semibold">{result.retirementAge} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Years to Invest:</span>
                  <span className="text-white font-semibold">{result.years} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Investment Needed:</span>
                  <span className="text-blue-400 font-bold text-xl">₹{result.monthlyInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Investment:</span>
                  <span className="text-green-400 font-semibold">₹{result.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Retirement Corpus:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.goal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Monthly Income Post-Retirement:</span>
                  <span className="text-purple-400 font-bold text-lg">₹{result.monthlyIncomePostRetirement.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-100 text-sm">
                  🎯 <strong>Retirement Tip:</strong> Start early to benefit from compounding. Consider inflation while planning your corpus.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Investment vs Goal</h3>
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
                    fill="url(#retirementGradient)"
                  />
                  <defs>
                    <linearGradient id="retirementGradient" x1="0" y1="0" x2="0" y2="1">
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

export default RetirementGoalPlanner;