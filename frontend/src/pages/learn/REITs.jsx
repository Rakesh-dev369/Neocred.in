import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function REITs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-b border-blue-200 dark:border-blue-700">
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
              to="/learn/fractional-real-estate"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Next: Fractional Real Estate
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏢</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Real Estate Investment Trusts (REITs)</h1>
              <p className="text-gray-600 dark:text-gray-300">Invest in real estate without buying property</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What are REITs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are REITs?</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Real Estate Investment Trusts (REITs) are companies that own, operate, or finance income-generating real estate. 
                  They allow you to invest in real estate without actually buying, managing, or financing properties.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  REITs are traded on stock exchanges like regular stocks and must distribute at least 90% of their taxable income 
                  to shareholders as dividends, making them attractive for income-seeking investors.
                </p>
              </div>
            </section>

            {/* Indian REITs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Indian REITs (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">REIT Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Dividend Yield</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Embassy Office Parks</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Office Spaces</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.2%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹320-380</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Mindspace Business Parks</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Office Spaces</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">6.8%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹280-340</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Brookfield India REIT</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Office Spaces</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">7.5%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹260-310</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Nexus Select Trust</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Retail Malls</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">8.1%</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">₹95-115</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Types of REITs */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of REITs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🏢 Office REITs</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Commercial office buildings, IT parks, business centers</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🛍️ Retail REITs</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">Shopping malls, retail centers, high-street properties</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏭 Industrial REITs</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Warehouses, logistics centers, manufacturing facilities</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🏨 Hospitality REITs</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Hotels, resorts, serviced apartments</p>
                </div>
              </div>
            </section>

            {/* How to Invest */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Invest in REITs</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Open Demat Account</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">REITs are traded like stocks, so you need a demat account</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Research REITs</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Analyze property portfolio, occupancy rates, and dividend history</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Buy Units</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Purchase REIT units through your broker like regular stocks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Receive Dividends</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Get quarterly dividend payments directly to your bank account</p>
                  </div>
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High dividend yield (6-8%)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Professional property management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Liquidity like stocks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Diversified real estate exposure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Lower entry barrier vs direct property</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">❌ Disadvantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Interest rate sensitivity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Limited growth potential</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Market volatility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">High minimum investment (₹10,000-15,000)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Dividend tax as per income slab</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">🏢 Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Risk Level:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Dividend Yield:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">6-8% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Investment Horizon:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">3-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Liquidity:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Min Investment:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">₹10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300 text-sm">Dividend Frequency:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Quarterly</span>
                </div>
              </div>
            </div>

            {/* Related Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🧮 Related Calculators</h3>
              <div className="space-y-3">
                <Link to="/calculators/sip" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">SIP Calculator</span>
                </Link>
                <Link to="/calculators/goal-based-investment" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Goal Planning</span>
                </Link>
                <Link to="/calculators/rent-vs-buy" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Rent vs Buy</span>
                </Link>
              </div>
            </div>

            {/* Investment Tips */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">💡 Investment Tips</h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Check occupancy rates and tenant quality</li>
                <li>• Diversify across different REIT types</li>
                <li>• Monitor interest rate environment</li>
                <li>• Focus on dividend sustainability</li>
                <li>• Consider REITs for income portfolio</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}