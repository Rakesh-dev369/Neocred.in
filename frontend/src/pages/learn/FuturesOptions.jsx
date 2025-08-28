import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FuturesOptions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-b border-red-200 dark:border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/market-linked-investments"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Market-Linked Investments
            </Link>
            <Link 
              to="/learn/commodity-trading"
              className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
            >
              Next: Commodity Trading
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">⚡</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Futures & Options (F&O)</h1>
              <p className="text-gray-600 dark:text-gray-300">Advanced derivatives trading for experienced investors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are F&O */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Futures & Options?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Futures and Options (F&O) are derivative instruments that derive their value from underlying assets like stocks, indices, or commodities. 
                  They allow traders to speculate on price movements or hedge existing positions with leverage.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-red-800 dark:text-red-200 font-semibold">⚠️ High Risk Warning</p>
                  <p className="text-red-700 dark:text-red-300 text-sm">F&O trading is extremely risky and can lead to unlimited losses. Only experienced traders should participate.</p>
                </div>
              </div>
            </section>

            {/* Futures vs Options */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Futures vs Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">📈 Futures</h3>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• <strong>Obligation</strong> to buy/sell at expiry</li>
                    <li>• <strong>Unlimited</strong> profit/loss potential</li>
                    <li>• <strong>Margin</strong> required (10-20% of contract value)</li>
                    <li>• <strong>Linear</strong> payoff structure</li>
                    <li>• <strong>No premium</strong> to pay upfront</li>
                  </ul>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">📊 Options</h3>
                  <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                    <li>• <strong>Right</strong> (not obligation) to buy/sell</li>
                    <li>• <strong>Limited</strong> loss (premium paid)</li>
                    <li>• <strong>Premium</strong> payment required</li>
                    <li>• <strong>Non-linear</strong> payoff structure</li>
                    <li>• <strong>Time decay</strong> affects value</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Popular F&O Instruments */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular F&O Instruments (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Instrument</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Lot Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Margin Required</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Nifty 50</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">25</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹1.5-2L</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Monthly</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Bank Nifty</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">15</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹2-3L</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Weekly</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Reliance</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">250</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹1-1.5L</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Monthly</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">TCS</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">125</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹80K-1.2L</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Monthly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Trading Platforms */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">F&O Trading Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Discount Brokers</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Zerodha Kite - ₹20/order, advanced charts</li>
                    <li>• Upstox Pro - ₹20/order, fast execution</li>
                    <li>• Angel One - ₹20/order, ARQ advisory</li>
                    <li>• 5Paisa - ₹10/order, low cost</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full Service Brokers</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• HDFC Securities - Research + Advisory</li>
                    <li>• ICICI Direct - Premium tools</li>
                    <li>• Kotak Securities - Institutional grade</li>
                    <li>• Axis Direct - Comprehensive platform</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risk Management */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Risk Management Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Essential Rules</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Never risk more than 2% of capital per trade</li>
                    <li>• Always use stop-loss orders</li>
                    <li>• Avoid trading on expiry day</li>
                    <li>• Don't hold positions overnight without hedging</li>
                    <li>• Keep sufficient margin buffer</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Common Mistakes</h3>
                  <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                    <li>• Over-leveraging positions</li>
                    <li>• Ignoring time decay in options</li>
                    <li>• Trading without proper knowledge</li>
                    <li>• Emotional decision making</li>
                    <li>• Not understanding margin requirements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">✅ Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High leverage (10-20x)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Hedging existing positions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Profit in both directions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower capital requirement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High liquidity</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Extremely high risk - can lose 100%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Time decay in options</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Complex strategies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Margin calls and forced liquidation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Requires constant monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">⚡ Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-red-900 dark:text-red-100 text-sm">Very High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 text-sm">Leverage:</span>
                  <span className="font-semibold text-red-900 dark:text-red-100 text-sm">10-20x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 text-sm">Min Capital:</span>
                  <span className="font-semibold text-red-900 dark:text-red-100 text-sm">₹50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 text-sm">Expiry:</span>
                  <span className="font-semibold text-red-900 dark:text-red-100 text-sm">Weekly/Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 text-sm">Trading Hours:</span>
                  <span className="font-semibold text-red-900 dark:text-red-100 text-sm">9:15 AM - 3:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 text-sm">Settlement:</span>
                  <span className="font-semibold text-red-900 dark:text-red-100 text-sm">T+1</span>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-300 dark:border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">⚠️ Important Warning</h3>
              <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                <p>• 90% of F&O traders lose money</p>
                <p>• Only trade with money you can afford to lose</p>
                <p>• Get proper education before starting</p>
                <p>• Start with paper trading first</p>
                <p>• Consider this as speculation, not investment</p>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📚 Learning Resources</h3>
              <div className="space-y-3">
                <a href="https://zerodha.com/varsity" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Zerodha Varsity</span>
                </a>
                <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">NSE Education</span>
                </a>
                <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">SEBI Guidelines</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}