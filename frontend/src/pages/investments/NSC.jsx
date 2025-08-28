import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingOfficeIcon, CalculatorIcon, ArrowRightIcon, ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NSC() {
  const keyFeatures = [
    { title: 'Government Guarantee', desc: '100% safe investment backed by Government of India' },
    { title: '5-Year Lock-in', desc: 'Fixed 5-year investment period with no premature withdrawal' },
    { title: 'Tax Benefits', desc: 'Investment qualifies for deduction under Section 80C' },
    { title: 'Compound Interest', desc: 'Interest compounded annually for better returns' },
    { title: 'No Maximum Limit', desc: 'Invest any amount above minimum ₹1,000' },
    { title: 'Transferable', desc: 'Can be transferred from one person to another' }
  ];

  const interestRates = [
    { year: '2025', rate: '6.80%', tenure: '5 years' },
    { year: '2024', rate: '6.80%', tenure: '5 years' },
    { year: '2023', rate: '6.80%', tenure: '5 years' },
    { year: '2022', rate: '6.80%', tenure: '5 years' }
  ];

  const documents = [
    'PAN Card (mandatory)',
    'Aadhaar Card or Passport',
    'Address proof (Aadhaar/Passport/Driving License)',
    'Passport size photographs (2)',
    'NSC application form',
    'Nomination form (if applicable)',
    'Cash or cheque for investment amount'
  ];

  const purchaseOptions = [
    { 
      option: 'Post Offices', 
      details: 'Available at all post offices across India',
      process: 'Visit nearest post office with documents and cash/cheque'
    },
    { 
      option: 'Designated Banks', 
      details: 'Select nationalized and private banks',
      process: 'Check with your bank if they offer NSC facility'
    },
    { 
      option: 'Online (India Post)', 
      details: 'Through India Post online portal',
      process: 'Register on indiapost.gov.in and apply online'
    }
  ];

  const taxImplications = [
    {
      aspect: 'Investment',
      benefit: 'Deduction under Section 80C up to ₹1.5 lakh',
      note: 'Reduces your taxable income'
    },
    {
      aspect: 'Interest Accrual',
      benefit: 'Annual interest deemed as income',
      note: 'Taxable as per your income tax slab'
    },
    {
      aspect: 'Reinvestment',
      benefit: 'Interest reinvested qualifies for 80C',
      note: 'Subject to overall ₹1.5L limit'
    },
    {
      aspect: 'Maturity',
      benefit: 'Principal amount received tax-free',
      note: 'Only the principal, not accumulated interest'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-b border-orange-200 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <BuildingOfficeIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">National Savings Certificate (NSC)</h1>
              <p className="text-gray-600 dark:text-gray-300">Government-backed 5-year savings scheme with tax benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is NSC */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is National Savings Certificate?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                National Savings Certificate (NSC) is a government-backed savings scheme designed to encourage small savings 
                while providing tax benefits. It's a 5-year fixed-income investment that offers guaranteed returns with 
                the safety of government backing.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                NSC is ideal for conservative investors who want guaranteed returns with tax benefits. The current interest 
                rate for 2025 is 6.80% per annum, compounded annually. The scheme is available at all post offices and 
                select banks across India.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Key Highlight</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  An investment of ₹1 lakh in NSC will grow to approximately ₹1.39 lakhs after 5 years at 6.80% interest rate.
                </p>
              </div>
            </section>

            {/* How NSC Works */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How NSC Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 mr-4">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Purchase NSC</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Buy NSC certificate from post office or bank with minimum ₹1,000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 mr-4">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">5-Year Investment</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Money locked for exactly 5 years with no premature withdrawal</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 mr-4">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Earn Interest</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Get 6.80% annual interest, compounded yearly</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 mr-4">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Maturity Payout</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Receive principal + accumulated interest after 5 years</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interest Rates */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">NSC Interest Rates History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Year</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Interest Rate</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Tenure</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Compounding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interestRates.map((rate, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{rate.year}</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">{rate.rate}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{rate.tenure}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Annually</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                *Interest rates are reviewed periodically by the Government of India
              </p>
            </section>

            {/* Key Features */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 mr-4 mt-1">
                      <ShieldCheckIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Where to Buy */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Where to Buy NSC</h2>
              <div className="space-y-4">
                {purchaseOptions.map((option, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{option.option}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{option.details}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{option.process}</p>
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
                {taxImplications.map((tax, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tax.aspect}</h3>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">{tax.benefit}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{tax.note}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mt-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">⚠️ Important Tax Note</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While the investment qualifies for 80C deduction, the annual interest accrual is taxable. 
                  However, this interest can be reinvested in NSC to claim additional 80C benefit (subject to ₹1.5L limit).
                </p>
              </div>
            </section>

            {/* NSC vs Other Investments */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">NSC vs Other Tax-Saving Options</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Investment</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Returns</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Lock-in</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">NSC</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.80%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">5 years</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Zero</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">PPF</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.10%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">15 years</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Zero</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ELSS</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">12-15%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">3 years</td>
                      <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">High</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Tax Saver FD</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.5-7.5%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">5 years</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Zero</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculator CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <CalculatorIcon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Calculate NSC Returns</h3>
              </div>
              <p className="text-orange-100 mb-4">
                See how much your NSC investment will grow over 5 years.
              </p>
              <Link
                to="/tools?tool=FD Calculator"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Use NSC Calculator
              </Link>
            </div>

            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Current Rate:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">6.80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Min Investment:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Max Investment:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">No limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Lock-in Period:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax Benefit:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">80C</span>
                </div>
              </div>
            </div>

            {/* Investment Example */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Investment Example</h3>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">₹1,00,000</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Initial Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-gray-600 dark:text-gray-300">@6.80% for 5 years</div>
                </div>
                <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹1,39,082</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Maturity Amount</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">₹39,082</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Total Interest Earned</div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Buy NSC before March 31st to claim tax deduction</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Reinvest annual interest in new NSC for additional 80C benefit</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Keep certificates safe - they are bearer instruments</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-1 mr-3 mt-1">
                    <ArrowRightIcon className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Consider NSC for medium-term goals (5 years)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}