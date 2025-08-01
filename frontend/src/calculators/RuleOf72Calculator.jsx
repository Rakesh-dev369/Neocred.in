import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const validationSchema = Yup.object({
  calcType: Yup.string().required('Calculation type is required'),
  interestRate: Yup.number().when('calcType', {
    is: 'time',
    then: () => Yup.number()
      .required('Interest rate is required')
      .min(0.1, 'Minimum rate is 0.1%')
      .max(50, 'Maximum rate is 50%'),
    otherwise: () => Yup.number()
  }),
  years: Yup.number().when('calcType', {
    is: 'rate',
    then: () => Yup.number()
      .required('Years is required')
      .min(1, 'Minimum period is 1 year')
      .max(100, 'Maximum period is 100 years'),
    otherwise: () => Yup.number()
  })
});

const RuleOf72Calculator = () => {
  const [result, setResult] = useState(null);

  const calculate72 = (values) => {
    const { calcType, interestRate, years } = values;
    
    let calculatedValue, resultText, chartData;
    
    if (calcType === 'time') {
      calculatedValue = 72 / interestRate;
      resultText = `Your investment will double in approximately ${calculatedValue.toFixed(2)} years`;
      
      // Create chart data showing doubling progression
      chartData = [];
      for (let i = 1; i <= 5; i++) {
        chartData.push({
          name: `${i}x`,
          years: (calculatedValue * i).toFixed(1),
          amount: Math.pow(2, i)
        });
      }
    } else {
      calculatedValue = 72 / years;
      resultText = `You need an annual interest rate of approximately ${calculatedValue.toFixed(2)}%`;
      
      // Create chart data showing different rates
      chartData = [];
      const rates = [calculatedValue * 0.5, calculatedValue * 0.75, calculatedValue, calculatedValue * 1.25, calculatedValue * 1.5];
      rates.forEach((rate, index) => {
        chartData.push({
          name: `${rate.toFixed(1)}%`,
          years: (72 / rate).toFixed(1),
          rate: rate.toFixed(1)
        });
      });
    }

    setResult({
      calcType,
      interestRate,
      years,
      calculatedValue: calculatedValue.toFixed(2),
      resultText,
      chartData
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Rule of 72 Calculator</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">📊 Rule of 72 Calculator</h3>
          
          <Formik
            initialValues={{
              calcType: 'time',
              interestRate: '',
              years: ''
            }}
            validationSchema={validationSchema}
            onSubmit={calculate72}
          >
            {({ values, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Choose Calculation Type
                  </label>
                  <Field
                    name="calcType"
                    as="select"
                    className="input-field"
                  >
                    <option value="time">Find Time to Double</option>
                    <option value="rate">Find Required Interest Rate</option>
                  </Field>
                  <ErrorMessage name="calcType" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                {values.calcType === 'time' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                      Annual Interest Rate (%)
                    </label>
                    <Field
                      name="interestRate"
                      type="number" onWheel={(e) => e.target.blur()}
                      step="0.01"
                      className="input-field"
                      placeholder="8.5"
                    />
                    <ErrorMessage name="interestRate" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}
                
                {values.calcType === 'rate' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                      Years to Double
                    </label>
                    <Field
                      name="years"
                      type="number" onWheel={(e) => e.target.blur()}
                      className="input-field"
                      placeholder="10"
                    />
                    <ErrorMessage name="years" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Calculate
                </button>
              </Form>
            )}
          </Formik>

          {/* Rule of 72 Explanation */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 rounded-lg">
            <h4 className="text-blue-700 dark:text-blue-300 font-semibold mb-2">📊 What is Rule of 72?</h4>
            <p className="text-blue-900 dark:text-blue-100 text-sm mb-2">
              The Rule of 72 is a quick way to estimate how long it takes for an investment to double.
            </p>
            <p className="text-blue-900 dark:text-blue-100 text-sm">
              <strong>Formula:</strong> Time to Double = 72 ÷ Interest Rate
            </p>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Calculation Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                  <span className="text-gray-700 dark:text-white/80">Calculation Type:</span>
                  <span className="text-gray-900 dark:text-white font-semibold capitalize">
                    {result.calcType === 'time' ? 'Time to Double' : 'Required Rate'}
                  </span>
                </div>
                
                {result.calcType === 'time' ? (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                      <span className="text-gray-700 dark:text-white/80">Interest Rate:</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{result.interestRate}%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700 dark:text-white/80">Time to Double:</span>
                      <span className="text-green-600 dark:text-green-400 font-bold text-xl">{result.calculatedValue} years</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-300 dark:border-white/20">
                      <span className="text-gray-700 dark:text-white/80">Target Years:</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{result.years} years</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700 dark:text-white/80">Required Rate:</span>
                      <span className="text-green-600 dark:text-green-400 font-bold text-xl">{result.calculatedValue}%</span>
                    </div>
                  </>
                )}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <p className="text-green-900 dark:text-green-100 text-sm font-medium">
                  {result.resultText}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {result.calcType === 'time' ? 'Doubling Progression' : 'Rate Comparison'}
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result.chartData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                  />
                  <YAxis 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
                    tickFormatter={(val) => `${val}${result.calcType === 'time' ? 'x' : 'y'}`}
                  />
                  <Tooltip 
                    formatter={(val, name) => [
                      result.calcType === 'time' 
                        ? [`${val} years`, 'Time to Reach']
                        : [`${val} years`, 'Doubling Time'],
                      name
                    ]}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Bar 
                    dataKey={result.calcType === 'time' ? 'years' : 'years'}
                    radius={[4, 4, 0, 0]}
                    fill="url(#rule72Gradient)"
                  />
                  <defs>
                    <linearGradient id="rule72Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#4338ca" />
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

export default RuleOf72Calculator;