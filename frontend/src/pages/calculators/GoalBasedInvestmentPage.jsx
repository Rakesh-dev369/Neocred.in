import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, TrophyIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, Legend, BarChart, Bar } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const GoalBasedInvestmentPage = () => {
  const [goals, setGoals] = useState([
    { name: 'House Down Payment', targetAmount: '', timeframe: '', priority: 'high', riskProfile: 'moderate' },
    { name: 'Child Education', targetAmount: '', timeframe: '', priority: 'high', riskProfile: 'conservative' },
    { name: 'Retirement Corpus', targetAmount: '', timeframe: '', priority: 'medium', riskProfile: 'aggressive' }
  ]);
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [inflationRate, setInflationRate] = useState(6);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const riskProfiles = {
    conservative: { expectedReturn: 8, volatility: 5, allocation: { equity: 20, debt: 70, gold: 10 } },
    moderate: { expectedReturn: 12, volatility: 12, allocation: { equity: 60, debt: 30, gold: 10 } },
    aggressive: { expectedReturn: 15, volatility: 18, allocation: { equity: 80, debt: 15, gold: 5 } }
  };

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyInvestment || monthlyInvestment < 1000) {
      newErrors.monthlyInvestment = 'Minimum ₹1,000 required';
    } else if (monthlyInvestment > 500000) {
      newErrors.monthlyInvestment = 'Maximum ₹5,00,000 allowed';
    }
    
    const validGoals = goals.filter(goal => goal.targetAmount > 0 && goal.timeframe > 0);
    if (validGoals.length === 0) {
      newErrors.goals = 'At least one goal with amount and timeframe required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateGoalBasedInvestment = () => {
    const validGoals = goals.filter(goal => goal.targetAmount > 0 && goal.timeframe > 0);
    
    // Calculate future value of goals with inflation
    const processedGoals = validGoals.map(goal => {
      const profile = riskProfiles[goal.riskProfile];
      const futureValue = goal.targetAmount * Math.pow(1 + inflationRate / 100, goal.timeframe);
      const monthlyReturn = profile.expectedReturn / 100 / 12;
      const totalMonths = goal.timeframe * 12;
      
      // Required monthly SIP for this goal
      const requiredSIP = futureValue / (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
      
      return {
        ...goal,
        futureValue: Math.round(futureValue),
        requiredSIP: Math.round(requiredSIP),
        expectedReturn: profile.expectedReturn,
        allocation: profile.allocation,
        priorityScore: goal.priority === 'high' ? 3 : goal.priority === 'medium' ? 2 : 1
      };
    }).sort((a, b) => b.priorityScore - a.priorityScore || a.timeframe - b.timeframe);

    // Calculate total required investment
    const totalRequiredSIP = processedGoals.reduce((sum, goal) => sum + goal.requiredSIP, 0);
    const shortfall = Math.max(0, totalRequiredSIP - monthlyInvestment);
    
    // Asset allocation based on goals
    let totalEquity = 0, totalDebt = 0, totalGold = 0;
    processedGoals.forEach(goal => {
      const weight = goal.requiredSIP / totalRequiredSIP;
      totalEquity += goal.allocation.equity * weight;
      totalDebt += goal.allocation.debt * weight;
      totalGold += goal.allocation.gold * weight;
    });

    const overallAllocation = {
      equity: Math.round(totalEquity),
      debt: Math.round(totalDebt),
      gold: Math.round(totalGold)
    };

    // Investment strategy recommendations
    const strategies = [];
    
    if (shortfall > 0) {
      strategies.push({
        type: 'Increase Investment',
        description: `Increase monthly investment by ₹${shortfall.toLocaleString()} to achieve all goals`,
        impact: 'High'
      });
    }

    // Goal prioritization if budget insufficient
    let allocatedBudget = 0;
    const goalAllocation = processedGoals.map(goal => {
      const canAllocate = Math.min(goal.requiredSIP, monthlyInvestment - allocatedBudget);
      allocatedBudget += canAllocate;
      
      return {
        ...goal,
        allocatedSIP: Math.round(canAllocate),
        achievable: canAllocate >= goal.requiredSIP,
        shortfall: Math.max(0, goal.requiredSIP - canAllocate)
      };
    });

    // Timeline analysis
    const timelineData = [];
    for (let year = 1; year <= Math.max(...processedGoals.map(g => g.timeframe)); year++) {
      const goalsThisYear = processedGoals.filter(g => g.timeframe === year);
      const yearlyGoalValue = goalsThisYear.reduce((sum, goal) => sum + goal.futureValue, 0);
      
      timelineData.push({
        year: `Year ${year}`,
        goalValue: yearlyGoalValue,
        goalsAchieved: goalsThisYear.map(g => g.name).join(', ') || 'None'
      });
    }

    // Portfolio growth projection
    const portfolioGrowth = [];
    let cumulativeInvestment = 0;
    let portfolioValue = 0;
    const avgReturn = processedGoals.reduce((sum, goal, index) => 
      sum + (goal.expectedReturn * (goal.requiredSIP / totalRequiredSIP)), 0);

    for (let year = 1; year <= 20; year++) {
      cumulativeInvestment += monthlyInvestment * 12;
      portfolioValue = (portfolioValue + monthlyInvestment * 12) * (1 + avgReturn / 100);
      
      portfolioGrowth.push({
        year: `Year ${year}`,
        investment: Math.round(cumulativeInvestment),
        value: Math.round(portfolioValue)
      });
    }

    return {
      processedGoals,
      totalRequiredSIP: Math.round(totalRequiredSIP),
      shortfall: Math.round(shortfall),
      overallAllocation,
      goalAllocation,
      strategies,
      timelineData,
      portfolioGrowth: portfolioGrowth.slice(0, 15),
      avgExpectedReturn: avgReturn.toFixed(1),
      feasibilityScore: Math.round((goalAllocation.filter(g => g.achievable).length / goalAllocation.length) * 100)
    };
  };

  const updateGoal = (index, field, value) => {
    const newGoals = [...goals];
    newGoals[index][field] = value;
    setGoals(newGoals);
  };

  const addGoal = () => {
    setGoals([...goals, { name: '', targetAmount: '', timeframe: '', priority: 'medium', riskProfile: 'moderate' }]);
  };

  const removeGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyInvestment > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateGoalBasedInvestment());
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
  }, [monthlyInvestment, goals, inflationRate]);

  const allocationData = result ? [
    { name: 'Equity', value: result.overallAllocation.equity, color: '#10B981' },
    { name: 'Debt', value: result.overallAllocation.debt, color: '#3B82F6' },
    { name: 'Gold', value: result.overallAllocation.gold, color: '#F59E0B' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('goal-based-investment');
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
                  <TrophyIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Goal-Based Investment Planner</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plan investments to achieve multiple financial goals</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('goal-based-investment');
              
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
            {/* Monthly Investment Budget */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Investment Budget
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Investment Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyInvestment ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="25000"
                      min="1000"
                      max="500000"
                    />
                  </div>
                  {errors.monthlyInvestment && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyInvestment}</p>
                  )}
                </div>

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
                      max="15"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <TrophyIcon className="h-5 w-5 text-green-600" />
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
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Target Amount (₹)</label>
                        <input
                          type="number"
                          value={goal.targetAmount}
                          onChange={(e) => updateGoal(index, 'targetAmount', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="2000000"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Timeframe (Years)</label>
                        <input
                          type="number"
                          value={goal.timeframe}
                          onChange={(e) => updateGoal(index, 'timeframe', e.target.value ? Number(e.target.value) : '')}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="10"
                          min="0.25"
                          max="40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
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
                      
                      <div>
                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Risk Profile</label>
                        <select
                          value={goal.riskProfile}
                          onChange={(e) => updateGoal(index, 'riskProfile', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="conservative">Conservative (8%)</option>
                          <option value="moderate">Moderate (12%)</option>
                          <option value="aggressive">Aggressive (15%)</option>
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
                  <p className="text-gray-600 dark:text-gray-400">Analyzing your investment goals</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Investment Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Investment Analysis
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly Budget</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{monthlyInvestment.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Required Investment</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.totalRequiredSIP.toLocaleString()}
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      result.shortfall === 0 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'
                    }`}>
                      <div className={`text-sm font-medium ${
                        result.shortfall === 0 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {result.shortfall === 0 ? 'Surplus' : 'Shortfall'}
                      </div>
                      <div className={`text-xl font-bold ${
                        result.shortfall === 0 ? 'text-green-700 dark:text-green-300' : 'text-yellow-700 dark:text-yellow-300'
                      }`}>
                        ₹{result.shortfall === 0 ? (monthlyInvestment - result.totalRequiredSIP).toLocaleString() : result.shortfall.toLocaleString()}
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

                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Average Expected Return: {result.avgExpectedReturn}%
                  </div>
                </div>

                {/* Asset Allocation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommended Asset Allocation</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={allocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
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
                </div>

                {/* Goals Analysis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Goal-wise Analysis</h3>
                  <div className="space-y-3">
                    {result.goalAllocation.map((goal, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${
                        goal.achievable ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
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
                              {goal.achievable ? (
                                <span className="text-green-500">✓</span>
                              ) : (
                                <span className="text-red-500">✗</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Target: ₹{goal.targetAmount.toLocaleString()} in {goal.timeframe} years
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Future Value: ₹{goal.futureValue.toLocaleString()} | Risk: {goal.riskProfile}
                            </div>
                            {goal.shortfall > 0 && (
                              <div className="text-sm text-red-600 dark:text-red-400">
                                Shortfall: ₹{goal.shortfall.toLocaleString()}/month
                              </div>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              ₹{goal.requiredSIP.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">required/month</div>
                            <div className="text-sm text-blue-600 dark:text-blue-400">
                              Allocated: ₹{goal.allocatedSIP.toLocaleString()}
                            </div>
                          </div>
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
                      <LineChart data={result.portfolioGrowth}>
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
                      Investment Strategies
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
                )}
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <TrophyIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plan Your Investment Goals</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your budget and goals to create a comprehensive investment strategy
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

export default GoalBasedInvestmentPage;