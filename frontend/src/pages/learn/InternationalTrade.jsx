import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const InternationalTrade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border-b border-teal-200 dark:border-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/alt-fintech"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Alternative Finance
            </Link>
            <Link 
              to="/learn"
              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Back to Learn Hub
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🌍</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">International Trade & Finance</h1>
              <p className="text-gray-600 dark:text-gray-300">Master global finance and international market dynamics</p>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Global Trade Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">$770B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">India Exports</div>
                </div>
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">$635B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Forex Reserves</div>
                </div>
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">$125B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Remittances</div>
                </div>
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">$83B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">FDI Inflows</div>
                </div>
              </div>
            </section>

            {/* What is International Finance & Trade */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 What is International Finance & Trade?</h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 rounded-lg mb-6">
                <p className="text-teal-800 dark:text-teal-400 font-medium text-center">
                  "Money flow, investments, and trade between countries that help businesses grow globally and individuals access global opportunities."
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                International Finance & Trade deals with money flow, investments, and trade between countries. It helps businesses grow globally, supports imports/exports, and allows individuals to access global opportunities.
              </p>
            </section>

            {/* Key Concepts */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🔑 Key Concepts</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Foreign Exchange (Forex/FX)</h3>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• Forex is the largest financial market in the world</p>
                    <p className="text-gray-600 dark:text-gray-300">• Exchange rates decide how much one currency is worth compared to another</p>
                    <p className="text-gray-600 dark:text-gray-300">• Individuals use forex for travel, remittances, online purchases</p>
                    <p className="text-gray-600 dark:text-gray-300">• Businesses use it for imports/exports and hedging risks</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-400 text-sm"><strong>👉 Example:</strong> If you buy products from the US in USD, your INR is converted at the day's exchange rate.</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Balance of Payments (BoP)</h3>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• A record of all money flowing into and out of a country</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Current Account:</strong> imports, exports, remittances, tourism</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Capital Account:</strong> investments, loans, FDI/FPI</p>
                    <p className="text-gray-600 dark:text-gray-300">• BoP shows if a country is a net lender or borrower to the world</p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Global Trade</h3>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• Buying and selling goods/services across borders</p>
                    <p className="text-gray-600 dark:text-gray-300">• Driven by comparative advantage (countries produce what they're best at)</p>
                    <p className="text-gray-600 dark:text-gray-300">• Encourages competition, better products, and access to global markets</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <p className="text-purple-800 dark:text-purple-400 text-sm"><strong>👉 Example:</strong> India exports IT services, imports crude oil.</p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Trade Finance</h3>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• Financial services that help businesses manage international trade</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Letters of Credit (LC):</strong> Payment guarantee</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Export Credit:</strong> Financing for exporters</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Bank Guarantees:</strong> Risk protection</p>
                    <p className="text-gray-600 dark:text-gray-300">• Protects exporters/importers from default risk and currency fluctuations</p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. International Institutions</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">• <strong>IMF:</strong> Provides loans and manages global financial stability</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>World Bank:</strong> Funds infrastructure & development projects</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>WTO:</strong> Regulates international trade rules</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>ADB, BRICS Bank, AIIB:</strong> Regional/global development banks</p>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Foreign Direct Investment (FDI) & Portfolio Investment (FPI)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>FDI:</strong> Companies invest in physical assets abroad</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">• Factories, offices, infrastructure</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">👉 Long-term commitment</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>FPI:</strong> Investors buy financial assets</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">• Stocks, bonds, securities</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">👉 Short-term, more liquid</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">7. Remittances</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">• Money sent home by Indians working abroad</p>
                    <p className="text-gray-600 dark:text-gray-300">• India is the world's largest remittance receiver (over $120 billion annually)</p>
                    <p className="text-gray-600 dark:text-gray-300">• Helps families improve living standards and contributes to GDP</p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8. Currency Risk & Hedging</h3>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• Currency values fluctuate daily</p>
                    <p className="text-gray-600 dark:text-gray-300">• Businesses use hedging tools (forwards, options, swaps) to protect profits</p>
                    <p className="text-gray-600 dark:text-gray-300">• Individuals also feel the effect: studying abroad becomes more expensive if INR weakens</p>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">9. International Trade Policies</h3>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• Free trade agreements (FTA), tariffs, quotas, and sanctions affect global trade</p>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                    <p className="text-pink-800 dark:text-pink-400 text-sm"><strong>Example:</strong> India's FTAs with ASEAN, UAE, Australia help reduce import/export taxes.</p>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">10. Globalization & Technology in Trade</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">• Digital platforms, blockchain, and fintech simplify cross-border payments</p>
                    <p className="text-gray-600 dark:text-gray-300">• UPI Global now allows Indians to pay in countries like UAE, Singapore, France</p>
                    <p className="text-gray-600 dark:text-gray-300">• Making international payments cheaper and easier</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Benefits */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Why It Matters to You (Customer Benefits)</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500">💰</span>
                  <p className="text-gray-600 dark:text-gray-300"><strong>Cheaper Remittances:</strong> Save on sending/receiving money abroad</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500">🛡️</span>
                  <p className="text-gray-600 dark:text-gray-300"><strong>Safe International Trade:</strong> Businesses can trade confidently using LC/guarantees</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500">🌐</span>
                  <p className="text-gray-600 dark:text-gray-300"><strong>Global Investment Opportunities:</strong> Invest in US stocks, ETFs, gold, crypto</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500">✈️</span>
                  <p className="text-gray-600 dark:text-gray-300"><strong>Better Travel & Education Payments:</strong> Simplified forex cards, UPI Global</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500">🔒</span>
                  <p className="text-gray-600 dark:text-gray-300"><strong>Protection from Currency Risk:</strong> Use smart hedging tools</p>
                </div>
              </div>
            </section>

            {/* Tools & Features */}
            <section className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">🛠️ Tools & Features We Can Provide on neocred.in</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-teal-200">💱</span>
                    <p><strong>Forex Converter:</strong> Live exchange rate calculator</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-teal-200">🌐</span>
                    <p><strong>Global Investment Hub:</strong> Access US stocks, ETFs, gold, bonds</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-teal-200">📤</span>
                    <p><strong>Remittance Optimizer:</strong> Compare best ways to send/receive money abroad</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-teal-200">🏦</span>
                    <p><strong>Trade Finance Solutions:</strong> Digital LC, export credit assistance</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-teal-200">📚</span>
                    <p><strong>International Finance Learning:</strong> Simple guides on FDI, FPI, forex trading</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-teal-200">📰</span>
                    <p><strong>Global Finance News Feed:</strong> Updates on currencies, trade deals, and global markets</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-center font-medium">✅ With this, International Finance & Trade section becomes a gateway for customers to connect India with the world — through money, markets, and opportunities.</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Learning Journey</h3>
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🌍</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore international trade and finance through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* How neocred.in Can Help */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🚀 How neocred.in Can Help Customers</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500">💱</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Live Forex Tools</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Real-time currency converter, exchange rate alerts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500">🌐</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Global Investment Platform</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Access to international markets, US stocks, global ETFs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500">📤</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Remittance Solutions</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Compare remittance costs, find cheapest transfer methods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500">🏦</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Trade Finance Hub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">LC assistance, export credit guidance, trade documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🛠️ Tools & Calculators</h3>
              <div className="space-y-3">
                <Link to="/calculators/currency-converter" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Forex Converter</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Live currency conversion rates</div>
                </Link>
                <Link to="/calculators/remittance-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Remittance Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Compare remittance costs</div>
                </Link>
                <Link to="/calculators/export-finance" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Export Finance Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate export financing costs</div>
                </Link>
                <Link to="/calculators/global-investment" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Global Investment Planner</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan international investments</div>
                </Link>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">💡 Pro Tip</h3>
              <p className="text-teal-100 text-sm">
                Begin with export-import basics and global trade fundamentals before exploring advanced topics like currency hedging and trade finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTrade;