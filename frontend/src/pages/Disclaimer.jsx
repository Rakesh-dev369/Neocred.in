import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function Disclaimer() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'educational-purpose', title: '1. Educational Purpose', icon: '📚' },
    { id: 'not-financial-advice', title: '2. Not Financial Advice', icon: '⚠️' },
    { id: 'calculator-accuracy', title: '3. Calculator Accuracy', icon: '🧮' },
    { id: 'market-risks', title: '4. Market Risks', icon: '📈' },
    { id: 'regulatory-compliance', title: '5. Regulatory Compliance', icon: '🇮🇳' },
    { id: 'content-review', title: '6. Content Review Policy', icon: '🔄' },
    { id: 'external-links', title: '7. External Links', icon: '🔗' },
    { id: 'user-responsibility', title: '8. User Responsibility', icon: '👤' },
    { id: 'liability-limitation', title: '9. Liability Limitation', icon: '🛡️' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-red-100 to-gray-50 dark:from-red-900/20 dark:to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-600 dark:text-red-400">Disclaimer</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Important information about the educational nature of our platform and your responsibilities as a user.
          </p>
          
          {/* Key Points Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Educational Only</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">All content is for learning purposes</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Not Financial Advice</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">We are not certified advisors</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">Your Responsibility</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Consult professionals for decisions</p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Effective Date: <span className="text-gray-900 dark:text-white font-medium">December 15, 2024</span>
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                📋 <span className="text-red-600 dark:text-red-400">Contents</span>
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10 ${
                      activeSection === section.id ? 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{section.icon}</span>
                      <span className="text-sm font-medium">{section.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
              
              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-white/10">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Related Pages</h4>
                <div className="space-y-2">
                  <Link 
                    to={ROUTES.TERMS}
                    className="block p-2 bg-gray-200 dark:bg-white/5 rounded-lg hover:bg-gray-300 dark:hover:bg-white/10 transition-colors text-sm text-gray-900 dark:text-white"
                  >
                    📄 Terms of Service
                  </Link>
                  <Link 
                    to={ROUTES.PRIVACY}
                    className="block p-2 bg-gray-200 dark:bg-white/5 rounded-lg hover:bg-gray-300 dark:hover:bg-white/10 transition-colors text-sm text-gray-900 dark:text-white"
                  >
                    🔒 Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <p className="text-lg mb-6 leading-relaxed text-gray-900 dark:text-white">
                  NeoCred is an educational platform designed to spread financial literacy and awareness. 
                  The content provided on our website, including articles, tools, calculators, tips, and AI responses, 
                  is for informational and educational purposes only.
                </p>
                <div className="bg-red-100 dark:bg-red-600/20 border border-red-300 dark:border-red-500/30 rounded-lg p-4">
                  <p className="text-red-800 dark:text-red-100 font-medium">
                    ⚠️ We are not SEBI-registered advisors or certified financial planners.
                  </p>
                </div>
              </div>

              {/* Section 1: Educational Purpose */}
              <section id="educational-purpose" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📚</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">1. Educational Purpose</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    All content on NeoCred, including but not limited to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-200 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-300">📖 Learning Materials</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Financial literacy lessons</li>
                        <li>• Investment guides</li>
                        <li>• Educational articles</li>
                      </ul>
                    </div>
                    <div className="bg-gray-200 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-600 dark:text-green-300">🛠️ Tools & Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Financial calculators</li>
                        <li>• Planning tools</li>
                        <li>• AI assistance</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Is provided solely for educational and informational purposes to help users understand financial concepts.
                  </p>
                </div>
              </section>

              {/* Section 2: Not Financial Advice */}
              <section id="not-financial-advice" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚠️</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">2. Not Financial Advice</h2>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-600/20 border border-yellow-300 dark:border-yellow-500/30 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Important Notice</h4>
                      <p className="text-yellow-800 dark:text-yellow-100 leading-relaxed">
                        Nothing on this platform constitutes professional financial, investment, legal, or tax advice. 
                        We do not provide personalized recommendations for your specific financial situation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We are NOT:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-100 dark:bg-red-600/20 border border-red-300 dark:border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">🚫 What We're NOT</h4>
                      <ul className="text-sm space-y-1 text-red-700 dark:text-red-200">
                        <li>• SEBI registered advisors</li>
                        <li>• Certified financial planners</li>
                        <li>• Investment consultants</li>
                        <li>• Tax professionals</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 dark:bg-green-600/20 border border-green-300 dark:border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ What We ARE</h4>
                      <ul className="text-sm space-y-1 text-green-700 dark:text-green-200">
                        <li>• Educational platform</li>
                        <li>• Information providers</li>
                        <li>• Learning facilitators</li>
                        <li>• Awareness creators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Calculator Accuracy */}
              <section id="calculator-accuracy" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🧮</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">3. Calculator Accuracy</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>Our financial calculators and tools:</p>
                  <div className="bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">📊 Calculator Limitations</h4>
                    <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-200">
                      <li>• Provide estimates based on standard formulas</li>
                      <li>• May not reflect actual market conditions</li>
                      <li>• Results can vary from real-world outcomes</li>
                      <li>• Should not be the sole basis for financial decisions</li>
                    </ul>
                  </div>
                  <p>
                    Always verify calculations with certified professionals and consider current market conditions 
                    before making any financial commitments.
                  </p>
                </div>
              </section>

              {/* Section 4: Market Risks */}
              <section id="market-risks" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📈</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">4. Market Risks</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>Financial markets are subject to various risks and uncertainties:</p>
                  <div className="bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">⚠️</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Market Risk Factors</h4>
                        <ul className="text-orange-700 dark:text-orange-100 text-sm space-y-1 text-left inline-block">
                          <li>• Market volatility and price fluctuations</li>
                          <li>• Economic and political changes</li>
                          <li>• Interest rate and inflation variations</li>
                          <li>• Past performance doesn't guarantee future results</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    All investments carry inherent risks. Our content does not account for individual risk tolerance, 
                    financial goals, or market timing considerations.
                  </p>
                </div>
              </section>

              {/* Section 5: Regulatory Compliance */}
              <section id="regulatory-compliance" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇮🇳</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">5. Regulatory Compliance</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>Our platform operates within the framework of Indian financial regulations:</p>
                  <div className="bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🇮🇳</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Indian Financial Regulations</h4>
                        <ul className="text-blue-700 dark:text-blue-100 text-sm space-y-1 text-left inline-block">
                          <li>• SEBI (Securities and Exchange Board of India) guidelines</li>
                          <li>• RBI (Reserve Bank of India) regulations</li>
                          <li>• IRDAI (Insurance Regulatory Authority) norms</li>
                          <li>• DPDP Act (Digital Personal Data Protection)</li>
                          <li>• Consumer Protection Act compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-200 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-600 dark:text-green-300">✅ Our Compliance</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">We follow all applicable regulations for educational platforms</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-300">⚠️ Important Note</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Regulations may change; always verify current requirements</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Content Review Policy */}
              <section id="content-review" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔄</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">6. Content Review Policy</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We maintain content accuracy through regular review processes:</p>
                  <div className="bg-green-100 dark:bg-green-600/20 border border-green-300 dark:border-green-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🔄</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Review Schedule</h4>
                        <ul className="text-green-700 dark:text-green-100 text-sm space-y-1 text-left inline-block">
                          <li>• Monthly review of financial calculators</li>
                          <li>• Quarterly update of educational content</li>
                          <li>• Immediate updates for regulatory changes</li>
                          <li>• Annual comprehensive content audit</li>
                          <li>• User feedback integration within 48 hours</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-600/20 border border-yellow-300 dark:border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-800 dark:text-yellow-100 text-sm">
                      📧 <strong>Report Errors:</strong> Found outdated information? Email us at 
                      <a href="mailto:content@neocred.in" className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 underline">
                        content@neocred.in
                      </a> for immediate review.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: External Links */}
              <section id="external-links" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔗</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">7. External Links</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>Our platform may contain links to external websites and resources:</p>
                  <div className="bg-orange-100 dark:bg-orange-600/20 border border-orange-300 dark:border-orange-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🔗</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Third-Party Content</h4>
                        <ul className="text-orange-700 dark:text-orange-100 text-sm space-y-1 text-left inline-block">
                          <li>• We don't control external website content</li>
                          <li>• Third-party sites have their own terms and policies</li>
                          <li>• External content accuracy is not guaranteed</li>
                          <li>• Links don't imply endorsement or partnership</li>
                          <li>• Use external resources at your own discretion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-200 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-300">🔍 Verification</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Always verify information from external sources independently</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-600 dark:text-red-300">⚠️ Caution</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Be cautious of financial advice from unverified sources</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: User Responsibility */}
              <section id="user-responsibility" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">👤</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">8. User Responsibility</h2>
                </div>
                <div className="bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">🎯 Your Responsibilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">Before Making Decisions:</h5>
                      <ul className="space-y-1 text-purple-700 dark:text-purple-100">
                        <li>• Consult certified financial advisors</li>
                        <li>• Verify all information independently</li>
                        <li>• Consider your personal financial situation</li>
                        <li>• Understand associated risks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">While Using Our Platform:</h5>
                      <ul className="space-y-1 text-purple-700 dark:text-purple-100">
                        <li>• Use information responsibly</li>
                        <li>• Don't rely solely on our content</li>
                        <li>• Stay updated with current regulations</li>
                        <li>• Report any errors you find</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Liability Limitation */}
              <section id="liability-limitation" className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🛡️</span>
                  <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">9. Liability Limitation</h2>
                </div>
                <div className="bg-red-100 dark:bg-red-600/20 border border-red-300 dark:border-red-500/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitation of Liability</h4>
                      <p className="text-red-800 dark:text-red-100 leading-relaxed mb-4">
                        NeoCred, its creators, and contributors shall not be held liable for any financial losses, 
                        investment decisions, or consequences arising from the use of our platform, tools, or content.
                      </p>
                      <p className="text-red-800 dark:text-red-100 leading-relaxed">
                        Any decisions or actions taken based on our content are entirely at your own discretion and risk.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final Message */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-300 dark:border-yellow-500/30 p-6 rounded-xl text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-400">Remember</h3>
                </div>
                <p className="text-yellow-800 dark:text-yellow-100 text-lg leading-relaxed mb-4">
                  "Use NeoCred responsibly. The path is guided, but the choice is yours."
                </p>
                <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                  Always consult with certified professionals before making financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}