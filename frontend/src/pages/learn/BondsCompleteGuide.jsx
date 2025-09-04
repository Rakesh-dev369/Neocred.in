import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  BookmarkIcon, 
  ChevronDownIcon, 
  ChevronRightIcon, 
  CalculatorIcon, 
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  StarIcon,
  FireIcon,
  SparklesIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BanknotesIcon,
  HomeIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function BondsCompleteGuide() {
  const [activeSection, setActiveSection] = useState('what-are-bonds');
  const [bookmarks, setBookmarks] = useState(new Set());
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { 
      id: 'what-are-bonds', 
      title: 'What are Bonds?', 
      icon: LightBulbIcon, 
      emoji: '💡', 
      duration: '4 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'why-invest', 
      title: 'Why Invest in Bonds?', 
      icon: TrophyIcon, 
      emoji: '🏆', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'types-of-bonds', 
      title: 'Types of Bonds in India', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      duration: '8 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'how-to-select', 
      title: 'How to Select Bonds', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '6 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'where-to-buy', 
      title: 'Where & How to Buy Bonds', 
      icon: BanknotesIcon, 
      emoji: '🏦', 
      duration: '5 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'risks-in-bonds', 
      title: 'Risks in Bonds', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'bonds-by-age', 
      title: 'Bonds as per Age/Person Type', 
      icon: UserGroupIcon, 
      emoji: '👥', 
      duration: '5 min read',
      difficulty: 'Advanced'
    },
    { 
      id: 'practical-example', 
      title: 'Practical Portfolio Example', 
      icon: CalculatorIcon, 
      emoji: '💼', 
      duration: '4 min read',
      difficulty: 'Advanced'
    }
  ];

  const toggleBookmark = (sectionId) => {
    setBookmarks(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(sectionId)) {
        newBookmarks.delete(sectionId);
      } else {
        newBookmarks.add(sectionId);
      }
      return newBookmarks;
    });
  };

  const markSectionComplete = (sectionId) => {
    setCompletedSections(prev => {
      const newCompleted = new Set(prev);
      newCompleted.add(sectionId);
      return newCompleted;
    });
  };

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200';
      case 'Advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-blue-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Bonds – Complete Practical Guide 📋</h1>
              <p className="text-blue-100">Complete Guide • 8 Sections • 2025 Updated • All Levels</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/emergency-fund-plan"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Previous: Emergency Fund
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <Link
                to="/learn/investment-portfolio-guide"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Next: Investment Guide
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <ChartBarIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:flex gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit lg:sticky lg:top-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white flex items-center">
                  <BookmarkIcon className="h-5 w-5 mr-2" />
                  Contents
                </h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                  {completedSections.size}/{sections.length}
                </span>
              </div>
              
              <nav className="space-y-2 max-h-96 overflow-y-auto">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  const isCompleted = completedSections.has(section.id);
                  const isActive = activeSection === section.id;
                  
                  return (
                    <motion.button
                      key={section.id}
                      whileHover={{ x: 4 }}
                      onClick={() => navigateToSection(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-200 group ${
                        isActive 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-blue-200 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-600'
                      }`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium truncate">{section.title}</span>
                          {isCompleted && (
                            <CheckCircleSolid className="h-4 w-4 text-green-500 flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(section.difficulty)}`}>
                            {section.difficulty}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <ClockIcon className="h-3 w-3 mr-1" />
                            {section.duration}
                          </span>
                        </div>
                      </div>
                      
                      {bookmarks.has(section.id) && (
                        <BookmarkSolid className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8 main-content">
            {/* What are Bonds Section */}
            {activeSection === 'what-are-bonds' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <LightBulbIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What are Bonds?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 4 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('what-are-bonds')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('what-are-bonds') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('what-are-bonds') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('what-are-bonds')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('what-are-bonds')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Simple Definition</h3>
                    <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                      A bond is basically a <strong>loan you give</strong> to the government, company, or institution.
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                      In return, they promise to pay back your money after a fixed time (maturity) along with regular interest (coupon).
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Practical Example</h4>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-green-700 dark:text-green-300 mb-3">
                        <strong>You buy a ₹10,000 government bond with 7% interest:</strong>
                      </p>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                        <li>• <strong>Every year:</strong> You get ₹700 interest (7% of ₹10,000)</li>
                        <li>• <strong>After maturity (say 5 years):</strong> You get your full ₹10,000 back</li>
                        <li>• <strong>Total earnings:</strong> ₹700 × 5 years = ₹3,500 + ₹10,000 principal = ₹13,500</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">👉 Key Insight</h4>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      Bonds are <strong>safe, steady income instruments</strong> compared to equity (shares). They provide predictable returns with lower risk.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('why-invest')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: Why Invest in Bonds?
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Why Invest in Bonds Section */}
            {activeSection === 'why-invest' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <TrophyIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Invest in Bonds?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('why-invest')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('why-invest') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('why-invest') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('why-invest')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('why-invest')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🛡️ Safety</h3>
                      <p className="text-green-700 dark:text-green-300 mb-3">Less risky than stocks. Government bonds are very safe.</p>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• Government backing ensures repayment</li>
                        <li>• Principal amount protection</li>
                        <li>• Predictable returns</li>
                        <li>• No market volatility stress</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">💰 Fixed Income</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-3">Regular interest payments (like rent from property).</p>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Monthly/quarterly/annual interest</li>
                        <li>• Predictable cash flow</li>
                        <li>• Budget planning becomes easier</li>
                        <li>• Passive income generation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">⚖️ Diversification</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-3">Balances risk if you already invest in stocks.</p>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• Reduces portfolio volatility</li>
                        <li>• Negative correlation with equity</li>
                        <li>• Risk-adjusted returns improvement</li>
                        <li>• Stability during market crashes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📄 Tax Benefits</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-3">Certain bonds (like tax-free bonds) save tax.</p>
                      <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                        <li>• Tax-free bonds: No tax on interest</li>
                        <li>• Indexation benefits on capital gains</li>
                        <li>• Better post-tax returns</li>
                        <li>• Tax planning opportunities</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🏖️ Retirement & Stability</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      Best for long-term safety seekers. Bonds provide the stability needed for retirement planning and capital preservation, especially for conservative investors who prioritize safety over high returns.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('what-are-bonds')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: What are Bonds?
                    </button>
                    <button
                      onClick={() => navigateToSection('types-of-bonds')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: Types of Bonds in India
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Bonds Section */}
            {activeSection === 'types-of-bonds' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Bonds in India</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 8 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('types-of-bonds')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('types-of-bonds') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('types-of-bonds') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('types-of-bonds')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('types-of-bonds')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Here's a structured list of all bond types available in India, so we don't miss any important option:
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">A. Government Bonds 🏛️</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Characteristics</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Issued by Govt. of India / RBI</li>
                            <li>• Safest investment option</li>
                            <li>• Low returns (5–7% in 2025)</li>
                            <li>• Sovereign guarantee</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Examples</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• G-Secs (Government Securities)</li>
                            <li>• RBI Floating Rate Bonds</li>
                            <li>• Treasury Bills (T-Bills)</li>
                            <li>• State Development Loans (SDLs)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">B. Corporate Bonds 🏢</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Characteristics</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Issued by companies to raise money</li>
                            <li>• Higher risk than Government bonds</li>
                            <li>• Higher returns (8–12% in 2025)</li>
                            <li>• Credit rating dependent</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Rating Categories</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• AAA: Highest safety (HDFC, Reliance)</li>
                            <li>• AA: High safety</li>
                            <li>• A: Adequate safety</li>
                            <li>• BBB and below: Higher risk</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">C. Tax-Free Bonds 📄</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Key Features</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Interest is tax-free under Income Tax Act</li>
                            <li>• 15-20 year lock-in period</li>
                            <li>• 5-6% returns (tax-free)</li>
                            <li>• Best for high tax bracket investors</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Issuers</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• NHAI (National Highways Authority)</li>
                            <li>• PFC (Power Finance Corporation)</li>
                            <li>• REC (Rural Electrification Corp)</li>
                            <li>• IRFC (Indian Railway Finance Corp)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">D. Sovereign Gold Bonds (SGBs) 🥇</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Features</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Issued by RBI, linked to gold price</li>
                            <li>• 8-year maturity with exit after 5 years</li>
                            <li>• 2.5% annual interest + gold appreciation</li>
                            <li>• No storage or purity issues</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Benefits</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Capital gains tax-free on maturity</li>
                            <li>• Better than physical gold</li>
                            <li>• Tradeable on exchanges</li>
                            <li>• Inflation hedge</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">E. Inflation-Indexed Bonds 📊</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Purpose</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Protect against inflation</li>
                            <li>• Interest linked to CPI/WPI</li>
                            <li>• Real returns preservation</li>
                            <li>• Long-term purchasing power protection</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Mechanism</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Principal adjusts with inflation</li>
                            <li>• Interest calculated on adjusted principal</li>
                            <li>• Both principal and interest protected</li>
                            <li>• Ideal for retirement planning</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">F. Fixed Maturity Plans (FMPs) 📈</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Structure</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Debt mutual funds investing in bonds</li>
                            <li>• Locked for a specific period</li>
                            <li>• Predictable returns</li>
                            <li>• Professional fund management</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Advantages</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Diversified bond portfolio</li>
                            <li>• Lower minimum investment</li>
                            <li>• Tax efficiency after 3 years</li>
                            <li>• No interest rate risk if held to maturity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">G. Municipal Bonds 🏙️</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Current Status</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Issued by local bodies/municipalities</li>
                            <li>• Rare in India but growing</li>
                            <li>• Infrastructure development funding</li>
                            <li>• State government backing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Examples</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Pune Municipal Corporation bonds</li>
                            <li>• Hyderabad Municipal bonds</li>
                            <li>• Surat Municipal Corporation</li>
                            <li>• Growing market segment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('why-invest')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: Why Invest in Bonds?
                    </button>
                    <button
                      onClick={() => navigateToSection('how-to-select')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: How to Select Bonds
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* How to Select Bonds Section */}
            {activeSection === 'how-to-select' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Select Bonds (Step by Step Guide)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 6 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('how-to-select')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('how-to-select') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('how-to-select') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('how-to-select')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('how-to-select')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✅</span>
                        Check Issuer's Safety
                      </h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Safety hierarchy: Government &gt; PSU &gt; Corporate (AAA rated)</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Safest (Government)</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• G-Secs</li>
                            <li>• RBI Bonds</li>
                            <li>• Tax-free bonds</li>
                            <li>• SGBs</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Safe (PSU)</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• NTPC bonds</li>
                            <li>• ONGC bonds</li>
                            <li>• SBI bonds</li>
                            <li>• BHEL bonds</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Good (AAA Corporate)</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• HDFC bonds</li>
                            <li>• Reliance bonds</li>
                            <li>• TCS bonds</li>
                            <li>• Infosys bonds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✅</span>
                        Look at Yield (Interest)
                      </h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Compare with FD rates. Bonds usually give more returns.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2025 Yield Comparison</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Bank FDs: 6.5-7.5%</li>
                            <li>• Government bonds: 6.8-7.2%</li>
                            <li>• AAA Corporate bonds: 8-9%</li>
                            <li>• Tax-free bonds: 5.5-6% (tax-free)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Yield Calculation</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Current Yield = Annual Interest / Current Price</li>
                            <li>• Yield to Maturity (YTM) more accurate</li>
                            <li>• Consider tax implications</li>
                            <li>• Real yield = Nominal yield - Inflation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✅</span>
                        Liquidity Check
                      </h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Some bonds are tradable on NSE/BSE, some are locked.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">High Liquidity</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Government securities (G-Secs)</li>
                            <li>• Sovereign Gold Bonds</li>
                            <li>• Large corporate bonds</li>
                            <li>• Traded on exchanges daily</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Low Liquidity</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Tax-free bonds (15-20 year lock-in)</li>
                            <li>• Small corporate bonds</li>
                            <li>• Municipal bonds</li>
                            <li>• Hold to maturity recommended</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                        <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✅</span>
                        Taxation Impact
                      </h3>
                      <p className="text-yellow-700 dark:text-yellow-300 mb-4">Tax-free bonds better for HNIs; for others, post-tax yield matters.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Tax-Free Bonds</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Best for 30% tax bracket investors</li>
                            <li>• 5.5% tax-free = 7.86% taxable equivalent</li>
                            <li>• Long lock-in period</li>
                            <li>• Limited availability</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Taxable Bonds</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Interest taxed as per income slab</li>
                            <li>• Capital gains after 3 years: 20% with indexation</li>
                            <li>• Better for lower tax bracket investors</li>
                            <li>• More flexibility in terms</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✅</span>
                        Duration (Maturity) Selection
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Short-term (1–3 years)</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Lower interest rate risk</li>
                            <li>• Good for near-term goals</li>
                            <li>• Easy to reinvest</li>
                            <li>• Lower yields typically</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Medium-term (5–7 years)</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Balanced risk-return</li>
                            <li>• Good for most investors</li>
                            <li>• Moderate interest rate risk</li>
                            <li>• Better yields than short-term</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Long-term (10–20 years)</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Higher yields</li>
                            <li>• Higher interest rate risk</li>
                            <li>• Good for retirement planning</li>
                            <li>• Lock-in consideration important</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-200 mb-4 flex items-center">
                        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">✅</span>
                        Your Goal Fit
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">🏖️ Retirement</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Government bonds for safety</li>
                            <li>• Tax-free bonds for tax efficiency</li>
                            <li>• Long-term maturity preferred</li>
                            <li>• Regular income focus</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">💰 Wealth Building</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Corporate bonds for higher returns</li>
                            <li>• SGBs for inflation protection</li>
                            <li>• Medium to long-term horizon</li>
                            <li>• Growth + income combination</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">🛡️ Safety</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• RBI bonds (floating rate)</li>
                            <li>• G-Secs for maximum safety</li>
                            <li>• Short to medium-term</li>
                            <li>• Capital preservation priority</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('types-of-bonds')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: Types of Bonds in India
                    </button>
                    <button
                      onClick={() => navigateToSection('where-to-buy')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: Where & How to Buy Bonds
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Where & How to Buy Bonds Section */}
            {activeSection === 'where-to-buy' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Where & How to Buy Bonds in India?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 5 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('where-to-buy')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('where-to-buy') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('where-to-buy') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('where-to-buy')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('where-to-buy')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🏪 Primary Market (When Issued)</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Buy bonds directly when they are first issued by the government or companies.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Government Bonds</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• <strong>RBI Retail Direct:</strong> Direct government platform</li>
                            <li>• <strong>NSE/BSE:</strong> Through registered brokers</li>
                            <li>• <strong>Banks:</strong> SBI, HDFC, ICICI offer G-Secs</li>
                            <li>• <strong>Minimum:</strong> ₹10,000 for most bonds</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Corporate Bonds</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• <strong>NSE/BSE:</strong> Primary market applications</li>
                            <li>• <strong>Brokers:</strong> Zerodha, Groww, Angel One</li>
                            <li>• <strong>Banks:</strong> Private banking services</li>
                            <li>• <strong>Minimum:</strong> ₹1,000 to ₹10,000 typically</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏢 Secondary Market (After Issue)</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Buy and sell bonds that are already issued and trading on stock exchanges.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Stock Exchanges</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• <strong>NSE (National Stock Exchange):</strong> Main platform</li>
                            <li>• <strong>BSE (Bombay Stock Exchange):</strong> Alternative platform</li>
                            <li>• <strong>Trading Hours:</strong> 9:00 AM to 5:00 PM</li>
                            <li>• <strong>Settlement:</strong> T+1 (next day settlement)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Advantages</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Immediate buying/selling</li>
                            <li>• Price discovery through market</li>
                            <li>• Liquidity for exit before maturity</li>
                            <li>• Transparent pricing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📈 Debt Mutual Funds (Indirect Exposure)</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Invest in bonds indirectly through professionally managed mutual funds.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Types of Debt Funds</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• <strong>Liquid Funds:</strong> Very short-term bonds</li>
                            <li>• <strong>Short Duration:</strong> 1-3 year bonds</li>
                            <li>• <strong>Medium Duration:</strong> 3-7 year bonds</li>
                            <li>• <strong>Long Duration:</strong> 7+ year bonds</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Benefits</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Professional fund management</li>
                            <li>• Diversification across bonds</li>
                            <li>• Lower minimum investment (₹500)</li>
                            <li>• Easy liquidity (except FMPs)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">💻 Online Platforms (2025 Updated)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Popular Brokers</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                            <li>• <strong>Zerodha:</strong> ₹20 per trade, good bond selection</li>
                            <li>• <strong>Groww:</strong> User-friendly, ₹20 per trade</li>
                            <li>• <strong>Angel One:</strong> Comprehensive bond platform</li>
                            <li>• <strong>HDFC Securities:</strong> Full-service broker</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Specialized Platforms</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                            <li>• <strong>BondsIndia:</strong> Dedicated bond platform</li>
                            <li>• <strong>GoldenPi:</strong> Corporate bond specialist</li>
                            <li>• <strong>Wint Wealth:</strong> Fixed income focus</li>
                            <li>• <strong>RBI Retail Direct:</strong> Government bonds only</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📋 Step-by-Step Buying Process</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                          <div>
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Open Demat Account</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">Required for holding bonds electronically. Choose broker based on charges and features.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                          <div>
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Research Bonds</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">Check credit rating, yield, maturity, and issuer details before investing.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                          <div>
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Place Order</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">Use trading platform to place buy order. Check price, quantity, and settlement details.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                          <div>
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Track & Manage</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">Monitor interest payments, track bond prices, and plan for maturity or early exit.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('how-to-select')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: How to Select Bonds
                    </button>
                    <button
                      onClick={() => navigateToSection('risks-in-bonds')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: Risks in Bonds
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Risks in Bonds Section */}
            {activeSection === 'risks-in-bonds' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                      <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risks in Bonds (Don't Miss This!)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 4 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('risks-in-bonds')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('risks-in-bonds') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('risks-in-bonds') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('risks-in-bonds')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('risks-in-bonds')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Important: Bonds Are Not Risk-Free</h3>
                    <p className="text-red-700 dark:text-red-300">
                      While bonds are generally safer than stocks, they do carry risks. Understanding these risks helps you make better investment decisions and manage your portfolio effectively.
                    </p>
                  </div>
                  
                  <div className="grid gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">💥 Credit Risk</h3>
                      <p className="text-red-700 dark:text-red-300 mb-4">Company may default and not pay back your money. Check ratings before investing.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Rating Scale (Safest to Risky)</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• <strong>AAA:</strong> Highest safety (0.01% default risk)</li>
                            <li>• <strong>AA:</strong> High safety (0.05% default risk)</li>
                            <li>• <strong>A:</strong> Adequate safety (0.2% default risk)</li>
                            <li>• <strong>BBB:</strong> Moderate risk (1% default risk)</li>
                            <li>• <strong>BB and below:</strong> High risk (5%+ default risk)</li>
                            <li>• <strong>D:</strong> Default (100% loss)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">How to Minimize</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Stick to AAA and AA rated bonds</li>
                            <li>• Prefer government bonds for safety</li>
                            <li>• Diversify across multiple issuers</li>
                            <li>• Monitor rating changes regularly</li>
                            <li>• Avoid unrated or low-rated bonds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📈 Interest Rate Risk</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">If interest rates rise, old bond prices fall. This affects bonds traded in secondary market.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Example Scenario</h4>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-sm text-blue-600 dark:text-blue-400">
                            <p><strong>You bought:</strong> ₹10,000 bond at 7% interest</p>
                            <p><strong>Market rates rise to:</strong> 9%</p>
                            <p><strong>Your bond price falls to:</strong> ~₹8,500</p>
                            <p><strong>Why:</strong> New bonds give 9%, so yours is less attractive</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">How to Minimize</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Hold bonds till maturity</li>
                            <li>• Choose shorter duration bonds</li>
                            <li>• Consider floating rate bonds</li>
                            <li>• Ladder your bond investments</li>
                            <li>• Don't panic sell during rate rises</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💧 Liquidity Risk</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Some bonds are hard to sell before maturity, especially corporate and tax-free bonds.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">High Liquidity Bonds</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Government securities (G-Secs)</li>
                            <li>• Sovereign Gold Bonds</li>
                            <li>• Large PSU bonds</li>
                            <li>• Popular corporate bonds</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Low Liquidity Bonds</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Tax-free bonds (15-20 year lock-in)</li>
                            <li>• Small corporate bonds</li>
                            <li>• Municipal bonds</li>
                            <li>• Unlisted bonds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📊 Inflation Risk</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Fixed income may not beat rising costs over time, reducing your purchasing power.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Real Return Calculation</h4>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-sm text-orange-600 dark:text-orange-400">
                            <p><strong>Bond return:</strong> 7% per year</p>
                            <p><strong>Inflation rate:</strong> 6% per year</p>
                            <p><strong>Real return:</strong> 7% - 6% = 1%</p>
                            <p><strong>Impact:</strong> Your purchasing power grows by only 1%</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Protection Strategies</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Choose inflation-indexed bonds</li>
                            <li>• Mix bonds with equity investments</li>
                            <li>• Consider Sovereign Gold Bonds</li>
                            <li>• Opt for floating rate bonds</li>
                            <li>• Regular portfolio rebalancing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🛡️ Risk Management Tips</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Diversification</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Don't put all money in one bond</li>
                          <li>• Mix government and corporate bonds</li>
                          <li>• Vary maturity periods (laddering)</li>
                          <li>• Include different sectors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Regular Monitoring</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Track credit rating changes</li>
                          <li>• Monitor interest rate trends</li>
                          <li>• Review portfolio quarterly</li>
                          <li>• Stay updated on issuer news</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('where-to-buy')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: Where & How to Buy Bonds
                    </button>
                    <button
                      onClick={() => navigateToSection('bonds-by-age')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: Bonds as per Age/Person Type
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Bonds by Age Section */}
            {activeSection === 'bonds-by-age' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <UserGroupIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Bonds as per Age/Person Type</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 5 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('bonds-by-age')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('bonds-by-age') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('bonds-by-age') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('bonds-by-age')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('bonds-by-age')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🧑💼 Salaried Persons</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">👨👩 20s–30s (Growth Phase)</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Allocation Strategy</h5>
                              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• <strong>Equity:</strong> 70-80% (SIP + direct stocks)</li>
                                <li>• <strong>Bonds:</strong> 20% of portfolio</li>
                                <li>• Focus on wealth building</li>
                                <li>• Higher risk tolerance</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Recommended Bonds</h5>
                              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• Short-term corporate bonds (2-3 years)</li>
                                <li>• Sovereign Gold Bonds (inflation hedge)</li>
                                <li>• Liquid funds for emergency</li>
                                <li>• Avoid long lock-in bonds</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">👨👩👧👦 40s–50s (Stability Phase)</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Allocation Strategy</h5>
                              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• <strong>Bonds:</strong> 40-50% of portfolio</li>
                                <li>• <strong>Equity:</strong> 50-60% (balanced approach)</li>
                                <li>• Focus on stability + growth</li>
                                <li>• Moderate risk tolerance</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Recommended Bonds</h5>
                              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• Government bonds (5-10 years)</li>
                                <li>• Tax-free bonds for tax saving</li>
                                <li>• AAA corporate bonds</li>
                                <li>• Mix of short and medium-term</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">👴👵 60s+ (Retirement Phase)</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Allocation Strategy</h5>
                              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• <strong>Bonds:</strong> 70-80% of portfolio</li>
                                <li>• <strong>Equity:</strong> 20-30% (conservative)</li>
                                <li>• Focus on fixed income</li>
                                <li>• Low risk tolerance</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Recommended Bonds</h5>
                              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• Government bonds (safety priority)</li>
                                <li>• Senior citizen FDs</li>
                                <li>• Monthly income bonds</li>
                                <li>• Avoid long-term lock-ins</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">👤 Self-employed/Businessmen</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Why Bonds are Important</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                            <li>• <strong>Income Stability:</strong> Business income is irregular</li>
                            <li>• <strong>Cash Flow:</strong> Bonds provide predictable income</li>
                            <li>• <strong>Risk Balance:</strong> Business itself is risky</li>
                            <li>• <strong>Liquidity:</strong> Easy access during business needs</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Recommended Strategy</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                            <li>• <strong>Allocation:</strong> 50-60% bonds, 40-50% equity</li>
                            <li>• <strong>Mix:</strong> Government + Corporate + SGBs</li>
                            <li>• <strong>Duration:</strong> Short to medium-term preferred</li>
                            <li>• <strong>Liquidity:</strong> Keep some in liquid funds</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Ideal Bond Portfolio for Business Owners</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium text-green-600 dark:text-green-400 mb-2">Safety (40%)</h5>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                              <li>• Government bonds</li>
                              <li>• RBI floating rate bonds</li>
                              <li>• High-grade PSU bonds</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-600 dark:text-green-400 mb-2">Growth (40%)</h5>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                              <li>• AAA corporate bonds</li>
                              <li>• Sovereign Gold Bonds</li>
                              <li>• Tax-free bonds (if applicable)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-600 dark:text-green-400 mb-2">Liquidity (20%)</h5>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                              <li>• Liquid mutual funds</li>
                              <li>• Short-term bonds (1-2 years)</li>
                              <li>• Ultra-short duration funds</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">💡 Key Considerations by Life Stage</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Young Professionals</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Lower bond allocation (20-30%)</li>
                          <li>• Focus on growth assets</li>
                          <li>• Shorter duration bonds</li>
                          <li>• Build emergency fund first</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Mid-Career</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Balanced allocation (40-50%)</li>
                          <li>• Mix of safety and growth</li>
                          <li>• Tax-efficient bonds</li>
                          <li>• Plan for children's education</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Pre-Retirement</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Higher bond allocation (60-80%)</li>
                          <li>• Focus on income generation</li>
                          <li>• Capital preservation priority</li>
                          <li>• Reduce portfolio volatility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('risks-in-bonds')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: Risks in Bonds
                    </button>
                    <button
                      onClick={() => navigateToSection('practical-example')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
                    >
                      Next: Practical Portfolio Example
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Practical Example Section */}
            {activeSection === 'practical-example' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <CalculatorIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Practical Portfolio Example</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 4 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('practical-example')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('practical-example') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('practical-example') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('practical-example')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('practical-example')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💼 Sample Portfolio: ₹10 Lakhs Investment</h3>
                    <p className="text-green-700 dark:text-green-300">
                      Here's a practical example of how to allocate ₹10 lakhs across different types of bonds for a balanced approach to safety, growth, and liquidity.
                    </p>
                  </div>
                  
                  <div className="grid gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">₹3L</span>
                        Government Bonds (Safety - 30%)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Investment Options</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• ₹2L in 5-year G-Secs (7% yield)</li>
                            <li>• ₹1L in RBI Floating Rate Bonds</li>
                            <li>• Purchase through RBI Retail Direct</li>
                            <li>• Hold till maturity for guaranteed returns</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Expected Returns</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Annual income: ₹21,000</li>
                            <li>• 5-year total: ₹1,05,000 + ₹3L principal</li>
                            <li>• Risk: Virtually zero</li>
                            <li>• Liquidity: Can sell on NSE if needed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                        <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">₹2L</span>
                        Tax-Free Bonds (Tax Saving - 20%)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Investment Options</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• ₹1L in NHAI tax-free bonds (5.75%)</li>
                            <li>• ₹1L in PFC tax-free bonds (5.5%)</li>
                            <li>• 15-20 year maturity</li>
                            <li>• Best for 30% tax bracket investors</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Tax Benefits</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Annual tax-free income: ₹11,250</li>
                            <li>• Equivalent taxable return: 16.07% (30% bracket)</li>
                            <li>• Total 20-year income: ₹2.25L tax-free</li>
                            <li>• Significant tax savings over time</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">₹2L</span>
                        Sovereign Gold Bonds (Inflation Hedge - 20%)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Investment Strategy</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Buy during RBI issue periods</li>
                            <li>• 8-year maturity, exit after 5 years</li>
                            <li>• 2.5% annual interest + gold appreciation</li>
                            <li>• Better than physical gold</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Expected Returns</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Fixed income: ₹5,000 annually</li>
                            <li>• Gold appreciation: 8-10% historically</li>
                            <li>• Total return: 10-12% potential</li>
                            <li>• Capital gains tax-free on maturity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">₹2L</span>
                        AAA Corporate Bonds (Higher Returns - 20%)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Investment Options</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• ₹1L in HDFC Bank bonds (8.5%)</li>
                            <li>• ₹1L in Reliance Industries bonds (9%)</li>
                            <li>• 3-5 year maturity</li>
                            <li>• AAA rating mandatory</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Risk-Return Profile</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Annual income: ₹17,500</li>
                            <li>• Higher returns than government bonds</li>
                            <li>• Minimal credit risk (AAA rated)</li>
                            <li>• Good liquidity on exchanges</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">₹1L</span>
                        Short-Term Bonds (Liquidity - 10%)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Investment Options</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• ₹50k in liquid mutual funds</li>
                            <li>• ₹50k in 1-2 year corporate bonds</li>
                            <li>• Easy exit options</li>
                            <li>• Emergency liquidity provision</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Benefits</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Quick access to funds</li>
                            <li>• Lower interest rate risk</li>
                            <li>• 6-7% returns expected</li>
                            <li>• Portfolio flexibility</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Portfolio Summary</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Expected Annual Income</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Government bonds: ₹21,000</li>
                          <li>• Tax-free bonds: ₹11,250 (tax-free)</li>
                          <li>• Sovereign Gold Bonds: ₹5,000</li>
                          <li>• Corporate bonds: ₹17,500</li>
                          <li>• Short-term bonds: ₹6,500</li>
                          <li>• <strong>Total: ₹61,250 (6.125% yield)</strong></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Portfolio Characteristics</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• <strong>Safety:</strong> 50% in government-backed securities</li>
                          <li>• <strong>Growth:</strong> 40% in higher-yielding bonds</li>
                          <li>• <strong>Liquidity:</strong> 10% easily accessible</li>
                          <li>• <strong>Tax efficiency:</strong> 20% tax-free income</li>
                          <li>• <strong>Inflation hedge:</strong> 20% in gold-linked bonds</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">✅ Summary in One Line</h4>
                    <p className="text-green-700 dark:text-green-300 text-lg leading-relaxed">
                      Bonds are the <strong>"safety belt"</strong> of your portfolio. They give stability, fixed income, and balance against risky equity investments. This diversified approach ensures steady returns while managing risk effectively.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('bonds-by-age')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous: Bonds as per Age/Person Type
                    </button>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                      >
                        Back to Learn Hub
                      </Link>
                      <Link
                        to="/learn/investment-portfolio-guide"
                        className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
                      >
                        <span className="mr-2">📈</span>
                        Next: Investment Guide
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tools Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Bond Investment Tools & Calculators
                    </h3>
                    <p className="text-blue-100">Calculate and compare bond investments with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'FD Calculator', path: '/calculators/fd', icon: '📋', desc: 'Compare bond vs FD returns' },
                    { name: 'SIP Calculator', path: '/calculators/sip', icon: '📈', desc: 'Plan systematic investments' },
                    { name: 'Tax Calculator', path: '/calculators/form16-breakdown', icon: '📄', desc: 'Calculate tax savings' },
                    { name: 'Goal Planner', path: '/calculators/goal-based-investment', icon: '🎯', desc: 'Plan with bonds & equity' }
                  ].map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        to={tool.path} 
                        className="block bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                      >
                        <div className="text-2xl mb-2">{tool.icon}</div>
                        <p className="font-semibold mb-1 group-hover:text-yellow-200 transition-colors">{tool.name}</p>
                        <p className="text-xs text-blue-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-blue-200">
                          <span>Use Tool</span>
                          <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}