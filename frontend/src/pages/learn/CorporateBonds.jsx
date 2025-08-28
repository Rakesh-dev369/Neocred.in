import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CorporateBonds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-green-200 dark:border-green-700">
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
              to="/learn/tax-free-bonds"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Tax-free Bonds
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏢</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Corporate Bonds</h1>
              <p className="text-gray-600 dark:text-gray-300">Debt securities issued by companies for higher yields</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Corporate Bonds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Corporate Bonds?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Corporate bonds are debt securities issued by companies to raise capital for business operations, 
                expansion, or refinancing. They offer higher yields than government bonds but carry credit risk.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>2025 Update:</strong> Corporate bond market has grown significantly with better credit rating systems and online platforms making them accessible to retail investors.
                </p>
              </div>
            </section>

            {/* Current Yields 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Corporate Bond Yields by Rating (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Rating</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">1-3 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">3-5 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">5+ Years</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">AAA</td>
                      <td className="py-3">7.5% - 8.2%</td>
                      <td className="py-3">7.8% - 8.5%</td>
                      <td className="py-3">8.0% - 8.8%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">AA+</td>
                      <td className="py-3">7.8% - 8.5%</td>
                      <td className="py-3">8.1% - 8.8%</td>
                      <td className="py-3">8.3% - 9.1%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">AA</td>
                      <td className="py-3">8.2% - 8.9%</td>
                      <td className="py-3">8.5% - 9.2%</td>
                      <td className="py-3">8.7% - 9.5%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">A+</td>
                      <td className="py-3">8.8% - 9.5%</td>
                      <td className="py-3">9.1% - 9.8%</td>
                      <td className="py-3">9.3% - 10.2%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">BBB+</td>
                      <td className="py-3">9.5% - 10.5%</td>
                      <td className="py-3">9.8% - 11.0%</td>
                      <td className="py-3">10.2% - 11.5%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">BBB</td>
                      <td className="py-3">10.5% - 12.0%</td>
                      <td className="py-3">11.0% - 12.5%</td>
                      <td className="py-3">11.5% - 13.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Sweet Spot 2025:</strong> AA+ rated bonds offer good risk-return balance with yields 1-1.5% higher than G-Secs.
                </p>
              </div>
            </section>

            {/* Types of Corporate Bonds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Corporate Bonds (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secured Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Backed by specific assets, lower risk</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Debentures</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Unsecured, based on creditworthiness</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Convertible Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Option to convert to equity shares</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Perpetual Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No maturity date, callable by issuer</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Floating Rate Notes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Interest linked to benchmark rates</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Coupon Bonds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Deep discount bonds, no periodic interest</p>
                </div>
              </div>
            </section>

            {/* Digital Investment Platforms 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Investment Platforms (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Online Bond Platforms</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Zerodha Coin - Wide selection</li>
                    <li>• Groww Bonds - Easy interface</li>
                    <li>• ET Money Bonds - Research tools</li>
                    <li>• INDmoney - Portfolio tracking</li>
                    <li>• Paytm Money - Quick onboarding</li>
                    <li>• Angel One - Advanced analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Stock Exchanges</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• NSE - Better liquidity</li>
                    <li>• BSE - More listings</li>
                    <li>• Real-time price discovery</li>
                    <li>• Institutional participation</li>
                    <li>• T+1 settlement cycle</li>
                    <li>• SEBI regulated</li>
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
                    <li>• Higher yields than G-Secs (1-3% premium)</li>
                    <li>• Regular interest payments (quarterly/semi-annual)</li>
                    <li>• Diversification across sectors</li>
                    <li>• Professional credit analysis available</li>
                    <li>• Tradeable in secondary market</li>
                    <li>• Better returns than FDs</li>
                    <li>• SEBI regulated market</li>
                    <li>• Online platforms for easy access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Credit risk (company may default)</li>
                    <li>• Interest rate risk (price volatility)</li>
                    <li>• Lower liquidity than G-Secs</li>
                    <li>• Rating downgrades possible</li>
                    <li>• Complex for retail investors</li>
                    <li>• TDS applicable (10% if interest > ₹5,000)</li>
                    <li>• Sector concentration risk</li>
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
                  <span className="font-medium text-gray-900 dark:text-white">₹1,000</span>
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
                  <span className="font-medium text-gray-900 dark:text-white">7.5% - 13.0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Payment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Quarterly/Semi-annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Medium to High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">TDS:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">10% if > ₹5,000</span>
                </div>
              </div>
            </div>

            {/* Best Rated Companies 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Rated Issuers 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">AAA Rated</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">HDFC, ICICI Bank, SBI, L&T Finance</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">AA+ Rated</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Bajaj Finance, Mahindra Finance, Tata Motors</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Best Platforms</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Zerodha Coin, Groww, ET Money</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Preferred Sectors</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Banking, NBFC, Infrastructure</p>
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
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>TDS:</strong> 10% if interest > ₹5,000</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Long-term Gains:</strong> 20% with indexation</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Corporate Bond Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate yield and credit spread analysis</p>
              <Link 
                to="/calculators/corporate-bond"
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
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