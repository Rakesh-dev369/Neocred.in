import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function UnitLinkedInsurancePlans() {
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
              to="/learn/traditional-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Back to Traditional Investments
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔗</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Unit Linked Insurance Plans (ULIPs)</h1>
              <p className="text-gray-600 dark:text-gray-300">Market-linked insurance with investment flexibility</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are ULIPs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What are ULIPs?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Unit Linked Insurance Plans (ULIPs) combine life insurance with investment in market-linked funds. 
                They offer flexibility to switch between equity, debt, and hybrid funds based on market conditions and risk appetite.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>2025 Update:</strong> New ULIPs offer reduced charges, enhanced fund options, and improved transparency with IRDAI regulations ensuring better investor protection.
                </p>
              </div>
            </section>

            {/* ULIP Fund Performance 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">ULIP Fund Performance (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Fund Type</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">1-Year Return</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">5-Year CAGR</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Equity Growth Fund</td>
                      <td className="py-3">18-25%</td>
                      <td className="py-3">12-15%</td>
                      <td className="py-3">High</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Large Cap Fund</td>
                      <td className="py-3">15-20%</td>
                      <td className="py-3">10-13%</td>
                      <td className="py-3">Medium-High</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Balanced Fund</td>
                      <td className="py-3">12-16%</td>
                      <td className="py-3">9-12%</td>
                      <td className="py-3">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Debt Fund</td>
                      <td className="py-3">7-9%</td>
                      <td className="py-3">6-8%</td>
                      <td className="py-3">Low</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Liquid Fund</td>
                      <td className="py-3">6-7%</td>
                      <td className="py-3">5-6%</td>
                      <td className="py-3">Very Low</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Index Fund</td>
                      <td className="py-3">16-22%</td>
                      <td className="py-3">11-14%</td>
                      <td className="py-3">Medium-High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Performers 2025:</strong> Equity Growth and Index funds leading with 12-15% CAGR over 5 years.
                </p>
              </div>
            </section>

            {/* ULIP Charges Structure */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">ULIP Charges Structure (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premium Allocation Charges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Year 1: 10-15%, Year 2-5: 5-10%, Year 6+: 2-5%</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fund Management Charges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">1.25-1.75% per annum of fund value</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Policy Administration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹500-₹1,000 per month</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mortality Charges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Age-based, increases with age</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Switching Charges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Free: 4-12 times/year, Then: ₹100-₹500</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Surrender Charges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Year 1-5: High, Year 6+: Nil</p>
                </div>
              </div>
            </section>

            {/* Best ULIPs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Best ULIPs (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Top Performing ULIPs</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• SBI Life Smart Wealth Builder - Low charges</li>
                    <li>• HDFC Life ProGrowth Plus - Flexible</li>
                    <li>• ICICI Pru Signature - Premium features</li>
                    <li>• Max Life Smart Wealth Plan</li>
                    <li>• Bajaj Allianz Goal Assure - Goal-based</li>
                    <li>• Aditya Birla Sun Life Wealth Plus</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Selection Criteria</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Low allocation charges (&lt;10% after year 1)</li>
                    <li>• Fund management fees (&lt;1.5%)</li>
                    <li>• Good fund performance track record</li>
                    <li>• Multiple fund options (10+ funds)</li>
                    <li>• Free switching facility (6+ times)</li>
                    <li>• Flexible premium payment options</li>
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
                    <li>• Market-linked returns (10-15% potential)</li>
                    <li>• Life insurance protection included</li>
                    <li>• Tax benefits under 80C and 10(10D)</li>
                    <li>• Flexibility to switch between funds</li>
                    <li>• Professional fund management</li>
                    <li>• Partial withdrawal facility</li>
                    <li>• Top-up premium options</li>
                    <li>• Transparency in charges and NAV</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• High charges in initial years (10-15%)</li>
                    <li>• Market risk - no guaranteed returns</li>
                    <li>• Complex product with multiple charges</li>
                    <li>• Long lock-in period (5 years minimum)</li>
                    <li>• Lower returns vs pure mutual funds</li>
                    <li>• Mortality charges reduce returns</li>
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
                  <span className="font-medium text-green-600 dark:text-green-400">8-15% CAGR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Premium:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹36,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Policy Term:</span>
                  <span className="font-medium text-gray-900 dark:text-white">10-30 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lock-in Period:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Fund Options:</span>
                  <span className="font-medium text-gray-900 dark:text-white">10-20 funds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Switching:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">4-12 free/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Benefits:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">80C + 10(10D)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">Market Risk</span>
                </div>
              </div>
            </div>

            {/* Fund Allocation Strategy */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Fund Allocation Strategy</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="font-medium text-red-900 dark:text-red-100">Age 20-30</h4>
                  <p className="text-xs text-red-700 dark:text-red-300">80% Equity + 20% Debt</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Age 30-40</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">70% Equity + 30% Debt</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Age 40-50</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">60% Equity + 40% Debt</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Age 50+</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">40% Equity + 60% Debt</p>
                </div>
              </div>
            </div>

            {/* ULIP vs Alternatives */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">ULIP vs Alternatives</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-orange-800 dark:text-orange-200"><strong>ULIP:</strong> Insurance + Investment (8-12% returns)</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Term + MF:</strong> Separate products (10-15% returns)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Recommendation:</strong> Term + MF usually better</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">ULIP Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate ULIP returns and compare charges</p>
              <Link 
                to="/calculators/ulip-return"
                className="inline-block bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                ULIP Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}