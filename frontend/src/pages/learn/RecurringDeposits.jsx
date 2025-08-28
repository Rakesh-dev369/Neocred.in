import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, ArrowPathIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function RecurringDeposits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-b border-green-200 dark:border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/fixed-deposits"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Fixed Deposits
            </Link>
            <Link 
              to="/learn/savings-account"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Savings Account
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔄</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Recurring Deposits (RD)</h1>
              <p className="text-gray-600 dark:text-gray-300">Monthly savings with guaranteed returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Recurring Deposit */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <ArrowPathIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is a Recurring Deposit?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A Recurring Deposit (RD) is a savings scheme where you deposit a fixed amount every month for a predetermined period. 
                It combines the discipline of regular savings with the security of fixed deposits.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>2025 Update:</strong> Digital RDs now offer auto-debit facilities, flexible payment dates, and instant account opening through mobile apps.
                </p>
              </div>
            </section>

            {/* Current Interest Rates 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Latest RD Interest Rates (January 2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Bank</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">1-2 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">3-5 Years</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Senior Citizens</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">SBI</td>
                      <td className="py-3">6.80%</td>
                      <td className="py-3">6.50%</td>
                      <td className="py-3">7.30%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">HDFC Bank</td>
                      <td className="py-3">7.00%</td>
                      <td className="py-3">7.10%</td>
                      <td className="py-3">7.60%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">ICICI Bank</td>
                      <td className="py-3">7.00%</td>
                      <td className="py-3">7.00%</td>
                      <td className="py-3">7.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Axis Bank</td>
                      <td className="py-3">7.25%</td>
                      <td className="py-3">7.25%</td>
                      <td className="py-3">7.75%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Punjab National Bank</td>
                      <td className="py-3">6.75%</td>
                      <td className="py-3">6.75%</td>
                      <td className="py-3">7.25%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Canara Bank</td>
                      <td className="py-3">6.70%</td>
                      <td className="py-3">6.70%</td>
                      <td className="py-3">7.20%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Ujjivan SFB</td>
                      <td className="py-3">8.50%</td>
                      <td className="py-3">8.25%</td>
                      <td className="py-3">9.00%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Equitas SFB</td>
                      <td className="py-3">8.25%</td>
                      <td className="py-3">8.00%</td>
                      <td className="py-3">8.75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Note:</strong> RD rates are typically same as FD rates for equivalent tenure. Small Finance Banks offer the highest rates.
                </p>
              </div>
            </section>

            {/* How RD Works */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How Recurring Deposits Work</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 dark:text-green-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Choose Monthly Amount</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Decide fixed monthly deposit (minimum ₹100-₹500)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 dark:text-green-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Select Tenure</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Choose period from 6 months to 10 years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 dark:text-green-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Monthly Deposits</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Deposit same amount every month on fixed date</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 dark:text-green-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Maturity</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Get total deposits + compound interest at maturity</p>
                  </div>
                </div>
              </div>
            </section>

            {/* RD Calculation Example */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">RD Calculation Example (2025)</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Investment Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Monthly Deposit:</span>
                        <span className="font-medium">₹5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Tenure:</span>
                        <span className="font-medium">5 Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                        <span className="font-medium">7.5% p.a.</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Maturity Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total Deposits:</span>
                        <span className="font-medium">₹3,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Interest Earned:</span>
                        <span className="font-medium text-green-600">₹61,068</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-900 dark:text-white font-semibold">Maturity Amount:</span>
                        <span className="font-bold text-green-600">₹3,61,068</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital RD Features 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital RD Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Automation Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Auto-debit from savings account</li>
                    <li>• SMS/Email reminders for deposits</li>
                    <li>• Flexible payment dates (1st-28th)</li>
                    <li>• Skip payment facility (limited)</li>
                    <li>• Online account opening</li>
                    <li>• Digital certificates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Smart Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Goal-based RD planning</li>
                    <li>• Step-up RD (increasing amounts)</li>
                    <li>• Multiple RDs management</li>
                    <li>• Real-time balance tracking</li>
                    <li>• Maturity alerts and options</li>
                    <li>• Tax calculation assistance</li>
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
                    <li>• Disciplined monthly savings habit</li>
                    <li>• Guaranteed returns with capital protection</li>
                    <li>• Low minimum amount (₹100-₹500)</li>
                    <li>• Flexible tenure options</li>
                    <li>• DICGC insurance up to ₹5 lakh</li>
                    <li>• Loan against RD facility</li>
                    <li>• Auto-debit convenience</li>
                    <li>• Suitable for goal-based savings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Lower returns vs equity investments</li>
                    <li>• Interest fully taxable</li>
                    <li>• Penalty for missed deposits</li>
                    <li>• Inflation erosion over long term</li>
                    <li>• Limited liquidity during tenure</li>
                    <li>• Fixed returns despite market changes</li>
                    <li>• TDS applicable if interest > ₹40,000</li>
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
                  <span className="text-gray-600 dark:text-gray-400">Minimum Monthly:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹100-₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maximum Monthly:</span>
                  <span className="font-medium text-gray-900 dark:text-white">No Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tenure Range:</span>
                  <span className="font-medium text-gray-900 dark:text-white">6 months - 10 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-medium text-gray-900 dark:text-white">6.5% - 9.0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Compounding:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Quarterly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Zero Risk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Penalty:</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">1-2% for default</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Insurance:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">₹5 Lakh DICGC</span>
                </div>
              </div>
            </div>

            {/* Best RD Banks 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Best RD Banks 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Highest Rates</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Ujjivan SFB (9%), Equitas SFB (8.75%)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Best Digital Features</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">HDFC, ICICI, Axis Bank</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">Lowest Minimum</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">SBI (₹100), PNB (₹100)</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">Best Flexibility</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Kotak, IndusInd Bank</p>
                </div>
              </div>
            </div>

            {/* RD vs SIP Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">RD vs SIP Comparison</h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Recurring Deposit</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Fixed returns, Zero risk, Lower growth</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">SIP (Mutual Funds)</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Market-linked returns, Higher risk, Better growth potential</p>
                </div>
              </div>
            </div>

            {/* Tax Information 2025 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Rules 2025</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-800 dark:text-red-200"><strong>TDS:</strong> 10% if annual interest > ₹40,000</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Taxation:</strong> Interest taxed as per income slab</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Form 15G/H:</strong> Submit to avoid TDS if eligible</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Calculate RD Returns</h3>
              <p className="text-sm mb-4 opacity-90">Plan your monthly savings with our RD calculator</p>
              <Link 
                to="/calculators/rd"
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                RD Calculator →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}