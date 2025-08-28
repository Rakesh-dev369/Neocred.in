import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Cryptocurrency() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-b border-orange-200 dark:border-orange-700">
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
              to="/learn/crypto-etfs"
              className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
            >
              Next: Crypto ETFs
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">₿</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Cryptocurrency Investment</h1>
              <p className="text-gray-600 dark:text-gray-300">Digital assets and blockchain-based investments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What is Cryptocurrency */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Cryptocurrency?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Cryptocurrency is a digital or virtual currency secured by cryptography and built on blockchain technology. 
                  It operates independently of traditional banking systems and offers decentralized, peer-to-peer transactions.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-yellow-800 dark:text-yellow-200 font-semibold">⚠️ Regulatory Status in India</p>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">Crypto trading is legal but heavily regulated. 30% tax + 1% TDS applies on gains.</p>
                </div>
              </div>
            </section>

            {/* Popular Cryptocurrencies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Cryptocurrencies (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Cryptocurrency</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Symbol</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Market Cap Rank</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Bitcoin</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">BTC</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">#1</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Digital Gold, Store of Value</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Ethereum</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ETH</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">#2</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Smart Contracts, DeFi</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Binance Coin</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">BNB</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">#4</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Exchange Token</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Polygon</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">MATIC</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">#15</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Layer 2 Scaling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Indian Crypto Exchanges */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Indian Crypto Exchanges (2025)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WazirX</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Largest Indian exchange</li>
                    <li>• 0.2% trading fee</li>
                    <li>• INR deposits via UPI/IMPS</li>
                    <li>• 300+ cryptocurrencies</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">CoinDCX</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• User-friendly interface</li>
                    <li>• 0.1% maker, 0.1% taker fee</li>
                    <li>• SIP for crypto</li>
                    <li>• Educational resources</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zebpay</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Oldest Indian exchange</li>
                    <li>• 0.15% trading fee</li>
                    <li>• Strong security</li>
                    <li>• Mobile-first platform</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mudrex</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Automated trading bots</li>
                    <li>• Copy trading feature</li>
                    <li>• 0.25% trading fee</li>
                    <li>• Portfolio tracking</li>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High return potential (100%+ possible)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">24/7 trading availability</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Decentralized and borderless</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Portfolio diversification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Innovation and technology exposure</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Extremely high volatility (50-90% swings)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Heavy taxation (30% + 1% TDS)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Regulatory uncertainty</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Security risks (hacking, scams)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">No intrinsic value backing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">₿ Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Very High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Volatility:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Extreme</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Tax Rate:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">30% + 1% TDS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Trading Hours:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Min Investment:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">₹100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300 text-sm">Regulation:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Evolving</span>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-300 dark:border-red-700">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">⚠️ High Risk Warning</h3>
              <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
                <p>• Crypto is extremely volatile and speculative</p>
                <p>• Only invest money you can afford to lose</p>
                <p>• Not suitable for conservative investors</p>
                <p>• Heavy taxation reduces net returns</p>
                <p>• Regulatory changes can impact prices</p>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Start with Bitcoin and Ethereum only</li>
                <li>• Use SIP approach to average costs</li>
                <li>• Never invest more than 5% of portfolio</li>
                <li>• Use reputable Indian exchanges only</li>
                <li>• Keep detailed records for tax purposes</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}