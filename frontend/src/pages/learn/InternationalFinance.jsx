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
  GlobeAltIcon,
  BuildingOfficeIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  ScaleIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  MapIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';
import { getNextPillar, getPreviousPillar } from '../../data/learningData';

export default function InternationalFinance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 8; // International Finance is pillar 8
  const nextPillar = getNextPillar(currentPillarId);
  const previousPillar = getPreviousPillar(currentPillarId);

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
    // Foundation Level
    { 
      id: 'introduction', 
      title: 'Introduction to International Finance', 
      icon: AcademicCapIcon, 
      emoji: '🌍', 
      level: 'foundation',
      duration: '10 min read',
      difficulty: 'Beginner',
      description: 'Understanding global financial markets and cross-border finance'
    },
    { 
      id: 'forex-markets', 
      title: 'Foreign Exchange Markets', 
      icon: CurrencyDollarIcon, 
      emoji: '💱', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Currency trading, exchange rates, and forex fundamentals'
    },
    { 
      id: 'international-trade', 
      title: 'International Trade Finance', 
      icon: MapIcon, 
      emoji: '🚢', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Trade financing, letters of credit, and export-import finance'
    },
    { 
      id: 'global-investments', 
      title: 'Global Investment Opportunities', 
      icon: GlobeAltIcon, 
      emoji: '📈', 
      level: 'intermediate',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'International stocks, bonds, and diversification strategies'
    },
    // Intermediate Level
    { 
      id: 'currency-risk', 
      title: 'Currency Risk Management', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Hedging strategies and managing foreign exchange exposure'
    },
    { 
      id: 'emerging-markets', 
      title: 'Emerging Markets Finance', 
      icon: RocketLaunchIcon, 
      emoji: '🚀', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Investing in developing economies and frontier markets'
    },
    { 
      id: 'multinational-finance', 
      title: 'Multinational Corporate Finance', 
      icon: BuildingOfficeIcon, 
      emoji: '🏢', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'MNC financial management and cross-border operations'
    },
    { 
      id: 'international-banking', 
      title: 'International Banking Systems', 
      icon: BanknotesIcon, 
      emoji: '🏦', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Global banking networks and correspondent banking'
    },
    // Advanced Level
    { 
      id: 'sovereign-debt', 
      title: 'Sovereign Debt & Country Risk', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Government bonds, credit ratings, and political risk'
    },
    { 
      id: 'regulatory-compliance', 
      title: 'International Regulatory Framework', 
      icon: DocumentTextIcon, 
      emoji: '📋', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'FATCA, CRS, and global compliance requirements'
    },
    { 
      id: 'future-trends', 
      title: 'Future of Global Finance', 
      icon: SparklesIcon, 
      emoji: '🔮', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Digital currencies, blockchain, and financial innovation'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Global Strategy', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '10 min read',
      difficulty: 'All Levels',
      description: 'Building a global financial portfolio and strategy'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '88%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.6', icon: StarIcon },
    { label: 'Active Learners', value: '15K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Investments & Capital Markets', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Investment strategies and markets'
    },
    { 
      name: 'Corporate Finance', 
      path: '/learn/corporate-finance', 
      icon: '🏢',
      description: 'Business financial management'
    },
    { 
      name: 'Alternative Finance', 
      path: '/learn/alternative-finance', 
      icon: '🚀',
      description: 'Fintech and innovation'
    },
    { 
      name: 'Government & Public Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Public sector finance'
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

  const toggleReadMore = (id) => {
    setReadMore(prev => ({ ...prev, [id]: !prev[id] }));
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
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">International Finance</h1>
              <p className="text-blue-100">Pillar 8 of 8 • Global Financial Markets • 12 Sections • 2025 Updated</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {nextPillar ? (
                <Link
                  to={nextPillar.path}
                  className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                  Next: {nextPillar.title}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                </Link>
              ) : (
                <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg text-blue-200">
                  Final Pillar - Journey Complete!
                  <CheckCircleIcon className="h-4 w-4 ml-2" />
                </div>
              )}
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <GlobeAltIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Mobile Next Button */}
          <div className="md:hidden mt-4">
            {nextPillar ? (
              <Link
                to={nextPillar.path}
                className="flex items-center justify-center w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Next Pillar: {nextPillar.title}
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </Link>
            ) : (
              <div className="flex items-center justify-center w-full px-4 py-3 bg-white/10 rounded-lg text-blue-200">
                Final Pillar - Journey Complete!
                <CheckCircleIcon className="h-4 w-4 ml-2" />
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:flex lg:gap-8">
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

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <GlobeAltIcon className="h-4 w-4 mr-2" />
                  Related Pillars
                </h4>
                <div className="space-y-2">
                  {relatedPillars.map((pillar, index) => (
                    <Link
                      key={index}
                      to={pillar.path}
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{pillar.icon}</span>
                        <div>
                          <p className="font-medium">{pillar.name}</p>
                          <p className="text-xs opacity-75">{pillar.description}</p>
                        </div>
                      </div>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8 main-content lg:order-2">
            {/* Introduction Section */}
            {activeSection === 'introduction' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="introduction"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to International Finance</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 10 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('introduction')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('introduction') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('introduction') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('introduction')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('introduction')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is International Finance?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      International finance encompasses financial transactions, investments, and economic relationships that cross national borders. It involves currency exchange, global capital flows, international trade financing, and the management of financial risks in a globalized economy.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Global Capital Markets</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">International stock exchanges, bond markets, and cross-border investment opportunities for portfolio diversification.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Currency Exchange</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">Foreign exchange markets, currency risk management, and the impact of exchange rate fluctuations on investments.</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Trade Finance</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">International trade financing, letters of credit, and export-import business financial instruments.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Global Financial Landscape (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Market Size</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• $400+ trillion global financial assets</li>
                          <li>• $7.5 trillion daily forex trading</li>
                          <li>• $130+ trillion global bond market</li>
                          <li>• $100+ trillion global stock market</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Key Trends</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Digital currencies and CBDCs</li>
                          <li>• ESG investing growth</li>
                          <li>• Emerging market expansion</li>
                          <li>• Regulatory harmonization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      International finance opens doors to global opportunities while requiring sophisticated risk management. Understanding currency dynamics, regulatory frameworks, and market interconnections is essential for successful global investing and business operations.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('forex-markets')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Foreign Exchange Markets
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Conclusion Section */}
            {activeSection === 'conclusion' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="conclusion"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Global Strategy</h2>
                      <p className="text-gray-600 dark:text-gray-400">Resources • 10 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('conclusion')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('conclusion') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('conclusion') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('conclusion')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('conclusion')
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
                    International finance provides access to global opportunities, diversification benefits, and exposure to different economic cycles. Success requires understanding currency dynamics, regulatory frameworks, and cultural nuances while managing associated risks effectively.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      The world is increasingly interconnected, making international finance knowledge essential for modern investors and businesses. Start with developed markets, understand currency risks, and gradually expand your global footprint as you gain experience and confidence.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      to="/learn"
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Back to Learn Hub
                    </Link>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/calculators"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Explore Calculators
                      </Link>
                      <div className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg shadow-lg">
                        <span className="mr-2">🎆</span>
                        Journey Complete!
                        <CheckCircleIcon className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Final Pillar Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎆 Congratulations! You've completed all 8 Financial Pillars!</h3>
                  <p className="text-blue-100 mb-6">You've mastered the complete financial literacy journey!</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {previousPillar && (
                      <div className="text-center">
                        <p className="text-sm text-blue-200 mb-2">Previous Pillar:</p>
                        <Link
                          to={previousPillar.path}
                          className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <ArrowLeftIcon className="h-4 w-4 mr-2" />
                          {previousPillar.title}
                        </Link>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className="text-sm text-blue-200 mb-2">Continue Learning:</p>
                      <Link
                        to="/calculators"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <span className="text-2xl mr-3">🧮</span>
                        <div className="text-left">
                          <div className="text-lg">Use Our Calculators</div>
                          <div className="text-sm opacity-75">Apply your knowledge</div>
                        </div>
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
                      </Link>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-blue-200 mb-2">Or explore:</p>
                      <Link
                        to="/learn"
                        className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                      >
                        Review All Pillars
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      International Finance Tools
                    </h3>
                    <p className="text-blue-100">Navigate global markets with specialized calculators</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Currency Converter', path: '/calculators/currency-converter', icon: '💱', desc: 'Real-time exchange rates' },
                    { name: 'Global Portfolio', path: '/calculators/global-portfolio', icon: '🌍', desc: 'International diversification' },
                    { name: 'Forex Calculator', path: '/calculators/forex', icon: '📈', desc: 'Currency trading analysis' },
                    { name: 'Country Risk Assessment', path: '/calculators/country-risk', icon: '⚖️', desc: 'Political & economic risk' }
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