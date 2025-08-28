import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function BlueChipStocks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/direct-equity"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Direct Equity
            </Link>
            <Link 
              to="/learn/mid-small-cap-stocks"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Next: Mid & Small-cap Stocks
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔵</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Blue-chip Stocks</h1>
              <p className="text-gray-600 dark:text-gray-300">Large, established companies with stable earnings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Blue-chip Stocks */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Blue-chip Stocks?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Blue-chip stocks are shares of large, well-established companies with a history of reliable performance, 
                  strong financials, and market leadership. These companies typically have market capitalizations above ₹1 lakh crore.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Named after the highest-value poker chips, blue-chip stocks are considered safer investments 
                  with steady dividend payments and lower volatility compared to mid or small-cap stocks.
                </p>
              </div>
            </section>

            {/* Top Blue-chip Stocks 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Blue-chip Stocks (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Company</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Sector</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Market Cap</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Dividend Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Reliance Industries</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Oil & Gas</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹18.5L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">0.8%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">TCS</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">IT Services</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹15.2L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">2.1%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">HDFC Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Banking</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹12.8L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">1.2%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ICICI Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Banking</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹8.9L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">0.9%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Infosys</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">IT Services</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹7.9L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">2.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sector-wise Blue-chips */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sector-wise Blue-chip Leaders</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🏦 Banking</h3>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• HDFC Bank - Private banking leader</li>
                    <li>• ICICI Bank - Digital banking pioneer</li>
                    <li>• SBI - Largest public sector bank</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">💻 IT Services</h3>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• TCS - Global IT services giant</li>
                    <li>• Infosys - Digital transformation leader</li>
                    <li>• Wipro - Enterprise solutions provider</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏭 Conglomerates</h3>
                  <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                    <li>• Reliance - Oil, telecom, retail</li>
                    <li>• Tata Group - Diversified conglomerate</li>
                    <li>• Adani Group - Infrastructure leader</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🛍️ FMCG</h3>
                  <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                    <li>• Hindustan Unilever - Consumer goods</li>
                    <li>• ITC - Tobacco & FMCG</li>
                    <li>• Nestle India - Food & beverages</li>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower volatility and stable returns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Regular dividend payments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Strong financial fundamentals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Market leadership positions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Better during market downturns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower growth potential vs mid/small caps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Higher share prices (less affordable)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Slower to adapt to market changes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Limited upside during bull markets</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">May underperform in growth phases</span>
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
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">🔵 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Expected Returns:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">12-18% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">3-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Dividend Yield:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">1-3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Market Cap:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">₹1L+ Cr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Volatility:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Low-Moderate</span>
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
                <Link to="/calculators/lumpsum" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Lumpsum Calculator</span>
                </Link>
                <Link to="/calculators/goal-based-investment" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Goal Planning</span>
                </Link>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Focus on companies with consistent earnings growth</li>
                <li>• Check debt-to-equity ratio (&lt;0.5 is good)</li>
                <li>• Look for ROE &gt;15% consistently</li>
                <li>• Diversify across 8-10 blue-chip stocks</li>
                <li>• Hold for long-term wealth creation</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}