import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function GovernmentBonds() {
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
              to="/learn/traditional-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Traditional Investments
            </Link>
            <Link 
              to="/learn/corporate-bonds"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Corporate Bonds
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏛️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Government Bonds (G-Secs)</h1>
              <p className="text-gray-600 dark:text-gray-300">Sovereign-backed debt securities with guaranteed returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Government Bonds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Government Bonds?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Government bonds (G-Secs) are debt securities issued by the Government of India to finance its expenditure. 
                They are considered the safest investment option as they carry sovereign guarantee with zero default risk.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>2025 Update:</strong> RBI Retail Direct platform has made G-Secs accessible to retail investors with zero brokerage fees and minimum investment of ₹10,000.
                </p>
              </div>
            </section>

            {/* Current Yields 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current G-Sec Yields (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tenure</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Yield</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Coupon</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">1 Year</td>
                      <td className="py-3">6.85%</td>
                      <td className="py-3">6.80%</td>
                      <td className="py-3">Jan 2026</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">3 Years</td>
                      <td className="py-3">7.15%</td>
                      <td className="py-3">7.10%</td>
                      <td className="py-3">Jan 2028</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">5 Years</td>
                      <td className="py-3">7.45%</td>
                      <td className="py-3">7.40%</td>
                      <td className="py-3">Jan 2030</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">10 Years</td>
                      <td className="py-3">7.95%</td>
                      <td className="py-3">7.90%</td>
                      <td className="py-3">Jan 2035</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">30 Years</td>
                      <td className="py-3">8.25%</td>
                      <td className="py-3">8.20%</td>
                      <td className="py-3">Jan 2055</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">FRB 2031</td>
                      <td className="py-3">7.15%*</td>
                      <td className="py-3">Variable</td>
                      <td className="py-3">Dec 2031</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Entry Point 2025:</strong> 10-year G-Secs offer attractive yields around 8% with good liquidity and moderate duration risk.
                </p>
              </div>
            </section>

            {/* Types of G-Secs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Government Securities (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fixed Rate Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fixed coupon rate throughout tenure (Most common)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Floating Rate Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Interest linked to NSC rate + spread</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Treasury Bills</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Short-term (91/182/364 days), zero coupon</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Inflation Indexed Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Principal adjusted for WPI inflation</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sovereign Gold Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Gold-backed with 2.5% additional interest</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">STRIPS</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Separate trading of principal and interest</p>
                </div>
              </div>
            </section>

            {/* Digital Investment Platforms 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Investment Platforms (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">RBI Retail Direct</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Zero brokerage fees</li>
                    <li>• Direct primary market access</li>
                    <li>• Online account opening</li>
                    <li>• Real-time portfolio tracking</li>
                    <li>• Automatic settlement</li>
                    <li>• Mobile app available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Stock Exchanges</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• NSE goBID platform</li>
                    <li>• BSE StAR MF platform</li>
                    <li>• Better liquidity in secondary market</li>
                    <li>• Real-time price discovery</li>
                    <li>• Institutional participation</li>
                    <li>• Advanced trading features</li>
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
                    <li>• Zero default risk (sovereign guarantee)</li>
                    <li>• Regular semi-annual interest payments</li>
                    <li>• Higher returns than FDs (7-8% vs 6-7%)</li>
                    <li>• Tradeable in secondary market</li>
                    <li>• No TDS on interest for individuals</li>
                    <li>• Eligible for SLR compliance</li>
                    <li>• Long-term capital gains indexation</li>
                    <li>• RBI Retail Direct zero fees</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Interest rate risk (bond prices fall when rates rise)</li>
                    <li>• Lower liquidity vs bank deposits</li>
                    <li>• Minimum ₹10,000 investment</li>
                    <li>• Requires demat account</li>
                    <li>• Complex for first-time investors</li>
                    <li>• No premature withdrawal facility</li>
                    <li>• Mark-to-market volatility</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-green-600" />
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
                  <span className="font-medium text-gray-900 dark:text-white">1-40 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-gray-900 dark:text-white">6.8% - 8.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Payment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Semi-annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Zero Credit Risk</span>
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

            {/* Best Investment Platforms 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Platforms 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">RBI Retail Direct</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Zero fees, direct access</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">NSE goBID</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Better liquidity, institutional access</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Gilt Mutual Funds</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Professional management, ₹500 minimum</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Online Brokers</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Zerodha, Groww, Angel One</p>
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
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Bond Yield Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate returns and yield-to-maturity</p>
              <Link 
                to="/calculators/bond-yield"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Bond Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}