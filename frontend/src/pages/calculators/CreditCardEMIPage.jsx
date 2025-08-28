import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, CreditCardIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';

const CreditCardEMIPage = () => {
  useScrollToTop();
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [processingFee, setProcessingFee] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [paymentSchedule, setPaymentSchedule] = useState([]);

  const quickAmounts = [10000, 25000, 50000, 100000, 200000, 500000];
  const quickTenures = [3, 6, 9, 12, 18, 24];
  const commonRates = [18, 24, 30, 36, 42, 48];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!purchaseAmount || purchaseAmount < 5000) {
      newErrors.purchaseAmount = 'Minimum ₹5,000 required';
    } else if (purchaseAmount > 1000000) {
      newErrors.purchaseAmount = 'Maximum ₹10,00,000 allowed';
    }
    
    if (!interestRate || interestRate < 12) {
      newErrors.interestRate = 'Minimum 12% required';
    } else if (interestRate > 60) {
      newErrors.interestRate = 'Maximum 60% allowed';
    }
    
    if (!tenure || tenure < 3) {
      newErrors.tenure = 'Minimum 3 months required';
    } else if (tenure > 60) {
      newErrors.tenure = 'Maximum 60 months allowed';
    }

    if (processingFee < 0) {
      newErrors.processingFee = 'Cannot be negative';
    } else if (processingFee > 10000) {
      newErrors.processingFee = 'Maximum ₹10,000 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateCreditCardEMI = () => {
    const principal = purchaseAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;
    const fee = processingFee || 0;
    
    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = (emi * months) + fee;
    const totalInterest = totalAmount - principal - fee;
    
    // Calculate payment schedule
    const schedule = [];
    let remainingPrincipal = principal;
    
    for (let month = 1; month <= months; month++) {
      const interestPayment = remainingPrincipal * monthlyRate;
      const principalPayment = emi - interestPayment;
      remainingPrincipal -= principalPayment;
      
      schedule.push({
        month,
        emi: Math.round(emi),
        principal: Math.round(principalPayment),
        interest: Math.round(interestPayment),
        balance: Math.round(Math.max(0, remainingPrincipal)),
        cumulative: Math.round(emi * month)
      });
    }

    setPaymentSchedule(schedule);
    
    // Compare with minimum payment option
    const minPaymentRate = 0.05; // 5% minimum payment
    const minPayment = principal * minPaymentRate;
    let minPaymentMonths = 0;
    let minPaymentTotal = 0;
    let tempBalance = principal;
    
    while (tempBalance > 0 && minPaymentMonths < 300) { // Max 25 years
      const monthlyInterest = tempBalance * (interestRate / 12 / 100);
      const principalPaid = Math.max(minPayment - monthlyInterest, tempBalance * 0.01);
      tempBalance -= principalPaid;
      minPaymentTotal += minPayment;
      minPaymentMonths++;
      
      if (tempBalance < 100) break; // Close enough to zero
    }
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      processingFee: fee,
      purchaseAmount: principal,
      tenure: months,
      interestRate,
      minPaymentComparison: {
        months: minPaymentMonths,
        totalPaid: Math.round(minPaymentTotal),
        savings: Math.round(minPaymentTotal - totalAmount)
      }
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (purchaseAmount > 0 && interestRate > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateCreditCardEMI());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
          setPaymentSchedule([]);
        }
      } else {
        setResult(null);
        setPaymentSchedule([]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [purchaseAmount, interestRate, tenure, processingFee]);

  const pieData = result ? [
    { name: 'Principal Amount', value: result.purchaseAmount, color: '#3B82F6' },
    { name: 'Interest Paid', value: result.totalInterest, color: '#EF4444' },
    { name: 'Processing Fee', value: result.processingFee, color: '#F59E0B' }
  ].filter(item => item.value > 0) : [];

  const comparisonData = result ? [
    { name: 'EMI Option', amount: result.totalAmount, months: result.tenure, fill: '#10B981' },
    { name: 'Min Payment', amount: result.minPaymentComparison.totalPaid, months: result.minPaymentComparison.months, fill: '#EF4444' }
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
                  <CreditCardIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Credit Card EMI Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate EMI for credit card purchases</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('credit-card-emi');
              const difficulty = getToolDifficulty('credit-card-emi');
              
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

      {/* What is Credit Card EMI Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Credit Card EMI? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Easy Monthly Installments)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Convert large credit card purchases into fixed monthly payments. Better than minimum payments.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💳</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Fixed EMI</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📅</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Planned Repayment</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💰</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Lower Interest</span>
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
                Credit Card EMI Calculator
              </h2>
              
              <div className="space-y-6">
                {/* Purchase Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Purchase Amount
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setPurchaseAmount(amount)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          purchaseAmount === amount
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{amount >= 100000 ? `${(amount/100000).toFixed(0)}L` : `${(amount/1000).toFixed(0)}K`}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={purchaseAmount}
                      onChange={(e) => setPurchaseAmount(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.purchaseAmount ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="50000"
                      min="5000"
                      max="1000000"
                    />
                  </div>
                  {errors.purchaseAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.purchaseAmount}</p>
                  )}
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Interest Rate
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {commonRates.map(rate => (
                      <button
                        key={rate}
                        onClick={() => setInterestRate(rate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          interestRate === rate
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.interestRate ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="24"
                      min="12"
                      max="60"
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
                    Tenure (Months)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickTenures.map(months => (
                      <button
                        key={months}
                        onClick={() => setTenure(months)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          tenure === months
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        {months}M
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.tenure ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="12"
                      min="3"
                      max="60"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Months</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>

                {/* Processing Fee */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Processing Fee (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={processingFee}
                      onChange={(e) => setProcessingFee(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.processingFee ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="0"
                      min="0"
                      max="10000"
                    />
                  </div>
                  {errors.processingFee && (
                    <p className="text-red-500 text-xs mt-1">{errors.processingFee}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Usually 1-3% of purchase amount</p>
                </div>
              </div>
            </div>

            {/* Credit Card Tips */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-red-600">💡</span>
                Credit Card EMI Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Better than min payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Fixed monthly amount</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Shorter repayment period</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-base">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">No prepayment penalty</span>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your EMI details</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* EMI Results */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    EMI Calculation Results
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly EMI</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.emi.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        For {result.tenure} months
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Purchase Amount</div>
                        <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                          ₹{result.purchaseAmount.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                        <div className="text-sm text-red-600 dark:text-red-400 font-medium">Total Interest</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-300">
                          ₹{result.totalInterest.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Total Amount Payable</div>
                      <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.totalAmount.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                        Including all charges
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Breakdown</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={90}
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

                {/* EMI vs Min Payment Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">EMI vs Minimum Payment</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-green-900 dark:text-green-100">EMI Option</div>
                        <div className="text-sm text-green-700 dark:text-green-300">{result.tenure} months</div>
                      </div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalAmount.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-red-900 dark:text-red-100">Minimum Payment (5%)</div>
                        <div className="text-sm text-red-700 dark:text-red-300">{result.minPaymentComparison.months} months</div>
                      </div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.minPaymentComparison.totalPaid.toLocaleString()}
                      </div>
                    </div>

                    {result.minPaymentComparison.savings > 0 && (
                      <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div>
                          <div className="font-medium text-blue-900 dark:text-blue-100">You Save with EMI</div>
                          <div className="text-sm text-blue-700 dark:text-blue-300">Choose EMI over minimum payment</div>
                        </div>
                        <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                          ₹{result.minPaymentComparison.savings.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <CreditCardIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Credit Card EMI</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter purchase details to calculate your EMI and compare with minimum payments
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

export default CreditCardEMIPage;