import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CreditCardIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const DebtRepaymentPage = () => {
  const [debts, setDebts] = useState([
    { name: 'Credit Card', balance: '', interestRate: '', minPayment: '' },
    { name: 'Personal Loan', balance: '', interestRate: '', minPayment: '' },
    { name: 'Car Loan', balance: '', interestRate: '', minPayment: '' }
  ]);
  const [extraPayment, setExtraPayment] = useState('');
  const [strategy, setStrategy] = useState('avalanche');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateInputs = () => {
    const newErrors = {};
    
    const validDebts = debts.filter(debt => debt.balance > 0 && debt.interestRate > 0 && debt.minPayment > 0);
    if (validDebts.length === 0) {
      newErrors.debts = 'At least one debt with balance, rate, and payment required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateDebtRepayment = () => {
    const validDebts = debts.filter(debt => debt.balance > 0 && debt.interestRate > 0 && debt.minPayment > 0);
    
    // Calculate minimum payment scenario
    const minPaymentScenario = calculateScenario(validDebts, 0, 'minimum');
    
    // Calculate debt avalanche (highest interest first)
    const avalancheDebts = [...validDebts].sort((a, b) => b.interestRate - a.interestRate);
    const avalancheScenario = calculateScenario(avalancheDebts, extraPayment || 0, 'avalanche');
    
    // Calculate debt snowball (smallest balance first)
    const snowballDebts = [...validDebts].sort((a, b) => a.balance - b.balance);
    const snowballScenario = calculateScenario(snowballDebts, extraPayment || 0, 'snowball');
    
    // Compare strategies
    const strategies = [
      { name: 'Minimum Payments Only', ...minPaymentScenario, color: '#EF4444' },
      { name: 'Debt Avalanche (High Interest First)', ...avalancheScenario, color: '#10B981' },
      { name: 'Debt Snowball (Small Balance First)', ...snowballScenario, color: '#3B82F6' }
    ];
    
    // Recommended strategy
    const recommendedStrategy = avalancheScenario.totalInterest < snowballScenario.totalInterest ? 'avalanche' : 'snowball';
    const savings = minPaymentScenario.totalInterest - (recommendedStrategy === 'avalanche' ? avalancheScenario.totalInterest : snowballScenario.totalInterest);
    
    return {
      validDebts,
      strategies,
      recommendedStrategy,
      savings: Math.round(savings),
      extraPayment: extraPayment || 0
    };
  };

  const calculateScenario = (debtList, extraPay, strategyType) => {
    let debts = debtList.map(debt => ({ ...debt, remainingBalance: debt.balance }));
    let totalInterest = 0;
    let totalPayments = 0;
    let month = 0;
    const paymentSchedule = [];
    
    while (debts.some(debt => debt.remainingBalance > 0) && month < 600) { // Max 50 years
      month++;
      let monthlyExtraPayment = extraPay;
      
      // Apply minimum payments and interest
      debts.forEach(debt => {
        if (debt.remainingBalance > 0) {
          const monthlyInterest = (debt.remainingBalance * debt.interestRate / 100) / 12;
          const principalPayment = Math.min(debt.minPayment - monthlyInterest, debt.remainingBalance);
          
          totalInterest += monthlyInterest;
          totalPayments += debt.minPayment;
          debt.remainingBalance = Math.max(0, debt.remainingBalance - principalPayment);
        }
      });
      
      // Apply extra payment based on strategy
      if (monthlyExtraPayment > 0 && strategyType !== 'minimum') {
        const activeDebts = debts.filter(debt => debt.remainingBalance > 0);
        if (activeDebts.length > 0) {
          // Focus extra payment on target debt
          const targetDebt = activeDebts[0]; // Already sorted by strategy
          const extraPrincipal = Math.min(monthlyExtraPayment, targetDebt.remainingBalance);
          targetDebt.remainingBalance -= extraPrincipal;
          totalPayments += extraPrincipal;
        }
      }
      
      // Record monthly snapshot
      if (month % 12 === 0 || debts.every(debt => debt.remainingBalance === 0)) {
        paymentSchedule.push({
          month,
          year: Math.ceil(month / 12),
          totalBalance: Math.round(debts.reduce((sum, debt) => sum + debt.remainingBalance, 0)),
          totalInterest: Math.round(totalInterest),
          totalPayments: Math.round(totalPayments)
        });
      }
      
      // Remove paid-off debts and re-sort for next iteration
      debts = debts.filter(debt => debt.remainingBalance > 0);
      if (strategyType === 'avalanche') {
        debts.sort((a, b) => b.interestRate - a.interestRate);
      } else if (strategyType === 'snowball') {
        debts.sort((a, b) => a.remainingBalance - b.remainingBalance);
      }
    }
    
    return {
      totalInterest: Math.round(totalInterest),
      totalPayments: Math.round(totalPayments),
      payoffTime: month,
      payoffYears: (month / 12).toFixed(1),
      paymentSchedule
    };
  };

  const updateDebt = (index, field, value) => {
    const newDebts = [...debts];
    newDebts[index][field] = value;
    setDebts(newDebts);
  };

  const addDebt = () => {
    setDebts([...debts, { name: '', balance: '', interestRate: '', minPayment: '' }]);
  };

  const removeDebt = (index) => {
    setDebts(debts.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (validateInputs()) {
        setIsCalculating(true);
        setTimeout(() => {
          setResult(calculateDebtRepayment());
          setIsCalculating(false);
        }, 300);
      } else {
        setResult(null);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [debts, extraPayment, strategy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('debt-repayment');
                return navigation?.previous ? (
                  <Link 
                    to={navigation.previous.path}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                    Previous: {navigation.previous.name}
                  </Link>
                ) : (
                  <Link 
                    to="/tools" 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                    Back to Tools
                  </Link>
                );
              })()}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <CreditCardIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Debt Repayment Planner</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Strategize debt repayment using snowball/avalanche methods</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('debt-repayment');
              
              return navigation ? (
                <div className="hidden md:flex items-center gap-3">
                  <div className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded-md text-xs font-medium">
                    Advanced
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {navigation.previous && (
                      <Link
                        to={navigation.previous.path}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        title={navigation.previous.name}
                      >
                        <ChevronLeftIcon className="h-3 w-3" />
                        <span className="hidden lg:inline">Prev</span>
                      </Link>
                    )}
                    
                    <div className="text-xs text-gray-500 dark:text-gray-400 px-2">
                      {navigation.progress.current}/{navigation.progress.total}
                    </div>
                    
                    {navigation.next && (
                      <Link
                        to={navigation.next.path}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        title={navigation.next.name}
                      >
                        <span className="hidden lg:inline">Next</span>
                        <ChevronRightIcon className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Input */}
          <div className="space-y-6">
            {/* Debt List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <CalculatorIcon className="h-5 w-5 text-blue-600" />
                  Your Debts
                </h2>
                <button
                  onClick={addDebt}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add Debt
                </button>
              </div>
              
              <div className="space-y-4">
                {debts.map((debt, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <input
                        type="text"
                        value={debt.name}
                        onChange={(e) => updateDebt(index, 'name', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Debt name"
                      />
                      {debts.length > 1 && (
                        <button
                          onClick={() => removeDebt(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Balance (₹)</label>
                        <input
                          type="number"
                          value={debt.balance}
                          onChange={(e) => updateDebt(index, 'balance', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="50000"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Interest Rate (%)</label>
                        <input
                          type="number"
                          value={debt.interestRate}
                          onChange={(e) => updateDebt(index, 'interestRate', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="18"
                          min="0"
                          max="50"
                          step="0.1"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Min Payment (₹)</label>
                        <input
                          type="number"
                          value={debt.minPayment}
                          onChange={(e) => updateDebt(index, 'minPayment', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="2000"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {errors.debts && (
                <p className="text-red-500 text-xs mt-2">{errors.debts}</p>
              )}
            </div>

            {/* Extra Payment */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Extra Payment Strategy</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Extra Monthly Payment (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={extraPayment}
                      onChange={(e) => setExtraPayment(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="5000"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Additional amount to pay towards debt each month</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Repayment Strategy
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setStrategy('avalanche')}
                      className={`w-full p-3 rounded-lg border text-left transition-colors ${
                        strategy === 'avalanche'
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                      }`}
                    >
                      <div className="font-medium">Debt Avalanche</div>
                      <div className="text-xs opacity-75">Pay highest interest rate debt first (saves more money)</div>
                    </button>
                    <button
                      onClick={() => setStrategy('snowball')}
                      className={`w-full p-3 rounded-lg border text-left transition-colors ${
                        strategy === 'snowball'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Debt Snowball</div>
                      <div className="text-xs opacity-75">Pay smallest balance first (builds momentum)</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculating...</h3>
                  <p className="text-gray-600 dark:text-gray-400">Analyzing debt repayment strategies</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Strategy Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Repayment Strategy Analysis
                  </h2>
                  
                  {result.savings > 0 && (
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          ₹{result.savings.toLocaleString()} Saved
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          By using {result.recommendedStrategy === 'avalanche' ? 'Debt Avalanche' : 'Debt Snowball'} strategy
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {result.strategies.map((strategy, index) => (
                      <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{strategy.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Payoff Time: {strategy.payoffYears} years
                            </div>
                          </div>
                          {index > 0 && result.recommendedStrategy === (index === 1 ? 'avalanche' : 'snowball') && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs text-gray-500">Total Interest</div>
                            <div className="text-lg font-bold text-red-600 dark:text-red-400">
                              ₹{strategy.totalInterest.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Total Payments</div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              ₹{strategy.totalPayments.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payoff Timeline */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Debt Payoff Timeline</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={result.strategies[1].paymentSchedule}>
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `₹${(value/100000).toFixed(0)}L`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="totalBalance" stroke="#EF4444" name="Remaining Balance" strokeWidth={3} />
                        <Line type="monotone" dataKey="totalInterest" stroke="#F59E0B" name="Total Interest Paid" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Strategy Comparison Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Strategy Comparison</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={result.strategies}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="totalInterest" fill="#EF4444" name="Total Interest" />
                        <Bar dataKey="payoffTime" fill="#3B82F6" name="Payoff Time (Months)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Debt Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Debt Summary</h3>
                  <div className="space-y-3">
                    {result.validDebts.map((debt, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{debt.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {debt.interestRate}% APR | Min: ₹{debt.minPayment.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-lg font-bold text-red-600 dark:text-red-400">
                          ₹{debt.balance.toLocaleString()}
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-white">Total Debt</span>
                        <span className="text-xl font-bold text-red-600 dark:text-red-400">
                          ₹{result.validDebts.reduce((sum, debt) => sum + debt.balance, 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Total Min Payments</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          ₹{result.validDebts.reduce((sum, debt) => sum + debt.minPayment, 0).toLocaleString()}/month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-600">💡</span>
                    Debt Repayment Tips
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 text-base">✓</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Avalanche vs Snowball</div>
                        <div className="text-gray-700 dark:text-gray-300">
                          Avalanche saves more money, Snowball provides psychological wins
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-base">💳</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Stop Using Credit</div>
                        <div className="text-gray-700 dark:text-gray-300">
                          Avoid adding new debt while paying off existing balances
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-600 text-base">📞</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Negotiate Rates</div>
                        <div className="text-gray-700 dark:text-gray-300">
                          Call creditors to request lower interest rates
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <CreditCardIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plan Your Debt Repayment</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your debt details to compare repayment strategies
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtRepaymentPage;