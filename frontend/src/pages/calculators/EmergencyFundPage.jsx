import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ShieldCheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const EmergencyFundPage = () => {
  useScrollToTop();
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [fundMonths, setFundMonths] = useState(6);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [savingsProgress, setSavingsProgress] = useState([]);

  const quickExpenses = [20000, 30000, 50000, 75000, 100000, 150000];
  const fundOptions = [3, 6, 9, 12];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlyExpenses || monthlyExpenses < 5000) {
      newErrors.monthlyExpenses = 'Minimum ₹5,000 required';
    } else if (monthlyExpenses > 500000) {
      newErrors.monthlyExpenses = 'Maximum ₹5,00,000 allowed';
    }
    
    if (currentSavings < 0) {
      newErrors.currentSavings = 'Cannot be negative';
    } else if (currentSavings > 10000000) {
      newErrors.currentSavings = 'Maximum ₹1,00,00,000 allowed';
    }
    
    if (!monthlySavings || monthlySavings < 1000) {
      newErrors.monthlySavings = 'Minimum ₹1,000 required';
    } else if (monthlySavings > 100000) {
      newErrors.monthlySavings = 'Maximum ₹1,00,000 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEmergencyFund = () => {
    const targetAmount = monthlyExpenses * fundMonths;
    const shortfall = Math.max(0, targetAmount - (currentSavings || 0));
    const monthsToTarget = shortfall > 0 ? Math.ceil(shortfall / monthlySavings) : 0;
    const completionDate = new Date();
    completionDate.setMonth(completionDate.getMonth() + monthsToTarget);
    
    // Calculate monthly progress
    const progressData = [];
    let cumulativeSavings = currentSavings || 0;
    
    for (let month = 0; month <= Math.min(monthsToTarget, 24); month++) {
      progressData.push({
        month,
        savings: Math.round(cumulativeSavings),
        target: targetAmount,
        percentage: Math.min((cumulativeSavings / targetAmount) * 100, 100)
      });
      
      if (month < monthsToTarget) {
        cumulativeSavings += monthlySavings;
      }
    }

    setSavingsProgress(progressData);
    
    return {
      targetAmount: Math.round(targetAmount),
      currentSavings: currentSavings || 0,
      shortfall: Math.round(shortfall),
      monthsToTarget,
      completionDate: completionDate.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long' 
      }),
      monthlyExpenses,
      fundMonths,
      monthlySavings,
      isComplete: shortfall === 0,
      progressPercentage: Math.min(((currentSavings || 0) / targetAmount) * 100, 100)
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlyExpenses > 0 && monthlySavings > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateEmergencyFund());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
          setSavingsProgress([]);
        }
      } else {
        setResult(null);
        setSavingsProgress([]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [monthlyExpenses, currentSavings, monthlySavings, fundMonths]);

  const pieData = result ? [
    { name: 'Current Savings', value: result.currentSavings, color: '#10B981' },
    { name: 'Still Needed', value: result.shortfall, color: '#EF4444' }
  ].filter(item => item.value > 0) : [];

  const comparisonData = fundOptions.map(months => ({
    months: `${months} Months`,
    amount: monthlyExpenses * months,
    recommended: months === 6
  }));

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
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Emergency Fund Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plan your financial safety net</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('emergency-fund');
              const difficulty = getToolDifficulty('emergency-fund');
              
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

      {/* What is Emergency Fund Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Emergency Fund? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Financial Safety Net)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Money set aside for unexpected expenses like job loss, medical emergencies, or urgent repairs.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🛡️</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Protection</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Peace of Mind</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">⚡</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Quick Access</span>
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
                Emergency Fund Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Expenses */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Expenses
                  </label>
                  
                  {/* Quick Expense Buttons */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickExpenses.map(expense => (
                      <button
                        key={expense}
                        onClick={() => setMonthlyExpenses(expense)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          monthlyExpenses === expense
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{expense >= 100000 ? `${(expense/100000).toFixed(0)}L` : `${(expense/1000).toFixed(0)}K`}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlyExpenses}
                      onChange={(e) => setMonthlyExpenses(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyExpenses ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="50000"
                      min="5000"
                      max="500000"
                    />
                  </div>
                  {errors.monthlyExpenses && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyExpenses}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹5,000</span>
                    <span>Max: ₹5,00,000</span>
                  </div>
                </div>

                {/* Fund Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Emergency Fund Duration
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {fundOptions.map(months => (
                      <button
                        key={months}
                        onClick={() => setFundMonths(months)}
                        className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                          fundMonths === months
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {months}M
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Recommended: 6 months</p>
                </div>

                {/* Current Savings */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Emergency Savings
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.currentSavings ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="0"
                      min="0"
                      max="10000000"
                    />
                  </div>
                  {errors.currentSavings && (
                    <p className="text-red-500 text-xs mt-1">{errors.currentSavings}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Enter 0 if starting fresh</p>
                </div>

                {/* Monthly Savings Capacity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Savings Capacity
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlySavings}
                      onChange={(e) => setMonthlySavings(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlySavings ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10000"
                      min="1000"
                      max="100000"
                    />
                  </div>
                  {errors.monthlySavings && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlySavings}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹1,000</span>
                    <span>Max: ₹1,00,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Fund Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Emergency Fund Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Keep in liquid savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Separate from investments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Use high-yield savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Automate savings</span>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your emergency fund plan</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Fund Status */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Emergency Fund Status
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Target Amount</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.targetAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        {result.fundMonths} months of expenses
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Current Savings</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.currentSavings.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {result.progressPercentage.toFixed(1)}% of target
                      </div>
                    </div>

                    {result.shortfall > 0 ? (
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">Still Needed</div>
                        <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                          ₹{result.shortfall.toLocaleString()}
                        </div>
                        <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                          {result.monthsToTarget} months to complete
                        </div>
                      </div>
                    ) : (
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">Status</div>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          ✅ Complete!
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Emergency fund ready
                        </div>
                      </div>
                    )}

                    {result.monthsToTarget > 0 && (
                      <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Completion Date</div>
                        <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                          {result.completionDate}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          At ₹{result.monthlySavings.toLocaleString()}/month
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Chart */}
                {pieData.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fund Progress</h3>
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
                )}

                {/* Duration Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Duration Comparison</h3>
                  <div className="w-full overflow-x-auto">
                    <ResponsiveContainer width="100%" height={250} minWidth={300}>
                      <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis 
                          dataKey="months" 
                          tick={{ fill: 'currentColor', fontSize: 10 }}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <YAxis 
                          tick={{ fill: 'currentColor', fontSize: 10 }}
                          tickFormatter={(val) => `₹${(val/100000).toFixed(1)}L`}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <Tooltip 
                          formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Fund Amount']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar 
                          dataKey="amount" 
                          radius={[4, 4, 0, 0]}
                          fill={(entry) => entry.recommended ? '#10B981' : '#3B82F6'}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ShieldCheckIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plan Your Emergency Fund</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your expenses and savings to create your emergency fund plan
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

export default EmergencyFundPage;