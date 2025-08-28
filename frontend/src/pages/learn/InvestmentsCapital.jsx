import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function InvestmentsCapital() {
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
              to="/learn/banking-payments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Banking & Payments
            </Link>
            <Link 
              to="/learn/insurance-risk"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next: Insurance & Risk
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📈</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Investments & Capital Markets</h1>
              <p className="text-gray-600 dark:text-gray-300">Build wealth through smart investing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Stats */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Investment Market Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">₹400T</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Market Cap</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">14Cr</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Retail Investors</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">₹50L Cr</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">MF AUM</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">7.4Cr</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">SIP Accounts</div>
                </div>
              </div>
            </section>

            {/* What are Investments & Capital Markets */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 What are Investments & Capital Markets?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Investment</strong> means putting your money into assets (FD, stocks, gold, real estate, etc.) to earn returns.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Capital Markets</strong> are financial markets where savings & investments flow between investors and businesses through instruments like stocks, bonds, mutual funds, and derivatives.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Together, they help you grow wealth, beat inflation, and achieve financial goals.
                </p>
              </div>
            </section>

            {/* Why Investments are Important */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💡 Why Investments are Important</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Build wealth for the future</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Beat inflation (FDs grow slower, stocks/bonds grow faster)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Generate passive income (dividends, interest, rent)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Achieve life goals (house, education, retirement)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Gain financial independence</p>
                </div>
              </div>
            </section>

            {/* Investment Categories */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🎯 Investment Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                <Link to="/learn/traditional-investments" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                      <span className="text-2xl">🏦</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 max-w-20 leading-tight">
                    Traditional
                  </span>
                </Link>

                <Link to="/learn/market-linked-investments" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-w-20 leading-tight">
                    Market-Linked
                  </span>
                </Link>

                <Link to="/learn/retirement-investments" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                      <span className="text-2xl">🏖️</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 max-w-20 leading-tight">
                    Retirement
                  </span>
                </Link>

                <Link to="/learn/alternative-investments" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                      <span className="text-2xl">💎</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 max-w-20 leading-tight">
                    Alternative
                  </span>
                </Link>

                <Link to="/learn/goal-based-investing" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:shadow-xl group-hover:border-teal-400 dark:group-hover:border-teal-500 transition-all duration-300">
                      <span className="text-2xl">🎯</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 max-w-20 leading-tight">
                    Goal-Based
                  </span>
                </Link>

                <Link to="/learn/tax-saving-investments" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:shadow-xl group-hover:border-yellow-400 dark:group-hover:border-yellow-500 transition-all duration-300">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 max-w-20 leading-tight">
                    Tax-Saving
                  </span>
                </Link>
              </div>
            </section>

            {/* Understanding Capital Markets */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏢 Understanding Capital Markets</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">The capital market is divided into:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Primary Market</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Companies raise money via IPOs (Initial Public Offerings)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">Secondary Market</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Investors trade shares, bonds, and securities (NSE, BSE in India)</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Main Participants:</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Investors</strong> (individuals like you)</li>
                  <li>• <strong>Companies</strong> (raising funds)</li>
                  <li>• <strong>Intermediaries</strong> (brokers, mutual funds, banks)</li>
                  <li>• <strong>Regulators</strong> (SEBI in India, RBI for bonds)</li>
                </ul>
              </div>
            </section>

            {/* Investment Lifecycle */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📈 Investment Lifecycle (Customer Journey)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">Beginner (20s)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Start with SIPs, index funds, small gold/FDs</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Growing Phase (30s–40s)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Diversify into stocks, bonds, real estate</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Pre-Retirement (50s)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Shift towards safe investments, reduce equity risk</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">Retirement (60+)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Focus on income-generating, low-risk assets</p>
                </div>
              </div>
            </section>

            {/* Risk vs Return Spectrum */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">⚖️ Risk vs Return Spectrum</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold text-gray-900 dark:text-white text-sm">Investment Type</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold text-gray-900 dark:text-white text-sm">Risk Level</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold text-gray-900 dark:text-white text-sm">Expected Returns (per year)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Savings A/c, FD, RD</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">Low</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">3–7%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Bonds, PPF, NPS</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 px-2 py-1 rounded text-xs font-medium">Low-Med</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">6–9%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Mutual Funds (SIP)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 px-2 py-1 rounded text-xs font-medium">Medium</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">10–15% (long term)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Stocks/Equities</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 px-2 py-1 rounded text-xs font-medium">High</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">12–20% (long term)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Real Estate</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 px-2 py-1 rounded text-xs font-medium">Medium</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">8–15%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Gold (Digital/SGB)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 px-2 py-1 rounded text-xs font-medium">Medium</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">6–12%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">Crypto/Startups</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                        <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 px-2 py-1 rounded text-xs font-medium">Very High</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-600 dark:text-gray-300 text-sm">20%+ (but risky/volatile)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>






          </div>

          {/* Sidebar */}
          <div className="space-y-6 h-fit">
            {/* Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Learning Journey</h3>
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore investment concepts through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🧮 Tools & Calculators for Neocred.in</h3>
              <div className="space-y-3">
                <Link to="/calculators/sip-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">SIP Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan your SIP investments</div>
                </Link>
                <Link to="/calculators/fd-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">FD & RD Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate fixed deposit returns</div>
                </Link>
                <Link to="/calculators/lumpsum-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Compound Interest Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate compound returns</div>
                </Link>
                <Link to="/calculators/retirement-goal" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Retirement Corpus Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan retirement savings</div>
                </Link>
                <Link to="/calculators/goal-based-investment" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Goal-Based Investment Planner</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan investments for specific goals</div>
                </Link>
              </div>
            </div>

            {/* How Neocred Helps */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🚀 How Neocred.in Helps Customers</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span>📊</span>
                  <p className="text-purple-100 text-sm">Smart Investment Calculators → know future returns</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🎓</span>
                  <p className="text-purple-100 text-sm">Clear Guides → Stocks, Mutual Funds, Bonds simplified</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🛡️</span>
                  <p className="text-purple-100 text-sm">Risk Management Tips → how to balance safety & growth</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🔔</span>
                  <p className="text-purple-100 text-sm">Market Updates → latest news & SEBI rules</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🎯</span>
                  <p className="text-purple-100 text-sm">Personalized Investment Roadmaps → tailored to age, income & goals</p>
                </div>
              </div>
            </div>

            {/* Investment Tip */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">📊 Investment Tip</h3>
              <p className="text-blue-100 text-sm">
                Start with SIPs in diversified mutual funds. Time in the market beats timing the market for long-term wealth creation.
              </p>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-4">❌ Common Mistakes</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-sm">❌</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Investing without goals</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-sm">❌</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Timing the market</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-sm">❌</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Not diversifying</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-sm">❌</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Ignoring inflation</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-sm">❌</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Following tips blindly</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-sm">❌</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Selling early</p>
                </div>
              </div>
            </div>

            {/* Indian Context */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🇮🇳 Indian Market Growth</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">5 crore+ Demat accounts</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Popular: Zerodha, Groww, Upstox</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">SEBI ensures protection</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">UPI for easy IPO participation</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Fractional investing trend</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">❓ Investment FAQs</h3>
              <div className="space-y-3">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">How much should I invest monthly?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Start with 20% of income in SIPs</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Best age to start investing?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">As early as possible, ideally in 20s</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">SIP vs Lumpsum?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">SIP for regular income, lumpsum for windfalls</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">How to choose mutual funds?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Check past performance, expense ratio, fund manager</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">When to exit investments?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">When goal is achieved or fund underperforms consistently</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">What is asset allocation?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Divide money across equity, debt, gold (60:30:10 ratio)</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Tax on mutual fund gains?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">LTCG: 10% above ₹1L, STCG: 15% for equity funds</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Emergency fund before investing?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Yes, keep 6-12 months expenses in liquid funds</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Direct vs Regular mutual funds?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Direct plans have lower expense ratio, higher returns</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Best investment apps in India?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">Groww, Zerodha Coin, Paytm Money, ET Money</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}