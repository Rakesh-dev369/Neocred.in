import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PersonalFinance() {
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
              to="/learn"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Learn
            </Link>
            <Link 
              to="/learn/banking-payments"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next: Banking & Payments
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">💰</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Personal Finance</h1>
              <p className="text-gray-600 dark:text-gray-300">Master your money management fundamentals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Personal Finance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 What is Personal Finance?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Personal Finance is the process of managing your money, savings, investments, spending, and protection (insurance) to achieve financial goals. It helps you build wealth, avoid debt traps, and secure your future.
              </p>
            </section>

            {/* Importance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💡 Importance of Personal Finance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Helps you control your money instead of money controlling you</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Ensures financial security for emergencies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Helps achieve goals like education, marriage, travel, or buying a house</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Protects against unexpected risks with insurance</p>
                </div>
                <div className="flex items-start space-x-3 md:col-span-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Builds long-term wealth through disciplined saving & investing</p>
                </div>
              </div>
            </section>

            {/* 5 Pillars */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏛️ 5 Key Components of Personal Finance</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 (A) Income</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Salary, business profits, freelance, interest, rent, dividends.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Tip:</strong> Create multiple income streams (side hustle, investments).</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 (B) Budgeting</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3"><strong>Rule: 50/30/20 Budget Rule</strong></p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="text-green-600 font-semibold">50% → Needs</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">rent, food, bills</div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                      <div className="text-yellow-600 font-semibold">30% → Wants</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">travel, shopping, entertainment</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-blue-600 font-semibold">20% → Savings</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">savings & investments</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Tools:</strong> Use budgeting apps / Neocred tools to track spending.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 (C) Saving</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Build Emergency Fund (3–6 months of expenses)</li>
                    <li>• Open high-interest savings account</li>
                    <li>• Automate savings → Pay yourself first</li>
                    <li>• Separate short-term vs long-term savings</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 (D) Investing</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Beginner-friendly:</strong> Fixed Deposits, Recurring Deposits, Mutual Funds (SIP)</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Wealth-building:</strong> Stock Market, Bonds, ETFs, Gold, Real Estate</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Rules:</strong> Start early → power of compounding. Diversify → don't put all money in one place.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 (E) Protection (Insurance & Risk Management)</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <strong>Health Insurance</strong> → Protects against hospital bills</li>
                    <li>• <strong>Life Insurance</strong> → Financial support for family after you</li>
                    <li>• <strong>General Insurance</strong> → Vehicle, property, travel protection</li>
                    <li>• <strong>Emergency Fund</strong> → First line of defense</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Lifecycle */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📈 Personal Finance Lifecycle</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">Early Career (20s–30s)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Focus on budgeting, debt repayment, building emergency fund, and starting investments.</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Mid-Career (30s–40s)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Increase investments, buy insurance, plan for kids' education, start retirement planning.</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Pre-Retirement (50s)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Reduce risky investments, focus on retirement corpus, clear all debts.</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">Retirement (60+)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Focus on safe investments (FD, bonds, pensions), protect capital, and manage healthcare costs.</p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-6">❌ Common Mistakes to Avoid</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Living without a budget</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Spending more than you earn</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">No emergency fund</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Delaying investments</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Ignoring insurance</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Following random stock tips</p>
                </div>
              </div>
            </section>

            {/* India Specific */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🇮🇳 Personal Finance in India</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Popular Savings Options</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">FDs, RDs, PPF, EPF, NPS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tax-Saving Options</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">ELSS, PPF, NPS, Insurance, Section 80C</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Digital Tools</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">UPI, Neobanks, Robo-advisors</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Government Schemes</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Sukanya Samriddhi, Senior Citizens Saving, Atal Pension</p>
                </div>
              </div>
            </section>

            {/* Action Plan */}
            <section className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">✅ Action Plan to Improve Your Personal Finance</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-200">✅</span>
                  <p>Track your income & expenses → Budget properly</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-200">✅</span>
                  <p>Build an emergency fund (at least ₹50,000–₹1,00,000 to start)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-200">✅</span>
                  <p>Get insurance (health + term life insurance)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-200">✅</span>
                  <p>Start investing early (even ₹500 SIP monthly)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-200">✅</span>
                  <p>Avoid unnecessary debt → Use credit wisely</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-200">✅</span>
                  <p>Review your finances every 6 months</p>
                </div>
              </div>
            </section>


          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Learning Journey</h3>
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📚</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore personal finance concepts through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* Neocred Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📊 Neocred Tools & Calculators</h3>
              <div className="space-y-3">
                <Link to="/calculators/budget-planner" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Budget Planner (50/30/20 Rule)</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan your monthly budget</div>
                </Link>
                <Link to="/calculators/emergency-fund" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Emergency Fund Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate emergency fund needs</div>
                </Link>
                <Link to="/calculators/fd-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">FD & RD Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate fixed deposit returns</div>
                </Link>
                <Link to="/calculators/sip-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">SIP & Mutual Fund Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan your SIP investments</div>
                </Link>
                <Link to="/calculators/home-loan-emi" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Loan EMI Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate loan EMIs</div>
                </Link>
                <Link to="/calculators/retirement-goal" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Retirement Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan your retirement corpus</div>
                </Link>
                <Link to="/calculators/net-worth-tracker" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Net Worth Tracker</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Track your net worth</div>
                </Link>
              </div>
            </div>

            {/* How Neocred Helps */}
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🚀 How Neocred.in Helps</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span>📊</span>
                  <p className="text-green-100 text-sm">Smart Tools & Calculators to manage money better</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>💡</span>
                  <p className="text-green-100 text-sm">Guides & Tips for financial literacy</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🔒</span>
                  <p className="text-green-100 text-sm">Secure Finance Tracking without risks</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🎯</span>
                  <p className="text-green-100 text-sm">Personalized Roadmaps for saving, investing & retiring rich</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">✨ Summary</h3>
              <p className="text-purple-100 text-sm">
                Personal Finance is all about earning, saving, investing, protecting, and planning. With Neocred.in, customers have everything at one place — from learning to tracking to planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}