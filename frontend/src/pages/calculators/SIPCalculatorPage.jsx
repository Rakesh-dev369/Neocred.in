import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { AnimatedChart, ProgressBar, CountingNumber, StatCard, ComparisonTable, ShareButton, CopyButton } from '../../components/ui';
import { ShareIcon, LinkIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

const SIPCalculatorPage = () => {
  useScrollToTop();
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);

  const quickAmounts = [1000, 2500, 5000, 10000, 15000, 25000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyInvestment || monthlyInvestment < 500) {
      newErrors.monthlyInvestment = 'Minimum ₹500 required';
    } else if (monthlyInvestment > 100000) {
      newErrors.monthlyInvestment = 'Maximum ₹1,00,000 allowed';
    }
    
    if (!annualRate || annualRate < 1) {
      newErrors.annualRate = 'Minimum 1% required';
    } else if (annualRate > 30) {
      newErrors.annualRate = 'Maximum 30% allowed';
    }
    
    if (!duration || duration < 1) {
      newErrors.duration = 'Minimum 1 year required';
    } else if (duration > 40) {
      newErrors.duration = 'Maximum 40 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateSIP = () => {
    const months = duration * 12;
    const monthlyRate = annualRate / 12 / 100;
    const yearlyData = [];

    let maturityAmount = 0;
    for (let i = 0; i < months; i++) {
      maturityAmount += monthlyInvestment * Math.pow(1 + monthlyRate, months - i);
    }

    // Calculate year-wise breakdown
    for (let year = 1; year <= duration; year++) {
      const monthsCompleted = year * 12;
      let yearEndValue = 0;
      
      for (let i = 0; i < monthsCompleted; i++) {
        yearEndValue += monthlyInvestment * Math.pow(1 + monthlyRate, monthsCompleted - i);
      }
      
      const invested = monthlyInvestment * monthsCompleted;
      const returns = yearEndValue - invested;
      
      yearlyData.push({
        year,
        invested: Math.round(invested),
        returns: Math.round(returns),
        total: Math.round(yearEndValue)
      });
    }

    const totalInvested = monthlyInvestment * months;
    const estimatedReturns = maturityAmount - totalInvested;

    setYearlyBreakdown(yearlyData);
    
    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      maturityAmount: Math.round(maturityAmount),
      monthlyInvestment,
      duration,
      annualRate
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyInvestment > 0 && annualRate > 0 && duration > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateSIP());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
          setYearlyBreakdown([]);
        }
      } else {
        setResult(null);
        setYearlyBreakdown([]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [monthlyInvestment, annualRate, duration]);

  const pieData = result ? [
    { name: 'Total Invested', value: result.totalInvested, color: '#3B82F6' },
    { name: 'Estimated Returns', value: result.estimatedReturns, color: '#10B981' }
  ] : [];

  const barData = result ? [
    { name: 'Total Invested', amount: result.totalInvested, fill: '#3B82F6' },
    { name: 'Estimated Returns', amount: result.estimatedReturns, fill: '#10B981' },
    { name: 'Maturity Amount', amount: result.maturityAmount, fill: '#F59E0B' }
  ] : [];

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
                  <CalculatorIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SIP Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your SIP returns and plan investments</p>
                </div>
              </div>
            </div>
            
            {/* Navigation & Actions */}
            {(() => {
              const navigation = getToolNavigation('sip-calculator');
              const difficulty = getToolDifficulty('sip-calculator');
              
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
                  
                  {/* Share & Copy Actions */}
                  <div className="flex items-center gap-2">
                    <ShareButton
                      onShare={() => navigator.share({ title: 'SIP Calculator', url: window.location.href })}
                      icon={<ShareIcon className="w-4 h-4" />}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50"
                    />
                    <CopyButton
                      textToCopy={window.location.href}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </CopyButton>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      </div>

      {/* What is SIP Section - Compact */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is SIP? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Systematic Investment Plan)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Invest a fixed amount regularly in mutual funds. Build wealth through compounding & rupee cost averaging.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Compounding</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Cost Averaging</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Disciplined</span>
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
                SIP Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Investment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Investment Amount
                  </label>
                  
                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setMonthlyInvestment(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          monthlyInvestment === amount
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
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyInvestment ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="5000"
                      min="500"
                      max="100000"
                    />
                  </div>
                  {errors.monthlyInvestment && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyInvestment}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹500</span>
                    <span>Max: ₹1,00,000</span>
                  </div>
                </div>

                {/* Annual Return Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Annual Return Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.annualRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="12"
                      min="1"
                      max="30"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.annualRate && (
                    <p className="text-red-500 text-xs mt-1">{errors.annualRate}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: 1%</span>
                    <span>Max: 30%</span>
                  </div>
                </div>

                {/* Investment Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Investment Duration
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.duration ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10"
                      min="1"
                      max="40"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.duration && (
                    <p className="text-red-500 text-xs mt-1">{errors.duration}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: 1 Year</span>
                    <span>Max: 40 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-amber-600">💡</span>
                Quick Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Start with ₹500</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Stay consistent</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Long-term focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Auto-debit setup</span>
                </div>
              </div>
            </div>

            {/* Year-wise Breakdown Table */}
            {yearlyBreakdown.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Investment Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-gray-600 dark:text-gray-300">Year</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Invested</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Returns</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Total Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlyBreakdown.map((row) => (
                        <tr key={row.year} className="border-b border-gray-100 dark:border-gray-700/50">
                          <td className="py-2 text-gray-900 dark:text-white font-medium">{row.year}</td>
                          <td className="py-2 text-right text-blue-600 dark:text-blue-400">₹{row.invested.toLocaleString()}</td>
                          <td className="py-2 text-right text-green-600 dark:text-green-400">₹{row.returns.toLocaleString()}</td>
                          <td className="py-2 text-right text-gray-900 dark:text-white font-semibold">₹{row.total.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculating...</h3>
                  <p className="text-gray-600 dark:text-gray-400">Processing your SIP investment details</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Results Summary with StatCards */}
                <div className="grid grid-cols-1 gap-3">
                  <StatCard
                    title="Total Invested"
                    value={result.totalInvested}
                    prefix="₹"
                    decimals={0}
                    icon={<CalculatorIcon className="w-4 h-4" />}
                    color="blue"
                    size="sm"
                    animated={true}
                  />
                  
                  <StatCard
                    title="Estimated Returns"
                    value={result.estimatedReturns}
                    prefix="₹"
                    decimals={0}
                    trend={{ 
                      value: ((result.estimatedReturns / result.totalInvested) * 100).toFixed(1), 
                      direction: 'up' 
                    }}
                    icon={<ChartBarIcon className="w-4 h-4" />}
                    color="green"
                    size="sm"
                    animated={true}
                  />
                  
                  <StatCard
                    title="Maturity Amount"
                    value={result.maturityAmount}
                    prefix="₹"
                    decimals={0}
                    icon={<span className="text-sm">🎯</span>}
                    color="purple"
                    size="sm"
                    animated={true}
                  />
                </div>
                
                {/* Progress Bar showing investment completion */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Investment Progress</h3>
                  <ProgressBar 
                    value={100} 
                    label={`${duration} Year Journey`}
                    color="blue"
                    size="sm"
                    animated={true}
                    showPercentage={false}
                  />
                  <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                    Monthly SIP of <CountingNumber value={monthlyInvestment} prefix="₹" className="font-semibold text-blue-600" /> for {duration} years
                  </div>
                </div>

                {/* Animated Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Investment Breakdown</h3>
                  <div className="flex flex-col items-center">
                    <AnimatedChart 
                      data={pieData.map(item => ({ label: item.name, value: item.value }))}
                      type="pie"
                      width={250}
                      height={160}
                      animate={true}
                    />
                    {/* Legend */}
                    <div className="mt-3 space-y-1.5 w-full">
                      {pieData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-2.5 h-2.5 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">{item.name}</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white">
                            ₹{item.value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Amount Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Amount Comparison</h3>
                  <div className="space-y-6">
                    {/* Visual Bars */}
                    <div className="space-y-3">
                      {barData.map((item, index) => (
                        <div key={index} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded" 
                                style={{ backgroundColor: item.fill }}
                              ></div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                            </div>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                              ₹{item.amount.toLocaleString()}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                backgroundColor: item.fill,
                                width: `${(item.amount / result.maturityAmount) * 100}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Comparison Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {((result.estimatedReturns / result.totalInvested) * 100).toFixed(1)}%
                        </div>
                        <div className="text-xs text-blue-700 dark:text-blue-300">Total Growth</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {(result.estimatedReturns / result.totalInvested * 100 / duration).toFixed(1)}%
                        </div>
                        <div className="text-xs text-green-700 dark:text-green-300">Avg Annual Growth</div>
                      </div>
                    </div>
                    
                    {/* Key Insights */}
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                      <div className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                        <div className="flex items-center gap-2">
                          <span>💰</span>
                          <span>Every ₹{monthlyInvestment.toLocaleString()} invested monthly becomes ₹{Math.round(result.maturityAmount / (duration * 12)).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📈</span>
                          <span>Your ₹{result.totalInvested.toLocaleString()} grows to ₹{result.maturityAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>⏰</span>
                          <span>Wealth multiplier: {(result.maturityAmount / result.totalInvested).toFixed(1)}x in {duration} years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <CalculatorIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Enter Investment Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill in the calculator fields to see your SIP investment results and charts
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

export default SIPCalculatorPage;