import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AtalPensionYojana() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-purple-200 dark:border-purple-700">
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
            <span className="text-4xl">🎖️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Atal Pension Yojana (APY)</h1>
              <p className="text-gray-600 dark:text-gray-300">Guaranteed pension scheme for unorganized sector workers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is APY */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Atal Pension Yojana?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Atal Pension Yojana (APY) is a government-backed pension scheme for unorganized sector workers, 
                providing guaranteed monthly pension of ₹1,000 to ₹5,000 after age 60 with government co-contribution.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>2025 Update:</strong> APY has over 5 crore subscribers with enhanced digital services and simplified enrollment process through banking correspondents.
                </p>
              </div>
            </section>

            {/* APY Pension Slabs 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">APY Pension Slabs & Contributions (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Monthly Pension</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Entry Age 18</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Entry Age 25</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Entry Age 35</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Entry Age 40</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹1,000</td>
                      <td className="py-3">₹42</td>
                      <td className="py-3">₹54</td>
                      <td className="py-3">₹92</td>
                      <td className="py-3">₹135</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹2,000</td>
                      <td className="py-3">₹84</td>
                      <td className="py-3">₹108</td>
                      <td className="py-3">₹184</td>
                      <td className="py-3">₹270</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹3,000</td>
                      <td className="py-3">₹126</td>
                      <td className="py-3">₹162</td>
                      <td className="py-3">₹276</td>
                      <td className="py-3">₹405</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹4,000</td>
                      <td className="py-3">₹168</td>
                      <td className="py-3">₹216</td>
                      <td className="py-3">₹368</td>
                      <td className="py-3">₹540</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">₹5,000</td>
                      <td className="py-3">₹210</td>
                      <td className="py-3">₹270</td>
                      <td className="py-3">₹460</td>
                      <td className="py-3">₹675</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Value:</strong> Starting at age 18 gives lowest monthly contribution. Government co-contribution available for eligible subscribers.
                </p>
              </div>
            </section>

            {/* APY Benefits & Features */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">APY Benefits & Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Guaranteed Pension</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fixed monthly pension from ₹1,000 to ₹5,000</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Government Co-contribution</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">50% of contribution or ₹1,000 (whichever is lower)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Spouse Pension</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Same pension amount to spouse after subscriber's death</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Nominee Benefit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Accumulated corpus to nominee after both deaths</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Portability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Transfer account across banks and locations</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Auto Debit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Automatic monthly deduction from bank account</p>
                </div>
              </div>
            </section>

            {/* Eligibility & Enrollment 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Eligibility & Enrollment (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Eligibility Criteria</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Age: 18-40 years at entry</li>
                    <li>• Indian citizen with Aadhaar</li>
                    <li>• Bank account holder</li>
                    <li>• Not covered under EPF/NPS</li>
                    <li>• Not income tax payer</li>
                    <li>• Mobile number linked to Aadhaar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Enrollment Process</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Visit any bank branch</li>
                    <li>• Fill APY enrollment form</li>
                    <li>• Choose pension amount</li>
                    <li>• Provide Aadhaar and bank details</li>
                    <li>• Set up auto-debit mandate</li>
                    <li>• Receive PRAN number</li>
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
                    <li>• Guaranteed monthly pension (₹1,000-₹5,000)</li>
                    <li>• Government co-contribution (up to ₹1,000)</li>
                    <li>• Very low monthly contributions</li>
                    <li>• Spouse pension benefit</li>
                    <li>• Government backing and guarantee</li>
                    <li>• Simple enrollment process</li>
                    <li>• Portable across India</li>
                    <li>• Suitable for unorganized sector</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Fixed pension amount (no inflation adjustment)</li>
                    <li>• Long lock-in period (till 60 years)</li>
                    <li>• Limited to unorganized sector workers</li>
                    <li>• No tax benefits available</li>
                    <li>• Penalty for delayed payments</li>
                    <li>• Lower returns compared to market investments</li>
                    <li>• Exit before 60 only in exceptional cases</li>
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
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Pension Amount:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹1K-₹5K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Entry Age:</span>
                  <span className="font-medium text-gray-900 dark:text-white">18-40 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Pension Age:</span>
                  <span className="font-medium text-gray-900 dark:text-white">60 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Min Contribution:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹42/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Max Contribution:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹675/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Govt Co-contribution:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Up to ₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Benefits:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subscribers:</span>
                  <span className="font-medium text-gray-900 dark:text-white">5+ Crore</span>
                </div>
              </div>
            </div>

            {/* Contribution Examples */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contribution Examples</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Age 18 → ₹5,000 pension</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">₹210/month for 42 years</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Age 25 → ₹3,000 pension</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">₹162/month for 35 years</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Age 35 → ₹2,000 pension</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">₹184/month for 25 years</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Age 40 → ₹1,000 pension</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">₹135/month for 20 years</p>
                </div>
              </div>
            </div>

            {/* Government Co-contribution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Govt Co-contribution 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Eligibility:</strong> Join before 31st Dec 2015</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Amount:</strong> 50% of contribution or ₹1,000</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Duration:</strong> First 5 years of contribution</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">APY Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate APY contributions and benefits</p>
              <Link 
                to="/calculators/apy-calculator"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                APY Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}