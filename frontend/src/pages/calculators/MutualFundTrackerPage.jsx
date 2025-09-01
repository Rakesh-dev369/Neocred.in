import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, PresentationChartLineIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation } from '../../utils/toolsNavigation';

const MutualFundTrackerPage = () => {
  const [fundType, setFundType] = useState('equity');
  const [investmentType, setInvestmentType] = useState('sip');
  const [amount, setAmount] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [tenure, setTenure] = useState('');
  const [expenseRatio, setExpenseRatio] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [5000, 10000, 15000, 25000, 50000, 100000];
  const quickTenures = [1, 3, 5, 10, 15, 20];

  const fundTypes = {
    equity: { name: 'Equity Funds', expectedReturn: 12, expenseRatio: 2.0, risk: 'High' },
    debt: { name: 'Debt Funds', expectedReturn: 7, expenseRatio: 1.0, risk: 'Low' },
    hybrid: { name: 'Hybrid Funds', expectedReturn: 10, expenseRatio: 1.5, risk: 'Medium' },
    elss: { name: 'ELSS Funds', expectedReturn: 13, expenseRatio: 1.8, risk: 'High' },
    index: { name: 'Index Funds', expectedReturn: 11, expenseRatio: 0.5, risk: 'Medium' }
  };

  const validateInputs = () => {
    const newErrors = {};
    
    if (!amount || amount < 500) {
      newErrors.amount = 'Minimum ₹500 required';
    } else if (amount > 1000000) {
      newErrors.amount = 'Maximum ₹10,00,000 allowed';
    }
    
    if (!expectedReturn || expectedReturn < 1) {
      newErrors.expectedReturn = 'Minimum 1% required';
    } else if (expectedReturn > 30) {
      newErrors.expectedReturn = 'Maximum 30% allowed';
    }
    
    if (!tenure || tenure < 0.25) {
      newErrors.tenure = 'Minimum 3 months required';
    } else if (tenure > 30) {
      newErrors.tenure = 'Maximum 30 years allowed';
    }
    
    if (!expenseRatio || expenseRatio < 0.1) {
      newErrors.expenseRatio = 'Minimum 0.1% required';
    } else if (expenseRatio > 5) {
      newErrors.expenseRatio = 'Maximum 5% allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMutualFund = () => {
    const netReturn = expectedReturn - expenseRatio;
    const monthlyReturn = netReturn / 100 / 12;
    
    let futureValue, totalInvestment, totalGains;
    
    if (investmentType === 'sip') {
      const totalMonths = tenure * 12;
      totalInvestment = amount * totalMonths;
      futureValue = amount * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
    } else {
      totalInvestment = amount;
      futureValue = amount * Math.pow(1 + netReturn / 100, tenure);
    }
    
    totalGains = futureValue - totalInvestment;
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let currentValue = 0;
    let cumulativeInvestment = 0;
    
    for (let year = 1; year <= Math.min(tenure, 15); year++) {
      if (investmentType === 'sip') {
        const monthsCompleted = year * 12;
        cumulativeInvestment = amount * monthsCompleted;
        currentValue = amount * (((Math.pow(1 + monthlyReturn, monthsCompleted) - 1) / monthlyReturn) * (1 + monthlyReturn));
      } else {
        cumulativeInvestment = totalInvestment;
        currentValue = amount * Math.pow(1 + netReturn / 100, year);
      }
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        investment: Math.round(cumulativeInvestment),
        value: Math.round(currentValue),
        gains: Math.round(currentValue - cumulativeInvestment)
      });
    }
    
    // Calculate expense impact
    const grossReturn = expectedReturn / 100;
    const grossFutureValue = investmentType === 'sip' 
      ? amount * (((Math.pow(1 + grossReturn / 12, tenure * 12) - 1) / (grossReturn / 12)) * (1 + grossReturn / 12))
      : amount * Math.pow(1 + grossReturn, tenure);
    
    const expenseImpact = grossFutureValue - futureValue;
    
    // Risk metrics
    const volatility = fundTypes[fundType].risk === 'High' ? 18 : 
                      fundTypes[fundType].risk === 'Medium' ? 12 : 8;
    
    // Tax implications (for equity funds)
    const isEquityFund = fundType === 'equity' || fundType === 'elss';
    const ltcgTax = isEquityFund && totalGains > 100000 ? (totalGains - 100000) * 0.1 : 0;
    const postTaxGains = totalGains - ltcgTax;
    
    return {
      fundType: fundTypes[fundType].name,
      investmentType,
      amount,
      expectedReturn,
      netReturn: netReturn.toFixed(2),
      expenseRatio,
      tenure,
      totalInvestment: Math.round(totalInvestment),
      futureValue: Math.round(futureValue),
      totalGains: Math.round(totalGains),
      yearlyBreakdown,
      expenseImpact: Math.round(expenseImpact),
      volatility,
      ltcgTax: Math.round(ltcgTax),
      postTaxGains: Math.round(postTaxGains),
      cagr: ((Math.pow(futureValue / totalInvestment, 1 / tenure) - 1) * 100).toFixed(2),
      xirr: netReturn.toFixed(2)
    };
  };

  useEffect(() => {
    const selectedFund = fundTypes[fundType];
    setExpectedReturn(selectedFund.expectedReturn);
    setExpenseRatio(selectedFund.expenseRatio);
  }, [fundType]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (amount > 0 && expectedReturn > 0 && tenure > 0 && expenseRatio > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateMutualFund());
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
  }, [amount, expectedReturn, tenure, expenseRatio, fundType, investmentType]);

  const pieData = result ? [
    { name: 'Investment', value: result.totalInvestment, color: '#3B82F6' },
    { name: 'Gains', value: result.totalGains, color: '#10B981' },
    { name: 'Expense Impact', value: result.expenseImpact, color: '#EF4444' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('mutual-fund-tracker');
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
                  <PresentationChartLineIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mutual Fund Return Tracker</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track and analyze mutual fund performance with expense ratios</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('mutual-fund-tracker');
              
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Fund Details
              </h2>
              
              <div className="space-y-6">
                {/* Fund Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Fund Category
                  </label>
                  <div className="space-y-2">
                    {Object.entries(fundTypes).map(([key, fund]) => (
                      <button
                        key={key}
                        onClick={() => setFundType(key)}
                        className={`w-full p-3 rounded-lg border text-left transition-colors ${
                          fundType === key
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{fund.name}</div>
                            <div className="text-xs opacity-75">Risk: {fund.risk}</div>
                          </div>
                          <div className="text-xs">
                            <div>Return: {fund.expectedReturn}%</div>
                            <div>Expense: {fund.expenseRatio}%</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Investment Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setInvestmentType('sip')}
                      className={`p-3 rounded-lg border transition-colors ${
                        investmentType === 'sip'
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                      }`}
                    >
                      <div className="font-medium">SIP</div>
                      <div className="text-xs opacity-75">Monthly Investment</div>
                    </button>
                    <button
                      onClick={() => setInvestmentType('lumpsum')}
                      className={`p-3 rounded-lg border transition-colors ${
                        investmentType === 'lumpsum'
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                      }`}
                    >
                      <div className="font-medium">Lumpsum</div>
                      <div className="text-xs opacity-75">One-time Investment</div>
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {investmentType === 'sip' ? 'Monthly SIP Amount' : 'Lumpsum Amount'}
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amt => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          amount === amt
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.amount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10000"
                      min="500"
                      max="1000000"
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                  )}
                </div>

                {/* Expected Return */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Annual Return (%)
                  </label>
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

                {/* Expense Ratio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expense Ratio (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={expenseRatio}
                      onChange={(e) => setExpenseRatio(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.expenseRatio ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="2.0"
                      min="0.1"
                      max="5"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.expenseRatio && (
                    <p className="text-red-500 text-xs mt-1">{errors.expenseRatio}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Annual fund management charges</p>
                </div>

                {/* Tenure */}
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
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-orange-400'
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.tenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10"
                      min="0.25"
                      max="30"
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
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculating...</h3>
                  <p className="text-gray-600 dark:text-gray-400">Processing fund projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Fund Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    {result.fundType} Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Investment</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.totalInvestment.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Gains</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalGains.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Net Return</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.netReturn}%
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Expense Impact</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.expenseImpact.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Future Value</div>
                      <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ₹{result.futureValue.toLocaleString()}
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                        CAGR: {result.cagr}%
                      </div>
                    </div>
                  </div>

                  {/* Tax Impact */}
                  {result.ltcgTax > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Impact (Equity Funds)</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                          <div className="text-xs text-yellow-600 dark:text-yellow-400">LTCG Tax (10%)</div>
                          <div className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                            ₹{result.ltcgTax.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <div className="text-xs text-green-600 dark:text-green-400">Post-tax Gains</div>
                          <div className="text-lg font-bold text-green-700 dark:text-green-300">
                            ₹{result.postTaxGains.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Investment Breakdown Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investment Analysis</h3>
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

                {/* Growth Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Growth</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={result.yearlyBreakdown}>
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
                        <Line type="monotone" dataKey="investment" stroke="#3B82F6" name="Investment" strokeWidth={2} />
                        <Line type="monotone" dataKey="value" stroke="#10B981" name="Portfolio Value" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Performance</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.slice(0, 8).map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                        <div className="text-right">
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            Invested: ₹{year.investment.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Value: ₹{year.value.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            Gains: ₹{year.gains.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <PresentationChartLineIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Track Mutual Fund Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select fund type and enter details to analyze performance
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

export default MutualFundTrackerPage;