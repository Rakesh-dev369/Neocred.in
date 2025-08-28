import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, CreditCardIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SavingsAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-purple-200 dark:border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/recurring-deposits"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Recurring Deposits
            </Link>
            <Link 
              to="/learn/current-account"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Current Account
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">💳</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Savings Account</h1>
              <p className="text-gray-600 dark:text-gray-300">Your gateway to banking and financial services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Savings Account */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCardIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is a Savings Account?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A Savings Account is a basic deposit account that allows you to store money safely while earning modest interest. 
                It provides liquidity, security, and serves as the foundation for all banking relationships.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>2025 Update:</strong> Digital-first banks now offer zero-balance accounts, instant account opening, and AI-powered financial insights.
                </p>
              </div>
            </section>

            {/* Current Interest Rates 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Savings Account Interest Rates (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Bank</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Regular</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Premium</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Senior Citizens</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SBI</td>
                      <td className="py-3">2.70%</td>
                      <td className="py-3">3.00%</td>
                      <td className="py-3">3.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">HDFC Bank</td>
                      <td className="py-3">3.00%</td>
                      <td className="py-3">3.50%</td>
                      <td className="py-3">4.00%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">ICICI Bank</td>
                      <td className="py-3">3.00%</td>
                      <td className="py-3">3.50%</td>
                      <td className="py-3">4.00%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Axis Bank</td>
                      <td className="py-3">3.00%</td>
                      <td className="py-3">3.50%</td>
                      <td className="py-3">4.00%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Kotak Mahindra</td>
                      <td className="py-3">3.50%</td>
                      <td className="py-3">4.00%</td>
                      <td className="py-3">4.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">IndusInd Bank</td>
                      <td className="py-3">4.00%</td>
                      <td className="py-3">6.00%</td>
                      <td className="py-3">6.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">DBS Bank</td>
                      <td className="py-3">3.50%</td>
                      <td className="py-3">6.75%</td>
                      <td className="py-3">7.25%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">AU Small Finance</td>
                      <td className="py-3">6.50%</td>
                      <td className="py-3">7.25%</td>
                      <td className="py-3">7.75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Best Rates 2025:</strong> Small Finance Banks and digital banks offer up to 7.75% on savings accounts with higher balance requirements.
                </p>
              </div>
            </section>

            {/* Types of Savings Accounts */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Types of Savings Accounts (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Savings</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Basic account with minimum balance requirement</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Min Balance: ₹1,000-₹10,000</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Balance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No minimum balance requirement</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">Min Balance: ₹0</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premium/Wealth</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">High-value accounts with premium services</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Min Balance: ₹1-25 Lakh</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Senior Citizen</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Special benefits for 60+ age group</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Higher interest + benefits</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Salary Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For salaried employees with employer tie-up</p>
                  <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">Zero balance + benefits</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Savings</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Online-only accounts with digital features</p>
                  <p className="text-xs text-pink-600 dark:text-pink-400 mt-1">Higher rates + digital perks</p>
                </div>
              </div>
            </section>

            {/* Digital Banking Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Banking Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Core Digital Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Instant account opening (Video KYC)</li>
                    <li>• UPI integration and QR payments</li>
                    <li>• Mobile check deposits</li>
                    <li>• Cardless ATM withdrawals</li>
                    <li>• Real-time transaction alerts</li>
                    <li>• Digital debit cards</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Advanced Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• AI-powered expense categorization</li>
                    <li>• Automated savings goals</li>
                    <li>• Investment recommendations</li>
                    <li>• Credit score monitoring</li>
                    <li>• Voice banking assistants</li>
                    <li>• Biometric authentication</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Account Opening Process 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Account Opening Process (2025)</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Choose Bank & Account Type</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Select based on your needs, location, and features required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Submit Documents</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Aadhaar, PAN, Address proof, Income proof (if required)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Complete KYC</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Video KYC or visit branch for verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Initial Deposit & Activation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Make minimum deposit and receive debit card/checkbook</p>
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
                    <li>• Complete liquidity - withdraw anytime</li>
                    <li>• DICGC insurance up to ₹5 lakh</li>
                    <li>• Gateway to all banking services</li>
                    <li>• Debit card and ATM access</li>
                    <li>• Online banking and UPI</li>
                    <li>• Direct benefit transfers (DBT)</li>
                    <li>• Salary and pension credits</li>
                    <li>• Building banking relationship</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Very low interest rates (2.7-7.75%)</li>
                    <li>• Minimum balance penalties</li>
                    <li>• Transaction limits and charges</li>
                    <li>• Interest taxable as income</li>
                    <li>• Inflation erodes purchasing power</li>
                    <li>• Not suitable for wealth building</li>
                    <li>• Various service charges</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Minimum Balance:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹0-₹25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-gray-900 dark:text-white">2.7% - 7.75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Calculation:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Daily Balance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Credit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Quarterly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Zero Risk</span>
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

            {/* Best Savings Accounts 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best Savings Accounts 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Highest Interest</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">AU SFB (7.75%), DBS (7.25%)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Best Digital Features</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">HDFC, ICICI, Axis, Kotak</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Zero Balance</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Kotak 811, IDFC First, Paytm Payments Bank</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Best Overall</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">SBI, HDFC, ICICI (reliability + features)</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Required Documents</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Identity Proof</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Aadhaar Card, PAN Card, Passport, Voter ID</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Address Proof</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Aadhaar, Utility Bills, Rent Agreement</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Income Proof</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Salary Slips, ITR, Form 16 (for premium accounts)</p>
                </div>
              </div>
            </div>

            {/* Tax Information 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>TDS:</strong> 10% if interest > ₹10,000 annually</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Taxation:</strong> Interest taxed as per income slab</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Form 15G/H:</strong> Submit to avoid TDS if eligible</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Pro Tips 2025</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Maintain higher balance for better interest rates</li>
                <li>• Use sweep-in FDs for better returns</li>
                <li>• Link UPI for seamless payments</li>
                <li>• Set up auto-transfers to investments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}