import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CurrencyDollarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const LoanAffordabilityPage = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [existingEMIs, setExistingEMIs] = useState('');
  const [desiredEMI, setDesiredEMI] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickIncomes = [30000, 50000, 75000, 100000, 150000, 200000];
  const quickRates = [8, 9, 10, 11, 12, 13];
  const quickTenures = [5, 10, 15, 20, 25, 30];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyIncome || monthlyIncome < 15000) {
      newErrors.monthlyIncome = 'Minimum ₹15,000 required';
    } else if (monthlyIncome > 1000000) {
      newErrors.monthlyIncome = 'Maximum ₹10,00,000 allowed';
    }
    
    if (!interestRate || interestRate < 5) {
      newErrors.interestRate = 'Minimum 5% required';
    } else if (interestRate > 25) {
      newErrors.interestRate = 'Maximum 25% allowed';
    }
    
    if (!tenure || tenure < 1) {
      newErrors.tenure = 'Minimum 1 year required';
    } else if (tenure > 30) {
      newErrors.tenure = 'Maximum 30 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoanAffordability = () => {
    const totalExpenses = (monthlyExpenses || 0) + (existingEMIs || 0);
    const disposableIncome = monthlyIncome - totalExpenses;
    
    // Conservative affordability ratios
    const conservativeRatio = 0.3; // 30% of income
    const moderateRatio = 0.4; // 40% of income
    const aggressiveRatio = 0.5; // 50% of income
    
    const conservativeEMI = monthlyIncome * conservativeRatio;
    const moderateEMI = monthlyIncome * moderateRatio;
    const aggressiveEMI = monthlyIncome * aggressiveRatio;
    
    // Available EMI after existing obligations
    const availableConservativeEMI = Math.max(0, conservativeEMI - (existingEMIs || 0));
    const availableModerateEMI = Math.max(0, moderateEMI - (existingEMIs || 0));
    const availableAggressiveEMI = Math.max(0, aggressiveEMI - (existingEMIs || 0));
    
    // Loan amount calculation for different EMI levels
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = tenure * 12;
    
    const calculateLoanAmount = (emi) => {
      if (emi <= 0) return 0;
      return emi * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)));
    };
    
    const conservativeLoanAmount = calculateLoanAmount(availableConservativeEMI);
    const moderateLoanAmount = calculateLoanAmount(availableModerateEMI);
    const aggressiveLoanAmount = calculateLoanAmount(availableAggressiveEMI);
    
    // If user specified desired EMI, calculate that loan amount
    let desiredLoanAmount = 0;
    let affordabilityStatus = '';
    
    if (desiredEMI) {
      desiredLoanAmount = calculateLoanAmount(desiredEMI);
      const totalEMIBurden = (existingEMIs || 0) + desiredEMI;
      const emiToIncomeRatio = (totalEMIBurden / monthlyIncome) * 100;
      
      if (emiToIncomeRatio <= 30) {
        affordabilityStatus = 'Highly Affordable';
      } else if (emiToIncomeRatio <= 40) {
        affordabilityStatus = 'Moderately Affordable';
      } else if (emiToIncomeRatio <= 50) {
        affordabilityStatus = 'Risky but Manageable';
      } else {
        affordabilityStatus = 'Not Affordable';
      }
    }
    
    // Emergency fund requirement
    const recommendedEmergencyFund = monthlyExpenses * 6;
    const currentSavings = disposableIncome - (desiredEMI || availableModerateEMI);
    
    // Different tenure options for moderate EMI
    const tenureOptions = [5, 10, 15, 20, 25, 30].map(years => {
      const months = years * 12;
      const rate = monthlyRate;
      const loanAmount = availableModerateEMI * ((Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months)));
      const totalInterest = (availableModerateEMI * months) - loanAmount;
      
      return {
        tenure: years,
        loanAmount: Math.round(loanAmount),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(availableModerateEMI * months)
      };
    });
    
    // Income breakdown
    const incomeBreakdown = {
      grossIncome: monthlyIncome,
      expenses: monthlyExpenses || 0,
      existingEMIs: existingEMIs || 0,
      disposableIncome: Math.round(disposableIncome),
      availableForNewEMI: Math.round(availableModerateEMI),
      emergencyFundGap: Math.max(0, recommendedEmergencyFund - (currentSavings * 12))
    };
    
    // Recommendations based on affordability
    const recommendations = [];
    
    if (availableModerateEMI < 5000) {
      recommendations.push('Consider increasing income or reducing expenses');
      recommendations.push('Look for a co-applicant to improve affordability');
    }
    
    if (incomeBreakdown.emergencyFundGap > 0) {
      recommendations.push('Build emergency fund before taking new loan');
    }
    
    if (desiredEMI && desiredEMI > availableAggressiveEMI) {
      recommendations.push('Desired EMI is too high for your income level');
    }
    
    recommendations.push('Consider making a higher down payment to reduce loan amount');
    recommendations.push('Compare interest rates across multiple lenders');
    
    return {
      incomeBreakdown,
      conservativeEMI: Math.round(availableConservativeEMI),
      moderateEMI: Math.round(availableModerateEMI),
      aggressiveEMI: Math.round(availableAggressiveEMI),
      conservativeLoanAmount: Math.round(conservativeLoanAmount),
      moderateLoanAmount: Math.round(moderateLoanAmount),
      aggressiveLoanAmount: Math.round(aggressiveLoanAmount),
      desiredLoanAmount: Math.round(desiredLoanAmount),
      affordabilityStatus,
      tenureOptions: tenureOptions.filter(option => option.loanAmount > 0),
      recommendedEmergencyFund: Math.round(recommendedEmergencyFund),
      recommendations,
      interestRate,
      tenure
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyIncome > 0 && interestRate > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateLoanAffordability());
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
  }, [monthlyIncome, monthlyExpenses, existingEMIs, desiredEMI, interestRate, tenure]);

  const pieData = result ? [
    { name: 'Monthly Expenses', value: result.incomeBreakdown.expenses, color: '#EF4444' },
    { name: 'Existing EMIs', value: result.incomeBreakdown.existingEMIs, color: '#F59E0B' },
    { name: 'Available for New EMI', value: result.incomeBreakdown.availableForNewEMI, color: '#10B981' },
    { name: 'Remaining Income', value: result.incomeBreakdown.disposableIncome - result.incomeBreakdown.availableForNewEMI, color: '#6B7280' }
  ].filter(item => item.value > 0) : [];

  const affordabilityData = result ? [
    { name: 'Conservative (30%)', emi: result.conservativeEMI, loanAmount: result.conservativeLoanAmount },
    { name: 'Moderate (40%)', emi: result.moderateEMI, loanAmount: result.moderateLoanAmount },
    { name: 'Aggressive (50%)', emi: result.aggressiveEMI, loanAmount: result.aggressiveLoanAmount }
  ] : [];

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
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Loan Affordability Tool</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate how much EMI you can comfortably afford</p>
                </div>
              </div>
            
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('loan-affordability');
              const difficulty = getToolDifficulty('loan-affordability');
              
              return navigation ? (
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                    difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {navigation.previous && (
                      <Link
                        to={navigation.previous.path}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <ChevronLeftIcon className="h-4 w-4" />
                        {navigation.previous.name}
                      </Link>
                    )}
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {navigation.progress.current} of {navigation.progress.total}
                    </div>
                    
                    {navigation.next && (
                      <Link
                        to={navigation.next.path}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {navigation.next.name}
                        <ChevronRightIcon className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ) : null;
            })()}</div>
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
                Financial Details
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Gross Income
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickIncomes.map(income => (
                      <button
                        key={income}
                        onClick={() => setMonthlyIncome(income)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          monthlyIncome === income
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{income.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyIncome ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="75000"
                      min="15000"
                      max="1000000"
                    />
                  </div>
                  {errors.monthlyIncome && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome}</p>
                  )}
                </div>

                {/* Monthly Expenses */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Expenses (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlyExpenses}
                      onChange={(e) => setMonthlyExpenses(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="25000"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Rent, utilities, groceries, etc.</p>
                </div>

                {/* Existing EMIs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Existing EMIs (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={existingEMIs}
                      onChange={(e) => setExistingEMIs(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Total of all existing loan EMIs</p>
                </div>

                {/* Desired EMI */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Desired EMI (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={desiredEMI}
                      onChange={(e) => setDesiredEMI(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Check affordability of specific EMI amount</p>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Interest Rate (% per annum)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickRates.map(rate => (
                      <button
                        key={rate}
                        onClick={() => setInterestRate(rate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          interestRate === rate
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.interestRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10"
                      min="5"
                      max="25"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.interestRate && (
                    <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>
                  )}
                </div>

                {/* Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Tenure (Years)
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
                      placeholder="15"
                      min="1"
                      max="30"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Affordability Guidelines */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Affordability Guidelines
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">🟢</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Conservative (30%)</div>
                    <div className="text-gray-600 dark:text-gray-300">Safest option with room for emergencies</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 text-base">🟡</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Moderate (40%)</div>
                    <div className="text-gray-600 dark:text-gray-300">Balanced approach for most people</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 text-base">🔴</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Aggressive (50%)</div>
                    <div className="text-gray-600 dark:text-gray-300">Higher risk, less financial flexibility</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Analyzing your loan affordability</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Affordability Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Loan Affordability Analysis
                  </h2>
                  
                  {result.desiredEMI > 0 && (
                    <div className={`p-4 rounded-lg mb-6 ${
                      result.affordabilityStatus === 'Highly Affordable' ? 'bg-green-50 dark:bg-green-900/20' :
                      result.affordabilityStatus === 'Moderately Affordable' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                      result.affordabilityStatus === 'Risky but Manageable' ? 'bg-orange-50 dark:bg-orange-900/20' :
                      'bg-red-50 dark:bg-red-900/20'
                    }`}>
                      <div className="text-center">
                        <div className={`font-bold text-lg ${
                          result.affordabilityStatus === 'Highly Affordable' ? 'text-green-700 dark:text-green-300' :
                          result.affordabilityStatus === 'Moderately Affordable' ? 'text-yellow-700 dark:text-yellow-300' :
                          result.affordabilityStatus === 'Risky but Manageable' ? 'text-orange-700 dark:text-orange-300' :
                          'text-red-700 dark:text-red-300'
                        }`}>
                          {result.affordabilityStatus}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Desired EMI: ₹{result.desiredEMI?.toLocaleString()} → Loan Amount: ₹{result.desiredLoanAmount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium">Conservative</div>
                      <div className="text-lg font-bold text-green-700 dark:text-green-300">
                        ₹{result.conservativeEMI.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        ₹{result.conservativeLoanAmount.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 text-center">
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">Moderate</div>
                      <div className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.moderateEMI.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400">
                        ₹{result.moderateLoanAmount.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                      <div className="text-xs text-red-600 dark:text-red-400 font-medium">Aggressive</div>
                      <div className="text-lg font-bold text-red-700 dark:text-red-300">
                        ₹{result.aggressiveEMI.toLocaleString()}
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400">
                        ₹{result.aggressiveLoanAmount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Disposable Income:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.incomeBreakdown.disposableIncome.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Emergency Fund Needed:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.recommendedEmergencyFund.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Income Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Income Distribution</h3>
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

                {/* Affordability Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Affordability Levels</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={affordabilityData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="emi" fill="#3B82F6" name="Max EMI" />
                        <Bar dataKey="loanAmount" fill="#10B981" name="Loan Amount" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Tenure Options */}
                {result.tenureOptions.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Loan Options (Moderate EMI)</h3>
                    <div className="space-y-3">
                      {result.tenureOptions.slice(0, 6).map((option, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{option.tenure} Years</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Total Interest: ₹{option.totalInterest.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                              ₹{option.loanAmount.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Total: ₹{option.totalPayment.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-600">💡</span>
                    Recommendations
                  </h3>
                  <div className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 text-sm">•</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <CurrencyDollarIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Loan Affordability</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your financial details to see how much EMI you can afford
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

export default LoanAffordabilityPage;