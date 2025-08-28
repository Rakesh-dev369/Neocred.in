import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, UserIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SeniorCitizensSavings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-purple-200 dark:border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link to="/learn/kisan-vikas-patra" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Kisan Vikas Patra
            </Link>
            <Link to="/learn/sukanya-samriddhi-yojana" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Next: Sukanya Samriddhi Yojana
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">👴</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Senior Citizens Savings Scheme (SCSS)</h1>
              <p className="text-gray-600 dark:text-gray-300">High returns for 60+ age group with quarterly income</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is SCSS?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SCSS is a government savings scheme exclusively for senior citizens (60+ years) offering high interest rates with quarterly payouts. 
                It provides regular income and tax benefits under Section 80C.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>2025 Update:</strong> SCSS rate is 8.2% with quarterly interest payouts. Digital account opening available through participating banks.
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SCSS Interest Rates & Returns (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Period</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Interest Rate</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Payout</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2024-25</td>
                      <td className="py-3 text-purple-600 font-semibold">8.2%</td>
                      <td className="py-3">Quarterly</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2023-24</td>
                      <td className="py-3">8.2%</td>
                      <td className="py-3">Quarterly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">SCSS Income Example (2025)</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Investment:</strong> ₹30 lakh (maximum)<br/>
                  <strong>Quarterly Income:</strong> ₹61,500<br/>
                  <strong>Annual Income:</strong> ₹2,46,000
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">SCSS Features & Rules (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Eligibility & Investment</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Age: 60+ years (55+ for VRS)</li>
                    <li>• Minimum: ₹1,000</li>
                    <li>• Maximum: ₹30 lakh (₹15L for joint)</li>
                    <li>• Tenure: 5 years (extendable by 3 years)</li>
                    <li>• Joint account with spouse allowed</li>
                    <li>• One-time investment only</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Benefits & Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Quarterly interest payouts</li>
                    <li>• Tax deduction under 80C</li>
                    <li>• Premature closure after 1 year</li>
                    <li>• Nomination facility available</li>
                    <li>• Auto-credit to savings account</li>
                    <li>• Extension option at maturity</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SCSS vs Other Senior Citizen Options</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Investment</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Returns</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tenure</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tax Benefits</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SCSS</td>
                      <td className="py-3 text-purple-600">8.2%</td>
                      <td className="py-3">5 years</td>
                      <td className="py-3 text-green-600">80C</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Senior Citizen FD</td>
                      <td className="py-3 text-blue-600">7.5-8.5%</td>
                      <td className="py-3">1-10 years</td>
                      <td className="py-3 text-red-600">None</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">POMIS</td>
                      <td className="py-3 text-orange-600">7.4%</td>
                      <td className="py-3">5 years</td>
                      <td className="py-3 text-red-600">None</td>
                    </tr>
                  </tbody>
                </table>
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
                    <li>• Highest rate for senior citizens (8.2%)</li>
                    <li>• Regular quarterly income</li>
                    <li>• Government-backed security</li>
                    <li>• Tax deduction under 80C</li>
                    <li>• Premature withdrawal allowed</li>
                    <li>• Extension facility available</li>
                    <li>• Joint account option</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Age restriction (60+ years only)</li>
                    <li>• Interest fully taxable</li>
                    <li>• TDS applicable if interest &gt; ₹50,000</li>
                    <li>• Maximum limit of ₹30 lakh</li>
                    <li>• Penalty for early closure</li>
                    <li>• One-time investment only</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-purple-600">8.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Age Requirement:</span>
                  <span className="font-medium text-gray-900 dark:text-white">60+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Min Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Max Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹30 Lakh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure:</span>
                  <span className="font-medium text-gray-900 dark:text-white">5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Payout:</span>
                  <span className="font-medium text-green-600">Quarterly</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where to Open SCSS</h3>
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
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Information 2025</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Investment:</strong> 80C deduction up to ₹1.5L</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>Interest:</strong> Fully taxable as income</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>TDS:</strong> 10% if interest &gt; ₹50,000</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">SCSS Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate your quarterly income</p>
              <div className="bg-white/20 rounded-lg p-3 text-sm">
                <p><strong>₹30L investment:</strong></p>
                <p>Quarterly: ₹61,500</p>
                <p>Annual: ₹2,46,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}