import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function IndexFundsETFs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-b border-orange-200 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/hybrid-funds"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Hybrid Funds
            </Link>
            <Link 
              to="/learn/futures-options"
              className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
            >
              Next: Futures & Options
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📈</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Index Funds & ETFs</h1>
              <p className="text-gray-600 dark:text-gray-300">Passive investing that tracks market indices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Index Funds & ETFs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Index Funds & ETFs?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Index funds and ETFs are passive investment vehicles that track a specific market index like Nifty 50 or Sensex. 
                  They aim to replicate the performance of the underlying index rather than trying to beat it.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Index Funds</strong> are mutual funds that can only be bought/sold at NAV after market hours. 
                  <strong>ETFs</strong> (Exchange Traded Funds) trade on stock exchanges like individual stocks during market hours.
                </p>
              </div>
            </section>

            {/* Popular Indices 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Indian Indices (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📊 Nifty 50</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Top 50 companies by market cap</p>
                  <ul className="text-blue-600 dark:text-blue-400 text-xs space-y-1">
                    <li>• 5Y Return: 15.8% CAGR</li>
                    <li>• Expense Ratio: 0.05-0.15%</li>
                    <li>• Most liquid and tracked index</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🏦 Nifty Next 50</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-2">Companies ranked 51-100</p>
                  <ul className="text-green-600 dark:text-green-400 text-xs space-y-1">
                    <li>• 5Y Return: 18.2% CAGR</li>
                    <li>• Higher growth potential</li>
                    <li>• Good complement to Nifty 50</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Nifty 100</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">Top 100 companies combined</p>
                  <ul className="text-purple-600 dark:text-purple-400 text-xs space-y-1">
                    <li>• 5Y Return: 16.5% CAGR</li>
                    <li>• Better diversification</li>
                    <li>• Single fund solution</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🌍 Nifty Total Market</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">Entire Indian equity market</p>
                  <ul className="text-orange-600 dark:text-orange-400 text-xs space-y-1">
                    <li>• 750+ stocks coverage</li>
                    <li>• Maximum diversification</li>
                    <li>• Launched in 2024</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Top Index Funds & ETFs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Index Funds & ETFs (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Fund/ETF Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Index</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Expense Ratio</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">AUM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">HDFC Index Fund - Nifty 50</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Nifty 50</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">0.10%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹8,500 Cr</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Nippon India ETF Nifty BeES</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Nifty 50</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">0.05%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹12,200 Cr</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">UTI Nifty Next 50 Index Fund</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Nifty Next 50</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">0.15%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹2,800 Cr</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ICICI Prudential Nifty 100 ETF</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Nifty 100</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">0.08%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹1,950 Cr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Index Funds vs ETFs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Index Funds vs ETFs - Key Differences</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Index Funds</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">ETFs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Trading</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">End of day NAV</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Real-time on exchange</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Minimum Investment</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹500 (SIP: ₹100)</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1 unit (~₹200-300)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Expense Ratio</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.10-0.20%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.05-0.15%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">SIP Facility</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">✅ Available</td>
                      <td className="py-3 px-4 text-red-600 dark:text-red-400">❌ Not directly</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Tracking Error</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.05-0.15%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.02-0.10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* International Index Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">International Index Options (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🇺🇸 US Market</h3>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Motilal Oswal S&P 500 Index Fund</li>
                    <li>• ICICI Prudential US Bluechip Equity</li>
                    <li>• Expense Ratio: 0.50-0.95%</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🌏 Emerging Markets</h3>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Edelweiss Greater China Equity</li>
                    <li>• Mirae Asset NYSE FANG+ ETF</li>
                    <li>• Higher growth, higher risk</li>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Very low expense ratios (0.05-0.20%)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Guaranteed market returns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">No fund manager risk</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Transparent and simple</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Beats 80% of active funds long-term</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Cannot outperform the market</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">No downside protection in bear markets</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Limited to index composition</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Tracking error can cause deviation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">May be boring for active investors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">📈 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Moderate-High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Expected Returns:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">12-16% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Investment Style:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Passive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Expense Ratio:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">0.05-0.20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Tracking Error:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">&lt;0.15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Min SIP:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">₹100/month</span>
                </div>
              </div>
            </div>

            {/* Portfolio Allocation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎯 Portfolio Allocation</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 text-sm">Core Holdings (60-70%)</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-xs">Nifty 50 or Nifty 100 index funds</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">Satellite (20-30%)</h4>
                  <p className="text-green-700 dark:text-green-300 text-xs">Nifty Next 50, sectoral indices</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 text-sm">International (10-20%)</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-xs">US or global index funds</p>
                </div>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Start with Nifty 50 for core allocation</li>
                <li>• Use SIP for rupee cost averaging</li>
                <li>• Check tracking error before investing</li>
                <li>• Choose direct plans to save costs</li>
                <li>• Stay invested for 7+ years minimum</li>
                <li>• Rebalance annually if needed</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}