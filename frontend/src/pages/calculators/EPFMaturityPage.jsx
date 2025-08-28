import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, BanknotesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';

const EPFMaturityPage = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [currentEPFBalance, setCurrentEPFBalance] = useState('');
  const [annualIncrement, setAnnualIncrement] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickSalaries = [25000, 40000, 60000, 80000, 120000, 200000];
  const quickAges = [25, 30, 35, 40, 45, 50];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!currentAge || currentAge < 18) {
      newErrors.currentAge = 'Minimum age 18 required';
    } else if (currentAge > 58) {
      newErrors.currentAge = 'EPF matures at 58';
    }
    
    if (!basicSalary || basicSalary < 15000) {
      newErrors.basicSalary = 'Minimum ₹15,000 required';
    } else if (basicSalary > 500000) {
      newErrors.basicSalary = 'Maximum ₹5,00,000 allowed';
    }
    
    if (annualIncrement !== '' && (annualIncrement < 0 || annualIncrement > 50)) {
      newErrors.annualIncrement = 'Increment: 0-50% allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEPFMaturity = () => {
    const retirementAge = 58;
    const yearsToRetirement = retirementAge - currentAge;
    const epfRate = 8.15; // Current EPF interest rate 2025
    const employeeContribution = 0.12; // 12% of basic salary
    const employerContribution = 0.12; // 12% of basic salary (3.67% to EPF, 8.33% to EPS)
    const totalContributionRate = employeeContribution + 0.0367; // Only 3.67% of employer goes to EPF
    
    let currentBalance = currentEPFBalance || 0;
    let currentSalary = basicSalary;
    
    // Year-wise calculation
    const yearlyBreakdown = [];
    let totalContributions = currentBalance;
    
    for (let year = 1; year <= yearsToRetirement; year++) {
      // Apply annual increment
      if (year > 1 && annualIncrement > 0) {
        currentSalary = currentSalary * (1 + annualIncrement / 100);
      }
      
      // Monthly contribution
      const monthlyEmployeeContrib = currentSalary * employeeContribution;
      const monthlyEmployerContrib = currentSalary * 0.0367; // Only EPF portion
      const monthlyTotalContrib = monthlyEmployeeContrib + monthlyEmployerContrib;
      const annualContribution = monthlyTotalContrib * 12;
      
      // Interest calculation (compound annually)
      const yearStartBalance = currentBalance;
      const interestEarned = (yearStartBalance + annualContribution / 2) * (epfRate / 100);
      currentBalance = yearStartBalance + annualContribution + interestEarned;
      totalContributions += annualContribution;
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        age: currentAge + year,
        salary: Math.round(currentSalary),
        employeeContrib: Math.round(monthlyEmployeeContrib * 12),
        employerContrib: Math.round(monthlyEmployerContrib * 12),
        totalContrib: Math.round(annualContribution),
        interest: Math.round(interestEarned),
        balance: Math.round(currentBalance)
      });
    }
    
    const maturityAmount = currentBalance;
    const totalInterest = maturityAmount - totalContributions;
    
    // Tax implications
    const taxFreeAmount = maturityAmount; // EPF is tax-free if withdrawn after 5 years
    
    // Withdrawal options
    const pensionAmount = calculatePension(basicSalary, yearsToRetirement);
    const partialWithdrawalLimit = Math.min(maturityAmount * 0.75, 5000000); // 75% or 50L
    
    // Monthly pension calculation (EPS)
    const averageSalary = (basicSalary + currentSalary) / 2;
    const pensionableService = Math.min(yearsToRetirement, 35);
    const monthlyPension = (averageSalary * pensionableService) / 70;
    
    return {
      currentAge,
      retirementAge,
      yearsToRetirement,
      basicSalary,
      currentEPFBalance: currentEPFBalance || 0,
      maturityAmount: Math.round(maturityAmount),
      totalContributions: Math.round(totalContributions),
      totalInterest: Math.round(totalInterest),
      epfRate,
      yearlyBreakdown,
      taxFreeAmount: Math.round(taxFreeAmount),
      partialWithdrawalLimit: Math.round(partialWithdrawalLimit),
      monthlyPension: Math.round(monthlyPension),
      finalSalary: Math.round(currentSalary),
      averageMonthlyContrib: Math.round(totalContributions / yearsToRetirement / 12)
    };
  };

  const calculatePension = (salary, years) => {
    // EPS calculation - simplified
    const pensionableService = Math.min(years, 35);
    const averageSalary = Math.min(salary, 15000); // EPS ceiling
    return (averageSalary * pensionableService) / 70;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentAge > 0 && basicSalary > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateEPFMaturity());
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
  }, [currentAge, basicSalary, currentEPFBalance, annualIncrement]);

  const pieData = result ? [
    { name: 'Current Balance', value: result.currentEPFBalance, color: '#6B7280' },
    { name: 'Future Contributions', value: result.totalContributions - result.currentEPFBalance, color: '#3B82F6' },
    { name: 'Interest Earned', value: result.totalInterest, color: '#10B981' }
  ].filter(item => item.value > 0) : [];

  const growthData = result ? result.yearlyBreakdown.map(year => ({
    year: year.year,
    balance: year.balance,
    contributions: year.totalContrib
  })) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('epf-maturity');
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
                  <BanknotesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EPF Maturity Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate Employee Provident Fund maturity at age 58</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('epf-maturity');
              
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
                EPF Details
              </h2>
              
              <div className="space-y-6">
                {/* Current Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Age
                  </label>
                  
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    {quickAges.map(age => (
                      <button
                        key={age}
                        onClick={() => setCurrentAge(age)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          currentAge === age
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.currentAge ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="30"
                      min="18"
                      max="58"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.currentAge && (
                    <p className="text-red-500 text-xs mt-1">{errors.currentAge}</p>
                  )}
                </div>

                {/* Basic Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Basic Salary (Monthly)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickSalaries.map(salary => (
                      <button
                        key={salary}
                        onClick={() => setBasicSalary(salary)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          basicSalary === salary
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        ₹{salary.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.basicSalary ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="60000"
                      min="15000"
                      max="500000"
                    />
                  </div>
                  {errors.basicSalary && (
                    <p className="text-red-500 text-xs mt-1">{errors.basicSalary}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">EPF contribution is calculated on basic salary</p>
                </div>

                {/* Current EPF Balance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current EPF Balance (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={currentEPFBalance}
                      onChange={(e) => setCurrentEPFBalance(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Your existing EPF account balance</p>
                </div>

                {/* Annual Increment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Annual Salary Increment (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={annualIncrement}
                      onChange={(e) => setAnnualIncrement(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.annualIncrement ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="8"
                      min="0"
                      max="50"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.annualIncrement && (
                    <p className="text-red-500 text-xs mt-1">{errors.annualIncrement}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Typical range: 6-12% per annum</p>
                </div>
              </div>
            </div>

            {/* EPF Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                EPF Benefits
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">🛡️</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Tax Free</div>
                    <div className="text-gray-600 dark:text-gray-300">Completely tax-free if withdrawn after 5 years</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📈</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Guaranteed Returns</div>
                    <div className="text-gray-600 dark:text-gray-300">Government-backed interest rate (currently 8.15%)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🏦</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Employer Contribution</div>
                    <div className="text-gray-600 dark:text-gray-300">12% employer contribution (3.67% to EPF)</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your EPF projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* EPF Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    EPF Maturity Projection (Age 58)
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">EPF Maturity Amount</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.maturityAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Tax-free withdrawal
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Contributions</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalContributions.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Interest Earned</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.totalInterest.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Years to Retirement</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.yearsToRetirement} Years
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Interest Rate</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        {result.epfRate}% p.a.
                      </div>
                    </div>
                  </div>

                  {/* Additional Benefits */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Monthly Pension (EPS):</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.monthlyPension.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Final Salary:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.finalSalary.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Avg Monthly Contribution:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.averageMonthlyContrib.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Partial Withdrawal Limit:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.partialWithdrawalLimit.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EPF Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">EPF Composition</h3>
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

                {/* Growth Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">EPF Growth Over Time</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={growthData}>
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
                        <Line type="monotone" dataKey="balance" stroke="#10B981" name="EPF Balance" strokeWidth={3} />
                        <Line type="monotone" dataKey="contributions" stroke="#3B82F6" name="Annual Contribution" strokeWidth={2} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise EPF Growth</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.slice(0, 8).map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Age: {year.age} | Salary: ₹{year.salary.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            Contribution: ₹{year.totalContrib.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Balance: ₹{year.balance.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            Interest: ₹{year.interest.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                    {result.yearlyBreakdown.length > 8 && (
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        ... and {result.yearlyBreakdown.length - 8} more years
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <BanknotesIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate EPF Maturity</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your details to project EPF balance at retirement
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

export default EPFMaturityPage;