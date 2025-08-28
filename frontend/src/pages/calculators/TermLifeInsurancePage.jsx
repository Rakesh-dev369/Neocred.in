import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ShieldCheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const TermLifeInsurancePage = () => {
  const [age, setAge] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [existingLoans, setExistingLoans] = useState('');
  const [dependents, setDependents] = useState('');
  const [lifestyle, setLifestyle] = useState('moderate');
  const [existingInsurance, setExistingInsurance] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickIncomes = [300000, 500000, 800000, 1200000, 2000000, 3000000];
  const quickAges = [25, 30, 35, 40, 45, 50];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!age || age < 18) {
      newErrors.age = 'Minimum age 18 required';
    } else if (age > 65) {
      newErrors.age = 'Maximum age 65 allowed';
    }
    
    if (!annualIncome || annualIncome < 100000) {
      newErrors.annualIncome = 'Minimum ₹1,00,000 required';
    } else if (annualIncome > 50000000) {
      newErrors.annualIncome = 'Maximum ₹5 crore allowed';
    }
    
    if (!dependents || dependents < 0) {
      newErrors.dependents = 'Number of dependents required';
    } else if (dependents > 10) {
      newErrors.dependents = 'Maximum 10 dependents allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTermLifeInsurance = () => {
    // Basic coverage calculation methods
    
    // Method 1: Income Replacement (10-15x annual income)
    const incomeMultiplier = lifestyle === 'basic' ? 10 : lifestyle === 'moderate' ? 12 : 15;
    const incomeReplacementCover = annualIncome * incomeMultiplier;
    
    // Method 2: Human Life Value (HLV)
    const workingYears = Math.max(1, 60 - age);
    const inflationRate = 0.06;
    const discountRate = 0.08;
    const realDiscountRate = (discountRate - inflationRate) / (1 + inflationRate);
    
    const hlvCover = annualIncome * (1 - Math.pow(1 + realDiscountRate, -workingYears)) / realDiscountRate;
    
    // Method 3: Needs-based calculation
    const emergencyFund = annualIncome * 1; // 1 year income
    const childEducationCost = dependents * 1500000; // 15L per child
    const spouseSupport = dependents > 0 ? annualIncome * 5 : 0; // 5 years support
    const liabilityBuffer = (existingLoans || 0) * 1.2; // 20% buffer
    
    const needsBasedCover = emergencyFund + childEducationCost + spouseSupport + liabilityBuffer;
    
    // Final recommendation (highest of all methods)
    const recommendedCover = Math.max(incomeReplacementCover, hlvCover, needsBasedCover);
    const netCoverNeeded = Math.max(0, recommendedCover - (existingInsurance || 0));
    
    // Premium estimation based on age and coverage
    const basePremiumRate = getBasePremiumRate(age);
    const lifestyleMultiplier = lifestyle === 'basic' ? 0.9 : lifestyle === 'moderate' ? 1 : 1.2;
    const estimatedPremium = (netCoverNeeded / 100000) * basePremiumRate * lifestyleMultiplier;
    
    // Coverage breakdown
    const coverageBreakdown = [
      { component: 'Income Replacement', amount: Math.round(incomeReplacementCover), percentage: ((incomeReplacementCover / recommendedCover) * 100).toFixed(1) },
      { component: 'Emergency Fund', amount: Math.round(emergencyFund), percentage: ((emergencyFund / recommendedCover) * 100).toFixed(1) },
      { component: 'Child Education', amount: Math.round(childEducationCost), percentage: ((childEducationCost / recommendedCover) * 100).toFixed(1) },
      { component: 'Spouse Support', amount: Math.round(spouseSupport), percentage: ((spouseSupport / recommendedCover) * 100).toFixed(1) },
      { component: 'Loan Buffer', amount: Math.round(liabilityBuffer), percentage: ((liabilityBuffer / recommendedCover) * 100).toFixed(1) }
    ].filter(item => item.amount > 0);
    
    // Different coverage options
    const coverageOptions = [
      { level: 'Basic', multiplier: 8, cover: annualIncome * 8 },
      { level: 'Standard', multiplier: 12, cover: annualIncome * 12 },
      { level: 'Comprehensive', multiplier: 15, cover: annualIncome * 15 },
      { level: 'Premium', multiplier: 20, cover: annualIncome * 20 }
    ].map(option => ({
      ...option,
      cover: Math.round(option.cover),
      premium: Math.round((option.cover / 100000) * basePremiumRate * lifestyleMultiplier),
      premiumPercentage: ((option.cover / 100000) * basePremiumRate * lifestyleMultiplier / annualIncome * 100).toFixed(2)
    }));
    
    // Age-wise premium progression
    const premiumProgression = [];
    for (let futureAge = age; futureAge <= Math.min(age + 20, 65); futureAge += 5) {
      const futureRate = getBasePremiumRate(futureAge);
      premiumProgression.push({
        age: futureAge,
        premium: Math.round((netCoverNeeded / 100000) * futureRate * lifestyleMultiplier)
      });
    }
    
    return {
      age,
      annualIncome,
      dependents,
      workingYears,
      recommendedCover: Math.round(recommendedCover),
      netCoverNeeded: Math.round(netCoverNeeded),
      estimatedPremium: Math.round(estimatedPremium),
      premiumPercentage: ((estimatedPremium / annualIncome) * 100).toFixed(2),
      coverageBreakdown,
      coverageOptions,
      premiumProgression,
      incomeReplacementCover: Math.round(incomeReplacementCover),
      hlvCover: Math.round(hlvCover),
      needsBasedCover: Math.round(needsBasedCover),
      existingInsurance: existingInsurance || 0,
      lifestyle
    };
  };

  const getBasePremiumRate = (currentAge) => {
    // Premium per lakh of coverage (annual)
    if (currentAge <= 25) return 400;
    if (currentAge <= 30) return 500;
    if (currentAge <= 35) return 700;
    if (currentAge <= 40) return 1000;
    if (currentAge <= 45) return 1500;
    if (currentAge <= 50) return 2200;
    if (currentAge <= 55) return 3200;
    if (currentAge <= 60) return 4800;
    return 7000;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (age > 0 && annualIncome > 0 && dependents >= 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateTermLifeInsurance());
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
  }, [age, annualIncome, existingLoans, dependents, lifestyle, existingInsurance]);

  const pieData = result ? result.coverageBreakdown.map((item, index) => ({
    name: item.component,
    value: item.amount,
    color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][index % 5]
  })) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('term-life-insurance');
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
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Term Life Insurance Estimator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate ideal life insurance coverage for your family</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('term-life-insurance');
              
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
                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Age
                  </label>
                  
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    {quickAges.map(ageVal => (
                      <button
                        key={ageVal}
                        onClick={() => setAge(ageVal)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          age === ageVal
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.age ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="30"
                      min="18"
                      max="65"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.age && (
                    <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                  )}
                </div>

                {/* Annual Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Income
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickIncomes.map(income => (
                      <button
                        key={income}
                        onClick={() => setAnnualIncome(income)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          annualIncome === income
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
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.annualIncome ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="1200000"
                      min="100000"
                      max="50000000"
                    />
                  </div>
                  {errors.annualIncome && (
                    <p className="text-red-500 text-xs mt-1">{errors.annualIncome}</p>
                  )}
                </div>

                {/* Number of Dependents */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Dependents
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={dependents}
                      onChange={(e) => setDependents(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.dependents ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="2"
                      min="0"
                      max="10"
                    />
                  </div>
                  {errors.dependents && (
                    <p className="text-red-500 text-xs mt-1">{errors.dependents}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Spouse, children, parents, etc.</p>
                </div>

                {/* Existing Loans */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Outstanding Loans (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={existingLoans}
                      onChange={(e) => setExistingLoans(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Home loan, car loan, personal loan, etc.</p>
                </div>

                {/* Lifestyle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Lifestyle & Risk Profile
                  </label>
                  <div className="space-y-2">
                    {[
                      { key: 'basic', name: 'Basic', desc: 'Conservative lifestyle, lower coverage' },
                      { key: 'moderate', name: 'Moderate', desc: 'Balanced approach, standard coverage' },
                      { key: 'premium', name: 'Premium', desc: 'Higher lifestyle, comprehensive coverage' }
                    ].map(option => (
                      <button
                        key={option.key}
                        onClick={() => setLifestyle(option.key)}
                        className={`w-full p-3 rounded-lg border text-left transition-colors ${
                          lifestyle === option.key
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-medium">{option.name}</div>
                        <div className="text-xs opacity-75">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Existing Insurance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Existing Life Insurance (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={existingInsurance}
                      onChange={(e) => setExistingInsurance(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Current life insurance coverage amount</p>
                </div>
              </div>
            </div>

            {/* Insurance Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Life Insurance Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">🎯</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Buy Early</div>
                    <div className="text-gray-600 dark:text-gray-300">Younger age means lower premiums</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📋</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Term Insurance</div>
                    <div className="text-gray-600 dark:text-gray-300">Pure protection, no investment component</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🔄</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Review Regularly</div>
                    <div className="text-gray-600 dark:text-gray-300">Update coverage with life changes</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Analyzing your insurance needs</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Insurance Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Life Insurance Recommendation
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Recommended Coverage</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.recommendedCover.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        {(result.recommendedCover / result.annualIncome).toFixed(1)}x Annual Income
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Net Coverage Needed</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.netCoverNeeded.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Est. Annual Premium</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.estimatedPremium.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Premium % of Income</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.premiumPercentage}%
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Working Years Left</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        {result.workingYears} Years
                      </div>
                    </div>
                  </div>

                  {result.existingInsurance > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Existing Coverage: ₹{result.existingInsurance.toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>

                {/* Coverage Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Coverage Breakdown</h3>
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
                  
                  <div className="mt-4 space-y-2">
                    {result.coverageBreakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{item.component}</span>
                        <div className="text-right">
                          <span className="text-sm text-gray-600 dark:text-gray-400">₹{item.amount.toLocaleString()}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500 ml-2">({item.percentage}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coverage Options */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Coverage Options</h3>
                  <div className="space-y-3">
                    {result.coverageOptions.map((option, index) => (
                      <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                        option.level === 'Standard' ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-900/20'
                      }`}>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {option.level} ({option.multiplier}x Income)
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Premium: {option.premiumPercentage}% of income
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            ₹{option.cover.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            ₹{option.premium.toLocaleString()}/year
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium Progression */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Premium by Age</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={result.premiumProgression}>
                        <XAxis dataKey="age" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Annual Premium']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="premium" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Calculation Methods */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Calculation Methods</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Income Replacement Method</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{(result.incomeReplacementCover / result.annualIncome).toFixed(0)}x annual income</div>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ₹{result.incomeReplacementCover.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Human Life Value (HLV)</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Present value of future earnings</div>
                      </div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        ₹{result.hlvCover.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Needs-based Calculation</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Specific financial obligations</div>
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        ₹{result.needsBasedCover.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ShieldCheckIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Life Insurance Need</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your details to get personalized coverage recommendations
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

export default TermLifeInsurancePage;