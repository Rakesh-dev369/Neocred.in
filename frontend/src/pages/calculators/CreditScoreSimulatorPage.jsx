import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CreditCardIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, RadialBarChart, RadialBar } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const CreditScoreSimulatorPage = () => {
  const [currentScore, setCurrentScore] = useState('');
  const [creditUtilization, setCreditUtilization] = useState('');
  const [paymentHistory, setPaymentHistory] = useState(100);
  const [creditAge, setCreditAge] = useState('');
  const [newAccounts, setNewAccounts] = useState(0);
  const [creditMix, setCreditMix] = useState(3);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickScores = [550, 650, 700, 750, 800, 850];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!currentScore || currentScore < 300) {
      newErrors.currentScore = 'Minimum score 300 required';
    } else if (currentScore > 900) {
      newErrors.currentScore = 'Maximum score 900 allowed';
    }
    
    if (creditUtilization === '' || creditUtilization < 0) {
      newErrors.creditUtilization = 'Credit utilization required';
    } else if (creditUtilization > 100) {
      newErrors.creditUtilization = 'Maximum 100% allowed';
    }
    
    if (!creditAge || creditAge < 0) {
      newErrors.creditAge = 'Credit age required';
    } else if (creditAge > 50) {
      newErrors.creditAge = 'Maximum 50 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateCreditScore = () => {
    // Credit score factors and weights (CIBIL model approximation)
    const factors = {
      paymentHistory: { weight: 0.35, current: paymentHistory },
      creditUtilization: { weight: 0.30, current: creditUtilization },
      creditAge: { weight: 0.15, current: creditAge },
      creditMix: { weight: 0.10, current: creditMix },
      newCredit: { weight: 0.10, current: newAccounts }
    };
    
    // Calculate factor scores (0-100 scale)
    const paymentScore = Math.min(100, paymentHistory);
    const utilizationScore = Math.max(0, 100 - (creditUtilization * 2)); // Lower is better
    const ageScore = Math.min(100, (creditAge / 10) * 100); // 10+ years = 100
    const mixScore = Math.min(100, (creditMix / 5) * 100); // 5 types = 100
    const newCreditScore = Math.max(0, 100 - (newAccounts * 20)); // Each new account -20
    
    // Calculate weighted score
    const weightedScore = (
      paymentScore * factors.paymentHistory.weight +
      utilizationScore * factors.creditUtilization.weight +
      ageScore * factors.creditAge.weight +
      mixScore * factors.creditMix.weight +
      newCreditScore * factors.newCredit.weight
    );
    
    // Convert to CIBIL scale (300-900)
    const projectedScore = Math.round(300 + (weightedScore / 100) * 600);
    const scoreDifference = projectedScore - currentScore;
    
    // Score improvement scenarios
    const scenarios = [
      {
        name: 'Reduce Utilization to 10%',
        changes: { creditUtilization: 10 },
        impact: calculateScoreImpact({ ...factors, creditUtilization: { ...factors.creditUtilization, current: 10 } })
      },
      {
        name: 'Perfect Payment History',
        changes: { paymentHistory: 100 },
        impact: calculateScoreImpact({ ...factors, paymentHistory: { ...factors.paymentHistory, current: 100 } })
      },
      {
        name: 'No New Accounts (6 months)',
        changes: { newAccounts: 0 },
        impact: calculateScoreImpact({ ...factors, newCredit: { ...factors.newCredit, current: 0 } })
      },
      {
        name: 'Improve Credit Mix',
        changes: { creditMix: 5 },
        impact: calculateScoreImpact({ ...factors, creditMix: { ...factors.creditMix, current: 5 } })
      }
    ];
    
    // Timeline projection (6 months)
    const timelineProjection = [];
    for (let month = 1; month <= 6; month++) {
      // Gradual improvement assumptions
      const improvedUtilization = Math.max(10, creditUtilization - (month * 5));
      const improvedPayment = Math.min(100, paymentHistory + (month * 2));
      const improvedAge = creditAge + (month / 12);
      
      const monthlyScore = calculateMonthlyScore(improvedPayment, improvedUtilization, improvedAge, creditMix, Math.max(0, newAccounts - month));
      
      timelineProjection.push({
        month: `Month ${month}`,
        score: monthlyScore,
        utilization: Math.round(improvedUtilization),
        payment: Math.round(improvedPayment)
      });
    }
    
    // Credit score ranges and benefits
    const scoreRanges = [
      { range: '300-549', category: 'Poor', color: '#EF4444', benefits: ['Difficulty getting credit', 'High interest rates', 'Security deposits required'] },
      { range: '550-649', category: 'Fair', color: '#F59E0B', benefits: ['Limited credit options', 'Higher interest rates', 'Some approvals possible'] },
      { range: '650-749', category: 'Good', color: '#3B82F6', benefits: ['Better loan terms', 'Lower interest rates', 'More credit options'] },
      { range: '750-900', category: 'Excellent', color: '#10B981', benefits: ['Best interest rates', 'Premium credit cards', 'Easy loan approvals'] }
    ];
    
    const currentRange = scoreRanges.find(range => {
      const [min, max] = range.range.split('-').map(Number);
      return currentScore >= min && currentScore <= max;
    });
    
    const projectedRange = scoreRanges.find(range => {
      const [min, max] = range.range.split('-').map(Number);
      return projectedScore >= min && projectedScore <= max;
    });
    
    return {
      currentScore,
      projectedScore,
      scoreDifference,
      paymentScore: Math.round(paymentScore),
      utilizationScore: Math.round(utilizationScore),
      ageScore: Math.round(ageScore),
      mixScore: Math.round(mixScore),
      newCreditScore: Math.round(newCreditScore),
      scenarios,
      timelineProjection,
      currentRange,
      projectedRange,
      scoreRanges,
      factors: {
        paymentHistory,
        creditUtilization,
        creditAge,
        creditMix,
        newAccounts
      }
    };
  };

  const calculateScoreImpact = (modifiedFactors) => {
    const paymentScore = Math.min(100, modifiedFactors.paymentHistory.current);
    const utilizationScore = Math.max(0, 100 - (modifiedFactors.creditUtilization.current * 2));
    const ageScore = Math.min(100, (modifiedFactors.creditAge.current / 10) * 100);
    const mixScore = Math.min(100, (modifiedFactors.creditMix.current / 5) * 100);
    const newCreditScore = Math.max(0, 100 - (modifiedFactors.newCredit.current * 20));
    
    const weightedScore = (
      paymentScore * modifiedFactors.paymentHistory.weight +
      utilizationScore * modifiedFactors.creditUtilization.weight +
      ageScore * modifiedFactors.creditAge.weight +
      mixScore * modifiedFactors.creditMix.weight +
      newCreditScore * modifiedFactors.newCredit.weight
    );
    
    return Math.round(300 + (weightedScore / 100) * 600);
  };

  const calculateMonthlyScore = (payment, utilization, age, mix, newAcc) => {
    const paymentScore = Math.min(100, payment);
    const utilizationScore = Math.max(0, 100 - (utilization * 2));
    const ageScore = Math.min(100, (age / 10) * 100);
    const mixScore = Math.min(100, (mix / 5) * 100);
    const newCreditScore = Math.max(0, 100 - (newAcc * 20));
    
    const weightedScore = (
      paymentScore * 0.35 +
      utilizationScore * 0.30 +
      ageScore * 0.15 +
      mixScore * 0.10 +
      newCreditScore * 0.10
    );
    
    return Math.round(300 + (weightedScore / 100) * 600);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScore > 0 && creditUtilization >= 0 && creditAge >= 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateCreditScore());
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
  }, [currentScore, creditUtilization, paymentHistory, creditAge, newAccounts, creditMix]);

  const scoreData = result ? [
    { name: 'Current', score: result.currentScore, fill: result.currentRange?.color || '#6B7280' },
    { name: 'Projected', score: result.projectedScore, fill: result.projectedRange?.color || '#6B7280' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('credit-score-simulator');
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
                  <CreditCardIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Credit Score Simulator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Simulate how score changes based on financial behavior</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('credit-score-simulator');
              
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
                Credit Profile
              </h2>
              
              <div className="space-y-6">
                {/* Current Score */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Credit Score
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickScores.map(score => (
                      <button
                        key={score}
                        onClick={() => setCurrentScore(score)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          currentScore === score
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                  
                  <input
                    type="number"
                    value={currentScore}
                    onChange={(e) => setCurrentScore(e.target.value ? Number(e.target.value) : '')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                      errors.currentScore ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="750"
                    min="300"
                    max="900"
                  />
                  {errors.currentScore && (
                    <p className="text-red-500 text-xs mt-1">{errors.currentScore}</p>
                  )}
                </div>

                {/* Credit Utilization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Credit Utilization (%)
                  </label>
                  <input
                    type="number"
                    value={creditUtilization}
                    onChange={(e) => setCreditUtilization(e.target.value ? Number(e.target.value) : '')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                      errors.creditUtilization ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="30"
                    min="0"
                    max="100"
                  />
                  {errors.creditUtilization && (
                    <p className="text-red-500 text-xs mt-1">{errors.creditUtilization}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Recommended: Below 30%</p>
                </div>

                {/* Payment History */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Payment History (% on-time payments)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={paymentHistory}
                    onChange={(e) => setPaymentHistory(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span className="font-medium text-gray-900 dark:text-white">{paymentHistory}%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Credit Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Average Credit Age (Years)
                  </label>
                  <input
                    type="number"
                    value={creditAge}
                    onChange={(e) => setCreditAge(e.target.value ? Number(e.target.value) : '')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                      errors.creditAge ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="5"
                    min="0"
                    max="50"
                    step="0.1"
                  />
                  {errors.creditAge && (
                    <p className="text-red-500 text-xs mt-1">{errors.creditAge}</p>
                  )}
                </div>

                {/* New Accounts */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    New Accounts (Last 6 months)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={newAccounts}
                    onChange={(e) => setNewAccounts(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-medium text-gray-900 dark:text-white">{newAccounts}</span>
                    <span>5+</span>
                  </div>
                </div>

                {/* Credit Mix */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Credit Mix (Types of credit)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={creditMix}
                    onChange={(e) => setCreditMix(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 type</span>
                    <span className="font-medium text-gray-900 dark:text-white">{creditMix} types</span>
                    <span>5+ types</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Credit cards, loans, mortgages, etc.</p>
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
                  <p className="text-gray-600 dark:text-gray-400">Simulating credit score changes</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Score Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Credit Score Simulation
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`rounded-lg p-4`} style={{ backgroundColor: `${result.currentRange?.color}20` }}>
                      <div className="text-sm font-medium" style={{ color: result.currentRange?.color }}>Current Score</div>
                      <div className="text-3xl font-bold" style={{ color: result.currentRange?.color }}>
                        {result.currentScore}
                      </div>
                      <div className="text-xs" style={{ color: result.currentRange?.color }}>
                        {result.currentRange?.category} ({result.currentRange?.range})
                      </div>
                    </div>

                    <div className={`rounded-lg p-4`} style={{ backgroundColor: `${result.projectedRange?.color}20` }}>
                      <div className="text-sm font-medium" style={{ color: result.projectedRange?.color }}>Projected Score</div>
                      <div className="text-3xl font-bold" style={{ color: result.projectedRange?.color }}>
                        {result.projectedScore}
                      </div>
                      <div className="text-xs" style={{ color: result.projectedRange?.color }}>
                        {result.projectedRange?.category} ({result.projectedRange?.range})
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg text-center ${
                    result.scoreDifference > 0 ? 'bg-green-50 dark:bg-green-900/20' : 
                    result.scoreDifference < 0 ? 'bg-red-50 dark:bg-red-900/20' : 
                    'bg-gray-50 dark:bg-gray-900/20'
                  }`}>
                    <div className={`text-2xl font-bold ${
                      result.scoreDifference > 0 ? 'text-green-600 dark:text-green-400' : 
                      result.scoreDifference < 0 ? 'text-red-600 dark:text-red-400' : 
                      'text-gray-600 dark:text-gray-400'
                    }`}>
                      {result.scoreDifference > 0 ? '+' : ''}{result.scoreDifference} Points
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.scoreDifference > 0 ? 'Potential Improvement' : 
                       result.scoreDifference < 0 ? 'Potential Decline' : 'No Change'}
                    </div>
                  </div>
                </div>

                {/* Factor Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Score Factor Analysis</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Payment History (35%)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${result.paymentScore}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{result.paymentScore}/100</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Credit Utilization (30%)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${result.utilizationScore}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{result.utilizationScore}/100</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Credit Age (15%)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${result.ageScore}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{result.ageScore}/100</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Credit Mix (10%)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${result.mixScore}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{result.mixScore}/100</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">New Credit (10%)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: `${result.newCreditScore}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{result.newCreditScore}/100</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Improvement Scenarios */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Improvement Scenarios</h3>
                  <div className="space-y-3">
                    {result.scenarios.map((scenario, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{scenario.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Impact: {scenario.impact > result.currentScore ? '+' : ''}{scenario.impact - result.currentScore} points
                          </div>
                        </div>
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                          {scenario.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Projection */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">6-Month Improvement Timeline</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <LineChart data={result.timelineProjection}>
                        <XAxis dataKey="month" />
                        <YAxis domain={[300, 900]} />
                        <Tooltip 
                          formatter={(value) => [value, 'Credit Score']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Score Benefits */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-600">🎯</span>
                    Score Range Benefits
                  </h3>
                  <div className="space-y-3">
                    {result.scoreRanges.map((range, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full mt-1" style={{ backgroundColor: range.color }}></div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {range.category} ({range.range})
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-300">
                            {range.benefits.join(' • ')}
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
                  <CreditCardIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Simulate Credit Score</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your credit profile to see potential score changes
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

export default CreditScoreSimulatorPage;