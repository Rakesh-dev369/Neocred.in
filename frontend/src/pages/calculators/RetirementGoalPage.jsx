import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const RetirementGoalPage = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentIncome, setCurrentIncome] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflationRate, setInflationRate] = useState(6);
  const [incomeReplacement, setIncomeReplacement] = useState(70);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAges = [25, 30, 35, 40, 45, 50];
  const quickIncomes = [500000, 1000000, 1500000, 2500000, 4000000, 6000000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!currentAge || currentAge < 18) {
      newErrors.currentAge = 'Minimum age 18 required';
    } else if (currentAge >= retirementAge) {
      newErrors.currentAge = 'Current age must be less than retirement age';
    }
    
    if (!currentIncome || currentIncome < 100000) {
      newErrors.currentIncome = 'Minimum ₹1,00,000 required';
    } else if (currentIncome > 50000000) {
      newErrors.currentIncome = 'Maximum ₹5 crore allowed';
    }
    
    if (monthlyInvestment && monthlyInvestment > currentIncome / 12) {
      newErrors.monthlyInvestment = 'Monthly investment cannot exceed monthly income';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRetirementGoal = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyIncomeAtRetirement = (currentIncome / 12) * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    const requiredMonthlyIncome = monthlyIncomeAtRetirement * (incomeReplacement / 100);
    
    // Corpus required at retirement (25x annual expenses rule)
    const requiredCorpus = requiredMonthlyIncome * 12 * 25;
    
    // Future value of current savings
    const futureValueCurrentSavings = (currentSavings || 0) * Math.pow(1 + expectedReturn / 100, yearsToRetirement);
    
    // Additional corpus needed
    const additionalCorpusNeeded = Math.max(0, requiredCorpus - futureValueCurrentSavings);
    
    // Required monthly SIP
    const monthlyReturn = expectedReturn / 100 / 12;
    const totalMonths = yearsToRetirement * 12;
    const requiredMonthlySIP = additionalCorpusNeeded / (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
    
    // Current investment analysis
    let projectedCorpus = futureValueCurrentSavings;
    if (monthlyInvestment > 0) {
      const sipCorpus = monthlyInvestment * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
      projectedCorpus += sipCorpus;
    }
    
    const corpusShortfall = Math.max(0, requiredCorpus - projectedCorpus);
    const surplusCorpus = Math.max(0, projectedCorpus - requiredCorpus);
    
    // Retirement income scenarios
    const conservativeReturn = 6; // Post-retirement conservative return
    const monthlyIncomeFromCorpus = (projectedCorpus * conservativeReturn / 100) / 12;
    
    // Year-wise projection
    const yearlyProjection = [];
    let cumulativeInvestment = currentSavings || 0;
    let portfolioValue = currentSavings || 0;
    
    for (let year = 1; year <= Math.min(yearsToRetirement, 20); year++) {
      const annualInvestment = (monthlyInvestment || 0) * 12;
      cumulativeInvestment += annualInvestment;
      portfolioValue = (portfolioValue + annualInvestment) * (1 + expectedReturn / 100);
      
      const currentAgeAtYear = currentAge + year;
      const inflatedIncome = currentIncome * Math.pow(1 + inflationRate / 100, year);
      
      yearlyProjection.push({
        year: `Year ${year}`,
        age: currentAgeAtYear,
        investment: Math.round(cumulativeInvestment),
        value: Math.round(portfolioValue),
        inflatedIncome: Math.round(inflatedIncome)
      });
    }
    
    // Asset allocation recommendation based on age
    const equityAllocation = Math.max(20, 100 - currentAge);
    const debtAllocation = 100 - equityAllocation;
    
    // Retirement strategies
    const strategies = [];
    
    if (corpusShortfall > 0) {
      strategies.push({
        type: 'Increase Investment',
        description: `Increase monthly SIP by ₹${Math.round(requiredMonthlySIP - (monthlyInvestment || 0)).toLocaleString()}`,
        impact: 'High'
      });
      
      strategies.push({
        type: 'Extend Retirement Age',
        description: `Work 2-3 more years to reduce corpus requirement`,
        impact: 'Medium'
      });
    }
    
    if (yearsToRetirement > 20) {
      strategies.push({
        type: 'Aggressive Allocation',
        description: `Consider 80% equity allocation for higher returns`,
        impact: 'High'
      });
    }
    
    strategies.push({
      type: 'Tax Optimization',
      description: `Use ELSS, PPF, NPS for tax-efficient investing`,
      impact: 'Medium'
    });
    
    // Multiple scenarios
    const scenarios = [
      {
        name: 'Conservative (8% return)',
        return: 8,
        corpus: calculateCorpusForReturn(8, yearsToRetirement, monthlyInvestment, currentSavings)
      },
      {
        name: 'Moderate (12% return)',
        return: 12,
        corpus: calculateCorpusForReturn(12, yearsToRetirement, monthlyInvestment, currentSavings)
      },
      {
        name: 'Aggressive (15% return)',
        return: 15,
        corpus: calculateCorpusForReturn(15, yearsToRetirement, monthlyInvestment, currentSavings)
      }
    ];
    
    return {
      currentAge,
      retirementAge,
      yearsToRetirement,
      currentIncome,
      requiredCorpus: Math.round(requiredCorpus),
      projectedCorpus: Math.round(projectedCorpus),
      corpusShortfall: Math.round(corpusShortfall),
      surplusCorpus: Math.round(surplusCorpus),
      requiredMonthlySIP: Math.round(requiredMonthlySIP),
      monthlyIncomeAtRetirement: Math.round(monthlyIncomeAtRetirement),
      requiredMonthlyIncome: Math.round(requiredMonthlyIncome),
      monthlyIncomeFromCorpus: Math.round(monthlyIncomeFromCorpus),
      yearlyProjection,
      equityAllocation,
      debtAllocation,
      strategies,
      scenarios,
      incomeReplacement,
      expectedReturn,
      inflationRate
    };
  };

  const calculateCorpusForReturn = (returnRate, years, monthlyInv, currentSav) => {
    const futureCurrentSavings = (currentSav || 0) * Math.pow(1 + returnRate / 100, years);
    if (!monthlyInv) return futureCurrentSavings;
    
    const monthlyReturn = returnRate / 100 / 12;
    const totalMonths = years * 12;
    const sipCorpus = monthlyInv * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
    
    return Math.round(futureCurrentSavings + sipCorpus);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentAge > 0 && currentIncome > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateRetirementGoal());
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
  }, [currentAge, retirementAge, currentIncome, currentSavings, monthlyInvestment, expectedReturn, inflationRate, incomeReplacement]);

  const allocationData = result ? [
    { name: 'Equity', value: result.equityAllocation, color: '#10B981' },
    { name: 'Debt', value: result.debtAllocation, color: '#3B82F6' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('retirement-goal');
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
                  <ClockIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Retirement Goal Planner</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plan monthly investments for post-retirement life</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('retirement-goal');
              
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
                Personal Details
              </h2>
              
              <div className="space-y-6">
                {/* Age Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Age
                    </label>
                    
                    <div className="grid grid-cols-3 gap-1 mb-2">
                      {quickAges.map(age => (
                        <button
                          key={age}
                          onClick={() => setCurrentAge(age)}
                          className={`px-2 py-1 text-xs rounded border transition-colors ${
                            currentAge === age
                              ? 'bg-blue-500 text-white border-blue-500'
                              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                    
                    <input
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.currentAge ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="30"
                      min="18"
                      max="65"
                    />
                    {errors.currentAge && (
                      <p className="text-red-500 text-xs mt-1">{errors.currentAge}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Retirement Age
                    </label>
                    <input
                      type="number"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(e.target.value ? Number(e.target.value) : 60)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="60"
                      min="50"
                      max="70"
                    />
                  </div>
                </div>

                {/* Current Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Annual Income
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickIncomes.map(income => (
                      <button
                        key={income}
                        onClick={() => setCurrentIncome(income)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          currentIncome === income
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        ₹{(income/100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={currentIncome}
                      onChange={(e) => setCurrentIncome(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.currentIncome ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="1500000"
                      min="100000"
                      max="50000000"
                    />
                  </div>
                  {errors.currentIncome && (
                    <p className="text-red-500 text-xs mt-1">{errors.currentIncome}</p>
                  )}
                </div>

                {/* Current Savings */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Retirement Savings (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="500000"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Existing retirement corpus (PF, investments, etc.)</p>
                </div>

                {/* Monthly Investment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Monthly Investment (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyInvestment ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="25000"
                      min="0"
                    />
                  </div>
                  {errors.monthlyInvestment && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyInvestment}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Assumptions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Assumptions</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Return (% p.a.)
                  </label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value ? Number(e.target.value) : 12)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="12"
                    min="5"
                    max="20"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inflation Rate (% p.a.)
                  </label>
                  <input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(e.target.value ? Number(e.target.value) : 6)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="6"
                    min="2"
                    max="12"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Income Replacement (%)
                  </label>
                  <input
                    type="number"
                    value={incomeReplacement}
                    onChange={(e) => setIncomeReplacement(e.target.value ? Number(e.target.value) : 70)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="70"
                    min="50"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">% of current income needed in retirement</p>
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
                  <p className="text-gray-600 dark:text-gray-400">Planning your retirement strategy</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Retirement Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Retirement Plan Analysis
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Required Retirement Corpus</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.requiredCorpus.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        For {result.incomeReplacement}% income replacement
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Projected Corpus</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.projectedCorpus.toLocaleString()}
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      result.corpusShortfall > 0 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20'
                    }`}>
                      <div className={`text-sm font-medium ${
                        result.corpusShortfall > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                      }`}>
                        {result.corpusShortfall > 0 ? 'Shortfall' : 'Surplus'}
                      </div>
                      <div className={`text-xl font-bold ${
                        result.corpusShortfall > 0 ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'
                      }`}>
                        ₹{(result.corpusShortfall || result.surplusCorpus).toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Years to Retirement</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.yearsToRetirement} Years
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Required Monthly SIP</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.requiredMonthlySIP.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Monthly Income at Retirement:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.monthlyIncomeAtRetirement.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Required Monthly Income:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.requiredMonthlyIncome.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Allocation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recommended Asset Allocation (Age: {result.currentAge})
                  </h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={200} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={allocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {allocationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Allocation']}
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
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Rule: 100 - Age = Equity allocation
                  </p>
                </div>

                {/* Scenarios */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Return Scenarios</h3>
                  <div className="space-y-3">
                    {result.scenarios.map((scenario, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{scenario.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{scenario.return}% annual return</div>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          ₹{scenario.corpus.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Growth */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Growth Projection</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={result.yearlyProjection}>
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
                        <Line type="monotone" dataKey="value" stroke="#10B981" name="Portfolio Value" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Strategies */}
                {result.strategies.length > 0 && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-blue-600">💡</span>
                      Retirement Strategies
                    </h3>
                    <div className="space-y-3">
                      {result.strategies.map((strategy, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            strategy.impact === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                          }`}>
                            {strategy.impact}
                          </span>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{strategy.type}</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">{strategy.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ClockIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plan Your Retirement</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your details to create a comprehensive retirement strategy
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

export default RetirementGoalPage;