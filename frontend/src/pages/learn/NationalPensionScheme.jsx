import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function NationalPensionScheme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-b border-orange-200 dark:border-orange-700">
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
              to="/learn/atal-pension-yojana"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Atal Pension Yojana
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏛️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">National Pension Scheme (NPS)</h1>
              <p className="text-gray-600 dark:text-gray-300">Market-linked retirement savings with tax benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is NPS */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is NPS?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                National Pension Scheme (NPS) is a market-linked, defined contribution pension system that offers 
                flexible, portable retirement savings with professional fund management and additional tax benefits.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>2025 Update:</strong> NPS offers additional ₹50,000 tax deduction under 80CCD(1B) with enhanced digital services and new fund options.
                </p>
              </div>
            </section>

            {/* NPS Account Types 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">NPS Account Types (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Account Type</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Eligibility</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tax Benefits</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Exit Age</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Tier I (Mandatory)</td>
                      <td className="py-3">All Indian citizens (18-70 years)</td>
                      <td className="py-3">80CCD(1) + 80CCD(1B)</td>
                      <td className="py-3">60 years</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Tier II (Voluntary)</td>
                      <td className="py-3">Existing Tier I subscribers</td>
                      <td className="py-3">80CCD(2) for govt employees</td>
                      <td className="py-3">Anytime</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Corporate NPS</td>
                      <td className="py-3">Employees of registered companies</td>
                      <td className="py-3">Enhanced employer contribution</td>
                      <td className="py-3">60 years</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">APY (Atal Pension)</td>
                      <td className="py-3">Unorganized sector (18-40 years)</td>
                      <td className="py-3">Government co-contribution</td>
                      <td className="py-3">60 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Recommended:</strong> Start with Tier I for tax benefits, add Tier II for additional flexibility after building corpus.
                </p>
              </div>
            </section>

            {/* NPS Investment Options */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">NPS Investment Options (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Asset Classes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Equity (E), Corporate Bonds (C), Government Securities (G), Alternative Funds (A)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fund Managers</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">SBI, HDFC, ICICI, UTI, Aditya Birla, Kotak, Axis, DSP, LIC, Max Life</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Auto Choice</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Age-based automatic asset allocation (Aggressive, Moderate, Conservative)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Active Choice</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Self-managed portfolio with equity limit up to 75%</p>
                </div>
              </div>
            </section>

            {/* NPS Returns & Performance 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">NPS Returns & Performance (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Historical Returns (10-year CAGR)</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Equity Funds: 12-15% CAGR</li>
                    <li>• Corporate Bond Funds: 8-10% CAGR</li>
                    <li>• Government Securities: 7-9% CAGR</li>
                    <li>• Auto Choice Aggressive: 10-12% CAGR</li>
                    <li>• Auto Choice Moderate: 8-10% CAGR</li>
                    <li>• Auto Choice Conservative: 7-8% CAGR</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Top Performing Fund Managers</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• SBI Pension Fund - Consistent performer</li>
                    <li>• UTI Retirement Solutions - Equity focus</li>
                    <li>• HDFC Pension Management - Balanced approach</li>
                    <li>• ICICI Prudential - Technology driven</li>
                    <li>• Aditya Birla - Conservative strategy</li>
                    <li>• Kotak Mahindra - Growth oriented</li>
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
                    <li>• Additional ₹50,000 tax deduction (80CCD1B)</li>
                    <li>• Market-linked returns (10-15% potential)</li>
                    <li>• Professional fund management</li>
                    <li>• Low cost structure (0.01-2.5% fees)</li>
                    <li>• Portable across jobs</li>
                    <li>• Flexible contribution amounts</li>
                    <li>• Multiple asset class options</li>
                    <li>• Government regulated (PFRDA)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Market risk (returns not guaranteed)</li>
                    <li>• Long lock-in period (till 60 years)</li>
                    <li>• Mandatory annuity purchase (40% corpus)</li>
                    <li>• Limited premature exit options</li>
                    <li>• Annuity income is taxable</li>
                    <li>• Complex product for beginners</li>
                    <li>• Fund switching restrictions</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-orange-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Expected Returns:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">10-15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹500/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Deduction:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹2L (80CCD)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Additional Deduction:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹50K (80CCD1B)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Entry Age:</span>
                  <span className="font-medium text-gray-900 dark:text-white">18-70 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Exit Age:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">60 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Fund Managers:</span>
                  <span className="font-medium text-gray-900 dark:text-white">10 Options</span>
                </div>
              </div>
            </div>

            {/* Tax Benefits Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Benefits 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">80CCD(1)</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">10% of salary or ₹1.5L (within 80C limit)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">80CCD(1B)</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Additional ₹50,000 deduction</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">80CCD(2)</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Employer contribution (10% of salary)</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Total Benefit</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Up to ₹2 lakh tax deduction</p>
                </div>
              </div>
            </div>

            {/* Best Fund Managers */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Fund Managers 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Equity:</strong> SBI, UTI, HDFC</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Debt:</strong> ICICI, Kotak, Aditya Birla</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Balanced:</strong> HDFC, SBI, UTI</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">NPS Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate NPS returns and pension amount</p>
              <Link 
                to="/calculators/nps-return"
                className="inline-block bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                NPS Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}