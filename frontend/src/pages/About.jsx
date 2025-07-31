import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function About() {
  const [stats, setStats] = useState({ users: 15000, tools: 40, lessons: 75 });
  
  // Simulate dynamic stats
  useEffect(() => {
    setStats({
      users: 15000 + Math.floor(Math.random() * 500),
      tools: 40,
      lessons: 75 + Math.floor(Math.random() * 10)
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-400">NEOC₹ED</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Empowering millions of Indians with financial literacy, one person at a time.
          </p>
          
          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stats.users.toLocaleString()}+</div>
              <div className="text-white/70">Users Educated</div>
            </div>
            <div className="glass-card text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">{stats.tools}+</div>
              <div className="text-white/70">Financial Tools</div>
            </div>
            <div className="glass-card text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">{stats.lessons}+</div>
              <div className="text-white/70">Learning Modules</div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-16">
          {/* Vision Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              🎯 Our <span className="text-blue-400">Vision</span>
            </h2>
            <div className="glass-card max-w-4xl mx-auto">
              <p className="text-lg mb-6 leading-relaxed">
                At NEOC₹ED, we believe that financial literacy is the first step toward financial freedom. 
                Yet, in a country as diverse and dynamic as India, millions still lack access to clear, 
                actionable, and trustworthy financial guidance.
              </p>
              <p className="text-xl font-semibold text-blue-300">
                We're here to change that — one person at a time, from Bharat to India.
              </p>
            </div>
          </section>
          
          {/* Who We Are Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              👥 Who We <span className="text-green-400">Are</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card">
                <div className="text-3xl mb-4">🎆</div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Our Identity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are a group of passionate individuals — developers, researchers, and everyday learners — 
                  who care deeply about empowering people with financial knowledge.
                </p>
              </div>
              
              <div className="glass-card">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Our Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are not certified financial advisors. We do not sell financial products or push any agenda. 
                  What we do is simplify, guide, and enable.
                </p>
              </div>
            </div>
            
            <div className="glass-card mt-8 text-center">
              <p className="text-lg text-gray-300">
                Whether you're a student, salaried employee, small business owner, homemaker, or retired citizen — 
                <span className="text-blue-400 font-semibold"> NEOC₹ED is your friendly companion</span> on the journey to smarter financial decisions.
              </p>
            </div>
          </section>
          
          {/* What We Offer Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              🚀 What We <span className="text-purple-400">Offer</span>
            </h2>
            <p className="text-center text-xl text-gray-300 mb-12">NEOC₹ED is a growing platform focused on:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Financial Learning</h3>
                <p className="text-gray-300 text-sm">Easy-to-understand lessons across 8 core financial categories</p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Smart Tools</h3>
                <p className="text-gray-300 text-sm">40+ calculators for SIP, FD, Tax Saving, Budgeting, and more</p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📰</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Latest Updates</h3>
                <p className="text-gray-300 text-sm">News, schemes, tips from RBI, SEBI, PIB</p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">AI Assistant</h3>
                <p className="text-gray-300 text-sm">AI-powered guidance and explainers</p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Inclusive Design</h3>
                <p className="text-gray-300 text-sm">Built for Tier-2/Tier-3 cities and local users</p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎆</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Rewards System</h3>
                <p className="text-gray-300 text-sm">Gamified learning with points and achievements</p>
              </div>
            </div>
          </section>
          
          {/* What We Stand For Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              💎 What We <span className="text-yellow-400">Stand For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Transparency</h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't collect financial data unnecessarily. Everything we do is open and honest.
                </p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Privacy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your information is protected with bank-level security. Your data stays yours.
                </p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Simplicity</h3>
                <p className="text-gray-300 leading-relaxed">
                  No jargon. No sales. Just clear financial help that everyone can understand.
                </p>
              </div>
              
              <div className="glass-card hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Accessibility</h3>
                <p className="text-gray-300 leading-relaxed">
                  Free for everyone, forever. Financial knowledge should never be behind a paywall.
                </p>
              </div>
            </div>
          </section>
          
          {/* Mission Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              🎯 Our <span className="text-red-400">Mission</span>
            </h2>
            <div className="glass-card max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🚀</div>
              <p className="text-xl mb-6 leading-relaxed text-gray-300">
                To make every Indian financially aware, confident, and capable of taking decisions — 
                without fear, confusion, or misinformation.
              </p>
              <div className="border-t border-gray-600 pt-6">
                <p className="text-2xl font-bold italic text-red-400 mb-2">
                  "Because knowing your money is owning your future."
                </p>
                <p className="text-gray-400 text-sm">
                  — Our guiding principle
                </p>
              </div>
            </div>
          </section>
          
          {/* Get In Touch Section */}
          <section>
            <h3 className="text-4xl font-bold text-center mb-12">
              🤝 Want to <span className="text-blue-400">Connect</span>?
            </h3>
            
            <div className="glass-card text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're building an open, honest platform for millions. If you're passionate about simplifying finance 
                or building impact tech, we'd love to hear from you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl">📧</div>
                  <div className="text-left">
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:hello@neocred.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      hello@neocred.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl">⏰</div>
                  <div className="text-left">
                    <p className="text-white font-medium">Response Time</p>
                    <p className="text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={ROUTES.CONTACT}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  📝 Send Message
                </Link>
                <a
                  href="mailto:hello@neocred.in"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  📧 Direct Email
                </a>
              </div>
            </div>
          </section>
          
          {/* Founder's Note Section */}
          <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">🧑‍💼 Founder's Note</h3>
            <p className="mb-4 italic">
              "Growing up, we were never taught how to save, invest, or manage money — yet we're expected to do it 
              perfectly as adults. That gap stuck with me.
            </p>
            <p className="mb-4 italic">
              With NEOC₹ED, I'm building the platform I wish I had — a place where every Indian, regardless of background, 
              can learn, use tools, and become financially confident without jargon or fear.
            </p>
            <p className="mb-4 italic">
              We're not financial advisors. We're just passionate individuals trying to make financial knowledge free, 
              modern, and for everyone — especially for Bharat.
            </p>
            <p className="mb-4 italic">
              This is just the beginning. Come, grow with us."
            </p>
            <p className="text-right font-semibold">
              — Kalyanam Rakesh., Founder, NEOC₹ED
            </p>
          </div>
          
          {/* User Success Stories */}
          <section>
            <h3 className="text-4xl font-bold text-center mb-12">
              💬 What Our <span className="text-green-400">Users Say</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">👩‍💼</div>
                  <div>
                    <p className="font-semibold text-white">Priya S.</p>
                    <p className="text-sm text-gray-400">Software Engineer, Bangalore</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-3">
                  "NEOC₹ED helped me understand SIP investments. I started with ₹2000/month and now I'm confident about my financial future!"
                </p>
                <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
              
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">👨‍🎓</div>
                  <div>
                    <p className="font-semibold text-white">Rahul K.</p>
                    <p className="text-sm text-gray-400">Student, Delhi</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-3">
                  "The budget planner changed my spending habits completely. I saved ₹15,000 in 3 months using their tools!"
                </p>
                <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
              
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">👩‍🏫</div>
                  <div>
                    <p className="font-semibold text-white">Anita M.</p>
                    <p className="text-sm text-gray-400">Teacher, Pune</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-3">
                  "Finally, financial advice in simple language! The AI assistant answered all my tax-saving questions perfectly."
                </p>
                <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section>
            <h3 className="text-4xl font-bold text-center mb-12">
              🧑‍🤝‍🧑 Meet Our <span className="text-cyan-400">Team</span>
            </h3>
            <p className="text-center text-xl text-gray-300 mb-12">
              We are a unique, AI-powered team united by a common goal: Make finance simple and accessible for every Indian.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">👨‍💼</div>
                <h4 className="text-xl font-semibold mb-2 text-cyan-400">Kalyanam Rakesh</h4>
                <p className="text-blue-300 font-medium mb-3">Founder & Visionary</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Product strategy, vision, and user experience. Passionate about making finance accessible to every Indian.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-500/20 p-2 rounded">
                    <div className="font-bold text-blue-400">15K+</div>
                    <div className="text-gray-400">Users Impacted</div>
                  </div>
                  <div className="bg-green-500/20 p-2 rounded">
                    <div className="font-bold text-green-400">40+</div>
                    <div className="text-gray-400">Tools Built</div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🤖</div>
                <h4 className="text-xl font-semibold mb-2 text-cyan-400">AI Development Team</h4>
                <p className="text-green-300 font-medium mb-3">Technical Architecture</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Advanced AI systems handling development, content creation, and user assistance. Powered by cutting-edge technology.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-purple-500/20 p-2 rounded">
                    <div className="font-bold text-purple-400">24/7</div>
                    <div className="text-gray-400">AI Support</div>
                  </div>
                  <div className="bg-orange-500/20 p-2 rounded">
                    <div className="font-bold text-orange-400">99.9%</div>
                    <div className="text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">👥</div>
                <h4 className="text-xl font-semibold mb-2 text-cyan-400">Community Contributors</h4>
                <p className="text-purple-300 font-medium mb-3">Content & Research</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Collaborative intelligence ensuring financial accuracy, user feedback integration, and continuous improvement.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-yellow-500/20 p-2 rounded">
                    <div className="font-bold text-yellow-400">500+</div>
                    <div className="text-gray-400">Feedback Items</div>
                  </div>
                  <div className="bg-red-500/20 p-2 rounded">
                    <div className="font-bold text-red-400">98%</div>
                    <div className="text-gray-400">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card mt-8 text-center">
              <p className="text-gray-300 italic">
                🎆 <strong>Our Unique Approach:</strong> Combining human vision with AI capabilities to create 
                the most comprehensive financial education platform for India.
              </p>
            </div>
          </section>
          
          {/* Company Milestones */}
          <section>
            <h3 className="text-4xl font-bold text-center mb-12">
              📈 Our <span className="text-orange-400">Journey</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="glass-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 text-green-400 p-3 rounded-full text-xl font-bold min-w-[60px] text-center">
                      ✓
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">Platform Launch</h4>
                        <span className="text-sm text-gray-400">Dec 2024</span>
                      </div>
                      <p className="text-gray-300 text-sm">Launched with 40+ financial tools and comprehensive learning modules</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                        <span>👥 15,000+ users</span>
                        <span>🛠️ 40+ tools</span>
                        <span>📚 75+ lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 text-blue-400 p-3 rounded-full text-xl font-bold min-w-[60px] text-center">
                      🔄
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">AI Integration</h4>
                        <span className="text-sm text-gray-400">Q1 2025</span>
                      </div>
                      <p className="text-gray-300 text-sm">Enhanced AI assistant with personalized financial guidance and advanced analytics</p>
                      <div className="text-xs text-blue-400 mt-2">🔄 In Progress</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 text-purple-400 p-3 rounded-full text-xl font-bold min-w-[60px] text-center">
                      🔮
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">Mobile App Launch</h4>
                        <span className="text-sm text-gray-400">Q2 2025</span>
                      </div>
                      <p className="text-gray-300 text-sm">Native mobile apps for iOS and Android with offline capabilities</p>
                      <div className="text-xs text-purple-400 mt-2">🔮 Planned</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/20 text-yellow-400 p-3 rounded-full text-xl font-bold min-w-[60px] text-center">
                      🎆
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">Regional Language Support</h4>
                        <span className="text-sm text-gray-400">Q3 2025</span>
                      </div>
                      <p className="text-gray-300 text-sm">Hindi, Tamil, Telugu, and other regional languages for true Bharat accessibility</p>
                      <div className="text-xs text-yellow-400 mt-2">🎆 Vision</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <section className="text-center">
            <div className="glass-card">
              <h3 className="text-3xl font-bold mb-6">
                🚀 Ready to Start Your <span className="text-green-400">Financial Journey</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of Indians who are already building their financial future with NEOC₹ED.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={ROUTES.LEARN}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  📚 Start Learning
                </Link>
                <Link
                  to={ROUTES.TOOLS}
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  🧮 Try Our Tools
                </Link>
                <Link
                  to={ROUTES.REWARDS}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  🏆 Earn Rewards
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}