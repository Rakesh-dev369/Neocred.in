import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ChartBarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';

const NetWorthTrackerPage = () => {
  useScrollToTop();
  const [assets, setAssets] = useState({
    cash: '',
    savings: '',
    fd: '',
    stocks: '',
    mutualFunds: '',
    ppf: '',
    realEstate: '',
    gold: '',
    other: ''
  });
  
  const [liabilities, setLiabilities] = useState({
    homeLoan: '',
    carLoan: '',
    personalLoan: '',
    creditCard: '',
    other: ''
  });
  
  const [result, setResult] = useState(null);

  const calculateNetWorth = () => {
    const totalAssets = Object.values(assets).reduce((sum, val) => sum + (Number(val) || 0), 0);
    const totalLiabilities = Object.values(liabilities).reduce((sum, val) => sum + (Number(val) || 0), 0);
    const netWorth = totalAssets - totalLiabilities;
    
    let category = '';
    let categoryColor = '';
    if (netWorth < 0) {
      category = 'Negative Net Worth';
      categoryColor = 'text-red-600';
    } else if (netWorth < 100000) {
      category = 'Building Wealth';
      categoryColor = 'text-yellow-600';
    } else if (netWorth < 1000000) {
      category = 'Good Progress';
      categoryColor = 'text-blue-600';
    } else if (netWorth < 10000000) {
      category = 'Wealthy';
      categoryColor = 'text-green-600';
    } else {
      category = 'Very Wealthy';
      categoryColor = 'text-purple-600';
    }

    const liquidAssets = (Number(assets.cash) || 0) + (Number(assets.savings) || 0) + (Number(assets.fd) || 0);
    const investmentAssets = (Number(assets.stocks) || 0) + (Number(assets.mutualFunds) || 0) + (Number(assets.ppf) || 0);
    const physicalAssets = (Number(assets.realEstate) || 0) + (Number(assets.gold) || 0);
    
    const liquidPercentage = totalAssets > 0 ? ((liquidAssets / totalAssets) * 100).toFixed(1) : 0;
    const investmentPercentage = totalAssets > 0 ? ((investmentAssets / totalAssets) * 100).toFixed(1) : 0;
    const physicalPercentage = totalAssets > 0 ? ((physicalAssets / totalAssets) * 100).toFixed(1) : 0;
    const debtToAssetRatio = totalAssets > 0 ? ((totalLiabilities / totalAssets) * 100).toFixed(1) : 0;

    return {
      totalAssets: Math.round(totalAssets),
      totalLiabilities: Math.round(totalLiabilities),
      netWorth: Math.round(netWorth),
      category,
      categoryColor,
      liquidAssets: Math.round(liquidAssets),
      investmentAssets: Math.round(investmentAssets),
      physicalAssets: Math.round(physicalAssets),
      liquidPercentage: parseFloat(liquidPercentage),
      investmentPercentage: parseFloat(investmentPercentage),
      physicalPercentage: parseFloat(physicalPercentage),
      debtToAssetRatio: parseFloat(debtToAssetRatio)
    };
  };

  useEffect(() => {
    const totalAssets = Object.values(assets).reduce((sum, val) => sum + (Number(val) || 0), 0);
    if (totalAssets > 0) {
      setResult(calculateNetWorth());
    } else {
      setResult(null);
    }
  }, [assets, liabilities]);

  const handleAssetChange = (key, value) => {
    setAssets(prev => ({ ...prev, [key]: value }));
  };

  const handleLiabilityChange = (key, value) => {
    setLiabilities(prev => ({ ...prev, [key]: value }));
  };

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
                  <ChartBarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Net Worth Tracker</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your total assets minus liabilities</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('net-worth-tracker');
              const difficulty = getToolDifficulty('net-worth-tracker');
              
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Input */}
          <div className="space-y-6">
            {/* Assets */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-green-600">💰</span>
                Assets
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Cash in Hand</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.cash}
                        onChange={(e) => handleAssetChange('cash', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="50000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Savings Account</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.savings}
                        onChange={(e) => handleAssetChange('savings', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="200000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Fixed Deposits</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.fd}
                        onChange={(e) => handleAssetChange('fd', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="500000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Stocks</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.stocks}
                        onChange={(e) => handleAssetChange('stocks', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="300000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Mutual Funds</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.mutualFunds}
                        onChange={(e) => handleAssetChange('mutualFunds', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="400000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">PPF/EPF</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.ppf}
                        onChange={(e) => handleAssetChange('ppf', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="150000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Real Estate</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.realEstate}
                        onChange={(e) => handleAssetChange('realEstate', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="2000000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Gold/Jewelry</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={assets.gold}
                        onChange={(e) => handleAssetChange('gold', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="100000"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Other Assets</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={assets.other}
                      onChange={(e) => handleAssetChange('other', e.target.value)}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="50000"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Liabilities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-red-600">💳</span>
                Liabilities
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Home Loan Outstanding</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={liabilities.homeLoan}
                        onChange={(e) => handleLiabilityChange('homeLoan', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="1500000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Car Loan Outstanding</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={liabilities.carLoan}
                        onChange={(e) => handleLiabilityChange('carLoan', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="300000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Personal Loan</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={liabilities.personalLoan}
                        onChange={(e) => handleLiabilityChange('personalLoan', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="100000"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Credit Card Outstanding</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={liabilities.creditCard}
                        onChange={(e) => handleLiabilityChange('creditCard', e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="50000"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Other Debts</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={liabilities.other}
                      onChange={(e) => handleLiabilityChange('other', e.target.value)}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="25000"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {result ? (
              <>
                {/* Net Worth Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Net Worth Summary
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Total Assets</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalAssets.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Total Liabilities</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.totalLiabilities.toLocaleString()}
                      </div>
                    </div>

                    <div className={`${result.netWorth >= 0 ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-red-50 dark:bg-red-900/20'} rounded-lg p-4 col-span-2`}>
                      <div className={`text-sm font-medium ${result.netWorth >= 0 ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}`}>
                        Your Net Worth
                      </div>
                      <div className={`text-3xl font-bold ${result.netWorth >= 0 ? 'text-blue-700 dark:text-blue-300' : 'text-red-700 dark:text-red-300'}`}>
                        {result.netWorth >= 0 ? '₹' : '-₹'}{Math.abs(result.netWorth).toLocaleString()}
                      </div>
                      <div className={`text-xs mt-1 ${result.categoryColor}`}>
                        {result.category}
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Debt-to-Asset Ratio</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        {result.debtToAssetRatio}%
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Investment Assets</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.investmentPercentage}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Allocation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Asset Allocation</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-blue-900 dark:text-blue-100">Liquid Assets</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">Cash, Savings, FD</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
                          ₹{result.liquidAssets.toLocaleString()}
                        </div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">
                          {result.liquidPercentage}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-green-900 dark:text-green-100">Investment Assets</div>
                        <div className="text-sm text-green-700 dark:text-green-300">Stocks, MF, PPF</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-700 dark:text-green-300">
                          ₹{result.investmentAssets.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          {result.investmentPercentage}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-purple-900 dark:text-purple-100">Physical Assets</div>
                        <div className="text-sm text-purple-700 dark:text-purple-300">Real Estate, Gold</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
                          ₹{result.physicalAssets.toLocaleString()}
                        </div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">
                          {result.physicalPercentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ChartBarIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Your Net Worth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your assets and liabilities to track your financial progress
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

export default NetWorthTrackerPage;