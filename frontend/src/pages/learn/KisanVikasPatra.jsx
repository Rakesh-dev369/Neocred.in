import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function KisanVikasPatra() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-b border-emerald-200 dark:border-emerald-700">
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
              to="/learn/senior-citizens-savings"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Senior Citizens Savings
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🌾</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Kisan Vikas Patra (KVP)</h1>
              <p className="text-gray-600 dark:text-gray-300">Long-term savings certificate that doubles your money</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Kisan Vikas Patra */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Kisan Vikas Patra?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kisan Vikas Patra (KVP) is a savings certificate scheme that doubles your investment in a fixed period. 
                Despite its name, it's available to all citizens, not just farmers, and offers guaranteed returns with government backing.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                <p className="text-emerald-800 dark:text-emerald-200 text-sm">
                  <strong>2025 Update:</strong> KVP currently offers 7.5% interest rate, doubling your money in 9 years 7 months with enhanced digital services.
                </p>
              </div>
            </section>

            {/* KVP Returns & Doubling Period 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">KVP Returns & Doubling Period (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Investment Amount</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity Period</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity Value</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Total Returns</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹10,000</td>
                      <td className="py-3">9 years 7 months</td>
                      <td className="py-3">₹20,000</td>
                      <td className="py-3">₹10,000 (100%)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹50,000</td>
                      <td className="py-3">9 years 7 months</td>
                      <td className="py-3">₹1,00,000</td>
                      <td className="py-3">₹50,000 (100%)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹1,00,000</td>
                      <td className="py-3">9 years 7 months</td>
                      <td className="py-3">₹2,00,000</td>
                      <td className="py-3">₹1,00,000 (100%)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹4,50,000</td>
                      <td className="py-3">9 years 7 months</td>
                      <td className="py-3">₹9,00,000</td>
                      <td className="py-3">₹4,50,000 (100%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Current Rate 2025:</strong> 7.5% per annum (compounded annually) - Money doubles in exactly 9 years 7 months.
                </p>
              </div>
            </section>

            {/* KVP Certificate Types */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">KVP Certificate Types (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Single Holder Certificate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Individual ownership, transferable</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Joint A Certificate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Joint holders, either or survivor</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Joint B Certificate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Joint holders, former or survivor</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Minor Certificate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For minors, guardian required</p>
                </div>
              </div>
            </section>

            {/* Features & Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features & Benefits (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Minimum investment: ₹1,000</li>
                    <li>• Maximum investment: ₹4.5 lakh per year</li>
                    <li>• Maturity period: 9 years 7 months</li>
                    <li>• Interest rate: 7.5% per annum</li>
                    <li>• Compounding: Annual</li>
                    <li>• Transferable between post offices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Special Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Government guarantee</li>
                    <li>• Loan facility after 2.5 years</li>
                    <li>• Premature encashment after 2.5 years</li>
                    <li>• No TDS deduction</li>
                    <li>• Nomination facility</li>
                    <li>• Available at all post offices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Premature Encashment Rules */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Premature Encashment Rules (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Period Held</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Encashment Allowed</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Interest Rate</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Penalty</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Less than 2.5 years</td>
                      <td className="py-3">Not allowed</td>
                      <td className="py-3">-</td>
                      <td className="py-3">-</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2.5 to 5 years</td>
                      <td className="py-3">Yes</td>
                      <td className="py-3">Post Office Savings Rate</td>
                      <td className="py-3">Significant reduction</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">5+ years</td>
                      <td className="py-3">Yes</td>
                      <td className="py-3">Reduced rate</td>
                      <td className="py-3">0.5% penalty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>Recommendation:</strong> Hold till maturity for maximum benefit. Premature encashment significantly reduces returns.
                </p>
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
                    <li>• Guaranteed doubling of money (100% returns)</li>
                    <li>• Government backing and security</li>
                    <li>• Higher returns than FDs (7.5% vs 6-7%)</li>
                    <li>• No TDS deduction</li>
                    <li>• Transferable between post offices</li>
                    <li>• Loan facility available after 2.5 years</li>
                    <li>• Nomination facility</li>
                    <li>• Available to all citizens</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Long lock-in period (9 years 7 months)</li>
                    <li>• Interest fully taxable as income</li>
                    <li>• No premature withdrawal for 2.5 years</li>
                    <li>• Lower returns vs equity investments</li>
                    <li>• Inflation risk over long term</li>
                    <li>• Annual investment limit (₹4.5 lakh)</li>
                    <li>• Fixed returns regardless of market</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">7.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Doubling Period:</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">9 years 7 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹4.5 lakh/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Compounding:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">After 2.5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">TDS:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">No TDS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Transferable:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Yes</span>
                </div>
              </div>
            </div>

            {/* Investment Examples */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Doubling Examples</h3>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <h4 className="font-medium text-emerald-900 dark:text-emerald-100">₹25,000 Investment</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">Becomes ₹50,000 in 9 years 7 months</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">₹1,00,000 Investment</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Becomes ₹2,00,000 in 9 years 7 months</p>
                </div>
                <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <h4 className="font-medium text-teal-900 dark:text-teal-100">₹4,50,000 Investment</h4>
                  <p className="text-xs text-teal-700 dark:text-teal-300">Becomes ₹9,00,000 in 9 years 7 months</p>
                </div>
              </div>
            </div>

            {/* Who Should Invest */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Who Should Invest?</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Conservative Investors:</strong> Risk-averse with long-term goals</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Goal Planning:</strong> Child education, marriage planning</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Senior Citizens:</strong> Guaranteed returns with safety</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">KVP Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate KVP maturity value and returns</p>
              <Link 
                to="/calculators/kisan-vikas-patra"
                className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                KVP Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}