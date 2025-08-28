import React from 'react';
import { Link } from 'react-router-dom';
import { ChartBarIcon, CalculatorIcon, ArrowRightIcon, TrendingUpIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function SIP() {
  const sipBenefits = [
    {
      title: 'Rupee Cost Averaging',
      description: 'Buy more units when prices are low, fewer when high',
      icon: '📊'
    },
    {
      title: 'Power of Compounding',
      description: 'Your returns generate returns, creating exponential growth',
      icon: '🚀'
    },
    {
      title: 'Disciplined Investing',
      description: 'Automated investing removes emotional decision-making',
      icon: '🎯'
    },
    {
      title: 'Flexibility',
      description: 'Start, stop, increase, or decrease amount anytime',
      icon: '🔄'
    },
    {
      title: 'Low Minimum Amount',
      description: 'Start with as little as ₹500 per month',
      icon: '💰'
    },
    {
      title: 'Tax Benefits',
      description: 'ELSS SIPs offer tax deduction under Section 80C',
      icon: '💸'
    }
  ];

  const sipExamples = [
    {
      amount: '₹1,000',
      period: '10 years',
      invested: '₹1.2L',
      returns: '₹2.3L',
      total: '₹3.5L'
    },
    {
      amount: '₹5,000',
      period: '15 years',
      invested: '₹9L',
      returns: '₹20.5L',
      total: '₹29.5L'
    },
    {
      amount: '₹10,000',
      period: '20 years',
      invested: '₹24L',
      returns: '₹75L',
      total: '₹99L'
    }
  ];

  const bestSIPFunds = [
    {
      category: 'Large Cap (Low Risk)',
      funds: [
        { name: 'ICICI Pru Bluechip Fund', returns: '13.5%', minSIP: '₹1,000' },
        { name: 'Axis Bluechip Fund', returns: '13.8%', minSIP: '₹1,000' },
        { name: 'Mirae Asset Large Cap Fund', returns: '14.2%', minSIP: '₹1,000' }
      ]
    },
    {
      category: 'Multi Cap (Medium Risk)',
      funds: [
        { name: 'Parag Parikh Flexi Cap Fund', returns: '15.8%', minSIP: '₹1,000' },
        { name: 'Axis Flexi Cap Fund', returns: '14.5%', minSIP: '₹1,000' },
        { name: 'DSP Flexi Cap Fund', returns: '14.2%', minSIP: '₹1,000' }
      ]
    },
    {
      category: 'Small & Mid Cap (High Risk)',
      funds: [
        { name: 'Axis Midcap Fund', returns: '16.5%', minSIP: '₹1,000' },
        { name: 'DSP Midcap Fund', returns: '15.8%', minSIP: '₹1,000' },
        { name: 'Axis Small Cap Fund', returns: '17.2%', minSIP: '₹1,000' }
      ]
    }
  ];

  const sipStrategies = [
    {
      strategy: 'Step-up SIP',
      description: 'Increase SIP amount by 10-15% annually',
      benefit: 'Matches salary increments, accelerates wealth creation'
    },
    {
      strategy: 'Top-up SIP',
      description: 'Add lumpsum during market corrections',
      benefit: 'Takes advantage of market volatility'
    },
    {
      strategy: 'Goal-based SIP',
      description: 'Different SIPs for different financial goals',
      benefit: 'Systematic approach to achieve multiple goals'
    },
    {
      strategy: 'Trigger SIP',
      description: 'Additional investment when market falls by X%',
      benefit: 'Opportunistic investing during downturns'
    }
  ];

  const sipPlatforms = [
    {
      platform: 'Groww',
      features: ['Zero commission', 'Easy interface', 'Auto-pay setup'],
      minAmount: '₹500',
      rating: '4.5/5'
    },
    {
      platform: 'Zerodha Coin',
      features: ['Direct plans', 'No commission', 'Advanced tools'],
      minAmount: '₹500',
      rating: '4.4/5'
    },
    {
      platform: 'Paytm Money',
      features: ['Zero fees', 'Smart SIP', 'Goal planning'],
      minAmount: '₹100',
      rating: '4.3/5'
    },
    {
      platform: 'ET Money',
      features: ['Free advisory', 'Tax optimization', 'Portfolio tracking'],
      minAmount: '₹500',
      rating: '4.2/5'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-b border-emerald-200 dark:border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <ChartBarIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Systematic Investment Plan (SIP)</h1>
              <p className="text-gray-600 dark:text-gray-300">The most powerful wealth creation tool</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is SIP */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is SIP?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Systematic Investment Plan (SIP) is a method of investing in mutual funds where you invest a fixed amount 
                regularly (monthly, quarterly, or annually) instead of investing a lump sum. It's like a recurring deposit 
                but with the potential for much higher returns through equity markets.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SIP works on the principle of rupee cost averaging and helps you benefit from market volatility. When markets 
                are down, you buy more units; when markets are up, you buy fewer units. Over time, this averages out your 
                purchase cost and reduces investment risk.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 SIP Success Formula</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start Early + Invest Regularly + Stay Invested Long Term = Wealth Creation
                </p>
              </div>
            </section>

            {/* SIP Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose SIP?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-2xl mr-4">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SIP Examples */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">SIP Wealth Creation Examples</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Assuming 12% annual returns (historical average of equity mutual funds)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sipExamples.map((example, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{example.amount}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Monthly SIP for {example.period}</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Invested:</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{example.invested}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Returns:</span>
                        <span className="text-green-600 dark:text-green-400 text-sm font-semibold">{example.returns}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Total:</span>
                          <span className="text-green-600 dark:text-green-400 font-bold">{example.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Best SIP Funds */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best SIP Funds 2025</h2>
              {bestSIPFunds.map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">Fund Name</th>
                          <th className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">3Y Returns</th>
                          <th className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">Min SIP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.funds.map((fund, fundIndex) => (
                          <tr key={fundIndex} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="py-2 px-4 text-gray-900 dark:text-white">{fund.name}</td>
                            <td className="py-2 px-4 text-green-600 dark:text-green-400 font-semibold">{fund.returns}</td>
                            <td className="py-2 px-4 text-gray-600 dark:text-gray-300">{fund.minSIP}</td>
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

            {/* SIP Strategies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Advanced SIP Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sipStrategies.map((strategy, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{strategy.strategy}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{strategy.description}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                      <p className="text-blue-700 dark:text-blue-300 text-sm font-medium">{strategy.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Platforms */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best SIP Platforms 2025</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sipPlatforms.map((platform, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{platform.platform}</h3>
                      <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-2 py-1 rounded text-xs">
                        {platform.rating}
                      </span>
                    </div>
                    <div className="space-y-2 mb-3">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <ArrowRightIcon className="w-3 h-3 text-green-500 mr-2" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      Min SIP: {platform.minAmount}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Start SIP */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Start Your First SIP</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Complete KYC</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">One-time process with PAN, Aadhaar, and bank details</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Choose Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Select from Groww, Zerodha Coin, Paytm Money, etc.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Select Funds</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Start with 2-3 diversified equity funds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Set Auto-Pay</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Enable auto-debit for hassle-free investing</p>
                  </div>
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
                <h3 className="text-xl font-bold">SIP Calculator</h3>
              </div>
              <p className="text-green-100 mb-4">
                Calculate how much wealth you can create with SIP investments.
              </p>
              <Link
                to="/tools?tool=SIP Calculator"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 inline-block w-full text-center"
              >
                Calculate SIP Returns
              </Link>
            </div>

            {/* SIP vs Lumpsum */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SIP vs Lumpsum</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">SIP Advantages</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Rupee cost averaging</li>
                    <li>• Lower risk</li>
                    <li>• Disciplined investing</li>
                    <li>• No market timing needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Lumpsum Advantages</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Higher returns in bull markets</li>
                    <li>• Immediate full exposure</li>
                    <li>• Lower transaction costs</li>
                    <li>• Good for market corrections</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SIP Amount Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">How Much to Invest?</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Beginner</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹1,000-2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Intermediate</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹5,000-10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Advanced</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹15,000+</span>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 mt-4">
                  <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                    <strong>Rule of thumb:</strong> Invest 10-20% of your monthly income in SIPs
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SIP Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <TrendingUpIcon className="w-4 h-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Start SIP on 1st or 5th of month for better averaging</p>
                </div>
                <div className="flex items-start">
                  <TrendingUpIcon className="w-4 h-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Increase SIP by 10-15% annually (step-up SIP)</p>
                </div>
                <div className="flex items-start">
                  <TrendingUpIcon className="w-4 h-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Don't stop SIP during market downturns</p>
                </div>
                <div className="flex items-start">
                  <TrendingUpIcon className="w-4 h-4 text-green-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Review and rebalance portfolio annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}