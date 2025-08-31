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
  ShieldCheckIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  ChartPieIcon,
  CubeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ArrowsRightLeftIcon,
  TruckIcon,
  MapIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function InternationalFinanceTrade() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
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
    // Foundation Level
    { 
      id: 'introduction', 
      title: 'Introduction to International Finance & Trade', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Global financial flows, investments, and cross-border transactions'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of International Finance & Trade', 
      icon: CubeIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of global finance and trade'
    },
    { 
      id: 'forex-markets', 
      title: 'Foreign Exchange Markets', 
      icon: ArrowsRightLeftIcon, 
      emoji: '💱', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Currency trading and exchange rate management'
    },
    { 
      id: 'global-capital-flows', 
      title: 'Global Capital Flows', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'FDI, portfolio investments, and remittances'
    },
    { 
      id: 'international-trade', 
      title: 'International Trade', 
      icon: TruckIcon, 
      emoji: '🚛', 
      level: 'intermediate',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'Import-export, trade agreements, and global supply chains'
    },
    { 
      id: 'mncs', 
      title: 'Multinational Corporations (MNCs)', 
      icon: BuildingOfficeIcon, 
      emoji: '🏢', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Global strategy, financing, and risk management'
    },
    { 
      id: 'trade-financing', 
      title: 'Trade Financing & Payment Methods', 
      icon: CreditCardIcon, 
      emoji: '💳', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Letters of credit, payment systems, and risk mitigation'
    },
    { 
      id: 'regulatory-framework', 
      title: 'Regulatory Framework and Global Institutions', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'IMF, World Bank, WTO, and compliance requirements'
    },
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in International Finance & Trade', 
      icon: SparklesIcon, 
      emoji: '✨', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Digital trade, fintech, ESG investing, and geopolitical risks'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in International Finance & Trade', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Currency volatility, political risks, and supply chain disruptions'
    },
    { 
      id: 'conclusion', 
      title: 'Conclusion', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '8 min read',
      difficulty: 'All Levels',
      description: 'Future of international finance and global economic integration'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '94%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.7', icon: StarIcon },
    { label: 'Active Learners', value: '28K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Financial infrastructure and services'
    },
    { 
      name: 'Government & Public Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Public policy and fiscal management'
    },
    { 
      name: 'Corporate Finance & Business', 
      path: '/learn/corporate-finance', 
      icon: '🏢',
      description: 'Business finance and management'
    },
    { 
      name: 'Alternative Finance & Emerging Tech', 
      path: '/learn/alternative-finance', 
      icon: '🚀',
      description: 'Fintech and innovative finance'
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
    setTimeout(() => {
      const sectionElement = document.querySelector(`[data-section="${sectionId}"]`);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset + rect.top - 100;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }, 100);
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">International Finance & Trade</h1>
              <p className="text-blue-100">Pillar 8 of 8 • Global Markets • 11 Sections • 2025 Updated</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/learn/personal-finance"
                className="hidden md:flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors group"
              >
                <span className="mr-2">Next: Personal Finance</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="hidden md:block">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <GlobeAltIcon className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit sticky top-8 border border-gray-200 dark:border-gray-700">
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
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to International Finance & Trade</h2>
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
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is International Finance & Trade?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      International finance and trade encompass the management of financial flows, investments, and transactions across national borders. This field involves currency exchange, global capital markets, international trade agreements, foreign investment, and risk management. Efficient international finance and trade are critical for economic growth, globalization, and integration of economies, enabling countries, businesses, and individuals to participate in global markets.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Key Benefits of Global Finance
                      </h4>
                      <ul className="space-y-3 text-green-700 dark:text-green-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Economic Growth:</strong> Access to global capital and markets</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Risk Diversification:</strong> Spreading investments across countries</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Technology Transfer:</strong> Knowledge and innovation sharing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Competitive Advantage:</strong> Specialization and efficiency gains</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        India's Global Trade Position (2025)
                      </h4>
                      <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Trade Volume:</strong> $1.2+ trillion merchandise trade</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>FDI Inflows:</strong> $80+ billion annually</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Forex Reserves:</strong> $650+ billion (4th largest globally)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Remittances:</strong> $110+ billion from diaspora</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      International finance and trade are the backbone of global economic integration, enabling countries to leverage comparative advantages, access capital, and participate in global value chains. Understanding these mechanisms is crucial for businesses, investors, and policymakers in today's interconnected world.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl">
                      <CubeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of International Finance & Trade</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 12 min read • Beginner</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">💱 Foreign Exchange (Forex)</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Markets for trading currencies and managing exchange rate risk.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Daily Volume:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$7.5 trillion traded globally</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Major Pairs:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">USD/EUR, USD/JPY, GBP/USD</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📊 Global Capital Flows</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Cross-border investments including FDI, portfolio investments, and remittances.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">FDI Global:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$1.3 trillion annual flows</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Remittances:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$800+ billion to developing countries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🚚 International Trade</h3>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• <strong>Merchandise:</strong> $28 trillion globally</li>
                        <li>• <strong>Services:</strong> $7 trillion annually</li>
                        <li>• <strong>Agreements:</strong> WTO, RCEP, USMCA</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏢 MNCs</h3>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• <strong>Global Strategy:</strong> Market entry, M&A</li>
                        <li>• <strong>Risk Management:</strong> Currency, political</li>
                        <li>• <strong>Tax Planning:</strong> Transfer pricing</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">💳 Trade Financing</h3>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• <strong>Letters of Credit:</strong> Payment guarantee</li>
                        <li>• <strong>SWIFT:</strong> Global messaging</li>
                        <li>• <strong>Insurance:</strong> Export credit coverage</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('introduction')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Introduction
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Conclusion
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Forex Markets Section */}
            {activeSection === 'forex-markets' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="forex-markets"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <ArrowsRightLeftIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Foreign Exchange Markets</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    The foreign exchange market is the largest and most liquid financial market in the world, with over $7.5 trillion traded daily. It facilitates international trade and investment by enabling currency conversion and provides mechanisms for managing exchange rate risk.
                  </p>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💱 Spot Market</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Immediate currency exchange at prevailing rates with settlement typically within 2 business days.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Key Characteristics</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Settlement:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">T+2 (trade date plus 2 days)</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Pricing:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time market rates</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Liquidity:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Highest among all forex markets</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Major Currency Pairs (2025)</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">EUR/USD:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">24% of daily volume</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">USD/JPY:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">13% of daily volume</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">GBP/USD:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">9% of daily volume</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📅 Forward & Futures Market</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Contracts to buy/sell currencies at predetermined rates on future dates.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Forward Contracts:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">OTC customized agreements, 1 week to 10+ years</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Currency Futures:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Exchange-traded standardized contracts</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Hedging Purpose:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Lock in exchange rates for future transactions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔄 Currency Swaps & Options</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Derivatives for hedging currency risk and managing cash flows.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Currency Swaps:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Exchange principal and interest in different currencies</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Currency Options:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Right (not obligation) to buy/sell at specific rate</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Risk Management:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Flexible hedging with upside potential</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Exchange Rate Systems</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Floating Rates</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Market-determined rates</li>
                          <li>• USD, EUR, JPY, GBP</li>
                          <li>• High volatility</li>
                          <li>• Monetary policy independence</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Fixed Rates</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Pegged to major currency</li>
                          <li>• Hong Kong Dollar to USD</li>
                          <li>• Stability but less flexibility</li>
                          <li>• Requires large reserves</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Managed Float</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Central bank intervention</li>
                          <li>• Indian Rupee, Chinese Yuan</li>
                          <li>• Controlled volatility</li>
                          <li>• Policy flexibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Key Market Players</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Institutional Players</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Central Banks:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Monetary policy, intervention, reserves management</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Commercial Banks:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Market making, customer transactions, proprietary trading</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Hedge Funds:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Speculative trading, arbitrage, carry trades</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Corporate & Retail</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">MNCs:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Trade settlements, hedging operations</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Retail Traders:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Individual speculation, travel, remittances</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Sovereign Funds:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Long-term investments, diversification</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Core Components
                    </button>
                    <button
                      onClick={() => navigateToSection('global-capital-flows')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Global Capital Flows
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Global Capital Flows Section */}
            {activeSection === 'global-capital-flows' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="global-capital-flows"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Global Capital Flows</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Global capital flows represent the movement of money across international borders for investment, trade, and economic development. These flows include foreign direct investment (FDI), portfolio investments, remittances, and other financial transfers that connect global markets and drive economic growth.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏭 Foreign Direct Investment (FDI)</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Long-term investment in foreign companies or assets with significant management control (typically 10%+ ownership).</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Types of FDI</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Greenfield Investment:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Building new facilities from scratch</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Brownfield Investment:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Acquiring existing companies/assets</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Joint Ventures:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Partnerships with local companies</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Global FDI Statistics (2024)</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Total Global FDI:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">$1.3 trillion annual inflows</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Top Recipients:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">USA ($388B), China ($163B), India ($83B)</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Sectors:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Services (65%), Manufacturing (25%), Primary (10%)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📊 Foreign Portfolio Investment (FPI)</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Short-term investment in equities, bonds, and mutual funds without management control.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Equity Investments:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Stock market investments, typically &lt;10% ownership</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Debt Securities:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Government bonds, corporate bonds, money market instruments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Characteristics:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">High liquidity, volatile, sensitive to market conditions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">💸 Remittances</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Money sent by individuals working abroad to their home countries.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Global Volume:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$800+ billion annually to developing countries</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Top Recipients:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">India ($110B), Mexico ($63B), China ($51B)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Impact:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Poverty reduction, consumption smoothing, development</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Sovereign Wealth Funds</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Government-owned investment funds managing surplus reserves for long-term economic benefits.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Largest SWFs (2025)</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Norway GPFG: $1.6T</li>
                          <li>• China CIC: $1.4T</li>
                          <li>• Saudi PIF: $925B</li>
                          <li>• UAE ADIA: $850B</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Investment Focus</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Diversified portfolios</li>
                          <li>• Long-term investments</li>
                          <li>• Infrastructure projects</li>
                          <li>• Technology companies</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Objectives</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Intergenerational equity</li>
                          <li>• Economic stabilization</li>
                          <li>• Strategic investments</li>
                          <li>• Diversification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Risk & Return Considerations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Investment Risks</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Political Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Government instability, policy changes, expropriation</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Currency Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Exchange rate fluctuations affecting returns</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Economic Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Recession, inflation, interest rate changes</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Risk Mitigation</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Diversification:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Spread investments across countries and sectors</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Hedging:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Currency forwards, options, swaps</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Insurance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Political risk insurance, credit guarantees</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('forex-markets')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Forex Markets
                    </button>
                    <button
                      onClick={() => navigateToSection('international-trade')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: International Trade
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* International Trade Section */}
            {activeSection === 'international-trade' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="international-trade"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <TruckIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">International Trade</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 18 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    International trade involves the exchange of goods and services across national borders, enabling countries to specialize in their comparative advantages and access global markets. It includes merchandise trade, services trade, and the complex web of agreements, policies, and supply chains that facilitate global commerce.
                  </p>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📄 Trade Agreements</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Bilateral, regional, and multilateral agreements that reduce trade barriers and establish common rules.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Multilateral</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• <strong>WTO:</strong> 164 members, global trade rules</li>
                          <li>• <strong>GATT:</strong> Goods trade liberalization</li>
                          <li>• <strong>GATS:</strong> Services trade framework</li>
                          <li>• <strong>TRIPS:</strong> Intellectual property rights</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Regional</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• <strong>RCEP:</strong> 15 Asia-Pacific countries</li>
                          <li>• <strong>USMCA:</strong> USA, Mexico, Canada</li>
                          <li>• <strong>EU Single Market:</strong> 27 countries</li>
                          <li>• <strong>ASEAN FTA:</strong> Southeast Asia</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Bilateral</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• <strong>India-UAE CEPA:</strong> Comprehensive agreement</li>
                          <li>• <strong>US-China Phase One:</strong> Trade deal</li>
                          <li>• <strong>Japan-EU EPA:</strong> Economic partnership</li>
                          <li>• <strong>UK-Australia FTA:</strong> Post-Brexit trade</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Trade Policies</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Government measures to regulate and promote international trade.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Tariffs:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Import duties ranging from 0% (free trade) to 100%+ (prohibitive)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Quotas:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Quantitative restrictions on imports/exports</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Subsidies:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Government support for domestic industries</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Export Promotion:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Incentives, zones, marketing support</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔗 Global Supply Chains</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Complex networks spanning multiple countries for production and distribution.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Sourcing:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Raw materials, components from lowest-cost suppliers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Manufacturing:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Production in countries with competitive advantages</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Logistics:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Transportation, warehousing, distribution networks</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Technology:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">IoT, blockchain, AI for supply chain optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Import-Export Documentation</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Essential paperwork and compliance requirements for international trade transactions.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Export Documents</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Commercial Invoice:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Detailed bill for goods sold</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Packing List:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Contents, weights, dimensions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Certificate of Origin:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Country where goods were produced</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Export License:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Government permission for restricted goods</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Import Documents</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Bill of Lading:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Shipping document and title</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Import License:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Permission to import specific goods</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Customs Declaration:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Detailed goods description for customs</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Insurance Certificate:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Coverage for goods in transit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Emerging Trends in Global Trade</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">E-commerce Globalization</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Cross-border online sales: $900B+</li>
                          <li>• Digital marketplaces expansion</li>
                          <li>• Direct-to-consumer models</li>
                          <li>• Small business global reach</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Digital Trade</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Digital services exports</li>
                          <li>• Cloud computing services</li>
                          <li>• Software and IP licensing</li>
                          <li>• Data flow regulations</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Reshoring Strategies</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Supply chain resilience</li>
                          <li>• Nearshoring to friendly countries</li>
                          <li>• Automation reducing labor costs</li>
                          <li>• Geopolitical risk mitigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('global-capital-flows')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Global Capital Flows
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Conclusion
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* MNCs Section */}
            {activeSection === 'mncs' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="mncs"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Multinational Corporations (MNCs)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Multinational corporations operate in multiple countries, managing complex global operations while navigating diverse regulatory environments, currencies, and market conditions. They play a crucial role in international finance and trade through their investment decisions, supply chains, and cross-border transactions.
                  </p>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-8">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🌍 Global Strategy</h3>
                    <p className="text-indigo-700 dark:text-indigo-300 mb-4">Strategic approaches for entering and operating in international markets.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Market Entry Strategies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Exporting:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Direct/indirect sales to foreign markets</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Licensing:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Technology/brand licensing agreements</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Joint Ventures:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Partnerships with local companies</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Wholly Owned Subsidiaries:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Full control through acquisitions/greenfield</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Localization vs Standardization</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Product Adaptation:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Customizing products for local preferences</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Marketing Localization:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Cultural adaptation of messaging</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Global Branding:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Consistent brand identity worldwide</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-indigo-700">Economies of Scale:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Standardized operations for cost efficiency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Financing Operations</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Managing capital across multiple currencies and jurisdictions.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Multi-Currency Funding:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Raising capital in different currencies to match cash flows</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Internal Capital Markets:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Transferring funds between subsidiaries</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Currency Hedging:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Forward contracts, options, swaps for FX risk</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Netting Systems:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Offsetting receivables and payables</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📊 Transfer Pricing & Tax Planning</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Optimizing taxation across jurisdictions while ensuring compliance.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Arm's Length Principle:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Pricing inter-company transactions at market rates</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Tax Optimization:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Legal strategies to minimize global tax burden</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">BEPS Compliance:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Base Erosion and Profit Shifting regulations</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Country-by-Country Reporting:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Transparency requirements for tax authorities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Risk Management</h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">Identifying and mitigating various risks in global operations.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Types of Risks</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Political Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Government instability, policy changes, expropriation</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Economic Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Inflation, recession, interest rate changes</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Operational Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Supply chain disruptions, labor issues</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Currency Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Exchange rate fluctuations affecting profits</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Risk Mitigation Strategies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Diversification:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Spreading operations across multiple countries</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Insurance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Political risk insurance, credit guarantees</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Flexible Operations:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Ability to shift production/sourcing quickly</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Local Partnerships:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Joint ventures to reduce political risk</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏛️ Corporate Governance</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Ensuring compliance with multiple regulatory frameworks and maintaining ethical standards.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Regulatory Compliance</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Securities regulations</li>
                          <li>• Anti-corruption laws</li>
                          <li>• Environmental standards</li>
                          <li>• Labor regulations</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Stakeholder Management</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Shareholder relations</li>
                          <li>• Employee engagement</li>
                          <li>• Community involvement</li>
                          <li>• Government relations</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">ESG Integration</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Environmental sustainability</li>
                          <li>• Social responsibility</li>
                          <li>• Governance transparency</li>
                          <li>• Impact measurement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('international-trade')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: International Trade
                    </button>
                    <button
                      onClick={() => navigateToSection('trade-financing')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Trade Financing
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Trade Financing Section */}
            {activeSection === 'trade-financing' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="trade-financing"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <CreditCardIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trade Financing & Payment Methods</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Trade financing provides the financial instruments and services that facilitate international trade by reducing risks and ensuring payment security for both exporters and importers. These mechanisms bridge the gap between shipment and payment, enabling global commerce to flow smoothly.
                  </p>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700 mb-8">
                    <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">📜 Letters of Credit (LCs)</h3>
                    <p className="text-teal-700 dark:text-teal-300 mb-4">Bank-guaranteed payments that ensure exporters receive payment and importers receive goods as specified.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">Types of Letters of Credit</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Sight LC:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Payment upon presentation of documents</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Usance LC:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Deferred payment (30-180 days)</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Revolving LC:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Renewable for multiple shipments</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Standby LC:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Backup payment guarantee</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">LC Process Flow</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded mr-3">1</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Importer applies for LC at bank</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded mr-3">2</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Bank issues LC to exporter's bank</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded mr-3">3</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Exporter ships goods and submits documents</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded flex items-center">
                            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded mr-3">4</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Bank verifies documents and releases payment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🛡️ Bank Guarantees & Bills of Exchange</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Additional instruments for reducing counterparty risk in international transactions.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Performance Guarantee:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Ensures contract performance by supplier</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Advance Payment Guarantee:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Protects buyer's advance payments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Bills of Exchange:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Negotiable instruments for payment</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Documentary Collections:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">D/P (Documents against Payment), D/A (Documents against Acceptance)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Trade Credit & Supply Chain Financing</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Short-term financing solutions for working capital needs.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Pre-shipment Finance:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Working capital for production and procurement</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Post-shipment Finance:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Bridge financing until payment receipt</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Invoice Discounting:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Immediate cash against receivables</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Factoring:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Sale of receivables to factor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Payment Systems</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Global infrastructure for cross-border payments and messaging.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">SWIFT Network</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Global Reach:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">11,000+ institutions in 200+ countries</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Message Types:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">MT103 (wire transfers), MT700 (LCs), MT760 (guarantees)</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Security:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Encrypted messaging, authentication protocols</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Alternative Payment Systems</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Digital Platforms:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Wise, Remitly, Western Union digital</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Blockchain Solutions:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">JPM Coin, Ripple, trade finance platforms</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Central Bank Networks:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Cross-border CBDC initiatives</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Insurance & Risk Mitigation</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Protecting against various risks in international trade transactions.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Export Credit Insurance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Buyer default protection</li>
                          <li>• Political risk coverage</li>
                          <li>• Currency inconvertibility</li>
                          <li>• War and civil unrest</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Marine Insurance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Cargo protection in transit</li>
                          <li>• All risks coverage</li>
                          <li>• Named perils policies</li>
                          <li>• Warehouse to warehouse</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Hedging Instruments</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Currency forwards</li>
                          <li>• Options contracts</li>
                          <li>• Commodity hedging</li>
                          <li>• Interest rate swaps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('mncs')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: MNCs
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Conclusion
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regulatory Framework Section */}
            {activeSection === 'regulatory-framework' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="regulatory-framework"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <ScaleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Regulatory Framework and Global Institutions</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    The global regulatory framework for international finance and trade consists of multilateral institutions, regional organizations, and national regulations that govern cross-border transactions, ensure financial stability, and promote fair trade practices.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🌍 International Organizations</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Key global institutions that shape international finance and trade policies.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Financial Institutions</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">IMF (International Monetary Fund):</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">190 members, $1T lending capacity, exchange rate surveillance</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">World Bank Group:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Development financing, $100B+ annual commitments</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">BIS (Bank for International Settlements):</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Central bank cooperation, Basel banking standards</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Trade Organizations</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">WTO (World Trade Organization):</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">164 members, global trade rules, dispute resolution</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">UNCTAD:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Trade and development, investment promotion</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">OECD:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Economic cooperation, policy coordination</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌏 Regional Trade Blocs</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Regional agreements promoting economic integration and trade liberalization.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">European Union (EU):</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">27 countries, single market, common currency (Euro)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">ASEAN:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">10 Southeast Asian countries, AFTA free trade area</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">USMCA:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">USA, Mexico, Canada trade agreement</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">RCEP:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">15 Asia-Pacific countries, world's largest trade bloc</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🇮🇳 National Regulations (India)</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Indian regulatory framework governing international finance and trade.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">FEMA (Foreign Exchange Management Act):</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Forex transactions, current/capital account regulations</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">FTP (Foreign Trade Policy):</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Export-import procedures, incentive schemes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Customs Act:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Import duties, clearance procedures, valuation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">GST on Imports:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Integrated GST on imported goods and services</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Compliance & Reporting Requirements</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Essential compliance areas for international finance and trade operations.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">AML/CFT Compliance</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Customer Due Diligence (CDD)</li>
                          <li>• Suspicious Transaction Reporting</li>
                          <li>• Beneficial ownership disclosure</li>
                          <li>• Sanctions screening</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Trade Documentation</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Export-import declarations</li>
                          <li>• Certificate of origin</li>
                          <li>• Shipping documents</li>
                          <li>• Insurance certificates</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Financial Disclosures</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Foreign investment reporting</li>
                          <li>• Transfer pricing documentation</li>
                          <li>• Country-by-country reporting</li>
                          <li>• Forex transaction reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Regulatory Challenges & Trends</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Current Challenges</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Regulatory Fragmentation:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Different rules across jurisdictions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Digital Assets:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Evolving crypto and CBDC regulations</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Trade Wars:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Protectionist policies, tariff escalations</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Future Trends</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Regulatory Harmonization:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Common standards for digital finance</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">ESG Integration:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Sustainability reporting requirements</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">RegTech Adoption:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Technology for compliance automation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('trade-financing')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Trade Financing
                    </button>
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in International Finance & Trade</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    The landscape of international finance and trade is rapidly evolving with digital transformation, sustainable finance initiatives, geopolitical shifts, and technological innovations reshaping how global commerce operates in the 21st century.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📱 Digital Trade & E-Commerce</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">The digitization of trade processes and growth of cross-border e-commerce.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Cross-Border E-Commerce</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Market Size:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">$900B+ global cross-border online sales</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Digital Marketplaces:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Global, Alibaba, eBay international</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Direct-to-Consumer:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Brands selling directly to global customers</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">SME Participation:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Small businesses accessing global markets</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Digital Services Trade</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Cloud Computing:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Azure, Google Cloud global services</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Software Licensing:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">SaaS, IP licensing across borders</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Digital Content:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Streaming, gaming, digital media exports</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Data Flows:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Cross-border data transfer regulations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔗 Fintech & Blockchain</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Technology revolutionizing trade finance and cross-border payments.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Blockchain Trade Finance:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Smart contracts for letters of credit, supply chain transparency</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Digital Payments:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Faster, cheaper cross-border transfers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Trade Platforms:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">TradeLens, we.trade, Marco Polo Network</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">CBDCs:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Central bank digital currencies for settlements</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🌱 Global ESG Investing</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Sustainable investments influencing international capital flows.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">ESG Assets:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$35T+ global sustainable investment assets</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Green Bonds:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$500B+ annual issuance for climate projects</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Carbon Markets:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">International carbon credit trading</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Sustainable Trade:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">ESG criteria in supply chain decisions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Geopolitical Risks</h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">Political tensions affecting global finance and trade patterns.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Trade Wars</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• US-China tariff disputes</li>
                          <li>• Technology export controls</li>
                          <li>• Supply chain decoupling</li>
                          <li>• Economic nationalism</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Sanctions Regimes</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Russia-Ukraine conflict impacts</li>
                          <li>• SWIFT exclusions</li>
                          <li>• Asset freezes</li>
                          <li>• Secondary sanctions risks</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Regulatory Divergence</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Data localization laws</li>
                          <li>• Digital tax disputes</li>
                          <li>• Crypto regulations</li>
                          <li>• Competition policies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Global Supply Chain Digitization</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Technology integration for transparency, efficiency, and resilience.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Technology Integration</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">IoT Tracking:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time cargo monitoring, temperature control</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">AI Optimization:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Route planning, demand forecasting</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Automation:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Robotic warehouses, autonomous vehicles</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Resilience Strategies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Diversification:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Multiple suppliers, geographic spread</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Nearshoring:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Closer supplier relationships</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Inventory Buffers:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Strategic stockpiling for critical items</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('regulatory-framework')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Regulatory Framework
                    </button>
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in International Finance & Trade</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 12 min read • Advanced</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    International finance and trade face numerous challenges from currency volatility and political instability to cybersecurity threats and supply chain disruptions. These challenges require sophisticated risk management strategies and adaptive business models.
                  </p>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Currency Volatility and Foreign Exchange Risk</h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">Exchange rate fluctuations creating uncertainty for international businesses and investors.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Sources of Volatility</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Economic Fundamentals:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">GDP growth, inflation, interest rates, trade balances</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Political Events:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Elections, policy changes, geopolitical tensions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Market Sentiment:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Risk appetite, speculation, carry trades</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Central Bank Actions:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Monetary policy, intervention, communication</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Impact on Business</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Transaction Exposure:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Impact on specific foreign currency transactions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Translation Exposure:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Consolidation of foreign subsidiary financials</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Economic Exposure:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Long-term impact on company valuation</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-red-700">Cash Flow Volatility:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unpredictable revenue and cost fluctuations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏛️ Political Instability & Trade Barriers</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Government actions and political risks affecting international business operations.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Policy Uncertainty:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Changing regulations, tax policies, trade rules</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Protectionist Measures:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Tariffs, quotas, anti-dumping duties</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Sanctions:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Economic restrictions, asset freezes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Expropriation Risk:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Government seizure of foreign assets</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚖️ Regulatory Differences & Compliance</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Navigating diverse regulatory environments across multiple jurisdictions.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Legal System Variations:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Common law vs civil law, contract enforcement</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Tax Complexity:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Transfer pricing, double taxation, BEPS</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Reporting Requirements:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Multiple disclosure standards, languages</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Compliance Costs:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Legal fees, consulting, system upgrades</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔒 Cybersecurity and Fraud in Digital Transactions</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Growing threats to digital financial infrastructure and cross-border payments.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Cyber Threats</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Ransomware attacks</li>
                          <li>• Data breaches</li>
                          <li>• Payment fraud</li>
                          <li>• System infiltration</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Financial Impact</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• $6T+ annual cybercrime costs</li>
                          <li>• Business interruption</li>
                          <li>• Reputation damage</li>
                          <li>• Regulatory penalties</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Protection Measures</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Multi-factor authentication</li>
                          <li>• Encryption protocols</li>
                          <li>• Regular security audits</li>
                          <li>• Employee training</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Supply Chain Disruptions</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Various factors causing interruptions to global supply chains and trade flows.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Disruption Causes</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Pandemics:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">COVID-19 lockdowns, factory closures</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Natural Disasters:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Earthquakes, floods, hurricanes</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Geopolitical Conflicts:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Wars, trade disputes, sanctions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Infrastructure Failures:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Port congestion, shipping delays</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Mitigation Strategies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Supplier Diversification:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Multiple sources, geographic spread</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Inventory Management:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Strategic stockpiling, safety buffers</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Technology Integration:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time tracking, predictive analytics</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Flexible Contracts:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Force majeure clauses, alternative arrangements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Balancing Globalization Benefits with Domestic Stability</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Managing the tension between global integration and national economic interests.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Globalization Benefits</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Economic Efficiency:</strong> Comparative advantage, specialization</li>
                          <li>• <strong>Consumer Choice:</strong> Variety, lower prices, quality</li>
                          <li>• <strong>Innovation:</strong> Technology transfer, knowledge sharing</li>
                          <li>• <strong>Growth:</strong> Market access, investment opportunities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Domestic Concerns</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Job Displacement:</strong> Manufacturing shifts, automation</li>
                          <li>• <strong>Income Inequality:</strong> Skill-biased technological change</li>
                          <li>• <strong>Economic Dependence:</strong> Supply chain vulnerabilities</li>
                          <li>• <strong>Cultural Impact:</strong> Local traditions, sovereignty concerns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Modern Trends
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                      <p className="text-gray-600 dark:text-gray-400">Resources • 8 min read • All Levels</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">🎯 Key Insights</h3>
                    <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                      International finance and trade are essential for global economic integration, wealth creation, and financial intermediation. By effectively managing currency risks, capital flows, trade financing, and regulatory compliance, countries and businesses can thrive in a competitive global environment. Emerging technologies, digital finance, ESG considerations, and smart supply chain strategies are shaping the future of international finance and trade, making it more efficient, inclusive, and resilient.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Future of Global Finance & Trade</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Digital Transformation</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-700">Blockchain Trade Finance</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Smart contracts for letters of credit</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-700">Digital Currencies</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">CBDCs for cross-border payments</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
                            <h5 className="font-semibold text-purple-700">AI & Analytics</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Risk assessment and trade optimization</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Emerging Trends</h4>
                        <div className="space-y-2">
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🌱</span>
                            <div>
                              <strong className="text-sm">ESG Integration</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Sustainable finance and green trade</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🔗</span>
                            <div>
                              <strong className="text-sm">Supply Chain Resilience</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Diversification and nearshoring</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🌐</span>
                            <div>
                              <strong className="text-sm">Digital Trade</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">E-commerce and digital services</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div>
                              <strong className="text-sm">Regulatory Harmonization</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Global standards and cooperation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">India's Global Integration Achievements</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">$1.2T</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Trade Volume</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Merchandise + Services</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">$650B</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Forex Reserves</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">4th largest globally</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">$110B</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Remittances</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Largest recipient country</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl text-center border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">🌍 Master Global Finance for Success!</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      Understanding international finance and trade opens doors to global opportunities and helps navigate the complexities of our interconnected world.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-blue-600">💱 Global Markets</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-green-600">🌐 Trade Opportunities</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-purple-600">🚀 Economic Growth</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Core Components
                    </button>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Back to Learn Hub
                      </Link>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                        <Link
                          to="/learn/personal-finance"
                          className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <span className="mr-2">💰</span>
                          Personal Finance
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                        </Link>
                      </div>
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
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      International Finance & Trade Tools
                    </h3>
                    <p className="text-blue-100">Calculate forex rates, trade finance, and global investment returns</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Currency Converter', path: '/calculators/currency-converter', icon: '💱', desc: 'Real-time forex rates' },
                    { name: 'Import Cost Calculator', path: '/calculators/import-cost', icon: '📦', desc: 'Total import expenses' },
                    { name: 'Export Profit Calculator', path: '/calculators/export-profit', icon: '🚢', desc: 'Export profitability' },
                    { name: 'FDI Returns Calculator', path: '/calculators/fdi-returns', icon: '🏭', desc: 'Foreign investment ROI' },
                    { name: 'Trade Finance Calculator', path: '/calculators/trade-finance', icon: '💳', desc: 'LC and financing costs' },
                    { name: 'Remittance Calculator', path: '/calculators/remittance', icon: '💸', desc: 'Money transfer costs' },
                    { name: 'Forex Risk Calculator', path: '/calculators/forex-risk', icon: '⚠️', desc: 'Currency exposure' },
                    { name: 'Global Portfolio Tracker', path: '/calculators/global-portfolio', icon: '🌍', desc: 'International investments' }
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