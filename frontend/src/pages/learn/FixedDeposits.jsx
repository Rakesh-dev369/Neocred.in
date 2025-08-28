import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function FixedDeposits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-b border-blue-200 dark:border-blue-700">
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
              to="/learn/recurring-deposits"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Recurring Deposits
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">💰</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Fixed Deposits (FD)</h1>
              <p className="text-gray-600 dark:text-gray-300">Guaranteed returns with complete capital protection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Fixed Deposit */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is a Fixed Deposit?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A Fixed Deposit (FD) is a financial instrument where you deposit a lump sum for a predetermined period at a fixed interest rate. 
                It's the safest investment option with guaranteed returns and complete capital protection.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>2025 Update:</strong> With RBI's focus on financial inclusion, minimum FD amounts have been reduced to ₹500 in many banks, making it accessible to all income groups.
                </p>
              </div>
            </section>

            {/* Current Interest Rates 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Latest Interest Rates (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Bank</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">1-2 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">3-5 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Senior Citizens</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SBI</td>
                      <td className="py-3">6.80%</td>
                      <td className="py-3">6.50%</td>
                      <td className="py-3">7.30%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">HDFC Bank</td>
                      <td className="py-3">7.00%</td>
                      <td className="py-3">7.10%</td>
                      <td className="py-3">7.60%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">ICICI Bank</td>
                      <td className="py-3">7.00%</td>
                      <td className="py-3">7.00%</td>
                      <td className="py-3">7.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Axis Bank</td>
                      <td className="py-3">7.25%</td>
                      <td className="py-3">7.25%</td>
                      <td className="py-3">7.75%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Kotak Mahindra</td>
                      <td className="py-3">7.10%</td>
                      <td className="py-3">6.90%</td>
                      <td className="py-3">7.60%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">IndusInd Bank</td>
                      <td className="py-3">7.75%</td>
                      <td className="py-3">7.75%</td>
                      <td className="py-3">8.25%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Yes Bank</td>
                      <td className="py-3">8.00%</td>
                      <td className="py-3">7.75%</td>
                      <td className="py-3">8.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Ujjivan SFB</td>
                      <td className="py-3">8.50%</td>
                      <td className="py-3">8.25%</td>
                      <td className="py-3">9.00%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Equitas SFB</td>
                      <td className="py-3">8.25%</td>
                      <td className="py-3">8.00%</td>
                      <td className="py-3">8.75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Rates 2025:</strong> Small Finance Banks offer highest rates (8-9%), while digital banks provide competitive rates with easy online processes.
                </p>
              </div>
            </section>

            {/* Types of FDs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Fixed Deposits (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Regular FD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Standard fixed deposit with fixed tenure and interest rate</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Saver FD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">5-year lock-in, 80C deduction up to ₹1.5 lakh</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexi FD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Partial withdrawal facility without penalty</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Senior Citizen FD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Additional 0.50% interest for 60+ age</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cumulative FD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Interest compounded and paid at maturity</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Non-Cumulative FD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Regular interest payouts (monthly/quarterly)</p>
                </div>
              </div>
            </section>

            {/* Digital FD Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital FD Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Online Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Instant FD opening via mobile apps</li>
                    <li>• Digital certificates and receipts</li>
                    <li>• Auto-renewal options</li>
                    <li>• Real-time interest calculations</li>
                    <li>• Paperless KYC with Aadhaar</li>
                    <li>• Video KYC for new customers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">New Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Sweep-in/Sweep-out facility</li>
                    <li>• Ladder FD strategies</li>
                    <li>• Goal-based FD planning</li>
                    <li>• AI-powered tenure suggestions</li>
                    <li>• Instant loan against FD</li>
                    <li>• WhatsApp banking integration</li>
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
                    <li>• 100% capital protection guaranteed</li>
                    <li>• DICGC insurance up to ₹5 lakh per bank</li>
                    <li>• Predictable returns</li>
                    <li>• No market risk</li>
                    <li>• Loan facility up to 90% of FD value</li>
                    <li>• Tax benefits (Tax Saver FD)</li>
                    <li>• Flexible tenure (7 days to 10 years)</li>
                    <li>• Senior citizen benefits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lower returns vs equity/mutual funds</li>
                    <li>• Interest fully taxable as income</li>
                    <li>• Inflation erosion risk</li>
                    <li>• Premature withdrawal penalty (1-2%)</li>
                    <li>• TDS if interest > ₹40,000</li>
                    <li>• Opportunity cost in rising markets</li>
                    <li>• Fixed returns despite rate changes</li>
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
                  <span className="font-medium text-gray-900 dark:text-white">₹500-₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Amount:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure Range:</span>
                  <span className="font-medium text-gray-900 dark:text-white">7 days - 10 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-gray-900 dark:text-white">6.5% - 9.0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Compounding:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Quarterly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Zero Risk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Low (Penalty)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Insurance:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹5 Lakh DICGC</span>
                </div>
              </div>
            </div>

            {/* Best Banks 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best FD Banks 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Highest Rates</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Ujjivan SFB (9%), Equitas SFB (8.75%)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Best Digital Experience</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">HDFC, ICICI, Axis, Kotak</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Most Trusted</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">SBI, PNB, Bank of Baroda</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Best Features</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">IndusInd, Yes Bank, RBL Bank</p>
                </div>
              </div>
            </div>

            {/* Tax Information 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>TDS:</strong> 10% if interest > ₹40,000 (₹50,000 for seniors)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Tax Saver FD:</strong> ₹1.5L deduction under 80C</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Form 15G/H:</strong> Avoid TDS if total income &lt; ₹2.5L</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Calculate FD Returns</h3>
              <p className="text-sm mb-4 opacity-90">Use our FD calculator to plan your investments</p>
              <Link 
                to="/calculators/fd"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                FD Calculator →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}