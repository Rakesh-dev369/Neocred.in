import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const validationSchema = Yup.object({
  grossSalary: Yup.number()
    .required('Gross salary is required')
    .min(100000, 'Minimum gross salary is ₹1 lakh')
    .max(10000000, 'Maximum gross salary is ₹1 crore'),
  deductions: Yup.number()
    .required('Total deductions is required')
    .min(0, 'Deductions cannot be negative')
    .max(500000, 'Maximum deductions is ₹5 lakhs'),
  taxPaid: Yup.number()
    .required('Tax paid is required')
    .min(0, 'Tax paid cannot be negative')
    .max(1000000, 'Maximum tax paid is ₹10 lakhs')
});

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const Form16BreakdownTool = () => {
  const [result, setResult] = useState(null);

  const generateBreakdown = (values) => {
    const { grossSalary, deductions, taxPaid } = values;
    
    const taxableIncome = grossSalary - deductions;
    const netSalary = grossSalary - taxPaid;
    const effectiveTaxRate = ((taxPaid / grossSalary) * 100).toFixed(2);
    const takeHomePercentage = ((netSalary / grossSalary) * 100).toFixed(2);
    
    const data = [
      { name: 'Net Salary', value: netSalary, color: '#10b981' },
      { name: 'Tax Paid', value: taxPaid, color: '#ef4444' },
      { name: 'Deductions', value: deductions, color: '#f59e0b' }
    ];

    setResult({
      grossSalary,
      deductions,
      taxableIncome,
      taxPaid,
      netSalary,
      effectiveTaxRate,
      takeHomePercentage,
      data
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Form 16 Breakdown Tool</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-6 text-white">📄 Form 16 Breakdown Tool</h3>
          
          <Formik
            initialValues={{
              grossSalary: '',
              deductions: '',
              taxPaid: ''
            }}
            validationSchema={validationSchema}
            onSubmit={generateBreakdown}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Gross Annual Salary (₹)
                  </label>
                  <Field
                    name="grossSalary"
                    type="number"
                    className="input-field"
                    placeholder="1200000"
                  />
                  <ErrorMessage name="grossSalary" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Total Deductions (₹)
                  </label>
                  <Field
                    name="deductions"
                    type="number"
                    className="input-field"
                    placeholder="150000"
                  />
                  <ErrorMessage name="deductions" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">80C, 80D, HRA, etc.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Total Tax Paid (₹)
                  </label>
                  <Field
                    name="taxPaid"
                    type="number"
                    className="input-field"
                    placeholder="120000"
                  />
                  <ErrorMessage name="taxPaid" component="div" className="text-red-500 text-sm mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Including TDS</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  Generate Form 16 Breakdown
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4">Salary Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">💼 Gross Salary:</span>
                  <span className="text-blue-400 font-semibold">₹{result.grossSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">📉 Total Deductions:</span>
                  <span className="text-yellow-400 font-semibold">₹{result.deductions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">💰 Taxable Income:</span>
                  <span className="text-white font-semibold">₹{result.taxableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">🧾 Tax Paid:</span>
                  <span className="text-red-400 font-semibold">₹{result.taxPaid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">🪙 Net Salary:</span>
                  <span className="text-green-400 font-bold text-xl">₹{result.netSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/80">📊 Effective Tax Rate:</span>
                  <span className="text-purple-400 font-semibold">{result.effectiveTaxRate}%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">💵 Take Home %:</span>
                  <span className="text-cyan-400 font-semibold">{result.takeHomePercentage}%</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-100 text-sm">
                  📄 <strong>Form 16 Tip:</strong> Keep all investment proofs ready for tax deductions. Consider tax-saving investments to reduce liability.
                </p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Salary Distribution</h3>
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
                    stroke="#ffffff"
                    strokeWidth={2}
                  >
                    {result.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '10px', color: '#ffffff' }}
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

export default Form16BreakdownTool;