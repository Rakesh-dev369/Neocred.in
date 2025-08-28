import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function DirectEquity() {
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
              to="/learn/market-linked-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Market-Linked Investments
            </Link>
            <Link 
              to="/learn/blue-chip-stocks"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Next: Blue-chip Stocks
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📈</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Direct Equity Investment</h1>
              <p className="text-gray-600 dark:text-gray-300">Buy shares directly from NSE/BSE listed companies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What is Direct Equity */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Direct Equity?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Direct equity investment means buying shares of companies directly from the stock exchanges (NSE/BSE). 
                  When you buy shares, you become a partial owner of the company and benefit from its growth and profits.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Unlike mutual funds, you have complete control over which stocks to buy, when to buy, and when to sell. 
                  This gives you the potential for higher returns but also requires more research and market knowledge.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Direct Ownership</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Own shares directly in your demat account</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Dividend Income</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Receive dividends directly from companies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Capital Appreciation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Benefit from stock price increases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🗳️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Voting Rights</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Vote in company decisions as shareholder</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Top Stocks & Market Performance 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Performing Stocks (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Stock</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Sector</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Market Cap</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">1Y Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Reliance Industries</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Oil & Gas</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹18.5L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+24%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">TCS</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">IT Services</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹15.2L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+18%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">HDFC Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Banking</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹12.8L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+15%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Infosys</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">IT Services</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹7.9L Cr</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+22%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Investment Platforms */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Trading Platforms (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Platform</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Brokerage</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Account Opening</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Special Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Zerodha</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹20/trade</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Free (Digital)</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Kite 4.0, AI insights</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Groww</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹20/trade</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Free (Instant)</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Beginner-friendly, Goal SIP</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Upstox</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹20/trade</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Free (Video KYC)</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Pro Web 3.0, Options chain</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Angel One</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹20/trade</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Free (Aadhaar)</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ARQ Prime, Smart Orders</td>
                    </tr>
                  </tbody>
                </table>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High return potential (15-20% annually)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Complete control over investments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Low brokerage costs (₹20/trade)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Dividend income + capital gains</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Liquidity - can sell anytime</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High risk - can lose 50-80%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Requires market knowledge & research</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Time-consuming to track</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Emotional decision making</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Market volatility stress</span>
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
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">15-25% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">5+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Liquidity:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Tax on Gains:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">12.5% LTCG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Min Investment:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">₹1 (Fractional)</span>
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
                <li>• Start with blue-chip stocks for beginners</li>
                <li>• Diversify across sectors (IT, Banking, FMCG)</li>
                <li>• Invest only surplus money you won't need for 5+ years</li>
                <li>• Do fundamental analysis before buying</li>
                <li>• Set stop-loss to limit downside risk</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}