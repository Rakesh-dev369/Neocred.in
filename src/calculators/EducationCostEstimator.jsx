import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  currentCost: Yup.number()
    .required('Current education cost is required')
    .min(50000, 'Minimum cost is ₹50,000')
    .max(10000000, 'Maximum cost is ₹1 crore'),
  years: Yup.number()
    .required('Years until enrollment is required')
    .min(1, 'Minimum period is 1 year')
    .max(20, 'Maximum period is 20 years'),
  inflationRate: Yup.number()
    .required('Education inflation rate is required')
    .min(5, 'Minimum inflation is 5%')
    .max(15, 'Maximum inflation is 15%'),
  educationType: Yup.string()
    .required('Education type is required')
});

const EducationCostEstimator = () => {
  const [result, setResult] = useState(null);

  const calculateEducationCost = (values) => {
    const { currentCost, years, inflationRate, educationType } = values;
    
    // Future cost calculation with compound inflation
    const futureCost = currentCost * Math.pow(1 + inflationRate / 100, years);
    
    // Monthly savings required (assuming 8% return on investment)
    const investmentReturn = 0.08;
    const monthlyRate = investmentReturn / 12;
    const months = years * 12;
    const monthlySavings = (futureCost * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    
    // Total investment vs future cost
    const totalInvestment = monthlySavings * months;
    const investmentGrowth = futureCost - totalInvestment;
    
    // Different scenarios
    const scenarios = [
      { years: years, cost: Math.round(futureCost) },
      { years: years - 2, cost: Math.round(currentCost * Math.pow(1 + inflationRate / 100, Math.max(0, years - 2))) },
      { years: years + 2, cost: Math.round(currentCost * Math.pow(1 + inflationRate / 100, years + 2)) }
    ];

    setResult({
      currentCost,
      years,
      inflationRate,
      educationType,
      futureCost: Math.round(futureCost),
      monthlySavings: Math.round(monthlySavings),
      totalInvestment: Math.round(totalInvestment),
      investmentGrowth: Math.round(investmentGrowth),
      data: [
        { name: 'Current Cost', amount: currentCost },
        { name: 'Future Cost', amount: Math.round(futureCost) },
        { name: 'Monthly Savings', amount: Math.round(monthlySavings * 12) }
      ],
      scenarios
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Education Cost Estimator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">🎓 Education Cost Estimator</h3>
          
          <Formik
            initialValues={{
              currentCost: '',
              years: '',
              inflationRate: 8,
              educationType: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateEducationCost}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Education Type
                  </label>
                  <Field
                    name="educationType"
                    as="select"
                    className="input-field"
                    onChange={(e) => {
                      const type = e.target.value;
                      setFieldValue('educationType', type);
                      // Set typical costs based on education type
                      if (type === 'engineering') setFieldValue('currentCost', 800000);
                      else if (type === 'medical') setFieldValue('currentCost', 1500000);
                      else if (type === 'mba') setFieldValue('currentCost', 2000000);
                      else if (type === 'abroad') setFieldValue('currentCost', 4000000);
                    }}
                  >
                    <option value="">Select Education Type</option>
                    <option value="engineering">Engineering (B.Tech)</option>
                    <option value="medical">Medical (MBBS)</option>
                    <option value="mba">MBA</option>
                    <option value="abroad">Study Abroad</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="educationType" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Current Cost of Education (₹)
                  </label>
                  <Field
                    name="currentCost"
                    type="number"
                    className="input-field"
                    placeholder="800000"
                  />
                  <ErrorMessage name="currentCost" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Years Until Enrollment
                  </label>
                  <Field
                    name="years"
                    type="number"
                    className="input-field"
                    placeholder="10"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Education Inflation Rate (% per year)
                  </label>
                  <Field
                    name="inflationRate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="8"
                  />
                  <ErrorMessage name="inflationRate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Education inflation typically 8-12%</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Estimate Future Cost
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Cost Projection</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Education Type:</span>
                  <span className="text-white font-semibold capitalize">{result.educationType}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Current Cost:</span>
                  <span className="text-blue-400 font-semibold">₹{result.currentCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Years to Plan:</span>
                  <span className="text-white font-semibold">{result.years} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Inflation Rate:</span>
                  <span className="text-red-400 font-semibold">{result.inflationRate}%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Future Cost:</span>
                  <span className="text-yellow-400 font-bold text-xl">₹{result.futureCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly Savings Needed:</span>
                  <span className="text-green-400 font-bold text-lg">₹{result.monthlySavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Total Investment:</span>
                  <span className="text-purple-400 font-semibold">₹{result.totalInvestment.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-100 text-sm">
                  🎓 <strong>Education Tip:</strong> Start early! Education costs rise faster than general inflation. Consider education loans and scholarships too.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Cost Comparison</h3>
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
                    fill="url(#educationGradient)"
                  />
                  <defs>
                    <linearGradient id="educationGradient" x1="0" y1="0" x2="0" y2="1">
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

export default EducationCostEstimator;