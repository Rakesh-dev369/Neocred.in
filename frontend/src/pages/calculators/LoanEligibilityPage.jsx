import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const LoanEligibilityPage = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [existingEMIs, setExistingEMIs] = useState('');
  const [age, setAge] = useState('');
  const [employmentType, setEmploymentType] = useState('salaried');
  const [creditScore, setCreditScore] = useState('');
  const [loanType, setLoanType] = useState('home');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickIncomes = [30000, 50000, 75000, 100000, 150000, 200000];
  const quickAges = [25, 30, 35, 40, 45, 50];

  const loanTypes = {
    home: { name: 'Home Loan', maxTenure: 30, maxLTV: 80, minCreditScore: 650, interestRate: 8.5 },
    personal: { name: 'Personal Loan', maxTenure: 5, maxLTV: 0, minCreditScore: 700, interestRate: 12 },
    car: { name: 'Car Loan', maxTenure: 7, maxLTV: 85, minCreditScore: 650, interestRate: 9.5 },
    business: { name: 'Business Loan', maxTenure: 10, maxLTV: 70, minCreditScore: 700, interestRate: 11 }
  };

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyIncome || monthlyIncome < 15000) {
      newErrors.monthlyIncome = 'Minimum ₹15,000 required';
    } else if (monthlyIncome > 1000000) {
      newErrors.monthlyIncome = 'Maximum ₹10,00,000 allowed';
    }
    
    if (!age || age < 21) {
      newErrors.age = 'Minimum age 21 required';
    } else if (age > 65) {
      newErrors.age = 'Maximum age 65 allowed';
    }
    
    if (!creditScore || creditScore < 300) {
      newErrors.creditScore = 'Minimum credit score 300';
    } else if (creditScore > 900) {
      newErrors.creditScore = 'Maximum credit score 900';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoanEligibility = () => {
    const selectedLoan = loanTypes[loanType];
    const netIncome = monthlyIncome - (existingEMIs || 0);
    
    // FOIR (Fixed Obligation to Income Ratio) - typically 40-50%
    const maxFOIR = employmentType === 'salaried' ? 0.5 : 0.4;
    const availableEMI = netIncome * maxFOIR;
    
    // Age factor for tenure calculation
    const maxAge = employmentType === 'salaried' ? 60 : 65;
    const remainingWorkingYears = maxAge - age;
    const eligibleTenure = Math.min(selectedLoan.maxTenure, remainingWorkingYears);
    
    // Loan amount calculation using EMI formula
    const monthlyRate = selectedLoan.interestRate / 100 / 12;
    const totalMonths = eligibleTenure * 12;
    const eligibleLoanAmount = availableEMI * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)));
    
    // Credit score impact
    let creditScoreMultiplier = 1;
    let creditScoreStatus = '';
    
    if (creditScore >= 750) {
      creditScoreMultiplier = 1.2;
      creditScoreStatus = 'Excellent';
    } else if (creditScore >= 700) {
      creditScoreMultiplier = 1.1;
      creditScoreStatus = 'Good';
    } else if (creditScore >= 650) {
      creditScoreMultiplier = 1;
      creditScoreStatus = 'Fair';
    } else {
      creditScoreMultiplier = 0.7;
      creditScoreStatus = 'Poor';
    }
    
    const finalEligibleAmount = eligibleLoanAmount * creditScoreMultiplier;
    
    // Employment type factor
    const employmentMultiplier = employmentType === 'salaried' ? 1 : 0.85;
    const adjustedEligibleAmount = finalEligibleAmount * employmentMultiplier;
    
    // Eligibility status
    const isEligible = creditScore >= selectedLoan.minCreditScore && availableEMI > 0 && adjustedEligibleAmount > 100000;
    
    // Different loan amounts based on tenure
    const tenureOptions = [5, 10, 15, 20, 25, 30].filter(t => t <= eligibleTenure).map(years => {
      const months = years * 12;
      const loanAmount = availableEMI * ((Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, months)));
      return {
        tenure: years,
        loanAmount: Math.round(loanAmount * creditScoreMultiplier * employmentMultiplier),
        emi: Math.round(availableEMI)
      };
    });
    
    // Income breakdown
    const incomeBreakdown = {
      grossIncome: monthlyIncome,
      existingEMIs: existingEMIs || 0,
      netIncome,
      availableForEMI: Math.round(availableEMI),
      foirPercentage: (availableEMI / monthlyIncome * 100).toFixed(1)
    };
    
    // Documents required
    const documentsRequired = [
      'Identity Proof (Aadhaar/PAN)',
      'Address Proof',
      'Income Proof (Salary Slips/ITR)',
      'Bank Statements (6 months)',
      employmentType === 'salaried' ? 'Employment Certificate' : 'Business Registration',
      loanType === 'home' ? 'Property Documents' : null
    ].filter(Boolean);
    
    return {
      isEligible,
      eligibleAmount: Math.round(adjustedEligibleAmount),
      maxEMI: Math.round(availableEMI),
      eligibleTenure,
      creditScoreStatus,
      creditScoreMultiplier,
      loanType: selectedLoan.name,
      interestRate: selectedLoan.interestRate,
      tenureOptions,
      incomeBreakdown,
      documentsRequired,
      recommendations: getRecommendations(creditScore, availableEMI, adjustedEligibleAmount)
    };
  };

  const getRecommendations = (score, emi, amount) => {
    const recommendations = [];
    
    if (score < 650) {
      recommendations.push('Improve credit score by paying bills on time');
      recommendations.push('Reduce credit utilization below 30%');
    }
    
    if (emi < 10000) {
      recommendations.push('Consider increasing income or reducing existing EMIs');
    }
    
    if (amount < 500000) {
      recommendations.push('Consider a co-applicant to increase eligibility');
    }
    
    recommendations.push('Compare interest rates across multiple lenders');
    recommendations.push('Consider making a higher down payment');
    
    return recommendations;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyIncome > 0 && age > 0 && creditScore > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateLoanEligibility());
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
  }, [monthlyIncome, existingEMIs, age, employmentType, creditScore, loanType]);

  const pieData = result ? [
    { name: 'Available for EMI', value: result.incomeBreakdown.availableForEMI, color: '#10B981' },
    { name: 'Existing EMIs', value: result.incomeBreakdown.existingEMIs, color: '#EF4444' },
    { name: 'Other Expenses', value: result.incomeBreakdown.grossIncome - result.incomeBreakdown.availableForEMI - result.incomeBreakdown.existingEMIs, color: '#6B7280' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('loan-eligibility');
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
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Loan Eligibility Checker</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Check your loan eligibility based on income and credit profile</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('loan-eligibility');
              
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
                Personal Details
              </h2>
              
              <div className="space-y-6">
                {/* Loan Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Loan Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(loanTypes).map(([key, loan]) => (
                      <button
                        key={key}
                        onClick={() => setLoanType(key)}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          loanType === key
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-medium">{loan.name}</div>
                        <div className="text-xs opacity-75">Rate: {loan.interestRate}%</div>
                      </button>
                    ))}
                  </div>
                </div>

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
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
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
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
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

                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Age
                  </label>
                  
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    {quickAges.map(ageVal => (
                      <button
                        key={ageVal}
                        onClick={() => setAge(ageVal)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          age === ageVal
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                        }`}
                      >
                        {ageVal}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.age ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="30"
                      min="21"
                      max="65"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.age && (
                    <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                  )}
                </div>

                {/* Employment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Employment Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setEmploymentType('salaried')}
                      className={`p-3 rounded-lg border transition-colors ${
                        employmentType === 'salaried'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Salaried</div>
                      <div className="text-xs opacity-75">Fixed monthly salary</div>
                    </button>
                    <button
                      onClick={() => setEmploymentType('self-employed')}
                      className={`p-3 rounded-lg border transition-colors ${
                        employmentType === 'self-employed'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Self-Employed</div>
                      <div className="text-xs opacity-75">Business/Professional</div>
                    </button>
                  </div>
                </div>

                {/* Credit Score */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Credit Score (CIBIL)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={creditScore}
                      onChange={(e) => setCreditScore(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.creditScore ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="750"
                      min="300"
                      max="900"
                    />
                  </div>
                  {errors.creditScore && (
                    <p className="text-red-500 text-xs mt-1">{errors.creditScore}</p>
                  )}
                  <div className="mt-2 text-xs">
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>Poor (300-549)</span>
                      <span>Fair (550-649)</span>
                      <span>Good (650-749)</span>
                      <span>Excellent (750+)</span>
                    </div>
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
                  <p className="text-gray-600 dark:text-gray-400">Checking your loan eligibility</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Eligibility Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    {result.loanType} Eligibility
                  </h2>
                  
                  <div className={`p-4 rounded-lg mb-6 ${result.isEligible ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${result.isEligible ? 'bg-green-500' : 'bg-red-500'}`}>
                        {result.isEligible ? '✓' : '✗'}
                      </div>
                      <div>
                        <div className={`font-bold text-lg ${result.isEligible ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                          {result.isEligible ? 'Eligible' : 'Not Eligible'}
                        </div>
                        <div className={`text-sm ${result.isEligible ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          Credit Score: {result.creditScoreStatus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {result.isEligible && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Eligible Loan Amount</div>
                        <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                          ₹{result.eligibleAmount.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">Max EMI</div>
                        <div className="text-xl font-bold text-green-700 dark:text-green-300">
                          ₹{result.maxEMI.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Max Tenure</div>
                        <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                          {result.eligibleTenure} Years
                        </div>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                        <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Interest Rate</div>
                        <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                          {result.interestRate}% p.a.
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">FOIR</div>
                        <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                          {result.incomeBreakdown.foirPercentage}%
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Income Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Income Analysis</h3>
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

                {/* Tenure Options */}
                {result.isEligible && result.tenureOptions.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Loan Amount by Tenure</h3>
                    <div className="space-y-3">
                      {result.tenureOptions.map((option, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{option.tenure} Years</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">EMI: ₹{option.emi.toLocaleString()}</div>
                          </div>
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            ₹{option.loanAmount.toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Documents Required */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Documents Required</h3>
                  <div className="space-y-2">
                    {result.documentsRequired.map((doc, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

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
                  <CheckCircleIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Check Loan Eligibility</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your details to check loan eligibility and amount
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

export default LoanEligibilityPage;