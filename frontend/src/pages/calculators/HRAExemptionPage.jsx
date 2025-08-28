import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, HomeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const HRAExemptionPage = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [hraReceived, setHraReceived] = useState('');
  const [rentPaid, setRentPaid] = useState('');
  const [cityType, setCityType] = useState('metro');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickSalaries = [30000, 50000, 75000, 100000, 150000, 200000];
  const quickRents = [10000, 15000, 20000, 30000, 40000, 50000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!basicSalary || basicSalary < 10000) {
      newErrors.basicSalary = 'Minimum ₹10,000 required';
    } else if (basicSalary > 1000000) {
      newErrors.basicSalary = 'Maximum ₹10,00,000 allowed';
    }
    
    if (!hraReceived || hraReceived < 0) {
      newErrors.hraReceived = 'HRA amount required';
    } else if (hraReceived > basicSalary * 2) {
      newErrors.hraReceived = 'HRA seems too high';
    }
    
    if (!rentPaid || rentPaid < 0) {
      newErrors.rentPaid = 'Rent amount required';
    } else if (rentPaid > 200000) {
      newErrors.rentPaid = 'Maximum ₹2,00,000 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateHRAExemption = () => {
    // HRA exemption calculation as per IT rules
    const annualBasicSalary = basicSalary * 12;
    const annualHRAReceived = hraReceived * 12;
    const annualRentPaid = rentPaid * 12;
    
    // Three conditions for HRA exemption
    const condition1 = annualHRAReceived; // Actual HRA received
    
    const condition2 = cityType === 'metro' 
      ? annualBasicSalary * 0.5  // 50% of basic salary for metro cities
      : annualBasicSalary * 0.4; // 40% of basic salary for non-metro cities
    
    const condition3 = Math.max(0, annualRentPaid - (annualBasicSalary * 0.1)); // Rent paid minus 10% of basic salary
    
    // HRA exemption is minimum of all three conditions
    const hraExemption = Math.min(condition1, condition2, condition3);
    const taxableHRA = Math.max(0, annualHRAReceived - hraExemption);
    
    // Tax savings calculation (assuming 30% tax bracket)
    const taxSavings30 = hraExemption * 0.3;
    const taxSavings20 = hraExemption * 0.2;
    const taxSavings10 = hraExemption * 0.1;
    
    // Monthly breakdown
    const monthlyExemption = hraExemption / 12;
    const monthlyTaxableHRA = taxableHRA / 12;
    
    // Rent to salary ratio analysis
    const rentToSalaryRatio = (rentPaid / basicSalary) * 100;
    const recommendedRentRatio = cityType === 'metro' ? 30 : 25; // Recommended percentage
    
    // Optimization suggestions
    const optimizationSuggestions = [];
    
    if (condition3 < condition1 && condition3 < condition2) {
      const optimalRent = (annualBasicSalary * 0.1) + Math.min(condition1, condition2);
      optimizationSuggestions.push({
        type: 'Increase Rent',
        suggestion: `Consider rent up to ₹${Math.round(optimalRent/12).toLocaleString()}/month for maximum exemption`,
        impact: Math.round((Math.min(condition1, condition2) - condition3) / 12)
      });
    }
    
    if (condition2 < condition1 && condition2 < condition3) {
      optimizationSuggestions.push({
        type: 'HRA Limit',
        suggestion: `HRA exemption limited by ${cityType === 'metro' ? '50%' : '40%'} of basic salary rule`,
        impact: 0
      });
    }
    
    if (rentToSalaryRatio > recommendedRentRatio + 10) {
      optimizationSuggestions.push({
        type: 'High Rent',
        suggestion: `Rent is ${rentToSalaryRatio.toFixed(1)}% of salary. Consider reducing to ${recommendedRentRatio}%`,
        impact: 0
      });
    }
    
    // Different city scenarios
    const cityComparison = [
      {
        city: 'Metro Cities',
        percentage: 50,
        exemption: Math.min(condition1, annualBasicSalary * 0.5, condition3),
        taxSaving: Math.min(condition1, annualBasicSalary * 0.5, condition3) * 0.3
      },
      {
        city: 'Non-Metro Cities',
        percentage: 40,
        exemption: Math.min(condition1, annualBasicSalary * 0.4, condition3),
        taxSaving: Math.min(condition1, annualBasicSalary * 0.4, condition3) * 0.3
      }
    ];
    
    return {
      basicSalary,
      hraReceived,
      rentPaid,
      cityType,
      annualBasicSalary,
      annualHRAReceived,
      annualRentPaid,
      condition1: Math.round(condition1),
      condition2: Math.round(condition2),
      condition3: Math.round(condition3),
      hraExemption: Math.round(hraExemption),
      taxableHRA: Math.round(taxableHRA),
      monthlyExemption: Math.round(monthlyExemption),
      monthlyTaxableHRA: Math.round(monthlyTaxableHRA),
      taxSavings30: Math.round(taxSavings30),
      taxSavings20: Math.round(taxSavings20),
      taxSavings10: Math.round(taxSavings10),
      rentToSalaryRatio: rentToSalaryRatio.toFixed(1),
      optimizationSuggestions,
      cityComparison
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (basicSalary > 0 && hraReceived >= 0 && rentPaid >= 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateHRAExemption());
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
  }, [basicSalary, hraReceived, rentPaid, cityType]);

  const pieData = result ? [
    { name: 'HRA Exemption', value: result.hraExemption, color: '#10B981' },
    { name: 'Taxable HRA', value: result.taxableHRA, color: '#EF4444' }
  ].filter(item => item.value > 0) : [];

  const conditionsData = result ? [
    { name: 'HRA Received', amount: result.condition1, description: 'Actual HRA received from employer' },
    { name: `${result.cityType === 'metro' ? '50%' : '40%'} of Basic`, amount: result.condition2, description: `${result.cityType === 'metro' ? '50%' : '40%'} of basic salary` },
    { name: 'Rent - 10% Basic', amount: result.condition3, description: 'Rent paid minus 10% of basic salary' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('hra-exemption');
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
                  <HomeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HRA Exemption Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate House Rent Allowance tax exemption</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('hra-exemption');
              
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
                HRA Details
              </h2>
              
              <div className="space-y-6">
                {/* City Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    City Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setCityType('metro')}
                      className={`p-3 rounded-lg border transition-colors ${
                        cityType === 'metro'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Metro Cities</div>
                      <div className="text-xs opacity-75">Mumbai, Delhi, Kolkata, Chennai</div>
                      <div className="text-xs font-medium mt-1">50% of Basic Salary</div>
                    </button>
                    <button
                      onClick={() => setCityType('non-metro')}
                      className={`p-3 rounded-lg border transition-colors ${
                        cityType === 'non-metro'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      }`}
                    >
                      <div className="font-medium">Non-Metro Cities</div>
                      <div className="text-xs opacity-75">All other cities</div>
                      <div className="text-xs font-medium mt-1">40% of Basic Salary</div>
                    </button>
                  </div>
                </div>

                {/* Basic Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Basic Salary
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
                      placeholder="75000"
                      min="10000"
                      max="1000000"
                    />
                  </div>
                  {errors.basicSalary && (
                    <p className="text-red-500 text-xs mt-1">{errors.basicSalary}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Basic salary (excluding allowances)</p>
                </div>

                {/* HRA Received */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly HRA Received
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={hraReceived}
                      onChange={(e) => setHraReceived(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.hraReceived ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="30000"
                      min="0"
                    />
                  </div>
                  {errors.hraReceived && (
                    <p className="text-red-500 text-xs mt-1">{errors.hraReceived}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">HRA component in your salary</p>
                </div>

                {/* Rent Paid */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Rent Paid
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickRents.map(rent => (
                      <button
                        key={rent}
                        onClick={() => setRentPaid(rent)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          rentPaid === rent
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                        }`}
                      >
                        ₹{rent.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={rentPaid}
                      onChange={(e) => setRentPaid(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.rentPaid ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="25000"
                      min="0"
                      max="200000"
                    />
                  </div>
                  {errors.rentPaid && (
                    <p className="text-red-500 text-xs mt-1">{errors.rentPaid}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Actual rent paid for accommodation</p>
                </div>
              </div>
            </div>

            {/* HRA Rules */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                HRA Exemption Rules
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">📋</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Minimum of Three</div>
                    <div className="text-gray-600 dark:text-gray-300">Exemption is minimum of: HRA received, 50%/40% of basic, Rent - 10% of basic</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">🏙️</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">City Classification</div>
                    <div className="text-gray-600 dark:text-gray-300">Metro: 50% of basic | Non-metro: 40% of basic</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">📄</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Documentation</div>
                    <div className="text-gray-600 dark:text-gray-300">Rent receipts and rental agreement required</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your HRA exemption</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* HRA Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    HRA Exemption Analysis
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Annual HRA Exemption</div>
                      <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.hraExemption.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Monthly: ₹{result.monthlyExemption.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Taxable HRA</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.taxableHRA.toLocaleString()}
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400">
                        Monthly: ₹{result.monthlyTaxableHRA.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Rent-to-Salary Ratio</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        {result.rentToSalaryRatio}%
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">
                        {result.cityType === 'metro' ? 'Recommended: ≤30%' : 'Recommended: ≤25%'}
                      </div>
                    </div>
                  </div>

                  {/* Tax Savings */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Savings by Bracket</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                        <div className="text-xs text-yellow-600 dark:text-yellow-400">10% Tax Bracket</div>
                        <div className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                          ₹{result.taxSavings10.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                        <div className="text-xs text-orange-600 dark:text-orange-400">20% Tax Bracket</div>
                        <div className="text-lg font-bold text-orange-700 dark:text-orange-300">
                          ₹{result.taxSavings20.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                        <div className="text-xs text-red-600 dark:text-red-400">30% Tax Bracket</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-300">
                          ₹{result.taxSavings30.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HRA Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HRA vs Taxable Amount</h3>
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

                {/* Three Conditions */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HRA Calculation Conditions</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={conditionsData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                          labelFormatter={(label) => conditionsData.find(item => item.name === label)?.description}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="amount" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Exemption Rule:</strong> Minimum of all three conditions = ₹{result.hraExemption.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* City Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Metro vs Non-Metro Comparison</h3>
                  <div className="space-y-3">
                    {result.cityComparison.map((city, index) => (
                      <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                        city.city.toLowerCase().includes(result.cityType) ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-900/20'
                      }`}>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {city.city} ({city.percentage}% of Basic)
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Tax Saving: ₹{city.taxSaving.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          ₹{city.exemption.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optimization Suggestions */}
                {result.optimizationSuggestions.length > 0 && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-blue-600">💡</span>
                      Optimization Suggestions
                    </h3>
                    <div className="space-y-3">
                      {result.optimizationSuggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-blue-600 text-sm">•</span>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{suggestion.type}</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">{suggestion.suggestion}</div>
                            {suggestion.impact > 0 && (
                              <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                                Potential monthly benefit: ₹{suggestion.impact.toLocaleString()}
                              </div>
                            )}
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
                  <HomeIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate HRA Exemption</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your salary and rent details to calculate tax exemption
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

export default HRAExemptionPage;