import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const GovtPublicFinance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/corporate-finance"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Corporate Finance
            </Link>
            <Link 
              to="/learn/alt-fintech"
              className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Next: Alternative Finance
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏛️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Government & Public Finance</h1>
              <p className="text-gray-600 dark:text-gray-300">Understand public policy and government financial systems</p>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Economic Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">₹48L Cr</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Budget 2025</div>
                </div>
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">6.3%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">GDP Growth</div>
                </div>
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">$635B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Forex Reserves</div>
                </div>
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">4.5%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Inflation</div>
                </div>
              </div>
            </section>

            {/* What is Government Finance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 What is Government Finance?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Government & Public Finance is about how governments collect, manage, and spend money to provide services, build infrastructure, and support citizens. It also includes rules and schemes that directly affect your finances.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  The government collects money (mainly through taxes) and spends it on public services like roads, schools, hospitals, defense, subsidies, and social security.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Public Finance ensures that money is used in a way that supports economic growth, reduces inequality, and provides welfare.
                </p>
              </div>
            </section>

            {/* Sources of Government Revenue */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💰 Sources of Government Revenue</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Taxes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Direct Taxes</h4>
                      <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        <p>• Income Tax</p>
                        <p>• Corporate Tax</p>
                        <p>• Capital Gains Tax</p>
                        <p>• Wealth Tax (abolished in India)</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Indirect Taxes</h4>
                      <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                        <p>• GST (Goods & Services Tax)</p>
                        <p>• Customs Duty</p>
                        <p>• Excise Duty</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Non-Tax Revenue</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• Dividends from government-owned companies (like LIC, SBI, ONGC)</p>
                    <p>• Fees, fines, and charges (passport fees, license fees, tolls)</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Borrowings</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• From domestic investors through Government Bonds, Treasury Bills</p>
                    <p>• From foreign institutions (World Bank, IMF, foreign governments)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Government Expenditure */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏢 Government Expenditure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-3">Development Expenditure</h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <p>• Infrastructure (roads, railways, airports)</p>
                    <p>• Education & Healthcare</p>
                    <p>• Housing schemes, rural development, skill development</p>
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-400 mb-3">Non-Development Expenditure</h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <p>• Salaries, pensions, defense, subsidies (like LPG subsidy)</p>
                    <p>• Interest payments on borrowings</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Public Debt & Deficit */}
            <section className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-6">📉 Public Debt & Deficit</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Fiscal Deficit</strong> – When government spends more than it earns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300"><strong>Public Debt</strong> – Total loans taken by government (internal & external)</p>
                  </div>
                </div>
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                  <p className="text-red-800 dark:text-red-400 text-sm">
                    <strong>Impact on you</strong> – High deficit means inflation, more borrowing, and higher taxes in future.
                  </p>
                </div>
              </div>
            </section>

            {/* Government Schemes */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🇮🇳 Government Schemes for Citizens (India-Specific)</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Savings & Investments</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• <strong>PPF (Public Provident Fund)</strong> – Safe savings with tax benefits</p>
                    <p>• <strong>NSC (National Savings Certificate)</strong> – Fixed income scheme</p>
                    <p>• <strong>Sukanya Samriddhi Yojana</strong> – For girl child savings</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Pension & Social Security</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• <strong>NPS (National Pension System)</strong> – Retirement planning</p>
                    <p>• <strong>EPF & ESIC</strong> – For salaried employees</p>
                    <p>• <strong>PM Shram Yogi Maandhan</strong> – For unorganized sector workers</p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Welfare Schemes</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• <strong>Ayushman Bharat</strong> – Free health insurance up to ₹5 lakh</p>
                    <p>• <strong>PM Awas Yojana</strong> – Affordable housing</p>
                    <p>• <strong>MNREGA</strong> – Rural employment guarantee</p>
                    <p>• <strong>Food Security Act</strong> – Subsidized ration</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Role of RBI & SEBI */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏦 Role of RBI & SEBI in Public Finance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-3">RBI (Reserve Bank of India)</h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <p>• Manages inflation, currency, and government borrowings</p>
                    <p>• Regulates monetary policy</p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-3">SEBI (Securities & Exchange Board of India)</h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <p>• Protects investors</p>
                    <p>• Ensures transparency in stock markets</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact on You */}
            <section className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">🎯 How Government Finance Impacts You</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-amber-200">✅</span>
                  <p><strong>Taxes</strong> – Affect your salary, business profits, and purchases</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-amber-200">✅</span>
                  <p><strong>Subsidies</strong> – Make fuel, food, and education affordable</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-amber-200">✅</span>
                  <p><strong>Schemes</strong> – Help you save, invest, and secure retirement</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-amber-200">✅</span>
                  <p><strong>Inflation & Borrowing</strong> – Mismanagement can reduce your purchasing power</p>
                </div>
              </div>
            </section>

            {/* Example for Customers */}
            <section className="bg-green-50 dark:bg-green-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6">✅ Example for Customers</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700 dark:text-gray-300">
                  "If you invest ₹5,000/month in PPF for 15 years, you will save tax under Section 80C and build a safe retirement corpus. Neocred.in's calculator shows your maturity amount instantly."
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Learning Journey</h3>
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🏛️</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore government finance through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* How Neocred Helps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🚀 How Neocred.in Helps Customers</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Explains government schemes in simple words</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Financial tools to calculate benefits of schemes like PPF, Sukanya Samriddhi, NPS</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Updates on budget & policies affecting personal finance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Advisory on how to use government-backed investments for safe returns</p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🧮 Related Tools</h3>
              <div className="space-y-3">
                <Link to="/calculators/ppf-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">PPF Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate PPF returns & tax benefits</div>
                </Link>
                <Link to="/calculators/nps-return" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">NPS Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan your NPS retirement corpus</div>
                </Link>
                <Link to="/calculators/form16-breakdown" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Tax Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate income tax & savings</div>
                </Link>
                <Link to="/calculators/hra-exemption" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">HRA Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate HRA exemption</div>
                </Link>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">💡 Pro Tip</h3>
              <p className="text-amber-100 text-sm">
                Start with the tax system and budget basics. Understanding government revenue and expenditure is key to grasping public finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtPublicFinance;