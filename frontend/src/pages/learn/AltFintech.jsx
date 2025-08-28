import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const AltFintech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-b border-yellow-200 dark:border-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/govt-public-finance"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Government Finance
            </Link>
            <Link 
              to="/learn/international-trade"
              className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Next: International Trade
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">⚡</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Alternative & Fintech</h1>
              <p className="text-gray-600 dark:text-gray-300">Explore fintech innovations and the future of finance</p>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Fintech Landscape</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-500">$150B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Market Size</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-500">108</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Unicorns</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-500">118B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">UPI Transactions</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-500">₹8.2T</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Digital Lending</div>
                </div>
              </div>
            </section>

            {/* What is Alternative Finance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💡 What is Alternative Finance?</h2>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg mb-6">
                <p className="text-yellow-800 dark:text-yellow-400 font-medium text-center">
                  "New-age financial tools that give you more freedom, flexibility, and opportunities outside traditional banks and stock markets."
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Alternative Finance refers to financial services outside traditional banks, stock exchanges, and government channels. It includes peer-to-peer lending, crowdfunding, cryptocurrencies, blockchain-based finance, and digital innovations that make finance more accessible.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  It is popular among startups, small businesses, and young investors because it offers easier access, fewer restrictions, and high-growth potential.
                </p>
              </div>
            </section>

            {/* Key Types of Alternative Finance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🔥 Key Types of Alternative Finance</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 A. Peer-to-Peer (P2P) Lending</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Platforms like Faircent, Lendbox (India) connect borrowers directly with lenders, cutting out banks.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>For Borrowers:</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">• Access quick loans at lower rates</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>For Lenders:</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">• Earn higher returns than fixed deposits</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-400 text-sm"><strong>Risk:</strong> Default by borrowers | <strong>Regulation in India:</strong> RBI regulates registered P2P NBFCs</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 B. Crowdfunding</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Funding projects, startups, or social causes by pooling money from many individuals online.</p>
                  <div className="space-y-2 mb-3">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• <strong>Reward-based</strong> (you get perks/products)</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• <strong>Donation-based</strong> (no returns, just support)</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• <strong>Equity-based</strong> (you get company shares)</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-green-800 dark:text-green-400 text-sm"><strong>Platforms:</strong> Ketto, FuelADream, ImpactGuru (India)</p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 C. Crypto Assets & Blockchain Finance</h3>
                  <div className="space-y-3 mb-3">
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Cryptocurrencies</strong> (Bitcoin, Ethereum, etc.): Digital currencies traded globally</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>Stablecoins:</strong> Crypto linked to USD/INR for stability</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>DeFi (Decentralized Finance):</strong> Borrowing, lending, and trading via smart contracts without banks</p>
                    <p className="text-gray-600 dark:text-gray-300">• <strong>NFTs (Non-Fungible Tokens):</strong> Digital assets with ownership rights (art, collectibles, gaming)</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <p className="text-purple-800 dark:text-purple-400 text-sm mb-2"><strong>For customers:</strong> High-risk, high-reward. Must understand volatility & regulations.</p>
                    <p className="text-purple-800 dark:text-purple-400 text-sm"><strong>India's Status:</strong> 30% tax on crypto gains, 1% TDS on transactions</p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 D. Buy Now, Pay Later (BNPL)</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Digital credit option allowing customers to split payments into installments without a credit card.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Examples:</strong> LazyPay, Simpl, ZestMoney</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>Benefits:</strong></p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <p>• Instant short-term credit</p>
                        <p>• Helps manage cash flow</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <p className="text-orange-800 dark:text-orange-400 text-sm"><strong>Risk:</strong> Overspending, hidden charges</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 E. Microfinance & Digital Lending</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Small loans to low-income individuals and small businesses through apps & fintech platforms.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Example:</strong> BharatPe, Paytm Lending, Janalakshmi Finance</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-1"><strong>Benefits:</strong></p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <p>• Quick approval</p>
                        <p>• Supports small entrepreneurs</p>
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-red-800 dark:text-red-400 text-sm"><strong>Risk:</strong> High interest if not repaid on time</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 F. Green & Impact Finance</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Investment in projects that create social or environmental benefits.</p>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• <strong>Examples:</strong> Renewable energy bonds, carbon credits, social impact funds</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• Growing demand among Gen-Z & millennials</p>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔹 G. Tokenization & Digital Assets</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Real-world assets (real estate, art, gold) converted into digital tokens tradable online.</p>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• <strong>Benefits:</strong> Fractional ownership, global liquidity</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">• <strong>Example:</strong> Gold-backed tokens in India</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">✅ Benefits of Alternative Finance</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Easier access to funds (less paperwork than banks)</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Innovative investment opportunities</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Higher potential returns</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Supports small businesses & startups</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">More inclusive finance for underserved groups</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">⚠️ Risks & Challenges</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-red-500">⚠️</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">High volatility (crypto, crowdfunding)</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-500">⚠️</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Fraud and scams in unregulated platforms</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-500">⚠️</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Cybersecurity risks in digital platforms</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-500">⚠️</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Limited legal protection compared to banks</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Tips */}
            <section className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">💪 Customer Tips (neocred.in style)</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-200">•</span>
                  <p><strong>Diversify:</strong> Don't put all money in one alternative finance option</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-200">•</span>
                  <p><strong>Check Regulation:</strong> Only use RBI/SEBI-approved P2P or crowdfunding platforms</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-200">•</span>
                  <p><strong>Risk Appetite:</strong> Use crypto/DeFi only if you can handle high risk</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-200">•</span>
                  <p><strong>Budgeting:</strong> BNPL is useful, but don't overspend</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-200">•</span>
                  <p><strong>Social Impact:</strong> Consider green & impact investing for long-term value</p>
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
                <div className="text-4xl mb-4">⚡</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore fintech innovations through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* How neocred.in Can Help */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🚀 How neocred.in Can Help Customers</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500">📊</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Knowledge Hub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Step-by-step guides on P2P lending, crypto, crowdfunding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500">🧮</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Tools & Calculators</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">P2P returns calculator, BNPL cost calculator, Crypto tax calculator (India-specific)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500">🔔</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Alerts</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">RBI/SEBI regulations, fraud warnings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500">🤖</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">AI Chatbot</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Explain risks & opportunities in simple terms for users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🧮 Tools & Calculators</h3>
              <div className="space-y-3">
                <Link to="/calculators/gold-investment" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">P2P Returns Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate P2P lending returns</div>
                </Link>
                <Link to="/calculators/credit-card-emi" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">BNPL Cost Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate BNPL costs & charges</div>
                </Link>
                <Link to="/calculators/form16-breakdown" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Crypto Tax Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate crypto tax (India-specific)</div>
                </Link>
                <Link to="/calculators/budget-planner" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Digital Investment Planner</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Plan alternative investments</div>
                </Link>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">💡 Pro Tip</h3>
              <p className="text-yellow-100 text-sm">
                Start with UPI ecosystem and fintech basics before diving into advanced topics like cryptocurrency and DeFi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltFintech;