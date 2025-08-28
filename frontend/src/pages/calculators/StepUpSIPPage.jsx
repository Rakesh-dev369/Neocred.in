import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ArrowTrendingUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const StepUpSIPPage = () => {
  const [initialSIP, setInitialSIP] = useState('');
  const [stepUpPercentage, setStepUpPercentage] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickSIPs = [1000, 2000, 5000, 10000, 15000, 25000];
  const quickStepUps = [5, 10, 15, 20, 25, 30];
  const quickReturns = [8, 10, 12, 14, 16, 18];
  const quickTenures = [5, 10, 15, 20, 25, 30];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!initialSIP || initialSIP < 500) {
      newErrors.initialSIP = 'Minimum ₹500 required';
    } else if (initialSIP > 100000) {
      newErrors.initialSIP = 'Maximum ₹1,00,000 allowed';
    }
    
    if (!stepUpPercentage || stepUpPercentage < 1) {
      newErrors.stepUpPercentage = 'Minimum 1% required';
    } else if (stepUpPercentage > 50) {
      newErrors.stepUpPercentage = 'Maximum 50% allowed';
    }
    
    if (!expectedReturn || expectedReturn < 1) {
      newErrors.expectedReturn = 'Minimum 1% required';
    } else if (expectedReturn > 30) {
      newErrors.expectedReturn = 'Maximum 30% allowed';
    }
    
    if (!tenure || tenure < 1) {
      newErrors.tenure = 'Minimum 1 year required';
    } else if (tenure > 40) {
      newErrors.tenure = 'Maximum 40 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateStepUpSIP = () => {
    const monthlyReturn = expectedReturn / 100 / 12;
    const totalMonths = tenure * 12;
    
    let totalInvestment = 0;
    let futureValue = 0;
    let currentSIP = initialSIP;
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let yearlyInvestment = 0;
    let yearlyValue = 0;
    
    for (let month = 1; month <= totalMonths; month++) {
      // Step up SIP amount at the beginning of each year (except first year)
      if (month > 12 && (month - 1) % 12 === 0) {
        currentSIP = currentSIP * (1 + stepUpPercentage / 100);
      }
      
      totalInvestment += currentSIP;
      yearlyInvestment += currentSIP;
      
      // Calculate future value with compound interest
      futureValue = (futureValue + currentSIP) * (1 + monthlyReturn);
      
      // Store yearly data
      if (month % 12 === 0 || month === totalMonths) {
        const year = Math.ceil(month / 12);
        yearlyValue = futureValue;
        
        yearlyBreakdown.push({
          year: `Year ${year}`,
          sipAmount: Math.round(currentSIP),
          yearlyInvestment: Math.round(yearlyInvestment),
          cumulativeInvestment: Math.round(totalInvestment),
          portfolioValue: Math.round(yearlyValue),
          gains: Math.round(yearlyValue - totalInvestment)
        });
        
        yearlyInvestment = 0; // Reset for next year
      }
    }
    
    const totalGains = futureValue - totalInvestment;
    
    // Calculate regular SIP comparison (without step-up)
    const regularSIPValue = initialSIP * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
    const regularSIPInvestment = initialSIP * totalMonths;
    const stepUpAdvantage = futureValue - regularSIPValue;
    
    // Calculate average SIP amount
    const averageSIP = totalInvestment / totalMonths;
    
    // Calculate XIRR (approximate)
    const xirr = (Math.pow(futureValue / totalInvestment, 1 / tenure) - 1) * 100;
    
    return {
      initialSIP,
      stepUpPercentage,
      expectedReturn,
      tenure,
      totalInvestment: Math.round(totalInvestment),
      futureValue: Math.round(futureValue),
      totalGains: Math.round(totalGains),
      yearlyBreakdown,
      regularSIPValue: Math.round(regularSIPValue),
      regularSIPInvestment: Math.round(regularSIPInvestment),
      stepUpAdvantage: Math.round(stepUpAdvantage),
      averageSIP: Math.round(averageSIP),
      finalSIP: Math.round(currentSIP),
      xirr: xirr.toFixed(2),
      wealthMultiplier: (futureValue / totalInvestment).toFixed(2)
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (initialSIP > 0 && stepUpPercentage > 0 && expectedReturn > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateStepUpSIP());
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
  }, [initialSIP, stepUpPercentage, expectedReturn, tenure]);

  const pieData = result ? [
    { name: 'Total Investment', value: result.totalInvestment, color: '#3B82F6' },
    { name: 'Capital Gains', value: result.totalGains, color: '#10B981' }
  ] : [];

  const comparisonData = result ? [
    { name: 'Regular SIP', investment: result.regularSIPInvestment, value: result.regularSIPValue },
    { name: 'Step-up SIP', investment: result.totalInvestment, value: result.futureValue }
  ] : [];

  const growthData = result ? result.yearlyBreakdown.map(year => ({
    year: year.year,
    investment: year.cumulativeInvestment,
    value: year.portfolioValue,
    sipAmount: year.sipAmount
  })) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('step-up-sip');
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
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Step-up SIP Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate returns with annual SIP amount increases</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('step-up-sip');
              
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

      {/* Step-up SIP Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Step-up SIP <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Inflation-beating Strategy)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Increase your SIP amount annually to combat inflation and accelerate wealth creation.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Inflation Beat</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">10-15%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Wealth Boost</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">30-50%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Goal Achieve</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Faster</span>
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
                Step-up SIP Details
              </h2>
              
              <div className="space-y-6">
                {/* Initial SIP Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Initial Monthly SIP Amount
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickSIPs.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setInitialSIP(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          initialSIP === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={initialSIP}
                      onChange={(e) => setInitialSIP(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.initialSIP ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="5000"
                      min="500"
                      max="100000"
                    />
                  </div>
                  {errors.initialSIP && (
                    <p className="text-red-500 text-xs mt-1">{errors.initialSIP}</p>
                  )}
                </div>

                {/* Step-up Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Step-up Percentage
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickStepUps.map(percent => (
                      <button
                        key={percent}
                        onClick={() => setStepUpPercentage(percent)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          stepUpPercentage === percent
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        {percent}%
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={stepUpPercentage}
                      onChange={(e) => setStepUpPercentage(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.stepUpPercentage ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10"
                      min="1"
                      max="50"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.stepUpPercentage && (
                    <p className="text-red-500 text-xs mt-1">{errors.stepUpPercentage}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Recommended: 10-15% to beat inflation</p>
                </div>

                {/* Expected Annual Return */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Annual Return (%)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickReturns.map(returnRate => (
                      <button
                        key={returnRate}
                        onClick={() => setExpectedReturn(returnRate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          expectedReturn === returnRate
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
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
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
                      placeholder="15"
                      min="1"
                      max="40"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Step-up SIP Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Step-up SIP Benefits
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">📈</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Inflation Protection</div>
                    <div className="text-gray-600 dark:text-gray-300">Maintain purchasing power over time</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">💰</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Wealth Acceleration</div>
                    <div className="text-gray-600 dark:text-gray-300">Significantly higher corpus than regular SIP</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🎯</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Goal Achievement</div>
                    <div className="text-gray-600 dark:text-gray-300">Reach financial goals faster</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your step-up SIP projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Step-up SIP Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Step-up SIP Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Initial SIP</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.initialSIP.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Final SIP</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.finalSIP.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Total Investment</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.totalInvestment.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Total Gains</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.totalGains.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Final Portfolio Value</div>
                      <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ₹{result.futureValue.toLocaleString()}
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                        Wealth Multiplier: {result.wealthMultiplier}x
                      </div>
                    </div>
                  </div>

                  {/* Step-up Advantage */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Step-up Advantage</h3>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium">Extra Wealth vs Regular SIP</div>
                          <div className="text-xs text-green-700 dark:text-green-300">
                            Regular SIP would give: ₹{result.regularSIPValue.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          +₹{result.stepUpAdvantage.toLocaleString()}
                        </div>
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

                {/* Regular vs Step-up Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Regular SIP vs Step-up SIP</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={comparisonData}>
                        <XAxis dataKey="name" />
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
                        <Bar dataKey="investment" fill="#3B82F6" name="Investment" />
                        <Bar dataKey="value" fill="#10B981" name="Final Value" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Growth Over Time</h3>
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
                        <Line type="monotone" dataKey="investment" stroke="#3B82F6" name="Cumulative Investment" strokeWidth={2} />
                        <Line type="monotone" dataKey="value" stroke="#10B981" name="Portfolio Value" strokeWidth={2} />
                        <Line type="monotone" dataKey="sipAmount" stroke="#F59E0B" name="SIP Amount" strokeWidth={2} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Breakdown</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.slice(0, 5).map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            SIP: ₹{year.sipAmount.toLocaleString()}/month
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            Invested: ₹{year.cumulativeInvestment.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Value: ₹{year.portfolioValue.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                    {result.yearlyBreakdown.length > 5 && (
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        ... and {result.yearlyBreakdown.length - 5} more years
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ArrowTrendingUpIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Step-up SIP Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your investment details to see the power of step-up SIP
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

export default StepUpSIPPage;