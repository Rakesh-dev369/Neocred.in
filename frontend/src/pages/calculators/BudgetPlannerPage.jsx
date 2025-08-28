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

const BudgetPlannerPage = () => {
  useScrollToTop();
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [expenses, setExpenses] = useState({
    housing: '',
    food: '',
    transportation: '',
    utilities: '',
    insurance: '',
    entertainment: '',
    shopping: '',
    healthcare: '',
    education: '',
    others: ''
  });
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [budgetBreakdown, setBudgetBreakdown] = useState([]);

  const quickIncomes = [25000, 50000, 75000, 100000, 150000, 200000];
  
  const expenseCategories = [
    { key: 'housing', label: 'Housing & Rent', icon: '🏠', color: '#3B82F6' },
    { key: 'food', label: 'Food & Groceries', icon: '🍽️', color: '#10B981' },
    { key: 'transportation', label: 'Transportation', icon: '🚗', color: '#F59E0B' },
    { key: 'utilities', label: 'Utilities & Bills', icon: '💡', color: '#EF4444' },
    { key: 'insurance', label: 'Insurance', icon: '🛡️', color: '#8B5CF6' },
    { key: 'entertainment', label: 'Entertainment', icon: '🎬', color: '#EC4899' },
    { key: 'shopping', label: 'Shopping', icon: '🛍️', color: '#06B6D4' },
    { key: 'healthcare', label: 'Healthcare', icon: '⚕️', color: '#84CC16' },
    { key: 'education', label: 'Education', icon: '📚', color: '#F97316' },
    { key: 'others', label: 'Others', icon: '📝', color: '#6B7280' }
  ];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyIncome || monthlyIncome < 5000) {
      newErrors.monthlyIncome = 'Minimum ₹5,000 required';
    } else if (monthlyIncome > 1000000) {
      newErrors.monthlyIncome = 'Maximum ₹10,00,000 allowed';
    }
    
    const totalExpenses = Object.values(expenses).reduce((sum, expense) => sum + (Number(expense) || 0), 0);
    if (totalExpenses > monthlyIncome) {
      newErrors.expenses = 'Total expenses cannot exceed income';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBudget = () => {
    const income = monthlyIncome;
    const totalExpenses = Object.values(expenses).reduce((sum, expense) => sum + (Number(expense) || 0), 0);
    const savings = income - totalExpenses;
    const savingsPercentage = (savings / income) * 100;
    
    // Calculate category-wise breakdown
    const categoryBreakdown = expenseCategories.map(category => ({
      name: category.label,
      amount: Number(expenses[category.key]) || 0,
      percentage: ((Number(expenses[category.key]) || 0) / income) * 100,
      color: category.color,
      icon: category.icon
    })).filter(item => item.amount > 0);

    // Add savings to breakdown
    if (savings > 0) {
      categoryBreakdown.push({
        name: 'Savings',
        amount: savings,
        percentage: savingsPercentage,
        color: '#22C55E',
        icon: '💰'
      });
    }

    // Budget recommendations based on 50/30/20 rule
    const recommendedNeeds = income * 0.5; // 50% for needs
    const recommendedWants = income * 0.3; // 30% for wants
    const recommendedSavings = income * 0.2; // 20% for savings
    
    const actualNeeds = (Number(expenses.housing) || 0) + (Number(expenses.food) || 0) + 
                       (Number(expenses.utilities) || 0) + (Number(expenses.transportation) || 0) + 
                       (Number(expenses.insurance) || 0) + (Number(expenses.healthcare) || 0);
    
    const actualWants = (Number(expenses.entertainment) || 0) + (Number(expenses.shopping) || 0) + 
                       (Number(expenses.others) || 0);

    setBudgetBreakdown(categoryBreakdown);
    
    return {
      monthlyIncome: income,
      totalExpenses,
      savings,
      savingsPercentage,
      categoryBreakdown,
      recommendations: {
        needs: { recommended: recommendedNeeds, actual: actualNeeds },
        wants: { recommended: recommendedWants, actual: actualWants },
        savings: { recommended: recommendedSavings, actual: savings }
      }
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyIncome > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateBudget());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
          setBudgetBreakdown([]);
        }
      } else {
        setResult(null);
        setBudgetBreakdown([]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [monthlyIncome, expenses]);

  const handleExpenseChange = (category, value) => {
    setExpenses(prev => ({
      ...prev,
      [category]: value ? Number(value) : ''
    }));
  };

  const pieData = result ? result.categoryBreakdown : [];

  const comparisonData = result ? [
    { name: 'Needs (50%)', recommended: result.recommendations.needs.recommended, actual: result.recommendations.needs.actual, fill: '#3B82F6' },
    { name: 'Wants (30%)', recommended: result.recommendations.wants.recommended, actual: result.recommendations.wants.actual, fill: '#F59E0B' },
    { name: 'Savings (20%)', recommended: result.recommendations.savings.recommended, actual: result.recommendations.savings.actual, fill: '#10B981' }
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
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budget Planner</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plan and track your monthly budget effectively</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('budget-planner');
              const difficulty = getToolDifficulty('budget-planner');
              
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

      {/* What is Budget Planning Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Budget Planning? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Monthly Budget)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Track income and expenses to manage money better. Follow 50/30/20 rule: 50% needs, 30% wants, 20% savings.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📊</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Track Expenses</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Save Money</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Achieve Goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Budget Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Monthly Budget Planner
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Income
                  </label>
                  
                  {/* Quick Income Buttons */}
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
                      placeholder="50000"
                      min="5000"
                      max="1000000"
                    />
                  </div>
                  {errors.monthlyIncome && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹5,000</span>
                    <span>Max: ₹10,00,000</span>
                  </div>
                </div>

                {/* Expense Categories */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Monthly Expenses
                  </label>
                  
                  <div className="space-y-4">
                    {expenseCategories.map((category) => (
                      <div key={category.key} className="flex items-center gap-3">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-lg">{category.icon}</span>
                          <label className="text-sm text-gray-700 dark:text-gray-300 min-w-0 flex-1">
                            {category.label}
                          </label>
                        </div>
                        <div className="relative w-32">
                          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">₹</span>
                          <input
                            type="number"
                            value={expenses[category.key]}
                            onChange={(e) => handleExpenseChange(category.key, e.target.value)}
                            className="w-full pl-6 pr-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {errors.expenses && (
                    <p className="text-red-500 text-xs mt-2">{errors.expenses}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Budget Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Budget Tips (50/30/20 Rule)
              </h3>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-blue-600 text-base">🏠</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">50% for Needs</div>
                    <div className="text-gray-600 dark:text-gray-300">Housing, food, utilities, transport</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-yellow-600 text-base">🎬</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">30% for Wants</div>
                    <div className="text-gray-600 dark:text-gray-300">Entertainment, shopping, dining out</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-green-600 text-base">💰</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">20% for Savings</div>
                    <div className="text-gray-600 dark:text-gray-300">Emergency fund, investments, goals</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your budget details</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Budget Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Budget Summary
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly Income</div>
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.monthlyIncome.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Total Expenses</div>
                      <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.totalExpenses.toLocaleString()}
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {((result.totalExpenses / result.monthlyIncome) * 100).toFixed(1)}% of income
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${result.savings >= 0 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                      <div className={`text-sm font-medium ${result.savings >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {result.savings >= 0 ? 'Savings' : 'Deficit'}
                      </div>
                      <div className={`text-3xl font-bold ${result.savings >= 0 ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                        ₹{Math.abs(result.savings).toLocaleString()}
                      </div>
                      <div className={`text-xs mt-1 ${result.savings >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {Math.abs(result.savingsPercentage).toFixed(1)}% of income
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expense Breakdown Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Expense Breakdown</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={2}
                          dataKey="amount"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value, name) => [`₹${value.toLocaleString()}`, name]}
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

                {/* 50/30/20 Rule Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">50/30/20 Rule Analysis</h3>
                  <div className="w-full overflow-x-auto">
                    <ResponsiveContainer width="100%" height={250} minWidth={300}>
                      <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis 
                          dataKey="name" 
                          tick={{ fill: 'currentColor', fontSize: 10 }}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <YAxis 
                          tick={{ fill: 'currentColor', fontSize: 10 }}
                          tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <Tooltip 
                          formatter={(val, name) => [`₹${Number(val).toLocaleString()}`, name === 'recommended' ? 'Recommended' : 'Your Actual']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="recommended" name="Recommended" fill="#94A3B8" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="actual" name="Your Actual" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <DocumentTextIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Enter Budget Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill in your income and expenses to create your monthly budget plan
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

export default BudgetPlannerPage;