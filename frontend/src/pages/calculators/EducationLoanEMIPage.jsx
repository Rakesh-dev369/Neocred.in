import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, AcademicCapIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';

const EducationLoanEMIPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [moratoriumPeriod, setMoratoriumPeriod] = useState('');
  const [courseType, setCourseType] = useState('domestic');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickAmounts = [500000, 1000000, 2000000, 4000000, 7500000, 15000000];
  const quickTenures = [5, 7, 10, 12, 15, 20];

  const courseTypes = {
    domestic: {
      name: 'Domestic Education',
      maxAmount: 1000000,
      interestRate: 9.5,
      collateralRequired: false,
      description: 'Studies within India'
    },
    abroad: {
      name: 'Foreign Education',
      maxAmount: 15000000,
      interestRate: 11.5,
      collateralRequired: true,
      description: 'Studies abroad'
    },
    professional: {
      name: 'Professional Courses',
      maxAmount: 2000000,
      interestRate: 10.0,
      collateralRequired: false,
      description: 'Medical, Engineering, MBA etc.'
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    const selectedCourse = courseTypes[courseType];
    
    if (!loanAmount || loanAmount < 50000) {
      newErrors.loanAmount = 'Minimum ₹50,000 required';
    } else if (loanAmount > selectedCourse.maxAmount) {
      newErrors.loanAmount = `Maximum ₹${(selectedCourse.maxAmount/100000).toFixed(0)}L for ${selectedCourse.name}`;
    }
    
    if (!interestRate || interestRate < 5) {
      newErrors.interestRate = 'Minimum 5% required';
    } else if (interestRate > 20) {
      newErrors.interestRate = 'Maximum 20% allowed';
    }
    
    if (!tenure || tenure < 3) {
      newErrors.tenure = 'Minimum 3 years required';
    } else if (tenure > 20) {
      newErrors.tenure = 'Maximum 20 years allowed';
    }
    
    if (moratoriumPeriod !== '' && (moratoriumPeriod < 0 || moratoriumPeriod > 5)) {
      newErrors.moratoriumPeriod = 'Moratorium period: 0-5 years';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEducationLoanEMI = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = tenure * 12;
    const moratoriumMonths = moratoriumPeriod * 12;
    
    // During moratorium, only interest accumulates
    let accumulatedInterest = 0;
    let principalAfterMoratorium = P;
    
    if (moratoriumMonths > 0) {
      // Simple interest during moratorium (some banks use compound)
      accumulatedInterest = P * (interestRate / 100) * moratoriumPeriod;
      principalAfterMoratorium = P + accumulatedInterest;
    }
    
    // EMI calculation after moratorium
    const emi = (principalAfterMoratorium * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let remainingPrincipal = principalAfterMoratorium;
    
    // Moratorium years
    for (let year = 1; year <= moratoriumPeriod; year++) {
      const yearlyInterest = P * (interestRate / 100);
      yearlyBreakdown.push({
        year: `Year ${year} (Moratorium)`,
        emi: 0,
        principal: 0,
        interest: Math.round(yearlyInterest),
        balance: Math.round(P + (yearlyInterest * year))
      });
    }
    
    // Repayment years
    for (let year = moratoriumPeriod + 1; year <= moratoriumPeriod + tenure; year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      
      for (let month = 1; month <= 12; month++) {
        const monthlyInterest = remainingPrincipal * r;
        const monthlyPrincipal = emi - monthlyInterest;
        
        yearlyInterest += monthlyInterest;
        yearlyPrincipal += monthlyPrincipal;
        remainingPrincipal -= monthlyPrincipal;
        
        if (remainingPrincipal <= 0) break;
      }
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        emi: Math.round(emi * 12),
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        balance: Math.max(0, Math.round(remainingPrincipal))
      });
      
      if (remainingPrincipal <= 0) break;
    }
    
    // Tax benefits calculation
    const taxBenefitOnInterest = Math.min(totalInterest, 800000) * 0.3; // Section 80E
    const processingFee = Math.min(P * 0.01, 50000); // 1% or max 50k
    
    // Income requirements
    const recommendedIncome = emi * 3; // 3x EMI rule
    const debtToIncomeRatio = 40; // Max 40% of income
    
    return {
      loanAmount: P,
      interestRate,
      tenure,
      moratoriumPeriod,
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      accumulatedInterest: Math.round(accumulatedInterest),
      principalAfterMoratorium: Math.round(principalAfterMoratorium),
      yearlyBreakdown,
      taxBenefitOnInterest: Math.round(taxBenefitOnInterest),
      processingFee: Math.round(processingFee),
      recommendedIncome: Math.round(recommendedIncome),
      courseType: courseTypes[courseType].name,
      collateralRequired: courseTypes[courseType].collateralRequired
    };
  };

  useEffect(() => {
    const selectedCourse = courseTypes[courseType];
    setInterestRate(selectedCourse.interestRate);
  }, [courseType]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loanAmount > 0 && interestRate > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateEducationLoanEMI());
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
  }, [loanAmount, interestRate, tenure, moratoriumPeriod, courseType]);

  const pieData = result ? [
    { name: 'Principal', value: result.loanAmount, color: '#3B82F6' },
    { name: 'Interest', value: result.totalInterest, color: '#EF4444' }
  ] : [];

  const moratoriumImpactData = result ? [
    { name: 'Without Moratorium', amount: result.loanAmount, interest: result.totalInterest - result.accumulatedInterest },
    { name: 'With Moratorium', amount: result.principalAfterMoratorium, interest: result.totalInterest }
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
                  <AcademicCapIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Education Loan EMI Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate EMI for domestic and international education loans</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('education-loan-emi');
              
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

      {/* Education Loan Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Education Loan <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(With Moratorium Period)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Finance your education with flexible repayment options and tax benefits under Section 80E.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🎓</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Domestic</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Up to ₹10L</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🌍</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Abroad</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Up to ₹1.5Cr</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">⏰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Moratorium</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">0-5 Years</span>
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
                Loan Details
              </h2>
              
              <div className="space-y-6">
                {/* Course Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Course Type
                  </label>
                  <div className="space-y-2">
                    {Object.entries(courseTypes).map(([key, course]) => (
                      <button
                        key={key}
                        onClick={() => setCourseType(key)}
                        className={`w-full p-3 rounded-lg border text-left transition-colors ${
                          courseType === key
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{course.name}</div>
                            <div className="text-xs opacity-75">{course.description}</div>
                          </div>
                          <div className="text-xs">
                            <div>Max: ₹{(course.maxAmount/100000).toFixed(0)}L</div>
                            <div>Rate: {course.interestRate}%</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Amount
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.filter(amt => amt <= courseTypes[courseType].maxAmount).map(amount => (
                      <button
                        key={amount}
                        onClick={() => setLoanAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          loanAmount === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(amount/100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.loanAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="1000000"
                      min="50000"
                      max={courseTypes[courseType].maxAmount}
                    />
                  </div>
                  {errors.loanAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>
                  )}
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.interestRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="9.5"
                      min="5"
                      max="20"
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
                    Repayment Tenure (Years)
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
                      placeholder="10"
                      min="3"
                      max="20"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>

                {/* Moratorium Period */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Moratorium Period (Years) - Optional
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={moratoriumPeriod}
                      onChange={(e) => setMoratoriumPeriod(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.moratoriumPeriod ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="0"
                      min="0"
                      max="5"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.moratoriumPeriod && (
                    <p className="text-red-500 text-xs mt-1">{errors.moratoriumPeriod}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Period during which only interest is paid (course duration + 1 year)</p>
                </div>
              </div>
            </div>

            {/* Education Loan Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Education Loan Benefits
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">🎯</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Tax Benefits</div>
                    <div className="text-gray-600 dark:text-gray-300">Interest deduction under Section 80E (no limit)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">⏰</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Moratorium Period</div>
                    <div className="text-gray-600 dark:text-gray-300">No EMI during course + 1 year grace period</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🏦</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">No Collateral</div>
                    <div className="text-gray-600 dark:text-gray-300">Up to ₹7.5L without collateral for most courses</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your education loan EMI</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* EMI Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    {result.courseType} Loan Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly EMI (After Moratorium)</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.emi.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Loan Amount</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        ₹{result.loanAmount.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Total Interest</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.totalInterest.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Amount Payable</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalAmount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Moratorium Impact */}
                  {result.moratoriumPeriod > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Moratorium Impact</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                          <div className="text-xs text-orange-600 dark:text-orange-400">Interest During Moratorium</div>
                          <div className="text-lg font-bold text-orange-700 dark:text-orange-300">
                            ₹{result.accumulatedInterest.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                          <div className="text-xs text-purple-600 dark:text-purple-400">Principal After Moratorium</div>
                          <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
                            ₹{result.principalAfterMoratorium.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Details */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Processing Fee:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.processingFee.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Recommended Income:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.recommendedIncome.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Tax Benefit (80E):</span>
                        <span className="font-medium text-green-600 dark:text-green-400 ml-2">
                          ₹{result.taxBenefitOnInterest.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Collateral Required:</span>
                        <span className={`font-medium ml-2 ${result.collateralRequired ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                          {result.collateralRequired ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principal vs Interest Pie Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Breakdown</h3>
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

                {/* Moratorium Impact Comparison */}
                {result.moratoriumPeriod > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Moratorium Impact</h3>
                    <div className="w-full overflow-hidden">
                      <ResponsiveContainer width="100%" height={250} minWidth={250}>
                        <BarChart data={moratoriumImpactData}>
                          <XAxis dataKey="name" />
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
                          <Bar dataKey="amount" fill="#3B82F6" name="Principal Amount" />
                          <Bar dataKey="interest" fill="#EF4444" name="Total Interest" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Payment Schedule</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.slice(0, 8).map((year, index) => (
                      <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                        year.emi === 0 ? 'bg-orange-50 dark:bg-orange-900/20' : 'bg-gray-50 dark:bg-gray-900/20'
                      }`}>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                          {year.emi === 0 && (
                            <div className="text-xs text-orange-600 dark:text-orange-400">Interest Only</div>
                          )}
                        </div>
                        <div className="text-right">
                          {year.emi > 0 && (
                            <div className="text-sm text-blue-600 dark:text-blue-400">
                              EMI: ₹{year.emi.toLocaleString()}
                            </div>
                          )}
                          <div className="text-sm text-red-600 dark:text-red-400">
                            Interest: ₹{year.interest.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Balance: ₹{year.balance.toLocaleString()}
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
                  <AcademicCapIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Education Loan EMI</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter loan details to calculate EMI with moratorium period
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

export default EducationLoanEMIPage;