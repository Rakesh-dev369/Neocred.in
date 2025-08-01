import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  basicSalary: Yup.number()
    .required('Basic salary is required')
    .min(10000, 'Minimum basic salary is ₹10,000')
    .max(1000000, 'Maximum basic salary is ₹10 lakhs'),
  hraReceived: Yup.number()
    .required('HRA received is required')
    .min(0, 'HRA cannot be negative')
    .max(500000, 'Maximum HRA is ₹5 lakhs'),
  rentPaid: Yup.number()
    .required('Rent paid is required')
    .min(0, 'Rent cannot be negative')
    .max(200000, 'Maximum rent is ₹2 lakhs'),
  metroCity: Yup.boolean()
});

const HRAExemptionCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateHRA = (values) => {
    const { basicSalary, hraReceived, rentPaid, metroCity } = values;
    
    // HRA exemption calculation as per IT rules
    const actualHRA = hraReceived;
    const rentExcess = Math.max(0, rentPaid - (0.1 * basicSalary));
    const salaryPercentage = metroCity ? 0.5 * basicSalary : 0.4 * basicSalary;
    
    const exemptedHRA = Math.min(actualHRA, rentExcess, salaryPercentage);
    const taxableHRA = actualHRA - exemptedHRA;
    
    setResult({
      basicSalary,
      hraReceived: actualHRA,
      rentPaid,
      metroCity,
      exemptedHRA: Math.round(exemptedHRA),
      taxableHRA: Math.round(taxableHRA),
      rentExcess: Math.round(rentExcess),
      salaryPercentage: Math.round(salaryPercentage),
      data: [
        { name: 'HRA Received', amount: actualHRA },
        { name: 'HRA Exempted', amount: Math.round(exemptedHRA) },
        { name: 'Taxable HRA', amount: Math.round(taxableHRA) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">HRA Exemption Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🏠 HRA Exemption Calculator</h3>
          
          <Formik
            initialValues={{
              basicSalary: '',
              hraReceived: '',
              rentPaid: '',
              metroCity: false
            }}
            validationSchema={validationSchema}
            onSubmit={calculateHRA}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Basic Salary (₹)
                  </label>
                  <Field
                    name="basicSalary"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="50000"
                  />
                  <ErrorMessage name="basicSalary" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    HRA Received (₹)
                  </label>
                  <Field
                    name="hraReceived"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="20000"
                  />
                  <ErrorMessage name="hraReceived" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Monthly Rent Paid (₹)
                  </label>
                  <Field
                    name="rentPaid"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="15000"
                  />
                  <ErrorMessage name="rentPaid" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="flex items-center space-x-2 text-gray-700 dark:text-white/80">
                    <Field
                      name="metroCity"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    />
                    <span>Residing in Metro City (Mumbai, Delhi, Chennai, Kolkata)</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate HRA Exemption
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HRA Exemption Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Basic Salary:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.basicSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">HRA Received:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">₹{result.hraReceived.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Monthly Rent:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">₹{result.rentPaid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">City Type:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.metroCity ? 'Metro' : 'Non-Metro'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">HRA Exempted:</span>
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">₹{result.exemptedHRA.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Taxable HRA:</span>
                  <span className="text-red-600 dark:text-red-400 font-bold text-lg">₹{result.taxableHRA.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <p className="text-green-900 dark:text-green-100 text-sm">
                  🏠 <strong>HRA Rule:</strong> Exemption is minimum of: Actual HRA, Rent - 10% of Basic, {result.metroCity ? '50%' : '40%'} of Basic Salary.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">HRA Breakdown</h3>
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
                    fill="url(#hraGradient)"
                  />
                  <defs>
                    <linearGradient id="hraGradient" x1="0" y1="0" x2="0" y2="1">
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

export default HRAExemptionCalculator;