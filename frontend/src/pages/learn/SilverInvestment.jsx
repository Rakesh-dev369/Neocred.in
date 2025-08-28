import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SilverInvestment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-b border-gray-200 dark:border-gray-700">
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
            <span className="text-4xl">🥈</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Silver Investment</h1>
              <p className="text-gray-600 dark:text-gray-300">Alternative precious metal with industrial demand</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Silver Investment */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Silver Investment?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Silver investment involves buying physical silver, silver ETFs, or silver-related securities. 
                Silver serves as both a precious metal and industrial commodity with dual demand drivers.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  <strong>2025 Update:</strong> Silver prices driven by industrial demand (solar panels, electronics) and investment demand, offering higher volatility than gold.
                </p>
              </div>
            </section>

            {/* Silver Prices & Forms 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Silver Prices & Investment Forms (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Silver Form</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Price per kg</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Making Charges</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Silver Bars (999 purity)</td>
                      <td className="py-3">₹92,500</td>
                      <td className="py-3">2-5%</td>
                      <td className="py-3">₹94,350 - ₹97,125</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Silver Coins (999 purity)</td>
                      <td className="py-3">₹92,500</td>
                      <td className="py-3">3-8%</td>
                      <td className="py-3">₹95,275 - ₹99,900</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Silver Jewelry (925 purity)</td>
                      <td className="py-3">₹85,200</td>
                      <td className="py-3">15-30%</td>
                      <td className="py-3">₹97,980 - ₹110,760</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Silver ETF (per unit)</td>
                      <td className="py-3">₹925</td>
                      <td className="py-3">0.5-1% (annual)</td>
                      <td className="py-3">₹925 + expense ratio</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Digital Silver</td>
                      <td className="py-3">₹92.50/gram</td>
                      <td className="py-3">0.5-2%</td>
                      <td className="py-3">₹92.96 - ₹94.35/gram</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Value 2025:</strong> Silver bars offer lowest making charges. Silver ETFs provide convenience without storage issues.
                </p>
              </div>
            </section>

            {/* Silver Investment Options */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Silver Investment Options (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Physical Silver</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Bars, coins, jewelry - tangible ownership</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Silver ETFs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Exchange-traded funds tracking silver prices</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Silver Mutual Funds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Professionally managed silver investments</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Silver</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fractional ownership through apps</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Silver Mining Stocks</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Shares of silver mining companies</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Silver Futures</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Derivative contracts for advanced investors</p>
                </div>
              </div>
            </section>

            {/* Silver vs Gold Comparison */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Silver vs Gold Investment (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Silver Advantages</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lower entry barrier (₹92/gram vs ₹7,420/gram)</li>
                    <li>• Higher industrial demand growth</li>
                    <li>• More volatile - higher return potential</li>
                    <li>• Gold-silver ratio opportunities</li>
                    <li>• Growing solar and electronics demand</li>
                    <li>• Better affordability for retail investors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">Gold Advantages</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Better store of value historically</li>
                    <li>• Lower volatility and storage costs</li>
                    <li>• Higher liquidity globally</li>
                    <li>• Central bank reserves and backing</li>
                    <li>• Cultural preference in India</li>
                    <li>• More investment products available</li>
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
                    <li>• Lower entry cost vs gold (₹92/gram)</li>
                    <li>• Dual demand - investment + industrial</li>
                    <li>• Higher volatility = higher return potential</li>
                    <li>• Growing industrial applications (solar, 5G)</li>
                    <li>• Hedge against inflation</li>
                    <li>• Portfolio diversification benefits</li>
                    <li>• Multiple investment options available</li>
                    <li>• Gold-silver ratio trading opportunities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Higher volatility than gold</li>
                    <li>• Bulky storage requirements</li>
                    <li>• Tarnishing and maintenance issues</li>
                    <li>• Lower liquidity vs gold</li>
                    <li>• Industrial demand cyclicality</li>
                    <li>• Higher making charges on jewelry</li>
                    <li>• 3% GST on purchases</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-gray-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Silver Price:</span>
                  <span className="font-medium text-gray-600 dark:text-gray-400">₹92.50/gram</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Gold-Silver Ratio:</span>
                  <span className="font-medium text-gray-900 dark:text-white">80:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹925 (ETF)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">GST:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Storage:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Volatility:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Industrial Demand:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Growing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Medium</span>
                </div>
              </div>
            </div>

            {/* Investment Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Investment Options 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Silver ETFs</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Convenient, no storage issues</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Digital Silver</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Fractional ownership, mobile apps</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Silver Bars</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Physical ownership, lowest premium</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Avoid</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Silver jewelry - high making charges</p>
                </div>
              </div>
            </div>

            {/* Market Drivers */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Market Drivers 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Solar Demand:</strong> Growing renewable energy adoption</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Electronics:</strong> 5G, EVs, semiconductors</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Investment:</strong> Inflation hedge, portfolio diversification</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-gray-500 to-slate-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Silver Investment Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate silver returns and costs</p>
              <Link 
                to="/calculators/silver-investment"
                className="inline-block bg-white text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Silver Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}