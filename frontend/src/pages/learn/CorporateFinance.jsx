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
  ScaleIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

import { getNextPillar, getPreviousPillar } from '../../data/learningData';

export default function CorporateFinance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 4; // Business & Corporate Finance is pillar 4
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
      title: 'Introduction to Corporate Finance', 
      icon: AcademicCapIcon, 
      emoji: '📖', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding corporate finance fundamentals and business financial management'
    },
    { 
      id: 'financial-statements', 
      title: 'Financial Statements Analysis', 
      icon: DocumentTextIcon, 
      emoji: '📊', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Reading and analyzing balance sheets, P&L, and cash flow statements'
    },
    { 
      id: 'capital-structure', 
      title: 'Capital Structure & Financing', 
      icon: BuildingOfficeIcon, 
      emoji: '🏢', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Debt vs equity financing and optimal capital structure'
    },
    { 
      id: 'working-capital', 
      title: 'Working Capital Management', 
      icon: CurrencyRupeeIcon, 
      emoji: '💰', 
      level: 'intermediate',
      duration: '10 min read',
      difficulty: 'Intermediate',
      description: 'Managing day-to-day financial operations and liquidity'
    },
    // Intermediate Level
    { 
      id: 'investment-decisions', 
      title: 'Capital Investment Decisions', 
      icon: PresentationChartLineIcon, 
      emoji: '📈', 
      level: 'intermediate',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'NPV, IRR, and capital budgeting techniques'
    },
    { 
      id: 'risk-management', 
      title: 'Corporate Risk Management', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Identifying and managing business financial risks'
    },
    { 
      id: 'valuation', 
      title: 'Business Valuation Methods', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'DCF, comparable analysis, and asset-based valuation'
    },
    { 
      id: 'mergers-acquisitions', 
      title: 'Mergers & Acquisitions', 
      icon: BuildingOfficeIcon, 
      emoji: '🤝', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'M&A strategy, due diligence, and deal structuring'
    },
    // Advanced Level
    { 
      id: 'dividend-policy', 
      title: 'Dividend Policy & Distribution', 
      icon: BanknotesIcon, 
      emoji: '💵', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Dividend decisions and shareholder value creation'
    },
    { 
      id: 'international-finance', 
      title: 'International Corporate Finance', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Cross-border transactions and currency risk management'
    },
    { 
      id: 'governance', 
      title: 'Corporate Governance & Ethics', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'Board governance, compliance, and ethical finance practices'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Implementation', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '8 min read',
      difficulty: 'All Levels',
      description: 'Key takeaways and practical implementation strategies'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '91%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.8', icon: StarIcon },
    { label: 'Active Learners', value: '18K+', icon: UserGroupIcon },
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
      name: 'Investments & Capital Markets', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Investment strategies and markets'
    },
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Banking systems and payments'
    },
    { 
      name: 'Alternative Finance', 
      path: '/learn/alternative-finance', 
      icon: '🚀',
      description: 'Fintech and alternative funding'
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-indigo-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Corporate Finance</h1>
              <p className="text-indigo-100">Pillar 4 of 8 • Business Financial Management • 12 Sections • 2025 Updated</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
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
                <BuildingOfficeIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Mobile Next Button */}
          <div className="md:hidden mt-4">
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
        <div className="lg:flex lg:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit lg:sticky lg:top-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white flex items-center">
                  <BookmarkIcon className="h-5 w-5 mr-2" />
                  Contents
                </h3>
                <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full">
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
                          ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-indigo-200 dark:bg-indigo-800' : 'bg-gray-100 dark:bg-gray-600'
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
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
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
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Corporate Finance</h2>
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
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-8 border border-indigo-200 dark:border-indigo-700">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is Corporate Finance?
                    </h3>
                    <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed">
                      Corporate finance is the area of finance that deals with how corporations make financial decisions, manage their capital structure, and maximize shareholder value. It encompasses investment decisions, financing decisions, and dividend policies that drive business growth and profitability.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Investment Decisions</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">Where to invest company resources for maximum returns - capital budgeting, project evaluation, and asset allocation.</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Financing Decisions</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">How to fund operations and growth - debt vs equity, cost of capital, and optimal capital structure.</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Dividend Policy</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">How to distribute profits to shareholders - dividend payments, share buybacks, and retained earnings.</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Corporate finance is about creating value for shareholders through strategic financial decisions. It requires balancing risk and return, managing cash flows, and ensuring sustainable growth while maintaining financial stability.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('financial-statements')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Financial Statements Analysis
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Financial Statements Section */}
            {activeSection === 'financial-statements' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="financial-statements"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Financial Statements Analysis</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('financial-statements')} className={`p-2 rounded-full transition-colors ${bookmarks.has('financial-statements') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('financial-statements') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('financial-statements')} className={`p-2 rounded-full transition-colors ${completedSections.has('financial-statements') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Financial statements are the foundation of corporate finance analysis. They provide insights into a company's financial health, performance, and cash flow patterns, enabling informed decision-making by management, investors, and stakeholders.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Balance Sheet</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Assets</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Current assets, fixed assets, investments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Liabilities</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Current liabilities, long-term debt</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Equity</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Share capital, retained earnings</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">P&L Statement</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Revenue</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Sales, service income, other income</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Expenses</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">COGS, operating expenses, interest</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Profit</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Gross, operating, net profit</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Cash Flow Statement</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Operating</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Cash from core business operations</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Investing</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Capital expenditure, acquisitions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Financing</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Debt, equity, dividend payments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Key Financial Ratios (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Profitability Ratios</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Gross Profit Margin = Gross Profit / Revenue</li>
                          <li>• Operating Margin = Operating Profit / Revenue</li>
                          <li>• Net Profit Margin = Net Profit / Revenue</li>
                          <li>• ROE = Net Profit / Shareholders' Equity</li>
                          <li>• ROA = Net Profit / Total Assets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Liquidity & Efficiency</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Current Ratio = Current Assets / Current Liabilities</li>
                          <li>• Quick Ratio = (Current Assets - Inventory) / Current Liabilities</li>
                          <li>• Debt-to-Equity = Total Debt / Total Equity</li>
                          <li>• Asset Turnover = Revenue / Average Total Assets</li>
                          <li>• Inventory Turnover = COGS / Average Inventory</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Financial statements tell the story of a business. Learn to read between the lines, compare with industry benchmarks, and track trends over time. Quality of earnings and cash generation are more important than just profit numbers.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('introduction')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Introduction
                    </button>
                    <button onClick={() => navigateToSection('capital-structure')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Next: Capital Structure
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Capital Structure Section */}
            {activeSection === 'capital-structure' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Capital Structure & Financing</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 12 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('capital-structure')} className={`p-2 rounded-full transition-colors ${bookmarks.has('capital-structure') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('capital-structure') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('capital-structure')} className={`p-2 rounded-full transition-colors ${completedSections.has('capital-structure') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Capital structure refers to the mix of debt and equity financing used by a company. The optimal capital structure balances the cost of capital with financial risk, maximizing firm value while maintaining financial flexibility.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Debt Financing</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Bank Loans</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Term loans, working capital, overdrafts (8-12% rates in 2025)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Bonds & Debentures</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Corporate bonds, convertible debentures (7-10% yields)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Advantages</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Tax deductible interest, no dilution of control</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Equity Financing</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Common Stock</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">IPO, rights issue, private placement</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Preferred Stock</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Fixed dividend, conversion features</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Advantages</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">No fixed payments, permanent capital</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Optimal Capital Structure Theory</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Trade-off Theory</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Balance tax benefits of debt against bankruptcy costs</p>
                        <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Tax shield from interest deduction</li>
                          <li>• Financial distress costs</li>
                          <li>• Optimal debt-equity ratio exists</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Pecking Order Theory</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Financing hierarchy based on information asymmetry</p>
                        <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• 1st: Internal funds (retained earnings)</li>
                          <li>• 2nd: Debt financing</li>
                          <li>• 3rd: Equity financing (last resort)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                      The optimal capital structure varies by industry, company size, and business cycle. Growing companies often use more equity, while mature companies with stable cash flows can support higher debt levels. Regular review and adjustment are essential.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('financial-statements')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Financial Statements
                    </button>
                    <button onClick={() => navigateToSection('working-capital')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Next: Working Capital Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Working Capital Section */}
            {activeSection === 'working-capital' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                      <CurrencyRupeeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Working Capital Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 10 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('working-capital')} className={`p-2 rounded-full transition-colors ${bookmarks.has('working-capital') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('working-capital') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('working-capital')} className={`p-2 rounded-full transition-colors ${completedSections.has('working-capital') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Working capital management involves managing short-term assets and liabilities to ensure smooth daily operations. Effective working capital management improves cash flow, reduces financing costs, and enhances profitability.
                  </p>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Working Capital Components</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Current Assets</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Cash & Bank:</strong> Immediate liquidity needs</li>
                          <li>• <strong>Accounts Receivable:</strong> Credit sales collection</li>
                          <li>• <strong>Inventory:</strong> Raw materials, WIP, finished goods</li>
                          <li>• <strong>Prepaid Expenses:</strong> Advance payments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Current Liabilities</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Accounts Payable:</strong> Supplier payments</li>
                          <li>• <strong>Short-term Debt:</strong> Bank overdrafts, loans</li>
                          <li>• <strong>Accrued Expenses:</strong> Wages, utilities, taxes</li>
                          <li>• <strong>Advance from Customers:</strong> Prepayments received</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Cash Management</h3>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• Cash flow forecasting</li>
                        <li>• Optimal cash balance</li>
                        <li>• Short-term investments</li>
                        <li>• Banking relationships</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Receivables Management</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Credit policy optimization</li>
                        <li>• Collection procedures</li>
                        <li>• Aging analysis</li>
                        <li>• Factoring options</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Inventory Management</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• EOQ optimization</li>
                        <li>• Just-in-time systems</li>
                        <li>• ABC analysis</li>
                        <li>• Supplier relationships</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      Efficient working capital management can free up significant cash for growth investments. Focus on reducing collection periods, optimizing inventory levels, and extending payment terms with suppliers while maintaining good relationships.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('capital-structure')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Capital Structure
                    </button>
                    <button onClick={() => navigateToSection('investment-decisions')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Next: Investment Decisions
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investment Decisions Section */}
            {activeSection === 'investment-decisions' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl"><PresentationChartLineIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Capital Investment Decisions</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 18 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('investment-decisions')} className={`p-2 rounded-full transition-colors ${bookmarks.has('investment-decisions') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('investment-decisions') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('investment-decisions')} className={`p-2 rounded-full transition-colors ${completedSections.has('investment-decisions') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Capital investment decisions involve evaluating long-term projects and assets. These decisions significantly impact company value and require sophisticated analysis techniques including NPV, IRR, and payback period calculations.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">NPV Analysis</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">Net Present Value = Sum of (Cash Flow / (1 + Discount Rate)^Period) - Initial Investment</p>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• NPV &gt; 0: Accept project</li>
                        <li>• NPV &lt; 0: Reject project</li>
                        <li>• Considers time value of money</li>
                        <li>• Uses company's cost of capital</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">IRR Analysis</h3>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-3">Internal Rate of Return is the discount rate that makes NPV = 0</p>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• IRR &gt; Cost of Capital: Accept</li>
                        <li>• IRR &lt; Cost of Capital: Reject</li>
                        <li>• Percentage return measure</li>
                        <li>• Easy to communicate to management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Capital Budgeting Process (2025)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">1. Project Identification</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Strategic alignment</li><li>• Market opportunities</li><li>• Technology upgrades</li><li>• Regulatory compliance</li></ul></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">2. Cash Flow Estimation</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Revenue projections</li><li>• Operating costs</li><li>• Tax implications</li><li>• Terminal value</li></ul></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">3. Risk Assessment</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Sensitivity analysis</li><li>• Scenario planning</li><li>• Monte Carlo simulation</li><li>• Real options valuation</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">Use multiple evaluation methods (NPV, IRR, Payback) and consider qualitative factors. NPV is theoretically superior, but IRR is often preferred by management. Always perform sensitivity analysis for key assumptions.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('working-capital')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Working Capital</button>
                    <button onClick={() => navigateToSection('risk-management')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: Risk Management<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Risk Management Section */}
            {activeSection === 'risk-management' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl"><ShieldCheckIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Corporate Risk Management</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('risk-management')} className={`p-2 rounded-full transition-colors ${bookmarks.has('risk-management') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('risk-management') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('risk-management')} className={`p-2 rounded-full transition-colors ${completedSections.has('risk-management') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Corporate risk management involves identifying, assessing, and mitigating various risks that could impact business operations and financial performance. Effective risk management protects shareholder value and ensures business continuity.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Types of Business Risks</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Financial Risk</h4><p className="text-sm text-red-600 dark:text-red-400">Interest rate, credit, liquidity, currency risks</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Operational Risk</h4><p className="text-sm text-red-600 dark:text-red-400">Supply chain, technology, human resources</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Strategic Risk</h4><p className="text-sm text-red-600 dark:text-red-400">Market changes, competition, regulation</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Risk Management Tools</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Hedging</h4><p className="text-sm text-green-600 dark:text-green-400">Derivatives, forwards, options, swaps</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Insurance</h4><p className="text-sm text-green-600 dark:text-green-400">Property, liability, business interruption</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Diversification</h4><p className="text-sm text-green-600 dark:text-green-400">Geographic, product, customer base</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">Implement a comprehensive risk management framework with regular monitoring and reporting. Focus on risks that could significantly impact business objectives and ensure adequate mitigation strategies are in place.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('investment-decisions')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Investment Decisions</button>
                    <button onClick={() => navigateToSection('valuation')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: Business Valuation<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Valuation Section */}
            {activeSection === 'valuation' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl"><ScaleIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Business Valuation Methods</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 20 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('valuation')} className={`p-2 rounded-full transition-colors ${bookmarks.has('valuation') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('valuation') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('valuation')} className={`p-2 rounded-full transition-colors ${completedSections.has('valuation') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Business valuation determines the economic value of a company using various methodologies. Accurate valuation is crucial for M&A transactions, investment decisions, and strategic planning.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">DCF Valuation</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">Discounted Cash Flow method values future cash flows</p>
                      <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Project free cash flows</li>
                        <li>• Determine discount rate (WACC)</li>
                        <li>• Calculate terminal value</li>
                        <li>• Sum present values</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Comparable Analysis</h3>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-3">Market-based valuation using peer companies</p>
                      <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                        <li>• P/E ratio multiples</li>
                        <li>• EV/EBITDA multiples</li>
                        <li>• Price-to-Book ratios</li>
                        <li>• Industry-specific metrics</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Asset-Based</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">Book value and liquidation value approaches</p>
                      <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• Net book value</li>
                        <li>• Adjusted book value</li>
                        <li>• Liquidation value</li>
                        <li>• Replacement cost</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">Use multiple valuation methods and triangulate results. DCF provides intrinsic value, comparables give market perspective, and asset-based methods provide floor values. Consider industry dynamics and company-specific factors.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('risk-management')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Risk Management</button>
                    <button onClick={() => navigateToSection('conclusion')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: Conclusion<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Mergers & Acquisitions Section */}
            {activeSection === 'mergers-acquisitions' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-xl"><BuildingOfficeIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mergers & Acquisitions</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('mergers-acquisitions')} className={`p-2 rounded-full transition-colors ${bookmarks.has('mergers-acquisitions') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('mergers-acquisitions') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('mergers-acquisitions')} className={`p-2 rounded-full transition-colors ${completedSections.has('mergers-acquisitions') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Mergers and acquisitions (M&A) are strategic transactions where companies combine or one company acquires another. M&A activities can create synergies, expand market reach, and drive growth, but require careful planning and execution.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Types of M&A</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Horizontal Merger</h4><p className="text-sm text-blue-600 dark:text-blue-400">Companies in same industry (market consolidation)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Vertical Merger</h4><p className="text-sm text-blue-600 dark:text-blue-400">Supply chain integration (upstream/downstream)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Conglomerate</h4><p className="text-sm text-blue-600 dark:text-blue-400">Unrelated businesses (diversification)</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">M&A Process (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Strategy & Planning</h4><p className="text-sm text-green-600 dark:text-green-400">Define objectives, target identification</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Due Diligence</h4><p className="text-sm text-green-600 dark:text-green-400">Financial, legal, operational analysis</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Integration</h4><p className="text-sm text-green-600 dark:text-green-400">Post-merger integration planning</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Synergy Types & Valuation</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Revenue Synergies</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Cross-selling opportunities</li><li>• Market expansion</li><li>• Product bundling</li><li>• Pricing power</li></ul></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Cost Synergies</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Economies of scale</li><li>• Elimination of duplicates</li><li>• Procurement savings</li><li>• Technology integration</li></ul></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Financial Synergies</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Lower cost of capital</li><li>• Tax optimization</li><li>• Cash flow stability</li><li>• Debt capacity increase</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">M&A success depends on strategic fit, cultural compatibility, and effective integration. Focus on realistic synergy estimates, thorough due diligence, and post-merger integration planning. Many M&A deals fail due to poor execution rather than poor strategy.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('valuation')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Business Valuation</button>
                    <button onClick={() => navigateToSection('dividend-policy')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: Dividend Policy<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Dividend Policy Section */}
            {activeSection === 'dividend-policy' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl"><BanknotesIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dividend Policy & Distribution</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 12 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('dividend-policy')} className={`p-2 rounded-full transition-colors ${bookmarks.has('dividend-policy') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('dividend-policy') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('dividend-policy')} className={`p-2 rounded-full transition-colors ${completedSections.has('dividend-policy') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Dividend policy determines how much profit to distribute to shareholders versus retaining for reinvestment. The optimal dividend policy balances shareholder expectations with growth opportunities and financial flexibility.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Dividend Theories</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Bird-in-Hand Theory</h4><p className="text-sm text-green-600 dark:text-green-400">Investors prefer current dividends over uncertain capital gains</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Tax Preference Theory</h4><p className="text-sm text-green-600 dark:text-green-400">Capital gains taxed lower than dividends (varies by country)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Signaling Theory</h4><p className="text-sm text-green-600 dark:text-green-400">Dividend changes signal management's confidence</p></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Distribution Methods</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Cash Dividends</h4><p className="text-sm text-blue-600 dark:text-blue-400">Regular quarterly/annual cash payments</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Stock Dividends</h4><p className="text-sm text-blue-600 dark:text-blue-400">Additional shares instead of cash</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Share Buybacks</h4><p className="text-sm text-blue-600 dark:text-blue-400">Repurchasing shares from market</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Dividend Policy Factors (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Internal Factors</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Profitability and cash flow</li><li>• Growth opportunities (CAPEX needs)</li><li>• Financial leverage and debt covenants</li><li>• Liquidity position</li><li>• Earnings stability</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">External Factors</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Shareholder expectations</li><li>• Tax implications (DDT in India)</li><li>• Industry practices</li><li>• Economic conditions</li><li>• Regulatory requirements</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">Establish a consistent dividend policy that aligns with business strategy and shareholder expectations. Consider payout ratio, dividend yield, and growth stage. Communicate policy clearly and avoid frequent changes that may confuse investors.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('mergers-acquisitions')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: M&A</button>
                    <button onClick={() => navigateToSection('international-finance')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: International Finance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* International Finance Section */}
            {activeSection === 'international-finance' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl"><GlobeAltIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">International Corporate Finance</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 18 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('international-finance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('international-finance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('international-finance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('international-finance')} className={`p-2 rounded-full transition-colors ${completedSections.has('international-finance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">International corporate finance deals with financial decisions of multinational corporations operating across borders. It involves managing currency risks, cross-border investments, and navigating different regulatory environments.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Currency Risk</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                        <li>• <strong>Transaction Risk:</strong> FX impact on pending transactions</li>
                        <li>• <strong>Translation Risk:</strong> Financial statement conversion</li>
                        <li>• <strong>Economic Risk:</strong> Long-term competitive position</li>
                        <li>• <strong>Hedging:</strong> Forwards, options, swaps</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Cross-border Financing</h3>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                        <li>• <strong>Eurobonds:</strong> International bond markets</li>
                        <li>• <strong>ADRs/GDRs:</strong> Depositary receipts</li>
                        <li>• <strong>Syndicated Loans:</strong> Multi-bank financing</li>
                        <li>• <strong>Export Credit:</strong> Trade financing</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Capital Structure</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>Local vs Global:</strong> Financing source decisions</li>
                        <li>• <strong>Tax Optimization:</strong> Transfer pricing, thin cap rules</li>
                        <li>• <strong>Political Risk:</strong> Country risk assessment</li>
                        <li>• <strong>Regulatory:</strong> Local compliance requirements</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">International Investment Decisions (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">FDI Considerations</h4><ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1"><li>• Market size and growth potential</li><li>• Regulatory environment and stability</li><li>• Infrastructure and logistics</li><li>• Local talent and skills availability</li><li>• Tax treaties and incentives</li></ul></div>
                      <div><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Valuation Adjustments</h4><ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1"><li>• Country risk premium in WACC</li><li>• Currency-specific discount rates</li><li>• Political risk insurance costs</li><li>• Repatriation restrictions impact</li><li>• Local market multiples</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">International finance requires sophisticated risk management and deep understanding of local markets. Focus on natural hedging, diversification benefits, and building local partnerships. Stay updated on regulatory changes and geopolitical developments.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('dividend-policy')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Dividend Policy</button>
                    <button onClick={() => navigateToSection('governance')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: Corporate Governance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Corporate Governance Section */}
            {activeSection === 'governance' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-gray-600 to-blue-700 rounded-xl"><ScaleIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Corporate Governance & Ethics</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 14 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('governance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('governance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('governance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('governance')} className={`p-2 rounded-full transition-colors ${completedSections.has('governance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Corporate governance encompasses the systems, principles, and processes by which companies are directed and controlled. Good governance ensures accountability, fairness, and transparency in company operations and decision-making.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Governance Framework</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Board of Directors</h4><p className="text-sm text-blue-600 dark:text-blue-400">Independent directors, board committees, oversight</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Management</h4><p className="text-sm text-blue-600 dark:text-blue-400">Executive compensation, performance metrics</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Shareholders</h4><p className="text-sm text-blue-600 dark:text-blue-400">Rights protection, voting mechanisms</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Compliance & Ethics (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Regulatory Compliance</h4><p className="text-sm text-green-600 dark:text-green-400">SEBI guidelines, Companies Act 2013</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">ESG Reporting</h4><p className="text-sm text-green-600 dark:text-green-400">Environmental, social, governance metrics</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Risk Management</h4><p className="text-sm text-green-600 dark:text-green-400">Internal controls, audit committees</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Key Governance Principles</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center"><div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2"><ScaleIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div><h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Accountability</h4><p className="text-xs text-gray-600 dark:text-gray-400">Clear responsibility and reporting</p></div>
                      <div className="text-center"><div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2"><CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" /></div><h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Transparency</h4><p className="text-xs text-gray-600 dark:text-gray-400">Open communication and disclosure</p></div>
                      <div className="text-center"><div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2"><UserGroupIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" /></div><h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Fairness</h4><p className="text-xs text-gray-600 dark:text-gray-400">Equal treatment of stakeholders</p></div>
                      <div className="text-center"><div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-2"><ShieldCheckIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" /></div><h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Responsibility</h4><p className="text-xs text-gray-600 dark:text-gray-400">Ethical business practices</p></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Strong corporate governance builds investor confidence, reduces agency costs, and enhances long-term value creation. Focus on board independence, transparent reporting, and stakeholder engagement. Good governance is not just compliance but a competitive advantage.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('international-finance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: International Finance</button>
                    <button onClick={() => navigateToSection('conclusion')} className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Next: Conclusion<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Implementation</h2>
                      <p className="text-gray-600 dark:text-gray-400">Resources • 8 min read • All Levels</p>
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
                    Corporate finance is essential for business success, providing frameworks for making strategic financial decisions that create shareholder value. Understanding these principles helps in evaluating investment opportunities, managing risks, and driving sustainable growth.
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 leading-relaxed">
                      Corporate finance bridges the gap between financial theory and business practice. Whether you're an entrepreneur, investor, or finance professional, these concepts will help you make better financial decisions and create long-term value.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    {previousPillar && (
                      <Link
                        to={previousPillar.path}
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />
                        Previous: {previousPillar.title}
                      </Link>
                    )}
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        Back to Learn Hub
                      </Link>
                      {nextPillar && (
                        <Link
                          to={nextPillar.path}
                          className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                          Next: {nextPillar.title}
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                        </Link>
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
              className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎉 Congratulations! You've completed Business & Corporate Finance</h3>
                  <p className="text-indigo-100 mb-6">Ready to continue your financial learning journey?</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {previousPillar && (
                      <div className="text-center">
                        <p className="text-sm text-indigo-200 mb-2">Previous Pillar:</p>
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
                        <p className="text-sm text-indigo-200 mb-2">Next Pillar:</p>
                        <Link
                          to={nextPillar.path}
                          className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <span className="text-2xl mr-3">{nextPillar.icon}</span>
                          <div className="text-left">
                            <div className="text-lg">{nextPillar.title}</div>
                            <div className="text-sm opacity-75">Pillar {nextPillar.id} of 8</div>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
                        </Link>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className="text-sm text-indigo-200 mb-2">Or explore:</p>
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
              className="bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Corporate Finance Tools
                    </h3>
                    <p className="text-indigo-100">Apply corporate finance concepts with practical calculators</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Business Valuation', path: '/calculators/business-valuation', icon: '💼', desc: 'Value your business' },
                    { name: 'ROI Calculator', path: '/calculators/roi', icon: '📊', desc: 'Calculate return on investment' },
                    { name: 'Break-even Analysis', path: '/calculators/break-even', icon: '⚖️', desc: 'Find break-even point' },
                    { name: 'Cash Flow Projection', path: '/calculators/cash-flow', icon: '💰', desc: 'Project future cash flows' }
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
                        <p className="text-xs text-indigo-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-indigo-200">
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