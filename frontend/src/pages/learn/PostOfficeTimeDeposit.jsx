import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PostOfficeTimeDeposit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-b border-indigo-200 dark:border-indigo-700">
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
              to="/learn/post-office-savings-account"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Post Office Savings Account
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">⏰</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Post Office Time Deposit</h1>
              <p className="text-gray-600 dark:text-gray-300">Fixed deposit scheme with flexible tenure options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Post Office Time Deposit */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Post Office Time Deposit?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Post Office Time Deposit (TD) is a fixed deposit scheme offering flexible tenure from 1 to 5 years 
                with attractive interest rates. It's similar to bank FDs but backed by government guarantee.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <p className="text-indigo-800 dark:text-indigo-200 text-sm">
                  <strong>2025 Update:</strong> Post Office TD offers competitive rates up to 6.9% with enhanced digital services and flexible withdrawal options.
                </p>
              </div>
            </section>

            {/* Interest Rates by Tenure 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interest Rates by Tenure (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tenure</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Interest Rate</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">₹1 Lakh Investment</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">1 Year</td>
                      <td className="py-3">6.9%</td>
                      <td className="py-3">₹1,00,000</td>
                      <td className="py-3">₹1,06,900</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2 Years</td>
                      <td className="py-3">6.9%</td>
                      <td className="py-3">₹1,00,000</td>
                      <td className="py-3">₹1,14,236</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">3 Years</td>
                      <td className="py-3">6.9%</td>
                      <td className="py-3">₹1,00,000</td>
                      <td className="py-3">₹1,22,143</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">4 Years</td>
                      <td className="py-3">6.9%</td>
                      <td className="py-3">₹1,00,000</td>
                      <td className="py-3">₹1,30,670</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">5 Years</td>
                      <td className="py-3">6.9%</td>
                      <td className="py-3">₹1,00,000</td>
                      <td className="py-3">₹1,39,885</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Uniform Rate 2025:</strong> 6.9% across all tenures - higher than most bank FDs (6.0-6.5%).
                </p>
              </div>
            </section>

            {/* Features & Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Features & Benefits (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Minimum Deposit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹1,000 (multiples of ₹100)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Maximum Deposit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No upper limit</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tenure Options</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">1, 2, 3, 4, or 5 years</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interest Payment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Annual or at maturity</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premature Closure</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">After 6 months with penalty</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Facility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Up to 75% after 6 months</p>
                </div>
              </div>
            </section>

            {/* Account Types & Options */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Account Types & Options (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Account Types</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Single account (Individual)</li>
                    <li>• Joint account (up to 4 holders)</li>
                    <li>• Minor account (guardian required)</li>
                    <li>• Trust/Society accounts</li>
                    <li>• HUF (Hindu Undivided Family)</li>
                    <li>• NRI accounts (with restrictions)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Special Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Auto-renewal option available</li>
                    <li>• Nomination facility</li>
                    <li>• Transfer between post offices</li>
                    <li>• Digital certificate generation</li>
                    <li>• SMS alerts for maturity</li>
                    <li>• Online balance inquiry</li>
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
                    <li>• Higher interest rate (6.9% vs 6.0-6.5% bank FD)</li>
                    <li>• Government backing and guarantee</li>
                    <li>• Flexible tenure options (1-5 years)</li>
                    <li>• Loan facility up to 75% of deposit</li>
                    <li>• No TDS up to ₹40,000 interest</li>
                    <li>• Nomination facility available</li>
                    <li>• Wide network of post offices</li>
                    <li>• Auto-renewal option</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Interest fully taxable as income</li>
                    <li>• Penalty for premature withdrawal</li>
                    <li>• Lower returns vs equity investments</li>
                    <li>• Inflation risk over long term</li>
                    <li>• Limited digital services vs banks</li>
                    <li>• Manual processes in some locations</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-indigo-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">6.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Deposit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Deposit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure Options:</span>
                  <span className="font-medium text-gray-900 dark:text-white">1-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Compounding:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">75% after 6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">TDS Limit:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Government Backing:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Yes</span>
                </div>
              </div>
            </div>

            {/* Maturity Examples */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Investment Examples</h3>
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100">₹50,000 for 3 years</h4>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300">Maturity: ₹61,072 (₹11,072 interest)</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">₹1,00,000 for 5 years</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Maturity: ₹1,39,885 (₹39,885 interest)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">₹2,00,000 for 2 years</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Maturity: ₹2,28,472 (₹28,472 interest)</p>
                </div>
              </div>
            </div>

            {/* vs Bank FD Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">vs Bank FD (2025)</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Post Office TD:</strong> 6.9% uniform rate</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Bank FD:</strong> 6.0-6.5% varying rates</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Advantage:</strong> Higher returns + govt backing</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Post Office TD Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate maturity value for different tenures</p>
              <Link 
                to="/calculators/post-office-td"
                className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                TD Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}