import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function EquityMutualFunds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/market-linked-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Market-Linked Investments
            </Link>
            <Link 
              to="/learn/debt-mutual-funds"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Next: Debt Mutual Funds
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📊</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Equity Mutual Funds</h1>
              <p className="text-gray-600 dark:text-gray-300">Professional stock market investing made simple</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Equity Mutual Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Equity Mutual Funds?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Equity mutual funds pool money from multiple investors to invest in stocks of various companies. 
                  Professional fund managers research and select stocks, making it easier for beginners to invest in the stock market.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  These funds invest at least 65% of their assets in equity and equity-related instruments, 
                  offering diversification and professional management at a low cost.
                </p>
              </div>
            </section>

            {/* Types of Equity Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Equity Funds</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Large Cap Funds</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Invest in top 100 companies by market cap. Lower risk, stable returns.</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Mid Cap Funds</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Invest in companies ranked 101-250. Higher growth potential, moderate risk.</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Small Cap Funds</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm">Invest in companies ranked 251+. Highest growth potential, highest risk.</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Multi Cap Funds</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">Invest across all market caps. Balanced approach with flexibility.</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Sectoral Funds</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Focus on specific sectors like IT, Banking, Pharma. High risk-reward.</p>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">ELSS Funds</h3>
                  <p className="text-indigo-700 dark:text-indigo-300 text-sm">Tax-saving funds with 3-year lock-in. 80C deduction up to ₹1.5L.</p>
                </div>
              </div>
            </section>

            {/* Top Performing Funds 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Performing Equity Funds (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Fund Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">3Y Return</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Expense Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Quant Active Fund</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Flexi Cap</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">28.5%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.65%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Parag Parikh Flexi Cap</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Flexi Cap</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">24.8%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.68%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Motilal Oswal Midcap</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Mid Cap</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">32.1%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.72%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Canara Robeco Equity Tax Saver</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ELSS</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">21.4%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.58%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Investment Platforms */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Where to Invest (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Commission Platforms</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Groww - Free MF, goal-based SIP</li>
                    <li>• Zerodha Coin - ₹0 direct plans</li>
                    <li>• Paytm Money - Free + tax harvesting</li>
                    <li>• ET Money - AI recommendations</li>
                    <li>• Kuvera - Portfolio analytics</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">New Age Platforms</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• INDmoney - US stocks + MF</li>
                    <li>• Fisdom - Curated portfolios</li>
                    <li>• Scripbox - Goal-based investing</li>
                    <li>• Piggy - Automated investing</li>
                    <li>• Cube Wealth - Wealth management</li>
                  </ul>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Professional fund management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Diversification across stocks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">SIP option for small amounts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High liquidity (T+1 redemption)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Tax benefits (ELSS funds)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Market risk - can lose 30-50%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Annual expense ratio (0.5-2.5%)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">No control over stock selection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Exit load (usually 1% if &lt;1 year)</span>
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
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">📊 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Expected Returns:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">15-22% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">5+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Liquidity:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">High (T+1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Tax on Gains:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">12.5% LTCG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Min SIP:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">₹500/month</span>
                </div>
              </div>
            </div>

            {/* Related Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🧮 Related Calculators</h3>
              <div className="space-y-3">
                <Link to="/calculators/sip" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">SIP Calculator</span>
                </Link>
                <Link to="/calculators/step-up-sip" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Step-up SIP</span>
                </Link>
                <Link to="/calculators/mutual-fund-tracker" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">MF Tracker</span>
                </Link>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Start with large-cap funds for stability</li>
                <li>• Use SIP to average out market volatility</li>
                <li>• Choose direct plans to save on costs</li>
                <li>• Review portfolio annually, don't churn</li>
                <li>• Stay invested for 5+ years minimum</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}