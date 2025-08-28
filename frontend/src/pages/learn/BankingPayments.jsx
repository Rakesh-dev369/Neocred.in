import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BankingPayments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/personal-finance"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Personal Finance
            </Link>
            <Link 
              to="/learn/investments-capital"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next: Investments & Capital
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏦</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Banking & Payments</h1>
              <p className="text-gray-600 dark:text-gray-300">Navigate the digital banking revolution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Digital Banking Landscape */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Digital Banking Landscape</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">118B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">UPI Transactions</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹200T</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">UPI Value</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Neobanks</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">90%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Digital KYC</div>
                </div>
              </div>
            </section>

            {/* What is Banking & Payments */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 What is Banking & Payments?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Banking & Payments are the backbone of personal and business finance. They cover how you store, send, receive, and manage money safely and efficiently through banks, financial institutions, and digital platforms.
              </p>
            </section>

            {/* Importance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💡 Importance of Banking & Payments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Keeps your money safe & accessible</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Enables cashless transactions (UPI, cards, net banking)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Provides loans & credit for personal/business growth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Facilitates savings & investments</p>
                </div>
                <div className="flex items-start space-x-3 md:col-span-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Connects you with global finance systems</p>
                </div>
              </div>
            </section>

            {/* Types of Banking Services */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏦 Types of Banking Services in India</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Retail Banking (For Individuals)</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Savings Accounts</li>
                    <li>• Current Accounts</li>
                    <li>• Fixed & Recurring Deposits</li>
                    <li>• Personal, Home & Vehicle Loans</li>
                    <li>• Debit & Credit Cards</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Corporate/Business Banking</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Business Accounts</li>
                    <li>• Working Capital Loans</li>
                    <li>• Merchant Services & POS Machines</li>
                    <li>• Trade Finance</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Digital/Neobanking</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• 100% online banks (no physical branch)</li>
                    <li>• Instant account opening</li>
                    <li>• Expense tracking apps</li>
                    <li>• Integrated UPI + Card solutions</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Rural & Cooperative Banking</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Self-help groups (SHGs)</li>
                    <li>• Cooperative credit societies</li>
                    <li>• Microfinance institutions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payments Ecosystem */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📱 Payments Ecosystem in India</h2>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">India is a global leader in digital payments 🌍</p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💳 Traditional Payments</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded text-sm">Cash</span>
                    <span className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded text-sm">Cheques</span>
                    <span className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded text-sm">Demand Drafts</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📲 Digital Payments</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• <strong>UPI</strong> (Unified Payments Interface) – Real-time money transfer</li>
                    <li>• <strong>Mobile Wallets</strong> – Paytm, PhonePe, Google Pay</li>
                    <li>• <strong>Net Banking</strong> – Fund transfers, bill payments</li>
                    <li>• <strong>Debit/Credit Cards</strong> – Offline & online payments</li>
                    <li>• <strong>IMPS / NEFT / RTGS</strong> – Bank-to-bank transfers</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🌐 Emerging Payment Innovations</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Contactless payments (NFC cards, QR codes)</li>
                    <li>• Buy Now Pay Later (BNPL)</li>
                    <li>• Cross-border UPI payments</li>
                    <li>• CBDC (Central Bank Digital Currency – Digital Rupee)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-6">🔒 Security in Banking & Payments</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-700 dark:text-gray-300">Use 2FA (OTP, biometric login)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-700 dark:text-gray-300">Never share PIN, OTP, CVV</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-700 dark:text-gray-300">Enable transaction alerts</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-700 dark:text-gray-300">Use only official apps/websites</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-700 dark:text-gray-300">Beware of phishing & scam links</p>
                </div>
              </div>
            </section>

            {/* Banking Products */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏪 Common Banking Products in India</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-3">Savings Instruments</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Savings Account (basic, salary, zero balance)</li>
                    <li>• Fixed Deposits (FDs)</li>
                    <li>• Recurring Deposits (RDs)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-3">Credit & Loans</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Personal Loans</li>
                    <li>• Credit Cards (reward, cashback, secured)</li>
                    <li>• Home Loans, Vehicle Loans, Education Loans</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-400 mb-3">Digital Banking Features</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Instant UPI transfers</li>
                    <li>• Bill payment (electricity, gas, mobile recharge)</li>
                    <li>• Auto-pay for subscriptions/EMIs</li>
                    <li>• International payments (select banks)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Customer Journey */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🚀 Banking & Payments Lifecycle (Customer Journey)</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Opening an Account</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Choose bank, submit KYC, get account number & card</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Deposits & Payments</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Salary credit, UPI transfers, bill payments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Credit Access</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Apply for personal/auto loan or credit card</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Investments</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Start FDs, RDs, mutual funds via bank</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Digital Banking</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Shift to mobile banking, wallets, and UPI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Cross-Border Use</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Remittances, international transfers, forex cards</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-6">❌ Common Mistakes in Banking & Payments</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Keeping all money in savings (no growth)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Falling for high-interest loan/credit card traps</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Ignoring digital payment security</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Using multiple accounts without tracking balances</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Not maintaining minimum balance → penalties</p>
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
                <div className="text-4xl mb-4">🏦</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore banking and payments through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* Neocred Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🧮 Tools & Calculators for Neocred.in</h3>
              <div className="space-y-3">
                <Link to="/calculators/home-loan-emi" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">EMI Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Home, Personal, Car Loans</div>
                </Link>
                <Link to="/calculators/credit-card-emi" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Credit Card Interest Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate credit card costs</div>
                </Link>
                <Link to="/calculators/fd-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">FD/RD Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate deposit returns</div>
                </Link>
                <Link to="/calculators/rd-calculator" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Savings Growth Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Track savings growth</div>
                </Link>
                <Link to="/credit-cards" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Credit Cards Guide</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Compare best credit cards</div>
                </Link>
              </div>
            </div>

            {/* How Neocred Helps */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🚀 How Neocred.in Helps Customers</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span>🏦</span>
                  <p className="text-blue-100 text-sm">Learn basics of banking in simple language</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📊</span>
                  <p className="text-blue-100 text-sm">Use smart calculators for savings, FDs, EMIs</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📲</span>
                  <p className="text-blue-100 text-sm">Stay updated on latest UPI, RBI rules, and digital innovations</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🔒</span>
                  <p className="text-blue-100 text-sm">Access secure banking tips & fraud awareness</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🎯</span>
                  <p className="text-blue-100 text-sm">Compare banking products (loans, cards, deposits) easily</p>
                </div>
              </div>
            </div>

            {/* Security Tip */}
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🔒 Security Tip</h3>
              <p className="text-red-100 text-sm">
                Always enable 2FA on your banking apps and never share OTPs or banking credentials with anyone. Use only official banking apps and websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}