import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BuildingLibraryIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PostOfficeMonthlyIncome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-b border-teal-200 dark:border-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link to="/learn/sukanya-samriddhi-yojana" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Sukanya Samriddhi Yojana
            </Link>
            <Link to="/learn/traditional-investments" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Back to Traditional Investments
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📮</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Post Office Monthly Income Scheme (POMIS)</h1>
              <p className="text-gray-600 dark:text-gray-300">Regular monthly income with government guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BuildingLibraryIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is POMIS?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                POMIS is a government savings scheme that provides regular monthly income for 5 years. It's ideal for retirees and those seeking 
                steady income with capital protection and government backing.
              </p>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                <p className="text-teal-800 dark:text-teal-200 text-sm">
                  <strong>2025 Update:</strong> POMIS rate is 7.4% with monthly payouts. Digital account opening available through India Post online portal.
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">POMIS Interest Rates & Returns (2025)</h2>
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
                      <td className="py-3 text-teal-600 font-semibold">7.4%</td>
                      <td className="py-3">Monthly</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2023-24</td>
                      <td className="py-3">7.4%</td>
                      <td className="py-3">Monthly</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">2022-23</td>
                      <td className="py-3">7.1%</td>
                      <td className="py-3">Monthly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">POMIS Income Example (2025)</h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Investment:</strong> ₹9 lakh (maximum)<br/>
                  <strong>Monthly Income:</strong> ₹5,550<br/>
                  <strong>Annual Income:</strong> ₹66,600
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">POMIS Features & Rules (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Investment Rules</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Minimum: ₹1,500 (multiples of ₹1,500)</li>
                    <li>• Maximum: ₹9 lakh (single), ₹15 lakh (joint)</li>
                    <li>• Tenure: 5 years</li>
                    <li>• Monthly interest payout</li>
                    <li>• Joint account allowed</li>
                    <li>• One-time investment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Government-backed guarantee</li>
                    <li>• Regular monthly income</li>
                    <li>• Premature closure after 1 year</li>
                    <li>• Nomination facility available</li>
                    <li>• Auto-credit to savings account</li>
                    <li>• No TDS on interest</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">POMIS vs Other Monthly Income Options</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Investment</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Returns</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Risk</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Tax</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">POMIS</td>
                      <td className="py-3 text-teal-600">7.4%</td>
                      <td className="py-3 text-green-600">Zero</td>
                      <td className="py-3 text-red-600">Taxable</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SCSS</td>
                      <td className="py-3 text-purple-600">8.2%</td>
                      <td className="py-3 text-green-600">Zero</td>
                      <td className="py-3 text-red-600">Taxable</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Monthly Income FD</td>
                      <td className="py-3 text-blue-600">6.5-7.5%</td>
                      <td className="py-3 text-green-600">Zero</td>
                      <td className="py-3 text-red-600">Taxable</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Debt Mutual Funds</td>
                      <td className="py-3 text-orange-600">6-8%</td>
                      <td className="py-3 text-orange-600">Low</td>
                      <td className="py-3 text-orange-600">LTCG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Open POMIS Account (2025)</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Visit Post Office</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Go to any post office with required documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Fill Application Form</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Complete POMIS application form</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Submit KYC Documents</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Provide identity and address proof</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Make Investment & Get Certificate</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Pay amount and receive POMIS certificate</p>
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
                    <li>• Government-backed security</li>
                    <li>• Regular monthly income</li>
                    <li>• No age restrictions</li>
                    <li>• Joint account facility</li>
                    <li>• Premature closure allowed</li>
                    <li>• No TDS deduction</li>
                    <li>• Nomination facility</li>
                    <li>• Capital protection guaranteed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• No tax benefits available</li>
                    <li>• Interest fully taxable</li>
                    <li>• Lower returns vs SCSS</li>
                    <li>• Investment limit of ₹9 lakh</li>
                    <li>• 5-year lock-in period</li>
                    <li>• Penalty for early closure</li>
                    <li>• Fixed returns despite inflation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-teal-600" />
                Quick Facts 2025
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-teal-600">7.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure:</span>
                  <span className="font-medium text-gray-900 dark:text-white">5 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Min Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Max Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹9 Lakh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Payout:</span>
                  <span className="font-medium text-green-600">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Benefits:</span>
                  <span className="font-medium text-red-600">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600">Zero Risk</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Where to Open POMIS</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Post Offices</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">All India Post Offices (Primary source)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Online Portal</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">India Post Online (indiapost.gov.in)</p>
                </div>
              </div>
            </div>

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
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">For Joint Account</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Both applicants' KYC documents</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Information 2025</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>Interest:</strong> Fully taxable as per income slab</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>TDS:</strong> No TDS deduction</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-orange-800 dark:text-orange-200"><strong>Tax Benefits:</strong> No deduction available</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">POMIS Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate your monthly income</p>
              <div className="bg-white/20 rounded-lg p-3 text-sm">
                <p><strong>₹9L investment:</strong></p>
                <p>Monthly: ₹5,550</p>
                <p>Annual: ₹66,600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}