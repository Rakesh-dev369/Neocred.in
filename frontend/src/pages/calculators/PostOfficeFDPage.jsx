import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, BuildingLibraryIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const PostOfficeFDPage = () => {
  useScrollToTop();
  const [amount, setAmount] = useState('');
  const [scheme, setScheme] = useState('td');
  const [tenure, setTenure] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickAmounts = [50000, 100000, 200000, 500000, 1000000, 1500000];

  // Post Office Schemes with current rates (2025)
  const schemes = {
    td: {
      name: 'Time Deposit (TD)',
      rates: { 1: 6.9, 2: 7.0, 3: 7.1, 5: 7.5 },
      minAmount: 1000,
      maxAmount: null,
      description: 'Traditional fixed deposit with guaranteed returns'
    },
    mis: {
      name: 'Monthly Income Scheme (MIS)',
      rates: { 5: 7.4 },
      minAmount: 1500,
      maxAmount: 900000, // 4.5L single, 9L joint
      description: 'Monthly income with principal safety',
      monthlyIncome: true
    },
    scss: {
      name: 'Senior Citizen Savings Scheme (SCSS)',
      rates: { 5: 8.2 },
      minAmount: 1000,
      maxAmount: 3000000,
      description: 'Exclusive for senior citizens (60+)',
      seniorOnly: true,
      quarterlyIncome: true
    },
    nsc: {
      name: 'National Savings Certificate (NSC)',
      rates: { 5: 6.8 },
      minAmount: 1000,
      maxAmount: null,
      description: 'Tax saving investment with 5-year lock-in',
      taxSaving: true
    },
    kvp: {
      name: 'Kisan Vikas Patra (KVP)',
      rates: { 10.25: 7.5 }, // 10 years 3 months to double
      minAmount: 1000,
      maxAmount: null,
      description: 'Money doubles in 10 years 3 months'
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    const selectedScheme = schemes[scheme];
    
    if (!amount || amount < selectedScheme.minAmount) {
      newErrors.amount = `Minimum ₹${selectedScheme.minAmount.toLocaleString()} required`;
    } else if (selectedScheme.maxAmount && amount > selectedScheme.maxAmount) {
      newErrors.amount = `Maximum ₹${selectedScheme.maxAmount.toLocaleString()} allowed`;
    }
    
    if (selectedScheme.seniorOnly && (!age || age < 60)) {
      newErrors.age = 'SCSS is only for senior citizens (60+)';
    }
    
    if (!tenure && scheme !== 'kvp') {
      newErrors.tenure = 'Tenure is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePostOfficeFD = () => {
    const selectedScheme = schemes[scheme];
    let interestRate, actualTenure;
    
    if (scheme === 'kvp') {
      interestRate = 7.5;
      actualTenure = 10.25; // 10 years 3 months
    } else {
      interestRate = selectedScheme.rates[tenure];
      actualTenure = tenure;
    }
    
    const principal = amount;
    const rate = interestRate / 100;
    
    let maturityAmount, totalInterest, yearlyBreakdown = [];
    
    if (selectedScheme.monthlyIncome) {
      // MIS - Monthly income calculation
      const monthlyIncome = (principal * rate) / 12;
      const totalMonthlyIncome = monthlyIncome * actualTenure * 12;
      maturityAmount = principal; // Principal returned at maturity
      totalInterest = totalMonthlyIncome;
      
      // Yearly breakdown for MIS
      for (let year = 1; year <= actualTenure; year++) {
        yearlyBreakdown.push({
          year: `Year ${year}`,
          monthlyIncome: Math.round(monthlyIncome),
          yearlyIncome: Math.round(monthlyIncome * 12),
          principal: year === actualTenure ? principal : 0
        });
      }
    } else if (selectedScheme.quarterlyIncome) {
      // SCSS - Quarterly income calculation
      const quarterlyIncome = (principal * rate) / 4;
      const totalQuarterlyIncome = quarterlyIncome * actualTenure * 4;
      maturityAmount = principal; // Principal returned at maturity
      totalInterest = totalQuarterlyIncome;
      
      // Yearly breakdown for SCSS
      for (let year = 1; year <= actualTenure; year++) {
        yearlyBreakdown.push({
          year: `Year ${year}`,
          quarterlyIncome: Math.round(quarterlyIncome),
          yearlyIncome: Math.round(quarterlyIncome * 4),
          principal: year === actualTenure ? principal : 0
        });
      }
    } else {
      // Compound interest calculation for TD, NSC, KVP
      maturityAmount = principal * Math.pow(1 + rate, actualTenure);
      totalInterest = maturityAmount - principal;
      
      // Yearly breakdown
      let currentAmount = principal;
      for (let year = 1; year <= actualTenure; year++) {
        const yearStartAmount = currentAmount;
        const yearInterest = yearStartAmount * rate;
        currentAmount = yearStartAmount + yearInterest;
        
        yearlyBreakdown.push({
          year: `Year ${year}`,
          startAmount: Math.round(yearStartAmount),
          interest: Math.round(yearInterest),
          endAmount: Math.round(currentAmount)
        });
      }
    }
    
    // Tax implications
    let taxableInterest = 0;
    let taxSavings = 0;
    
    if (selectedScheme.taxSaving) {
      taxSavings = Math.min(principal, 150000) * 0.3; // 30% tax saving on investment up to 1.5L
    }
    
    if (totalInterest > 10000) {
      taxableInterest = totalInterest - 10000; // Interest above 10k is taxable
    }
    
    // Calculate effective returns
    const effectiveRate = ((maturityAmount / principal) ** (1 / actualTenure) - 1) * 100;
    
    return {
      principal: Math.round(principal),
      maturityAmount: Math.round(maturityAmount),
      totalInterest: Math.round(totalInterest),
      interestRate,
      tenure: actualTenure,
      yearlyBreakdown,
      taxableInterest: Math.round(taxableInterest),
      taxSavings: Math.round(taxSavings),
      effectiveRate: effectiveRate.toFixed(2),
      schemeName: selectedScheme.name,
      monthlyIncome: selectedScheme.monthlyIncome ? Math.round((principal * rate) / 12) : 0,
      quarterlyIncome: selectedScheme.quarterlyIncome ? Math.round((principal * rate) / 4) : 0
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (amount > 0 && (tenure > 0 || scheme === 'kvp')) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculatePostOfficeFD());
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
  }, [amount, scheme, tenure, age]);

  const pieData = result ? [
    { name: 'Principal', value: result.principal, color: '#3B82F6' },
    { name: 'Interest Earned', value: result.totalInterest, color: '#10B981' }
  ] : [];

  const comparisonData = [
    { name: 'Bank FD', rate: 6.5, type: 'Private Bank' },
    { name: 'Post Office TD', rate: 7.1, type: 'Government' },
    { name: 'SCSS', rate: 8.2, type: 'Senior Citizens' },
    { name: 'NSC', rate: 6.8, type: 'Tax Saving' }
  ];

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
                  <BuildingLibraryIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post Office FD Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate returns on government-backed savings schemes</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('post-office-fd');
              const difficulty = getToolDifficulty('post-office-fd');
              
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

      {/* Post Office Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Post Office Savings Schemes <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Government Backed)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Safe investment options with guaranteed returns and government backing for rural and urban investors.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🏛️</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Government</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">100% Safe</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Higher Rates</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">6.8-8.2%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Tax Benefits</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">80C Eligible</span>
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
                {/* Scheme Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Post Office Scheme
                  </label>
                  <div className="space-y-3">
                    {Object.entries(schemes).map(([key, schemeData]) => (
                      <button
                        key={key}
                        onClick={() => setScheme(key)}
                        className={`w-full p-4 rounded-lg border text-left transition-colors ${
                          scheme === key
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-medium">{schemeData.name}</div>
                        <div className="text-sm opacity-75 mt-1">{schemeData.description}</div>
                        <div className="text-xs mt-2 flex gap-4">
                          <span>Min: ₹{schemeData.minAmount.toLocaleString()}</span>
                          {schemeData.maxAmount && <span>Max: ₹{schemeData.maxAmount.toLocaleString()}</span>}
                          {schemeData.seniorOnly && <span className="text-orange-400">60+ only</span>}
                          {schemeData.taxSaving && <span className="text-green-400">Tax Saving</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Investment Amount
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
                        ₹{(amt/100000).toFixed(0)}L
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
                      placeholder="100000"
                      min={schemes[scheme]?.minAmount || 1000}
                      max={schemes[scheme]?.maxAmount || 10000000}
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                  )}
                </div>

                {/* Tenure (not for KVP) */}
                {scheme !== 'kvp' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Investment Tenure (Years)
                    </label>
                    
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {Object.keys(schemes[scheme]?.rates || {}).map(years => (
                        <button
                          key={years}
                          onClick={() => setTenure(Number(years))}
                          className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                            tenure === Number(years)
                              ? 'bg-green-500 text-white border-green-500'
                              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                          errors.tenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="5"
                        min="1"
                        max="10"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                    </div>
                    {errors.tenure && (
                      <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                    )}
                  </div>
                )}

                {/* Age (for SCSS) */}
                {schemes[scheme]?.seniorOnly && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Age (Required for SCSS)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                          errors.age ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="65"
                        min="60"
                        max="100"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                    </div>
                    {errors.age && (
                      <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Post Office Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">🏛️</span>
                Post Office Benefits
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">🛡️</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Government Guarantee</div>
                    <div className="text-gray-600 dark:text-gray-300">100% safe with sovereign backing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📈</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Higher Interest Rates</div>
                    <div className="text-gray-600 dark:text-gray-300">Better than most bank FDs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🎯</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Tax Benefits</div>
                    <div className="text-gray-600 dark:text-gray-300">NSC eligible for 80C deduction</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your investment returns</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Investment Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    {result.schemeName} Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Investment Amount</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.principal.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Interest Rate</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        {result.interestRate}% p.a.
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Total Interest</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.totalInterest.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Tenure</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.tenure} Years
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Maturity Amount</div>
                      <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ₹{result.maturityAmount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Income Details */}
                  {(result.monthlyIncome > 0 || result.quarterlyIncome > 0) && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-2 gap-4">
                        {result.monthlyIncome > 0 && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                            <div className="text-sm text-green-600 dark:text-green-400 font-medium">Monthly Income</div>
                            <div className="text-xl font-bold text-green-700 dark:text-green-300">
                              ₹{result.monthlyIncome.toLocaleString()}
                            </div>
                          </div>
                        )}
                        {result.quarterlyIncome > 0 && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Quarterly Income</div>
                            <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                              ₹{result.quarterlyIncome.toLocaleString()}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tax Information */}
                  {(result.taxSavings > 0 || result.taxableInterest > 0) && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Implications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {result.taxSavings > 0 && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                            <div className="text-xs text-green-600 dark:text-green-400">Tax Savings (80C)</div>
                            <div className="text-lg font-bold text-green-700 dark:text-green-300">
                              ₹{result.taxSavings.toLocaleString()}
                            </div>
                          </div>
                        )}
                        {result.taxableInterest > 0 && (
                          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                            <div className="text-xs text-red-600 dark:text-red-400">Taxable Interest</div>
                            <div className="text-lg font-bold text-red-700 dark:text-red-300">
                              ₹{result.taxableInterest.toLocaleString()}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Principal vs Interest Pie Chart */}
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

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Breakdown</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                        <div className="text-right">
                          {year.monthlyIncome && (
                            <div className="text-sm text-green-600 dark:text-green-400">
                              Monthly: ₹{year.monthlyIncome.toLocaleString()}
                            </div>
                          )}
                          {year.quarterlyIncome && (
                            <div className="text-sm text-blue-600 dark:text-blue-400">
                              Quarterly: ₹{year.quarterlyIncome.toLocaleString()}
                            </div>
                          )}
                          {year.interest && (
                            <div className="text-sm text-purple-600 dark:text-purple-400">
                              Interest: ₹{year.interest.toLocaleString()}
                            </div>
                          )}
                          {year.endAmount && (
                            <div className="font-medium text-gray-900 dark:text-white">
                              Total: ₹{year.endAmount.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rate Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Interest Rate Comparison</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={comparisonData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `${value}%`} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Interest Rate']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="rate" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <BuildingLibraryIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Post Office Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select a scheme and enter investment details to calculate returns
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

export default PostOfficeFDPage;