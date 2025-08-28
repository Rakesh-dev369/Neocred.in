import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function DebtMutualFunds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-b border-green-200 dark:border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/equity-mutual-funds"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Equity Mutual Funds
            </Link>
            <Link 
              to="/learn/hybrid-funds"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
            >
              Next: Hybrid Funds
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📋</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Debt Mutual Funds</h1>
              <p className="text-gray-600 dark:text-gray-300">Fixed income investments through mutual funds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Debt Mutual Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Debt Mutual Funds?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Debt mutual funds invest in fixed-income securities like government bonds, corporate bonds, treasury bills, 
                  and money market instruments. They provide steady returns with lower risk compared to equity funds.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  These funds are ideal for conservative investors seeking regular income, capital preservation, 
                  and portfolio diversification. Returns are generated through interest income and capital appreciation.
                </p>
              </div>
            </section>

            {/* Types of Debt Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Debt Funds (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💧 Liquid Funds</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Maturity: Up to 91 days | Returns: 6-7%</p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs">Best for emergency funds and short-term parking</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">⏰ Ultra Short Duration</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-2">Maturity: 3-6 months | Returns: 7-8%</p>
                  <p className="text-green-600 dark:text-green-400 text-xs">Slightly higher returns than liquid funds</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📅 Short Duration</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">Maturity: 1-3 years | Returns: 8-9%</p>
                  <p className="text-orange-600 dark:text-orange-400 text-xs">Good for 1-2 year investment horizon</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏛️ Gilt Funds</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">Government bonds | Returns: 7-10%</p>
                  <p className="text-purple-600 dark:text-purple-400 text-xs">Zero credit risk, interest rate sensitive</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">🏢 Corporate Bond Funds</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm mb-2">AA+ rated bonds | Returns: 8-11%</p>
                  <p className="text-red-600 dark:text-red-400 text-xs">Higher returns with credit risk</p>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">💰 Credit Risk Funds</h3>
                  <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-2">Below AA rated | Returns: 9-12%</p>
                  <p className="text-indigo-600 dark:text-indigo-400 text-xs">Highest returns but higher credit risk</p>
                </div>
              </div>
            </section>

            {/* Top Performing Debt Funds 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Performing Debt Funds (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Fund Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">1Y Return</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Expense Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">HDFC Corporate Bond Fund</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Corporate Bond</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">9.2%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.45%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ICICI Prudential Liquid Fund</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Liquid</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.8%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.25%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Axis Banking & PSU Debt</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Banking & PSU</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">8.5%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.52%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">SBI Magnum Gilt Fund</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Gilt</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.9%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">0.65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Interest Rate Scenario 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Interest Rate Environment (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📈 Current Rates</h3>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• RBI Repo Rate: 6.50%</li>
                    <li>• 10Y G-Sec Yield: 7.15%</li>
                    <li>• Bank FD Rates: 6.5-7.5%</li>
                    <li>• Corporate Bond Yield: 8-10%</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 RBI Outlook</h3>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Inflation target: 4% (+/- 2%)</li>
                    <li>• Rate cuts expected in H2 2025</li>
                    <li>• Focus on growth revival</li>
                    <li>• Stable currency policy</li>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower volatility than equity funds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Regular income generation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Better than bank FDs (post-tax)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High liquidity (T+1 redemption)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Professional fund management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Interest rate risk (bond prices fall when rates rise)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Credit risk in corporate bonds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower returns than equity in long term</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Taxation as per income slab (short-term)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Inflation risk over long periods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">📋 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">Low-Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Expected Returns:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">6-10% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">1-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Liquidity:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">High (T+1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Tax (LTCG):</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">20% with indexation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Min SIP:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">₹500/month</span>
                </div>
              </div>
            </div>

            {/* Fund Selection Criteria */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎯 Selection Criteria</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 text-sm">Credit Quality</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-xs">Check portfolio credit ratings (AAA/AA+)</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">Duration Risk</h4>
                  <p className="text-green-700 dark:text-green-300 text-xs">Match fund duration with investment horizon</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 text-sm">Expense Ratio</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-xs">Lower is better (&lt;0.75% for debt funds)</p>
                </div>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Use liquid funds for emergency corpus</li>
                <li>• Avoid credit risk funds unless experienced</li>
                <li>• Consider gilt funds when rates are falling</li>
                <li>• Ladder investments across different durations</li>
                <li>• Review portfolio credit quality regularly</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}