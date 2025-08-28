import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const InsuranceRisk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-b border-red-200 dark:border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/investments-capital"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous: Investments & Capital
            </Link>
            <Link 
              to="/learn/corporate-finance"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next: Corporate Finance
              <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Insurance & Risk Management</h1>
              <p className="text-gray-600 dark:text-gray-300">Master risk management and insurance planning</p>
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
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">₹8.2T</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Market Size</div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">4.2%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Penetration</div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">98.8%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Claim Settlement</div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">57</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Companies</div>
                </div>
              </div>
            </section>

            {/* What is Insurance & Risk Management */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 What is Insurance & Risk Management?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Insurance & Risk Management is about protecting yourself, your family, and your assets against unexpected financial losses. Life is uncertain — risks like illness, accidents, job loss, or disasters can drain your savings. Insurance provides a safety net while risk management teaches you to plan, prevent, and prepare.
              </p>
            </section>

            {/* Why Insurance is Important */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">💡 Why Insurance is Important</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Protects your family's financial future</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Covers medical expenses during emergencies</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Safeguards assets like car, home, or business</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Provides peace of mind against uncertainties</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <p className="text-gray-600 dark:text-gray-300">Supports tax savings under Section 80C & 80D</p>
                </div>
              </div>
            </section>

            {/* Types of Insurance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🛡️ Types of Insurance in India</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Life Insurance</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <strong>Term Insurance</strong> – Pure protection plan (highest cover, lowest premium)</li>
                    <li>• <strong>Whole Life Insurance</strong> – Coverage till lifetime</li>
                    <li>• <strong>Endowment/ULIP Plans</strong> – Combo of insurance + investment</li>
                    <li>• <strong>Child Plans</strong> – Funds for child's education/marriage</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Health Insurance</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <strong>Individual Health Plans</strong> – Covers medical expenses</li>
                    <li>• <strong>Family Floater Plans</strong> – One cover for the entire family</li>
                    <li>• <strong>Critical Illness Plans</strong> – Covers costly diseases (cancer, heart attack)</li>
                    <li>• <strong>Top-Up Plans</strong> – Extra coverage above base policy</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 General Insurance</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <strong>Motor Insurance</strong> (car, bike – mandatory in India)</li>
                    <li>• <strong>Home Insurance</strong> (fire, theft, natural disasters)</li>
                    <li>• <strong>Travel Insurance</strong> (domestic & international trips)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔹 Business Insurance</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <strong>Liability Insurance</strong> (covers damages caused by business)</li>
                    <li>• <strong>Employee Insurance</strong> (group health/life cover)</li>
                    <li>• <strong>Asset & Equipment Insurance</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risk Management Basics */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🎯 Risk Management Basics</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Risk Management means identifying risks, minimizing them, and preparing for emergencies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Identify Risks</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Job loss, illness, accident, natural disaster, theft</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Reduce Risks</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Healthy lifestyle, safety measures, savings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Transfer Risks</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Buy insurance to shift risk to insurer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Prepare & Review</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Emergency fund + update insurance yearly</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Insurance Lifecycle */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📈 Insurance Lifecycle (Customer Journey)</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">20s–30s</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Buy term insurance + health insurance early (low premium)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">30s–40s</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Add family health, child plan, vehicle insurance</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">40s–50s</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Increase cover, add critical illness, home insurance</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">50+</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Focus on health & retirement planning, avoid mixing insurance with investments</p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-6">❌ Common Mistakes People Make</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Thinking insurance = investment (wrong)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Buying insurance too late (premiums get expensive)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Under-insuring (low cover not enough in emergencies)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Not disclosing medical history → claim rejection</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">❌</span>
                  <p className="text-gray-700 dark:text-gray-300">Forgetting to renew on time</p>
                </div>
              </div>
            </section>

            {/* Indian Context */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🇮🇳 Indian Context (Customer Focus)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Mandatory Insurance</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Motor 3rd party insurance</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Popular Products</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">LIC term plans, Health insurance by Star/ICICI Lombard/HDFC ERGO</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Government Schemes</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• <strong>Pradhan Mantri Jeevan Jyoti Bima Yojana</strong> (₹2 lakh life cover @ ₹330/year)</li>
                    <li>• <strong>Pradhan Mantri Suraksha Bima Yojana</strong> (₹2 lakh accident cover @ ₹12/year)</li>
                    <li>• <strong>Ayushman Bharat</strong> (health cover up to ₹5 lakh for poor families)</li>
                  </ul>
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
                <div className="text-4xl mb-4">🛡️</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Explore insurance and risk management through our comprehensive overview and related tools.
                </p>
              </div>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🧮 Tools & Calculators for Neocred.in</h3>
              <div className="space-y-3">
                <Link to="/calculators/term-life-insurance" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Life Insurance Coverage Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">How much cover you need based on income & dependents</div>
                </Link>
                <Link to="/calculators/health-insurance" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Health Premium Estimator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Estimate health insurance premiums</div>
                </Link>
                <Link to="/calculators/vehicle-insurance" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Risk Score Analyzer</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Age, lifestyle, family size → shows insurance gaps</div>
                </Link>
                <Link to="/calculators/emergency-fund" className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Emergency Fund Calculator</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calculate emergency fund requirements</div>
                </Link>
              </div>
            </div>

            {/* How Neocred Helps */}
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🚀 How Neocred.in Helps Customers</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span>🛡️</span>
                  <p className="text-red-100 text-sm">Explains insurance in simple words (no jargon)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📊</span>
                  <p className="text-red-100 text-sm">Smart calculators → find right cover amount</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🔍</span>
                  <p className="text-red-100 text-sm">Compare policies & types easily</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🔔</span>
                  <p className="text-red-100 text-sm">Renewal reminders → never miss a payment</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span>🎯</span>
                  <p className="text-red-100 text-sm">Risk management guides → balance between insurance, savings & emergency funds</p>
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">💡 Pro Tip</h3>
              <p className="text-blue-100 text-sm">
                Start with health and term life insurance early. These provide essential protection for you and your family at affordable premiums when you're young.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceRisk;