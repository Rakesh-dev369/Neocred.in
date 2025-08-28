import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function VoluntaryProvidentFund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              to="/learn/national-pension-scheme"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: National Pension Scheme
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Voluntary Provident Fund (VPF)</h1>
              <p className="text-gray-600 dark:text-gray-300">Additional voluntary contribution to EPF for higher returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is VPF */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is VPF?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Voluntary Provident Fund (VPF) allows employees to contribute more than the mandatory 12% to their EPF account. 
                It earns the same interest rate as EPF with additional tax benefits.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>2025 Update:</strong> VPF continues to offer 8.25% tax-free returns with enhanced digital contribution options through EPFO portal.
                </p>
              </div>
            </section>

            {/* VPF vs EPF Comparison 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">VPF vs EPF Comparison (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Feature</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">EPF</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">VPF</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Contribution</td>
                      <td className="py-3">Mandatory 12%</td>
                      <td className="py-3">Voluntary (any amount)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Interest Rate</td>
                      <td className="py-3">8.25%</td>
                      <td className="py-3">8.25% (same as EPF)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Tax Deduction</td>
                      <td className="py-3">Up to ₹1.5L (80C)</td>
                      <td className="py-3">Up to ₹1.5L (80C)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Employer Matching</td>
                      <td className="py-3">Yes (13.15%)</td>
                      <td className="py-3">No</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Withdrawal</td>
                      <td className="py-3">Same rules as EPF</td>
                      <td className="py-3">Same rules as EPF</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Lock-in Period</td>
                      <td className="py-3">Till retirement</td>
                      <td className="py-3">Till retirement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Key Advantage:</strong> VPF allows unlimited additional contribution while maintaining the same high interest rate as EPF.
                </p>
              </div>
            </section>

            {/* VPF Contribution Limits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">VPF Contribution Guidelines (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Minimum Contribution</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No minimum limit - any amount above 12%</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Maximum Contribution</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Up to 100% of basic salary</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Benefit Limit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹1.5 lakh under Section 80C</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contribution Method</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Monthly deduction from salary</p>
                </div>
              </div>
            </section>

            {/* Digital VPF Management 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital VPF Management (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">EPFO Portal Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• VPF contribution tracking</li>
                    <li>• Separate VPF balance display</li>
                    <li>• Online VPF nomination</li>
                    <li>• VPF withdrawal requests</li>
                    <li>• Interest calculation breakdown</li>
                    <li>• Annual VPF statements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Employer Integration</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Payroll system integration</li>
                    <li>• Monthly VPF deduction setup</li>
                    <li>• VPF contribution changes</li>
                    <li>• Digital VPF certificates</li>
                    <li>• Real-time contribution updates</li>
                    <li>• Tax computation integration</li>
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
                    <li>• Same high interest rate as EPF (8.25%)</li>
                    <li>• Complete tax exemption (EEE status)</li>
                    <li>• No upper limit on contribution</li>
                    <li>• Additional Section 80C deduction</li>
                    <li>• Same withdrawal benefits as EPF</li>
                    <li>• Loan facility available</li>
                    <li>• Digital management through EPFO</li>
                    <li>• Guaranteed returns with government backing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• No employer matching for VPF</li>
                    <li>• Long lock-in period (till retirement)</li>
                    <li>• Lower returns vs equity investments</li>
                    <li>• Inflation risk over long term</li>
                    <li>• Limited liquidity options</li>
                    <li>• Taxable if withdrawn before 5 years</li>
                    <li>• Opportunity cost in bull markets</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">8.25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Contribution:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Contribution:</span>
                  <span className="font-medium text-gray-900 dark:text-white">100% of Basic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Deduction:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹1.5L (80C)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">EEE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Employer Matching:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">No</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lock-in Period:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">Till Retirement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
              </div>
            </div>

            {/* VPF vs Alternatives */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">VPF vs Alternatives 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">VPF (8.25%)</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Tax-free, guaranteed, long lock-in</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">PPF (7.1%)</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">15-year lock-in, ₹1.5L limit</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">ELSS (12-15%)</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Market risk, 3-year lock-in</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">NPS (10-12%)</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Market-linked, till 60 years</p>
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Benefits 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Contribution:</strong> 80C deduction up to ₹1.5L</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Growth:</strong> Tax-free interest accumulation</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Withdrawal:</strong> Tax-free after 5 years</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">VPF Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate VPF returns and tax savings</p>
              <Link 
                to="/calculators/vpf-calculator"
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                VPF Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}