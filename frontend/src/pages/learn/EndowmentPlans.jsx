import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function EndowmentPlans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              to="/learn/money-back-policies"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Money-back Policies
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📋</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Endowment Plans</h1>
              <p className="text-gray-600 dark:text-gray-300">Life insurance with guaranteed savings and maturity benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Endowment Plans */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Endowment Plans?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Endowment plans are traditional life insurance policies that combine life cover with savings. 
                They provide guaranteed returns along with life insurance protection, making them popular for conservative investors.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>2025 Update:</strong> New endowment plans offer enhanced digital features, flexible premium payment options, and improved surrender values with IRDAI regulations.
                </p>
              </div>
            </section>

            {/* Endowment Plan Returns 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Endowment Plan Returns (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Plan Type</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Guaranteed Returns</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Bonus Potential</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Total Returns</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Traditional Endowment</td>
                      <td className="py-3">4-5% CAGR</td>
                      <td className="py-3">1-2% CAGR</td>
                      <td className="py-3">5-7% CAGR</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">With-Profit Endowment</td>
                      <td className="py-3">3-4% CAGR</td>
                      <td className="py-3">2-4% CAGR</td>
                      <td className="py-3">5-8% CAGR</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Unit-Linked Endowment</td>
                      <td className="py-3">0% (Market-linked)</td>
                      <td className="py-3">8-12% CAGR</td>
                      <td className="py-3">6-12% CAGR</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Low-Cost Endowment</td>
                      <td className="py-3">5-6% CAGR</td>
                      <td className="py-3">1-2% CAGR</td>
                      <td className="py-3">6-8% CAGR</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Child Endowment</td>
                      <td className="py-3">4-5% CAGR</td>
                      <td className="py-3">1-3% CAGR</td>
                      <td className="py-3">5-8% CAGR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Returns 2025:</strong> Low-cost endowment plans from LIC and private insurers offer better value with reduced charges.
                </p>
              </div>
            </section>

            {/* Types of Endowment Plans */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Endowment Plans (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Traditional Endowment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fixed guaranteed returns with annual bonuses</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">With-Profit Endowment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Participates in insurer's profit sharing</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unit-Linked Endowment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Market-linked returns with insurance cover</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Low-Cost Endowment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Reduced charges, better returns</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Child Endowment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Education and marriage planning</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pension Endowment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Retirement planning with annuity option</p>
                </div>
              </div>
            </section>

            {/* Best Endowment Plans 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Best Endowment Plans (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Top Performing Plans</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• LIC New Endowment Plan - Traditional choice</li>
                    <li>• HDFC Life Assured Savings Plan - Low cost</li>
                    <li>• SBI Life Smart Wealth Builder - Flexible</li>
                    <li>• ICICI Pru Guaranteed Wealth Protector</li>
                    <li>• Max Life Guaranteed Income Plan</li>
                    <li>• Bajaj Allianz Guaranteed Pension Goal</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Key Features to Look For</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Low allocation charges (&lt;5%)</li>
                    <li>• High guaranteed returns (&gt;5%)</li>
                    <li>• Flexible premium payment options</li>
                    <li>• Good surrender value (after 3 years)</li>
                    <li>• Loan facility against policy</li>
                    <li>• Tax benefits under 80C and 10(10D)</li>
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
                    <li>• Guaranteed returns with life insurance cover</li>
                    <li>• Tax benefits under Section 80C (premium)</li>
                    <li>• Tax-free maturity proceeds under 10(10D)</li>
                    <li>• Disciplined long-term savings</li>
                    <li>• Loan facility against policy value</li>
                    <li>• Bonus and profit sharing potential</li>
                    <li>• Suitable for conservative investors</li>
                    <li>• Financial protection for family</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lower returns vs pure investment options</li>
                    <li>• High charges and fees (5-15%)</li>
                    <li>• Long lock-in period (15-25 years)</li>
                    <li>• Poor surrender value in early years</li>
                    <li>• Inflation risk over long term</li>
                    <li>• Complex product with multiple charges</li>
                    <li>• Limited liquidity options</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Expected Returns:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">5-8% CAGR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Premium:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹12,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Policy Term:</span>
                  <span className="font-medium text-gray-900 dark:text-white">10-35 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Entry Age:</span>
                  <span className="font-medium text-gray-900 dark:text-white">18-65 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Benefits:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">80C + 10(10D)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Surrender Value:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">After 3 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Charges:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">5-15%</span>
                </div>
              </div>
            </div>

            {/* Best Insurance Companies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Insurers 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">LIC of India</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Market leader, traditional plans</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">HDFC Life</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Low-cost plans, digital services</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">SBI Life</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Bank partnership, flexible options</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">ICICI Prudential</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Innovation, online platform</p>
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Benefits 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>80C:</strong> Premium deduction up to ₹1.5L</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>10(10D):</strong> Tax-free maturity proceeds</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Death Benefit:</strong> Tax-free to nominee</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Endowment Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate endowment returns and maturity value</p>
              <Link 
                to="/calculators/endowment-plan"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Endowment Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}