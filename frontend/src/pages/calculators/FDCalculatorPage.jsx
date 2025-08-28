import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CurrencyDollarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const FDCalculatorPage = () => {
  useScrollToTop();
  const [depositAmount, setDepositAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureType, setTenureType] = useState('years');
  const [compoundingFrequency, setCompoundingFrequency] = useState('quarterly');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);

  const quickAmounts = [50000, 100000, 250000, 500000, 1000000, 2500000];
  const bankRates = [
    { bank: 'SBI', rate: 6.8, tenure: '1-2 years' },
    { bank: 'HDFC', rate: 7.0, tenure: '1-2 years' },
    { bank: 'ICICI', rate: 7.1, tenure: '1-2 years' },
    { bank: 'Axis', rate: 7.25, tenure: '1-2 years' },
    { bank: 'Kotak', rate: 7.0, tenure: '1-2 years' },
    { bank: 'PNB', rate: 6.7, tenure: '1-2 years' }
  ];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!depositAmount || depositAmount < 1000) {
      newErrors.depositAmount = 'Minimum ₹1,000 required';
    } else if (depositAmount > 10000000) {
      newErrors.depositAmount = 'Maximum ₹1,00,00,000 allowed';
    }
    
    if (!interestRate || interestRate < 1) {
      newErrors.interestRate = 'Minimum 1% required';
    } else if (interestRate > 15) {
      newErrors.interestRate = 'Maximum 15% allowed';
    }
    
    const minTenure = tenureType === 'years' ? 1 : 6;
    const maxTenure = tenureType === 'years' ? 10 : 120;
    
    if (!tenure || tenure < minTenure) {
      newErrors.tenure = `Minimum ${minTenure} ${tenureType} required`;
    } else if (tenure > maxTenure) {
      newErrors.tenure = `Maximum ${maxTenure} ${tenureType} allowed`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateFD = () => {
    const principal = depositAmount;
    const rate = interestRate / 100;
    const timeInYears = tenureType === 'years' ? tenure : tenure / 12;
    
    // Compounding frequency
    const compoundingMap = {
      'monthly': 12,
      'quarterly': 4,
      'half-yearly': 2,
      'yearly': 1
    };
    const n = compoundingMap[compoundingFrequency];
    
    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    const maturityAmount = principal * Math.pow(1 + rate / n, n * timeInYears);
    const interestEarned = maturityAmount - principal;
    
    // Calculate year-wise breakdown
    const yearlyData = [];
    const totalYears = Math.ceil(timeInYears);
    
    for (let year = 1; year <= totalYears; year++) {
      const yearTime = Math.min(year, timeInYears);
      const yearAmount = principal * Math.pow(1 + rate / n, n * yearTime);
      const yearInterest = yearAmount - principal;
      
      yearlyData.push({
        year,
        principal: Math.round(principal),
        interest: Math.round(yearInterest),
        total: Math.round(yearAmount),
        rate: interestRate
      });
    }

    setYearlyBreakdown(yearlyData);
    
    return {
      maturityAmount: Math.round(maturityAmount),
      interestEarned: Math.round(interestEarned),
      depositAmount: principal,
      interestRate,
      tenure: timeInYears,
      compoundingFrequency
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (depositAmount > 0 && interestRate > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateFD());
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
  }, [depositAmount, interestRate, tenure, tenureType, compoundingFrequency]);

  const pieData = result ? [
    { name: 'Principal Amount', value: result.depositAmount, color: '#3B82F6' },
    { name: 'Interest Earned', value: result.interestEarned, color: '#10B981' }
  ] : [];

  const barData = result ? [
    { name: 'Deposit Amount', amount: result.depositAmount, fill: '#3B82F6' },
    { name: 'Interest Earned', amount: result.interestEarned, fill: '#10B981' },
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
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FD Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate Fixed Deposit returns and maturity amount</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('fd-calculator');
              const difficulty = getToolDifficulty('fd-calculator');
              
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

      {/* What is FD Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Fixed Deposit? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(FD)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Safe investment option with guaranteed returns. Lock your money for fixed tenure at predetermined interest rate.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🔒</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Safe & Secure</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Guaranteed Returns</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">⏰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Fixed Tenure</span>
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
                FD Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Deposit Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Deposit Amount
                  </label>
                  
                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setDepositAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          depositAmount === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{amount >= 100000 ? `${(amount/100000).toFixed(0)}L` : `${(amount/1000).toFixed(0)}K`}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.depositAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="100000"
                      min="1000"
                      max="10000000"
                    />
                  </div>
                  {errors.depositAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.depositAmount}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹1,000</span>
                    <span>Max: ₹1,00,00,000</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Interest Rate (Annual)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.interestRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="6.8"
                      min="1"
                      max="15"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.interestRate && (
                    <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: 1%</span>
                    <span>Max: 15%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tenure
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value ? Number(e.target.value) : '')}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                          errors.tenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder={tenureType === 'years' ? '2' : '24'}
                        min={tenureType === 'years' ? '1' : '6'}
                        max={tenureType === 'years' ? '10' : '120'}
                      />
                    </div>
                    <select
                      value={tenureType}
                      onChange={(e) => setTenureType(e.target.value)}
                      className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>

                {/* Compounding Frequency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Compounding Frequency
                  </label>
                  <select
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value)}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="half-yearly">Half-Yearly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bank Rates */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">🏦</span>
                Current FD Rates (2025)
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {bankRates.map((bank, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="font-medium text-gray-900 dark:text-white">{bank.bank}</span>
                    <div className="text-right">
                      <div className="text-green-600 dark:text-green-400 font-bold">{bank.rate}%</div>
                      <div className="text-xs text-gray-500">{bank.tenure}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year-wise Breakdown Table */}
            {yearlyBreakdown.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-gray-600 dark:text-gray-300">Year</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Principal</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Interest</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Total Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlyBreakdown.map((row) => (
                        <tr key={row.year} className="border-b border-gray-100 dark:border-gray-700/50">
                          <td className="py-2 text-gray-900 dark:text-white font-medium">{row.year}</td>
                          <td className="py-2 text-right text-blue-600 dark:text-blue-400">₹{row.principal.toLocaleString()}</td>
                          <td className="py-2 text-right text-green-600 dark:text-green-400">₹{row.interest.toLocaleString()}</td>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your FD details</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Results Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    FD Calculation Results
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Maturity Amount</div>
                      <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.maturityAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                        After {result.tenure} years
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Principal Amount</div>
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.depositAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Initial deposit
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Interest Earned</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.interestEarned.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {((result.interestEarned / result.depositAmount) * 100).toFixed(1)}% total return
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Amount Breakdown</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={90}
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

                {/* Bar Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Amount Comparison</h3>
                  <div className="w-full overflow-x-auto">
                    <ResponsiveContainer width="100%" height={250} minWidth={300}>
                      <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis 
                          dataKey="name" 
                          tick={{ fill: 'currentColor', fontSize: 10 }}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <YAxis 
                          tick={{ fill: 'currentColor', fontSize: 10 }}
                          tickFormatter={(val) => `₹${(val/100000).toFixed(1)}L`}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <Tooltip 
                          formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="amount" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <CurrencyDollarIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Enter FD Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill in the deposit details to calculate your FD maturity amount
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

export default FDCalculatorPage;