import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function GoldETFs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-b border-orange-200 dark:border-orange-700">
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
              to="/learn/sovereign-gold-bonds"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Sovereign Gold Bonds
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📈</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gold ETFs</h1>
              <p className="text-gray-600 dark:text-gray-300">Exchange-traded funds backed by physical gold</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Gold ETFs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Gold ETFs?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Gold ETFs are exchange-traded funds that track the price of gold. Each unit represents a specific 
                quantity of gold (typically 1 gram) stored in vaults, offering paper gold investment without physical storage.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>2025 Update:</strong> Gold ETFs offer the convenience of stock market trading with real-time pricing and high liquidity through demat accounts.
                </p>
              </div>
            </section>

            {/* Top Gold ETFs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Top Gold ETFs in India (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">ETF Name</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">NAV (₹)</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">AUM (₹ Cr)</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Expense Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SBI Gold ETF</td>
                      <td className="py-3">₹74.20</td>
                      <td className="py-3">₹2,850</td>
                      <td className="py-3">0.75%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">HDFC Gold ETF</td>
                      <td className="py-3">₹74.18</td>
                      <td className="py-3">₹1,920</td>
                      <td className="py-3">0.80%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">ICICI Prudential Gold ETF</td>
                      <td className="py-3">₹74.15</td>
                      <td className="py-3">₹1,650</td>
                      <td className="py-3">0.85%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Nippon India Gold ETF</td>
                      <td className="py-3">₹74.22</td>
                      <td className="py-3">₹1,280</td>
                      <td className="py-3">0.75%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Kotak Gold ETF</td>
                      <td className="py-3">₹74.19</td>
                      <td className="py-3">₹980</td>
                      <td className="py-3">0.90%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Axis Gold ETF</td>
                      <td className="py-3">₹74.16</td>
                      <td className="py-3">₹750</td>
                      <td className="py-3">0.85%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Choice 2025:</strong> SBI and Nippon India Gold ETFs offer lowest expense ratios with good liquidity and large AUM.
                </p>
              </div>
            </section>

            {/* Gold ETF vs Alternatives */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Gold ETF vs Other Gold Investments (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">vs Physical Gold</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No storage issues, lower costs, better liquidity</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">vs Gold Mutual Funds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Real-time trading, lower expense ratios</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">vs Digital Gold</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Regulated, transparent pricing, demat safety</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">vs Sovereign Gold Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Higher liquidity, no lock-in, but no interest</p>
                </div>
              </div>
            </section>

            {/* How to Invest in Gold ETFs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Invest in Gold ETFs (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Investment Platforms</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Zerodha - Zero brokerage for delivery</li>
                    <li>• Groww - User-friendly interface</li>
                    <li>• Angel One - Advanced research tools</li>
                    <li>• HDFC Securities - Full-service broker</li>
                    <li>• ICICI Direct - Integrated banking</li>
                    <li>• Paytm Money - Mobile-first platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Investment Process</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Open demat and trading account</li>
                    <li>• Complete KYC verification</li>
                    <li>• Search for Gold ETF (e.g., GOLDSHARE)</li>
                    <li>• Place buy order (minimum 1 unit)</li>
                    <li>• ETF units credited to demat account</li>
                    <li>• Monitor and sell when needed</li>
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
                    <li>• No storage or security issues</li>
                    <li>• High liquidity - trade anytime during market hours</li>
                    <li>• Lower costs vs physical gold (0.75-0.90% expense ratio)</li>
                    <li>• Real-time pricing and transparency</li>
                    <li>• Backed by physical gold in vaults</li>
                    <li>• Demat account safety and regulation</li>
                    <li>• SIP investment option available</li>
                    <li>• No making charges or GST on trading</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Requires demat account and trading knowledge</li>
                    <li>• Annual expense ratio (0.75-0.90%)</li>
                    <li>• No physical possession of gold</li>
                    <li>• Brokerage charges on transactions</li>
                    <li>• Market hours trading limitation</li>
                    <li>• Tracking error vs gold prices</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-orange-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current NAV:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">₹74.20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">1 Unit (₹74)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Expense Ratio:</span>
                  <span className="font-medium text-gray-900 dark:text-white">0.75% - 0.90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Gold Backing:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">99.5% Purity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Trading Hours:</span>
                  <span className="font-medium text-gray-900 dark:text-white">9:15 AM - 3:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Very High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lock-in Period:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">SIP Option:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
              </div>
            </div>

            {/* Best Gold ETFs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Gold ETFs 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">SBI Gold ETF</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Largest AUM, 0.75% expense ratio</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Nippon India Gold ETF</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Low cost, good tracking</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">HDFC Gold ETF</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Reliable, good liquidity</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">ICICI Prudential Gold ETF</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Established fund, decent performance</p>
                </div>
              </div>
            </div>

            {/* Investment Platforms */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Platforms 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Zerodha:</strong> Zero brokerage for delivery</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Groww:</strong> User-friendly, SIP available</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Angel One:</strong> Research tools, analytics</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Gold ETF Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate Gold ETF returns and costs</p>
              <Link 
                to="/calculators/gold-etf"
                className="inline-block bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                ETF Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}