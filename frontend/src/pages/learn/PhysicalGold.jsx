import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PhysicalGold() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-b border-yellow-200 dark:border-yellow-700">
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
              to="/learn/gold-etfs"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Gold ETFs
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🥇</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Physical Gold Investment</h1>
              <p className="text-gray-600 dark:text-gray-300">Traditional wealth preservation through gold jewelry, coins & bars</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Physical Gold */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Physical Gold Investment?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Physical gold investment involves buying tangible gold in the form of jewelry, coins, bars, or biscuits. 
                It's considered a traditional hedge against inflation and economic uncertainty.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  <strong>2025 Update:</strong> Gold prices remain volatile with digital gold platforms offering fractional ownership and better liquidity options.
                </p>
              </div>
            </section>

            {/* Current Gold Prices 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Gold Prices (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Gold Type</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Price per 10g</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Making Charges</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">24K Gold Coins</td>
                      <td className="py-3">₹74,200</td>
                      <td className="py-3">2-5%</td>
                      <td className="py-3">₹75,700 - ₹77,900</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">24K Gold Bars</td>
                      <td className="py-3">₹74,200</td>
                      <td className="py-3">1-3%</td>
                      <td className="py-3">₹74,900 - ₹76,400</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">22K Gold Jewelry</td>
                      <td className="py-3">₹68,000</td>
                      <td className="py-3">8-25%</td>
                      <td className="py-3">₹73,400 - ₹85,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">18K Gold Jewelry</td>
                      <td className="py-3">₹55,650</td>
                      <td className="py-3">10-30%</td>
                      <td className="py-3">₹61,200 - ₹72,350</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Silver (per kg)</td>
                      <td className="py-3">₹92,500</td>
                      <td className="py-3">5-15%</td>
                      <td className="py-3">₹97,100 - ₹106,400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Value 2025:</strong> Gold bars and coins offer lowest making charges. Avoid jewelry for pure investment purposes.
                </p>
              </div>
            </section>

            {/* Types of Physical Gold */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Physical Gold (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gold Coins</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Best for investment - low making charges (2-5%)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gold Bars</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lowest premium - ideal for bulk investment (1-3%)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gold Jewelry</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Cultural value but high making charges (8-25%)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gold Biscuits</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Bank-issued, certified purity (2-5%)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Gold</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fractional ownership, no storage issues</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Silver</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Alternative precious metal, higher volatility</p>
                </div>
              </div>
            </section>

            {/* Digital Gold Platforms 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Where to Buy Gold (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-3">Digital Gold Platforms</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Paytm Gold - Start from ₹1</li>
                    <li>• PhonePe Gold - Instant buying/selling</li>
                    <li>• Google Pay Gold - UPI integration</li>
                    <li>• Groww Gold - SIP in gold</li>
                    <li>• MMTC-PAMP - Direct from refiner</li>
                    <li>• Augmont Gold - Home delivery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Traditional Channels</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Banks (SBI, HDFC, ICICI) - Coins & bars</li>
                    <li>• Tanishq, Kalyan - BIS hallmarked</li>
                    <li>• Local jewelers - Negotiable rates</li>
                    <li>• Bullion dealers - Wholesale rates</li>
                    <li>• Post offices - Limited locations</li>
                    <li>• Cooperative banks - Regional options</li>
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
                    <li>• Hedge against inflation and currency devaluation</li>
                    <li>• Cultural and emotional value in India</li>
                    <li>• No counterparty risk - tangible asset</li>
                    <li>• High liquidity during crisis</li>
                    <li>• Portfolio diversification benefits</li>
                    <li>• Accepted globally as store of value</li>
                    <li>• Digital gold offers fractional ownership</li>
                    <li>• No lock-in period or maturity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• High making charges (8-25% for jewelry)</li>
                    <li>• Storage and security costs/risks</li>
                    <li>• No regular income or dividends</li>
                    <li>• High price volatility</li>
                    <li>• Purity and quality concerns</li>
                    <li>• 3% GST on purchases</li>
                    <li>• Capital gains tax applicable</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-yellow-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">24K Gold Price:</span>
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">₹74,200/10g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">22K Gold Price:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹68,000/10g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Silver Price:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹92,500/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">GST:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Making Charges:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">1-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Storage:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">Required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Returns:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Volatile</span>
                </div>
              </div>
            </div>

            {/* Best Buying Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Buying Options 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Investment Grade</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Gold coins, bars - lowest making charges</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Digital Gold</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Paytm, PhonePe - fractional ownership</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Banks</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">SBI, HDFC - certified purity</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Avoid</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Jewelry for investment - high charges</p>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>GST:</strong> 3% on all gold purchases</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Short-term:</strong> As per income slab (&lt;3 years)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Long-term:</strong> 20% with indexation (&gt;3 years)</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Gold Investment Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate gold returns and tax implications</p>
              <Link 
                to="/calculators/gold-investment"
                className="inline-block bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Gold Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}