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
  ChartBarIcon,
  BanknotesIcon,
  HomeIcon,
  HeartIcon,
  GlobeAltIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CloudIcon,
  DocumentTextIcon,
  ScaleIcon,
  CogIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';
import { getNextPillar, getPreviousPillar } from '../../data/learningData';

export default function InvestmentsCapitalMarkets() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 4; // Investment & Wealth Building is pillar 4
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
    // Beginner Level
    { 
      id: 'introduction', 
      title: 'Introduction to Investments & Capital Markets', 
      icon: PresentationChartLineIcon, 
      emoji: '📈', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding wealth creation and financial intermediation'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Investments & Capital Markets', 
      icon: ChartBarIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of investment and trading systems'
    },
    { 
      id: 'types-investments', 
      title: 'Types of Investments', 
      icon: DocumentTextIcon, 
      emoji: '📋', 
      level: 'foundation',
      duration: '18 min read',
      difficulty: 'Beginner',
      description: 'Comprehensive investment options and instruments'
    },
    { 
      id: 'investment-principles', 
      title: 'Investment Principles', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Fundamental concepts for successful investing'
    },
    // Intermediate Level
    { 
      id: 'indian-capital-markets', 
      title: 'Indian Capital Markets', 
      icon: CurrencyRupeeIcon, 
      emoji: '🇮🇳', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'BSE, NSE, and Indian investment landscape'
    },
    { 
      id: 'global-capital-markets', 
      title: 'Global Capital Markets', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'International exchanges and cross-border investing'
    },
    { 
      id: 'investment-management', 
      title: 'Investment Management', 
      icon: CogIcon, 
      emoji: '⚙️', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Portfolio management and investment strategies'
    },
    { 
      id: 'risk-management', 
      title: 'Risk Management in Investments', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Managing investment risks and hedging strategies'
    },
    // Advanced Level
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in Investments & Capital Markets', 
      icon: SparklesIcon, 
      emoji: '🚀', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'Fintech, ESG investing, and digital transformation'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Investments & Capital Markets', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'Market volatility, fraud, and systemic risks'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Future Outlook', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '10 min read',
      difficulty: 'All Levels',
      description: 'Key insights and future of investments & capital markets'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '96%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.8', icon: StarIcon },
    { label: 'Active Learners', value: '35K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Personal Finance', 
      path: '/learn/personal-finance', 
      icon: '💰',
      description: 'Individual financial management'
    },
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Financial infrastructure and payments'
    },
    { 
      name: 'Insurance & Risk Management', 
      path: '/learn/insurance-risk-management', 
      icon: '🛡️',
      description: 'Financial protection and risk planning'
    },
    { 
      name: 'Government & Public Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Public policy and government schemes'
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-green-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Investments & Capital Markets</h1>
              <p className="text-green-100">Pillar 4 of 8 • Wealth Creation • 11 Sections • 2025 Updated</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {previousPillar && (
                <Link
                  to={previousPillar.path}
                  className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Previous: {previousPillar.title}
                </Link>
              )}
              {nextPillar && (
                <Link
                  to={nextPillar.path}
                  className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                  Next: {nextPillar.title}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                </Link>
              )}
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <PresentationChartLineIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="md:hidden mt-4 space-y-2">
            {previousPillar && (
              <Link
                to={previousPillar.path}
                className="flex items-center justify-center w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Previous: {previousPillar.title}
              </Link>
            )}
            {nextPillar && (
              <Link
                to={nextPillar.path}
                className="flex items-center justify-center w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Next Pillar: {nextPillar.title}
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:flex gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit lg:sticky top-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white flex items-center">
                  <BookmarkIcon className="h-5 w-5 mr-2" />
                  Contents
                </h3>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
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
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-l-4 border-green-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-green-200 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-600'
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
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200"
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
          <div className="flex-1 space-y-8 main-content">
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
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <PresentationChartLineIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Investments & Capital Markets</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 8 min read • Beginner</p>
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
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What are Investments & Capital Markets?
                    </h3>
                    <p className="text-green-800 dark:text-green-200 leading-relaxed">
                      Investments and capital markets play a crucial role in wealth creation, economic growth, and financial intermediation. Investments allow individuals and institutions to allocate resources for future returns, while capital markets provide a platform for trading financial instruments such as stocks, bonds, derivatives, and mutual funds. Efficient capital markets facilitate capital formation, price discovery, liquidity, and risk management, serving both investors and companies seeking funding.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Why Investments & Capital Markets Matter
                      </h4>
                      <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Wealth Creation:</strong> Generate returns above inflation for long-term financial goals</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Capital Formation:</strong> Channel savings into productive investments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Economic Growth:</strong> Fund business expansion and innovation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Risk Management:</strong> Diversify and hedge against various risks</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Indian Investment Context (2025)
                      </h4>
                      <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Market Cap:</strong> ₹350+ lakh crore combined BSE & NSE</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Retail Participation:</strong> 8+ crore demat accounts</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>SIP Growth:</strong> ₹15,000+ crore monthly SIP flows</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Digital Revolution:</strong> 90%+ trades through mobile/online</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Investments and capital markets are the engines of wealth creation and economic growth. They provide opportunities for individuals to build financial security while enabling businesses to access capital for expansion. Understanding these markets is essential for making informed financial decisions and achieving long-term prosperity.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Core Components
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Core Components Section */}
            {activeSection === 'core-components' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="core-components"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Investments & Capital Markets</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 12 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('core-components')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('core-components') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('core-components') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('core-components')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('core-components')
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
                    Capital markets consist of interconnected components that facilitate the flow of capital between savers and borrowers. Understanding these core elements is essential for navigating the investment landscape and making informed financial decisions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Equity Markets</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Platforms where ownership shares of companies are issued and traded.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Primary Market</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">IPOs, FPOs, rights issues - companies raise fresh capital</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Secondary Market</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">BSE, NSE - existing shares traded between investors</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Market Segments</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Large-cap, mid-cap, small-cap, sectoral indices</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📜 Debt Markets</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Markets for borrowing and lending via fixed-income instruments.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Government Securities</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">G-Secs, Treasury Bills, State Development Loans</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Corporate Bonds</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Debentures, commercial papers, certificates of deposit</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Credit Ratings</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">AAA to D ratings by CRISIL, ICRA, CARE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔄 Derivatives Markets</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Instruments derived from underlying assets for hedging or speculation.</p>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• <strong>Futures:</strong> Standardized contracts for future delivery</li>
                        <li>• <strong>Options:</strong> Rights to buy/sell at specific price</li>
                        <li>• <strong>Swaps:</strong> Exchange of cash flows or assets</li>
                        <li>• <strong>Forwards:</strong> Customized OTC contracts</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🎯 Mutual Funds & ETFs</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Pooled investment vehicles for diversification and professional management.</p>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• <strong>Equity Funds:</strong> Large, mid, small-cap funds</li>
                        <li>• <strong>Debt Funds:</strong> Liquid, short, long duration funds</li>
                        <li>• <strong>Hybrid Funds:</strong> Balanced equity-debt allocation</li>
                        <li>• <strong>ETFs:</strong> Exchange-traded index funds</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🏠 Alternative Investments</h3>
                      <p className="text-teal-700 dark:text-teal-300 mb-4">Non-traditional assets for portfolio diversification.</p>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• <strong>Real Estate:</strong> REITs, InvITs, direct property</li>
                        <li>• <strong>Commodities:</strong> Gold, silver, crude oil, agri</li>
                        <li>• <strong>Private Equity:</strong> Unlisted company investments</li>
                        <li>• <strong>Crypto Assets:</strong> Bitcoin, Ethereum, DeFi tokens</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Regulatory Oversight</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Ensures transparency, investor protection, and systemic stability.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Key Regulators</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• <strong>SEBI:</strong> Securities and Exchange Board of India</li>
                          <li>• <strong>RBI:</strong> Debt market and banking regulations</li>
                          <li>• <strong>IRDAI:</strong> Insurance and pension fund oversight</li>
                          <li>• <strong>FMC:</strong> Commodity derivatives regulation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Market Infrastructure</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• <strong>Depositories:</strong> NSDL, CDSL for dematerialization</li>
                          <li>• <strong>Clearing Corps:</strong> NSCCL, ICCL for settlement</li>
                          <li>• <strong>Registrars:</strong> KFintech, Link Intime for records</li>
                          <li>• <strong>Credit Agencies:</strong> CRISIL, ICRA for ratings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      These six core components work together as an integrated capital market ecosystem. Equity markets enable ownership participation, debt markets provide fixed income, derivatives offer risk management, mutual funds enable diversification, alternative investments add portfolio variety, and regulatory oversight ensures market integrity and investor protection.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('introduction')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Introduction
                    </button>
                    <button
                      onClick={() => navigateToSection('types-investments')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Types of Investments
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Investments Section */}
            {activeSection === 'types-investments' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="types-investments"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Investments</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 18 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('types-investments')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('types-investments') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('types-investments') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('types-investments')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('types-investments')
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
                    Investment options span across various asset classes, each offering different risk-return profiles, liquidity characteristics, and tax implications. Understanding these investment types helps in building a diversified portfolio aligned with financial goals and risk tolerance.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Equity Investments</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Ownership stakes in companies offering potential capital appreciation and dividends.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Direct Equity</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Large-cap Stocks:</strong> Established companies, lower volatility</li>
                          <li>• <strong>Mid-cap Stocks:</strong> Growth potential, moderate risk</li>
                          <li>• <strong>Small-cap Stocks:</strong> High growth, higher volatility</li>
                          <li>• <strong>IPOs:</strong> New public offerings, research required</li>
                          <li>• <strong>Dividend Stocks:</strong> Regular income + capital appreciation</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Equity Mutual Funds</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Index Funds:</strong> Track Nifty 50, Sensex indices</li>
                          <li>• <strong>Sectoral Funds:</strong> Banking, IT, pharma focused</li>
                          <li>• <strong>Thematic Funds:</strong> ESG, consumption, infrastructure</li>
                          <li>• <strong>ELSS:</strong> Tax-saving equity funds (80C benefit)</li>
                          <li>• <strong>International Funds:</strong> US, global market exposure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📜 Debt Investments</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Fixed-income instruments providing regular interest and capital preservation.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Government Securities</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• G-Secs: 5-40 year maturity</li>
                          <li>• Treasury Bills: 91, 182, 364 days</li>
                          <li>• State Development Loans</li>
                          <li>• Sovereign Gold Bonds</li>
                          <li>• Inflation Indexed Bonds</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Corporate Bonds</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• AAA rated: Highest safety</li>
                          <li>• AA, A rated: Good credit quality</li>
                          <li>• BBB rated: Investment grade</li>
                          <li>• Tax-free bonds: PSU issuers</li>
                          <li>• Commercial Papers: Short-term</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Bank Products</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Fixed Deposits: 5-8% returns</li>
                          <li>• Recurring Deposits: Monthly SIP</li>
                          <li>• Certificates of Deposit</li>
                          <li>• Savings Accounts: 3-4% interest</li>
                          <li>• Liquid Funds: Better than savings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔄 Derivatives</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Advanced instruments for hedging and speculation.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Futures & Options</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Index futures (Nifty, Bank Nifty)</li>
                            <li>• Stock futures (individual stocks)</li>
                            <li>• Call & Put options for hedging</li>
                            <li>• Currency derivatives (USD/INR)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Commodity Derivatives</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Gold, Silver futures</li>
                            <li>• Crude oil, Natural gas</li>
                            <li>• Agricultural commodities</li>
                            <li>• Base metals (Copper, Zinc)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔀 Hybrid Instruments</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Combining features of equity and debt investments.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Convertible Bonds</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Fixed income + equity upside</li>
                            <li>• Conversion option to shares</li>
                            <li>• Lower interest than regular bonds</li>
                            <li>• Participation in company growth</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Balanced Mutual Funds</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Aggressive Hybrid: 65-80% equity</li>
                            <li>• Conservative Hybrid: 10-25% equity</li>
                            <li>• Balanced Advantage: Dynamic allocation</li>
                            <li>• Multi-Asset: Equity, debt, gold</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Alternative Assets</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Real Estate & REITs</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Direct Property:</strong> Residential, commercial real estate</li>
                          <li>• <strong>REITs:</strong> Embassy Office Parks, Mindspace REIT</li>
                          <li>• <strong>InvITs:</strong> Infrastructure Investment Trusts</li>
                          <li>• <strong>Fractional Ownership:</strong> PropShare, Strata platforms</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Commodities & Crypto</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Precious Metals:</strong> Gold ETFs, Silver ETFs, Digital Gold</li>
                          <li>• <strong>Commodity ETFs:</strong> Crude oil, natural gas exposure</li>
                          <li>• <strong>Cryptocurrencies:</strong> Bitcoin, Ethereum (high risk)</li>
                          <li>• <strong>Private Equity:</strong> Unlisted company investments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Different investment types serve specific purposes in a portfolio. Equity investments offer growth potential, debt provides stability and income, derivatives enable hedging, hybrid instruments balance risk-return, and alternative assets add diversification. Choose investments based on your risk profile, time horizon, and financial goals.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Core Components
                    </button>
                    <button
                      onClick={() => navigateToSection('investment-principles')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Investment Principles
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investment Principles Section */}
            {activeSection === 'investment-principles' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="investment-principles"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <ScaleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Investment Principles</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('investment-principles')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('investment-principles') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('investment-principles') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('investment-principles')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('investment-principles')
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
                    Successful investing is built on fundamental principles that guide decision-making and portfolio construction. These time-tested concepts help investors navigate market volatility, manage risk, and achieve long-term financial objectives.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Risk & Return Trade-off</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Higher potential returns generally come with higher risk - the fundamental principle of investing.</p>
                    
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-green-600 dark:text-green-300 font-bold text-sm">Low</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Conservative</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">FD, Savings: 3-7% returns</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-yellow-600 dark:text-yellow-300 font-bold text-sm">Mod</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Moderate</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Debt Funds: 6-9% returns</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-orange-600 dark:text-orange-300 font-bold text-sm">High</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Aggressive</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Equity: 10-15% returns</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-600 dark:text-red-300 font-bold text-sm">V.High</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Speculative</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Crypto, F&O: Volatile</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🎯 Diversification</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Spreading investments across asset classes to reduce risk.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Asset Class Diversification</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Equity, debt, gold, real estate - different asset classes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Geographic Diversification</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Domestic and international markets exposure</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Sector Diversification</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Banking, IT, pharma, FMCG - multiple sectors</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📊 Asset Allocation</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Balancing investments based on risk profile and goals.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Age-based Formula</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Equity % = 100 - Age (e.g., 30 years = 70% equity)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Goal-based Allocation</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Short-term: Debt, Long-term: Equity heavy</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Risk Tolerance</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Conservative, Moderate, Aggressive allocation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Time Horizon & Goals</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Matching investment strategies to short-term, medium-term, or long-term objectives.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Short-term (&lt;3 years)</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• <strong>Goals:</strong> Emergency fund, vacation</li>
                          <li>• <strong>Instruments:</strong> Liquid funds, FDs</li>
                          <li>• <strong>Priority:</strong> Capital preservation</li>
                          <li>• <strong>Returns:</strong> 4-7% expected</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Medium-term (3-7 years)</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• <strong>Goals:</strong> Car, house down payment</li>
                          <li>• <strong>Instruments:</strong> Hybrid funds, debt funds</li>
                          <li>• <strong>Priority:</strong> Balanced growth</li>
                          <li>• <strong>Returns:</strong> 7-10% expected</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Long-term (7+ years)</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• <strong>Goals:</strong> Retirement, child education</li>
                          <li>• <strong>Instruments:</strong> Equity funds, stocks</li>
                          <li>• <strong>Priority:</strong> Wealth creation</li>
                          <li>• <strong>Returns:</strong> 10-15% expected</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">💧 Liquidity Considerations</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">High Liquidity</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Savings, liquid funds - instant access</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Medium Liquidity</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Stocks, mutual funds - T+2 settlement</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Low Liquidity</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Real estate, PPF - lock-in periods</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔄 Regular Review & Rebalancing</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Annual Review</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Check portfolio performance vs benchmarks</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Rebalancing Triggers</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">When allocation deviates by 5-10%</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Life Changes</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Marriage, job change, goal updates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                      Successful investing follows proven principles: balance risk and return, diversify across assets, allocate based on goals and time horizon, maintain adequate liquidity, and regularly review your portfolio. These fundamentals help navigate market volatility and achieve long-term financial success.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('types-investments')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Types of Investments
                    </button>
                    <button
                      onClick={() => navigateToSection('indian-capital-markets')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Indian Capital Markets
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Indian Capital Markets Section */}
            {activeSection === 'indian-capital-markets' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="indian-capital-markets"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <CurrencyRupeeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Indian Capital Markets</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('indian-capital-markets')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('indian-capital-markets') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('indian-capital-markets') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('indian-capital-markets')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('indian-capital-markets')
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
                    Indian capital markets have evolved into one of the world's largest and most sophisticated financial ecosystems. With robust regulatory frameworks, advanced technology infrastructure, and growing retail participation, India offers diverse investment opportunities across equity, debt, and derivative markets.
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Stock Exchanges</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">BSE (Bombay Stock Exchange)</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Established:</strong> 1875 - Asia's oldest stock exchange</li>
                          <li>• <strong>Market Cap:</strong> ₹280+ lakh crore (2025)</li>
                          <li>• <strong>Listed Companies:</strong> 5,000+ companies</li>
                          <li>• <strong>Benchmark Index:</strong> Sensex (30 companies)</li>
                          <li>• <strong>Trading Hours:</strong> 9:15 AM to 3:30 PM</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">NSE (National Stock Exchange)</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Established:</strong> 1992 - Electronic trading pioneer</li>
                          <li>• <strong>Market Cap:</strong> ₹320+ lakh crore (2025)</li>
                          <li>• <strong>Listed Companies:</strong> 2,000+ companies</li>
                          <li>• <strong>Benchmark Index:</strong> Nifty 50 (50 companies)</li>
                          <li>• <strong>Derivatives Volume:</strong> World's largest by contracts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📜 Debt Markets</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Government Securities</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• G-Secs: ₹120+ lakh crore outstanding</li>
                            <li>• Treasury Bills: 91, 182, 364 days</li>
                            <li>• State Development Loans (SDLs)</li>
                            <li>• Inflation Indexed Bonds (IIBs)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Corporate Bonds</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Outstanding: ₹45+ lakh crore</li>
                            <li>• Public Issues: ₹8+ lakh crore annually</li>
                            <li>• Private Placements: 90% of issuances</li>
                            <li>• Credit Ratings: CRISIL, ICRA, CARE</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🎯 Mutual Funds</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Industry Size (2025)</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• AUM: ₹55+ lakh crore</li>
                            <li>• SIP Accounts: 8+ crore</li>
                            <li>• Monthly SIP Flow: ₹18,000+ crore</li>
                            <li>• Fund Houses: 45+ AMCs</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Popular Categories</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Equity Funds: Large, Mid, Small Cap</li>
                            <li>• Index Funds: Nifty 50, Sensex tracking</li>
                            <li>• ELSS: Tax-saving equity funds</li>
                            <li>• Debt Funds: Liquid, Ultra Short, Long Duration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Investor Protection & Regulations</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">SEBI ensures market integrity, transparency, and investor protection through comprehensive regulations.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">SEBI Guidelines</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Mutual fund regulations</li>
                          <li>• Insider trading prevention</li>
                          <li>• Market manipulation control</li>
                          <li>• Disclosure requirements</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">KYC Norms</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Aadhaar-based eKYC</li>
                          <li>• Video-based KYC (V-CIP)</li>
                          <li>• Central KYC Registry</li>
                          <li>• Risk-based KYC</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Investor Grievances</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• SEBI SCORES portal</li>
                          <li>• Ombudsman mechanism</li>
                          <li>• Investor Protection Fund</li>
                          <li>• Arbitration process</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Popular Instruments for Retail Investors</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Systematic Investment Plans (SIPs)</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Monthly SIP:</strong> ₹500 minimum investment</li>
                          <li>• <strong>Step-up SIP:</strong> Annual increase option</li>
                          <li>• <strong>Flexible SIP:</strong> Variable amount facility</li>
                          <li>• <strong>SIP Returns:</strong> 12-15% CAGR (equity funds, long-term)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Government Schemes</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>PPF:</strong> 15-year lock-in, 7.1% current rate</li>
                          <li>• <strong>ELSS:</strong> 3-year lock-in, 80C tax benefit</li>
                          <li>• <strong>Gold ETFs:</strong> Digital gold investment</li>
                          <li>• <strong>Sovereign Gold Bonds:</strong> 2.5% interest + gold returns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      Indian capital markets offer world-class infrastructure with BSE and NSE providing access to diverse investment opportunities. Strong regulatory oversight by SEBI, growing retail participation through SIPs, and digital innovation make India an attractive investment destination for both domestic and international investors.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('investment-principles')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Investment Principles
                    </button>
                    <button
                      onClick={() => navigateToSection('global-capital-markets')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Global Capital Markets
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Global Capital Markets Section */}
            {activeSection === 'global-capital-markets' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="global-capital-markets"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-xl">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Global Capital Markets</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('global-capital-markets')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('global-capital-markets') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('global-capital-markets') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('global-capital-markets')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('global-capital-markets')
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
                    Global capital markets provide access to international investment opportunities, enabling portfolio diversification across geographies, currencies, and economic cycles. Understanding major exchanges, international instruments, and cross-border investment mechanisms is crucial for global wealth creation.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Major Stock Exchanges</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">United States</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">NYSE (New York Stock Exchange)</h5>
                            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                              <li>• Market Cap: $28+ trillion</li>
                              <li>• Listed Companies: 2,400+</li>
                              <li>• Index: Dow Jones, S&P 500</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">NASDAQ</h5>
                            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                              <li>• Tech-focused exchange</li>
                              <li>• Companies: Apple, Microsoft, Google</li>
                              <li>• Index: NASDAQ Composite</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Other Major Exchanges</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">LSE (London Stock Exchange)</h5>
                            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                              <li>• Market Cap: $4+ trillion</li>
                              <li>• Index: FTSE 100</li>
                              <li>• Global financial hub</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Tokyo, Hong Kong, Frankfurt</h5>
                            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                              <li>• Nikkei 225, Hang Seng, DAX</li>
                              <li>• Regional market leaders</li>
                              <li>• Different time zones coverage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌍 International Bonds & ETFs</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Sovereign Bonds</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• US Treasury Bonds: 10-year benchmark</li>
                            <li>• German Bunds: European safe haven</li>
                            <li>• Japanese Government Bonds (JGBs)</li>
                            <li>• UK Gilts: Pound-denominated bonds</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Global ETFs</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• SPDR S&P 500 ETF (SPY)</li>
                            <li>• iShares MSCI Emerging Markets</li>
                            <li>• Vanguard Total World Stock ETF</li>
                            <li>• Commodity ETFs (Gold, Oil, Silver)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔄 Derivative Markets</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Major Exchanges</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• CME Group (USA): Futures & options</li>
                            <li>• Eurex (Europe): European derivatives</li>
                            <li>• ICE (Intercontinental Exchange)</li>
                            <li>• MCX (India): Commodity derivatives</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Popular Instruments</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• S&P 500 Futures & Options</li>
                            <li>• Currency Futures (EUR/USD, GBP/USD)</li>
                            <li>• Commodity Futures (Gold, Crude Oil)</li>
                            <li>• Interest Rate Derivatives</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Cross-Border Investments</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Various mechanisms enable international investment and portfolio diversification.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Foreign Portfolio Investment (FPI)</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Direct investment in foreign stocks</li>
                          <li>• Liberalized Remittance Scheme (LRS)</li>
                          <li>• $250,000 annual limit for Indians</li>
                          <li>• Currency risk exposure</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">ADRs/GDRs</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• American/Global Depositary Receipts</li>
                          <li>• Indian companies on US exchanges</li>
                          <li>• Infosys, HDFC Bank, Wipro ADRs</li>
                          <li>• Easier access for foreign investors</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">International Mutual Funds</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Feeder funds investing abroad</li>
                          <li>• US equity funds, global funds</li>
                          <li>• Professional currency hedging</li>
                          <li>• Regulatory compliance handled</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Global Investment Considerations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Benefits</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Diversification:</strong> Reduce country-specific risks</li>
                          <li>• <strong>Growth Access:</strong> Tap into global growth stories</li>
                          <li>• <strong>Currency Hedge:</strong> Natural hedge against rupee depreciation</li>
                          <li>• <strong>Innovation Exposure:</strong> Access to global tech leaders</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Risks & Challenges</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Currency Risk:</strong> Exchange rate fluctuations</li>
                          <li>• <strong>Regulatory Risk:</strong> Different country regulations</li>
                          <li>• <strong>Tax Complexity:</strong> Double taxation issues</li>
                          <li>• <strong>Information Gap:</strong> Limited local market knowledge</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Global capital markets offer vast opportunities for diversification and growth through major exchanges like NYSE, NASDAQ, and LSE. International investments via FPI, ADRs, or global mutual funds can enhance portfolio returns while providing currency hedging, but require careful consideration of risks and regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('indian-capital-markets')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Indian Capital Markets
                    </button>
                    <button
                      onClick={() => navigateToSection('investment-management')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Investment Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investment Management Section */}
            {activeSection === 'investment-management' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="investment-management"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <CogIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Investment Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('investment-management')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('investment-management') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('investment-management') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('investment-management')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('investment-management')
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
                    Investment management involves professional or self-directed strategies for portfolio construction, risk management, and goal achievement. It encompasses asset allocation, security selection, performance monitoring, and regular rebalancing to optimize returns while managing risk.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Portfolio Management</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Systematic approach to building and managing investment portfolios.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Professional Management</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Portfolio Management Services (PMS):</strong> ₹50 lakh minimum</li>
                          <li>• <strong>Mutual Fund Managers:</strong> Professional fund management</li>
                          <li>• <strong>Wealth Managers:</strong> Holistic financial planning</li>
                          <li>• <strong>Robo-Advisors:</strong> Algorithm-based portfolio management</li>
                          <li>• <strong>Family Offices:</strong> Ultra-high net worth services</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Self-Directed Management</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>DIY Investing:</strong> Direct stock and fund selection</li>
                          <li>• <strong>Online Platforms:</strong> Zerodha, Groww, Upstox</li>
                          <li>• <strong>Research Tools:</strong> Screeners, analysis platforms</li>
                          <li>• <strong>Goal-based Planning:</strong> SIP calculators, planners</li>
                          <li>• <strong>Tax Optimization:</strong> ELSS, tax-loss harvesting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🎯 Active vs Passive Investing</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Active Investing</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Stock picking and market timing</li>
                            <li>• Frequent trading and rebalancing</li>
                            <li>• Higher fees and transaction costs</li>
                            <li>• Potential to outperform markets</li>
                            <li>• Requires research and expertise</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Passive Investing</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Index tracking and buy-and-hold</li>
                            <li>• Lower costs and minimal trading</li>
                            <li>• Market returns with diversification</li>
                            <li>• Suitable for long-term investors</li>
                            <li>• Index funds and ETFs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📊 Performance Metrics</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Return Measures</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• <strong>ROI:</strong> Return on Investment percentage</li>
                            <li>• <strong>CAGR:</strong> Compound Annual Growth Rate</li>
                            <li>• <strong>Absolute Return:</strong> Total return over period</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Risk-Adjusted Metrics</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• <strong>Sharpe Ratio:</strong> Return per unit of risk</li>
                            <li>• <strong>Alpha:</strong> Excess return vs benchmark</li>
                            <li>• <strong>Beta:</strong> Volatility relative to market</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Fund Types</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Mutual Funds</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Equity, debt, hybrid funds</li>
                          <li>• Professional management</li>
                          <li>• Diversification benefits</li>
                          <li>• SIP and lumpsum options</li>
                          <li>• SEBI regulated</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Hedge Funds</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Alternative investment strategies</li>
                          <li>• High minimum investments</li>
                          <li>• Absolute return focus</li>
                          <li>• Limited regulatory oversight</li>
                          <li>• Sophisticated investors only</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Pension Funds</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Retirement-focused investing</li>
                          <li>• Long-term investment horizon</li>
                          <li>• Conservative allocation</li>
                          <li>• EPF, NPS, corporate pensions</li>
                          <li>• Tax-advantaged growth</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Rebalancing & Monitoring</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Rebalancing Strategies</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Calendar Rebalancing:</strong> Annual or quarterly review</li>
                          <li>• <strong>Threshold Rebalancing:</strong> When allocation deviates 5-10%</li>
                          <li>• <strong>Tactical Rebalancing:</strong> Market condition based</li>
                          <li>• <strong>Tax-Loss Harvesting:</strong> Optimize tax implications</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Monitoring Tools</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Portfolio Trackers:</strong> Kuvera, ET Money, Groww</li>
                          <li>• <strong>Performance Analytics:</strong> Returns vs benchmarks</li>
                          <li>• <strong>Risk Metrics:</strong> Volatility, drawdown analysis</li>
                          <li>• <strong>Goal Tracking:</strong> Progress towards financial goals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-teal-700 dark:text-teal-300 text-sm">
                      Effective investment management combines strategic asset allocation, appropriate fund selection, regular monitoring, and disciplined rebalancing. Whether through professional management or self-directed investing, success depends on clear goals, risk management, and long-term perspective.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('global-capital-markets')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Global Capital Markets
                    </button>
                    <button
                      onClick={() => navigateToSection('risk-management')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Risk Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Risk Management Section */}
            {activeSection === 'risk-management' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="risk-management"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risk Management in Investments</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('risk-management')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('risk-management') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('risk-management') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('risk-management')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('risk-management')
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
                    Investment risk management involves identifying, measuring, and controlling various types of risks that can impact portfolio performance. Effective risk management helps preserve capital, reduce volatility, and achieve consistent returns over time.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Market Risk</h3>
                      <p className="text-red-700 dark:text-red-300 mb-4">Price fluctuations due to overall market movements and economic factors.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Systematic Risk</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Economic recessions and market crashes</li>
                            <li>• Interest rate changes by central banks</li>
                            <li>• Inflation and currency fluctuations</li>
                            <li>• Political instability and policy changes</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Unsystematic Risk</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Company-specific events and performance</li>
                            <li>• Industry sector challenges</li>
                            <li>• Management decisions and governance</li>
                            <li>• Competitive pressures and disruption</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">💳 Credit Risk</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Risk of default in debt instruments and fixed-income investments.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Corporate Bonds</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Credit rating downgrades (AAA to BBB)</li>
                            <li>• Default risk in lower-rated bonds</li>
                            <li>• Sector-specific credit challenges</li>
                            <li>• Economic cycle impact on defaults</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Mitigation Strategies</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Invest in high-rated bonds (AAA/AA)</li>
                            <li>• Diversify across issuers and sectors</li>
                            <li>• Monitor credit ratings regularly</li>
                            <li>• Use government securities for safety</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Liquidity & Interest Rate Risk</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Liquidity Risk</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Difficulty in selling assets without significant loss.</p>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• <strong>High Liquidity:</strong> Large-cap stocks, liquid funds</li>
                          <li>• <strong>Medium Liquidity:</strong> Mid-cap stocks, corporate bonds</li>
                          <li>• <strong>Low Liquidity:</strong> Small-cap stocks, real estate</li>
                          <li>• <strong>Illiquid:</strong> Private equity, unlisted securities</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Interest Rate Risk</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Impact on bond prices and fixed-income investments.</p>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• <strong>Duration Risk:</strong> Long-term bonds more sensitive</li>
                          <li>• <strong>Reinvestment Risk:</strong> Lower rates on maturity</li>
                          <li>• <strong>Yield Curve Risk:</strong> Shape changes impact returns</li>
                          <li>• <strong>Hedging:</strong> Floating rate bonds, short duration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Hedging Strategies</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Derivatives Hedging</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Put options for downside protection</li>
                          <li>• Futures for portfolio hedging</li>
                          <li>• Currency hedging for international investments</li>
                          <li>• Interest rate swaps for duration risk</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Diversification</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Asset class diversification</li>
                          <li>• Geographic diversification</li>
                          <li>• Sector and style diversification</li>
                          <li>• Time diversification (SIP)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Asset Allocation</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Strategic asset allocation</li>
                          <li>• Tactical allocation adjustments</li>
                          <li>• Risk parity approaches</li>
                          <li>• Dynamic rebalancing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Risk Measurement Tools</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Statistical Measures</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Standard Deviation:</strong> Volatility measurement</li>
                          <li>• <strong>Beta:</strong> Systematic risk vs market</li>
                          <li>• <strong>Value at Risk (VaR):</strong> Potential loss estimation</li>
                          <li>• <strong>Maximum Drawdown:</strong> Peak-to-trough decline</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Risk-Adjusted Returns</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Sharpe Ratio:</strong> Return per unit of total risk</li>
                          <li>• <strong>Treynor Ratio:</strong> Return per unit of systematic risk</li>
                          <li>• <strong>Information Ratio:</strong> Active return vs tracking error</li>
                          <li>• <strong>Sortino Ratio:</strong> Downside deviation focus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Investment risk management requires understanding different risk types - market, credit, liquidity, and interest rate risks. Effective strategies include diversification, hedging with derivatives, appropriate asset allocation, and regular monitoring using statistical measures to optimize risk-adjusted returns.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('investment-management')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Investment Management
                    </button>
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Modern Trends
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Modern Trends Section */}
            {activeSection === 'modern-trends' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="modern-trends"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in Investment</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 20 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('modern-trends')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('modern-trends') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('modern-trends') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('modern-trends')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('modern-trends')
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
                    The investment landscape is rapidly evolving with technological innovations, changing investor preferences, and new asset classes. Understanding these modern trends is crucial for staying ahead in the dynamic world of investments and capital markets.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🚀 Technology Revolution</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Digital transformation reshaping investment landscape with AI, blockchain, and robo-advisors.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Robo-Advisors</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Automated portfolio management</li>
                          <li>• Low-cost investment solutions</li>
                          <li>• Algorithm-based rebalancing</li>
                          <li>• 24/7 accessibility</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Mobile Trading</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Zero-commission trading</li>
                          <li>• Real-time market data</li>
                          <li>• Social trading features</li>
                          <li>• Fractional investing</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">AI & Analytics</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Predictive analytics</li>
                          <li>• Risk assessment tools</li>
                          <li>• Sentiment analysis</li>
                          <li>• Personalized recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌱 ESG Investing</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Environmental, Social, and Governance factors driving sustainable investment decisions.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">ESG Criteria</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Environmental:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Climate change, pollution, renewable energy, waste management</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Social:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Labor practices, community relations, diversity, human rights</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Governance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Board composition, executive compensation, transparency, ethics</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Market Growth (2025)</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between bg-white dark:bg-gray-700 p-2 rounded">
                            <span className="text-sm">Global ESG Assets</span>
                            <span className="font-semibold">$53 trillion</span>
                          </div>
                          <div className="flex justify-between bg-white dark:bg-gray-700 p-2 rounded">
                            <span className="text-sm">India ESG Funds AUM</span>
                            <span className="font-semibold">₹45,000 crores</span>
                          </div>
                          <div className="flex justify-between bg-white dark:bg-gray-700 p-2 rounded">
                            <span className="text-sm">Annual Growth Rate</span>
                            <span className="font-semibold">15-20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">₿ Cryptocurrency & Digital Assets</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Digital Asset Classes</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                            <span className="text-sm"><strong>Bitcoin:</strong> Digital gold, store of value</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span className="text-sm"><strong>Ethereum:</strong> Smart contracts platform</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            <span className="text-sm"><strong>Stablecoins:</strong> Price-stable cryptocurrencies</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            <span className="text-sm"><strong>NFTs:</strong> Non-fungible tokens</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Indian Crypto Market (2025)</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Active Users</span>
                              <span className="font-semibold">15+ million</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Market Size</span>
                              <span className="font-semibold">$6.6 billion</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Tax Rate</span>
                              <span className="font-semibold">30% + 1% TDS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Alternative Investment Platforms</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">P2P Lending</h4>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                          <li>• Direct lending to individuals</li>
                          <li>• Returns: 12-18% annually</li>
                          <li>• Minimum: ₹1,000</li>
                          <li>• Platforms: Faircent, LenDenClub</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Crowdfunding</h4>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                          <li>• Startup investments</li>
                          <li>• Real estate projects</li>
                          <li>• Creative ventures</li>
                          <li>• Social impact projects</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Fractional Investing</h4>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                          <li>• Partial ownership in assets</li>
                          <li>• Real estate, art, collectibles</li>
                          <li>• Lower entry barriers</li>
                          <li>• Diversification benefits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Modern investment trends are driven by technology, sustainability, and accessibility. Robo-advisors democratize professional management, ESG investing aligns values with returns, cryptocurrencies offer new asset classes, and alternative platforms provide diverse opportunities for all investor types.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('risk-management')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Risk Management
                    </button>
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Challenges
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Challenges Section */}
            {activeSection === 'challenges' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="challenges"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                      <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges and Future Outlook</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 14 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('challenges')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('challenges') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('challenges') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('challenges')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('challenges')
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
                    Investment markets face evolving challenges from market volatility, regulatory changes, and technological disruptions. Understanding these challenges and future trends helps investors prepare for emerging opportunities and risks.
                  </p>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Market Challenges</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Volatility & Risk</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Market Volatility:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Increased frequency of market swings, flash crashes, and extreme price movements</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Geopolitical Risks:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Trade wars, sanctions, political instability affecting global markets</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Inflation Concerns:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Rising inflation eroding real returns, central bank policy uncertainties</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Regulatory Challenges</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Crypto Regulations:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unclear regulatory framework for digital assets in India</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Tax Changes:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Frequent modifications in capital gains tax, LTCG rates</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Compliance Costs:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Increasing regulatory compliance burden for financial institutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔒 Technology & Security Challenges</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Cybersecurity</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Data breaches & hacking</li>
                          <li>• Identity theft risks</li>
                          <li>• Platform security vulnerabilities</li>
                          <li>• Phishing & social engineering</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Technology Risks</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• System failures & downtime</li>
                          <li>• Algorithm bias & errors</li>
                          <li>• High-frequency trading risks</li>
                          <li>• Digital divide issues</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Market Structure</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Market manipulation risks</li>
                          <li>• Liquidity concerns</li>
                          <li>• Information asymmetry</li>
                          <li>• Systemic risks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔮 Future Investment Landscape</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Emerging Trends (2025-2030)</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="text-2xl mr-3">🤖</span>
                            <div>
                              <strong className="text-blue-700">AI-Driven Investing</strong>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Machine learning algorithms for portfolio optimization</p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="text-2xl mr-3">🌐</span>
                            <div>
                              <strong className="text-green-700">Decentralized Finance</strong>
                              <p className="text-sm text-gray-600 dark:text-gray-400">DeFi protocols replacing traditional financial intermediaries</p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="text-2xl mr-3">🎯</span>
                            <div>
                              <strong className="text-purple-700">Personalized Investing</strong>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Hyper-personalized investment solutions based on individual data</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Market Projections</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Indian Mutual Fund AUM (2030)</span>
                              <span className="font-semibold">₹100+ lakh crores</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Retail Investor Base</span>
                              <span className="font-semibold">200+ million</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Digital Investment Adoption</span>
                              <span className="font-semibold">80%+</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">ESG Investment Share</span>
                              <span className="font-semibold">25-30%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💡 Opportunities & Solutions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Innovation Areas</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                            <div>
                              <strong className="text-sm">Quantum Computing:</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Revolutionary portfolio optimization and risk modeling</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                            <div>
                              <strong className="text-sm">Blockchain Integration:</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Transparent, secure, and efficient settlement systems</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                            <div>
                              <strong className="text-sm">IoT & Real-time Data:</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Real-time asset monitoring and dynamic pricing</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Strategic Recommendations</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Diversification:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Spread investments across asset classes, geographies, and time</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Continuous Learning:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Stay updated with market trends and new investment opportunities</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Risk Management:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Implement robust risk assessment and mitigation strategies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Investment challenges include market volatility, regulatory uncertainty, and technology risks. However, emerging trends like AI-driven investing, DeFi, and personalized solutions offer new opportunities. Success requires adaptability, continuous learning, and robust risk management.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Modern Trends
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Next: Conclusion
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion</h2>
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
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">🎯 Key Takeaways</h3>
                    <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                      Investments and capital markets form the backbone of economic growth and individual wealth creation. 
                      Understanding these concepts is crucial for making informed financial decisions and achieving long-term financial goals.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Essential Investment Principles</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Fundamental Rules</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-700">Start Early</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Time is your greatest asset. The power of compounding works best over long periods.</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-700">Diversify Wisely</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Don't put all eggs in one basket. Spread risk across different asset classes.</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
                            <h5 className="font-semibold text-purple-700">Stay Disciplined</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Stick to your investment plan. Avoid emotional decisions during market volatility.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Success Factors</h4>
                        <div className="space-y-2">
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">📚</span>
                            <div>
                              <strong className="text-sm">Continuous Education</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Keep learning about markets and new opportunities</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🎯</span>
                            <div>
                              <strong className="text-sm">Clear Goals</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Define specific, measurable financial objectives</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div>
                              <strong className="text-sm">Risk Assessment</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Understand and manage your risk tolerance</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🔄</span>
                            <div>
                              <strong className="text-sm">Regular Review</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Periodically assess and rebalance your portfolio</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">The Indian Investment Opportunity</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">7-8%</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Expected GDP Growth</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Sustained economic expansion</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">1.4B+</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Population</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Largest consumer market</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Young Demographics</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Under 35 years age</div>
                      </div>
                    </div>
                    <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 text-center">
                        <strong>India is positioned to become a $5 trillion economy by 2027-28,</strong> 
                        offering tremendous investment opportunities across sectors like technology, healthcare, 
                        infrastructure, and renewable energy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Your Investment Journey</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Set Goals</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Define clear financial objectives and timelines</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Assess Risk</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Understand your risk tolerance and capacity</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">💼</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Build Portfolio</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Create diversified investment portfolio</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🔄</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Monitor & Adjust</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Regular review and rebalancing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-8">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Final Recommendations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">For Beginners</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Start with SIP in diversified mutual funds</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Build emergency fund (6-12 months expenses)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Take adequate life and health insurance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Educate yourself continuously</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">For Experienced Investors</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Explore alternative investments (REITs, InvITs)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Consider international diversification</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Implement tax-efficient strategies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                            <span className="text-sm">Stay updated with regulatory changes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 p-8 rounded-xl text-center border border-green-200 dark:border-green-700">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">🚀 Start Your Investment Journey Today!</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      Remember: The best time to plant a tree was 20 years ago. The second best time is now.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-blue-600">💡 Knowledge is Power</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-green-600">⏰ Time is Money</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-purple-600">🎯 Goals Drive Success</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Challenges
                    </button>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        Back to Learn Hub
                      </Link>
                      {nextPillar && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                          <Link
                            to={nextPillar.path}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            <span className="mr-2">{nextPillar.icon}</span>
                            {nextPillar.title}
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Next Pillar Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎉 Congratulations! You've completed Investment & Wealth Building</h3>
                  <p className="text-green-100 mb-6">Ready to continue your financial learning journey?</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {previousPillar && (
                      <div className="text-center">
                        <p className="text-sm text-green-200 mb-2">Previous Pillar:</p>
                        <Link
                          to={previousPillar.path}
                          className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <ArrowLeftIcon className="h-4 w-4 mr-2" />
                          {previousPillar.title}
                        </Link>
                      </div>
                    )}
                    
                    {nextPillar && (
                      <div className="text-center">
                        <p className="text-sm text-green-200 mb-2">Next Pillar:</p>
                        <Link
                          to={nextPillar.path}
                          className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <span className="text-2xl mr-3">🏛️</span>
                          <div className="text-left">
                            <div className="text-lg">{nextPillar.title}</div>
                            <div className="text-sm opacity-75">Pillar 5 of 8</div>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
                        </Link>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className="text-sm text-green-200 mb-2">Or explore:</p>
                      <Link
                        to="/learn"
                        className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                      >
                        All 8 Pillars
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
              className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Investment & Capital Market Tools
                    </h3>
                    <p className="text-green-100">Calculate returns, analyze investments, and plan your portfolio</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'SIP Calculator', path: '/calculators/sip', icon: '📈', desc: 'Systematic investment planning' },
                    { name: 'Lumpsum Calculator', path: '/calculators/lumpsum', icon: '💰', desc: 'One-time investment returns' },
                    { name: 'Goal Planning', path: '/calculators/goal-planning', icon: '🎯', desc: 'Financial goal calculator' },
                    { name: 'Step-up SIP', path: '/calculators/step-up-sip', icon: '📊', desc: 'Increasing SIP calculator' },
                    { name: 'FD Calculator', path: '/calculators/fd', icon: '🏦', desc: 'Fixed deposit returns' },
                    { name: 'PPF Calculator', path: '/calculators/ppf', icon: '🛡️', desc: 'Public Provident Fund' },
                    { name: 'NSC Calculator', path: '/calculators/nsc', icon: '📜', desc: 'National Savings Certificate' },
                    { name: 'Portfolio Analyzer', path: '/tools/portfolio-analyzer', icon: '⚖️', desc: 'Investment portfolio analysis' }
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
                        <p className="text-xs text-green-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-green-200">
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