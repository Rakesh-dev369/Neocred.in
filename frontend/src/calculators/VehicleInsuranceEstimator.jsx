import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  vehicleValue: Yup.number()
    .required('Vehicle value is required')
    .min(50000, 'Minimum vehicle value is ₹50,000')
    .max(10000000, 'Maximum vehicle value is ₹1 crore'),
  type: Yup.string()
    .required('Vehicle type is required'),
  age: Yup.number()
    .required('Vehicle age is required')
    .min(0, 'Vehicle age cannot be negative')
    .max(20, 'Maximum vehicle age is 20 years'),
  city: Yup.string()
    .required('City type is required')
});

const VehicleInsuranceEstimator = () => {
  const [result, setResult] = useState(null);

  const calculatePremium = (values) => {
    const { vehicleValue, type, age, city } = values;
    
    // Base rate based on vehicle type
    const baseRate = type === 'car' ? 0.03 : 0.015;
    
    // Age depreciation factor
    const ageFactor = age === 0 ? 1.0 : age <= 5 ? 0.9 : age <= 10 ? 0.8 : 0.7;
    
    // City factor
    const cityFactor = city === 'metro' ? 1.2 : city === 'tier1' ? 1.1 : 1.0;
    
    const basePremium = vehicleValue * baseRate;
    const adjustedPremium = basePremium * ageFactor * cityFactor;
    
    // Add-ons (optional coverage)
    const zeroDepreciation = adjustedPremium * 0.2;
    const engineProtection = adjustedPremium * 0.1;
    const roadSideAssistance = 500;
    
    const totalWithAddOns = adjustedPremium + zeroDepreciation + engineProtection + roadSideAssistance;

    setResult({
      vehicleValue,
      type: type === 'car' ? 'Car' : 'Bike',
      age,
      city: city === 'metro' ? 'Metro' : city === 'tier1' ? 'Tier 1' : 'Tier 2/3',
      basePremium: Math.round(adjustedPremium),
      totalWithAddOns: Math.round(totalWithAddOns),
      data: [
        { name: 'Base Premium', amount: Math.round(adjustedPremium) },
        { name: 'With Add-ons', amount: Math.round(totalWithAddOns) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Vehicle Insurance Estimator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-white">🚘 Vehicle Insurance Estimator</h3>
          
          <Formik
            initialValues={{
              vehicleValue: '',
              type: '',
              age: '',
              city: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              calculatePremium(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Vehicle Type
                  </label>
                  <Field
                    name="type"
                    as="select"
                    className="input-field"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                  </Field>
                  <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Vehicle Value (₹)
                  </label>
                  <Field
                    name="vehicleValue"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="800000"
                  />
                  <ErrorMessage name="vehicleValue" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Vehicle Age (Years)
                  </label>
                  <Field
                    name="age"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="2"
                  />
                  <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
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
              <h3 className="text-lg font-semibold text-white mb-4">Premium Estimate</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Vehicle Type:</span>
                  <span className="text-white font-semibold">{result.type}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Vehicle Value:</span>
                  <span className="text-blue-400 font-semibold">₹{result.vehicleValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Vehicle Age:</span>
                  <span className="text-white font-semibold">{result.age} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">City:</span>
                  <span className="text-white font-semibold">{result.city}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Base Premium:</span>
                  <span className="text-green-400 font-bold text-xl">₹{result.basePremium.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">With Add-ons:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.totalWithAddOns.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-500/30 rounded-lg">
                <p className="text-orange-900 dark:text-orange-100 text-sm">
                  🚘 <strong>Vehicle Tip:</strong> Add-ons include Zero Depreciation, Engine Protection, and Roadside Assistance for comprehensive coverage.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Premium Comparison</h3>
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
                    fill="url(#vehicleInsuranceGradient)"
                  />
                  <defs>
                    <linearGradient id="vehicleInsuranceGradient" x1="0" y1="0" x2="0" y2="1">
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

export default VehicleInsuranceEstimator;