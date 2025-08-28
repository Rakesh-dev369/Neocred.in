import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ShieldCheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';

const NPSReturnPage = () => {
  const [age, setAge] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [equityAllocation, setEquityAllocation] = useState(75);
  const [corporateAllocation, setCorporateAllocation] = useState(15);
  const [governmentAllocation, setGovernmentAllocation] = useState(10);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickContributions = [1000, 2000, 5000, 10000, 12500, 25000];
  const quickAges = [25, 30, 35, 40, 45, 50];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!age || age < 18) {
      newErrors.age = 'Minimum age 18 required';
    } else if (age > 65) {
      newErrors.age = 'Maximum age 65 allowed';
    }
    
    if (!monthlyContribution || monthlyContribution < 500) {
      newErrors.monthlyContribution = 'Minimum ₹500 required';
    } else if (monthlyContribution > 200000) {
      newErrors.monthlyContribution = 'Maximum ₹2,00,000 allowed';
    }
    
    const totalAllocation = equityAllocation + corporateAllocation + governmentAllocation;
    if (Math.abs(totalAllocation - 100) > 0.1) {
      newErrors.allocation = 'Total allocation must equal 100%';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateNPSReturn = () => {
    const retirementAge = 60;
    const yearsToRetirement = retirementAge - age;
    
    // Expected returns by asset class
    const equityReturn = 12;
    const corporateReturn = 8;
    const governmentReturn = 7;
    
    // Calculate weighted average return
    const weightedReturn = (
      (equityAllocation / 100) * equityReturn +
      (corporateAllocation / 100) * corporateReturn +
      (governmentAllocation / 100) * governmentReturn
    );
    
    // NPS calculations
    const totalMonths = yearsToRetirement * 12;
    const monthlyReturn = weightedReturn / 100 / 12;
    const annualContribution = monthlyContribution * 12;
    
    // Future value calculation
    const futureValue = monthlyContribution * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
    const totalContributions = monthlyContribution * totalMonths;
    const totalReturns = futureValue - totalContributions;
    
    // Maturity options at 60
    const minAnnuityAmount = futureValue * 0.4; // Minimum 40% for annuity
    const maxLumpsumAmount = futureValue * 0.6; // Maximum 60% lumpsum
    
    // Annuity calculations (assuming 6% annuity rate)
    const annuityRate = 0.06;
    const monthlyPension = (minAnnuityAmount * annuityRate) / 12;
    
    // Tax implications
    const taxFreeWithdrawal = maxLumpsumAmount; // Lumpsum is tax-free
    const taxablePension = monthlyPension * 12; // Pension is taxable
    
    // Year-wise breakdown
    const yearlyBreakdown = [];
    let cumulativeContribution = 0;
    let portfolioValue = 0;
    
    for (let year = 1; year <= Math.min(yearsToRetirement, 15); year++) {
      cumulativeContribution += annualContribution;
      portfolioValue = (portfolioValue + annualContribution) * (1 + weightedReturn / 100);
      
      yearlyBreakdown.push({
        year: `Year ${year}`,
        age: age + year,
        contribution: Math.round(cumulativeContribution),
        value: Math.round(portfolioValue),
        returns: Math.round(portfolioValue - cumulativeContribution)
      });
    }
    
    // Asset allocation breakdown
    const assetBreakdown = [
      { name: 'Equity', allocation: equityAllocation, expectedReturn: equityReturn },
      { name: 'Corporate Bonds', allocation: corporateAllocation, expectedReturn: corporateReturn },
      { name: 'Government Securities', allocation: governmentAllocation, expectedReturn: governmentReturn }
    ];
    
    return {
      age,
      retirementAge,
      yearsToRetirement,
      monthlyContribution,
      annualContribution: Math.round(annualContribution),
      totalContributions: Math.round(totalContributions),
      futureValue: Math.round(futureValue),
      totalReturns: Math.round(totalReturns),
      weightedReturn: weightedReturn.toFixed(2),
      minAnnuityAmount: Math.round(minAnnuityAmount),
      maxLumpsumAmount: Math.round(maxLumpsumAmount),
      monthlyPension: Math.round(monthlyPension),
      taxFreeWithdrawal: Math.round(taxFreeWithdrawal),
      taxablePension: Math.round(taxablePension),
      yearlyBreakdown,
      assetBreakdown,
      equityAllocation,
      corporateAllocation,
      governmentAllocation
    };
  };

  const updateAllocation = (type, value) => {
    const numValue = Number(value);
    if (type === 'equity') {
      setEquityAllocation(numValue);
      const remaining = 100 - numValue;
      const corpRatio = corporateAllocation / (corporateAllocation + governmentAllocation) || 0.6;
      setCorporateAllocation(Math.round(remaining * corpRatio));
      setGovernmentAllocation(Math.round(remaining * (1 - corpRatio)));
    } else if (type === 'corporate') {
      setCorporateAllocation(numValue);
      const remaining = 100 - numValue;
      const equityRatio = equityAllocation / (equityAllocation + governmentAllocation) || 0.88;
      setEquityAllocation(Math.round(remaining * equityRatio));
      setGovernmentAllocation(Math.round(remaining * (1 - equityRatio)));
    } else if (type === 'government') {
      setGovernmentAllocation(numValue);
      const remaining = 100 - numValue;
      const equityRatio = equityAllocation / (equityAllocation + corporateAllocation) || 0.83;
      setEquityAllocation(Math.round(remaining * equityRatio));
      setCorporateAllocation(Math.round(remaining * (1 - equityRatio)));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (age > 0 && monthlyContribution > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateNPSReturn());
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
  }, [age, monthlyContribution, equityAllocation, corporateAllocation, governmentAllocation]);

  const allocationData = result ? [
    { name: 'Equity', value: result.equityAllocation, color: '#10B981' },
    { name: 'Corporate Bonds', value: result.corporateAllocation, color: '#3B82F6' },
    { name: 'Government Securities', value: result.governmentAllocation, color: '#F59E0B' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('nps-return');
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
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NPS Return Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate National Pension System returns with asset allocation</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('nps-return');
              
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
                NPS Details
              </h2>
              
              <div className="space-y-6">
                {/* Current Age */}
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

                {/* Monthly Contribution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Contribution
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickContributions.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setMonthlyContribution(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          monthlyContribution === amount
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyContribution ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="5000"
                      min="500"
                      max="200000"
                    />
                  </div>
                  {errors.monthlyContribution && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyContribution}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Minimum ₹500, Maximum ₹2L per month</p>
                </div>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Asset Allocation</h2>
              
              <div className="space-y-4">
                {/* Equity */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Equity (Expected: 12%)
                    </label>
                    <span className="text-sm font-bold text-green-600">{equityAllocation}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="75"
                    value={equityAllocation}
                    onChange={(e) => updateAllocation('equity', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>75% (Max for NPS)</span>
                  </div>
                </div>

                {/* Corporate Bonds */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Corporate Bonds (Expected: 8%)
                    </label>
                    <span className="text-sm font-bold text-blue-600">{corporateAllocation}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={corporateAllocation}
                    onChange={(e) => updateAllocation('corporate', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-blue"
                  />
                </div>

                {/* Government Securities */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Government Securities (Expected: 7%)
                    </label>
                    <span className="text-sm font-bold text-yellow-600">{governmentAllocation}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={governmentAllocation}
                    onChange={(e) => updateAllocation('government', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-yellow"
                  />
                </div>

                {errors.allocation && (
                  <p className="text-red-500 text-xs">{errors.allocation}</p>
                )}
                
                <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2 border-t">
                  Total: {equityAllocation + corporateAllocation + governmentAllocation}%
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your NPS projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* NPS Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    NPS Maturity Projection (Age 60)
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Corpus at 60</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.futureValue.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Expected Return: {result.weightedReturn}% p.a.
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Contributions</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        ₹{result.totalContributions.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Returns</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalReturns.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Years to Retirement</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.yearsToRetirement} Years
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Monthly Pension</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.monthlyPension.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Maturity Options */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Maturity Options</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                        <div className="text-xs text-green-600 dark:text-green-400">Tax-free Lumpsum (Max 60%)</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-300">
                          ₹{result.maxLumpsumAmount.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <div className="text-xs text-blue-600 dark:text-blue-400">Annuity Amount (Min 40%)</div>
                        <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
                          ₹{result.minAnnuityAmount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Allocation Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Asset Allocation</h3>
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

                {/* Growth Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">NPS Growth Over Time</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={result.yearlyBreakdown}>
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
                        <Line type="monotone" dataKey="contribution" stroke="#3B82F6" name="Total Contributions" strokeWidth={2} />
                        <Line type="monotone" dataKey="value" stroke="#10B981" name="NPS Value" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Growth</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyBreakdown.slice(0, 8).map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Age: {year.age}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            Contributions: ₹{year.contribution.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Value: ₹{year.value.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            Returns: ₹{year.returns.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ShieldCheckIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate NPS Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your details to project NPS corpus and pension
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

export default NPSReturnPage;