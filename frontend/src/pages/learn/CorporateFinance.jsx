import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CorporateFinance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-slate-700 text-white border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/insurance-risk"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Insurance & Risk
            </Link>
            <Link 
              to="/learn/govt-public-finance"
              className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              Next: Government Finance
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏢</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Corporate Finance</h1>
              <p className="text-white/90">Master business finance and corporate decision-making</p>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Market Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">₹280T</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Debt Market</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">6.5%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Repo Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">₹3.2T</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">M&A Deals</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">ESG Companies</div>
                </div>
              </div>
            </section>

            {/* Introduction */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 Introduction to Corporate Finance</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Corporate Finance deals with how businesses manage their capital, investments, and risks to grow profitably. It includes raising money, allocating resources, analyzing risks, and creating value for stakeholders.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                This knowledge is essential for entrepreneurs, SMEs, corporates, and startups.
              </p>
            </section>

            {/* Key Components */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💼 Key Components</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">a) Financial Planning & Budgeting</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Helps businesses plan income, expenses, and cash flows.</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• <strong>Capital Budgeting:</strong> Deciding long-term investments (new factory, product launch)</p>
                    <p>• <strong>Operating Budget:</strong> Day-to-day expenses (salaries, rent, marketing)</p>
                    <p>• <strong>Forecasting:</strong> Predicting future sales, costs, and profits</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-3">
                    <p className="text-blue-800 dark:text-blue-400 text-sm">👉 <strong>Example:</strong> A startup preparing a 1-year budget before raising investor funds.</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">b) Capital Structure (Debt vs Equity)</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Businesses raise funds mainly through:</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-3">
                    <p>• <strong>Equity Financing:</strong> Issuing shares to investors, VCs, or angel investors</p>
                    <p>• <strong>Debt Financing:</strong> Loans, bonds, or credit from banks</p>
                    <p>• <strong>Hybrid Instruments:</strong> Convertible debentures, preference shares</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-green-800 dark:text-green-400 text-sm">👉 <strong>Key Question:</strong> How much debt vs. equity should a business have? (Too much debt = risky, too much equity = dilution of ownership.)</p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">c) Sources of Business Funding</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">• <strong>Bank Loans & Credit Lines</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">For working capital or expansion</p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-2">• <strong>Venture Capital (VC) & Angel Investors</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">For startups with high growth potential</p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-2">• <strong>Private Equity</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">For established companies scaling further</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">• <strong>IPO (Initial Public Offering)</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Raising funds from public investors</p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-2">• <strong>Government Schemes (India-specific)</strong></p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">SIDBI loans, Mudra loans, Startup India benefits</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">d) Working Capital Management</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Managing short-term assets & liabilities (cash, inventory, receivables, payables).</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-3">
                    <p>• Invoice financing</p>
                    <p>• Overdraft facilities</p>
                    <p>• Credit terms with suppliers</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <p className="text-orange-800 dark:text-orange-400 text-sm">👉 <strong>Goal:</strong> Ensure smooth daily operations without cash crunch.</p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">e) Valuation & Business Growth</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Valuation Methods:</h4>
                      <div className="space-y-1 text-gray-600 dark:text-gray-300">
                        <p>• Discounted Cash Flow (DCF)</p>
                        <p>• Comparable Company Analysis</p>
                        <p>• Pre-revenue startup valuation (based on traction & idea strength)</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Growth Strategies:</h4>
                      <div className="space-y-1 text-gray-600 dark:text-gray-300">
                        <p>• Mergers & Acquisitions (M&A)</p>
                        <p>• Strategic partnerships</p>
                        <p>• Expansion into new markets</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">f) Risk Management in Business</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• <strong>Financial Risks:</strong> Market risk, credit risk, liquidity risk</p>
                    <p>• <strong>Operational Risks:</strong> Supply chain disruptions, regulatory changes</p>
                    <p>• <strong>Hedging Tools:</strong> Derivatives, insurance, diversification</p>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">g) Corporate Governance & Compliance</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• Transparent accounting & financial reporting</p>
                    <p>• Following Companies Act, SEBI rules, RBI guidelines (for Indian businesses)</p>
                    <p>• Ethics, sustainability, and ESG (Environmental, Social, Governance)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Learning Resources */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📚 Learning Resources (Customer Education)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Guides:</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• "How to Raise Funds for Your Startup in India"</p>
                    <p>• "Debt vs Equity – Which is Right for Your Business?"</p>
                    <p>• "Step-by-Step Budgeting for SMEs"</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Case Studies:</h3>
                  <p className="text-gray-600 dark:text-gray-300">Infosys IPO story, Flipkart VC funding, Reliance acquisitions</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Videos/Infographics:</h3>
                  <p className="text-gray-600 dark:text-gray-300">Explain funding rounds (Seed → Series A → Series B → IPO)</p>
                </div>
              </div>
            </section>

            {/* Customer Benefits */}
            <section className="bg-gradient-to-r from-gray-600 to-slate-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">🎯 Customer Benefits on Neocred.in</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Entrepreneurs/SMEs</h3>
                  <p className="text-gray-200 text-sm">Learn funding options, tools to plan finances</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Corporate Employees</h3>
                  <p className="text-gray-200 text-sm">Understand how businesses make financial decisions</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Investors</h3>
                  <p className="text-gray-200 text-sm">Insights into how companies manage capital and risk</p>
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
                <div className="text-4xl mb-4">🏢</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore corporate finance through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🧮 Tools & Calculators for Customers</h3>
              <div className="space-y-3">
                <Link to="/calculators/home-loan-emi" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Business Loan EMI Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate business loan EMIs</div>
                </Link>
                <Link to="/calculators/budget-planner" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Startup Valuation Tool</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Estimate startup value</div>
                </Link>
                <Link to="/calculators/budget-goal-planner" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Break-even Point Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Find your break-even point</div>
                </Link>
                <Link to="/calculators/net-worth-tracker" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Working Capital Needs Estimator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Estimate working capital requirements</div>
                </Link>
                <Link to="/calculators/budget-planner" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Equity Dilution Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate equity dilution</div>
                </Link>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">💡 Pro Tip</h3>
              <p className="text-gray-100 text-sm">
                Start with understanding your business cash flow and working capital needs. These fundamentals are crucial before exploring advanced funding options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateFinance;