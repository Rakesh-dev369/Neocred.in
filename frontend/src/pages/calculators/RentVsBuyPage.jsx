import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, HomeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const RentVsBuyPage = () => {
  const [propertyPrice, setPropertyPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [rentIncrease, setRentIncrease] = useState(5);
  const [propertyAppreciation, setPropertyAppreciation] = useState(8);
  const [analysisYears, setAnalysisYears] = useState(10);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickPrices = [2000000, 5000000, 8000000, 12000000, 20000000, 35000000];
  const quickRents = [15000, 25000, 40000, 60000, 80000, 120000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!propertyPrice || propertyPrice < 500000) {
      newErrors.propertyPrice = 'Minimum ₹5,00,000 required';
    } else if (propertyPrice > 100000000) {
      newErrors.propertyPrice = 'Maximum ₹10 crore allowed';
    }
    
    if (!downPayment || downPayment < propertyPrice * 0.1) {
      newErrors.downPayment = 'Minimum 10% down payment required';
    } else if (downPayment > propertyPrice) {
      newErrors.downPayment = 'Down payment cannot exceed property price';
    }
    
    if (!loanTenure || loanTenure < 5) {
      newErrors.loanTenure = 'Minimum 5 years required';
    } else if (loanTenure > 30) {
      newErrors.loanTenure = 'Maximum 30 years allowed';
    }
    
    if (!interestRate || interestRate < 5) {
      newErrors.interestRate = 'Minimum 5% required';
    } else if (interestRate > 20) {
      newErrors.interestRate = 'Maximum 20% allowed';
    }
    
    if (!monthlyRent || monthlyRent < 5000) {
      newErrors.monthlyRent = 'Minimum ₹5,000 required';
    } else if (monthlyRent > 500000) {
      newErrors.monthlyRent = 'Maximum ₹5,00,000 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRentVsBuy = () => {
    const loanAmount = propertyPrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalMonths = loanTenure * 12;
    
    // EMI calculation
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
                (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    
    // Additional buying costs
    const stampDuty = propertyPrice * 0.05; // 5% stamp duty
    const registrationFees = propertyPrice * 0.01; // 1% registration
    const legalFees = 50000; // Fixed legal fees
    const maintenanceCost = propertyPrice * 0.01 / 12; // 1% annual maintenance
    const propertyTax = propertyPrice * 0.005 / 12; // 0.5% annual property tax
    
    const totalBuyingCosts = downPayment + stampDuty + registrationFees + legalFees;
    const monthlyBuyingCosts = emi + maintenanceCost + propertyTax;
    
    // Year-wise analysis
    const yearlyAnalysis = [];
    let cumulativeRentCost = 0;
    let cumulativeBuyCost = totalBuyingCosts;
    let currentRent = monthlyRent;
    let propertyValue = propertyPrice;
    let outstandingLoan = loanAmount;
    
    for (let year = 1; year <= analysisYears; year++) {
      // Rent scenario
      const yearlyRent = currentRent * 12;
      cumulativeRentCost += yearlyRent;
      
      // Buy scenario
      const yearlyEMI = emi * 12;
      const yearlyMaintenance = maintenanceCost * 12;
      const yearlyPropertyTax = propertyTax * 12;
      const yearlyBuyCosts = yearlyEMI + yearlyMaintenance + yearlyPropertyTax;
      cumulativeBuyCost += yearlyBuyCosts;
      
      // Property appreciation
      propertyValue = propertyValue * (1 + propertyAppreciation / 100);
      
      // Loan outstanding calculation
      const yearlyInterest = outstandingLoan * (interestRate / 100);
      const yearlyPrincipal = yearlyEMI - yearlyInterest;
      outstandingLoan = Math.max(0, outstandingLoan - yearlyPrincipal);
      
      // Net worth calculation for buying
      const equity = propertyValue - outstandingLoan;
      const netBuyCost = cumulativeBuyCost - equity;
      
      yearlyAnalysis.push({
        year: `Year ${year}`,
        rentCost: Math.round(cumulativeRentCost),
        buyCost: Math.round(cumulativeBuyCost),
        netBuyCost: Math.round(netBuyCost),
        propertyValue: Math.round(propertyValue),
        equity: Math.round(equity),
        outstandingLoan: Math.round(outstandingLoan),
        monthlyRent: Math.round(currentRent),
        difference: Math.round(cumulativeRentCost - netBuyCost)
      });
      
      // Increase rent for next year
      currentRent = currentRent * (1 + rentIncrease / 100);
    }
    
    // Break-even analysis
    const finalAnalysis = yearlyAnalysis[analysisYears - 1];
    const breakEvenYear = yearlyAnalysis.findIndex(year => year.difference > 0);
    
    // Investment opportunity cost
    const investmentReturn = 12; // Assume 12% return on alternative investment
    const alternativeInvestment = totalBuyingCosts * Math.pow(1 + investmentReturn / 100, analysisYears);
    
    // Tax benefits for home loan
    const annualInterestDeduction = Math.min(200000, (loanAmount * interestRate / 100)); // Max 2L under 24(b)
    const principalDeduction = Math.min(150000, emi * 12 - annualInterestDeduction); // Max 1.5L under 80C
    const totalTaxBenefit = (annualInterestDeduction + principalDeduction) * 0.3 * analysisYears; // Assuming 30% tax bracket
    
    // Recommendation logic
    let recommendation = '';
    if (finalAnalysis.difference > 0) {
      recommendation = 'BUY';
    } else if (Math.abs(finalAnalysis.difference) < propertyPrice * 0.1) {
      recommendation = 'NEUTRAL';
    } else {
      recommendation = 'RENT';
    }
    
    return {
      propertyPrice,
      downPayment,
      loanAmount: Math.round(loanAmount),
      emi: Math.round(emi),
      totalBuyingCosts: Math.round(totalBuyingCosts),
      monthlyBuyingCosts: Math.round(monthlyBuyingCosts),
      monthlyRent,
      yearlyAnalysis,
      finalAnalysis,
      breakEvenYear: breakEvenYear >= 0 ? breakEvenYear + 1 : null,
      alternativeInvestment: Math.round(alternativeInvestment),
      totalTaxBenefit: Math.round(totalTaxBenefit),
      recommendation,
      analysisYears,
      rentIncrease,
      propertyAppreciation
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (propertyPrice > 0 && downPayment > 0 && loanTenure > 0 && interestRate > 0 && monthlyRent > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateRentVsBuy());
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
  }, [propertyPrice, downPayment, loanTenure, interestRate, monthlyRent, rentIncrease, propertyAppreciation, analysisYears]);

  const comparisonData = result ? result.yearlyAnalysis.map(year => ({
    year: year.year,
    rent: year.rentCost,
    buy: year.netBuyCost,
    difference: year.difference
  })) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(() => {
                const navigation = getToolNavigation('rent-vs-buy');
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
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rent vs Buy Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Compare renting vs buying a house over years</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('rent-vs-buy');
              
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
            {/* Property Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Property Details
              </h2>
              
              <div className="space-y-6">
                {/* Property Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Property Price
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickPrices.map(price => (
                      <button
                        key={price}
                        onClick={() => setPropertyPrice(price)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          propertyPrice === price
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(price/100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.propertyPrice ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="5000000"
                      min="500000"
                      max="100000000"
                    />
                  </div>
                  {errors.propertyPrice && (
                    <p className="text-red-500 text-xs mt-1">{errors.propertyPrice}</p>
                  )}
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Down Payment
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.downPayment ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="1000000"
                      min="0"
                    />
                  </div>
                  {errors.downPayment && (
                    <p className="text-red-500 text-xs mt-1">{errors.downPayment}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {propertyPrice > 0 && `Minimum 10%: ₹${(propertyPrice * 0.1).toLocaleString()}`}
                  </p>
                </div>

                {/* Loan Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Loan Tenure (Years)
                    </label>
                    <input
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.loanTenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="20"
                      min="5"
                      max="30"
                    />
                    {errors.loanTenure && (
                      <p className="text-red-500 text-xs mt-1">{errors.loanTenure}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.interestRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="8.5"
                      min="5"
                      max="20"
                      step="0.1"
                    />
                    {errors.interestRate && (
                      <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Rent & Assumptions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Rent & Assumptions</h2>
              
              <div className="space-y-6">
                {/* Monthly Rent */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Monthly Rent
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickRents.map(rent => (
                      <button
                        key={rent}
                        onClick={() => setMonthlyRent(rent)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          monthlyRent === rent
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
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
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.monthlyRent ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="40000"
                      min="5000"
                      max="500000"
                    />
                  </div>
                  {errors.monthlyRent && (
                    <p className="text-red-500 text-xs mt-1">{errors.monthlyRent}</p>
                  )}
                </div>

                {/* Assumptions */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Annual Rent Increase (%)
                    </label>
                    <input
                      type="number"
                      value={rentIncrease}
                      onChange={(e) => setRentIncrease(e.target.value ? Number(e.target.value) : 5)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="5"
                      min="0"
                      max="20"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Property Appreciation (%)
                    </label>
                    <input
                      type="number"
                      value={propertyAppreciation}
                      onChange={(e) => setPropertyAppreciation(e.target.value ? Number(e.target.value) : 8)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="8"
                      min="0"
                      max="20"
                      step="0.1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Analysis Period (Years)
                  </label>
                  <input
                    type="number"
                    value={analysisYears}
                    onChange={(e) => setAnalysisYears(e.target.value ? Number(e.target.value) : 10)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="10"
                    min="5"
                    max="30"
                  />
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
                  <p className="text-gray-600 dark:text-gray-400">Analyzing rent vs buy scenarios</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Recommendation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Analysis Results
                  </h2>
                  
                  <div className={`p-6 rounded-lg mb-6 text-center ${
                    result.recommendation === 'BUY' ? 'bg-green-50 dark:bg-green-900/20' :
                    result.recommendation === 'RENT' ? 'bg-red-50 dark:bg-red-900/20' :
                    'bg-yellow-50 dark:bg-yellow-900/20'
                  }`}>
                    <div className={`text-3xl font-bold mb-2 ${
                      result.recommendation === 'BUY' ? 'text-green-700 dark:text-green-300' :
                      result.recommendation === 'RENT' ? 'text-red-700 dark:text-red-300' :
                      'text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {result.recommendation === 'BUY' ? '🏠 BUY' : 
                       result.recommendation === 'RENT' ? '🏠 RENT' : '⚖️ NEUTRAL'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.recommendation === 'BUY' ? 'Buying is more beneficial over the long term' :
                       result.recommendation === 'RENT' ? 'Renting is more cost-effective' :
                       'Both options are financially similar'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly EMI</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.emi.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Current Rent</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.monthlyRent.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Total Buying Cost</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        ₹{result.totalBuyingCosts.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Break-even</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        {result.breakEvenYear ? `${result.breakEvenYear} Years` : 'Never'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Comparison Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cost Comparison Over Time</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <LineChart data={comparisonData}>
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
                        <Line type="monotone" dataKey="rent" stroke="#10B981" name="Total Rent Cost" strokeWidth={3} />
                        <Line type="monotone" dataKey="buy" stroke="#3B82F6" name="Net Buy Cost" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Final Analysis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {result.analysisYears}-Year Analysis Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">Total Rent Paid</span>
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        ₹{result.finalAnalysis.rentCost.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">Net Cost of Buying</span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ₹{result.finalAnalysis.netBuyCost.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">Property Value</span>
                      <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        ₹{result.finalAnalysis.propertyValue.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">Your Equity</span>
                      <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                        ₹{result.finalAnalysis.equity.toLocaleString()}
                      </span>
                    </div>

                    <div className={`flex justify-between items-center p-3 rounded-lg ${
                      result.finalAnalysis.difference > 0 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                    }`}>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {result.finalAnalysis.difference > 0 ? 'Buying Advantage' : 'Renting Advantage'}
                      </span>
                      <span className={`text-lg font-bold ${
                        result.finalAnalysis.difference > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        ₹{Math.abs(result.finalAnalysis.difference).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Considerations */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-600">💡</span>
                    Additional Considerations
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 text-base">✓</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Tax Benefits</div>
                        <div className="text-gray-700 dark:text-gray-300">
                          Estimated tax savings: ₹{result.totalTaxBenefit.toLocaleString()} over {result.analysisYears} years
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-base">📈</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Alternative Investment</div>
                        <div className="text-gray-700 dark:text-gray-300">
                          Down payment invested at 12%: ₹{result.alternativeInvestment.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-600 text-base">🏠</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Lifestyle Factors</div>
                        <div className="text-gray-700 dark:text-gray-300">
                          Consider stability, maintenance responsibility, and flexibility needs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <HomeIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Rent vs Buy Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter property and rent details to compare both options
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

export default RentVsBuyPage;