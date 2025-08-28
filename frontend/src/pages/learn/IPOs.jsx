import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function IPOs() {
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
              to="/learn/market-linked-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Market-Linked Investments
            </Link>
            <Link 
              to="/learn/rights-issues"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
            >
              Next: Rights Issues
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🚀</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Initial Public Offerings (IPOs)</h1>
              <p className="text-gray-600 dark:text-gray-300">Invest in companies going public for the first time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are IPOs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are IPOs?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time. 
                  This allows retail and institutional investors to buy ownership stakes in the company.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Companies go public to raise capital for expansion, pay off debt, or provide an exit route for early investors. 
                  IPOs can offer significant returns but also carry substantial risks.
                </p>
              </div>
            </section>

            {/* Recent Successful IPOs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Successful IPOs (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Company</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Sector</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Issue Price</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Listing Gains</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Ola Electric</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">EV/Auto</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹76</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+42%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Swiggy</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Food Delivery</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹390</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+18%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">NTPC Green Energy</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Renewable Energy</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹108</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+28%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Bajaj Housing Finance</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">NBFC</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹70</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">+35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* IPO Process 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Apply for IPOs (2025)</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Open Demat Account</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Required for holding shares post-listing. Use Zerodha, Groww, or Upstox.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Enable UPI for Applications</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Link UPI ID to your demat account for instant IPO applications and refunds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Research & Apply</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Read DRHP, check financials, apply through broker app during IPO window.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Allotment & Listing</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Check allotment status, shares credited to demat, trading starts on listing day.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* IPO Categories */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">IPO Application Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">👥 Retail Individual</h3>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Investment: ₹2L - ₹2L max</li>
                    <li>• Reservation: 35% of issue</li>
                    <li>• Lottery system if oversubscribed</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">💰 High Net Worth</h3>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Investment: >₹2L</li>
                    <li>• Reservation: 15% of issue</li>
                    <li>• Proportionate allotment</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏢 Qualified Institutional</h3>
                  <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                    <li>• Mutual funds, insurance cos</li>
                    <li>• Reservation: 50% of issue</li>
                    <li>• Book building process</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Upcoming IPOs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming IPOs to Watch (2025)</h2>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Flipkart</h3>
                    <span className="text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">E-commerce</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Expected size: $10-12 billion | Timeline: H2 2025</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Oyo Hotels</h3>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Hospitality</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Expected size: $1.2 billion | Timeline: Q2 2025</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Boat Lifestyle</h3>
                    <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">Consumer Electronics</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Expected size: ₹2,000 crores | Timeline: Q3 2025</p>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Early entry at ground floor prices</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Potential for high listing gains</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Access to growing companies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Diversification opportunity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">UPI-based easy application process</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High risk of listing losses</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Limited operating history</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Overvaluation in bull markets</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Allotment uncertainty</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lock-in periods for promoters</span>
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
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">🚀 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Min Investment:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">₹14,000-15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Max Retail:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">₹2,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Application Mode:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">UPI/NetBanking</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Listing Timeline:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">T+6 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300 text-sm">Refund Process:</span>
                  <span className="font-semibold text-green-900 dark:text-green-100 text-sm">T+6 days</span>
                </div>
              </div>
            </div>

            {/* IPO Platforms */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📱 Apply Through</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Zerodha Kite</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Free IPO applications</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Groww</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">User-friendly interface</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Upstox</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Quick UPI applications</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Angel One</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Research & apply</p>
                </div>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 IPO Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Read DRHP document thoroughly</li>
                <li>• Check promoter background & experience</li>
                <li>• Analyze financial metrics & growth</li>
                <li>• Compare with listed peers</li>
                <li>• Apply on last day for better chances</li>
                <li>• Don't chase every IPO - be selective</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}