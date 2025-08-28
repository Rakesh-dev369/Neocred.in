import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, TruckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, LineChart, Line } from 'recharts';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const CarLoanEMIPage = () => {
  useScrollToTop();
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickAmounts = [300000, 500000, 800000, 1200000, 1800000, 2500000];
  const quickRates = [8.5, 9.0, 9.5, 10.0, 10.5, 11.0];
  const quickTenures = [3, 4, 5, 6, 7];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!loanAmount || loanAmount < 50000) {
      newErrors.loanAmount = 'Minimum ₹50,000 required';
    } else if (loanAmount > 10000000) {
      newErrors.loanAmount = 'Maximum ₹1 crore allowed';
    }
    
    if (!interestRate || interestRate < 5) {
      newErrors.interestRate = 'Minimum 5% required';
    } else if (interestRate > 20) {
      newErrors.interestRate = 'Maximum 20% allowed';
    }
    
    if (!tenure || tenure < 1) {
      newErrors.tenure = 'Minimum 1 year required';
    } else if (tenure > 10) {
      newErrors.tenure = 'Maximum 10 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateCarLoanEMI = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = tenure * 12;
    
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
    
    // Calculate year-wise breakdown
    const yearlyBreakdown = [];
    let remainingPrincipal = P;
    
    for (let year = 1; year <= tenure; year++) {
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
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        balance: Math.max(0, Math.round(remainingPrincipal))
      });
      
      if (remainingPrincipal <= 0) break;
    }
    
    // Calculate with down payment
    const carPrice = downPayment ? P + downPayment : P;
    const loanToValue = downPayment ? ((P / carPrice) * 100).toFixed(1) : 100;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      yearlyBreakdown,
      carPrice: Math.round(carPrice),
      downPayment: downPayment || 0,
      loanToValue: parseFloat(loanToValue),
      monthlyIncome: Math.round(emi * 3), // Recommended monthly income
      processingFee: Math.round(P * 0.01), // 1% processing fee
      insurance: Math.round(carPrice * 0.03) // 3% insurance annually
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loanAmount > 0 && interestRate > 0 && tenure > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateCarLoanEMI());
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
  }, [loanAmount, interestRate, tenure, downPayment]);

  const pieData = result ? [
    { name: 'Principal', value: result.totalAmount - result.totalInterest, color: '#3B82F6' },
    { name: 'Interest', value: result.totalInterest, color: '#EF4444' }
  ] : [];

  const comparisonData = result ? [
    { name: 'Current Rate', emi: result.emi, rate: interestRate },
    { name: '0.5% Lower', emi: Math.round(calculateEMIForRate(interestRate - 0.5)), rate: interestRate - 0.5 },
    { name: '0.5% Higher', emi: Math.round(calculateEMIForRate(interestRate + 0.5)), rate: interestRate + 0.5 },
    { name: '1% Lower', emi: Math.round(calculateEMIForRate(interestRate - 1)), rate: interestRate - 1 },
    { name: '1% Higher', emi: Math.round(calculateEMIForRate(interestRate + 1)), rate: interestRate + 1 }
  ] : [];

  function calculateEMIForRate(rate) {
    const P = loanAmount;
    const r = rate / 100 / 12;
    const n = tenure * 12;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

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
                  <TruckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Car/Bike Loan EMI Calculator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your vehicle loan EMI and payment schedule</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('car-loan-emi');
              const difficulty = getToolDifficulty('car-loan-emi');
              
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

      {/* Vehicle Loan Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Vehicle Loan EMI <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Car/Bike/Commercial)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Calculate EMI for cars, bikes, and commercial vehicles with competitive interest rates.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🚗</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Car Loans</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">8.5-12%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🏍️</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Bike Loans</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">9-15%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🚛</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Commercial</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">10-16%</span>
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
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Amount
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
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
                      placeholder="800000"
                      min="50000"
                      max="10000000"
                    />
                  </div>
                  {errors.loanAmount && (
                    <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>
                  )}
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Down Payment (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value ? Number(e.target.value) : '')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="200000"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Typically 10-20% of vehicle price</p>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickRates.map(rate => (
                      <button
                        key={rate}
                        onClick={() => setInterestRate(rate)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          interestRate === rate
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
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
                    Loan Tenure (Years)
                  </label>
                  
                  <div className="grid grid-cols-5 gap-2 mb-3">
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
                      placeholder="5"
                      min="1"
                      max="10"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.tenure && (
                    <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Vehicle Loan Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Vehicle Loan Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">💰</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Higher Down Payment</div>
                    <div className="text-gray-600 dark:text-gray-300">Reduces loan amount and EMI burden</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📊</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Compare Rates</div>
                    <div className="text-gray-600 dark:text-gray-300">Banks vs NBFCs vs dealer financing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🛡️</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Insurance</div>
                    <div className="text-gray-600 dark:text-gray-300">Comprehensive coverage is mandatory</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your vehicle loan EMI</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* EMI Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    EMI Calculation Results
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly EMI</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.emi.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Principal</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        ₹{loanAmount.toLocaleString()}
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

                  {/* Additional Details */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {result.downPayment > 0 && (
                        <>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Vehicle Price:</span>
                            <span className="font-medium text-gray-900 dark:text-white ml-2">
                              ₹{result.carPrice.toLocaleString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Loan-to-Value:</span>
                            <span className="font-medium text-gray-900 dark:text-white ml-2">
                              {result.loanToValue}%
                            </span>
                          </div>
                        </>
                      )}
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Processing Fee:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.processingFee.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Annual Insurance:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">
                          ₹{result.insurance.toLocaleString()}
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

                {/* Year-wise Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-wise Payment Breakdown</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={300} minWidth={250}>
                      <BarChart data={result.yearlyBreakdown}>
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
                        <Bar dataKey="principal" stackId="a" fill="#3B82F6" name="Principal" />
                        <Bar dataKey="interest" stackId="a" fill="#EF4444" name="Interest" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Interest Rate Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Interest Rate Impact</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={comparisonData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'EMI']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="emi" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <TruckIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Vehicle Loan EMI</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter loan amount, interest rate, and tenure to calculate your monthly EMI
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

export default CarLoanEMIPage;