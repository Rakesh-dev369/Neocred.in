import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon, CalculatorIcon, ArrowRightIcon, ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PPF() {
  const keyFeatures = [
    { title: 'Tax Triple Benefit (EEE)', desc: 'Investment, interest, and maturity amount all tax-free' },
    { title: '15-Year Lock-in', desc: 'Mandatory 15-year investment period with extension option' },
    { title: 'Government Backed', desc: '100% safe investment backed by Government of India' },
    { title: 'Loan Facility', desc: 'Loan available from 3rd to 6th year against PPF balance' },
    { title: 'Partial Withdrawal', desc: 'Withdraw up to 50% from 7th year onwards' },
    { title: 'Nomination Facility', desc: 'Nominate family members for seamless transfer' }
  ];

  const investmentLimits = [
    { year: '2025', minAmount: '₹500', maxAmount: '₹1,50,000', rate: '7.10%' },
    { year: '2024', minAmount: '₹500', maxAmount: '₹1,50,000', rate: '8.00%' },
    { year: '2023', minAmount: '₹500', maxAmount: '₹1,50,000', rate: '8.00%' },
    { year: '2022', minAmount: '₹500', maxAmount: '₹1,50,000', rate: '7.10%' }
  ];

  const documents = [
    'PAN Card (mandatory for all investments)',
    'Aadhaar Card',
    'Passport size photographs (2-3)',
    'Address proof (Aadhaar/Passport/Driving License)',
    'Bank account details',
    'Nomination form (Form 2)',
    'PPF account opening form (Form 1)'
  ];

  const bankOptions = [
    { bank: 'State Bank of India (SBI)', features: 'Online facility, Mobile banking' },
    { bank: 'HDFC Bank', features: 'NetBanking, Branch network' },
    { bank: 'ICICI Bank', features: 'Internet banking, Easy access' },
    { bank: 'Axis Bank', features: 'Digital platform, Quick processing' },
    { bank: 'Punjab National Bank', features: 'Wide branch network' },
    { bank: 'Post Office', features: 'Available in all post offices nationwide' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-b border-purple-200 dark:border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <DocumentTextIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Public Provident Fund (PPF)</h1>
              <p className="text-gray-600 dark:text-gray-300">Build tax-free wealth over 15 years with government guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is PPF */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Public Provident Fund?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Public Provident Fund (PPF) is a long-term savings scheme backed by the Government of India. It offers the unique 
                EEE (Exempt-Exempt-Exempt) tax benefit, meaning your investment, interest earned, and maturity amount are all tax-free.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                With a 15-year lock-in period, PPF is designed for long-term wealth creation and retirement planning. 
                The current interest rate for 2025 is 7.10% per annum, compounded annually.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Key Highlight</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A ₹1.5 lakh annual investment for 15 years at 7.10% interest will grow to approximately ₹40 lakhs - completely tax-free!
                </p>
              </div>
            </section>

            {/* How PPF Works */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How PPF Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Open PPF Account</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Visit any authorized bank or post office with required documents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Annual Investment</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Invest minimum ₹500 to maximum ₹1.5 lakh per financial year</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Earn Interest</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Get 7.10% annual interest, compounded yearly</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Maturity Benefits</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Withdraw entire amount tax-free after 15 years</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interest Rates & Limits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">PPF Rates & Investment Limits</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Financial Year</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Interest Rate</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Min Investment</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Max Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investmentLimits.map((limit, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{limit.year}</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">{limit.rate}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{limit.minAmount}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{limit.maxAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                *Interest rates are reviewed quarterly by the Government of India
              </p>
            </section>

            {/* Key Features */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-4 mt-1">
                      <ShieldCheckIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Where to Open */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Where to Open PPF Account</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bankOptions.map((option, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{option.bank}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{option.features}</p>
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

            {/* Loan & Withdrawal Rules */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Loan & Withdrawal Rules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Facility</h3>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Available from 3rd to 6th year</li>
                    <li>• Maximum: 25% of balance at end of 2nd preceding year</li>
                    <li>• Interest rate: 1% above PPF rate</li>
                    <li>• Repayment: Within 36 months</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Partial Withdrawal</h3>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Available from 7th year onwards</li>
                    <li>• Maximum: 50% of balance at end of 4th preceding year</li>
                    <li>• Purpose: Higher education, medical treatment</li>
                    <li>• No interest charged</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculator CTA */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <CalculatorIcon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Calculate PPF Returns</h3>
              </div>
              <p className="text-purple-100 mb-4">
                See how much your PPF investment will grow over 15 years.
              </p>
              <Link
                to="/tools?tool=PPF Calculator"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Use PPF Calculator
              </Link>
            </div>

            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Current Rate:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">7.10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Min Investment:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹500/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Max Investment:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹1.5L/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Lock-in Period:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">15 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax Benefit:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">EEE Status</span>
                </div>
              </div>
            </div>

            {/* Investment Example */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Investment Example</h3>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹1.5L</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Annual Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-gray-600 dark:text-gray-300">×</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15 Years</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Investment Period</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-gray-600 dark:text-gray-300">=</div>
                </div>
                <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹40L+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Tax-Free Maturity</div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Invest before April 5th to claim tax deduction</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Open separate accounts for spouse and children</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Consider extending for another 5 years at maturity</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Maintain minimum ₹500 investment to keep account active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}