import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '../utils/constants';

export default function Terms() {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'who-we-are', title: '1. Who We Are', icon: '🏢' },
    { id: 'service-use', title: '2. Use of Services', icon: '⚖️' },
    { id: 'content-tools', title: '3. Content & Tools', icon: '🛠️' },
    { id: 'account-management', title: '4. Account Management', icon: '👤' },
    { id: 'service-availability', title: '5. Service Availability', icon: '🔄' },
    { id: 'liability', title: '6. Limitation of Liability', icon: '⚠️' },
    { id: 'dispute-resolution', title: '7. Dispute Resolution', icon: '🤝' },
    { id: 'changes', title: '8. Changes to Terms', icon: '📝' },
    { id: 'governing-law', title: '9. Governing Law', icon: '🇮🇳' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-green-100/20 dark:from-blue-900/20 dark:to-green-900/20 animate-pulse" />
      </div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100/50 to-gray-200 dark:from-blue-900/20 dark:to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="text-blue-400">Service</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Clear, fair terms that govern your use of NeoCred. We believe in transparency and simplicity.
          </p>
          
          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Educational Purpose</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">All content is for learning only</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Completely Free</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">No hidden costs or subscriptions</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Fair Usage</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Responsible use guidelines</p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Effective Date: <span className="text-gray-900 dark:text-white font-medium">January 15, 2025</span>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
            <div className="space-y-12">
              {/* Introduction */}
              <div className="glass-card">
                <p className="text-lg mb-6 leading-relaxed">
                  Welcome to NeoCred ("we", "our", "us"). These Terms of Service ("Terms") govern your use of our website, 
                  content, tools, services, and features provided through our platform (collectively, the "Service").
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Please read these Terms carefully before using the Service. By accessing or using our website, you agree to be bound by these Terms. 
                  If you do not agree, please do not use the Service.
                </p>
              </div>

              {/* Section 1: Who We Are */}
              <section id="who-we-are" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🏢</span>
                  <h2 className="text-3xl font-bold text-blue-400">1. Who We Are</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    NeoCred is an educational platform built to promote financial awareness, literacy, and independence. 
                    While we offer tools, calculators, and content, we are not registered financial advisors or certified professionals.
                  </p>
                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-600 dark:text-yellow-300 font-medium">
                      ⚠️ Our services are for informational and educational purposes only.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Use of Services */}
              <section id="service-use" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚖️</span>
                  <h2 className="text-3xl font-bold text-blue-400">2. Use of Our Services</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">You agree to use our Service in a responsible and lawful manner.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400">🚫</span>
                      <span className="font-medium text-red-600 dark:text-red-300">Prohibited</span>
                    </div>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>• Misuse or copy content without permission</li>
                      <li>• Interfere with platform security</li>
                      <li>• Use for illegal activities</li>
                    </ul>
                  </div>
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400">✅</span>
                      <span className="font-medium text-green-600 dark:text-green-300">Allowed</span>
                    </div>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>• Learn and use tools responsibly</li>
                      <li>• Share knowledge with others</li>
                      <li>• Provide constructive feedback</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Content & Tools */}
              <section id="content-tools" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🛠️</span>
                  <h2 className="text-3xl font-bold text-blue-400">3. Content & Tools</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-300">📚 Educational Content</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">All content, blogs, videos, and graphics are intended for general knowledge and learning.</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600 dark:text-green-300">🧮 Financial Calculators</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">SIP, FD, Tax calculators are for estimation purposes only. Results may vary from actual outcomes.</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-300">⚠️ Accuracy Disclaimer</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">We strive for accuracy but do not guarantee complete accuracy or real-time updates.</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Account Management */}
              <section id="account-management" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">👤</span>
                  <h2 className="text-3xl font-bold text-blue-400">4. Account Management</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>While NeoCred doesn't require account creation for basic use, you may provide information for enhanced features:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-start justify-center gap-3">
                        <span className="text-xl">✅</span>
                        <div className="text-center">
                          <h4 className="font-semibold text-green-600 dark:text-green-300 mb-2">Account Creation</h4>
                          <ul className="text-green-800 dark:text-green-100 text-sm space-y-1 text-left inline-block">
                            <li>• Optional for enhanced features</li>
                            <li>• Progress tracking and rewards</li>
                            <li>• Personalized recommendations</li>
                            <li>• Contact form submissions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-start justify-center gap-3">
                        <span className="text-xl">📋</span>
                        <div className="text-center">
                          <h4 className="font-semibold text-blue-600 dark:text-blue-300 mb-2">Data Management</h4>
                          <ul className="text-blue-800 dark:text-blue-100 text-sm space-y-1 text-left inline-block">
                            <li>• Clear browser data to reset progress</li>
                            <li>• Export your data anytime</li>
                            <li>• Request account deletion</li>
                            <li>• Contact us for data removal</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-800 dark:text-yellow-100 text-sm">
                      📧 <strong>Account Deletion:</strong> Email us at 
                      <a href="mailto:hello@neocred.in" className="text-yellow-600 dark:text-yellow-300 hover:text-yellow-700 dark:hover:text-yellow-200 underline">
                        hello@neocred.in
                      </a> to request complete data removal.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Service Availability */}
              <section id="service-availability" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔄</span>
                  <h2 className="text-3xl font-bold text-blue-400">5. Service Availability</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We strive to provide reliable service, but cannot guarantee 100% uptime:</p>
                  <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🔄</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-purple-600 dark:text-purple-300 mb-2">Service Expectations</h4>
                        <ul className="text-purple-800 dark:text-purple-100 text-sm space-y-1 text-left inline-block">
                          <li>• 99.9% uptime target</li>
                          <li>• Scheduled maintenance notifications</li>
                          <li>• Emergency maintenance as needed</li>
                          <li>• Service interruption updates</li>
                          <li>• Alternative access during downtime</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-300">🔔 Planned Maintenance</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">48-hour advance notice via email and website banner</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-600 dark:text-red-300">⚡ Emergency Issues</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Immediate fixes with real-time status updates</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Limitation of Liability */}
              <section id="liability" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚠️</span>
                  <h2 className="text-3xl font-bold text-blue-400">6. Limitation of Liability</h2>
                </div>
                <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-300 mb-2">Important Disclaimer</h4>
                      <p className="text-red-800 dark:text-red-100 leading-relaxed">
                        NeoCred and its team shall not be liable for any losses, decisions, or damages (financial or otherwise) 
                        resulting from the use of our content or tools. Always consult a licensed financial expert before making financial decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Dispute Resolution */}
              <section id="dispute-resolution" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🤝</span>
                  <h2 className="text-3xl font-bold text-blue-400">7. Dispute Resolution</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We believe in resolving disputes amicably before pursuing legal action:</p>
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🤝</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-green-600 dark:text-green-300 mb-2">Resolution Process</h4>
                        <ul className="text-green-800 dark:text-green-100 text-sm space-y-1 text-left inline-block">
                          <li>• Contact us directly first (hello@neocred.in)</li>
                          <li>• 30-day good faith negotiation period</li>
                          <li>• Mediation through neutral third party</li>
                          <li>• Arbitration if mediation fails</li>
                          <li>• Legal action as last resort</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-300">📞 Direct Contact</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Most issues can be resolved through direct communication</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-300">⚖️ Fair Process</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Transparent and fair resolution for all parties</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Changes to Terms */}
              <section id="changes" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📝</span>
                  <h2 className="text-3xl font-bold text-blue-400">8. Changes to Terms</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may update these Terms from time to time to reflect changes in our services or legal requirements.
                  </p>
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">📢</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-blue-600 dark:text-blue-300 mb-2">How We Notify You</h4>
                        <ul className="text-blue-800 dark:text-blue-100 text-sm space-y-1 text-left inline-block">
                          <li>• Email notification to registered users</li>
                          <li>• Website banner announcement</li>
                          <li>• Updated "Effective Date" at the top</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Continued use of our services after changes constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </section>

              {/* Section 9: Governing Law */}
              <section id="governing-law" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇮🇳</span>
                  <h2 className="text-3xl font-bold text-blue-400">9. Governing Law</h2>
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-100">
                    These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in India.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <div className="glass-card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📞</span>
                  <h3 className="text-2xl font-bold text-blue-400">Contact Us</h3>
                </div>
                <p className="text-blue-800 dark:text-blue-100 mb-4">
                  If you have any questions or concerns about these Terms, email us at:
                </p>
                <a 
                  href="mailto:hello@neocred.in" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📧 hello@neocred.in
                </a>
              </div>
            </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}