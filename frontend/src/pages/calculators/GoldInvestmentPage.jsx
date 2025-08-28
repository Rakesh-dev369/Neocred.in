import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';

const GoldInvestmentPage = () => {
  const [investmentType, setInvestmentType] = useState('sgb');
  const [investmentMode, setInvestmentMode] = useState('lumpsum');
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [goldAppreciation, setGoldAppreciation] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [10000, 25000, 50000, 100000, 200000, 500000];
  const quickTenures = [1, 3, 5, 8, 10, 15];

  const goldTypes = {
    sgb: { 
      name: 'Sovereign Gold Bonds (SGB)', 
      interestRate: 2.5, 
      taxBenefit: true, 
      makingCharges: 0,
      description: 'Government bonds backed by gold with 2.5% annual interest'
    },
    digitalGold: { 
      name: 'Digital Gold', 
      interestRate: 0, 
      taxBenefit: false, 
      makingCharges: 3,
      description: 'Online gold investment with storage charges'
    },
    goldETF: { 
      name: 'Gold ETF', 
      interestRate: 0, 
      taxBenefit: false, 
      makingCharges: 0.5,
      description: 'Exchange-traded funds tracking gold prices'
    },
    physicalGold: { 
      name: 'Physical Gold', 
      interestRate: 0, 
      taxBenefit: false, 
      makingCharges: 8,
      description: 'Jewelry, coins, bars with making charges'
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    
    if (!amount || amount < 1000) {
      newErrors.amount = 'Minimum ₹1,000 required';
    } else if (amount > 10000000) {
      newErrors.amount = 'Maximum ₹1 crore allowed';
    }
    
    if (!tenure || tenure < 0.25) {
      newErrors.tenure = 'Minimum 3 months required';
    } else if (tenure > 20) {
      newErrors.tenure = 'Maximum 20 years allowed';
    }
    
    if (!goldAppreciation || goldAppreciation < -10) {
      newErrors.goldAppreciation = 'Minimum -10% allowed';
    } else if (goldAppreciation > 25) {
      newErrors.goldAppreciation = 'Maximum 25% allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateGoldInvestment = () => {
    const selectedType = goldTypes[investmentType];
    const makingChargesAmount = (amount * selectedType.makingCharges) / 100;
    const netInvestment = amount - makingChargesAmount;
    
    let totalInvestment, futureGoldValue, interestEarned = 0;
    
    if (investmentMode === 'sip') {
      const totalMonths = tenure * 12;
      totalInvestment = amount * totalMonths;
      const netMonthlyInvestment = amount - (amount * selectedType.makingCharges) / 100;
      
      // Calculate SIP with gold appreciation
      const monthlyGoldReturn = goldAppreciation / 100 / 12;
      futureGoldValue = netMonthlyInvestment * (((Math.pow(1 + monthlyGoldReturn, totalMonths) - 1) / monthlyGoldReturn) * (1 + monthlyGoldReturn));
      
      // SGB interest calculation for SIP
      if (selectedType.interestRate > 0) {
        interestEarned = (netMonthlyInvestment * totalMonths * selectedType.interestRate * tenure) / 100;
      }
    } else {
      totalInvestment = amount;
      futureGoldValue = netInvestment * Math.pow(1 + goldAppreciation / 100, tenure);
      
      // SGB interest calculation for lumpsum
      if (selectedType.interestRate > 0) {
        interestEarned = (netInvestment * selectedType.interestRate * tenure) / 100;
      }
    }
    
    const totalReturns = futureGoldValue + interestEarned;
    const capitalGains = futureGoldValue - (totalInvestment - (totalInvestment * selectedType.makingCharges) / 100);
    
    // Tax calculations
    let ltcgTax = 0;
    let indexationBenefit = 0;
    
    if (tenure > 3 && investmentType !== 'sgb') {
      // LTCG with indexation for gold (except SGB)
      const inflationRate = 0.06; // Assume 6% inflation
      const indexedCost = (totalInvestment - (totalInvestment * selectedType.makingCharges) / 100) * Math.pow(1 + inflationRate, tenure);
      indexationBenefit = indexedCost - (totalInvestment - (totalInvestment * selectedType.makingCharges) / 100);
      const taxableGains = Math.max(0, capitalGains - indexationBenefit);
      ltcgTax = taxableGains * 0.2; // 20% LTCG tax
    } else if (tenure <= 3 && investmentType !== 'sgb') {
      // STCG tax at slab rate (assume 30%)
      ltcgTax = capitalGains * 0.3;
    }
    
    const postTaxReturns = totalReturns - ltcgTax;
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let cumulativeInvestment = 0;
    let cumulativeGoldValue = 0;
    let cumulativeInterest = 0;
    
    for (let year = 1; year <= Math.min(tenure, 15); year++) {
      if (investmentMode === 'sip') {
        const monthsCompleted = year * 12;
        cumulativeInvestment = amount * monthsCompleted;
        const netCumulativeInvestment = cumulativeInvestment - (cumulativeInvestment * selectedType.makingCharges) / 100;
        
        const monthlyReturn = goldAppreciation / 100 / 12;
        cumulativeGoldValue = (amount - (amount * selectedType.makingCharges) / 100) * 
          (((Math.pow(1 + monthlyReturn, monthsCompleted) - 1) / monthlyReturn) * (1 + monthlyReturn));
        
        if (selectedType.interestRate > 0) {
          cumulativeInterest = (netCumulativeInvestment * selectedType.interestRate * year) / 100;
        }
      } else {
        cumulativeInvestment = totalInvestment;
        cumulativeGoldValue = netInvestment * Math.pow(1 + goldAppreciation / 100, year);
        if (selectedType.interestRate > 0) {
          cumulativeInterest = (netInvestment * selectedType.interestRate * year) / 100;
        }
      }
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        investment: Math.round(cumulativeInvestment),
        goldValue: Math.round(cumulativeGoldValue),
        interest: Math.round(cumulativeInterest),
        totalValue: Math.round(cumulativeGoldValue + cumulativeInterest)
      });
    }
    
    // Current gold price context (approximate)
    const currentGoldPrice = 6500; // per gram
    const goldGrams = netInvestment / currentGoldPrice;
    const futureGoldPrice = currentGoldPrice * Math.pow(1 + goldAppreciation / 100, tenure);
    
    return {
      investmentType: selectedType.name,
      investmentMode,
      amount,
      tenure,
      goldAppreciation,
      totalInvestment: Math.round(totalInvestment),
      makingCharges: Math.round(totalInvestment * selectedType.makingCharges / 100),
      netInvestment: Math.round(totalInvestment - (totalInvestment * selectedType.makingCharges / 100)),
      futureGoldValue: Math.round(futureGoldValue),
      interestEarned: Math.round(interestEarned),
      totalReturns: Math.round(totalReturns),
      capitalGains: Math.round(capitalGains),
      ltcgTax: Math.round(ltcgTax),
      indexationBenefit: Math.round(indexationBenefit),
      postTaxReturns: Math.round(postTaxReturns),
      yearlyBreakdown,
      goldGrams: goldGrams.toFixed(2),
      currentGoldPrice,
      futureGoldPrice: Math.round(futureGoldPrice),
      cagr: ((Math.pow(totalReturns / totalInvestment, 1 / tenure) - 1) * 100).toFixed(2),
      absoluteReturn: ((totalReturns - totalInvestment) / totalInvestment * 100).toFixed(2)
    };
  };

  useEffect(() => {
    // Set default gold appreciation based on historical average
    setGoldAppreciation(8);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (amount > 0 && tenure > 0 && goldAppreciation !== '') {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateGoldInvestment());
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
  }, [amount, tenure, goldAppreciation, investmentType, investmentMode]);

  const pieData = result ? [
    { name: 'Net Investment', value: result.netInvestment, color: '#3B82F6' },
    { name: 'Gold Appreciation', value: result.capitalGains, color: '#F59E0B' },
    { name: 'Interest Earned', value: result.interestEarned, color: '#10B981' },
    { name: 'Making Charges', value: result.makingCharges, color: '#EF4444' }
  ].filter(item => item.value > 0) : [];

  const comparisonData = [
    { name: 'SGB', returns: 10.5, tax: 'Tax-free', charges: '0%' },
    { name: 'Digital Gold', returns: 8, tax: 'LTCG 20%', charges: '3%' },
    { name: 'Gold ETF', returns: 8, tax: 'LTCG 20%', charges: '0.5%' },
    { name: 'Physical Gold', returns: 8, tax: 'LTCG 20%', charges: '8%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/tools" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Back to Tools
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <SparklesIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Gold Investment Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Compare SGB, Digital Gold, ETF, and Physical Gold returns</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('gold-investment');
              
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
                <CalculatorIcon className="h-5 w-5 text-yellow-600" />
                Gold Investment Details
              </h2>
              
              <div className="space-y-6">
                {/* Investment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Gold Investment Type
                  </label>
                  <div className="space-y-2">
                    {Object.entries(goldTypes).map(([key, type]) => (
                      <button
                        key={key}
                        onClick={() => setInvestmentType(key)}
                        className={`w-full p-3 rounded-lg border text-left transition-colors ${
                          investmentType === key
                            ? 'bg-yellow-500 text-white border-yellow-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-yellow-400'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-medium">{type.name}</div>
                            <div className="text-xs opacity-75 mt-1">{type.description}</div>
                          </div>
                          <div className="text-xs ml-2">
                            {type.interestRate > 0 && <div>Interest: {type.interestRate}%</div>}
                            <div>Charges: {type.makingCharges}%</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Investment Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setInvestmentMode('lumpsum')}
                      className={`p-3 rounded-lg border transition-colors ${
                        investmentMode === 'lumpsum'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Lumpsum</div>
                      <div className="text-xs opacity-75">One-time Investment</div>
                    </button>
                    <button
                      onClick={() => setInvestmentMode('sip')}
                      className={`p-3 rounded-lg border transition-colors ${
                        investmentMode === 'sip'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">SIP</div>
                      <div className="text-xs opacity-75">Monthly Investment</div>
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {investmentMode === 'sip' ? 'Monthly Investment Amount' : 'Investment Amount'}
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amt => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          amount === amt
                            ? 'bg-yellow-500 text-white border-yellow-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-yellow-400'
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
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.amount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="50000"
                      min="1000"
                      max="10000000"
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                  )}
                </div>

                {/* Gold Appreciation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Gold Appreciation (% per annum)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={goldAppreciation}
                      onChange={(e) => setGoldAppreciation(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.goldAppreciation ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="8"
                      min="-10"
                      max="25"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.goldAppreciation && (
                    <p className="text-red-500 text-xs mt-1">{errors.goldAppreciation}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Historical average: 8-10% per annum</p>
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
                      placeholder="8"
                      min="0.25"
                      max="20"
                      step="0.25"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">SGB has 8-year maturity with exit after 5 years</p>
                </div>
              </div>
            </div>

            {/* Gold Investment Comparison */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-600">🏆</span>
                Gold Investment Options
              </h3>
              <div className="space-y-3 text-sm">
                {comparisonData.map((option, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-900/20 rounded">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{option.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Charges: {option.charges}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{option.returns}%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{option.tax}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculating...</h3>
                  <p className="text-gray-600 dark:text-gray-400">Processing gold investment projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Gold Investment Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-yellow-600" />
                    {result.investmentType} Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Investment</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.totalInvestment.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Gold Quantity</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.goldGrams}g
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Gold Appreciation</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.capitalGains.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Interest Earned</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.interestEarned.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Total Returns</div>
                      <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ₹{result.totalReturns.toLocaleString()}
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                        CAGR: {result.cagr}% | Absolute: {result.absoluteReturn}%
                      </div>
                    </div>
                  </div>

                  {/* Tax Impact */}
                  {result.ltcgTax > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Impact</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                          <div className="text-xs text-red-600 dark:text-red-400">LTCG Tax</div>
                          <div className="text-lg font-bold text-red-700 dark:text-red-300">
                            ₹{result.ltcgTax.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <div className="text-xs text-green-600 dark:text-green-400">Post-tax Returns</div>
                          <div className="text-lg font-bold text-green-700 dark:text-green-300">
                            ₹{result.postTaxReturns.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gold Price Context */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Current Gold Price:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.currentGoldPrice}/g
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Future Gold Price:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.futureGoldPrice}/g
                        </span>
                      </div>
                    </div>
                  </div>
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

                {/* Gold Investment Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Gold Options Comparison</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={comparisonData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `${value}%`} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Expected Returns']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="returns" fill="#F59E0B" />
                      </BarChart>
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
                            Gold Value: ₹{year.goldValue.toLocaleString()}
                          </div>
                          {year.interest > 0 && (
                            <div className="text-sm text-green-600 dark:text-green-400">
                              Interest: ₹{year.interest.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <SparklesIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Gold Investment Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select gold type and enter details to analyze returns
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

export default GoldInvestmentPage;