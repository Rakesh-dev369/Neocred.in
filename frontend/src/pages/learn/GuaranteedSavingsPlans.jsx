import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function GuaranteedSavingsPlans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-b border-purple-200 dark:border-purple-700">
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
              to="/learn/unit-linked-insurance-plans"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Unit Linked Insurance Plans
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">✅</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Guaranteed Savings Plans</h1>
              <p className="text-gray-600 dark:text-gray-300">Life insurance with assured returns and guaranteed benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Guaranteed Savings Plans */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Guaranteed Savings Plans?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Guaranteed Savings Plans are life insurance policies that offer assured returns with guaranteed maturity benefits. 
                They provide capital protection with predetermined returns, making them ideal for risk-averse investors.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>2025 Update:</strong> New guaranteed plans offer enhanced flexibility with multiple payout options and improved guaranteed return rates up to 6-7% CAGR.
                </p>
              </div>
            </section>

            {/* Guaranteed Returns Comparison 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Guaranteed Returns Comparison (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Plan Type</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Guaranteed Returns</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Policy Term</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Traditional Guaranteed</td>
                      <td className="py-3">5-6% CAGR</td>
                      <td className="py-3">10-20 years</td>
                      <td className="py-3">Conservative investors</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Guaranteed Income</td>
                      <td className="py-3">6-7% CAGR</td>
                      <td className="py-3">15-25 years</td>
                      <td className="py-3">Regular income needs</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Guaranteed Wealth</td>
                      <td className="py-3">5.5-6.5% CAGR</td>
                      <td className="py-3">12-30 years</td>
                      <td className="py-3">Wealth accumulation</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Child Guaranteed</td>
                      <td className="py-3">6-7% CAGR</td>
                      <td className="py-3">10-18 years</td>
                      <td className="py-3">Education planning</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Pension Guaranteed</td>
                      <td className="py-3">5-6% CAGR</td>
                      <td className="py-3">20-35 years</td>
                      <td className="py-3">Retirement planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Value 2025:</strong> Guaranteed Income plans offer highest returns (6-7% CAGR) with regular payout options.
                </p>
              </div>
            </section>

            {/* Plan Features & Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Plan Features & Benefits (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Guaranteed Maturity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Assured lump sum at policy maturity</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Life Insurance Cover</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Death benefit throughout policy term</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Payouts</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lump sum or regular income options</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Benefits</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">80C deduction + 10(10D) exemption</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Facility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Borrow against policy value</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Surrender Value</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Guaranteed surrender value after 3 years</p>
                </div>
              </div>
            </section>

            {/* Best Guaranteed Plans 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Best Guaranteed Plans (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Top Performing Plans</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• LIC Guaranteed Wealth Plus - 6.5% CAGR</li>
                    <li>• SBI Life Guaranteed Wealth Builder</li>
                    <li>• HDFC Life Assured Savings Plan</li>
                    <li>• ICICI Pru Guaranteed Income Plan</li>
                    <li>• Max Life Guaranteed Income Plan</li>
                    <li>• Bajaj Allianz Guaranteed Pension Goal</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Key Selection Criteria</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Guaranteed return rate (5-7% CAGR)</li>
                    <li>• Low allocation charges (&lt;5%)</li>
                    <li>• Flexible payout options</li>
                    <li>• Good surrender value terms</li>
                    <li>• Insurer's claim settlement ratio</li>
                    <li>• Premium payment flexibility</li>
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
                    <li>• Guaranteed returns (5-7% CAGR)</li>
                    <li>• Capital protection with life cover</li>
                    <li>• Tax benefits under 80C and 10(10D)</li>
                    <li>• Flexible payout options</li>
                    <li>• No market risk or volatility</li>
                    <li>• Disciplined long-term savings</li>
                    <li>• Loan facility against policy</li>
                    <li>• Suitable for conservative investors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lower returns vs equity investments</li>
                    <li>• High charges and fees (5-15%)</li>
                    <li>• Long lock-in period (10-30 years)</li>
                    <li>• Inflation risk over long term</li>
                    <li>• Poor liquidity in early years</li>
                    <li>• Opportunity cost vs market returns</li>
                    <li>• Complex product structure</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Guaranteed Returns:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">5-7% CAGR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Premium:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹24,000/year</span>
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
                  <span className="text-gray-600 dark:text-gray-400">Life Cover:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">10x Annual Premium</span>
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
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Zero Risk</span>
                </div>
              </div>
            </div>

            {/* Payout Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Payout Options 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Lump Sum</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Full maturity amount at policy end</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Regular Income</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Monthly/yearly income for fixed period</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Combination</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Part lump sum + part regular income</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Deferred Annuity</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Lifetime income starting later</p>
                </div>
              </div>
            </div>

            {/* Best Insurers */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Insurers 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>LIC:</strong> Highest guaranteed returns, market leader</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>SBI Life:</strong> Bank backing, flexible options</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>HDFC Life:</strong> Low charges, digital services</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Guaranteed Plan Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate guaranteed returns and maturity value</p>
              <Link 
                to="/calculators/guaranteed-savings"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Guaranteed Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}