import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CurrencyDollarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation } from '../../utils/toolsNavigation';

const LumpsumCalculatorPage = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [100000, 500000, 1000000, 2000000, 5000000, 10000000];
  const quickReturns = [8, 10, 12, 14, 16, 18];
  const quickTenures = [1, 3, 5, 10, 15, 20];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!investmentAmount || investmentAmount < 1000) {
      newErrors.investmentAmount = 'Minimum ₹1,000 required';
    } else if (investmentAmount > 100000000) {
      newErrors.investmentAmount = 'Maximum ₹10 crore allowed';
    }
    
    if (!expectedReturn || expectedReturn < 1) {
      newErrors.expectedReturn = 'Minimum 1% required';
    } else if (expectedReturn > 30) {
      newErrors.expectedReturn = 'Maximum 30% allowed';
    }
    
    if (!tenure || tenure < 0.25) {
      newErrors.tenure = 'Minimum 3 months required';
    } else if (tenure > 50) {
      newErrors.tenure = 'Maximum 50 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLumpsum = () => {
    const principal = investmentAmount;
    const rate = expectedReturn / 100;
    const time = tenure;
    
    // Compound interest calculation: A = P(1 + r)^t
    const futureValue = principal * Math.pow(1 + rate, time);
    const totalGains = futureValue - principal;
    
    // Calculate CAGR (already given as expectedReturn, but verify)
    const cagr = ((Math.pow(futureValue / principal, 1 / time) - 1) * 100);
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let currentValue = principal;
    
    for (let year = 1; year <= Math.min(tenure, 20); year++) {
      currentValue = principal * Math.pow(1 + rate, year);
      const yearlyGains = currentValue - principal;
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        value: Math.round(currentValue),
        gains: Math.round(yearlyGains),
        gainsPercentage: ((yearlyGains / principal) * 100).toFixed(1)
      });
    }
    
    // Calculate different return scenarios
    const scenarios = [
      { name: 'Conservative', rate: Math.max(1, expectedReturn - 4), value: principal * Math.pow(1 + Math.max(0.01, (expectedReturn - 4) / 100), time) },
      { name: 'Expected', rate: expectedReturn, value: futureValue },
      { name: 'Optimistic', rate: expectedReturn + 4, value: principal * Math.pow(1 + (expectedReturn + 4) / 100, time) }
    ];
    
    // Calculate inflation impact (assuming 6% inflation)
    const inflationRate = 0.06;
    const realReturn = ((1 + rate) / (1 + inflationRate) - 1) * 100;
    const inflationAdjustedValue = futureValue / Math.pow(1 + inflationRate, time);
    
    // Calculate doubling time using Rule of 72
    const doublingTime = 72 / expectedReturn;
    const doublingCount = Math.floor(time / doublingTime);
    
    // Monthly breakdown for first year
    const monthlyBreakdown = [];
    for (let month = 1; month <= Math.min(12, tenure * 12); month++) {
      const monthlyValue = principal * Math.pow(1 + rate / 12, month);
      monthlyBreakdown.push({
        month: `Month ${month}`,
        value: Math.round(monthlyValue),
        gains: Math.round(monthlyValue - principal)
      });
    }
    
    return {
      investmentAmount: principal,
      expectedReturn,
      tenure,
      futureValue: Math.round(futureValue),
      totalGains: Math.round(totalGains),
      cagr: cagr.toFixed(2),
      yearlyBreakdown,
      scenarios: scenarios.map(s => ({ ...s, value: Math.round(s.value) })),
      realReturn: realReturn.toFixed(2),
      inflationAdjustedValue: Math.round(inflationAdjustedValue),
      doublingTime: doublingTime.toFixed(1),
      doublingCount,
      monthlyBreakdown,
      absoluteReturn: ((totalGains / principal) * 100).toFixed(2),
      wealthMultiplier: (futureValue / principal).toFixed(2)
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (investmentAmount > 0 && expectedReturn > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateLumpsum());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
        }
      } else {
        setResult(null);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [investmentAmount, expectedReturn, tenure]);

  const pieData = result ? [
    { name: 'Principal Amount', value: result.investmentAmount, color: '#3B82F6' },
    { name: 'Capital Gains', value: result.totalGains, color: '#10B981' }
  ] : [];

  const scenarioData = result ? result.scenarios : [];

  const growthData = result ? result.yearlyBreakdown.map(year => ({
    year: year.year,
    value: year.value,
    gains: year.gains
  })) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('lumpsum-calculator');
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
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Lumpsum Investment Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate returns on one-time investments with CAGR analysis</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('lumpsum-calculator');
              
              return navigation ? (
                <div className="hidden md:flex items-center gap-3">
                  <div className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">
                    Intermediate
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

      {/* Lumpsum Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Lumpsum Investment <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(One-time Investment)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Invest a large amount once and let compound interest work its magic over time.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">One-time</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Investment</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Compound</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Growth</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">CAGR</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Investment Details
              </h2>
              
              <div className="space-y-6">
                {/* Investment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Lumpsum Investment Amount
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
                        ₹{(amount/100000).toFixed(0)}L
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
                      placeholder="1000000"
                      min="1000"
                      max="100000000"
                    />
                  </div>
                  {errors.investmentAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.investmentAmount}</p>
                  )}
                </div>

                {/* Expected Annual Return */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Annual Return (CAGR %)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickReturns.map(returnRate => (
                      <button
                        key={returnRate}
                        onClick={() => setExpectedReturn(returnRate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          expectedReturn === returnRate
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        {returnRate}%
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.expectedReturn ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="12"
                      min="1"
                      max="30"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.expectedReturn && (
                    <p className="text-red-500 text-xs mt-1">{errors.expectedReturn}</p>
                  )}
                </div>

                {/* Investment Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Investment Tenure (Years)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickTenures.map(years => (
                      <button
                        key={years}
                        onClick={() => setTenure(years)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          tenure === years
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                        }`}
                      >
                        {years}Y
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.tenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10"
                      min="0.25"
                      max="50"
                      step="0.25"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Lumpsum Investment Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Lumpsum Investment Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">⏰</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Market Timing</div>
                    <div className="text-gray-600 dark:text-gray-300">Invest during market corrections for better returns</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📈</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Compound Power</div>
                    <div className="text-gray-600 dark:text-gray-300">Longer tenure amplifies compound growth</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🎯</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Diversification</div>
                    <div className="text-gray-600 dark:text-gray-300">Spread across asset classes for risk management</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your lumpsum projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Lumpsum Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Investment Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Investment Amount</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.investmentAmount.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">CAGR</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.cagr}%
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Gains</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalGains.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Absolute Return</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.absoluteReturn}%
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Future Value</div>
                      <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ₹{result.futureValue.toLocaleString()}
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                        Wealth Multiplier: {result.wealthMultiplier}x
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Doubling Time:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          {result.doublingTime} years
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Money Doubles:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          {result.doublingCount} times
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Real Return:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          {result.realReturn}%
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Inflation Adjusted:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.inflationAdjustedValue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment vs Returns Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investment Breakdown</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Scenario Analysis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Return Scenarios</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={scenarioData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${(value/100000).toFixed(0)}L`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Future Value']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="value" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    {result.scenarios.map((scenario, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {scenario.name} ({scenario.rate}%)
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          ₹{scenario.value.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investment Growth Over Time</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={growthData}>
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
                        <Line type="monotone" dataKey="value" stroke="#10B981" name="Portfolio Value" strokeWidth={3} />
                        <Line type="monotone" dataKey="gains" stroke="#F59E0B" name="Capital Gains" strokeWidth={2} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Growth</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.slice(0, 10).map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900 dark:text-white">
                            ₹{year.value.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            +{year.gainsPercentage}% (₹{year.gains.toLocaleString()})
                          </div>
                        </div>
                      </div>
                    ))}
                    {result.yearlyBreakdown.length > 10 && (
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        ... and {result.yearlyBreakdown.length - 10} more years
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <CurrencyDollarIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Lumpsum Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your investment details to see compound growth projections
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

export default LumpsumCalculatorPage;