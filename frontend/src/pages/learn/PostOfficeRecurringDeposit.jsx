import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PostOfficeRecurringDeposit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-b border-teal-200 dark:border-teal-700">
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
              to="/learn/post-office-time-deposit"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Post Office Time Deposit
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔄</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Post Office Recurring Deposit</h1>
              <p className="text-gray-600 dark:text-gray-300">Monthly savings scheme with guaranteed returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Post Office RD */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Post Office Recurring Deposit?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Post Office Recurring Deposit (RD) is a monthly savings scheme where you deposit a fixed amount every month 
                for 5 years and earn guaranteed returns. It's ideal for disciplined savings with government backing.
              </p>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                <p className="text-teal-800 dark:text-teal-200 text-sm">
                  <strong>2025 Update:</strong> Post Office RD offers 6.7% annual interest with enhanced digital services and online account management through India Post app.
                </p>
              </div>
            </section>

            {/* Interest Rates & Maturity 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interest Rates & Maturity Values (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Monthly Deposit</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Total Deposits</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Interest Earned</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹500</td>
                      <td className="py-3">₹30,000</td>
                      <td className="py-3">₹11,730</td>
                      <td className="py-3">₹41,730</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹1,000</td>
                      <td className="py-3">₹60,000</td>
                      <td className="py-3">₹23,460</td>
                      <td className="py-3">₹83,460</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹2,000</td>
                      <td className="py-3">₹1,20,000</td>
                      <td className="py-3">₹46,920</td>
                      <td className="py-3">₹1,66,920</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹5,000</td>
                      <td className="py-3">₹3,00,000</td>
                      <td className="py-3">₹1,17,300</td>
                      <td className="py-3">₹4,17,300</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹10,000</td>
                      <td className="py-3">₹6,00,000</td>
                      <td className="py-3">₹2,34,600</td>
                      <td className="py-3">₹8,34,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Current Rate 2025:</strong> 6.7% per annum (compounded quarterly) - Higher than most bank RDs.
                </p>
              </div>
            </section>

            {/* Features & Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Features & Benefits (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Minimum Deposit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹100 per month (multiples of ₹5)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Maximum Deposit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No upper limit</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tenure</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">5 years (60 months)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interest Rate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">6.7% per annum (quarterly compounding)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premature Closure</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">After 3 years with penalty</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Facility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Up to 50% after 1 year</p>
                </div>
              </div>
            </section>

            {/* Digital Services 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Services (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">India Post App Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Online RD account opening</li>
                    <li>• Monthly deposit reminders</li>
                    <li>• Balance and maturity tracking</li>
                    <li>• Digital passbook access</li>
                    <li>• Interest calculation tools</li>
                    <li>• Nomination updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Payment Options</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Cash deposits at post office</li>
                    <li>• Online payment via net banking</li>
                    <li>• UPI payments through app</li>
                    <li>• Auto-debit from bank account</li>
                    <li>• Mobile banking integration</li>
                    <li>• Standing instruction facility</li>
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
                    <li>• Higher interest rate (6.7% vs 5.5-6.5% bank RD)</li>
                    <li>• Government backing and guarantee</li>
                    <li>• Disciplined monthly savings habit</li>
                    <li>• Loan facility available after 1 year</li>
                    <li>• No TDS deduction</li>
                    <li>• Nomination facility available</li>
                    <li>• Wide network of post offices</li>
                    <li>• Digital services through India Post app</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Fixed 5-year tenure only</li>
                    <li>• Penalty for premature closure</li>
                    <li>• Interest fully taxable as income</li>
                    <li>• Lower returns vs equity investments</li>
                    <li>• Inflation risk over 5 years</li>
                    <li>• Limited post office operating hours</li>
                    <li>• Manual processes in some locations</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-teal-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">6.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Deposit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹100/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Deposit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure:</span>
                  <span className="font-medium text-gray-900 dark:text-white">5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Compounding:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Quarterly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">50% after 1 year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">TDS:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">No TDS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Government Backing:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Yes</span>
                </div>
              </div>
            </div>

            {/* Maturity Examples */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Maturity Examples</h3>
              <div className="space-y-3">
                <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <h4 className="font-medium text-teal-900 dark:text-teal-100">₹1,000/month</h4>
                  <p className="text-xs text-teal-700 dark:text-teal-300">Maturity: ₹83,460 (₹23,460 interest)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">₹2,000/month</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Maturity: ₹1,66,920 (₹46,920 interest)</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">₹5,000/month</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Maturity: ₹4,17,300 (₹1,17,300 interest)</p>
                </div>
              </div>
            </div>

            {/* Comparison with Bank RD */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">vs Bank RD (2025)</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Post Office RD:</strong> 6.7% rate, govt backing</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Bank RD:</strong> 5.5-6.5% rate, flexible tenure</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Advantage:</strong> Post Office offers higher returns</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Post Office RD Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate maturity value and returns</p>
              <Link 
                to="/calculators/post-office-rd"
                className="inline-block bg-white text-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                RD Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}