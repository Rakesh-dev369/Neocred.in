import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'who-we-are', title: '1. Who We Are', icon: '🏢' },
    { id: 'what-we-collect', title: '2. What We Collect', icon: '📊' },
    { id: 'data-protection', title: '3. Data Protection', icon: '🔒' },
    { id: 'data-usage', title: '4. How We Use Data', icon: '🎯' },
    { id: 'your-rights', title: '5. Your Rights', icon: '⚖️' },
    { id: 'data-breach', title: '6. Data Breach Protocol', icon: '🚨' },
    { id: 'policy-changes', title: '7. Policy Changes', icon: '📝' },
    { id: 'contact', title: '8. Contact Us', icon: '📞' }
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
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-purple-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect and handle your data with complete transparency.
          </p>
          
          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Bank-Level Security</h3>
              <p className="text-gray-300 text-sm">Your data is encrypted and protected</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">No Data Selling</h3>
              <p className="text-gray-300 text-sm">We never sell or trade your information</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🇮🇳</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">India Compliant</h3>
              <p className="text-gray-300 text-sm">Follows DPDP Act and global standards</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Last Updated: <span className="text-white font-medium">December 15, 2024</span>
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                📋 <span className="text-purple-400">Contents</span>
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                      activeSection === section.id ? 'bg-purple-500/20 text-purple-300' : 'text-gray-300'
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
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <a 
                    href="mailto:privacy@neocred.in"
                    className="block p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    📧 Email Privacy Team
                  </a>
                  <Link 
                    to={ROUTES.TERMS}
                    className="block p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    📄 View Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="glass-card">
                <p className="text-lg mb-6 leading-relaxed">
                  Welcome to NEOC₹ED — where we help you learn and manage your finances, one step at a time.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We believe that your privacy is your right, and protecting your data is a core part of our mission. 
                  This Privacy Policy explains what data we collect, how we use it, and how we keep it safe — in simple, honest terms.
                </p>
              </div>

              {/* Section 1: Who We Are */}
              <section id="who-we-are" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🏢</span>
                  <h2 className="text-3xl font-bold text-purple-400">1. Who We Are</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    NEOC₹ED is a financial education and awareness platform designed for India. We are a non-certified, 
                    independent team of creators who aim to simplify personal finance for everyone — from beginners to experts.
                  </p>
                  <p>
                    We do not offer certified financial advice, investment recommendations, or banking services. 
                    Our platform is purely informational and educational.
                  </p>
                </div>
              </section>

              {/* Section 2: What We Collect */}
              <section id="what-we-collect" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📊</span>
                  <h2 className="text-3xl font-bold text-purple-400">2. What We Collect (and Why)</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  We collect only what's needed to make your experience better, never for selling or misusing.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-white/20 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-white/10">
                        <th className="border border-white/20 px-4 py-3 text-left font-semibold">Type of Data</th>
                        <th className="border border-white/20 px-4 py-3 text-left font-semibold">Examples</th>
                        <th className="border border-white/20 px-4 py-3 text-left font-semibold">Why We Collect It</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="border border-white/20 px-4 py-3 font-medium">Basic Info</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">Name, email (if you sign up or contact us)</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">To personalize your experience or respond to queries</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="border border-white/20 px-4 py-3 font-medium">Technical Info</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">IP, browser type, device</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">To keep the site secure and understand usage trends</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="border border-white/20 px-4 py-3 font-medium">Usage Data</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">What pages you visit, clicks</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">To improve features and user experience</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="border border-white/20 px-4 py-3 font-medium">Feedback</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">Messages, form inputs</td>
                        <td className="border border-white/20 px-4 py-3 text-gray-300">To enhance tools and content based on your needs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Data Protection */}
              <section id="data-protection" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔒</span>
                  <h2 className="text-3xl font-bold text-purple-400">3. How We Protect Your Data</h2>
                </div>
                <p className="text-gray-300 mb-4">Your data is protected using bank-level security measures:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400">✅</span>
                      <span className="font-medium">SSL Encryption</span>
                    </div>
                    <p className="text-gray-400 text-sm">HTTPS across the entire site</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400">✅</span>
                      <span className="font-medium">End-to-End Encryption</span>
                    </div>
                    <p className="text-gray-400 text-sm">For sensitive input data</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400">✅</span>
                      <span className="font-medium">Secure Servers</span>
                    </div>
                    <p className="text-gray-400 text-sm">With access control</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400">🚫</span>
                      <span className="font-medium">No Financial Data</span>
                    </div>
                    <p className="text-gray-400 text-sm">No account details, OTPs, cards, PAN/Aadhaar</p>
                  </div>
                </div>
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 font-semibold">
                    🛡️ We don't sell, rent, or trade your personal information to anyone. Ever.
                  </p>
                </div>
              </section>

              {/* Section 4: How We Use Data */}
              <section id="data-usage" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎯</span>
                  <h2 className="text-3xl font-bold text-purple-400">4. How We Use Your Data</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use your data only for legitimate purposes:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">🎆 Platform Improvement</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Enhance user experience</li>
                        <li>• Fix bugs and issues</li>
                        <li>• Develop new features</li>
                      </ul>
                    </div>
                    <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2">📞 Communication</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Respond to your queries</li>
                        <li>• Send important updates</li>
                        <li>• Provide customer support</li>
                      </ul>
                    </div>
                    <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-300 mb-2">🔒 Security</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Prevent fraud and abuse</li>
                        <li>• Maintain platform security</li>
                        <li>• Protect user accounts</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-300 mb-2">📊 Analytics</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Understand usage patterns</li>
                        <li>• Measure performance</li>
                        <li>• Improve content quality</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-100 font-medium">
                      🚫 We NEVER sell, rent, or trade your personal information to third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Your Rights */}
              <section id="your-rights" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚖️</span>
                  <h2 className="text-3xl font-bold text-purple-400">5. Your Rights</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Under Indian data protection laws (DPDP Act) and global standards, you have the following rights:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-400">📝</span>
                        <span className="font-medium text-blue-300">Access Your Data</span>
                      </div>
                      <p className="text-gray-400 text-sm">Request a copy of all data we hold about you</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400">✏️</span>
                        <span className="font-medium text-green-300">Correct Your Data</span>
                      </div>
                      <p className="text-gray-400 text-sm">Update or correct any inaccurate information</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-400">🗑️</span>
                        <span className="font-medium text-red-300">Delete Your Data</span>
                      </div>
                      <p className="text-gray-400 text-sm">Request deletion of your personal information</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-400">📤</span>
                        <span className="font-medium text-yellow-300">Data Portability</span>
                      </div>
                      <p className="text-gray-400 text-sm">Export your data in a readable format</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-purple-400">❌</span>
                        <span className="font-medium text-purple-300">Opt-Out</span>
                      </div>
                      <p className="text-gray-400 text-sm">Withdraw consent for data processing</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-orange-400">📞</span>
                        <span className="font-medium text-orange-300">File Complaints</span>
                      </div>
                      <p className="text-gray-400 text-sm">Report privacy concerns to authorities</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-100 text-sm">
                    📧 To exercise any of these rights, email us at: 
                    <a href="mailto:privacy@neocred.in" className="text-blue-300 hover:text-blue-200 underline">
                      privacy@neocred.in
                    </a>
                  </p>
                </div>
              </section>

              {/* Section 6: Data Breach Protocol */}
              <section id="data-breach" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🚨</span>
                  <h2 className="text-3xl font-bold text-purple-400">6. Data Breach Protocol</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    While we implement strong security measures, we're prepared to respond quickly and transparently 
                    if a data breach ever occurs.
                  </p>
                  <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🚨</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-red-300 mb-2">Our Response Protocol</h4>
                        <ul className="text-red-100 text-sm space-y-1 text-left inline-block">
                          <li>• Immediate containment and investigation</li>
                          <li>• Notify authorities within 72 hours (as required)</li>
                          <li>• Email notification to affected users within 24-48 hours</li>
                          <li>• Website banner with breach details and actions taken</li>
                          <li>• Free credit monitoring if financial data is involved</li>
                          <li>• Regular updates until issue is fully resolved</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">📞 What We'll Tell You</h4>
                      <ul className="text-blue-100 text-sm space-y-1">
                        <li>• What data was affected</li>
                        <li>• When the breach occurred</li>
                        <li>• How we discovered it</li>
                        <li>• Steps we're taking to fix it</li>
                        <li>• Actions you should take</li>
                      </ul>
                    </div>
                    <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2">🛡️ Prevention Measures</h4>
                      <ul className="text-green-100 text-sm space-y-1">
                        <li>• Regular security audits</li>
                        <li>• Employee security training</li>
                        <li>• Multi-factor authentication</li>
                        <li>• Encrypted data storage</li>
                        <li>• Incident response planning</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-100 text-sm">
                      📞 <strong>Emergency Contact:</strong> If you suspect a security issue, 
                      immediately email us at 
                      <a href="mailto:security@neocred.in" className="text-yellow-300 hover:text-yellow-200 underline">
                        security@neocred.in
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Policy Changes */}
              <section id="policy-changes" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📝</span>
                  <h2 className="text-3xl font-bold text-purple-400">7. Policy Changes</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors.
                  </p>
                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-300 mb-2">🔔 How We Notify You</h4>
                    <ul className="text-yellow-100 text-sm space-y-1">
                      <li>• Email notification for major changes</li>
                      <li>• Website banner for 30 days</li>
                      <li>• Updated "Last Modified" date</li>
                      <li>• Summary of key changes provided</li>
                    </ul>
                  </div>
                  <p>
                    Continued use of our platform after changes means you accept the updated Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📞</span>
                  <h2 className="text-3xl font-bold text-purple-400">8. Contact Us</h2>
                </div>
                <p className="text-gray-300 mb-6">If you have questions or concerns about your data or this policy, reach out:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📧</span>
                      <span className="font-medium">Privacy Team</span>
                    </div>
                    <a href="mailto:privacy@neocred.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      privacy@neocred.in
                    </a>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🌐</span>
                      <span className="font-medium">Policy Page</span>
                    </div>
                    <a href="https://neocred.in/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                      neocred.in/privacy
                    </a>
                  </div>
                </div>
              </section>

              {/* Summary */}
              <div className="glass-card bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">✅</span>
                  <h3 className="text-2xl font-bold text-green-400">Summary</h3>
                </div>
                <p className="text-green-100 leading-relaxed">
                  We're building a safe, transparent platform for financial literacy, not financial exploitation. 
                  We use your data to make your experience better — and nothing else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}