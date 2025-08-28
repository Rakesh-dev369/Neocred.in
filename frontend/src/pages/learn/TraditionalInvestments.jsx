import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function TraditionalInvestments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-b border-green-200 dark:border-green-700">
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
            <span className="text-4xl">🏦</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Traditional Investments (Beginner-friendly)</h1>
              <p className="text-gray-600 dark:text-gray-300">Safe and secure investment options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          
          {/* Bank Deposits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🏦 Bank Deposits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              <Link to="/learn/fixed-deposits" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">💰</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Fixed Deposit
                </span>
              </Link>

              <Link to="/learn/recurring-deposits" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">🔄</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Recurring Deposit
                </span>
              </Link>

              <Link to="/learn/savings-account" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">💳</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Savings Account
                </span>
              </Link>

              <Link to="/learn/current-account" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">🏢</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Current Account
                </span>
              </Link>
            </div>
          </section>

          {/* Government-backed Schemes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🏛️ Government-backed Schemes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <Link to="/learn/ppf" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">📋</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Public Provident Fund
                </span>
              </Link>

              <Link to="/learn/nsc" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">📜</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  National Savings Certificate
                </span>
              </Link>

              <Link to="/learn/kisan-vikas-patra" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-yellow-400 dark:group-hover:border-yellow-500 transition-all duration-300">
                    <span className="text-2xl">🌾</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  Kisan Vikas Patra
                </span>
              </Link>

              <Link to="/learn/senior-citizens-savings" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">👴</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Senior Citizens Savings
                </span>
              </Link>

              <Link to="/learn/sukanya-samriddhi-yojana" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-pink-400 dark:group-hover:border-pink-500 transition-all duration-300">
                    <span className="text-2xl">👧</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 leading-tight">
                  Sukanya Samriddhi Yojana
                </span>
              </Link>

              <Link to="/learn/post-office-monthly-income" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-teal-400 dark:group-hover:border-teal-500 transition-all duration-300">
                    <span className="text-2xl">📮</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                  Post Office Monthly Income
                </span>
              </Link>
            </div>
          </section>

          {/* Bonds & Securities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">📊 Bonds & Securities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <Link to="/learn/government-bonds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">🏛️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Government Bonds
                </span>
              </Link>

              <Link to="/learn/corporate-bonds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Corporate Bonds
                </span>
              </Link>

              <Link to="/learn/tax-free-bonds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-yellow-400 dark:group-hover:border-yellow-500 transition-all duration-300">
                    <span className="text-2xl">🚫</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  Tax-free Bonds
                </span>
              </Link>

              <Link to="/learn/state-development-loans" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">🏛️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  State Development Loans
                </span>
              </Link>
            </div>
          </section>

          {/* Provident & Pension Funds */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🏦 Provident & Pension Funds</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <Link to="/learn/employees-provident-fund" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Employees Provident Fund
                </span>
              </Link>

              <Link to="/learn/voluntary-provident-fund" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Voluntary Provident Fund
                </span>
              </Link>

              <Link to="/learn/national-pension-scheme" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">🏛️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  National Pension Scheme
                </span>
              </Link>

              <Link to="/learn/atal-pension-yojana" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">🎖️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Atal Pension Yojana
                </span>
              </Link>
            </div>
          </section>

          {/* Gold & Precious Metals */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🥇 Gold & Precious Metals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <Link to="/learn/physical-gold" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-yellow-400 dark:group-hover:border-yellow-500 transition-all duration-300">
                    <span className="text-2xl">🥇</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  Physical Gold
                </span>
              </Link>

              <Link to="/learn/gold-etfs" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Gold ETFs
                </span>
              </Link>

              <Link to="/learn/sovereign-gold-bonds" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-amber-400 dark:group-hover:border-amber-500 transition-all duration-300">
                    <span className="text-2xl">🏛️</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                  Sovereign Gold Bonds
                </span>
              </Link>

              <Link to="/learn/silver-investment" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300">
                    <span className="text-2xl">🥈</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300 leading-tight">
                  Silver
                </span>
              </Link>
            </div>
          </section>

          {/* Insurance-linked Savings */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">🛡️ Insurance-linked Savings</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <Link to="/learn/endowment-plans" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Endowment Plans
                </span>
              </Link>

              <Link to="/learn/money-back-policies" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Money-back Policies
                </span>
              </Link>

              <Link to="/learn/guaranteed-savings-plans" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  Guaranteed Savings Plans
                </span>
              </Link>

              <Link to="/learn/unit-linked-insurance-plans" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300">
                    <span className="text-2xl">🔗</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                  Unit Linked Insurance Plans
                </span>
              </Link>
            </div>
          </section>

          {/* Other Small Savings Schemes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">📮 Other Small Savings Schemes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <Link to="/learn/post-office-recurring-deposit" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-teal-400 dark:group-hover:border-teal-500 transition-all duration-300">
                    <span className="text-2xl">🔄</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                  Post Office Recurring Deposit
                </span>
              </Link>

              <Link to="/learn/post-office-time-deposit" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300">
                    <span className="text-2xl">⏰</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  Post Office Time Deposit
                </span>
              </Link>

              <Link to="/learn/post-office-savings-account" className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl group-hover:border-green-400 dark:group-hover:border-green-500 transition-all duration-300">
                    <span className="text-2xl">💳</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Post Office Savings Account
                </span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}