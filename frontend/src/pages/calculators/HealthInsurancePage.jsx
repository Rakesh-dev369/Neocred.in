import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const HealthInsurancePage = () => {
  useScrollToTop();
  const [age, setAge] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');
  const [city, setCity] = useState('metro');
  const [familyMembers, setFamilyMembers] = useState(1);
  const [preExistingConditions, setPreExistingConditions] = useState(false);
  const [smokingStatus, setSmokingStatus] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [comparisonData, setComparisonData] = useState([]);

  const quickCoverages = [300000, 500000, 1000000, 1500000, 2500000, 5000000];
  
  const cityTypes = [
    { value: 'metro', label: 'Metro Cities', multiplier: 1.2 },
    { value: 'tier1', label: 'Tier 1 Cities', multiplier: 1.0 },
    { value: 'tier2', label: 'Tier 2 Cities', multiplier: 0.9 },
    { value: 'rural', label: 'Rural Areas', multiplier: 0.8 }
  ];

  const ageGroups = [
    { min: 18, max: 25, basePremium: 3000 },
    { min: 26, max: 35, basePremium: 4500 },
    { min: 36, max: 45, basePremium: 7000 },
    { min: 46, max: 55, basePremium: 12000 },
    { min: 56, max: 65, basePremium: 20000 },
    { min: 66, max: 100, basePremium: 35000 }
  ];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!age || age < 18) {
      newErrors.age = 'Minimum age 18 required';
    } else if (age > 80) {
      newErrors.age = 'Maximum age 80 allowed';
    }
    
    if (!coverageAmount || coverageAmount < 100000) {
      newErrors.coverageAmount = 'Minimum ₹1,00,000 coverage required';
    } else if (coverageAmount > 10000000) {
      newErrors.coverageAmount = 'Maximum ₹1,00,00,000 coverage allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePremium = () => {
    // Find age group
    const ageGroup = ageGroups.find(group => age >= group.min && age <= group.max);
    if (!ageGroup) return null;

    // Base premium calculation
    let basePremium = ageGroup.basePremium;
    
    // Coverage amount factor (per lakh)
    const coverageMultiplier = coverageAmount / 500000; // Base coverage 5L
    basePremium *= Math.sqrt(coverageMultiplier);
    
    // City multiplier
    const cityMultiplier = cityTypes.find(c => c.value === city)?.multiplier || 1;
    basePremium *= cityMultiplier;
    
    // Family members multiplier
    const familyMultiplier = familyMembers === 1 ? 1 : 
                           familyMembers === 2 ? 1.8 :
                           familyMembers === 3 ? 2.5 :
                           familyMembers === 4 ? 3.0 : 3.5;
    basePremium *= familyMultiplier;
    
    // Pre-existing conditions
    if (preExistingConditions) {
      basePremium *= 1.4;
    }
    
    // Smoking status
    if (smokingStatus) {
      basePremium *= 1.25;
    }

    const annualPremium = Math.round(basePremium);
    const monthlyPremium = Math.round(annualPremium / 12);
    
    // Calculate comparison data for different coverage amounts
    const comparisons = quickCoverages.map(coverage => {
      const tempMultiplier = Math.sqrt(coverage / 500000);
      const tempPremium = Math.round(ageGroup.basePremium * tempMultiplier * cityMultiplier * familyMultiplier * 
                                   (preExistingConditions ? 1.4 : 1) * (smokingStatus ? 1.25 : 1));
      return {
        coverage: `₹${(coverage/100000).toFixed(0)}L`,
        premium: tempPremium,
        monthly: Math.round(tempPremium / 12)
      };
    });

    setComparisonData(comparisons);
    
    return {
      annualPremium,
      monthlyPremium,
      coverageAmount,
      age,
      city: cityTypes.find(c => c.value === city)?.label,
      familyMembers,
      preExistingConditions,
      smokingStatus,
      factors: {
        ageGroup: ageGroup.basePremium,
        cityMultiplier,
        familyMultiplier,
        conditionsMultiplier: preExistingConditions ? 1.4 : 1,
        smokingMultiplier: smokingStatus ? 1.25 : 1
      }
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (age > 0 && coverageAmount > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculatePremium());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
          setComparisonData([]);
        }
      } else {
        setResult(null);
        setComparisonData([]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [age, coverageAmount, city, familyMembers, preExistingConditions, smokingStatus]);

  const pieData = result ? [
    { name: 'Base Premium', value: result.factors.ageGroup, color: '#3B82F6' },
    { name: 'City Factor', value: result.factors.ageGroup * (result.factors.cityMultiplier - 1), color: '#10B981' },
    { name: 'Family Factor', value: result.factors.ageGroup * (result.factors.familyMultiplier - 1), color: '#F59E0B' },
    { name: 'Health Factors', value: result.factors.ageGroup * ((result.factors.conditionsMultiplier * result.factors.smokingMultiplier) - 1), color: '#EF4444' }
  ].filter(item => item.value > 0) : [];

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
                  <HeartIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Health Insurance Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estimate your health insurance premium</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('health-insurance');
              const difficulty = getToolDifficulty('health-insurance');
              
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

      {/* What is Health Insurance Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Health Insurance? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Medical Coverage)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Financial protection against medical expenses. Covers hospitalization, treatments, and healthcare costs.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🏥</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Medical Cover</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Cost Protection</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">👨‍👩‍👧‍👦</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Family Safety</span>
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
                Health Insurance Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                      errors.age ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="30"
                    min="18"
                    max="80"
                  />
                  {errors.age && (
                    <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: 18 years</span>
                    <span>Max: 80 years</span>
                  </div>
                </div>

                {/* Coverage Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Coverage Amount
                  </label>
                  
                  {/* Quick Coverage Buttons */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickCoverages.map(coverage => (
                      <button
                        key={coverage}
                        onClick={() => setCoverageAmount(coverage)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          coverageAmount === coverage
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(coverage/100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={coverageAmount}
                      onChange={(e) => setCoverageAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.coverageAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="500000"
                      min="100000"
                      max="10000000"
                    />
                  </div>
                  {errors.coverageAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.coverageAmount}</p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: ₹1,00,000</span>
                    <span>Max: ₹1,00,00,000</span>
                  </div>
                </div>

                {/* City Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    City Type
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {cityTypes.map(cityType => (
                      <option key={cityType.value} value={cityType.value}>
                        {cityType.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Family Members */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Family Members
                  </label>
                  <select
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(Number(e.target.value))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={1}>Individual (1 person)</option>
                    <option value={2}>Couple (2 people)</option>
                    <option value={3}>Small Family (3 people)</option>
                    <option value={4}>Family (4 people)</option>
                    <option value={5}>Large Family (5+ people)</option>
                  </select>
                </div>

                {/* Health Factors */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pre-existing Medical Conditions
                    </label>
                    <button
                      onClick={() => setPreExistingConditions(!preExistingConditions)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preExistingConditions ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preExistingConditions ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Smoking/Tobacco Use
                    </label>
                    <button
                      onClick={() => setSmokingStatus(!smokingStatus)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        smokingStatus ? 'bg-red-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          smokingStatus ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Insurance Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Health Insurance Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Buy early for lower premiums</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Compare network hospitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Check waiting periods</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Maintain healthy lifestyle</span>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your insurance details</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Premium Results */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Premium Estimate
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Annual Premium</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.annualPremium.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        For ₹{(result.coverageAmount/100000).toFixed(0)}L coverage
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Monthly Premium</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.monthlyPremium.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        EMI option available
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Coverage Details</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                        <div>Age: {result.age} years</div>
                        <div>City: {result.city}</div>
                        <div>Family: {result.familyMembers} member(s)</div>
                        {result.preExistingConditions && <div className="text-orange-600">Pre-existing conditions</div>}
                        {result.smokingStatus && <div className="text-red-600">Smoking/Tobacco use</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coverage Comparison */}
                {comparisonData.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Coverage Comparison</h3>
                    <div className="w-full overflow-x-auto">
                      <ResponsiveContainer width="100%" height={250} minWidth={300}>
                        <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <XAxis 
                            dataKey="coverage" 
                            tick={{ fill: 'currentColor', fontSize: 10 }}
                            className="text-gray-600 dark:text-gray-300"
                          />
                          <YAxis 
                            tick={{ fill: 'currentColor', fontSize: 10 }}
                            tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
                            className="text-gray-600 dark:text-gray-300"
                          />
                          <Tooltip 
                            formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Annual Premium']}
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              border: '1px solid rgba(0, 0, 0, 0.1)',
                              borderRadius: '8px'
                            }}
                          />
                          <Bar dataKey="premium" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <HeartIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Enter Insurance Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill in your details to get health insurance premium estimate
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

export default HealthInsurancePage;