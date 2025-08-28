import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SovereignGoldBonds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-700">
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
              to="/learn/silver-investment"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Silver Investment
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏛️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sovereign Gold Bonds (SGB)</h1>
              <p className="text-gray-600 dark:text-gray-300">Government-backed gold investment with interest income</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Sovereign Gold Bonds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Sovereign Gold Bonds?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sovereign Gold Bonds (SGBs) are government securities denominated in grams of gold. 
                They offer an alternative to holding physical gold with additional interest income.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  <strong>2025 Update:</strong> SGB Series 2025-26 launched with 2.50% interest rate. Enhanced digital subscription through RBI Retail Direct and online platforms.
                </p>
              </div>
            </section>

            {/* SGB Series 2025 Details */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SGB Series 2025-26 Details (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Parameter</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Details</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Online Discount</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Issue Price</td>
                      <td className="py-3">₹7,420/gram</td>
                      <td className="py-3">₹7,370/gram (₹50 discount)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Interest Rate</td>
                      <td className="py-3">2.50% per annum</td>
                      <td className="py-3">Same rate</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Minimum Investment</td>
                      <td className="py-3">1 gram (₹7,420)</td>
                      <td className="py-3">1 gram (₹7,370)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Maximum Investment</td>
                      <td className="py-3">4 kg per fiscal year</td>
                      <td className="py-3">Same limit</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Tenure</td>
                      <td className="py-3">8 years</td>
                      <td className="py-3">Exit after 5 years</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Interest Payment</td>
                      <td className="py-3">Semi-annual</td>
                      <td className="py-3">Same frequency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Deal 2025:</strong> Online subscription offers ₹50/gram discount. Subscribe through RBI Retail Direct or authorized banks.
                </p>
              </div>
            </section>

            {/* SGB Features & Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">SGB Features & Benefits (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interest Income</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">2.50% per annum paid semi-annually</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Capital Appreciation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Linked to gold price movements</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Benefits</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Capital gains tax-free at maturity</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Collateral</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Can be used for loan against securities</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trading Facility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Listed on NSE, BSE for liquidity</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Demat Safety</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Electronic form, no storage issues</p>
                </div>
              </div>
            </section>

            {/* Where to Buy SGBs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Where to Buy SGBs (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">Primary Market</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• RBI Retail Direct - Zero fees, ₹50 discount</li>
                    <li>• SBI, HDFC, ICICI Banks - Online/offline</li>
                    <li>• Post Offices - Designated branches</li>
                    <li>• Stock Holding Corporation (SHCIL)</li>
                    <li>• Authorized agents and brokers</li>
                    <li>• Zerodha, Groww - Online platforms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Secondary Market</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• NSE - Better liquidity</li>
                    <li>• BSE - More retail participation</li>
                    <li>• Online brokers - Real-time trading</li>
                    <li>• Market makers - Continuous quotes</li>
                    <li>• Institutional platforms</li>
                    <li>• Mobile trading apps</li>
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
                    <li>• Additional 2.50% interest income</li>
                    <li>• No storage or security issues</li>
                    <li>• Government guarantee and backing</li>
                    <li>• Tax-free capital gains at maturity</li>
                    <li>• Can be used as loan collateral</li>
                    <li>• Tradeable on stock exchanges</li>
                    <li>• ₹50 online discount available</li>
                    <li>• Demat account safety</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• 8-year lock-in period</li>
                    <li>• Limited liquidity in secondary market</li>
                    <li>• Interest income is taxable</li>
                    <li>• Gold price volatility risk</li>
                    <li>• Annual investment limit (4 kg)</li>
                    <li>• Requires demat account</li>
                    <li>• No physical gold possession</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-amber-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Issue Price:</span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">₹7,420/gram</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Online Price:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹7,370/gram</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">2.50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">1 gram</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">4 kg/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">8 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Early Exit:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">After 5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax at Maturity:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Tax-free</span>
                </div>
              </div>
            </div>

            {/* SGB Series Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SGB Series 2025-26</h3>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h4 className="font-medium text-amber-900 dark:text-amber-100">Series I (Apr 2025)</h4>
                  <p className="text-xs text-amber-700 dark:text-amber-300">Subscription: Apr 8-12, 2025</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Series II (Jul 2025)</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Subscription: Jul 15-19, 2025</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Series III (Oct 2025)</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Subscription: Oct 14-18, 2025</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Series IV (Jan 2026)</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Subscription: Jan 13-17, 2026</p>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Maturity:</strong> Capital gains tax-free (8 years)</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Interest:</strong> Taxed as per income slab</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>Early Exit:</strong> Capital gains tax applicable</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">SGB Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate SGB returns with interest</p>
              <Link 
                to="/calculators/sgb-return"
                className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                SGB Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}