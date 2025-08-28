import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function FixedDeposits() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <CurrencyDollarIcon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Fixed Deposits</h1>
              <p className="text-gray-600 dark:text-gray-300">Guaranteed Returns with Zero Risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is FD */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What are Fixed Deposits?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fixed Deposits offer guaranteed returns with zero risk. Your money is locked for a fixed period with predetermined interest rates.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Key Benefits:</h3>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Guaranteed returns (5-7% annually)</li>
                  <li>• Capital protection with DICGC insurance up to ₹5L</li>
                  <li>• Flexible tenure (7 days to 10 years)</li>
                  <li>• Loan facility against FD (up to 90%)</li>
                </ul>
              </div>
            </section>

            {/* Top 10 Highest FD Rates */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🏆 Top 10 Highest FD Rates (2025)</h2>
              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium">All Banks</button>
                  <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Small Finance</button>
                  <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Private Banks</button>
                  <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Government</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Rank</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Bank</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Tenure</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">General Rate</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Senior Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-bold text-yellow-600">🥇 1</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Suryoday Small Finance Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">5 years</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">9.10%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">9.60%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-bold text-gray-400">🥈 2</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Unity Small Finance Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">~1001 days</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">9.00%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">9.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-bold text-orange-600">🥉 3</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Fincare Small Finance Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">~1000 days</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">8.51%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">9.11%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">4</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Jana Small Finance Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1095 days</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.50%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">5</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Equitas Small Finance Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">888 days</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.50%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">9.00%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">6</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Bandhan Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1 year</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.05%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.55%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">7</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">RBL Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">500 days</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.00%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">8</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">YES Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">18 months</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.00%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">9</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">DCB Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Various</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">7.95%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">-</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium">10</td>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">IDFC FIRST Bank</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">400-500 days</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">7.90%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">8.40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Important Notes:</h4>
                <ul className="text-yellow-700 dark:text-yellow-200 text-sm space-y-1">
                  <li>• Small Finance Banks offer highest rates but have DICGC insurance limit of ₹5 lakhs</li>
                  <li>• Rates are subject to change. Verify current rates before investing</li>
                  <li>• Senior citizens (60+ years) get additional 0.50% interest in most banks</li>
                </ul>
              </div>
            </section>

            {/* Bank Category Comparison */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bank Category Comparison</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-green-200 dark:border-green-700 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                  <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">🏦 Small Finance Banks</h3>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">8.50% - 9.60%</div>
                  <p className="text-green-700 dark:text-green-200 text-sm mb-3">Highest returns but limited insurance coverage</p>
                  <div className="space-y-1 text-xs text-green-600 dark:text-green-300">
                    <div>✓ Unity, Suryoday, Jana</div>
                    <div>✓ Best for high yield seekers</div>
                    <div>⚠️ ₹5L DICGC limit</div>
                  </div>
                </div>
                <div className="border border-blue-200 dark:border-blue-700 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🏛️ Private Banks</h3>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">7.90% - 8.05%</div>
                  <p className="text-blue-700 dark:text-blue-200 text-sm mb-3">Good returns with better brand reliability</p>
                  <div className="space-y-1 text-xs text-blue-600 dark:text-blue-300">
                    <div>✓ HDFC, ICICI, Axis, YES</div>
                    <div>✓ Balanced risk-return</div>
                    <div>✓ Better service network</div>
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/20">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-300 mb-2">🏛️ Government Banks</h3>
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">6.50% - 7.75%</div>
                  <p className="text-gray-700 dark:text-gray-200 text-sm mb-3">Lower returns but maximum safety</p>
                  <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
                    <div>✓ SBI, PNB, BOI, Canara</div>
                    <div>✓ Government backing</div>
                    <div>✓ Safest option</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Traditional Major Banks */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Major Banks FD Rates (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Bank</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">1-2 Years</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">2-3 Years</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">3-5 Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">SBI</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.50%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.75%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">HDFC Bank</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.00%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.00%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.75%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">ICICI Bank</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.75%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.75%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.50%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Axis Bank</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.25%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.00%</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.75%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">For New Customers:</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• PAN Card (mandatory)</li>
                    <li>• Aadhaar Card</li>
                    <li>• Address proof</li>
                    <li>• Passport size photos (2)</li>
                    <li>• Initial deposit amount</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">For Existing Customers:</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Account number</li>
                    <li>• Updated KYC (if required)</li>
                    <li>• Deposit amount</li>
                    <li>• Nomination form (optional)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculator CTA */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Calculate Your FD Returns</h3>
              <p className="mb-4 text-white/90">Use our FD calculator to estimate your returns</p>
              <div className="space-y-3">
                <Link
                  to="/tools?tool=FD Calculator"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors inline-block w-full text-center"
                >
                  🧮 FD Calculator
                </Link>
                <Link
                  to="/tools?tool=FD vs Other Investments"
                  className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-medium py-2 px-4 rounded-lg transition-colors inline-block w-full text-center text-sm"
                >
                  📊 Compare with Other Options
                </Link>
              </div>
            </div>

            {/* FD Strategy Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">🎯 FD Investment Strategy</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">For High Returns (8%+)</h4>
                  <p className="text-blue-700 dark:text-blue-200 text-sm mb-2">Consider Small Finance Banks</p>
                  <div className="text-xs text-blue-600 dark:text-blue-300 space-y-1">
                    <div>• Unity SFB: 9.00% - 9.50%</div>
                    <div>• Suryoday SFB: 9.10% - 9.60%</div>
                    <div>• Keep within ₹5L DICGC limit</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">For Safety + Good Returns</h4>
                  <p className="text-green-700 dark:text-green-200 text-sm mb-2">Choose Private Banks</p>
                  <div className="text-xs text-green-600 dark:text-green-300 space-y-1">
                    <div>• HDFC Bank: Up to 7.00%</div>
                    <div>• Axis Bank: Up to 7.25%</div>
                    <div>• Better brand reliability</div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-300 mb-2">For Maximum Safety</h4>
                  <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">Stick to Government Banks</p>
                  <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <div>• SBI: 6.50% - 6.75%</div>
                    <div>• Government backing</div>
                    <div>• Lower but guaranteed returns</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">💡 Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">💡</span>
                  <div>
                    <h4 className="font-medium">Ladder Your FDs</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Split amount across different tenures for liquidity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">💡</span>
                  <div>
                    <h4 className="font-medium">Senior Citizens Bonus</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Get 0.50% extra interest rate (60+ years)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">💡</span>
                  <div>
                    <h4 className="font-medium">DICGC Insurance</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">₹5L coverage per bank - spread large amounts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">💡</span>
                  <div>
                    <h4 className="font-medium">Tax Planning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Interest taxable as per income slab, plan accordingly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">🔍 Quick Filters</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30">
                  <div className="font-medium text-green-800 dark:text-green-300">Highest Rates (9%+)</div>
                  <div className="text-sm text-green-600 dark:text-green-400">Small Finance Banks</div>
                </button>
                <button className="w-full text-left p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30">
                  <div className="font-medium text-blue-800 dark:text-blue-300">Senior Citizens Special</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Extra 0.50% interest</div>
                </button>
                <button className="w-full text-left p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  <div className="font-medium text-purple-800 dark:text-purple-300">Short Term (&lt; 1 year)</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">Quick liquidity options</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}