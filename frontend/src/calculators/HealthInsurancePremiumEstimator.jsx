import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const validationSchema = Yup.object({
  members: Yup.number()
    .required('Number of members is required')
    .min(1, 'Minimum 1 member')
    .max(10, 'Maximum 10 members'),
  sumInsured: Yup.number()
    .required('Sum insured is required')
    .min(100000, 'Minimum sum insured is ₹1 lakh')
    .max(10000000, 'Maximum sum insured is ₹1 crore'),
  city: Yup.string()
    .required('City type is required'),
  age: Yup.number()
    .required('Average age is required')
    .min(18, 'Minimum age is 18 years')
    .max(80, 'Maximum age is 80 years')
});

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const HealthInsurancePremiumEstimator = () => {
  const [result, setResult] = useState(null);

  const calculatePremium = (values) => {
    const { members, sumInsured, city, age } = values;
    
    // Base premium calculation
    let basePremium = sumInsured * 0.015;
    
    // City multiplier
    const cityMultiplier = city === 'metro' ? 1.3 : city === 'tier1' ? 1.1 : 1.0;
    
    // Age multiplier
    const ageMultiplier = age < 30 ? 0.8 : age < 45 ? 1.0 : age < 60 ? 1.4 : 1.8;
    
    // Member multiplier (discount for family)
    const memberMultiplier = members === 1 ? 1.0 : members <= 4 ? 0.85 : 0.75;
    
    const annualPremium = basePremium * cityMultiplier * ageMultiplier * memberMultiplier;
    
    const data = [
      { name: 'Base Premium', value: basePremium, color: '#10b981' },
      { name: 'City Factor', value: basePremium * (cityMultiplier - 1), color: '#f59e0b' },
      { name: 'Age Factor', value: basePremium * (ageMultiplier - 1), color: '#ef4444' }
    ].filter(item => item.value > 0);

    setResult({
      members,
      sumInsured,
      city,
      age,
      annualPremium: Math.round(annualPremium),
      monthlyPremium: Math.round(annualPremium / 12),
      data
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Health Insurance Premium Estimator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🏥 Health Insurance Premium Estimator</h3>
          
          <Formik
            initialValues={{
              members: '',
              sumInsured: '',
              city: '',
              age: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculatePremium}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Number of Family Members
                  </label>
                  <Field
                    name="members"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="2"
                  />
                  <ErrorMessage name="members" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Sum Insured (₹)
                  </label>
                  <Field
                    name="sumInsured"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="500000"
                  />
                  <ErrorMessage name="sumInsured" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    City Type
                  </label>
                  <Field
                    name="city"
                    as="select"
                    className="input-field"
                  >
                    <option value="">Select City Type</option>
                    <option value="metro">Metro City</option>
                    <option value="tier1">Tier 1 City</option>
                    <option value="tier2">Tier 2/3 City</option>
                  </Field>
                  <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Average Age of Members
                  </label>
                  <Field
                    name="age"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="35"
                  />
                  <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate Premium
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Premium Estimate</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Family Members:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.members}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Sum Insured:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.sumInsured.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">City Type:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.city === 'metro' ? 'Metro' : result.city === 'tier1' ? 'Tier 1' : 'Tier 2/3'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Monthly Premium:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.monthlyPremium.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Annual Premium:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-xl">₹{result.annualPremium.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <p className="text-green-900 dark:text-green-100 text-sm">
                  🏥 <strong>Health Tip:</strong> Consider higher sum insured for better coverage. Family floater plans offer cost savings.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Premium Factors</h3>
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
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {result.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
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
                  <Legend 
                    wrapperStyle={{ paddingTop: '10px', color: 'currentColor' }}
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

export default HealthInsurancePremiumEstimator;