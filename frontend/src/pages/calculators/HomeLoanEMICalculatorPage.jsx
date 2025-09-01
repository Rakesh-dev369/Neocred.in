import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, HomeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation } from '../../utils/toolsNavigation';

const HomeLoanEMICalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [1000000, 2500000, 5000000, 7500000, 10000000, 15000000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!loanAmount || loanAmount < 100000) {
      newErrors.loanAmount = 'Minimum ₹1,00,000 required';
    } else if (loanAmount > 50000000) {
      newErrors.loanAmount = 'Maximum ₹5,00,00,000 allowed';
    }
    
    if (!interestRate || interestRate < 1) {
      newErrors.interestRate = 'Minimum 1% required';
    } else if (interestRate > 20) {
      newErrors.interestRate = 'Maximum 20% allowed';
    }
    
    if (!loanTenure || loanTenure < 1) {
      newErrors.loanTenure = 'Minimum 1 year required';
    } else if (loanTenure > 30) {
      newErrors.loanTenure = 'Maximum 30 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;
    
    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;
    
    // Calculate year-wise breakdown
    const yearlyData = [];
    let remainingPrincipal = principal;
    
    for (let year = 1; year <= loanTenure; year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      
      for (let month = 1; month <= 12; month++) {
        const monthlyInterest = remainingPrincipal * monthlyRate;
        const monthlyPrincipal = emi - monthlyInterest;
        
        yearlyInterest += monthlyInterest;
        yearlyPrincipal += monthlyPrincipal;
        remainingPrincipal -= monthlyPrincipal;
        
        if (remainingPrincipal <= 0) break;
      }
      
      yearlyData.push({
        year,
        emi: Math.round(emi * 12),
        interest: Math.round(yearlyInterest),
        principal: Math.round(yearlyPrincipal),
        balance: Math.round(Math.max(0, remainingPrincipal))
      });
      
      if (remainingPrincipal <= 0) break;
    }

    setYearlyBreakdown(yearlyData);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      loanAmount: principal,
      interestRate,
      loanTenure
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loanAmount > 0 && interestRate > 0 && loanTenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateEMI());
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
  }, [loanAmount, interestRate, loanTenure]);

  const pieData = result ? [
    { name: 'Principal Amount', value: result.loanAmount, color: '#3B82F6' },
    { name: 'Total Interest', value: result.totalInterest, color: '#EF4444' }
  ] : [];

  const barData = result ? [
    { name: 'Loan Amount', amount: result.loanAmount, fill: '#3B82F6' },
    { name: 'Total Interest', amount: result.totalInterest, fill: '#EF4444' },
    { name: 'Total Payment', amount: result.totalAmount, fill: '#F59E0B' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('home-loan-emi');
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
                  <HomeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Home Loan EMI Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your home loan EMI and plan your budget</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('home-loan-emi');
              
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

      {/* What is Home Loan EMI Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Home Loan EMI? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Equated Monthly Installment)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Fixed monthly payment towards your home loan including principal and interest components.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🏠</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Dream Home</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Fixed EMI</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📊</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Budget Planning</span>
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
                Home Loan EMI Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Amount
                  </label>
                  
                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setLoanAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          loanAmount === amount
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
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.loanAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="2500000"
                      min="100000"
                      max="50000000"
                    />
                  </div>
                  {errors.loanAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹1,00,000</span>
                    <span>Max: ₹5,00,00,000</span>
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
                      placeholder="8.5"
                      min="1"
                      max="20"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.interestRate && (
                    <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: 1%</span>
                    <span>Max: 20%</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Tenure
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.loanTenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="20"
                      min="1"
                      max="30"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.loanTenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.loanTenure}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: 1 Year</span>
                    <span>Max: 30 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-amber-600">💡</span>
                Home Loan Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Keep EMI under 40% of income</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Compare interest rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Consider prepayment options</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Check tax benefits</span>
                </div>
              </div>
            </div>

            {/* Year-wise Breakdown Table */}
            {yearlyBreakdown.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Payment Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-gray-600 dark:text-gray-300">Year</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">EMI Paid</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Interest</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Principal</th>
                        <th className="text-right py-2 text-gray-600 dark:text-gray-300">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlyBreakdown.slice(0, 10).map((row) => (
                        <tr key={row.year} className="border-b border-gray-100 dark:border-gray-700/50">
                          <td className="py-2 text-gray-900 dark:text-white font-medium">{row.year}</td>
                          <td className="py-2 text-right text-blue-600 dark:text-blue-400">₹{row.emi.toLocaleString()}</td>
                          <td className="py-2 text-right text-red-600 dark:text-red-400">₹{row.interest.toLocaleString()}</td>
                          <td className="py-2 text-right text-green-600 dark:text-green-400">₹{row.principal.toLocaleString()}</td>
                          <td className="py-2 text-right text-gray-900 dark:text-white font-semibold">₹{row.balance.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {yearlyBreakdown.length > 10 && (
                    <p className="text-xs text-gray-500 mt-2 text-center">Showing first 10 years</p>
                  )}
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your home loan details</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Results Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    EMI Calculation Results
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly EMI</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.emi.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        For {loanTenure} years
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Loan Amount</div>
                      <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                        ₹{result.loanAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Principal amount
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Total Interest</div>
                      <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.totalInterest.toLocaleString()}
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                        Over {loanTenure} years
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Total Payment</div>
                      <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.totalAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                        Principal + Interest
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Breakdown</h3>
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
                  <HomeIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Enter Loan Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill in the loan details to calculate your EMI and payment breakdown
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

export default HomeLoanEMICalculatorPage;