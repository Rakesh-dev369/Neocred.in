import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, DocumentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function NSCLearn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/ppf"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: PPF
            </Link>
            <Link 
              to="/learn/kisan-vikas-patra"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Kisan Vikas Patra
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📜</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">National Savings Certificate (NSC)</h1>
              <p className="text-gray-600 dark:text-gray-300">5-year government-backed tax-saving investment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is NSC */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <DocumentIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is National Savings Certificate?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                NSC is a government-backed savings certificate with a 5-year lock-in period. It offers guaranteed returns and tax benefits under Section 80C, 
                making it a popular choice for conservative investors seeking tax-efficient savings.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>2025 Update:</strong> NSC interest rate is 6.8% for FY 2024-25. Digital NSC certificates are now available through India Post online portal.
                </p>
              </div>
            </section>

            {/* NSC Interest Rates & Returns */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">NSC Interest Rates & Historical Performance</h2>
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
                      <td className="py-3 text-blue-600 font-semibold">6.8%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2023-24</td>
                      <td className="py-3">6.8%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2022-23</td>
                      <td className="py-3">6.8%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2021-22</td>
                      <td className="py-3">6.8%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">NSC Maturity Example (2025)</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Investment:</strong> ₹1,00,000 for 5 years<br/>
                  <strong>Maturity Value:</strong> ₹1,39,082 (at 6.8%)<br/>
                  <strong>Total Gain:</strong> ₹39,082
                </p>
              </div>
            </section>

            {/* NSC Types & Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">NSC Types & Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">NSC VIII Issue</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Current active issue</li>
                    <li>• 5-year maturity period</li>
                    <li>• 6.8% annual interest rate</li>
                    <li>• Minimum investment: ₹1,000</li>
                    <li>• No maximum limit</li>
                    <li>• Transferable to another person</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Tax deduction under Section 80C</li>
                    <li>• Government-backed guarantee</li>
                    <li>• Can be used as collateral for loans</li>
                    <li>• Nomination facility available</li>
                    <li>• Joint holding allowed</li>
                    <li>• Premature encashment not allowed</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* NSC vs Other Tax-Saving Options */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">NSC vs Other 80C Options (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Investment</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Returns</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Lock-in</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Risk</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">NSC</td>
                      <td className="py-3 text-blue-600">6.8%</td>
                      <td className="py-3">5 years</td>
                      <td className="py-3 text-green-600">Zero</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">PPF</td>
                      <td className="py-3 text-green-600">7.1%</td>
                      <td className="py-3">15 years</td>
                      <td className="py-3 text-green-600">Zero</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">ELSS</td>
                      <td className="py-3 text-purple-600">12-15%</td>
                      <td className="py-3">3 years</td>
                      <td className="py-3 text-red-600">High</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Tax Saver FD</td>
                      <td className="py-3 text-orange-600">6.5-7.5%</td>
                      <td className="py-3">5 years</td>
                      <td className="py-3 text-green-600">Zero</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Buy NSC 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Buy NSC (2025)</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Visit Post Office or Bank</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Go to any post office or authorized bank branch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Fill Application Form</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Complete NSC application form with required details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Submit Documents</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Provide KYC documents (Aadhaar, PAN, Address proof)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Make Payment & Get Certificate</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Pay amount and receive NSC certificate</p>
                  </div>
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
                    <li>• Government-backed security</li>
                    <li>• Tax deduction under Section 80C</li>
                    <li>• Guaranteed returns (6.8%)</li>
                    <li>• No maximum investment limit</li>
                    <li>• Can be used as loan collateral</li>
                    <li>• Transferable to another person</li>
                    <li>• Nomination facility available</li>
                    <li>• Shorter lock-in than PPF (5 years)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Interest is taxable (except reinvestment)</li>
                    <li>• No premature withdrawal allowed</li>
                    <li>• Lower returns vs equity investments</li>
                    <li>• Fixed returns despite inflation</li>
                    <li>• TDS applicable on interest</li>
                    <li>• Physical certificate handling required</li>
                    <li>• Interest rates may change for new issues</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Current Rate:</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">6.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lock-in Period:</span>
                  <span className="font-medium text-gray-900 dark:text-white">5 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Min Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Max Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Deduction:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">80C</span>
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

            {/* Where to Buy NSC 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where to Buy NSC 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Post Offices</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">All India Post Offices (Primary source)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Authorized Banks</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">SBI, ICICI, HDFC, Axis Bank</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Online Portal</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">India Post Online (indiapost.gov.in)</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Required Documents</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Identity Proof</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Aadhaar Card, PAN Card, Passport</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Address Proof</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Aadhaar, Utility Bills, Bank Statement</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">For Nomination</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Nominee's identity and address proof</p>
                </div>
              </div>
            </div>

            {/* Tax Information 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Investment:</strong> 80C deduction up to ₹1.5L</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>Interest:</strong> Taxable as per income slab</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Reinvestment:</strong> Deemed investment for 80C</p>
                </div>
              </div>
            </div>

            {/* NSC Calculator */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Calculate NSC Returns</h3>
              <p className="text-sm mb-4 opacity-90">Plan your 5-year tax-saving investment</p>
              <div className="bg-white/20 rounded-lg p-3 text-sm">
                <p><strong>Example:</strong> ₹1L → ₹1.39L in 5 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}