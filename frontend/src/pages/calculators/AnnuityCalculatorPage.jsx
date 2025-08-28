import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CurrencyDollarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, LineChart, Line } from 'recharts';

const AnnuityCalculatorPage = () => {
  const [corpusAmount, setCorpusAmount] = useState('');
  const [annuityRate, setAnnuityRate] = useState(6);
  const [annuityType, setAnnuityType] = useState('immediate');
  const [payoutFrequency, setPayoutFrequency] = useState('monthly');
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [inflationRate, setInflationRate] = useState(5);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickCorpus = [2000000, 5000000, 10000000, 20000000, 50000000, 100000000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!corpusAmount || corpusAmount < 500000) {
      newErrors.corpusAmount = 'Minimum ₹5,00,000 required';
    } else if (corpusAmount > 500000000) {
      newErrors.corpusAmount = 'Maximum ₹50 crore allowed';
    }
    
    if (!annuityRate || annuityRate < 3) {
      newErrors.annuityRate = 'Minimum 3% required';
    } else if (annuityRate > 15) {
      newErrors.annuityRate = 'Maximum 15% allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateAnnuity = () => {
    const currentAge = 60; // Assuming retirement age
    const yearsOfPayout = lifeExpectancy - currentAge;
    
    // Basic annuity calculation
    let periodsPerYear = 1;
    if (payoutFrequency === 'monthly') periodsPerYear = 12;
    else if (payoutFrequency === 'quarterly') periodsPerYear = 4;
    else if (payoutFrequency === 'half-yearly') periodsPerYear = 2;
    
    const periodRate = annuityRate / 100 / periodsPerYear;
    const totalPeriods = yearsOfPayout * periodsPerYear;
    
    // Annuity payout calculation
    let periodicPayout = 0;
    if (annuityType === 'immediate') {
      // Immediate annuity - starts paying immediately
      periodicPayout = (corpusAmount * periodRate) / (1 - Math.pow(1 + periodRate, -totalPeriods));
    } else {
      // Deferred annuity - corpus grows for some years before payout
      const deferredYears = 5; // Assume 5 years deferral
      const deferredPeriods = deferredYears * periodsPerYear;
      const futureCorpus = corpusAmount * Math.pow(1 + periodRate, deferredPeriods);
      const remainingPeriods = totalPeriods - deferredPeriods;
      periodicPayout = (futureCorpus * periodRate) / (1 - Math.pow(1 + periodRate, -remainingPeriods));
    }
    
    const annualPayout = periodicPayout * periodsPerYear;
    const totalPayouts = periodicPayout * totalPeriods;
    
    // Inflation-adjusted analysis
    const realAnnuityRate = ((1 + annuityRate / 100) / (1 + inflationRate / 100) - 1) * 100;
    const realPeriodicPayout = (corpusAmount * (realAnnuityRate / 100 / periodsPerYear)) / 
                               (1 - Math.pow(1 + realAnnuityRate / 100 / periodsPerYear, -totalPeriods));
    
    // Year-wise payout analysis
    const yearlyAnalysis = [];
    let remainingCorpus = corpusAmount;
    let cumulativePayouts = 0;
    
    for (let year = 1; year <= Math.min(yearsOfPayout, 25); year++) {
      const yearlyPayout = annualPayout;
      const interestEarned = remainingCorpus * (annuityRate / 100);
      remainingCorpus = remainingCorpus + interestEarned - yearlyPayout;
      cumulativePayouts += yearlyPayout;
      
      // Inflation-adjusted payout
      const inflationAdjustedPayout = yearlyPayout / Math.pow(1 + inflationRate / 100, year - 1);
      
      yearlyAnalysis.push({
        year: `Year ${year}`,
        age: currentAge + year,
        payout: Math.round(yearlyPayout),
        realPayout: Math.round(inflationAdjustedPayout),
        remainingCorpus: Math.max(0, Math.round(remainingCorpus)),
        cumulativePayouts: Math.round(cumulativePayouts)
      });
      
      if (remainingCorpus <= 0) break;
    }
    
    // Different annuity options comparison
    const annuityOptions = [
      {
        type: 'Life Annuity',
        rate: annuityRate,
        payout: Math.round(periodicPayout),
        description: 'Payments for lifetime, no residual value'
      },
      {
        type: 'Annuity with Return of Purchase Price',
        rate: annuityRate - 0.5,
        payout: Math.round(periodicPayout * 0.9),
        description: 'Lower payout, but corpus returned to nominee'
      },
      {
        type: 'Joint Life Annuity',
        rate: annuityRate - 1,
        payout: Math.round(periodicPayout * 0.85),
        description: 'Covers spouse, continues after death'
      },
      {
        type: 'Increasing Annuity',
        rate: annuityRate - 1.5,
        payout: Math.round(periodicPayout * 0.8),
        description: 'Payouts increase annually by 3%'
      }
    ];
    
    // Tax implications
    const taxableAmount = annualPayout - (corpusAmount / yearsOfPayout); // Only interest portion taxable
    const taxLiability = taxableAmount * 0.3; // Assuming 30% tax bracket
    const postTaxPayout = annualPayout - taxLiability;
    
    // Corpus exhaustion analysis
    const corpusExhaustionYear = yearlyAnalysis.findIndex(year => year.remainingCorpus <= 0);
    
    return {
      corpusAmount,
      annuityRate,
      annuityType,
      payoutFrequency,
      periodicPayout: Math.round(periodicPayout),
      annualPayout: Math.round(annualPayout),
      totalPayouts: Math.round(totalPayouts),
      realPeriodicPayout: Math.round(realPeriodicPayout * periodsPerYear / 12), // Monthly equivalent
      yearlyAnalysis,
      annuityOptions,
      taxableAmount: Math.round(taxableAmount),
      taxLiability: Math.round(taxLiability),
      postTaxPayout: Math.round(postTaxPayout),
      corpusExhaustionYear: corpusExhaustionYear >= 0 ? corpusExhaustionYear + 1 : null,
      yearsOfPayout,
      lifeExpectancy,
      inflationRate,
      realAnnuityRate: realAnnuityRate.toFixed(2)
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (corpusAmount > 0 && annuityRate > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateAnnuity());
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
  }, [corpusAmount, annuityRate, annuityType, payoutFrequency, lifeExpectancy, inflationRate]);

  const payoutData = result ? result.yearlyAnalysis.map(year => ({
    year: year.year,
    payout: year.payout,
    realPayout: year.realPayout,
    remainingCorpus: year.remainingCorpus
  })) : [];

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
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Annuity Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate post-retirement income from lump sum corpus</p>
                </div>
              </div>
            
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('annuity-calculator');
              const difficulty = getToolDifficulty('annuity-calculator');
              
              return navigation ? (
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                    difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {navigation.previous && (
                      <Link
                        to={navigation.previous.path}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <ChevronLeftIcon className="h-4 w-4" />
                        {navigation.previous.name}
                      </Link>
                    )}
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {navigation.progress.current} of {navigation.progress.total}
                    </div>
                    
                    {navigation.next && (
                      <Link
                        to={navigation.next.path}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {navigation.next.name}
                        <ChevronRightIcon className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ) : null;
            })()}</div>
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
                Annuity Details
              </h2>
              
              <div className="space-y-6">
                {/* Corpus Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Retirement Corpus
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickCorpus.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setCorpusAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          corpusAmount === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(amount/10000000).toFixed(0)}Cr
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={corpusAmount}
                      onChange={(e) => setCorpusAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.corpusAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="10000000"
                      min="500000"
                      max="500000000"
                    />
                  </div>
                  {errors.corpusAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.corpusAmount}</p>
                  )}
                </div>

                {/* Annuity Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annuity Rate (% per annum)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={annuityRate}
                      onChange={(e) => setAnnuityRate(e.target.value ? Number(e.target.value) : 6)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.annuityRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="6"
                      min="3"
                      max="15"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  {errors.annuityRate && (
                    <p className="text-red-500 text-xs mt-1">{errors.annuityRate}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Current market rates: 5.5% - 7.5%</p>
                </div>

                {/* Annuity Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Annuity Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setAnnuityType('immediate')}
                      className={`p-3 rounded-lg border transition-colors ${
                        annuityType === 'immediate'
                          ? 'bg-purple-500 text-white border-purple-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      <div className="font-medium">Immediate</div>
                      <div className="text-xs opacity-75">Payouts start immediately</div>
                    </button>
                    <button
                      onClick={() => setAnnuityType('deferred')}
                      className={`p-3 rounded-lg border transition-colors ${
                        annuityType === 'deferred'
                          ? 'bg-purple-500 text-white border-purple-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      <div className="font-medium">Deferred</div>
                      <div className="text-xs opacity-75">Payouts start after 5 years</div>
                    </button>
                  </div>
                </div>

                {/* Payout Frequency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Payout Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: 'monthly', name: 'Monthly', desc: '12 times/year' },
                      { key: 'quarterly', name: 'Quarterly', desc: '4 times/year' },
                      { key: 'half-yearly', name: 'Half-yearly', desc: '2 times/year' },
                      { key: 'annually', name: 'Annually', desc: '1 time/year' }
                    ].map(freq => (
                      <button
                        key={freq.key}
                        onClick={() => setPayoutFrequency(freq.key)}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          payoutFrequency === freq.key
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-orange-400'
                        }`}
                      >
                        <div className="font-medium">{freq.name}</div>
                        <div className="text-xs opacity-75">{freq.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Life Expectancy */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Life Expectancy (Years)
                  </label>
                  <input
                    type="number"
                    value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(e.target.value ? Number(e.target.value) : 80)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="80"
                    min="65"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Average life expectancy in India: 70-75 years</p>
                </div>

                {/* Inflation Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Inflation Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value ? Number(e.target.value) : 5)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="5"
                      min="2"
                      max="12"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your annuity projections</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Annuity Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Annuity Analysis
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {result.payoutFrequency.charAt(0).toUpperCase() + result.payoutFrequency.slice(1)} Payout
                      </div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.periodicPayout.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Annual: ₹{result.annualPayout.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Corpus Amount</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.corpusAmount.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Annuity Rate</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.annuityRate}%
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Payout Years</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.yearsOfPayout} Years
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Real Return</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        {result.realAnnuityRate}%
                      </div>
                    </div>
                  </div>

                  {/* Tax Analysis */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Analysis (Annual)</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Taxable Amount</div>
                        <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                          ₹{result.taxableAmount.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                        <div className="text-xs text-red-600 dark:text-red-400">Tax Liability</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-300">
                          ₹{result.taxLiability.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                        <div className="text-xs text-green-600 dark:text-green-400">Post-tax Income</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-300">
                          ₹{result.postTaxPayout.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Annuity Options */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Annuity Options Comparison</h3>
                  <div className="space-y-3">
                    {result.annuityOptions.map((option, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 dark:text-white">{option.type}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{option.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            ₹{option.payout.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            {result.payoutFrequency}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payout Projection Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payout vs Inflation Impact</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={payoutData}>
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="payout" stroke="#10B981" name="Nominal Payout" strokeWidth={3} />
                        <Line type="monotone" dataKey="realPayout" stroke="#EF4444" name="Real Payout (Inflation Adjusted)" strokeWidth={2} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Corpus Depletion */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Corpus Depletion Analysis</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={payoutData.slice(0, 15)}>
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
                        <Bar dataKey="remainingCorpus" fill="#3B82F6" name="Remaining Corpus" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {result.corpusExhaustionYear && (
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="text-sm text-yellow-700 dark:text-yellow-300">
                        <strong>Warning:</strong> Corpus may be exhausted in Year {result.corpusExhaustionYear}
                      </div>
                    </div>
                  )}
                </div>

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Payout Schedule</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {result.yearlyAnalysis.slice(0, 10).map((year, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{year.year}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Age: {year.age}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            Payout: ₹{year.payout.toLocaleString()}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Real Value: ₹{year.realPayout.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Corpus: ₹{year.remainingCorpus.toLocaleString()}
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
                  <CurrencyDollarIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Annuity Income</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your corpus details to calculate retirement income
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

export default AnnuityCalculatorPage;