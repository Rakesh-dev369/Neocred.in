import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ArrowTrendingUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const RealReturnsPage = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [nominalReturn, setNominalReturn] = useState('');
  const [inflationRate, setInflationRate] = useState(6);
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [investmentType, setInvestmentType] = useState('lumpsum');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [100000, 500000, 1000000, 2500000, 5000000, 10000000];
  const quickReturns = [8, 10, 12, 15, 18, 22];
  const quickPeriods = [5, 10, 15, 20, 25, 30];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!investmentAmount || investmentAmount < 1000) {
      newErrors.investmentAmount = 'Minimum ₹1,000 required';
    } else if (investmentAmount > 100000000) {
      newErrors.investmentAmount = 'Maximum ₹10 crore allowed';
    }
    
    if (!nominalReturn || nominalReturn < 0) {
      newErrors.nominalReturn = 'Return rate required';
    } else if (nominalReturn > 50) {
      newErrors.nominalReturn = 'Maximum 50% allowed';
    }
    
    if (!investmentPeriod || investmentPeriod < 1) {
      newErrors.investmentPeriod = 'Minimum 1 year required';
    } else if (investmentPeriod > 50) {
      newErrors.investmentPeriod = 'Maximum 50 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRealReturns = () => {
    // Real return calculation: (1 + nominal) / (1 + inflation) - 1
    const realReturn = ((1 + nominalReturn / 100) / (1 + inflationRate / 100) - 1) * 100;
    
    let nominalValue, realValue, totalInvestment;
    
    if (investmentType === 'lumpsum') {
      // Lumpsum investment
      nominalValue = investmentAmount * Math.pow(1 + nominalReturn / 100, investmentPeriod);
      realValue = investmentAmount * Math.pow(1 + realReturn / 100, investmentPeriod);
      totalInvestment = investmentAmount;
    } else {
      // SIP investment
      const monthlyReturn = nominalReturn / 100 / 12;
      const realMonthlyReturn = realReturn / 100 / 12;
      const months = investmentPeriod * 12;
      
      nominalValue = investmentAmount * (((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * (1 + monthlyReturn));
      realValue = investmentAmount * (((Math.pow(1 + realMonthlyReturn, months) - 1) / realMonthlyReturn) * (1 + realMonthlyReturn));
      totalInvestment = investmentAmount * months;
    }
    
    const nominalGains = nominalValue - totalInvestment;
    const realGains = realValue - totalInvestment;
    const inflationImpact = nominalValue - realValue;
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    for (let year = 1; year <= Math.min(investmentPeriod, 25); year++) {
      let yearlyNominalValue, yearlyRealValue, yearlyInvestment;
      
      if (investmentType === 'lumpsum') {
        yearlyNominalValue = investmentAmount * Math.pow(1 + nominalReturn / 100, year);
        yearlyRealValue = investmentAmount * Math.pow(1 + realReturn / 100, year);
        yearlyInvestment = investmentAmount;
      } else {
        const monthlyReturn = nominalReturn / 100 / 12;
        const realMonthlyReturn = realReturn / 100 / 12;
        const months = year * 12;
        
        yearlyNominalValue = investmentAmount * (((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * (1 + monthlyReturn));
        yearlyRealValue = investmentAmount * (((Math.pow(1 + realMonthlyReturn, months) - 1) / realMonthlyReturn) * (1 + realMonthlyReturn));
        yearlyInvestment = investmentAmount * months;
      }
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        nominalValue: Math.round(yearlyNominalValue),
        realValue: Math.round(yearlyRealValue),
        investment: Math.round(yearlyInvestment),
        inflationLoss: Math.round(yearlyNominalValue - yearlyRealValue)
      });
    }
    
    // Different inflation scenarios
    const inflationScenarios = [3, 5, 6, 8, 10].map(inflation => {
      const scenarioRealReturn = ((1 + nominalReturn / 100) / (1 + inflation / 100) - 1) * 100;
      let scenarioRealValue;
      
      if (investmentType === 'lumpsum') {
        scenarioRealValue = investmentAmount * Math.pow(1 + scenarioRealReturn / 100, investmentPeriod);
      } else {
        const realMonthlyReturn = scenarioRealReturn / 100 / 12;
        const months = investmentPeriod * 12;
        scenarioRealValue = investmentAmount * (((Math.pow(1 + realMonthlyReturn, months) - 1) / realMonthlyReturn) * (1 + realMonthlyReturn));
      }
      
      return {
        inflation: `${inflation}%`,
        realReturn: scenarioRealReturn.toFixed(2),
        realValue: Math.round(scenarioRealValue),
        purchasingPower: Math.round((scenarioRealValue / totalInvestment) * 100)
      };
    });
    
    // Asset class comparison with typical returns
    const assetComparison = [
      { asset: 'Fixed Deposits', nominalReturn: 6.5, realReturn: ((1.065 / 1.06) - 1) * 100 },
      { asset: 'Government Bonds', nominalReturn: 7.2, realReturn: ((1.072 / 1.06) - 1) * 100 },
      { asset: 'Corporate Bonds', nominalReturn: 8.5, realReturn: ((1.085 / 1.06) - 1) * 100 },
      { asset: 'Large Cap Equity', nominalReturn: 12, realReturn: ((1.12 / 1.06) - 1) * 100 },
      { asset: 'Mid Cap Equity', nominalReturn: 15, realReturn: ((1.15 / 1.06) - 1) * 100 },
      { asset: 'Gold', nominalReturn: 8, realReturn: ((1.08 / 1.06) - 1) * 100 },
      { asset: 'Real Estate', nominalReturn: 10, realReturn: ((1.10 / 1.06) - 1) * 100 }
    ].map(asset => ({
      ...asset,
      realReturn: asset.realReturn.toFixed(2)
    }));
    
    // Purchasing power analysis
    const currentPurchasingPower = 100;
    const futurePurchasingPower = (realValue / totalInvestment) * 100;
    const purchasingPowerLoss = Math.max(0, currentPurchasingPower - futurePurchasingPower);
    
    return {
      investmentAmount,
      nominalReturn,
      realReturn: realReturn.toFixed(2),
      inflationRate,
      investmentPeriod,
      investmentType,
      nominalValue: Math.round(nominalValue),
      realValue: Math.round(realValue),
      totalInvestment: Math.round(totalInvestment),
      nominalGains: Math.round(nominalGains),
      realGains: Math.round(realGains),
      inflationImpact: Math.round(inflationImpact),
      yearlyBreakdown,
      inflationScenarios,
      assetComparison,
      currentPurchasingPower,
      futurePurchasingPower: futurePurchasingPower.toFixed(1),
      purchasingPowerLoss: purchasingPowerLoss.toFixed(1)
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (investmentAmount > 0 && nominalReturn >= 0 && investmentPeriod > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateRealReturns());
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
  }, [investmentAmount, nominalReturn, inflationRate, investmentPeriod, investmentType]);

  const growthData = result ? result.yearlyBreakdown : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('real-returns');
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
                  <ArrowTrendingUpIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Real Returns Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Adjust investment returns for inflation impact</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('real-returns');
              
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Investment Details
              </h2>
              
              <div className="space-y-6">
                {/* Investment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Investment Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setInvestmentType('lumpsum')}
                      className={`p-3 rounded-lg border transition-colors ${
                        investmentType === 'lumpsum'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Lumpsum</div>
                      <div className="text-xs opacity-75">One-time investment</div>
                    </button>
                    <button
                      onClick={() => setInvestmentType('sip')}
                      className={`p-3 rounded-lg border transition-colors ${
                        investmentType === 'sip'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">SIP</div>
                      <div className="text-xs opacity-75">Monthly investment</div>
                    </button>
                  </div>
                </div>

                {/* Investment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {investmentType === 'lumpsum' ? 'Investment Amount' : 'Monthly SIP Amount'}
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setInvestmentAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          investmentAmount === amount
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        ₹{amount >= 100000 ? `${(amount/100000).toFixed(0)}L` : amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
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

                {/* Nominal Return */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Nominal Return (% per annum)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickReturns.map(returnRate => (
                      <button
                        key={returnRate}
                        onClick={() => setNominalReturn(returnRate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          nominalReturn === returnRate
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                        }`}
                      >
                        {returnRate}%
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={nominalReturn}
                      onChange={(e) => setNominalReturn(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.nominalReturn ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="12"
                      min="0"
                      max="50"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.nominalReturn && (
                    <p className="text-red-500 text-xs mt-1">{errors.nominalReturn}</p>
                  )}
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Investment Period (Years)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickPeriods.map(period => (
                      <button
                        key={period}
                        onClick={() => setInvestmentPeriod(period)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          investmentPeriod === period
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-orange-400'
                        }`}
                      >
                        {period}Y
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.investmentPeriod ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="15"
                      min="1"
                      max="50"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.investmentPeriod && (
                    <p className="text-red-500 text-xs mt-1">{errors.investmentPeriod}</p>
                  )}
                </div>

                {/* Inflation Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Inflation Rate (% per annum)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value ? Number(e.target.value) : 6)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="6"
                      min="0"
                      max="20"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Historical average: 5-7% in India</p>
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
                  <p className="text-gray-600 dark:text-gray-400">Analyzing real returns impact</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Real Returns Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Real Returns Analysis
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Nominal Return</div>
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        {result.nominalReturn}%
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Real Return</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        {result.realReturn}%
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Nominal Value</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.nominalValue.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Real Value</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.realValue.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Inflation Impact</div>
                      <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.inflationImpact.toLocaleString()}
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                        Loss in purchasing power
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Total Investment:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.totalInvestment.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Real Gains:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.realGains.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Comparison Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Nominal vs Real Growth</h3>
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
                        <Line type="monotone" dataKey="nominalValue" stroke="#3B82F6" name="Nominal Value" strokeWidth={3} />
                        <Line type="monotone" dataKey="realValue" stroke="#10B981" name="Real Value" strokeWidth={3} />
                        <Line type="monotone" dataKey="investment" stroke="#6B7280" name="Investment" strokeWidth={2} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Inflation Scenarios */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Different Inflation Scenarios</h3>
                  <div className="space-y-3">
                    {result.inflationScenarios.map((scenario, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Inflation: {scenario.inflation}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Real Return: {scenario.realReturn}%</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            ₹{scenario.realValue.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {scenario.purchasingPower}% power
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Asset Class Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Asset Class Real Returns</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={result.assetComparison}>
                        <XAxis dataKey="asset" angle={-45} textAnchor="end" height={80} />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, '']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="nominalReturn" fill="#3B82F6" name="Nominal Return %" />
                        <Bar dataKey="realReturn" fill="#10B981" name="Real Return %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Purchasing Power Analysis */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-red-600">⚠️</span>
                    Purchasing Power Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {result.currentPurchasingPower}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Today's Purchasing Power</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {result.futurePurchasingPower}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Future Purchasing Power</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Impact:</strong> Due to {result.inflationRate}% inflation, your money will lose {result.purchasingPowerLoss}% of its purchasing power over {result.investmentPeriod} years.
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ArrowTrendingUpIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Real Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter investment details to see inflation-adjusted returns
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

export default RealReturnsPage;