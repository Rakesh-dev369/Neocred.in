import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PostOfficeSavingsAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 border-b border-blue-200 dark:border-blue-700">
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
            <span className="text-4xl">🏦</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Post Office Savings Account</h1>
              <p className="text-gray-600 dark:text-gray-300">Basic savings account with government backing and nationwide access</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Post Office Savings Account */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is Post Office Savings Account?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Post Office Savings Account (POSA) is a basic savings account offered by India Post with government backing. 
                It provides secure savings with competitive interest rates and access through the extensive post office network.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>2025 Update:</strong> Post Office Savings Account offers 4.0% interest rate with enhanced digital banking services through India Post Payments Bank.
                </p>
              </div>
            </section>

            {/* Interest Rates & Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interest Rates & Account Features (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Feature</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Post Office Savings</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Bank Savings</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Interest Rate</td>
                      <td className="py-3">4.0% per annum</td>
                      <td className="py-3">2.7-3.5% per annum</td>
                      <td className="py-3 text-green-600">Higher by 0.5-1.3%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Minimum Balance</td>
                      <td className="py-3">₹500</td>
                      <td className="py-3">₹1,000-₹10,000</td>
                      <td className="py-3 text-green-600">Lower requirement</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Account Opening</td>
                      <td className="py-3">₹20</td>
                      <td className="py-3">₹0-₹500</td>
                      <td className="py-3 text-blue-600">Minimal cost</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">ATM Withdrawals</td>
                      <td className="py-3">4 free per month</td>
                      <td className="py-3">3-5 free per month</td>
                      <td className="py-3 text-blue-600">Comparable</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Cheque Book</td>
                      <td className="py-3">Available</td>
                      <td className="py-3">Available</td>
                      <td className="py-3 text-blue-600">Same facility</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Key Advantage 2025:</strong> Post Office Savings Account offers higher interest rate (4.0%) compared to most bank savings accounts (2.7-3.5%).
                </p>
              </div>
            </section>

            {/* Account Types & Services */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Types & Services (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Individual Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Single holder, full control and access</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Joint Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Up to 4 holders, either or survivor</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Minor Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For children below 18, guardian required</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Senior Citizen Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Special benefits for 60+ age group</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">NRI Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For Non-Resident Indians (limited features)</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Basic Savings Account</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No minimum balance, limited transactions</p>
                </div>
              </div>
            </section>

            {/* Digital Services 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Banking Services (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">India Post Payments Bank</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Mobile banking app</li>
                    <li>• Internet banking portal</li>
                    <li>• UPI payments and transfers</li>
                    <li>• Bill payment services</li>
                    <li>• Mobile recharge facility</li>
                    <li>• QR code payments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">ATM & Card Services</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• RuPay debit card</li>
                    <li>• ATM network access</li>
                    <li>• POS terminal transactions</li>
                    <li>• Online shopping facility</li>
                    <li>• Cash withdrawal at CSPs</li>
                    <li>• Balance inquiry services</li>
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
                    <li>• Higher interest rate (4.0% vs 2.7-3.5% banks)</li>
                    <li>• Government backing and security</li>
                    <li>• Low minimum balance requirement (₹500)</li>
                    <li>• Extensive post office network (1.5+ lakh)</li>
                    <li>• No account maintenance charges</li>
                    <li>• Digital banking services available</li>
                    <li>• RuPay debit card facility</li>
                    <li>• Suitable for rural and remote areas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Limited ATM network compared to banks</li>
                    <li>• Fewer digital banking features</li>
                    <li>• Limited operating hours (post offices)</li>
                    <li>• No credit card facility</li>
                    <li>• Slower technology adoption</li>
                    <li>• Limited loan products</li>
                    <li>• Manual processes in some locations</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">4.0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Balance:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Account Opening:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Balance:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹2 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">ATM Withdrawals:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">4 free/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Cheque Book:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Nomination:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Government Backing:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Yes</span>
                </div>
              </div>
            </div>

            {/* Interest Calculation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Interest Examples</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">₹10,000 Balance</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Annual Interest: ₹400 (4.0%)</p>
                </div>
                <div className="p-3 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
                  <h4 className="font-medium text-sky-900 dark:text-sky-100">₹50,000 Balance</h4>
                  <p className="text-xs text-sky-700 dark:text-sky-300">Annual Interest: ₹2,000 (4.0%)</p>
                </div>
                <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <h4 className="font-medium text-cyan-900 dark:text-cyan-100">₹1,00,000 Balance</h4>
                  <p className="text-xs text-cyan-700 dark:text-cyan-300">Annual Interest: ₹4,000 (4.0%)</p>
                </div>
              </div>
            </div>

            {/* Who Should Open */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Who Should Open?</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Rural Residents:</strong> Extensive post office network</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Senior Citizens:</strong> Higher interest + govt backing</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-200"><strong>Basic Banking:</strong> Simple savings needs</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Savings Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate interest earnings on savings</p>
              <Link 
                to="/calculators/savings-account"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Savings Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}