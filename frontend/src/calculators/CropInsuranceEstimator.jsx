import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  area: Yup.number()
    .required('Area is required')
    .min(0.1, 'Minimum area is 0.1 acres')
    .max(1000, 'Maximum area is 1000 acres'),
  cropValuePerAcre: Yup.number()
    .required('Crop value per acre is required')
    .min(10000, 'Minimum crop value is ₹10,000 per acre')
    .max(200000, 'Maximum crop value is ₹2,00,000 per acre'),
  premiumRate: Yup.number()
    .required('Premium rate is required')
    .min(0.5, 'Minimum premium rate is 0.5%')
    .max(10, 'Maximum premium rate is 10%'),
  cropType: Yup.string()
    .required('Crop type is required')
});

const CropInsuranceEstimator = () => {
  const [result, setResult] = useState(null);

  const calculatePremium = (values) => {
    const { area, cropValuePerAcre, premiumRate, cropType } = values;
    
    const totalCropValue = area * cropValuePerAcre;
    const farmerPremium = totalCropValue * (premiumRate / 100);
    
    // Government subsidy (typically 50% for small farmers)
    const governmentSubsidy = farmerPremium * 0.5;
    const totalPremium = farmerPremium + governmentSubsidy;
    
    // Coverage amount (usually 80-90% of crop value)
    const coverageAmount = totalCropValue * 0.85;

    setResult({
      area,
      cropType,
      totalCropValue: Math.round(totalCropValue),
      farmerPremium: Math.round(farmerPremium),
      governmentSubsidy: Math.round(governmentSubsidy),
      totalPremium: Math.round(totalPremium),
      coverageAmount: Math.round(coverageAmount),
      data: [
        { name: 'Farmer Premium', amount: Math.round(farmerPremium) },
        { name: 'Govt Subsidy', amount: Math.round(governmentSubsidy) },
        { name: 'Coverage Amount', amount: Math.round(coverageAmount) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Crop Insurance Estimator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-white">🌾 Crop Insurance Estimator</h3>
          
          <Formik
            initialValues={{
              area: '',
              cropValuePerAcre: '',
              premiumRate: '',
              cropType: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculatePremium}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Crop Type
                  </label>
                  <Field
                    name="cropType"
                    as="select"
                    className="input-field"
                  >
                    <option value="">Select Crop Type</option>
                    <option value="rice">Rice</option>
                    <option value="wheat">Wheat</option>
                    <option value="cotton">Cotton</option>
                    <option value="sugarcane">Sugarcane</option>
                    <option value="maize">Maize</option>
                    <option value="pulses">Pulses</option>
                    <option value="oilseeds">Oilseeds</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="cropType" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Area (Acres)
                  </label>
                  <Field
                    name="area"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="2"
                  />
                  <ErrorMessage name="area" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Crop Value per Acre (₹)
                  </label>
                  <Field
                    name="cropValuePerAcre"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="30000"
                  />
                  <ErrorMessage name="cropValuePerAcre" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Premium Rate (%)
                  </label>
                  <Field
                    name="premiumRate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="2"
                  />
                  <ErrorMessage name="premiumRate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Varies by crop and region (1.5-5%)</p>
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
              <h3 className="text-lg font-semibold text-white mb-4">Insurance Estimate</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Crop Type:</span>
                  <span className="text-white font-semibold capitalize">{result.cropType}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Area:</span>
                  <span className="text-white font-semibold">{result.area} acres</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Crop Value:</span>
                  <span className="text-blue-400 font-semibold">₹{result.totalCropValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Farmer Premium:</span>
                  <span className="text-green-400 font-bold text-xl">₹{result.farmerPremium.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Government Subsidy:</span>
                  <span className="text-purple-400 font-semibold">₹{result.governmentSubsidy.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">Coverage Amount:</span>
                  <span className="text-yellow-400 font-bold text-lg">₹{result.coverageAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <p className="text-green-900 dark:text-green-100 text-sm">
                  🌾 <strong>Crop Insurance Tip:</strong> PMFBY scheme provides subsidized premiums. Coverage protects against natural calamities and yield loss.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Insurance Breakdown</h3>
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
                    fill="url(#cropInsuranceGradient)"
                  />
                  <defs>
                    <linearGradient id="cropInsuranceGradient" x1="0" y1="0" x2="0" y2="1">
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

export default CropInsuranceEstimator;