import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function MidSmallCapStocks() {
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
              to="/learn/blue-chip-stocks"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blue-chip Stocks
            </Link>
            <Link 
              to="/learn/ipos"
              className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
            >
              Next: IPOs
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Mid & Small-cap Stocks</h1>
              <p className="text-gray-600 dark:text-gray-300">Higher growth potential with increased risk</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Mid & Small-cap Stocks */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Mid & Small-cap Stocks?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Mid-cap stocks</strong> are companies ranked 101-250 by market capitalization (₹5,000-20,000 crores). 
                  <strong>Small-cap stocks</strong> are companies ranked 251+ with market cap below ₹5,000 crores.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  These companies offer higher growth potential than large-caps but come with increased volatility and risk. 
                  They're often in emerging sectors or expanding rapidly in established markets.
                </p>
              </div>
            </section>

            {/* Top Performers 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Mid & Small-cap Performers (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4">🎯 Mid-cap Stars</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Company</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Sector</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">1Y Return</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">Zomato</td>
                          <td className="py-2 px-3 text-gray-600 dark:text-gray-300">Food Tech</td>
                          <td className="py-2 px-3 text-green-600 dark:text-green-400">+85%</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">Divi's Labs</td>
                          <td className="py-2 px-3 text-gray-600 dark:text-gray-300">Pharma</td>
                          <td className="py-2 px-3 text-green-600 dark:text-green-400">+42%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">Tube Investments</td>
                          <td className="py-2 px-3 text-gray-600 dark:text-gray-300">Auto Parts</td>
                          <td className="py-2 px-3 text-green-600 dark:text-green-400">+38%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">🚀 Small-cap Winners</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Company</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Sector</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">1Y Return</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">Ircon International</td>
                          <td className="py-2 px-3 text-gray-600 dark:text-gray-300">Infrastructure</td>
                          <td className="py-2 px-3 text-green-600 dark:text-green-400">+125%</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">Mazagon Dock</td>
                          <td className="py-2 px-3 text-gray-600 dark:text-gray-300">Defense</td>
                          <td className="py-2 px-3 text-green-600 dark:text-green-400">+95%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">SJVN</td>
                          <td className="py-2 px-3 text-gray-600 dark:text-gray-300">Power</td>
                          <td className="py-2 px-3 text-green-600 dark:text-green-400">+78%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Trending Sectors 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trending Sectors in Mid & Small-caps (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🛡️ Defense & Aerospace</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-2">Government focus on Make in India</p>
                  <ul className="text-green-600 dark:text-green-400 text-xs space-y-1">
                    <li>• HAL, BEL, Mazagon Dock</li>
                    <li>• 15% defense budget increase</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔋 Renewable Energy</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Solar, wind, and battery storage</p>
                  <ul className="text-blue-600 dark:text-blue-400 text-xs space-y-1">
                    <li>• Suzlon, Inox Wind, NHPC</li>
                    <li>• 500 GW renewable target by 2030</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏗️ Infrastructure</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">Roads, railways, and urban development</p>
                  <ul className="text-purple-600 dark:text-purple-400 text-xs space-y-1">
                    <li>• Ircon, RVNL, KEC International</li>
                    <li>• ₹111 lakh crore infra spending</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💊 Specialty Chemicals</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">API manufacturing and exports</p>
                  <ul className="text-orange-600 dark:text-orange-400 text-xs space-y-1">
                    <li>• Divi's Labs, Laurus Labs</li>
                    <li>• China+1 strategy benefits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Investment Strategies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Investment Strategies</h2>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Growth Investing</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Focus on companies with 20%+ revenue growth, expanding market share, and strong management.</p>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">💰 Value Investing</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">Look for undervalued companies with strong fundamentals trading below intrinsic value.</p>
                </div>
                <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🌊 Momentum Investing</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Ride the trend with stocks showing strong price momentum and positive news flow.</p>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High growth potential (25-50% returns)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Early entry into emerging sectors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower share prices (more affordable)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Agile and innovative companies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Multi-bagger potential</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High volatility (50-80% swings)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower liquidity and wider spreads</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Business execution risks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Limited research coverage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Susceptible to market sentiment</span>
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
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">🎯 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Expected Returns:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">20-40% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">5-7 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Volatility:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Mid-cap Range:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">₹5K-20K Cr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Small-cap Range:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">&lt;₹5K Cr</span>
                </div>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-300 dark:border-red-700">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">⚠️ Risk Warning</h3>
              <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
                <p>• High volatility can cause 50-80% price swings</p>
                <p>• Only invest 20-30% of portfolio in mid/small caps</p>
                <p>• Requires active monitoring and research</p>
                <p>• Not suitable for conservative investors</p>
                <p>• Can underperform for extended periods</p>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Research management quality and track record</li>
                <li>• Check promoter holding (&gt;50% is good)</li>
                <li>• Look for debt-free or low-debt companies</li>
                <li>• Diversify across 15-20 stocks minimum</li>
                <li>• Use SIP approach to average out volatility</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}