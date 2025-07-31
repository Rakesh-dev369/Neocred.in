import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  monthlyRent: Yup.number()
    .required('Monthly rent is required')
    .min(5000, 'Minimum rent is ₹5,000')
    .max(200000, 'Maximum rent is ₹2 lakhs'),
  homePrice: Yup.number()
    .required('Home price is required')
    .min(1000000, 'Minimum home price is ₹10 lakhs')
    .max(100000000, 'Maximum home price is ₹10 crores'),
  years: Yup.number()
    .required('Years to compare is required')
    .min(5, 'Minimum period is 5 years')
    .max(30, 'Maximum period is 30 years'),
  downPayment: Yup.number()
    .required('Down payment percentage is required')
    .min(10, 'Minimum down payment is 10%')
    .max(50, 'Maximum down payment is 50%'),
  loanRate: Yup.number()
    .required('Loan interest rate is required')
    .min(6, 'Minimum rate is 6%')
    .max(15, 'Maximum rate is 15%'),
  appreciationRate: Yup.number()
    .required('Property appreciation rate is required')
    .min(2, 'Minimum appreciation is 2%')
    .max(12, 'Maximum appreciation is 12%')
});

const RentVsBuyCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateComparison = (values) => {
    const { monthlyRent, homePrice, years, downPayment, loanRate, appreciationRate } = values;
    
    // Rent scenario
    const totalRent = monthlyRent * 12 * years;
    const rentIncrease = 0.05; // 5% annual rent increase
    let cumulativeRent = 0;
    for (let i = 0; i < years; i++) {
      cumulativeRent += monthlyRent * 12 * Math.pow(1 + rentIncrease, i);
    }
    
    // Buy scenario
    const downPaymentAmount = (homePrice * downPayment) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const monthlyRate = loanRate / 100 / 12;
    const totalMonths = years * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    const totalEMI = emi * totalMonths;
    const totalInterest = totalEMI - loanAmount;
    const maintenanceCost = homePrice * 0.01 * years; // 1% annual maintenance
    const totalBuyCost = downPaymentAmount + totalEMI + maintenanceCost;
    
    // Property appreciation
    const futureValue = homePrice * Math.pow(1 + appreciationRate / 100, years);
    const netBuyCost = totalBuyCost - futureValue;
    
    const recommendation = cumulativeRent < netBuyCost ? 'Renting is better' : 'Buying is better';
    const savings = Math.abs(cumulativeRent - netBuyCost);

    setResult({
      cumulativeRent: Math.round(cumulativeRent),
      totalBuyCost: Math.round(totalBuyCost),
      netBuyCost: Math.round(netBuyCost),
      futureValue: Math.round(futureValue),
      emi: Math.round(emi),
      downPaymentAmount: Math.round(downPaymentAmount),
      recommendation,
      savings: Math.round(savings),
      data: [
        { name: 'Total Rent Cost', amount: Math.round(cumulativeRent) },
        { name: 'Net Buy Cost', amount: Math.round(netBuyCost) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Rent vs Buy Home Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">🏠 Rent vs Buy Calculator</h3>
          
          <Formik
            initialValues={{
              monthlyRent: '',
              homePrice: '',
              years: '',
              downPayment: 20,
              loanRate: 8.5,
              appreciationRate: 6
            }}
            validationSchema={validationSchema}
            onSubmit={calculateComparison}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Monthly Rent (₹)
                  </label>
                  <Field
                    name="monthlyRent"
                    type="number"
                    className="input-field"
                    placeholder="25000"
                  />
                  <ErrorMessage name="monthlyRent" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Home Price (₹)
                  </label>
                  <Field
                    name="homePrice"
                    type="number"
                    className="input-field"
                    placeholder="5000000"
                  />
                  <ErrorMessage name="homePrice" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Years to Compare
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
                    Down Payment (%)
                  </label>
                  <Field
                    name="downPayment"
                    type="number"
                    className="input-field"
                    placeholder="20"
                  />
                  <ErrorMessage name="downPayment" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Home Loan Rate (%)
                  </label>
                  <Field
                    name="loanRate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="8.5"
                  />
                  <ErrorMessage name="loanRate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Property Appreciation (% per year)
                  </label>
                  <Field
                    name="appreciationRate"
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="6"
                  />
                  <ErrorMessage name="appreciationRate" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Compare Rent vs Buy
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Comparison Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Total Rent Cost:</span>
                  <span className="text-red-400 font-semibold">₹{result.cumulativeRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Down Payment:</span>
                  <span className="text-blue-400 font-semibold">₹{result.downPaymentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Monthly EMI:</span>
                  <span className="text-white font-semibold">₹{result.emi.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Property Future Value:</span>
                  <span className="text-green-400 font-semibold">₹{result.futureValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">Net Buy Cost:</span>
                  <span className="text-orange-400 font-semibold">₹{result.netBuyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Recommendation:</span>
                  <span className={`font-bold text-lg ${result.recommendation.includes('Buying') ? 'text-green-400' : 'text-blue-400'}`}>
                    {result.recommendation}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  🏠 <strong>Analysis:</strong> {result.recommendation} by approximately ₹{result.savings.toLocaleString()} over the comparison period.
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
                    fill="url(#rentBuyGradient)"
                  />
                  <defs>
                    <linearGradient id="rentBuyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#2563eb" />
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

export default RentVsBuyCalculator;