import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const debtSchema = Yup.object({
  name: Yup.string().required('Debt name is required'),
  balance: Yup.number().required('Balance is required').min(1000, 'Minimum balance is ₹1,000'),
  rate: Yup.number().required('Interest rate is required').min(1, 'Minimum rate is 1%').max(50, 'Maximum rate is 50%'),
  minPayment: Yup.number().required('Minimum payment is required').min(100, 'Minimum payment is ₹100')
});

const validationSchema = Yup.object({
  debts: Yup.array().of(debtSchema).min(1, 'At least one debt is required'),
  strategy: Yup.string().required('Strategy is required'),
  monthlyBudget: Yup.number().required('Monthly budget is required').min(1000, 'Minimum budget is ₹1,000')
});

const DebtRepaymentPlanner = () => {
  const [result, setResult] = useState(null);

  const calculateDebtPlan = (values) => {
    const { debts, strategy, monthlyBudget } = values;
    
    let sortedDebts = [...debts];
    
    // Sort debts based on strategy
    if (strategy === 'snowball') {
      sortedDebts.sort((a, b) => parseFloat(a.balance) - parseFloat(b.balance));
    } else if (strategy === 'avalanche') {
      sortedDebts.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
    }
    
    // Calculate repayment plan
    const planDetails = sortedDebts.map((debt, index) => {
      const monthlyRate = debt.rate / 100 / 12;
      const balance = parseFloat(debt.balance);
      const minPayment = parseFloat(debt.minPayment);
      
      // Calculate months to pay off with minimum payment
      const monthsWithMinPayment = Math.ceil(
        Math.log(1 + (balance * monthlyRate) / minPayment) / Math.log(1 + monthlyRate)
      );
      
      // Calculate total interest with minimum payment
      const totalInterestMinPayment = (minPayment * monthsWithMinPayment) - balance;
      
      // Calculate with extra payment (if budget allows)
      const totalMinPayments = debts.reduce((sum, d) => sum + parseFloat(d.minPayment), 0);
      const extraBudget = monthlyBudget - totalMinPayments;
      const extraPayment = index === 0 ? Math.max(0, extraBudget) : 0; // Focus extra on first debt
      const totalPayment = minPayment + extraPayment;
      
      const monthsWithExtra = totalPayment > minPayment ? 
        Math.ceil(Math.log(1 + (balance * monthlyRate) / totalPayment) / Math.log(1 + monthlyRate)) :
        monthsWithMinPayment;
      
      const totalInterestWithExtra = (totalPayment * monthsWithExtra) - balance;
      
      return {
        name: debt.name,
        balance: balance,
        rate: debt.rate,
        minPayment: minPayment,
        extraPayment: extraPayment,
        totalPayment: totalPayment,
        monthsMinPayment: monthsWithMinPayment,
        monthsWithExtra: monthsWithExtra,
        totalInterestMinPayment: Math.round(totalInterestMinPayment),
        totalInterestWithExtra: Math.round(totalInterestWithExtra),
        savings: Math.round(totalInterestMinPayment - totalInterestWithExtra),
        order: index + 1
      };
    });
    
    const totalBalance = debts.reduce((sum, debt) => sum + parseFloat(debt.balance), 0);
    const totalMinPayments = debts.reduce((sum, debt) => sum + parseFloat(debt.minPayment), 0);
    const totalInterestSavings = planDetails.reduce((sum, debt) => sum + debt.savings, 0);
    
    setResult({
      strategy: strategy === 'snowball' ? 'Snowball (Lowest Balance First)' : 'Avalanche (Highest Interest First)',
      totalBalance: Math.round(totalBalance),
      totalMinPayments: Math.round(totalMinPayments),
      monthlyBudget: monthlyBudget,
      extraBudget: Math.max(0, monthlyBudget - totalMinPayments),
      totalInterestSavings: totalInterestSavings,
      planDetails,
      data: planDetails.map(debt => ({
        name: debt.name,
        balance: debt.balance,
        interest: debt.totalInterestWithExtra
      }))
    });
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Debt Repayment Planner</h2>
      
      <Formik
        initialValues={{
          debts: [{ name: '', balance: '', rate: '', minPayment: '' }],
          strategy: 'snowball',
          monthlyBudget: ''
        }}
        validationSchema={validationSchema}
        onSubmit={calculateDebtPlan}
      >
        {({ values, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-6 text-white">💳 Debt Repayment Planner</h3>
              
              <FieldArray name="debts">
                {({ push, remove }) => (
                  <div className="space-y-4">
                    {values.debts.map((debt, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white/5 rounded-lg">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-1">
                            Debt Name
                          </label>
                          <Field
                            name={`debts.${index}.name`}
                            type="text"
                            className="input-field"
                            placeholder="Credit Card"
                          />
                          <ErrorMessage name={`debts.${index}.name`} component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-1">
                            Balance (₹)
                          </label>
                          <Field
                            name={`debts.${index}.balance`}
                            type="number"
                            className="input-field"
                            placeholder="50000"
                          />
                          <ErrorMessage name={`debts.${index}.balance`} component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-1">
                            Interest Rate (%)
                          </label>
                          <Field
                            name={`debts.${index}.rate`}
                            type="number"
                            step="0.1"
                            className="input-field"
                            placeholder="18"
                          />
                          <ErrorMessage name={`debts.${index}.rate`} component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-1">
                            Min Payment (₹)
                          </label>
                          <div className="flex gap-2">
                            <Field
                              name={`debts.${index}.minPayment`}
                              type="number"
                              className="input-field flex-1"
                              placeholder="2000"
                            />
                            {values.debts.length > 1 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                          <ErrorMessage name={`debts.${index}.minPayment`} component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                      </div>
                    ))}
                    
                    <button
                      type="button"
                      onClick={() => push({ name: '', balance: '', rate: '', minPayment: '' })}
                      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white"
                    >
                      ➕ Add Another Debt
                    </button>
                  </div>
                )}
              </FieldArray>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Repayment Strategy
                  </label>
                  <Field
                    name="strategy"
                    as="select"
                    className="input-field"
                  >
                    <option value="snowball">Snowball (Lowest Balance First)</option>
                    <option value="avalanche">Avalanche (Highest Interest First)</option>
                  </Field>
                  <ErrorMessage name="strategy" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Monthly Budget (₹)
                  </label>
                  <Field
                    name="monthlyBudget"
                    type="number"
                    className="input-field"
                    placeholder="10000"
                  />
                  <ErrorMessage name="monthlyBudget" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-6"
              >
                📊 Generate Repayment Plan
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 mt-8">
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white mb-4">📈 Repayment Strategy: {result.strategy}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">₹{result.totalBalance.toLocaleString()}</div>
                <div className="text-sm text-white/70">Total Debt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">₹{result.monthlyBudget.toLocaleString()}</div>
                <div className="text-sm text-white/70">Monthly Budget</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">₹{result.totalInterestSavings.toLocaleString()}</div>
                <div className="text-sm text-white/70">Interest Savings</div>
              </div>
            </div>
            
            <div className="space-y-3">
              {result.planDetails.map((debt, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">#{debt.order} {debt.name}</h4>
                    <span className="text-sm text-white/70">₹{debt.balance.toLocaleString()} @ {debt.rate}%</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">Payment:</span>
                      <div className="text-blue-400 font-semibold">₹{debt.totalPayment.toLocaleString()}/month</div>
                    </div>
                    <div>
                      <span className="text-white/70">Time to Pay:</span>
                      <div className="text-green-400 font-semibold">{debt.monthsWithExtra} months</div>
                    </div>
                    <div>
                      <span className="text-white/70">Total Interest:</span>
                      <div className="text-red-400 font-semibold">₹{debt.totalInterestWithExtra.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-white/70">Interest Saved:</span>
                      <div className="text-yellow-400 font-semibold">₹{debt.savings.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-green-100 text-sm">
                💳 <strong>Debt Strategy:</strong> {result.strategy === 'Snowball (Lowest Balance First)' ? 
                'Pay minimums on all debts, focus extra payments on smallest balance for psychological wins.' :
                'Pay minimums on all debts, focus extra payments on highest interest rate to save most money.'}
              </p>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Debt vs Interest Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
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
                  formatter={(val, name) => [`₹${Number(val).toLocaleString()}`, name === 'balance' ? 'Balance' : 'Interest']}
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                />
                <Bar dataKey="balance" fill="#3b82f6" name="balance" radius={[4, 4, 0, 0]} />
                <Bar dataKey="interest" fill="#ef4444" name="interest" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebtRepaymentPlanner;