import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PPFLearn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-b border-green-200 dark:border-green-700">
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
              to="/learn/nsc"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: NSC
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📋</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Public Provident Fund (PPF)</h1>
              <p className="text-gray-600 dark:text-gray-300">15-year tax-free wealth building with triple benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is PPF */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <DocumentTextIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Public Provident Fund?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                PPF is a government-backed long-term savings scheme with a 15-year lock-in period. It offers the unique EEE (Exempt-Exempt-Exempt) tax status, 
                making it one of the best tax-saving and wealth-building instruments in India.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>2025 Update:</strong> PPF interest rate is 7.1% for FY 2024-25. Digital PPF accounts can now be opened instantly through mobile banking apps.
                </p>
              </div>
            </section>

            {/* PPF Interest Rates & Returns */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">PPF Interest Rates & Historical Performance</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Financial Year</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Interest Rate</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Compounding</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2024-25</td>
                      <td className="py-3 text-green-600 font-semibold">7.1%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2023-24</td>
                      <td className="py-3">8.0%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2022-23</td>
                      <td className="py-3">7.1%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2021-22</td>
                      <td className="py-3">7.1%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">PPF Maturity Example (2025)</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Investment:</strong> ₹1.5L annually for 15 years = ₹22.5L<br/>
                  <strong>Maturity Value:</strong> ₹39.6L (at 7.1% average)<br/>
                  <strong>Tax-free Gain:</strong> ₹17.1L
                </p>
              </div>
            </section>

            {/* PPF Rules & Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">PPF Rules & Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Investment Rules</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Minimum: ₹500 per year</li>
                    <li>• Maximum: ₹1.5 lakh per year</li>
                    <li>• 15-year mandatory lock-in</li>
                    <li>• One account per person</li>
                    <li>• Can invest for minor children</li>
                    <li>• Deposit by 31st March for tax benefit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Withdrawal Rules</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Partial withdrawal after 7th year (50%)</li>
                    <li>• Loan against PPF after 3rd year</li>
                    <li>• Full withdrawal after 15 years</li>
                    <li>• Extension in 5-year blocks</li>
                    <li>• Premature closure after 5 years (penalty)</li>
                    <li>• Nomination facility available</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Digital PPF Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital PPF Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Online Services</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Instant account opening via mobile apps</li>
                    <li>• Online deposits through net banking</li>
                    <li>• Digital passbook and statements</li>
                    <li>• Auto-debit facility for regular deposits</li>
                    <li>• SMS/Email alerts for transactions</li>
                    <li>• Online loan application</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Smart Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• PPF calculator integration</li>
                    <li>• Goal-based investment planning</li>
                    <li>• Tax saving reminders</li>
                    <li>• Maturity date tracking</li>
                    <li>• Interest credit notifications</li>
                    <li>• Extension option alerts</li>
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
                    <li>• Triple tax benefit (EEE status)</li>
                    <li>• Government-backed security</li>
                    <li>• Compounding for 15 years</li>
                    <li>• Loan facility available</li>
                    <li>• Partial withdrawal option</li>
                    <li>• No TDS on interest</li>
                    <li>• Inflation-beating returns historically</li>
                    <li>• Can open for minor children</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• 15-year mandatory lock-in</li>
                    <li>• Interest rates fluctuate annually</li>
                    <li>• Lower returns vs equity long-term</li>
                    <li>• Only one account per person</li>
                    <li>• Penalty for premature closure</li>
                    <li>• Limited liquidity options</li>
                    <li>• Maximum investment cap of ₹1.5L</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Current Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">7.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lock-in Period:</span>
                  <span className="font-medium text-gray-900 dark:text-white">15 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Min Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹500/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Max Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1.5L/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">EEE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Zero Risk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Compounding:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Annual</span>
                </div>
              </div>
            </div>

            {/* Where to Open PPF 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where to Open PPF 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Major Banks</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">SBI, HDFC, ICICI, Axis, PNB, Canara</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Post Offices</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">All India Post Offices (27,000+ branches)</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Digital Platforms</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Mobile apps, Net banking, UPI</p>
                </div>
              </div>
            </div>

            {/* PPF vs Other Investments */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">PPF vs Alternatives</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">PPF (7.1%)</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Tax-free, 15-year lock-in, Government backed</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">ELSS (12-15%)</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Market risk, 3-year lock-in, Tax on gains</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">NSC (6.8%)</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Taxable interest, 5-year lock-in</p>
                </div>
              </div>
            </div>

            {/* Tax Benefits 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Benefits 2025</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Investment:</strong> 80C deduction up to ₹1.5L</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Interest:</strong> Completely tax-free</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Maturity:</strong> Tax-free withdrawal</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Calculate PPF Returns</h3>
              <p className="text-sm mb-4 opacity-90">Plan your 15-year wealth journey</p>
              <Link 
                to="/calculators/ppf"
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                PPF Calculator →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}