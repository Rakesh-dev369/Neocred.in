import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ShieldCheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation } from '../../utils/toolsNavigation';

const PPFCalculatorPage = () => {
  const [yearlyInvestment, setYearlyInvestment] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [existingBalance, setExistingBalance] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [50000, 100000, 150000, 200000, 250000, 300000];
  const quickAges = [25, 30, 35, 40, 45, 50];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!yearlyInvestment || yearlyInvestment < 500) {
      newErrors.yearlyInvestment = 'Minimum ₹500 required';
    } else if (yearlyInvestment > 150000) {
      newErrors.yearlyInvestment = 'Maximum ₹1,50,000 allowed';
    }
    
    if (!currentAge || currentAge < 18) {
      newErrors.currentAge = 'Minimum age 18 required';
    } else if (currentAge > 65) {
      newErrors.currentAge = 'Maximum age 65 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePPF = () => {
    const interestRate = 7.1; // Current PPF rate 2025
    const tenure = 15; // PPF lock-in period
    const rate = interestRate / 100;
    
    // Calculate maturity value using compound interest
    const futureValue = yearlyInvestment * (((Math.pow(1 + rate, tenure) - 1) / rate));
    const totalInvestment = yearlyInvestment * tenure;
    const totalInterest = futureValue - totalInvestment;
    
    // Add existing balance with compound interest
    const existingMaturity = existingBalance ? existingBalance * Math.pow(1 + rate, tenure) : 0;
    const finalMaturity = futureValue + existingMaturity;
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let cumulativeInvestment = existingBalance || 0;
    let cumulativeValue = existingBalance || 0;
    
    for (let year = 1; year <= tenure; year++) {
      cumulativeInvestment += yearlyInvestment;
      cumulativeValue = (cumulativeValue + yearlyInvestment) * (1 + rate);
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        age: currentAge + year,
        investment: yearlyInvestment,
        cumulativeInvestment: Math.round(cumulativeInvestment),
        cumulativeValue: Math.round(cumulativeValue),
        interest: Math.round(cumulativeValue - cumulativeInvestment)
      });
    }
    
    // Tax benefits
    const taxSavings = Math.min(yearlyInvestment, 150000) * 0.3; // 30% tax saving
    const totalTaxSavings = taxSavings * tenure;
    
    // Extension options (after 15 years)
    const extensionYears = 5;
    const extendedValue = finalMaturity * Math.pow(1 + rate, extensionYears);
    
    // Monthly SIP equivalent
    const monthlySIP = yearlyInvestment / 12;
    
    return {
      yearlyInvestment,
      totalInvestment: Math.round(totalInvestment + (existingBalance || 0)),
      totalInterest: Math.round(totalInterest + (existingMaturity - (existingBalance || 0))),
      maturityValue: Math.round(finalMaturity),
      interestRate,
      tenure,
      yearlyBreakdown,
      taxSavings: Math.round(taxSavings),
      totalTaxSavings: Math.round(totalTaxSavings),
      extendedValue: Math.round(extendedValue),
      monthlySIP: Math.round(monthlySIP),
      maturityAge: currentAge + tenure,
      effectiveReturn: ((finalMaturity / (totalInvestment + (existingBalance || 0))) ** (1/tenure) - 1) * 100
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (yearlyInvestment > 0 && currentAge > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculatePPF());
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
  }, [yearlyInvestment, currentAge, existingBalance]);

  const pieData = result ? [
    { name: 'Total Investment', value: result.totalInvestment, color: '#3B82F6' },
    { name: 'Interest Earned', value: result.totalInterest, color: '#10B981' }
  ] : [];

  const growthData = result ? result.yearlyBreakdown.map(year => ({
    year: year.year,
    investment: year.cumulativeInvestment,
    value: year.cumulativeValue
  })) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('ppf-calculator');
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
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">PPF Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate Public Provident Fund returns with tax benefits</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('ppf-calculator');
              
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
          })()}
        </div>
      </div>

      {/* PPF Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Public Provident Fund <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(15-year lock-in)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tax-free investment with 15-year maturity, eligible for 80C deduction up to ₹1.5L annually.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🛡️</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Tax Free</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">100%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Interest Rate</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">7.1% p.a.</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🔒</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Lock-in</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">15 Years</span>
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
                PPF Investment Details
              </h2>
              
              <div className="space-y-6">
                {/* Yearly Investment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Investment Amount
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setYearlyInvestment(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          yearlyInvestment === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(amount/1000).toFixed(0)}K
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={yearlyInvestment}
                      onChange={(e) => setYearlyInvestment(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.yearlyInvestment ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="150000"
                      min="500"
                      max="150000"
                    />
                  </div>
                  {errors.yearlyInvestment && (
                    <p className="text-red-500 text-xs mt-1">{errors.yearlyInvestment}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Maximum ₹1,50,000 per year (80C limit)</p>
                </div>

                {/* Current Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Current Age
                  </label>
                  
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    {quickAges.map(age => (
                      <button
                        key={age}
                        onClick={() => setCurrentAge(age)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          currentAge === age
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.currentAge ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="30"
                      min="18"
                      max="65"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.currentAge && (
                    <p className="text-red-500 text-xs mt-1">{errors.currentAge}</p>
                  )}
                </div>

                {/* Existing PPF Balance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Existing PPF Balance (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={existingBalance}
                      onChange={(e) => setExistingBalance(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Current balance in your PPF account</p>
                </div>
              </div>
            </div>

            {/* PPF Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                PPF Benefits
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">🎯</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Triple Tax Benefit</div>
                    <div className="text-gray-600 dark:text-gray-300">Investment, interest, and maturity all tax-free</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">🔒</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Government Backing</div>
                    <div className="text-gray-600 dark:text-gray-300">100% safe with sovereign guarantee</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">📈</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Loan Facility</div>
                    <div className="text-gray-600 dark:text-gray-300">Loan available from 3rd year onwards</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your PPF projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* PPF Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    PPF Maturity Projection
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Annual Investment</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.yearlyInvestment.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        ₹{result.monthlySIP.toLocaleString()} per month
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Interest Rate</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.interestRate}% p.a.
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Investment</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        ₹{result.totalInvestment.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Interest</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalInterest.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Maturity Value (Age {result.maturityAge})</div>
                      <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ₹{result.maturityValue.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Tax Benefits */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Benefits</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                        <div className="text-xs text-green-600 dark:text-green-400">Annual Tax Savings</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-300">
                          ₹{result.taxSavings.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                        <div className="text-xs text-green-600 dark:text-green-400">Total Tax Savings</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-300">
                          ₹{result.totalTaxSavings.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Extension Option */}
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-1">Extension Option</div>
                    <div className="text-xs text-yellow-700 dark:text-yellow-300">
                      If extended for 5 more years: ₹{result.extendedValue.toLocaleString()}
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

                {/* Growth Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">PPF Growth Over Time</h3>
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
                        <Line type="monotone" dataKey="investment" stroke="#3B82F6" name="Total Investment" strokeWidth={2} />
                        <Line type="monotone" dataKey="value" stroke="#10B981" name="PPF Value" strokeWidth={2} />
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
                          <div className="text-sm text-gray-600 dark:text-gray-400">Age: {year.age}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            Investment: ₹{year.cumulativeInvestment.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Value: ₹{year.cumulativeValue.toLocaleString()}
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
                  <ShieldCheckIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate PPF Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your investment details to project PPF maturity value
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

export default PPFCalculatorPage;