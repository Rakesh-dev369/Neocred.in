import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function RightsIssues() {
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
              to="/learn/market-linked-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Market-Linked Investments
            </Link>
            <Link 
              to="/learn/equity-mutual-funds"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
              Next: Equity Mutual Funds
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">⚖️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Rights Issues</h1>
              <p className="text-gray-600 dark:text-gray-300">Additional shares offered to existing shareholders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are Rights Issues */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Rights Issues?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A rights issue is when a company offers additional shares to existing shareholders at a discounted price, 
                  typically 10-20% below the current market price. Shareholders get the "right" to buy these shares in proportion to their existing holdings.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  For example, in a 1:2 rights issue, shareholders can buy 1 new share for every 2 shares they already own. 
                  Companies use rights issues to raise capital for expansion, debt reduction, or working capital needs.
                </p>
              </div>
            </section>

            {/* Recent Rights Issues 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Rights Issues (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Company</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Ratio</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Rights Price</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Reliance Industries</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1:15</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹2,564</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">14%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Bharti Airtel</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1:14</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹980</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">18%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Tata Steel</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1:9</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹125</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">15%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ONGC</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1:12</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹195</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">12%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How Rights Issues Work */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How Rights Issues Work</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Record Date</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Company announces record date. Only shareholders on this date are eligible for rights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Rights Entitlement</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Rights entitlements (RE) are credited to your demat account, tradeable separately.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Application Period</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Apply for rights shares during the application window (usually 15-30 days).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Allotment & Listing</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">New shares are allotted and start trading on the exchange.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rights Issue Strategies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Investment Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Subscribe Fully</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-2">Best for long-term investors who believe in the company</p>
                  <ul className="text-green-600 dark:text-green-400 text-xs space-y-1">
                    <li>• Maintain ownership percentage</li>
                    <li>• Benefit from discount pricing</li>
                    <li>• Avoid dilution of holdings</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💰 Sell Rights Entitlement</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">For investors who don't want to invest more</p>
                  <ul className="text-blue-600 dark:text-blue-400 text-xs space-y-1">
                    <li>• Trade RE in the market</li>
                    <li>• Recover some value without investing</li>
                    <li>• Accept dilution of ownership</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚖️ Partial Subscription</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">Subscribe partially, sell remaining RE</p>
                  <ul className="text-orange-600 dark:text-orange-400 text-xs space-y-1">
                    <li>• Balanced approach</li>
                    <li>• Reduce average cost</li>
                    <li>• Limited dilution</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Let Rights Lapse</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm mb-2">Not recommended - lose value</p>
                  <ul className="text-red-600 dark:text-red-400 text-xs space-y-1">
                    <li>• Rights become worthless</li>
                    <li>• Maximum dilution</li>
                    <li>• Loss of opportunity</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tax Implications */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tax Implications (2025)</h2>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">📊 Cost Basis Adjustment</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    When you subscribe to rights shares, your average cost per share gets adjusted. 
                    The new average cost = (Old shares × Old price + Rights shares × Rights price) ÷ Total shares
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💸 Rights Entitlement Sale</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Selling rights entitlements is treated as capital gains. Short-term if sold within 12 months, 
                    long-term if sold after 12 months from the original share purchase date.
                  </p>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Discounted share price (10-20% off)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Maintain ownership percentage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Rights entitlements are tradeable</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Company strengthens balance sheet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Flexible participation options</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Dilution if you don't participate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Additional capital requirement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Share price may fall post-rights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Complex tax calculations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Time-bound decision making</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">⚖️ Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Typical Discount:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">10-20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Application Period:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">15-30 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">RE Trading:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Eligibility:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Record Date</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300 text-sm">Listing:</span>
                  <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">T+6 days</span>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🤔 Decision Framework</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">Subscribe if:</h4>
                  <ul className="text-green-700 dark:text-green-300 text-xs mt-1 space-y-1">
                    <li>• Strong company fundamentals</li>
                    <li>• Good use of funds planned</li>
                    <li>• Long-term investor</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 text-sm">Sell RE if:</h4>
                  <ul className="text-orange-700 dark:text-orange-300 text-xs mt-1 space-y-1">
                    <li>• Don't want to invest more</li>
                    <li>• Need immediate cash</li>
                    <li>• Bearish on company</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Rights Issue Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Check the purpose of fund raising</li>
                <li>• Analyze company's debt levels</li>
                <li>• Compare with peer valuations</li>
                <li>• Monitor RE trading price</li>
                <li>• Don't let rights lapse - always act</li>
                <li>• Consider tax implications</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}