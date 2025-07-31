import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Calculator,
  Bot,
  Newspaper,
  ShieldCheck,
  BadgeDollarSign,
  Coins
} from 'lucide-react';

import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';


import { ROUTES } from '../utils/constants';
import { TESTIMONIALS } from '../constants/appContent';

export default function Home() {
  const [userPoints, setUserPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    users: 15000,
    moneySaved: 7500000,
    tools: 40
  });
  
  // Load user points and simulate dynamic stats
  useEffect(() => {
    const savedPoints = localStorage.getItem('learningPoints');
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints));
    }
    
    // Simulate loading and dynamic stats
    setTimeout(() => {
      setStats({
        users: 15000 + Math.floor(Math.random() * 500),
        moneySaved: 7500000 + Math.floor(Math.random() * 100000),
        tools: 40
      });
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Navigate to tools page
  const navigateToTools = () => {
    window.location.href = ROUTES.TOOLS;
  };
  const features = [
    {
      icon: GraduationCap,
      title: 'Financial Education',
      description:
        'Learn the fundamentals of personal finance, investing, and wealth building through our structured guides.',
      link: ROUTES.LEARN
    },
    {
      icon: Calculator,
      title: 'Smart Calculators',
      description:
        'Access 40+ financial calculators including SIP, FD, budgeting, tax-saving, loans, insurance, and retirement planning tools.',
      link: ROUTES.TOOLS
    },
    {
      icon: Bot,
      title: 'AI Financial Assistant',
      description:
        'Ask anything related to money. Our chatbot gives personalized advice.',
      link: ROUTES.CHATBOT
    },
    {
      icon: Newspaper,
      title: 'Market Insights',
      description:
        'Stay updated with financial news, policy changes, and market trends.',
      link: ROUTES.NEWS
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Private',
      description:
        'Your financial data is encrypted with bank-level security.',
      link: ROUTES.PRIVACY
    },
    {
      icon: BadgeDollarSign,
      title: '🎁 Rewards Program',
      description:
        'Earn points for every tool used, lesson completed, and AI chat. Redeem for exclusive bonuses, premium features, and exciting rewards!',
      link: ROUTES.REWARDS,
      badge: 'NEW'
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* User Points Display */}
      {(userPoints > 0 || isLoading) && (
        <section className="py-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card text-center">
              {isLoading ? (
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
                  <span className="text-gray-600 dark:text-white/70">Loading your progress...</span>
                </div>
              ) : userPoints > 0 ? (
                <>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Coins className="h-6 w-6 text-yellow-400" />
                    <span className="text-2xl font-bold text-yellow-400">{userPoints.toLocaleString()}</span>
                    <span className="text-gray-600 dark:text-white/70">Learning Points Earned</span>
                  </div>
                  <p className="text-gray-500 dark:text-white/60 text-sm mb-4">
                    Keep learning to earn more points and unlock exclusive rewards!
                  </p>
                  <Link 
                    to={ROUTES.REWARDS} 
                    className="inline-flex items-center gap-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span>🏆</span>
                    View Rewards
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </section>
      )}


      {/* Popular Tools Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔥 Most Popular Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start with these essential calculators used by thousands of users daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: 'SIP Calculator',
                description: 'Plan your systematic investments',
                popularity: '98%',
                icon: '📈',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'FD Calculator',
                description: 'Calculate fixed deposit returns',
                popularity: '95%',
                icon: '🏦',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Budget Planner',
                description: 'Manage monthly expenses',
                popularity: '92%',
                icon: '💰',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Home Loan EMI',
                description: 'Calculate loan EMI & interest',
                popularity: '90%',
                icon: '🏠',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((tool, index) => (
              <Link
                key={index}
                to={ROUTES.TOOLS}
                className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer group block"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                    {tool.popularity} Popular
                  </span>
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={ROUTES.TOOLS}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-white/20"
            >
              View All 40+ Tools
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Personalized Content for Returning Users */}
      {userPoints > 0 && !isLoading && (
        <section className="py-16 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎆 Welcome Back, Financial Explorer!
              </h2>
              <p className="text-xl text-gray-400">
                Continue your journey to financial mastery with personalized recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-white mb-2">Continue Learning</h3>
                <p className="text-gray-400 text-sm mb-4">Pick up where you left off in your financial education journey.</p>
                <Link to={ROUTES.LEARN} className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  Resume Learning →
                </Link>
              </div>
              
              <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Your Progress</h3>
                <p className="text-gray-400 text-sm mb-4">You've earned {userPoints} points! Keep going to unlock more rewards.</p>
                <Link to={ROUTES.REWARDS} className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                  View Achievements →
                </Link>
              </div>
              
              <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Recommended Tools</h3>
                <p className="text-gray-400 text-sm mb-4">Based on your activity, try these advanced calculators next.</p>
                <Link to={ROUTES.TOOLS} className="text-green-400 hover:text-green-300 font-medium text-sm">
                  Explore Tools →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Financial Success
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From learning basics to advanced planning, we provide all the tools and knowledge you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already started their journey to financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.LEARN}
                className="bg-white text-black hover:bg-gray-200 font-medium py-3 px-8 rounded-2xl transition-all duration-300"
              >
                Start Learning Now
              </Link>
              <Link
                to={ROUTES.CHATBOT}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-medium py-3 px-8 rounded-2xl transition-all duration-300"
              >
                Ask AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity Ticker */}
      <section className="py-8 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="text-green-400 animate-pulse">•</span>
              <span className="text-gray-700 dark:text-white/80">Live Activity:</span>
              <span className="text-gray-900 dark:text-white">Priya just earned 25 points from SIP Calculator</span>
              <span className="text-gray-500 dark:text-white/50">|</span>
              <span className="text-gray-900 dark:text-white">Rahul completed Budget Planning lesson</span>
              <span className="text-gray-500 dark:text-white/50">|</span>
              <span className="text-gray-900 dark:text-white">Anita redeemed Premium Features</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400">
              Real stories from people who transformed their financial lives with NEOC₹ED.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}