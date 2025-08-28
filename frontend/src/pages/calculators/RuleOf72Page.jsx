import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const RuleOf72Page = () => {
  useScrollToTop();
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [calculationType, setCalculationType] = useState('doubling');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [comparisonData, setComparisonData] = useState([]);

  const quickAmounts = [100000, 500000, 1000000, 2500000, 5000000, 10000000];
  const quickRates = [6, 8, 10, 12, 15, 18];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!investmentAmount || investmentAmount < 1000) {
      newErrors.investmentAmount = 'Minimum ₹1,000 required';
    } else if (investmentAmount > 100000000) {
      newErrors.investmentAmount = 'Maximum ₹10,00,00,000 allowed';
    }
    
    if (!interestRate || interestRate < 1) {
      newErrors.interestRate = 'Minimum 1% required';
    } else if (interestRate > 50) {
      newErrors.interestRate = 'Maximum 50% allowed';
    }

    if (calculationType === 'target' && (!targetAmount || targetAmount <= investmentAmount)) {
      newErrors.targetAmount = 'Target must be greater than investment';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRule72 = () => {
    const rate = interestRate;
    const principal = investmentAmount;
    
    let yearsToDouble, finalAmount, growthMultiple;
    
    if (calculationType === 'doubling') {
      // Rule of 72: Years to double = 72 / interest rate
      yearsToDouble = 72 / rate;
      finalAmount = principal * 2;
      growthMultiple = 2;
    } else {
      // Calculate years to reach target amount
      growthMultiple = targetAmount / principal;
      yearsToDouble = Math.log(growthMultiple) / Math.log(1 + rate / 100);
      finalAmount = targetAmount;
    }

    // Generate growth timeline
    const timeline = [];
    for (let year = 0; year <= Math.ceil(yearsToDouble); year++) {
      const amount = principal * Math.pow(1 + rate / 100, year);
      timeline.push({
        year,
        amount: Math.round(amount),
        rule72Estimate: year === 0 ? principal : principal * Math.pow(2, year / (72 / rate))
      });
    }

    // Generate comparison for different rates
    const rateComparison = quickRates.map(r => ({
      rate: `${r}%`,
      years: (72 / r).toFixed(1),
      amount: Math.round(principal * Math.pow(1 + r / 100, 72 / r))
    }));

    setComparisonData({ timeline, rateComparison });
    
    return {
      yearsToDouble: yearsToDouble.toFixed(1),
      monthsToDouble: Math.round(yearsToDouble * 12),
      rule72Estimate: (72 / rate).toFixed(1),
      actualYears: yearsToDouble.toFixed(1),
      difference: Math.abs(yearsToDouble - (72 / rate)).toFixed(1),
      initialAmount: principal,
      finalAmount: Math.round(finalAmount),
      interestRate: rate,
      growthMultiple: growthMultiple.toFixed(1),
      calculationType
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (investmentAmount > 0 && interestRate > 0) {
        if (calculationType === 'target' && !targetAmount) return;
        
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateRule72());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
          setComparisonData([]);
        }
      } else {
        setResult(null);
        setComparisonData([]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [investmentAmount, interestRate, targetAmount, calculationType]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <Link 
                to="/tools" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Back to Tools
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rule of 72 Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate investment doubling time</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('rule-of-72');
              const difficulty = getToolDifficulty('rule-of-72');
              
              return navigation ? (
                <div className="hidden md:flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded-md text-xs font-medium">
                    Beginner
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

      {/* What is Rule of 72 Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Rule of 72? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Investment Doubling)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quick formula to estimate how long it takes for investment to double: 72 ÷ interest rate = years.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">⚡</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Quick Estimate</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Growth Planning</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Goal Setting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Calculator */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Rule of 72 Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Calculation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Calculation Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalculationType('doubling')}
                      className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                        calculationType === 'doubling'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      Double Money
                    </button>
                    <button
                      onClick={() => setCalculationType('target')}
                      className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                        calculationType === 'target'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      Target Amount
                    </button>
                  </div>
                </div>

                {/* Investment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Initial Investment
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setInvestmentAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          investmentAmount === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{amount >= 1000000 ? `${(amount/1000000).toFixed(0)}M` : `${(amount/100000).toFixed(0)}L`}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.investmentAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="100000"
                      min="1000"
                      max="100000000"
                    />
                  </div>
                  {errors.investmentAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.investmentAmount}</p>
                  )}
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Interest Rate
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickRates.map(rate => (
                      <button
                        key={rate}
                        onClick={() => setInterestRate(rate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          interestRate === rate
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.interestRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="12"
                      min="1"
                      max="50"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.interestRate && (
                    <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>
                  )}
                </div>

                {/* Target Amount (only for target calculation) */}
                {calculationType === 'target' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Target Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value ? Number(e.target.value) : '')}
                        className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                          errors.targetAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="200000"
                        min={investmentAmount + 1}
                      />
                    </div>
                    {errors.targetAmount && (
                      <p className="text-red-500 text-xs mt-1">{errors.targetAmount}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Rule of 72 Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-amber-600">💡</span>
                Rule of 72 Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Works best for 6-10% rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Quick mental calculation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Compare investment options</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Plan long-term goals</span>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing Rule of 72 calculation</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Results Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Rule of 72 Results
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {calculationType === 'doubling' ? 'Time to Double' : 'Time to Target'}
                      </div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        {result.yearsToDouble} Years
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        {result.monthsToDouble} months
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Rule of 72 Estimate</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        {result.rule72Estimate} Years
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        72 ÷ {result.interestRate}% = {result.rule72Estimate}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Final Amount</div>
                      <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.finalAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                        {result.growthMultiple}x growth
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Accuracy</div>
                      <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                        ±{result.difference} Years
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Rule vs Actual difference
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Timeline */}
                {comparisonData.timeline && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Growth Timeline</h3>
                    <div className="w-full overflow-x-auto">
                      <ResponsiveContainer width="100%" height={250} minWidth={300}>
                        <LineChart data={comparisonData.timeline} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <XAxis 
                            dataKey="year" 
                            tick={{ fill: 'currentColor', fontSize: 10 }}
                            className="text-gray-600 dark:text-gray-300"
                          />
                          <YAxis 
                            tick={{ fill: 'currentColor', fontSize: 10 }}
                            tickFormatter={(val) => `₹${(val/100000).toFixed(1)}L`}
                            className="text-gray-600 dark:text-gray-300"
                          />
                          <Tooltip 
                            formatter={(val, name) => [`₹${Number(val).toLocaleString()}`, name === 'amount' ? 'Actual Amount' : 'Rule 72 Estimate']}
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              border: '1px solid rgba(0, 0, 0, 0.1)',
                              borderRadius: '8px'
                            }}
                          />
                          <Legend />
                          <Line type="monotone" dataKey="amount" stroke="#3B82F6" strokeWidth={2} name="Actual Growth" />
                          <Line type="monotone" dataKey="rule72Estimate" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="Rule 72 Estimate" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {/* Rate Comparison */}
                {comparisonData.rateComparison && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Rate Comparison</h3>
                    <div className="w-full overflow-x-auto">
                      <ResponsiveContainer width="100%" height={250} minWidth={300}>
                        <BarChart data={comparisonData.rateComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <XAxis 
                            dataKey="rate" 
                            tick={{ fill: 'currentColor', fontSize: 10 }}
                            className="text-gray-600 dark:text-gray-300"
                          />
                          <YAxis 
                            tick={{ fill: 'currentColor', fontSize: 10 }}
                            className="text-gray-600 dark:text-gray-300"
                          />
                          <Tooltip 
                            formatter={(val, name) => [name === 'years' ? `${val} years` : `₹${Number(val).toLocaleString()}`, name === 'years' ? 'Doubling Time' : 'Final Amount']}
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              border: '1px solid rgba(0, 0, 0, 0.1)',
                              borderRadius: '8px'
                            }}
                          />
                          <Bar dataKey="years" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ClockIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Doubling Time</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter investment amount and interest rate to see Rule of 72 in action
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

export default RuleOf72Page;