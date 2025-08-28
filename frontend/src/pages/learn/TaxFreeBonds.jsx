import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function TaxFreeBonds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
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
              to="/learn/state-development-loans"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: State Development Loans
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🚫</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tax-free Bonds</h1>
              <p className="text-gray-600 dark:text-gray-300">Government-backed bonds with tax-free interest income</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Tax-free Bonds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Tax-free Bonds?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tax-free bonds are debt securities issued by government entities where the interest income 
                is completely exempt from income tax. They offer lower yields but provide tax-efficient returns.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>2025 Status:</strong> No new tax-free bonds issued since 2019. Only secondary market trading available with limited liquidity and premium pricing.
                </p>
              </div>
            </section>

            {/* Available Tax-free Bonds 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Available Tax-free Bonds (Secondary Market 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Issuer</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Coupon</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Market Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">NHAI</td>
                      <td className="py-3">7.75%</td>
                      <td className="py-3">2029</td>
                      <td className="py-3">₹118-122</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">IRFC</td>
                      <td className="py-3">7.50%</td>
                      <td className="py-3">2029</td>
                      <td className="py-3">₹115-119</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">HUDCO</td>
                      <td className="py-3">8.00%</td>
                      <td className="py-3">2028</td>
                      <td className="py-3">₹120-125</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">PFC</td>
                      <td className="py-3">8.20%</td>
                      <td className="py-3">2028</td>
                      <td className="py-3">₹122-127</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">REC</td>
                      <td className="py-3">7.72%</td>
                      <td className="py-3">2029</td>
                      <td className="py-3">₹117-121</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">NTPC</td>
                      <td className="py-3">7.75%</td>
                      <td className="py-3">2027</td>
                      <td className="py-3">₹116-120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>Premium Pricing:</strong> All bonds trading at 15-25% premium due to tax benefits and limited supply.
                </p>
              </div>
            </section>

            {/* Tax Equivalent Yield Calculator */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tax Equivalent Yield Analysis (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">20% Tax Bracket</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">6% tax-free = 7.5% taxable equivalent</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">30% Tax Bracket</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">6% tax-free = 8.57% taxable equivalent</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">30% + Cess (31.2%)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">6% tax-free = 8.72% taxable equivalent</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Formula</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tax-free Yield ÷ (1 - Tax Rate)</p>
                </div>
              </div>
            </section>

            {/* Better Alternatives 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Better Tax-Efficient Alternatives (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">EEE Investments</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• PPF - 7.1% tax-free, 15-year lock-in</li>
                    <li>• ELSS - Equity returns + 80C deduction</li>
                    <li>• NPS - Additional ₹50,000 deduction</li>
                    <li>• EPF - 8.25% tax-free for employees</li>
                    <li>• Sukanya Samriddhi - 8.2% for girl child</li>
                    <li>• NSC - 6.8% with 80C benefits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Market-Linked Options</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Debt Mutual Funds - Indexation benefits</li>
                    <li>• Gilt Funds - Government bond exposure</li>
                    <li>• Hybrid Funds - Balanced allocation</li>
                    <li>• Index Funds - Long-term tax efficiency</li>
                    <li>• SGB - Gold + 2.5% interest</li>
                    <li>• Real Estate - Rental income + appreciation</li>
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
                    <li>• Complete tax exemption on interest</li>
                    <li>• Government/PSU backing (AAA rating)</li>
                    <li>• Suitable for high tax bracket investors</li>
                    <li>• No TDS deduction</li>
                    <li>• Long-term wealth preservation</li>
                    <li>• Predictable returns</li>
                    <li>• Tradeable in secondary market</li>
                    <li>• Nomination facility available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• No new issuances since 2019</li>
                    <li>• Premium pricing (15-25% above face value)</li>
                    <li>• Lower absolute yields (4.5-6.2%)</li>
                    <li>• Very limited liquidity</li>
                    <li>• Interest rate risk</li>
                    <li>• Long remaining tenure (5-15 years)</li>
                    <li>• Better alternatives available</li>
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
                  <span className="text-gray-600 dark:text-gray-400">New Issuances:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">Discontinued</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Availability:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Secondary Market</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Market Price:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹115-127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Effective Yield:</span>
                  <span className="font-medium text-gray-900 dark:text-white">4.5% - 6.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Remaining Tenure:</span>
                  <span className="font-medium text-gray-900 dark:text-white">3-10 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Interest Tax-free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">Very Low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Credit Rating:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">AAA</span>
                </div>
              </div>
            </div>

            {/* Where to Buy 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where to Buy (Limited)</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Stock Exchanges</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">NSE, BSE - Very limited liquidity</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Online Brokers</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Zerodha, Groww - Rare availability</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="font-medium text-red-900 dark:text-red-100">Banks</h4>
                  <p className="text-xs text-red-700 dark:text-red-300">Very limited inventory</p>
                </div>
              </div>
            </div>

            {/* Better Alternatives */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recommended Alternatives</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>PPF:</strong> 7.1% tax-free, EEE status</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>ELSS:</strong> Equity returns + 80C deduction</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Debt MFs:</strong> Indexation benefits</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Tax Equivalent Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Compare tax-free vs taxable returns</p>
              <Link 
                to="/calculators/tax-equivalent-yield"
                className="inline-block bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Tax Calculator →
              </Link>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
}