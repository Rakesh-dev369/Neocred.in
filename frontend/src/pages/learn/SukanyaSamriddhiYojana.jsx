import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SukanyaSamriddhiYojana() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 border-b border-pink-200 dark:border-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link to="/learn/senior-citizens-savings" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Senior Citizens Savings
            </Link>
            <Link to="/learn/post-office-monthly-income" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Next: Post Office Monthly Income
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">👧</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sukanya Samriddhi Yojana (SSY)</h1>
              <p className="text-gray-600 dark:text-gray-300">Secure your girl child's future with tax-free returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Sukanya Samriddhi Yojana?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SSY is a government savings scheme for girl children under 10 years. It offers the highest interest rate among all government schemes 
                with complete tax exemption (EEE status) and helps build a substantial corpus for the girl's education and marriage.
              </p>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                <p className="text-pink-800 dark:text-pink-200 text-sm">
                  <strong>2025 Update:</strong> SSY rate is 8.2% with EEE tax status. Digital account opening available through banks and post offices.
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SSY Interest Rates & Maturity (2025)</h2>
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
                      <td className="py-3 text-pink-600 font-semibold">8.2%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2023-24</td>
                      <td className="py-3">8.0%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2022-23</td>
                      <td className="py-3">7.6%</td>
                      <td className="py-3">Annual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">SSY Maturity Example (2025)</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Investment:</strong> ₹1.5L annually for 15 years = ₹22.5L<br/>
                  <strong>Maturity Value (21 years):</strong> ₹72.9L<br/>
                  <strong>Tax-free Gain:</strong> ₹50.4L
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">SSY Rules & Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Eligibility & Investment</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Girl child age: 0-10 years</li>
                    <li>• Maximum 2 accounts per family</li>
                    <li>• Minimum: ₹250 per year</li>
                    <li>• Maximum: ₹1.5 lakh per year</li>
                    <li>• Investment period: 15 years</li>
                    <li>• Maturity: 21 years from opening</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Withdrawal Rules</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Partial withdrawal after 18 years (50%)</li>
                    <li>• For higher education expenses</li>
                    <li>• Full withdrawal at 21 years</li>
                    <li>• Premature closure for marriage after 18</li>
                    <li>• Account transfer on girl's marriage</li>
                    <li>• Nomination by parents/guardian</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SSY vs Other Girl Child Schemes</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Scheme</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Returns</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tax Status</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Maturity</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SSY</td>
                      <td className="py-3 text-pink-600">8.2%</td>
                      <td className="py-3 text-green-600">EEE</td>
                      <td className="py-3">21 years</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">PPF (Child)</td>
                      <td className="py-3 text-blue-600">7.1%</td>
                      <td className="py-3 text-green-600">EEE</td>
                      <td className="py-3">15 years</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Child FD</td>
                      <td className="py-3 text-orange-600">6.5-7.5%</td>
                      <td className="py-3 text-red-600">Taxable</td>
                      <td className="py-3">Flexible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Open SSY Account (2025)</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Visit Bank/Post Office</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Go to authorized bank or post office with required documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Submit Documents</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Girl's birth certificate, parent's ID, address proof</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Initial Deposit</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Make minimum deposit of ₹250 to activate account</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 dark:text-pink-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Get Passbook</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Receive SSY passbook and start regular investments</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    Advantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Highest government scheme rate (8.2%)</li>
                    <li>• Complete tax exemption (EEE)</li>
                    <li>• Government-backed guarantee</li>
                    <li>• Compounding for 21 years</li>
                    <li>• Partial withdrawal for education</li>
                    <li>• Builds financial discipline</li>
                    <li>• Inflation-beating returns</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Only for girl children (0-10 years)</li>
                    <li>• Long lock-in period (21 years)</li>
                    <li>• Maximum 2 accounts per family</li>
                    <li>• Investment cap of ₹1.5L per year</li>
                    <li>• Penalty for default years</li>
                    <li>• Limited liquidity options</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-pink-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-pink-600">8.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Age Limit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">0-10 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Min Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹250/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Max Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1.5L/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Investment Period:</span>
                  <span className="font-medium text-gray-900 dark:text-white">15 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maturity:</span>
                  <span className="font-medium text-gray-900 dark:text-white">21 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Status:</span>
                  <span className="font-medium text-green-600">EEE</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where to Open SSY</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Post Offices</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">All India Post Offices</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Public Sector Banks</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">SBI, PNB, Bank of Baroda</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Private Banks</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">HDFC, ICICI, Axis Bank</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Required Documents</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <h4 className="font-medium text-pink-900 dark:text-pink-100">Girl Child</h4>
                  <p className="text-xs text-pink-700 dark:text-pink-300">Birth certificate, Aadhaar (if available)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Parent/Guardian</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Aadhaar, PAN, Address proof</p>
                </div>
              </div>
            </div>

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

            <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">SSY Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Build your daughter's future</p>
              <div className="bg-white/20 rounded-lg p-3 text-sm">
                <p><strong>₹1.5L annually:</strong></p>
                <p>Investment: ₹22.5L (15 years)</p>
                <p>Maturity: ₹72.9L (21 years)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}