import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function Cookies() {
  const [activeSection, setActiveSection] = useState('');
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: true,
    functional: true,
    marketing: false
  });
  const [showToast, setShowToast] = useState(null);

  // Load cookie preferences from localStorage
  React.useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  // Save cookie preferences
  const saveCookiePreferences = (preferences) => {
    setCookiePreferences(preferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    
    // Show toast notification
    setShowToast('Cookie preferences saved successfully!');
    setTimeout(() => setShowToast(null), 3000);
  };

  // Accept all cookies
  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    saveCookiePreferences(allAccepted);
  };

  // Reject optional cookies
  const rejectOptionalCookies = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    saveCookiePreferences(essentialOnly);
  };

  // Toggle individual cookie type
  const toggleCookieType = (type) => {
    if (type === 'essential') return; // Cannot disable essential cookies
    
    const newPreferences = {
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    };
    saveCookiePreferences(newPreferences);
  };

  const sections = [
    { id: 'what-are-cookies', title: '1. What Are Cookies', icon: '🍪' },
    { id: 'how-we-use', title: '2. How We Use Cookies', icon: '🔧' },
    { id: 'types-of-cookies', title: '3. Types of Cookies', icon: '📊' },
    { id: 'third-party-cookies', title: '4. Third-Party Cookies', icon: '🔗' },
    { id: 'cookie-usage', title: '5. Cookie Usage & Data', icon: '📈' },
    { id: 'manage-cookies', title: '6. Manage Cookies', icon: '⚙️' },
    { id: 'cookie-consent', title: '7. Cookie Consent', icon: '✅' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: '🔒',
      color: 'red',
      description: 'Required for basic website functionality',
      examples: ['Session management', 'Security features', 'Form submissions'],
      canDisable: false
    },
    {
      name: 'Analytics Cookies',
      icon: '📈',
      color: 'blue',
      description: 'Help us understand how users interact with our site',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      canDisable: true
    },
    {
      name: 'Functional Cookies',
      icon: '⚙️',
      color: 'green',
      description: 'Remember your preferences and settings',
      examples: ['Language preferences', 'Theme settings', 'Progress tracking'],
      canDisable: true
    },
    {
      name: 'Marketing Cookies',
      icon: '📢',
      color: 'purple',
      description: 'Used for advertising and marketing purposes',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      canDisable: true
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-orange-400">Cookies</span> Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn how we use cookies to improve your experience and protect your privacy on NEOC₹ED.
          </p>
          
          {/* Key Points Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🍪</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Transparent Usage</h3>
              <p className="text-gray-300 text-sm">Clear explanation of all cookies</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Full Control</h3>
              <p className="text-gray-300 text-sm">Manage your cookie preferences</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Privacy First</h3>
              <p className="text-gray-300 text-sm">No sensitive data collection</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Effective Date: <span className="text-white font-medium">December 15, 2024</span>
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                📋 <span className="text-orange-400">Contents</span>
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                      activeSection === section.id ? 'bg-orange-500/20 text-orange-300' : 'text-gray-300'
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
                <h4 className="text-sm font-semibold text-white mb-3">Cookie Settings</h4>
                <div className="space-y-2">
                  <button 
                    onClick={acceptAllCookies}
                    className="w-full p-2 bg-green-600/20 text-green-300 rounded-lg hover:bg-green-600/30 transition-colors text-sm"
                  >
                    ✅ Accept All Cookies
                  </button>
                  <button 
                    onClick={rejectOptionalCookies}
                    className="w-full p-2 bg-red-600/20 text-red-300 rounded-lg hover:bg-red-600/30 transition-colors text-sm"
                  >
                    🚫 Reject Optional Cookies
                  </button>
                </div>
              </div>
              
              {/* Related Pages */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3">Related Pages</h4>
                <div className="space-y-2">
                  <Link 
                    to={ROUTES.PRIVACY}
                    className="block p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    🔒 Privacy Policy
                  </Link>
                  <Link 
                    to={ROUTES.TERMS}
                    className="block p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    📄 Terms of Service
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
                  NEOC₹ED uses cookies to improve your experience and deliver personalized content. 
                  This policy explains what cookies are, how we use them, and how you can control them.
                </p>
                <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-100 font-medium">
                    🍪 By using our website, you agree to the use of cookies as described in this policy.
                  </p>
                </div>
              </div>

              {/* Section 1: What Are Cookies */}
              <section id="what-are-cookies" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🍪</span>
                  <h2 className="text-3xl font-bold text-orange-400">1. What Are Cookies</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help websites remember information about your visit, making your next visit easier and more useful.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-300">🔧 How They Work</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Stored on your device by your browser</li>
                        <li>• Contain small amounts of data</li>
                        <li>• Sent back to the website on future visits</li>
                        <li>• Help improve your user experience</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-300">🛡️ Security</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Cannot access your personal files</li>
                        <li>• Cannot install software on your device</li>
                        <li>• Cannot carry viruses or malware</li>
                        <li>• Are completely safe to use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: How We Use Cookies */}
              <section id="how-we-use" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔧</span>
                  <h2 className="text-3xl font-bold text-orange-400">2. How We Use Cookies</h2>
                </div>
                <p className="text-gray-300 mb-6">NEOC₹ED uses cookies to enhance your experience in several ways:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-3">🎯 Personalization</h4>
                    <ul className="text-sm space-y-2 text-blue-100">
                      <li>• Remember your learning progress</li>
                      <li>• Save your favorite tools</li>
                      <li>• Customize content recommendations</li>
                      <li>• Maintain your preferences</li>
                    </ul>
                  </div>
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-3">📊 Analytics</h4>
                    <ul className="text-sm space-y-2 text-green-100">
                      <li>• Understand user behavior patterns</li>
                      <li>• Monitor website performance</li>
                      <li>• Identify popular content</li>
                      <li>• Improve user experience</li>
                    </ul>
                  </div>
                  <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-3">🔒 Security</h4>
                    <ul className="text-sm space-y-2 text-purple-100">
                      <li>• Maintain secure sessions</li>
                      <li>• Prevent unauthorized access</li>
                      <li>• Detect suspicious activity</li>
                      <li>• Protect against fraud</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-300 mb-3">⚙️ Functionality</h4>
                    <ul className="text-sm space-y-2 text-yellow-100">
                      <li>• Remember login status</li>
                      <li>• Save form data temporarily</li>
                      <li>• Enable interactive features</li>
                      <li>• Provide seamless navigation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Types of Cookies */}
              <section id="types-of-cookies" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📊</span>
                  <h2 className="text-3xl font-bold text-orange-400">3. Types of Cookies We Use</h2>
                </div>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => {
                    const cookieKey = cookie.name.toLowerCase().split(' ')[0];
                    const isEnabled = cookiePreferences[cookieKey];
                    
                    return (
                      <div key={index} className={`bg-${cookie.color}-600/20 border border-${cookie.color}-500/30 rounded-lg p-6 relative`}>
                        {/* Status Indicator */}
                        <div className="absolute top-4 right-4">
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                            isEnabled 
                              ? 'bg-green-600/30 text-green-300 border border-green-500/50' 
                              : 'bg-gray-600/30 text-gray-300 border border-gray-500/50'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              isEnabled ? 'bg-green-400' : 'bg-gray-400'
                            }`} />
                            {isEnabled ? 'Active' : 'Disabled'}
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{cookie.icon}</span>
                          <div className="flex-1 pr-20">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className={`text-xl font-semibold text-${cookie.color}-300`}>{cookie.name}</h4>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                cookie.canDisable 
                                  ? 'bg-blue-600/20 text-blue-300' 
                                  : 'bg-red-600/20 text-red-300'
                              }`}>
                                {cookie.canDisable ? '⚙️ Optional' : '🔒 Required'}
                              </span>
                            </div>
                            <p className={`text-${cookie.color}-100 mb-3`}>{cookie.description}</p>
                            <div className="mb-4">
                              <h5 className="font-medium text-white mb-2">Examples:</h5>
                              <ul className={`text-sm space-y-1 text-${cookie.color}-100`}>
                                {cookie.examples.map((example, idx) => (
                                  <li key={idx}>• {example}</li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Toggle Control */}
                            {cookie.canDisable && (
                              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <span className="text-sm font-medium text-white">
                                  {isEnabled ? 'Currently enabled' : 'Currently disabled'}
                                </span>
                                <button
                                  onClick={() => toggleCookieType(cookieKey)}
                                  className={`w-12 h-6 rounded-full transition-colors relative ${
                                    isEnabled ? 'bg-green-500' : 'bg-gray-600'
                                  }`}
                                >
                                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                                    isEnabled ? 'translate-x-6' : 'translate-x-0.5'
                                  }`} />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 4: Third-Party Cookies */}
              <section id="third-party-cookies" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔗</span>
                  <h2 className="text-3xl font-bold text-orange-400">4. Third-Party Cookies</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We may use third-party services that set their own cookies:</p>
                  <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🔗</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-purple-300 mb-2">Third-Party Services</h4>
                        <ul className="text-purple-100 text-sm space-y-1 text-left inline-block">
                          <li>• Google Analytics for website analytics</li>
                          <li>• Social media integration cookies</li>
                          <li>• Content delivery network cookies</li>
                          <li>• Performance monitoring services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    These third parties have their own privacy policies and cookie practices. 
                    We recommend reviewing their policies for more information.
                  </p>
                </div>
              </section>

              {/* Section 5: Cookie Usage & Data */}
              <section id="cookie-usage" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📈</span>
                  <h2 className="text-3xl font-bold text-orange-400">5. Cookie Usage & Data Retention</h2>
                </div>
                <p className="text-gray-300 mb-6">Here's what data our cookies collect and how long we keep it:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">📈</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-blue-300 mb-2">Data We Collect</h4>
                        <ul className="text-blue-100 text-sm space-y-1 text-left inline-block">
                          <li>• Page views and navigation patterns</li>
                          <li>• Time spent on different sections</li>
                          <li>• Device and browser information</li>
                          <li>• User preferences and settings</li>
                          <li>• Learning progress and achievements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">🕒</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-green-300 mb-2">Data Retention</h4>
                        <ul className="text-green-100 text-sm space-y-1 text-left inline-block">
                          <li>• Session cookies: Until browser closes</li>
                          <li>• Preference cookies: 1 year</li>
                          <li>• Analytics cookies: 2 years</li>
                          <li>• Functional cookies: 6 months</li>
                          <li>• Marketing cookies: 30 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Current Cookie Status */}
                <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-3 text-center">📊 Your Current Cookie Settings</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {cookieTypes.map((cookie, idx) => {
                      const cookieKey = cookie.name.toLowerCase().split(' ')[0];
                      const isEnabled = cookiePreferences[cookieKey];
                      
                      return (
                        <div key={idx} className="text-center p-3 bg-white/5 rounded-lg">
                          <div className="text-2xl mb-2">{cookie.icon}</div>
                          <div className="text-xs font-medium text-white mb-1">{cookie.name}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            isEnabled 
                              ? 'bg-green-500/20 text-green-300' 
                              : 'bg-gray-500/20 text-gray-300'
                          }`}>
                            {isEnabled ? '✅ Active' : '🚫 Disabled'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Section 6: Manage Cookies */}
              <section id="manage-cookies" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚙️</span>
                  <h2 className="text-3xl font-bold text-orange-400">6. How to Manage Cookies</h2>
                </div>
                <p className="text-gray-300 mb-6">You have full control over cookies. Here's how to manage them:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-300">🌐 Browser Settings</h4>
                    <ul className="text-sm space-y-2 text-gray-300">
                      <li>• Chrome: Settings → Privacy → Cookies</li>
                      <li>• Firefox: Options → Privacy → Cookies</li>
                      <li>• Safari: Preferences → Privacy → Cookies</li>
                      <li>• Edge: Settings → Privacy → Cookies</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-300">🎛️ Cookie Preferences</h4>
                    <div className="space-y-3">
                      {cookieTypes.map((cookie, idx) => {
                        const isEnabled = cookiePreferences[cookie.name.toLowerCase().split(' ')[0]];
                        const canToggle = cookie.canDisable;
                        
                        return (
                          <div key={idx} className="flex items-center justify-between p-2 bg-white/5 rounded">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{cookie.icon}</span>
                              <span className="text-xs font-medium">{cookie.name}</span>
                            </div>
                            <button
                              onClick={() => toggleCookieType(cookie.name.toLowerCase().split(' ')[0])}
                              disabled={!canToggle}
                              className={`w-10 h-5 rounded-full transition-colors relative ${
                                isEnabled ? 'bg-green-500' : 'bg-gray-600'
                              } ${!canToggle ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                                isEnabled ? 'translate-x-5' : 'translate-x-0.5'
                              }`} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-3 space-y-1">
                      <button 
                        onClick={acceptAllCookies}
                        className="w-full p-2 bg-green-600/20 text-green-300 rounded text-xs hover:bg-green-600/30 transition-colors"
                      >
                        ✅ Accept All
                      </button>
                      <button 
                        onClick={rejectOptionalCookies}
                        className="w-full p-2 bg-red-600/20 text-red-300 rounded text-xs hover:bg-red-600/30 transition-colors"
                      >
                        🚫 Essential Only
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-100 text-sm">
                    ⚠️ <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </section>

              {/* Section 7: Cookie Consent */}
              <section id="cookie-consent" className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">✅</span>
                  <h2 className="text-3xl font-bold text-orange-400">7. Cookie Consent</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Your consent helps us provide a better experience:</p>
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-start justify-center gap-3">
                      <span className="text-xl">✅</span>
                      <div className="text-center">
                        <h4 className="font-semibold text-green-300 mb-2">Consent Management</h4>
                        <ul className="text-green-100 text-sm space-y-1 text-left inline-block">
                          <li>• Consent is requested on first visit</li>
                          <li>• You can change preferences anytime</li>
                          <li>• Essential cookies don't require consent</li>
                          <li>• Withdrawal of consent is always possible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    By continuing to use our website, you consent to our use of cookies as described in this policy. 
                    You can withdraw your consent at any time through your browser settings.
                  </p>
                </div>
              </section>

              {/* Important Notice */}
              <div className="glass-card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🔒</span>
                  <h3 className="text-2xl font-bold text-blue-400">Privacy Commitment</h3>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We do not use cookies to collect sensitive personal or financial data. 
                  Your privacy and security are our top priorities.
                </p>
                <p className="text-blue-200 text-sm">
                  For more details about our data practices, please refer to our 
                  <Link to={ROUTES.PRIVACY} className="text-blue-400 hover:text-blue-300 underline ml-1">
                    Privacy Policy
                  </Link> and 
                  <Link to={ROUTES.TERMS} className="text-blue-400 hover:text-blue-300 underline ml-1">
                    Terms of Service
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white p-4 rounded-lg shadow-xl max-w-sm transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="text-xl">✓</span>
            <p className="font-medium">{showToast}</p>
          </div>
        </div>
      )}
      
      {/* Cookie Consent Banner (shows if no preferences saved) */}
      {!localStorage.getItem('cookiePreferences') && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-white/20 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍪</span>
                <div>
                  <p className="text-white font-medium mb-1">We use cookies to improve your experience</p>
                  <p className="text-gray-300 text-sm">
                    By continuing to use our site, you accept our use of cookies. 
                    <Link to={ROUTES.COOKIES} className="text-blue-400 hover:text-blue-300 underline ml-1">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const essentialOnly = {
                      essential: true,
                      analytics: false,
                      functional: false,
                      marketing: false
                    };
                    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
                    window.location.reload();
                  }}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => {
                    const allAccepted = {
                      essential: true,
                      analytics: true,
                      functional: true,
                      marketing: true
                    };
                    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
                    window.location.reload();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}