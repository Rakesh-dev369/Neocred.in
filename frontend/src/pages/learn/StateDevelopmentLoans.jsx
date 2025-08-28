import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function StateDevelopmentLoans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-b border-purple-200 dark:border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/traditional-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Traditional Investments
            </Link>
            <Link 
              to="/learn/traditional-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Back to Traditional Investments
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏛️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">State Development Loans (SDLs)</h1>
              <p className="text-gray-600 dark:text-gray-300">State government bonds for infrastructure development</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are State Development Loans */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are State Development Loans?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                State Development Loans (SDLs) are debt securities issued by state governments to finance 
                their development expenditure and infrastructure projects. They offer slightly higher yields 
                than central government securities.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>2025 Update:</strong> SDL market has grown significantly with better price discovery and increased retail participation through RBI Retail Direct platform.
                </p>
              </div>
            </section>

            {/* Current Yields by State 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SDL Yields by State Quality (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">State Category</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">5 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">10 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Spread vs G-Sec</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">High Quality (Gujarat, Maharashtra)</td>
                      <td className="py-3">7.70% - 7.85%</td>
                      <td className="py-3">8.20% - 8.35%</td>
                      <td className="py-3">+25 to +40 bps</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Good Quality (Karnataka, Haryana)</td>
                      <td className="py-3">7.85% - 8.00%</td>
                      <td className="py-3">8.35% - 8.50%</td>
                      <td className="py-3">+40 to +55 bps</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Medium Quality (Tamil Nadu, AP)</td>
                      <td className="py-3">8.00% - 8.20%</td>
                      <td className="py-3">8.50% - 8.75%</td>
                      <td className="py-3">+55 to +70 bps</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Watch List (West Bengal, Punjab)</td>
                      <td className="py-3">8.20% - 8.50%</td>
                      <td className="py-3">8.75% - 9.10%</td>
                      <td className="py-3">+70 to +95 bps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Value 2025:</strong> Karnataka and Haryana SDLs offer good risk-return balance with 40-55 bps premium over G-Secs.
                </p>
              </div>
            </section>

            {/* State Fiscal Health Analysis */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">State Fiscal Health Analysis (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Revenue Surplus States</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Gujarat, Maharashtra - Strong industrial base</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">IT Hub States</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Karnataka, Telangana - Technology revenue growth</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Agricultural States</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Haryana, Punjab - Commodity price dependent</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">High Debt States</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">West Bengal, Rajasthan - Fiscal consolidation needed</p>
                </div>
              </div>
            </section>

            {/* Digital Investment Platforms 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Investment Platforms (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">RBI Retail Direct</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Direct access to SDL auctions</li>
                    <li>• Zero brokerage fees</li>
                    <li>• State-wise bond listings</li>
                    <li>• Real-time yield information</li>
                    <li>• Automatic settlement</li>
                    <li>• Portfolio tracking by state</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Stock Exchanges</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• NSE - Better SDL liquidity</li>
                    <li>• BSE - More state variety</li>
                    <li>• Real-time price discovery</li>
                    <li>• Institutional participation</li>
                    <li>• Credit spread analysis</li>
                    <li>• Historical yield data</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    Advantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Higher yields than G-Secs (25-95 bps premium)</li>
                    <li>• State government backing</li>
                    <li>• Regular semi-annual interest payments</li>
                    <li>• Diversification across states</li>
                    <li>• SLR eligible securities</li>
                    <li>• No TDS for individuals</li>
                    <li>• RBI Retail Direct access</li>
                    <li>• Better than corporate bonds safety</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Higher credit risk than G-Secs</li>
                    <li>• State-specific fiscal risks</li>
                    <li>• Lower liquidity than central bonds</li>
                    <li>• Complex credit analysis required</li>
                    <li>• Interest rate sensitivity</li>
                    <li>• Political and policy risks</li>
                    <li>• Limited retail awareness</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Amount:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Amount:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure Range:</span>
                  <span className="font-medium text-gray-900 dark:text-white">1-30 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-gray-900 dark:text-white">7.7% - 9.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Spread vs G-Sec:</span>
                  <span className="font-medium text-gray-900 dark:text-white">+25 to +95 bps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Low to Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">TDS:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">No TDS</span>
                </div>
              </div>
            </div>

            {/* Best States 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recommended States 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Top Quality</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Gujarat, Maharashtra - Lowest spreads</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Best Value</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Karnataka, Haryana - Good risk-return</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">High Yield</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Tamil Nadu, AP - Higher spreads</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Avoid</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">West Bengal, Punjab - Fiscal stress</p>
                </div>
              </div>
            </div>

            {/* Tax Information 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Interest:</strong> Taxed as per income slab</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Long-term Gains:</strong> 20% with indexation</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>TDS:</strong> No TDS for individuals</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">SDL Yield Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Compare state-wise yields and spreads</p>
              <Link 
                to="/calculators/sdl-yield"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                SDL Calculator →
              </Link>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
}