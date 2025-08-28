import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function MoneyBackPolicies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              to="/learn/guaranteed-savings-plans"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Guaranteed Savings Plans
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">💰</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Money-back Policies</h1>
              <p className="text-gray-600 dark:text-gray-300">Life insurance with periodic survival benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Money-back Policies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are Money-back Policies?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Money-back policies are life insurance plans that return a percentage of the sum assured at regular intervals 
                during the policy term, while maintaining full life cover throughout the policy period.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>2025 Update:</strong> New money-back policies offer enhanced liquidity features with flexible survival benefit options and improved surrender values.
                </p>
              </div>
            </section>

            {/* Money-back Policy Structure 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Money-back Policy Structure (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Policy Term</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Survival Benefit</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Payout Schedule</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">15 Years</td>
                      <td className="py-3">20% of Sum Assured</td>
                      <td className="py-3">5th, 10th year</td>
                      <td className="py-3">60% + Bonus</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">20 Years</td>
                      <td className="py-3">15% of Sum Assured</td>
                      <td className="py-3">5th, 10th, 15th year</td>
                      <td className="py-3">55% + Bonus</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">25 Years</td>
                      <td className="py-3">20% of Sum Assured</td>
                      <td className="py-3">5th, 10th, 15th, 20th year</td>
                      <td className="py-3">20% + Bonus</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">30 Years</td>
                      <td className="py-3">15% of Sum Assured</td>
                      <td className="py-3">Every 5 years (6 times)</td>
                      <td className="py-3">10% + Bonus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Key Feature:</strong> Life cover remains 100% of sum assured throughout the policy term, even after survival benefit payouts.
                </p>
              </div>
            </section>

            {/* Types of Money-back Policies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Money-back Policies (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Traditional Money-back</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fixed survival benefits with guaranteed bonuses</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">With-Profit Money-back</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Participates in insurer's profit sharing</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unit-Linked Money-back</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Market-linked returns with survival benefits</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Child Money-back</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Education planning with periodic payouts</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pension Money-back</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Retirement planning with annuity option</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Money-back</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Customizable survival benefit schedule</p>
                </div>
              </div>
            </section>

            {/* Best Money-back Plans 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Best Money-back Plans (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Top Performing Plans</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• LIC New Money Back Plan - 20 years</li>
                    <li>• SBI Life Smart Money Back - Flexible</li>
                    <li>• HDFC Life Assured Income Plan</li>
                    <li>• ICICI Pru Guaranteed Income Plan</li>
                    <li>• Max Life Guaranteed Money Back Plan</li>
                    <li>• Bajaj Allianz Money Back Plan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Expected Returns (CAGR)</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Traditional Plans: 4-6% CAGR</li>
                    <li>• With-Profit Plans: 5-7% CAGR</li>
                    <li>• Unit-Linked Plans: 6-10% CAGR</li>
                    <li>• Child Plans: 5-7% CAGR</li>
                    <li>• Pension Plans: 4-6% CAGR</li>
                    <li>• Flexible Plans: 5-8% CAGR</li>
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
                    <li>• Regular liquidity through survival benefits</li>
                    <li>• Continuous life insurance protection</li>
                    <li>• Tax benefits under 80C and 10(10D)</li>
                    <li>• Disciplined savings with guaranteed returns</li>
                    <li>• Suitable for goal-based planning</li>
                    <li>• Bonus and profit sharing potential</li>
                    <li>• Loan facility against policy value</li>
                    <li>• Flexible premium payment options</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lower overall returns vs pure investments</li>
                    <li>• High charges and administrative costs</li>
                    <li>• Survival benefits may be reinvested poorly</li>
                    <li>• Long lock-in period with poor surrender value</li>
                    <li>• Inflation risk on fixed survival benefits</li>
                    <li>• Complex product with multiple components</li>
                    <li>• Opportunity cost vs market investments</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Expected Returns:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">4-7% CAGR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Survival Benefit:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">15-20% of SA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Policy Term:</span>
                  <span className="font-medium text-gray-900 dark:text-white">15-30 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Entry Age:</span>
                  <span className="font-medium text-gray-900 dark:text-white">18-65 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Life Cover:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">100% of SA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Benefits:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">80C + 10(10D)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Charges:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">8-18%</span>
                </div>
              </div>
            </div>

            {/* Survival Benefit Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Typical Payout Schedule</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">20-Year Plan</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">15% at 5th, 10th, 15th year + 55% at maturity</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">25-Year Plan</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">20% every 5 years + 20% at maturity</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Life Cover</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">100% sum assured throughout policy term</p>
                </div>
              </div>
            </div>

            {/* Best Use Cases */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Use Cases 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Education Planning:</strong> Child's school/college fees</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Goal Planning:</strong> Marriage, home down payment</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Regular Income:</strong> Supplementary income needs</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Money-back Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate survival benefits and returns</p>
              <Link 
                to="/calculators/money-back-policy"
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Money-back Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}