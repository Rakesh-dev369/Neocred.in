import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function EmployeesProvidentFund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-b border-blue-200 dark:border-blue-700">
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
              to="/learn/voluntary-provident-fund"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Next: Voluntary Provident Fund
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">👥</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Employees Provident Fund (EPF)</h1>
              <p className="text-gray-600 dark:text-gray-300">Mandatory retirement savings for salaried employees</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is EPF */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BanknotesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is EPF?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Employee Provident Fund (EPF) is a mandatory retirement savings scheme for salaried employees 
                in India. Both employee and employer contribute 12% of basic salary monthly.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>2025 Update:</strong> EPF interest rate increased to 8.25% - highest in recent years. Enhanced digital services through EPFO portal and UAN system.
                </p>
              </div>
            </section>

            {/* EPF Contribution Structure 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">EPF Contribution Structure (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Component</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Employee</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Employer</th>
                      <th className="text-left py-3 text-gray-900 dark:text-white font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">EPF Account</td>
                      <td className="py-3">12% of Basic</td>
                      <td className="py-3">3.67% of Basic</td>
                      <td className="py-3">15.67%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">EPS Account</td>
                      <td className="py-3">0%</td>
                      <td className="py-3">8.33% of Basic</td>
                      <td className="py-3">8.33%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">EDLI Scheme</td>
                      <td className="py-3">0%</td>
                      <td className="py-3">0.50% of Basic</td>
                      <td className="py-3">0.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium">Admin Charges</td>
                      <td className="py-3">0%</td>
                      <td className="py-3">0.65% of Basic</td>
                      <td className="py-3">0.65%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-medium"><strong>Total</strong></td>
                      <td className="py-3"><strong>12%</strong></td>
                      <td className="py-3"><strong>13.15%</strong></td>
                      <td className="py-3"><strong>25.15%</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Salary Limit 2025:</strong> EPF contribution applicable on basic salary up to ₹15,000 per month.
                </p>
              </div>
            </section>

            {/* EPF Benefits & Features */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">EPF Benefits & Features (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Benefits</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">EEE status - Exempt at all stages</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interest Rate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">8.25% per annum (2025) - Tax-free</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Facility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Up to 75% for home, medical, education</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Partial Withdrawal</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">After 5 years for specific purposes</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pension Benefit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">EPS provides monthly pension after 58</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Insurance Cover</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">EDLI provides life insurance coverage</p>
                </div>
              </div>
            </section>

            {/* Digital Services 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Digital Services (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">EPFO Portal Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• UAN-based single account</li>
                    <li>• Online balance check</li>
                    <li>• Digital claim submission</li>
                    <li>• Passbook download</li>
                    <li>• Nomination updates</li>
                    <li>• Transfer requests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Mobile & SMS Services</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• UMANG mobile app</li>
                    <li>• SMS balance inquiry</li>
                    <li>• WhatsApp services</li>
                    <li>• Missed call balance</li>
                    <li>• Email notifications</li>
                    <li>• OTP-based authentication</li>
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
                    <li>• Highest interest rate (8.25% in 2025)</li>
                    <li>• Complete tax exemption (EEE status)</li>
                    <li>• Employer contribution (additional 13.15%)</li>
                    <li>• Loan facility available</li>
                    <li>• Partial withdrawal options</li>
                    <li>• Pension benefit through EPS</li>
                    <li>• Life insurance via EDLI</li>
                    <li>• Digital services and UAN system</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Mandatory for eligible employees</li>
                    <li>• Limited to basic salary of ₹15,000</li>
                    <li>• Long lock-in period (till retirement)</li>
                    <li>• Taxable if withdrawn before 5 years</li>
                    <li>• Lower returns compared to equity</li>
                    <li>• Dependent on employer compliance</li>
                    <li>• Complex withdrawal procedures</li>
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
                  <span className="font-medium text-green-600 dark:text-green-400">8.25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Employee Contribution:</span>
                  <span className="font-medium text-gray-900 dark:text-white">12% of Basic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Employer Contribution:</span>
                  <span className="font-medium text-gray-900 dark:text-white">13.15% of Basic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Salary Limit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹15,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">EEE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Maturity:</span>
                  <span className="font-medium text-gray-900 dark:text-white">58 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Loan Facility:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Partial Withdrawal:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">After 5 years</span>
                </div>
              </div>
            </div>

            {/* Digital Services */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Digital Services 2025</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">EPFO Portal</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">UAN-based services, claims, transfers</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100">UMANG App</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">Mobile app for all EPF services</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">SMS & WhatsApp</h4>
                  <p className="text-xs text-purple-700 dark:text-purple-300">Balance inquiry and updates</p>
                </div>
              </div>
            </div>

            {/* Withdrawal Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Withdrawal Rules 2025</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200"><strong>Full:</strong> Retirement, unemployment (2+ months)</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200"><strong>Partial:</strong> Home, medical, marriage, education</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200"><strong>Loan:</strong> Up to 75% for specific purposes</p>
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">EPF Calculator</h3>
              <p className="text-sm mb-4 opacity-90">Calculate EPF maturity and returns</p>
              <Link 
                to="/calculators/epf-maturity"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                EPF Calculator →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}