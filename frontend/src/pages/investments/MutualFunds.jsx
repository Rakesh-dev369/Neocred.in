import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTrendingUpIcon, CalculatorIcon, ArrowRightIcon, ChartBarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function MutualFunds() {
  const fundTypes = [
    {
      type: 'Equity Funds',
      risk: 'High',
      returns: '12-15%',
      horizon: '5+ years',
      description: 'Invest primarily in stocks for long-term wealth creation',
      bestFor: 'Long-term goals, wealth building'
    },
    {
      type: 'Debt Funds',
      risk: 'Low-Medium',
      returns: '6-8%',
      horizon: '1-3 years',
      description: 'Invest in bonds and fixed-income securities',
      bestFor: 'Short-term goals, capital preservation'
    },
    {
      type: 'Hybrid Funds',
      risk: 'Medium',
      returns: '8-12%',
      horizon: '3-5 years',
      description: 'Mix of equity and debt for balanced approach',
      bestFor: 'Moderate risk appetite, balanced portfolio'
    },
    {
      type: 'Index Funds',
      risk: 'Medium',
      returns: '10-12%',
      horizon: '5+ years',
      description: 'Track market indices like Nifty 50, Sensex',
      bestFor: 'Passive investing, low-cost exposure'
    }
  ];

  const topFunds2025 = [
    {
      category: 'Large Cap Equity',
      funds: [
        { name: 'Mirae Asset Large Cap Fund', returns: '14.2%', aum: '₹25,000 Cr' },
        { name: 'Axis Bluechip Fund', returns: '13.8%', aum: '₹35,000 Cr' },
        { name: 'ICICI Pru Bluechip Fund', returns: '13.5%', aum: '₹45,000 Cr' }
      ]
    },
    {
      category: 'Mid Cap Equity',
      funds: [
        { name: 'Axis Midcap Fund', returns: '16.5%', aum: '₹15,000 Cr' },
        { name: 'DSP Midcap Fund', returns: '15.8%', aum: '₹12,000 Cr' },
        { name: 'Kotak Emerging Equity', returns: '15.2%', aum: '₹18,000 Cr' }
      ]
    },
    {
      category: 'Hybrid Funds',
      funds: [
        { name: 'ICICI Pru Balanced Advantage', returns: '11.5%', aum: '₹55,000 Cr' },
        { name: 'Axis Balanced Advantage', returns: '11.2%', aum: '₹25,000 Cr' },
        { name: 'HDFC Balanced Advantage', returns: '10.8%', aum: '₹40,000 Cr' }
      ]
    }
  ];

  const platforms = [
    {
      platform: 'Groww',
      features: ['Zero commission', 'Easy interface', 'Goal-based investing'],
      minInvestment: '₹500'
    },
    {
      platform: 'Zerodha Coin',
      features: ['Direct plans only', 'No commission', 'Advanced analytics'],
      minInvestment: '₹500'
    },
    {
      platform: 'Paytm Money',
      features: ['Zero fees', 'Tax harvesting', 'Portfolio rebalancing'],
      minInvestment: '₹100'
    },
    {
      platform: 'ET Money',
      features: ['Free advisory', 'Smart SIP', 'Tax optimization'],
      minInvestment: '₹500'
    }
  ];

  const investmentProcess = [
    {
      step: '1',
      title: 'Complete KYC',
      description: 'One-time KYC completion with PAN, Aadhaar, and bank details'
    },
    {
      step: '2',
      title: 'Choose Platform',
      description: 'Select from Groww, Zerodha Coin, Paytm Money, or other platforms'
    },
    {
      step: '3',
      title: 'Select Funds',
      description: 'Research and choose funds based on your goals and risk appetite'
    },
    {
      step: '4',
      title: 'Start Investing',
      description: 'Begin with lumpsum or SIP investments as per your preference'
    }
  ];

  const taxImplications = [
    {
      type: 'Equity Funds',
      shortTerm: 'STCG: 15% (< 1 year)',
      longTerm: 'LTCG: 10% above ₹1L (> 1 year)',
      dividends: 'Taxable as per slab'
    },
    {
      type: 'Debt Funds',
      shortTerm: 'STCG: As per slab (< 3 years)',
      longTerm: 'LTCG: 20% with indexation (> 3 years)',
      dividends: 'Taxable as per slab'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <ArrowTrendingUpIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Mutual Funds</h1>
              <p className="text-gray-600 dark:text-gray-300">Professional fund management for wealth creation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Mutual Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Mutual Funds?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, 
                or other securities. Professional fund managers make investment decisions based on the fund's objectives, 
                providing individual investors access to professionally managed portfolios.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                With over 1,500 mutual fund schemes in India, you can choose funds that match your risk appetite, 
                investment horizon, and financial goals. Mutual funds offer the benefits of diversification, 
                professional management, and liquidity.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Key Advantage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start investing with just ₹500 and get access to a diversified portfolio that would otherwise require lakhs of rupees to build individually.
                </p>
              </div>
            </section>

            {/* Types of Mutual Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Mutual Funds</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fundTypes.map((fund, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{fund.type}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        fund.risk === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                        fund.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      }`}>
                        {fund.risk} Risk
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{fund.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Expected Returns:</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">{fund.returns}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Time Horizon:</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{fund.horizon}</span>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">{fund.bestFor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Performing Funds 2025 */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Performing Funds 2025</h2>
              {topFunds2025.map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">Fund Name</th>
                          <th className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">3Y Returns</th>
                          <th className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">AUM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.funds.map((fund, fundIndex) => (
                          <tr key={fundIndex} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="py-2 px-4 text-gray-900 dark:text-white">{fund.name}</td>
                            <td className="py-2 px-4 text-green-600 dark:text-green-400 font-semibold">{fund.returns}</td>
                            <td className="py-2 px-4 text-gray-600 dark:text-gray-300">{fund.aum}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                *Returns are annualized for 3 years as of January 2025. Past performance doesn't guarantee future results.
              </p>
            </section>

            {/* How to Invest */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Start Investing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investmentProcess.map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{process.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{process.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Platforms */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Investment Platforms 2025</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{platform.platform}</h3>
                    <div className="space-y-2 mb-3">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <ArrowRightIcon className="w-3 h-3 text-green-500 mr-2" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      Min Investment: {platform.minInvestment}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tax Implications */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tax Implications</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Fund Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Short Term</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Long Term</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Dividends</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxImplications.map((tax, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{tax.type}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">{tax.shortTerm}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">{tax.longTerm}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-sm">{tax.dividends}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Investment Tips */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Smart Investment Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Do's</h3>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      <li>• Start with SIP for disciplined investing</li>
                      <li>• Choose direct plans to save on fees</li>
                      <li>• Diversify across fund categories</li>
                      <li>• Review portfolio annually</li>
                      <li>• Stay invested for long term</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Don'ts</h3>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      <li>• Don't chase past performance</li>
                      <li>• Avoid frequent switching</li>
                      <li>• Don't invest without research</li>
                      <li>• Avoid emotional decisions</li>
                      <li>• Don't ignore expense ratios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculator CTA */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <CalculatorIcon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Calculate Returns</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Plan your mutual fund investments and see potential returns.
              </p>
              <Link
                to="/tools?tool=SIP Calculator"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 inline-block w-full text-center"
              >
                Use SIP Calculator
              </Link>
            </div>

            {/* Quick Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">MF vs Other Investments</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Mutual Funds</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">12-15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Fixed Deposits</span>
                  <span className="font-semibold text-gray-900 dark:text-white">6.5-7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">PPF</span>
                  <span className="font-semibold text-gray-900 dark:text-white">7.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Gold</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8-10%</span>
                </div>
              </div>
            </div>

            {/* Risk Meter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Risk-Return Meter</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Debt Funds</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">Low</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Hybrid Funds</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">Medium</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Equity Funds</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <ChartBarIcon className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Start with index funds for beginners</p>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Use SIP for rupee cost averaging</p>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Rebalance portfolio annually</p>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Consider tax-saving ELSS funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}