import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  basic: Yup.number()
    .required('Basic salary is required')
    .min(10000, 'Minimum basic salary is ₹10,000')
    .max(500000, 'Maximum basic salary is ₹5 lakhs'),
  contribution: Yup.number()
    .required('Contribution percentage is required')
    .min(8, 'Minimum contribution is 8%')
    .max(12, 'Maximum contribution is 12%'),
  years: Yup.number()
    .required('Service years is required')
    .min(5, 'Minimum service is 5 years')
    .max(40, 'Maximum service is 40 years'),
  rate: Yup.number()
    .required('Interest rate is required')
    .min(6, 'Minimum rate is 6%')
    .max(12, 'Maximum rate is 12%'),
  currentAge: Yup.number()
    .required('Current age is required')
    .min(18, 'Minimum age is 18 years')
    .max(55, 'Maximum age is 55 years')
});

const EPFMaturityCalculator = () => {
  const [result, setResult] = useState(null);

  const calculateEPF = (values) => {
    const { basic, contribution, years, rate, currentAge } = values;
    
    // Monthly EPF contribution (employee + employer)
    const monthlyEmployeeContribution = (basic * contribution) / 100;
    const monthlyEmployerContribution = (basic * contribution) / 100;
    const totalMonthlyContribution = monthlyEmployeeContribution + monthlyEmployerContribution;
    
    // EPF calculation with monthly compounding
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const maturityAmount = totalMonthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate;
    
    const totalContribution = totalMonthlyContribution * months;
    const interestEarned = maturityAmount - totalContribution;
    const retirementAge = currentAge + years;

    setResult({
      basic,
      contribution,
      years,
      currentAge,
      retirementAge,
      monthlyEmployeeContribution: Math.round(monthlyEmployeeContribution),
      monthlyEmployerContribution: Math.round(monthlyEmployerContribution),
      totalMonthlyContribution: Math.round(totalMonthlyContribution),
      totalContribution: Math.round(totalContribution),
      interestEarned: Math.round(interestEarned),
      maturityAmount: Math.round(maturityAmount),
      data: [
        { name: 'Total Contribution', amount: Math.round(totalContribution) },
        { name: 'Interest Earned', amount: Math.round(interestEarned) },
        { name: 'Maturity Amount', amount: Math.round(maturityAmount) }
      ]
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">EPF Maturity Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🏢 EPF Maturity Calculator</h3>
          
          <Formik
            initialValues={{
              basic: '',
              contribution: '',
              years: '',
              rate: '',
              currentAge: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculateEPF}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Current Age (Years)
                  </label>
                  <Field
                    name="currentAge"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="25"
                  />
                  <ErrorMessage name="currentAge" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Basic Salary (₹)
                  </label>
                  <Field
                    name="basic"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="30000"
                  />
                  <ErrorMessage name="basic" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    EPF Contribution (%)
                  </label>
                  <Field
                    name="contribution"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="12"
                  />
                  <ErrorMessage name="contribution" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Standard rate: 12% (employee + employer)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Service Years
                  </label>
                  <Field
                    name="years"
                    type="number" onWheel={(e) => e.target.blur()}
                    className="input-field"
                    placeholder="20"
                  />
                  <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    EPF Interest Rate (%)
                  </label>
                  <Field
                    name="rate"
                    type="number" onWheel={(e) => e.target.blur()}
                    step="0.1" className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="8.5"
                  />
                  <ErrorMessage name="rate" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Current EPF rate: 8.5%</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate EPF Maturity
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">EPF Projection</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Current Age:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.currentAge} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Retirement Age:</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{result.retirementAge} years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Basic Salary:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">₹{result.basic.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Employee Contribution:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.monthlyEmployeeContribution.toLocaleString()}/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Employer Contribution:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">₹{result.monthlyEmployerContribution.toLocaleString()}/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Total Contribution:</span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">₹{result.totalContribution.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Interest Earned:</span>
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">₹{result.interestEarned.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-white/80">EPF Maturity Amount:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-xl">₹{result.maturityAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-500/30 rounded-lg">
                <p className="text-orange-900 dark:text-orange-100 text-sm">
                  🏢 <strong>EPF Benefit:</strong> Tax-free maturity after 5 years of service. Employer contributes equally to your EPF account.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">EPF Growth</h3>
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
                    tickFormatter={(val) => `₹${(val/100000).toFixed(0)}L`}
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
                    fill="url(#epfGradient)"
                  />
                  <defs>
                    <linearGradient id="epfGradient" x1="0" y1="0" x2="0" y2="1">
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

export default EPFMaturityCalculator;