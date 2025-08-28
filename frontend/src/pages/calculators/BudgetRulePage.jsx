import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, DocumentTextIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const BudgetRulePage = () => {
  useScrollToTop();
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [currentNeeds, setCurrentNeeds] = useState('');
  const [currentWants, setCurrentWants] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickIncomes = [30000, 50000, 75000, 100000, 150000, 200000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyIncome || monthlyIncome < 10000) {
      newErrors.monthlyIncome = 'Minimum ₹10,000 required';
    } else if (monthlyIncome > 1000000) {
      newErrors.monthlyIncome = 'Maximum ₹10,00,000 allowed';
    }
    
    const total = (currentNeeds || 0) + (currentWants || 0) + (currentSavings || 0);
    if (total > monthlyIncome) {
      newErrors.total = 'Total expenses cannot exceed income';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBudgetRule = () => {
    const income = monthlyIncome;
    
    // 50/30/20 Rule recommendations
    const recommendedNeeds = income * 0.5;
    const recommendedWants = income * 0.3;
    const recommendedSavings = income * 0.2;
    
    // Current allocation
    const actualNeeds = currentNeeds || 0;
    const actualWants = currentWants || 0;
    const actualSavings = currentSavings || 0;
    const actualTotal = actualNeeds + actualWants + actualSavings;
    const unallocated = income - actualTotal;
    
    // Calculate percentages
    const needsPercentage = (actualNeeds / income) * 100;
    const wantsPercentage = (actualWants / income) * 100;
    const savingsPercentage = (actualSavings / income) * 100;
    
    // Recommendations for improvement
    const needsAdjustment = recommendedNeeds - actualNeeds;
    const wantsAdjustment = recommendedWants - actualWants;
    const savingsAdjustment = recommendedSavings - actualSavings;
    
    return {
      monthlyIncome: income,
      recommended: {
        needs: Math.round(recommendedNeeds),
        wants: Math.round(recommendedWants),
        savings: Math.round(recommendedSavings)
      },
      actual: {
        needs: actualNeeds,
        wants: actualWants,
        savings: actualSavings,
        total: actualTotal,
        unallocated: Math.round(unallocated)
      },
      percentages: {
        needs: needsPercentage.toFixed(1),
        wants: wantsPercentage.toFixed(1),
        savings: savingsPercentage.toFixed(1)
      },
      adjustments: {
        needs: Math.round(needsAdjustment),
        wants: Math.round(wantsAdjustment),
        savings: Math.round(savingsAdjustment)
      },
      isBalanced: Math.abs(needsAdjustment) <= income * 0.05 && 
                  Math.abs(wantsAdjustment) <= income * 0.05 && 
                  Math.abs(savingsAdjustment) <= income * 0.05
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyIncome > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateBudgetRule());
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
  }, [monthlyIncome, currentNeeds, currentWants, currentSavings]);

  const pieDataRecommended = result ? [
    { name: 'Needs (50%)', value: result.recommended.needs, color: '#3B82F6' },
    { name: 'Wants (30%)', value: result.recommended.wants, color: '#F59E0B' },
    { name: 'Savings (20%)', value: result.recommended.savings, color: '#10B981' }
  ] : [];

  const pieDataActual = result ? [
    { name: 'Needs', value: result.actual.needs, color: '#3B82F6' },
    { name: 'Wants', value: result.actual.wants, color: '#F59E0B' },
    { name: 'Savings', value: result.actual.savings, color: '#10B981' },
    { name: 'Unallocated', value: result.actual.unallocated, color: '#6B7280' }
  ].filter(item => item.value > 0) : [];

  const comparisonData = result ? [
    { category: 'Needs', recommended: result.recommended.needs, actual: result.actual.needs },
    { category: 'Wants', recommended: result.recommended.wants, actual: result.actual.wants },
    { category: 'Savings', recommended: result.recommended.savings, actual: result.actual.savings }
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
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">50/30/20 Rule Budgeter</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Simple budgeting rule for financial balance</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('budget-rule');
              const difficulty = getToolDifficulty('budget-rule');
              
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

      {/* What is 50/30/20 Rule Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is 50/30/20 Rule? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Budget Allocation)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Allocate 50% for needs, 30% for wants, and 20% for savings. Simple and effective budgeting method.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🏠</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">50% Needs</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎬</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">30% Wants</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">20% Savings</span>
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
                50/30/20 Rule Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Income (After Tax)
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
                        ₹{income >= 100000 ? `${(income/100000).toFixed(0)}L` : `${(income/1000).toFixed(0)}K`}
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
                      min="10000"
                      max="1000000"
                    />
                  </div>
                  {errors.monthlyIncome && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome}</p>
                  )}
                </div>

                {/* Current Spending (Optional) */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Current Spending (Optional - to compare with recommendations)
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Needs (Housing, Food, Transport, Bills)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={currentNeeds}
                          onChange={(e) => setCurrentNeeds(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Wants (Entertainment, Shopping, Dining)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={currentWants}
                          onChange={(e) => setCurrentWants(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Savings & Investments
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {errors.total && (
                    <p className="text-red-500 text-xs mt-2">{errors.total}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Budget Rule Guide */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">📋</span>
                50/30/20 Rule Guide
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-blue-600 text-lg">🏠</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">50% - Needs</div>
                    <div className="text-gray-600 dark:text-gray-300">Rent, groceries, utilities, minimum debt payments, insurance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-yellow-600 text-lg">🎬</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">30% - Wants</div>
                    <div className="text-gray-600 dark:text-gray-300">Dining out, entertainment, hobbies, non-essential shopping</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-green-600 text-lg">💰</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">20% - Savings</div>
                    <div className="text-gray-600 dark:text-gray-300">Emergency fund, investments, retirement, extra debt payments</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Creating your budget plan</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Budget Recommendations */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    50/30/20 Budget Plan
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Needs (50%)</div>
                          <div className="text-xs text-blue-600 dark:text-blue-400">Housing, food, transport, bills</div>
                        </div>
                        <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                          ₹{result.recommended.needs.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Wants (30%)</div>
                          <div className="text-xs text-yellow-600 dark:text-yellow-400">Entertainment, shopping, dining</div>
                        </div>
                        <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                          ₹{result.recommended.wants.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium">Savings (20%)</div>
                          <div className="text-xs text-green-600 dark:text-green-400">Emergency fund, investments</div>
                        </div>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          ₹{result.recommended.savings.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {result.isBalanced && (
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 text-center">
                        <div className="text-emerald-600 dark:text-emerald-400 font-medium">
                          ✅ Your budget is well balanced!
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recommended Budget Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommended Allocation</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={pieDataRecommended}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieDataRecommended.map((entry, index) => (
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

                {/* Current vs Recommended Comparison */}
                {(result.actual.needs > 0 || result.actual.wants > 0 || result.actual.savings > 0) && (
                  <>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Current Allocation</h3>
                      <div className="w-full overflow-hidden">
                        <ResponsiveContainer width="100%" height={250} minWidth={250}>
                          <PieChart>
                            <Pie
                              data={pieDataActual}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={90}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {pieDataActual.map((entry, index) => (
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

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommended Adjustments</h3>
                      <div className="space-y-3">
                        {Math.abs(result.adjustments.needs) > 100 && (
                          <div className={`p-3 rounded-lg ${result.adjustments.needs > 0 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20'}`}>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Needs</span>
                              <span className={`font-bold ${result.adjustments.needs > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {result.adjustments.needs > 0 ? '+' : ''}₹{result.adjustments.needs.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {Math.abs(result.adjustments.wants) > 100 && (
                          <div className={`p-3 rounded-lg ${result.adjustments.wants > 0 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20'}`}>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Wants</span>
                              <span className={`font-bold ${result.adjustments.wants > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {result.adjustments.wants > 0 ? '+' : ''}₹{result.adjustments.wants.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {Math.abs(result.adjustments.savings) > 100 && (
                          <div className={`p-3 rounded-lg ${result.adjustments.savings > 0 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20'}`}>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Savings</span>
                              <span className={`font-bold ${result.adjustments.savings > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {result.adjustments.savings > 0 ? '+' : ''}₹{result.adjustments.savings.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <DocumentTextIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Apply 50/30/20 Rule</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your income to get personalized budget recommendations
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

export default BudgetRulePage;