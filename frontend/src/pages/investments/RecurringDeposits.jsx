import React from 'react';
import { Link } from 'react-router-dom';
import { BanknotesIcon, CalculatorIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function RecurringDeposits() {
  const bankRates = [
    { bank: 'SBI', rate: '6.50%', tenure: '1-10 years', minAmount: '₹100' },
    { bank: 'HDFC Bank', rate: '6.75%', tenure: '6 months - 10 years', minAmount: '₹100' },
    { bank: 'ICICI Bank', rate: '6.50%', tenure: '6 months - 10 years', minAmount: '₹100' },
    { bank: 'Axis Bank', rate: '7.00%', tenure: '6 months - 10 years', minAmount: '₹100' },
    { bank: 'Post Office', rate: '6.70%', tenure: '5 years', minAmount: '₹100' },
    { bank: 'Kotak Mahindra', rate: '6.75%', tenure: '6 months - 10 years', minAmount: '₹100' }
  ];

  const documents = [
    'Savings account in the same bank',
    'PAN Card (mandatory)',
    'Aadhaar Card',
    'Auto-debit mandate form',
    'Passport size photographs',
    'Address proof (if required)'
  ];

  const features = [
    { title: 'Disciplined Saving', desc: 'Forces regular monthly savings habit' },
    { title: 'Compound Interest', desc: 'Interest compounded quarterly' },
    { title: 'Flexible Tenure', desc: '6 months to 10 years options' },
    { title: 'Low Minimum', desc: 'Start with just ₹100 per month' },
    { title: 'Auto Debit', desc: 'Automatic monthly deduction' },
    { title: 'Premature Closure', desc: 'Allowed with penalty after 1 year' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-green-200 dark:border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <BanknotesIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Recurring Deposits (RD)</h1>
              <p className="text-gray-600 dark:text-gray-300">Build wealth systematically with monthly deposits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is RD */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Recurring Deposit?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A Recurring Deposit (RD) is a savings scheme where you deposit a fixed amount every month for a predetermined period. 
                It combines the benefits of regular savings with the security of fixed deposits, offering guaranteed returns.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                RDs are ideal for salaried individuals who want to save a portion of their monthly income systematically. 
                The interest is compounded quarterly, helping your money grow faster than simple interest calculations.
              </p>
            </section>

            {/* How it Works */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How RD Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Choose Amount & Tenure</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Decide monthly deposit (min ₹100) and period (6 months to 10 years)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Auto Debit Setup</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Bank automatically debits amount from your savings account monthly</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Earn Interest</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Interest compounded quarterly at fixed rate</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Maturity Payout</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Receive principal + interest at maturity</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Current Rates 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best RD Rates 2025</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Bank</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Interest Rate</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Tenure</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Min Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankRates.map((bank, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{bank.bank}</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">{bank.rate}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{bank.tenure}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{bank.minAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                *Rates as of January 2025. Subject to change. Senior citizens get additional 0.50% interest.
              </p>
            </section>

            {/* Features & Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4 mt-1">
                      <ArrowRightIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                      <ArrowRightIcon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tax Implications */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tax Implications</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interest Taxation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Interest earned on RD is taxable as per your income tax slab. TDS is deducted if interest exceeds ₹40,000 per year (₹50,000 for senior citizens).
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Tax Benefits</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Unlike PPF or ELSS, RD investments don't qualify for tax deduction under Section 80C.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculator CTA */}
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <CalculatorIcon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Calculate Your RD Returns</h3>
              </div>
              <p className="text-green-100 mb-4">
                Plan your monthly savings and see how much you'll earn at maturity.
              </p>
              <Link
                to="/tools?tool=RD Calculator"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Use RD Calculator
              </Link>
            </div>

            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Minimum Amount:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹100/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Maximum Amount:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">No limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tenure:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">6 months - 10 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Interest Rate:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">6.50% - 7.00%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Compounding:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Quarterly</span>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Start with small amounts and increase gradually</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Choose tenure based on your financial goals</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Maintain sufficient balance for auto-debit</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Compare rates across banks before opening</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}