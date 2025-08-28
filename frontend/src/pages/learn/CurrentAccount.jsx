import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BuildingOfficeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CurrentAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-b border-orange-200 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/savings-account"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Savings Account
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
            <span className="text-4xl">🏢</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Current Account</h1>
              <p className="text-gray-600 dark:text-gray-300">Business banking for entrepreneurs and companies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Current Account */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BuildingOfficeIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is a Current Account?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A Current Account is a business deposit account designed for frequent transactions, high-volume banking, and business operations. 
                It offers unlimited transactions but typically doesn't earn interest.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>2025 Update:</strong> Digital current accounts now offer instant account opening, integrated payment gateways, and AI-powered cash flow management.
                </p>
              </div>
            </section>

            {/* Current Account Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Account Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Transaction Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Unlimited transactions (no limit)</li>
                    <li>• High cash deposit/withdrawal limits</li>
                    <li>• Multiple debit cards</li>
                    <li>• Checkbook facility</li>
                    <li>• Overdraft facility available</li>
                    <li>• RTGS/NEFT unlimited</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Business Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Trade finance services</li>
                    <li>• Letter of Credit (LC)</li>
                    <li>• Bank Guarantee (BG)</li>
                    <li>• Forex services</li>
                    <li>• Bulk payment solutions</li>
                    <li>• API integration for businesses</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types of Current Accounts */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Current Accounts (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Current</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Standard business account for SMEs</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Min Balance: ₹10,000-₹25,000</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premium Current</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">High-value accounts with premium services</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Min Balance: ₹1-5 Lakh</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Current</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Online-first accounts for startups</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">Lower balance + digital perks</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Balance Current</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No minimum balance for small businesses</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Min Balance: ₹0 (limited features)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Corporate Current</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For large corporations and enterprises</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">Min Balance: ₹10+ Lakh</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Forex Current</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Multi-currency accounts for exporters</p>
                  <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">Foreign currency handling</p>
                </div>
              </div>
            </section>

            {/* Current Account Charges 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Account Charges (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Service</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">SBI</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">HDFC</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">ICICI</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Account Maintenance</td>
                      <td className="py-3">₹500/month</td>
                      <td className="py-3">₹750/month</td>
                      <td className="py-3">₹1,000/month</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Cash Deposit</td>
                      <td className="py-3">₹3/₹1000</td>
                      <td className="py-3">₹5/₹1000</td>
                      <td className="py-3">₹5/₹1000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Cash Withdrawal</td>
                      <td className="py-3">₹1/₹1000</td>
                      <td className="py-3">₹2/₹1000</td>
                      <td className="py-3">₹2/₹1000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">RTGS</td>
                      <td className="py-3">₹25-50</td>
                      <td className="py-3">₹30-55</td>
                      <td className="py-3">₹25-50</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Checkbook</td>
                      <td className="py-3">₹40/book</td>
                      <td className="py-3">₹75/book</td>
                      <td className="py-3">₹50/book</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Note:</strong> Charges vary by bank and account type. Premium accounts often have reduced or waived charges.
                </p>
              </div>
            </section>

            {/* Digital Banking for Business 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Banking for Business (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Payment Solutions</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• UPI for Business (QR codes)</li>
                    <li>• Payment Gateway integration</li>
                    <li>• Bulk payment processing</li>
                    <li>• Vendor payment automation</li>
                    <li>• Salary disbursement</li>
                    <li>• Tax payment integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Business Management</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Cash flow forecasting</li>
                    <li>• Expense management</li>
                    <li>• Invoice financing</li>
                    <li>• Working capital loans</li>
                    <li>• GST filing assistance</li>
                    <li>• Financial reporting</li>
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
                    <li>• Unlimited transactions</li>
                    <li>• High transaction limits</li>
                    <li>• Business-specific services</li>
                    <li>• Overdraft facility</li>
                    <li>• Multiple user access</li>
                    <li>• Trade finance services</li>
                    <li>• Professional banking relationship</li>
                    <li>• Bulk payment solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• No interest earned (usually)</li>
                    <li>• High minimum balance requirement</li>
                    <li>• Monthly maintenance charges</li>
                    <li>• Transaction charges apply</li>
                    <li>• Complex documentation</li>
                    <li>• Higher penalty charges</li>
                    <li>• Regular compliance requirements</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Minimum Balance:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹10K-₹10L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-gray-900 dark:text-white">0% (usually)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Transactions:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Cash Handling:</span>
                  <span className="font-medium text-gray-900 dark:text-white">High Limits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Overdraft:</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Liquidity:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Insurance:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹5 Lakh DICGC</span>
                </div>
              </div>
            </div>

            {/* Best Current Account Banks 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Current Account Banks 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Best Digital Features</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">HDFC, ICICI, Axis Bank</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Lowest Charges</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">SBI, PNB, Bank of Baroda</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Best for Startups</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Kotak, IndusInd, RBL Bank</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Best Trade Finance</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300">SBI, HDFC, ICICI</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Required Documents</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Business Registration</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Certificate of Incorporation, Partnership Deed, LLP Agreement</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Identity & Address</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Directors' PAN, Aadhaar, Address Proof</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Business Proof</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">GST Registration, Business License, MOA/AOA</p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Eligibility Criteria</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <p className="text-orange-800 dark:text-orange-200"><strong>Sole Proprietorship:</strong> Business registration + owner KYC</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Partnership:</strong> Partnership deed + all partners' KYC</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Company:</strong> Incorporation certificate + directors' KYC</p>
                </div>
              </div>
            </div>

            {/* Business Tips */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Business Banking Tips</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Maintain higher balance to avoid charges</li>
                <li>• Use digital channels to reduce costs</li>
                <li>• Negotiate charges based on business volume</li>
                <li>• Consider overdraft for cash flow management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}