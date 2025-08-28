import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function MarketLinkedInvestments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-b border-red-200 dark:border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/investments-capital"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Investments & Capital
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📈</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Market-Linked Investments (Growth-oriented)</h1>
              <p className="text-gray-600 dark:text-gray-300">Higher risk, higher reward investment options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          
          {/* Equity (Stocks / Shares) */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">📊 Equity (Stocks / Shares)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              <Link to="/learn/direct-equity" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Direct Equity
                </span>
              </Link>

              <Link to="/learn/blue-chip-stocks" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-600 dark:group-hover:border-blue-600 transition-all duration-300">
                    <span className="text-2xl">🔵</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Blue-chip Stocks
                </span>
              </Link>

              <Link to="/learn/mid-small-cap-stocks" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Mid & Small-cap
                </span>
              </Link>

              <Link to="/learn/ipos" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  IPOs
                </span>
              </Link>

              <Link to="/learn/rights-issues" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Rights Issues
                </span>
              </Link>
            </div>
          </section>

          {/* Mutual Funds */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🏦 Mutual Funds</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              <Link to="/learn/equity-mutual-funds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Equity Mutual Funds
                </span>
              </Link>

              <Link to="/learn/debt-mutual-funds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Debt Mutual Funds
                </span>
              </Link>

              <Link to="/learn/hybrid-funds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Hybrid Funds
                </span>
              </Link>

              <Link to="/learn/index-funds-etfs" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Index Funds & ETFs
                </span>
              </Link>
            </div>
          </section>

          {/* Derivatives & Trading */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">⚡ Derivatives & Trading</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              <Link to="/learn/futures-options" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-red-400 dark:group-hover:border-red-500 transition-all duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 leading-tight">
                  Futures & Options
                </span>
              </Link>

              <Link to="/learn/commodity-trading" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-yellow-400 dark:group-hover:border-yellow-500 transition-all duration-300">
                    <span className="text-2xl">🌾</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  Commodity Trading
                </span>
              </Link>

              <Link to="/learn/currency-trading" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">💱</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Currency Trading
                </span>
              </Link>

              <Link to="/learn/index-derivatives" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-indigo-400 dark:group-hover:border-indigo-500 transition-all duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  Index Derivatives
                </span>
              </Link>
            </div>
          </section>

          {/* Portfolio Management & AIFs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🎯 Portfolio Management & AIFs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <Link to="/learn/portfolio-management-services" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Portfolio Management Services
                </span>
              </Link>

              <Link to="/learn/alternative-investment-funds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">🔄</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Alternative Investment Funds
                </span>
              </Link>

              <Link to="/learn/hedge-funds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300">
                    <span className="text-2xl">🛡️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300 leading-tight">
                  Hedge Funds
                </span>
              </Link>
            </div>
          </section>

          {/* Real Estate Investments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🏠 Real Estate Investments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <Link to="/learn/direct-real-estate" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">🏠</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Direct Real Estate
                </span>
              </Link>

              <Link to="/learn/reits" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  REITs
                </span>
              </Link>

              <Link to="/learn/fractional-real-estate" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">🧩</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Fractional Real Estate
                </span>
              </Link>
            </div>
          </section>

          {/* International Investments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🌍 International Investments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <Link to="/learn/global-equity" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Global Equity
                </span>
              </Link>

              <Link to="/learn/international-mutual-funds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">🏦</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  International Mutual Funds
                </span>
              </Link>

              <Link to="/learn/foreign-bonds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">📜</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Foreign Bonds
                </span>
              </Link>
            </div>
          </section>

          {/* Commodities & Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">⚡ Commodities & Alternatives</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              <Link to="/learn/market-linked-gold" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-yellow-400 dark:group-hover:border-yellow-500 transition-all duration-300">
                    <span className="text-2xl">🥇</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  Market-linked Gold
                </span>
              </Link>

              <Link to="/learn/commodity-etfs" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Commodity ETFs
                </span>
              </Link>

              <Link to="/learn/energy-investments" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Energy Investments
                </span>
              </Link>

              <Link to="/learn/structured-products" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-indigo-400 dark:group-hover:border-indigo-500 transition-all duration-300">
                    <span className="text-2xl">🔧</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  Structured Products
                </span>
              </Link>
            </div>
          </section>

          {/* Digital & New-age Assets */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🚀 Digital & New-age Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <Link to="/learn/cryptocurrency" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">₿</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Cryptocurrency
                </span>
              </Link>

              <Link to="/learn/crypto-etfs" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">🔗</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Crypto ETFs
                </span>
              </Link>

              <Link to="/learn/tokenized-assets" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Tokenized Assets
                </span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}