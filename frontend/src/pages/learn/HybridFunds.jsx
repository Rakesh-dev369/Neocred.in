import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HybridFunds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-purple-200 dark:border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/debt-mutual-funds"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Debt Mutual Funds
            </Link>
            <Link 
              to="/learn/index-funds-etfs"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
              Next: Index Funds & ETFs
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">⚖️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Hybrid / Balanced Funds</h1>
              <p className="text-gray-600 dark:text-gray-300">Mix of equity and debt for balanced returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Hybrid Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Hybrid Funds?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hybrid funds invest in a mix of equity and debt instruments to provide balanced returns with moderate risk. 
                  They offer diversification in a single fund, making them suitable for investors seeking steady growth with lower volatility.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  These funds automatically rebalance between equity and debt based on market conditions, 
                  providing professional asset allocation without requiring investors to manage multiple funds.
                </p>
              </div>
            </section>

            {/* Types of Hybrid Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Hybrid Funds (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📈 Aggressive Hybrid</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Equity: 65-80% | Debt: 20-35%</p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs">Higher growth potential, moderate risk</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🛡️ Conservative Hybrid</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-2">Equity: 10-25% | Debt: 75-90%</p>
                  <p className="text-green-600 dark:text-green-400 text-xs">Capital preservation with modest growth</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⚖️ Balanced Advantage</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">Dynamic allocation based on valuations</p>
                  <p className="text-purple-600 dark:text-purple-400 text-xs">Automatic rebalancing, tax efficient</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🎯 Multi-Asset</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">Equity + Debt + Gold/Commodities</p>
                  <p className="text-orange-600 dark:text-orange-400 text-xs">Maximum diversification across asset classes</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">📊 Equity Savings</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm mb-2">Equity + Debt + Arbitrage opportunities</p>
                  <p className="text-red-600 dark:text-red-400 text-xs">Lower volatility with equity exposure</p>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">💰 Monthly Income Plans</h3>
                  <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-2">Debt-oriented with dividend options</p>
                  <p className="text-indigo-600 dark:text-indigo-400 text-xs">Regular income with capital appreciation</p>
                </div>
              </div>
            </section>

            {/* Top Performing Hybrid Funds 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Performing Hybrid Funds (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Fund Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">3Y Return</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ICICI Prudential Balanced Advantage</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Balanced Advantage</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">16.8%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">70:30</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">HDFC Balanced Advantage</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Balanced Advantage</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">15.2%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">65:35</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">SBI Equity Hybrid Fund</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Aggressive Hybrid</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">18.5%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">75:25</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Kotak Multi Asset Allocator</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Multi Asset</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">14.9%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">60:30:10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Asset Allocation Strategies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Asset Allocation Strategies (2025)</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📊 Age-Based Allocation</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Rule of thumb: Equity % = 100 - Your Age. 
                    25-year-old: 75% equity, 25% debt | 50-year-old: 50% equity, 50% debt
                  </p>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 Goal-Based Allocation</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Short-term goals (&lt;3 years): Conservative hybrid | 
                    Medium-term (3-7 years): Balanced advantage | Long-term (&gt;7 years): Aggressive hybrid
                  </p>
                </div>
                <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⚖️ Risk-Based Allocation</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Conservative: 20:80 | Moderate: 50:50 | Aggressive: 80:20 | 
                    Multi-asset adds gold/commodities for further diversification
                  </p>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">✅ Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Balanced risk-return profile</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Professional asset allocation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower volatility than pure equity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Automatic rebalancing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Single fund solution</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower returns than pure equity in bull markets</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Higher expense ratio than index funds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">No control over asset allocation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Complex taxation (equity vs debt treatment)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Fund manager dependency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">⚖️ Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Expected Returns:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">10-15% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">3-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Volatility:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Rebalancing:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Automatic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Min SIP:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">₹500/month</span>
                </div>
              </div>
            </div>

            {/* Fund Selection Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎯 Selection Guide</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 text-sm">For Beginners</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-xs">Balanced Advantage Funds - automatic allocation</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">For Growth</h4>
                  <p className="text-green-700 dark:text-green-300 text-xs">Aggressive Hybrid - higher equity allocation</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 text-sm">For Safety</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-xs">Conservative Hybrid - capital preservation</p>
                </div>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Choose based on your risk appetite and goals</li>
                <li>• Monitor asset allocation changes quarterly</li>
                <li>• Consider tax implications of equity vs debt</li>
                <li>• Use for core portfolio allocation</li>
                <li>• Review fund manager's allocation strategy</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}