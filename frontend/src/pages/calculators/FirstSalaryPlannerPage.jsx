import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, AcademicCapIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const FirstSalaryPlannerPage = () => {
  useScrollToTop();
  const [monthlySalary, setMonthlySalary] = useState('');
  const [cityType, setCityType] = useState('metro');
  const [hasAccommodation, setHasAccommodation] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [budgetBreakdown, setBudgetBreakdown] = useState([]);

  const quickSalaries = [25000, 35000, 50000, 75000, 100000, 150000];
  
  const cityMultipliers = {
    metro: { label: 'Metro Cities (Mumbai, Delhi, Bangalore)', cost: 1.3 },
    tier1: { label: 'Tier 1 Cities (Pune, Chennai, Hyderabad)', cost: 1.1 },
    tier2: { label: 'Tier 2 Cities (Indore, Kochi, Jaipur)', cost: 0.9 },
    tier3: { label: 'Tier 3 Cities & Towns', cost: 0.7 }
  };

  const validateInputs = () => {
    const newErrors = {};
    
    if (!monthlySalary || monthlySalary < 15000) {
      newErrors.monthlySalary = 'Minimum ₹15,000 required';
    } else if (monthlySalary > 500000) {
      newErrors.monthlySalary = 'Maximum ₹5,00,000 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateFirstSalaryPlan = () => {
    const salary = monthlySalary;
    const cityMultiplier = cityMultipliers[cityType].cost;
    
    // Tax calculation (simplified)
    const taxableIncome = salary * 12;
    let annualTax = 0;
    if (taxableIncome > 250000) {
      annualTax = Math.min((taxableIncome - 250000) * 0.05, 12500);
      if (taxableIncome > 500000) {
        annualTax += (taxableIncome - 500000) * 0.15;
      }
    }
    const monthlyTax = annualTax / 12;
    
    // PF deduction (12% of basic salary, assuming basic = 50% of CTC)
    const basicSalary = salary * 0.5;
    const pfDeduction = basicSalary * 0.12;
    
    // Take-home salary
    const takeHome = salary - monthlyTax - pfDeduction;
    
    // Budget allocation based on city and accommodation
    let housing = hasAccommodation ? 0 : takeHome * 0.3 * cityMultiplier;
    let food = takeHome * 0.2 * cityMultiplier;
    let transportation = takeHome * 0.1 * cityMultiplier;
    let utilities = hasAccommodation ? takeHome * 0.05 : takeHome * 0.08 * cityMultiplier;
    let entertainment = takeHome * 0.1;
    let shopping = takeHome * 0.08;
    let healthcare = takeHome * 0.05;
    let miscellaneous = takeHome * 0.07;
    
    // Adjust if accommodation is provided
    if (hasAccommodation) {
      const savedAmount = takeHome * 0.3 * cityMultiplier;
      entertainment += savedAmount * 0.3;
      shopping += savedAmount * 0.2;
      miscellaneous += savedAmount * 0.5;
    }
    
    const totalExpenses = housing + food + transportation + utilities + entertainment + shopping + healthcare + miscellaneous;
    const savings = takeHome - totalExpenses;
    const savingsPercentage = (savings / takeHome) * 100;
    
    // Create budget breakdown
    const breakdown = [
      { category: 'Housing & Rent', amount: Math.round(housing), percentage: (housing/takeHome)*100, color: '#3B82F6', icon: '🏠' },
      { category: 'Food & Groceries', amount: Math.round(food), percentage: (food/takeHome)*100, color: '#10B981', icon: '🍽️' },
      { category: 'Transportation', amount: Math.round(transportation), percentage: (transportation/takeHome)*100, color: '#F59E0B', icon: '🚗' },
      { category: 'Utilities & Bills', amount: Math.round(utilities), percentage: (utilities/takeHome)*100, color: '#EF4444', icon: '💡' },
      { category: 'Entertainment', amount: Math.round(entertainment), percentage: (entertainment/takeHome)*100, color: '#8B5CF6', icon: '🎬' },
      { category: 'Shopping', amount: Math.round(shopping), percentage: (shopping/takeHome)*100, color: '#EC4899', icon: '🛍️' },
      { category: 'Healthcare', amount: Math.round(healthcare), percentage: (healthcare/takeHome)*100, color: '#06B6D4', icon: '⚕️' },
      { category: 'Miscellaneous', amount: Math.round(miscellaneous), percentage: (miscellaneous/takeHome)*100, color: '#84CC16', icon: '📝' },
      { category: 'Savings', amount: Math.round(savings), percentage: savingsPercentage, color: '#22C55E', icon: '💰' }
    ].filter(item => item.amount > 0);

    setBudgetBreakdown(breakdown);
    
    return {
      grossSalary: salary,
      monthlyTax: Math.round(monthlyTax),
      pfDeduction: Math.round(pfDeduction),
      takeHomeSalary: Math.round(takeHome),
      totalExpenses: Math.round(totalExpenses),
      savings: Math.round(savings),
      savingsPercentage: savingsPercentage.toFixed(1),
      cityType: cityMultipliers[cityType].label,
      hasAccommodation,
      breakdown,
      recommendations: {
        emergencyFund: Math.round(totalExpenses * 6),
        monthlyInvestment: Math.round(savings * 0.7),
        insuranceBudget: Math.round(takeHome * 0.03)
      }
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (monthlySalary > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateFirstSalaryPlan());
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
  }, [monthlySalary, cityType, hasAccommodation]);

  const pieData = result ? result.breakdown : [];

  const comparisonData = result ? [
    { name: 'Take Home', amount: result.takeHomeSalary, fill: '#3B82F6' },
    { name: 'Expenses', amount: result.totalExpenses, fill: '#EF4444' },
    { name: 'Savings', amount: result.savings, fill: '#10B981' }
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
                  <AcademicCapIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">First Salary Planner</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plan your first salary smartly</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('first-salary-planner');
              const difficulty = getToolDifficulty('first-salary-planner');
              
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

      {/* What is First Salary Planning Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                First Salary Planning <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Fresher's Guide)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Smart budgeting for your first job. Plan expenses, savings, taxes, and investments from day one.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💼</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">First Job</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📊</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Smart Budget</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Future Ready</span>
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
                First Salary Planner
              </h2>
              
              <div className="space-y-6">
                {/* Monthly Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Gross Salary (CTC/12)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickSalaries.map(salary => (
                      <button
                        key={salary}
                        onClick={() => setMonthlySalary(salary)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          monthlySalary === salary
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{salary >= 100000 ? `${(salary/100000).toFixed(0)}L` : `${(salary/1000).toFixed(0)}K`}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlySalary ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="50000"
                      min="15000"
                      max="500000"
                    />
                  </div>
                  {errors.monthlySalary && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlySalary}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹15,000</span>
                    <span>Max: ₹5,00,000</span>
                  </div>
                </div>

                {/* City Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Work Location
                  </label>
                  <select
                    value={cityType}
                    onChange={(e) => setCityType(e.target.value)}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {Object.entries(cityMultipliers).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Accommodation */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company Provides Accommodation
                    </label>
                    <button
                      onClick={() => setHasAccommodation(!hasAccommodation)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        hasAccommodation ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          hasAccommodation ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Toggle if your company provides free accommodation/hostel
                  </p>
                </div>
              </div>
            </div>

            {/* Fresher Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Fresher's Financial Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Start SIP from month 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Build emergency fund first</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Get health insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Track every expense</span>
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
                  <p className="text-gray-600 dark:text-gray-400">Creating your salary plan</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Salary Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Salary Breakdown
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Gross Salary</div>
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.grossSalary.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Monthly CTC
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                        <div className="text-sm text-red-600 dark:text-red-400 font-medium">Tax</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-300">
                          ₹{result.monthlyTax.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">PF</div>
                        <div className="text-lg font-bold text-orange-700 dark:text-orange-300">
                          ₹{result.pfDeduction.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Take Home Salary</div>
                      <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.takeHomeSalary.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        After tax & PF deductions
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Recommended Savings</div>
                      <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.savings.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                        {result.savingsPercentage}% of take home
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget Breakdown Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Budget Allocation</h3>
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

                {/* Recommendations */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Recommendations</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-blue-900 dark:text-blue-100">Emergency Fund Target</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">6 months of expenses</div>
                      </div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.recommendations.emergencyFund.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-green-900 dark:text-green-100">Monthly SIP Investment</div>
                        <div className="text-sm text-green-700 dark:text-green-300">70% of savings</div>
                      </div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.recommendations.monthlyInvestment.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-purple-900 dark:text-purple-100">Insurance Budget</div>
                        <div className="text-sm text-purple-700 dark:text-purple-300">Health + Term insurance</div>
                      </div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.recommendations.insuranceBudget.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <AcademicCapIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plan Your First Salary</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your salary details to get a smart financial plan for your first job
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

export default FirstSalaryPlannerPage;