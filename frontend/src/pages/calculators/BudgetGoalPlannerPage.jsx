import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, DocumentTextIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const BudgetGoalPlannerPage = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [goals, setGoals] = useState([
    { name: 'Emergency Fund', amount: '', timeframe: '', priority: 'high' },
    { name: 'Vacation', amount: '', timeframe: '', priority: 'medium' },
    { name: 'Car Purchase', amount: '', timeframe: '', priority: 'low' }
  ]);
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [inflationRate, setInflationRate] = useState(6);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickIncomes = [50000, 75000, 100000, 150000, 200000, 300000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyIncome || monthlyIncome < 20000) {
      newErrors.monthlyIncome = 'Minimum ₹20,000 required';
    } else if (monthlyIncome > 1000000) {
      newErrors.monthlyIncome = 'Maximum ₹10,00,000 allowed';
    }
    
    if (monthlyExpenses && monthlyExpenses >= monthlyIncome) {
      newErrors.monthlyExpenses = 'Expenses should be less than income';
    }
    
    const validGoals = goals.filter(goal => goal.amount > 0 && goal.timeframe > 0);
    if (validGoals.length === 0) {
      newErrors.goals = 'At least one goal with amount and timeframe required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBudgetGoalPlan = () => {
    const disposableIncome = monthlyIncome - (monthlyExpenses || monthlyIncome * 0.7);
    const annualInflation = inflationRate / 100;
    
    // Process and prioritize goals
    const processedGoals = goals
      .filter(goal => goal.amount > 0 && goal.timeframe > 0)
      .map(goal => {
        const futureValue = goal.amount * Math.pow(1 + annualInflation, goal.timeframe);
        const monthlyRequired = futureValue / (goal.timeframe * 12);
        
        return {
          ...goal,
          futureValue: Math.round(futureValue),
          monthlyRequired: Math.round(monthlyRequired),
          priorityScore: goal.priority === 'high' ? 3 : goal.priority === 'medium' ? 2 : 1
        };
      })
      .sort((a, b) => b.priorityScore - a.priorityScore || a.timeframe - b.timeframe);
    
    // Calculate cumulative monthly requirements
    let cumulativeMonthlyRequired = 0;
    const goalAnalysis = processedGoals.map(goal => {
      cumulativeMonthlyRequired += goal.monthlyRequired;
      const feasible = cumulativeMonthlyRequired <= disposableIncome;
      
      return {
        ...goal,
        cumulativeRequired: Math.round(cumulativeMonthlyRequired),
        feasible,
        shortfall: feasible ? 0 : Math.round(cumulativeMonthlyRequired - disposableIncome)
      };
    });
    
    // Budget allocation suggestions
    const totalMonthlyRequired = goalAnalysis.reduce((sum, goal) => sum + goal.monthlyRequired, 0);
    const budgetAllocation = {
      goalsAllocation: Math.min(totalMonthlyRequired, disposableIncome),
      emergencyBuffer: Math.round(disposableIncome * 0.1),
      discretionarySpending: Math.max(0, disposableIncome - totalMonthlyRequired - (disposableIncome * 0.1))
    };
    
    // Timeline analysis
    const timelineAnalysis = [];
    let cumulativeAmount = 0;
    
    for (let year = 1; year <= Math.max(...processedGoals.map(g => g.timeframe)); year++) {
      const goalsThisYear = processedGoals.filter(g => g.timeframe === year);
      const yearlyGoalAmount = goalsThisYear.reduce((sum, goal) => sum + goal.futureValue, 0);
      cumulativeAmount += yearlyGoalAmount;
      
      timelineAnalysis.push({
        year: `Year ${year}`,
        goalsAmount: yearlyGoalAmount,
        cumulativeAmount,
        goalsAchieved: goalsThisYear.map(g => g.name).join(', ') || 'None'
      });
    }
    
    // Optimization strategies
    const strategies = [];
    
    if (totalMonthlyRequired > disposableIncome) {
      strategies.push({
        type: 'Income Increase',
        description: `Increase income by ₹${Math.round(totalMonthlyRequired - disposableIncome)} to achieve all goals`,
        impact: 'High'
      });
      
      strategies.push({
        type: 'Expense Reduction',
        description: `Reduce expenses by ₹${Math.round(totalMonthlyRequired - disposableIncome)} monthly`,
        impact: 'High'
      });
      
      strategies.push({
        type: 'Goal Prioritization',
        description: 'Focus on high-priority goals first, defer others',
        impact: 'Medium'
      });
    }
    
    if (processedGoals.some(g => g.timeframe > 5)) {
      strategies.push({
        type: 'Investment Strategy',
        description: 'Consider equity investments for goals beyond 5 years',
        impact: 'Medium'
      });
    }
    
    strategies.push({
      type: 'Inflation Protection',
      description: 'Review and adjust goal amounts annually for inflation',
      impact: 'Medium'
    });
    
    // Monthly budget breakdown
    const budgetBreakdown = {
      income: monthlyIncome,
      expenses: monthlyExpenses || Math.round(monthlyIncome * 0.7),
      disposableIncome: Math.round(disposableIncome),
      goalsAllocation: budgetAllocation.goalsAllocation,
      emergencyBuffer: budgetAllocation.emergencyBuffer,
      discretionary: budgetAllocation.discretionarySpending
    };
    
    return {
      monthlyIncome,
      disposableIncome: Math.round(disposableIncome),
      goalAnalysis,
      totalMonthlyRequired: Math.round(totalMonthlyRequired),
      budgetAllocation,
      timelineAnalysis,
      strategies,
      budgetBreakdown,
      inflationRate,
      feasibilityScore: Math.round((goalAnalysis.filter(g => g.feasible).length / goalAnalysis.length) * 100)
    };
  };

  const updateGoal = (index, field, value) => {
    const newGoals = [...goals];
    newGoals[index][field] = value;
    setGoals(newGoals);
  };

  const addGoal = () => {
    setGoals([...goals, { name: '', amount: '', timeframe: '', priority: 'medium' }]);
  };

  const removeGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyIncome > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateBudgetGoalPlan());
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
  }, [monthlyIncome, goals, monthlyExpenses, inflationRate]);

  const pieData = result ? [
    { name: 'Monthly Expenses', value: result.budgetBreakdown.expenses, color: '#EF4444' },
    { name: 'Goals Allocation', value: result.budgetBreakdown.goalsAllocation, color: '#10B981' },
    { name: 'Emergency Buffer', value: result.budgetBreakdown.emergencyBuffer, color: '#F59E0B' },
    { name: 'Discretionary', value: result.budgetBreakdown.discretionary, color: '#8B5CF6' }
  ].filter(item => item.value > 0) : [];

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
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budget Goal Planner</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plan multiple financial goals with inflation adjustment</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('budget-goal-planner');
              const difficulty = getToolDifficulty('budget-goal-planner');
              
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
                Income & Expenses
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Income
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
                      placeholder="100000"
                      min="20000"
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
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyExpenses ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="70000"
                      min="0"
                    />
                  </div>
                  {errors.monthlyExpenses && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyExpenses}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">If not provided, assumes 70% of income</p>
                </div>

                {/* Inflation Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Inflation Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value ? Number(e.target.value) : 6)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="6"
                      min="0"
                      max="20"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Typical range: 4-8% per annum</p>
                </div>
              </div>
            </div>

            {/* Financial Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5 text-green-600" />
                  Financial Goals
                </h2>
                <button
                  onClick={addGoal}
                  className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
                >
                  Add Goal
                </button>
              </div>
              
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <input
                        type="text"
                        value={goal.name}
                        onChange={(e) => updateGoal(index, 'name', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Goal name"
                      />
                      {goals.length > 1 && (
                        <button
                          onClick={() => removeGoal(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Amount (₹)</label>
                        <input
                          type="number"
                          value={goal.amount}
                          onChange={(e) => updateGoal(index, 'amount', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="100000"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Years</label>
                        <input
                          type="number"
                          value={goal.timeframe}
                          onChange={(e) => updateGoal(index, 'timeframe', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="5"
                          min="0.25"
                          max="30"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Priority</label>
                        <select
                          value={goal.priority}
                          onChange={(e) => updateGoal(index, 'priority', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {errors.goals && (
                <p className="text-red-500 text-xs mt-2">{errors.goals}</p>
              )}
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculating...</h3>
                  <p className="text-gray-600 dark:text-gray-400">Analyzing your budget and goals</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Budget Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Budget Goal Analysis
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly Income</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.monthlyIncome.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Disposable Income</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.disposableIncome.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Goals Requirement</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.totalMonthlyRequired.toLocaleString()}
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      result.feasibilityScore >= 80 ? 'bg-green-50 dark:bg-green-900/20' :
                      result.feasibilityScore >= 60 ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                      'bg-red-50 dark:bg-red-900/20'
                    }`}>
                      <div className={`text-sm font-medium ${
                        result.feasibilityScore >= 80 ? 'text-green-600 dark:text-green-400' :
                        result.feasibilityScore >= 60 ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>Feasibility Score</div>
                      <div className={`text-xl font-bold ${
                        result.feasibilityScore >= 80 ? 'text-green-700 dark:text-green-300' :
                        result.feasibilityScore >= 60 ? 'text-yellow-700 dark:text-yellow-300' :
                        'text-red-700 dark:text-red-300'
                      }`}>
                        {result.feasibilityScore}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget Allocation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Budget Allocation</h3>
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

                {/* Goals Analysis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Goals Feasibility</h3>
                  <div className="space-y-3">
                    {result.goalAnalysis.map((goal, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${
                        goal.feasible ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                              {goal.name}
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                goal.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                                goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                                'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                              }`}>
                                {goal.priority}
                              </span>
                              {goal.feasible ? (
                                <span className="text-green-500">✓</span>
                              ) : (
                                <span className="text-red-500">✗</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Target: ₹{goal.amount.toLocaleString()} in {goal.timeframe} years
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Future Value: ₹{goal.futureValue.toLocaleString()} (with {result.inflationRate}% inflation)
                            </div>
                            {goal.shortfall > 0 && (
                              <div className="text-sm text-red-600 dark:text-red-400">
                                Shortfall: ₹{goal.shortfall.toLocaleString()}/month
                              </div>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              ₹{goal.monthlyRequired.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">per month</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Analysis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Goal Timeline</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={result.timelineAnalysis}>
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `₹${(value/100000).toFixed(0)}L`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                          labelFormatter={(label) => {
                            const item = result.timelineAnalysis.find(t => t.year === label);
                            return `${label}: ${item?.goalsAchieved}`;
                          }}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="goalsAmount" fill="#10B981" name="Goals This Year" />
                        <Bar dataKey="cumulativeAmount" fill="#3B82F6" name="Cumulative Amount" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Optimization Strategies */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-600">💡</span>
                    Optimization Strategies
                  </h3>
                  <div className="space-y-3">
                    {result.strategies.map((strategy, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          strategy.impact === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                          strategy.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
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
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <DocumentTextIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plan Your Financial Goals</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your income and goals to create a comprehensive budget plan
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

export default BudgetGoalPlannerPage;