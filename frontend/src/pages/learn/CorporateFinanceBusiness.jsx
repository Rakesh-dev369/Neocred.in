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
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function CorporateFinanceBusiness() {
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
      title: 'Introduction to Corporate Finance & Business', 
      icon: PresentationChartLineIcon, 
      emoji: '🏢', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding corporate financial activities and business management'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Corporate Finance & Business', 
      icon: CubeIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of corporate finance and business operations'
    },
    { 
      id: 'financial-planning', 
      title: 'Financial Planning & Analysis', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Budgeting, forecasting, and performance evaluation'
    },
    { 
      id: 'capital-structure', 
      title: 'Capital Structure & Funding', 
      icon: BanknotesIcon, 
      emoji: '💰', 
      level: 'intermediate',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'Debt, equity, and hybrid financing strategies'
    },
    { 
      id: 'investment-decisions', 
      title: 'Investment & Corporate Growth Decisions', 
      icon: ChartPieIcon, 
      emoji: '📈', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Capital budgeting, M&A, and expansion strategies'
    },
    { 
      id: 'risk-management', 
      title: 'Risk Management in Corporate Finance', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Managing financial, operational, and market risks'
    },
    { 
      id: 'corporate-governance', 
      title: 'Corporate Governance & Ethics', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'intermediate',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Board oversight, transparency, and stakeholder management'
    },
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in Corporate Finance & Business', 
      icon: SparklesIcon, 
      emoji: '🚀', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Fintech, ESG, data-driven decisions, and globalization'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Corporate Finance & Business', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Market volatility, regulatory complexity, and governance issues'
    },
    { 
      id: 'conclusion', 
      title: 'Conclusion', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '8 min read',
      difficulty: 'All Levels',
      description: 'Key insights and future of corporate finance & business'
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
      name: 'Government & Public Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Fiscal policy and public spending'
    },
    { 
      name: 'Alternative Finance & Emerging Tech', 
      path: '/learn/alternative-finance', 
      icon: '🚀',
      description: 'Fintech and innovative financing'
    },
    { 
      name: 'International Finance & Trade', 
      path: '/learn/international-finance', 
      icon: '🌍',
      description: 'Global finance and trade operations'
    },
    { 
      name: 'Investments & Capital Markets', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Investment strategies and market analysis'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
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
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Corporate Finance & Business</h1>
              <p className="text-blue-100">Pillar 5 of 8 • Business Management • 10 Sections • 2025 Updated</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/learn/government-finance"
                className="hidden md:flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors group"
              >
                <span className="mr-2">Next: Government Finance</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="hidden md:block">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <BuildingOfficeIcon className="h-8 w-8" />
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
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <PresentationChartLineIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Corporate Finance & Business</h2>
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
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is Corporate Finance & Business?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      Corporate finance and business management focus on the financial activities, strategies, and decisions that organizations undertake to create value, ensure liquidity, and achieve sustainable growth. Corporate finance addresses capital raising, investment decisions, and risk management, while business management includes operations, strategy, and governance. Together, they form the foundation for efficient and profitable organizations.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Corporate Finance Focus Areas
                      </h4>
                      <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Capital Raising:</strong> Securing funds through equity, debt, or hybrid instruments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Investment Decisions:</strong> Allocating resources to maximize shareholder value</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Risk Management:</strong> Identifying and mitigating financial and operational risks</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Value Creation:</strong> Optimizing operations and strategic initiatives</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Business Management Elements
                      </h4>
                      <ul className="space-y-3 text-purple-700 dark:text-purple-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-purple-500" />
                          <span><strong>Strategic Planning:</strong> Long-term vision and competitive positioning</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-purple-500" />
                          <span><strong>Operations Management:</strong> Efficient processes and resource utilization</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-purple-500" />
                          <span><strong>Corporate Governance:</strong> Accountability, transparency, and ethics</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-purple-500" />
                          <span><strong>Stakeholder Management:</strong> Balancing interests of all parties</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300">
                      Corporate finance and business management are interconnected disciplines that drive organizational success. Effective financial management ensures adequate capital, optimal investment decisions, and risk mitigation, while sound business management creates sustainable competitive advantages and stakeholder value.
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
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <CubeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Corporate Finance & Business</h2>
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
                    Corporate finance and business management encompass six core components that work together to ensure organizational success, financial stability, and sustainable growth. Understanding these components is essential for effective business leadership and financial decision-making.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Financial Planning & Analysis</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Budgeting, forecasting, and performance evaluation for informed decision-making.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Strategic Budgeting</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Annual and project-based resource allocation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Financial Forecasting</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Revenue, expense, and cash flow projections</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Performance Metrics</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">ROI, ROE, EBITDA, and profitability analysis</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Capital Structure & Funding</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Optimal mix of debt, equity, and hybrid financing for growth and operations.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Equity Financing</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">IPOs, private equity, venture capital</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Debt Financing</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Bank loans, bonds, commercial papers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Working Capital</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Cash, receivables, payables optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📈 Investment Decisions</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Strategic allocation of funds to maximize returns and growth.</p>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• <strong>Capital Budgeting:</strong> NPV, IRR analysis</li>
                        <li>• <strong>M&A Activities:</strong> Strategic acquisitions</li>
                        <li>• <strong>Expansion Projects:</strong> Market growth</li>
                        <li>• <strong>Asset Optimization:</strong> Resource efficiency</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🛡️ Risk Management</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Identifying and mitigating financial, operational, and market risks.</p>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• <strong>Market Risk:</strong> Interest rate, currency exposure</li>
                        <li>• <strong>Credit Risk:</strong> Counterparty defaults</li>
                        <li>• <strong>Operational Risk:</strong> Process and system failures</li>
                        <li>• <strong>Hedging Strategies:</strong> Derivatives usage</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">⚖️ Corporate Governance</h3>
                      <p className="text-teal-700 dark:text-teal-300 mb-4">Policies ensuring accountability, transparency, and stakeholder protection.</p>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• <strong>Board Oversight:</strong> Strategic guidance</li>
                        <li>• <strong>Transparency:</strong> Accurate reporting</li>
                        <li>• <strong>Compliance:</strong> Regulatory adherence</li>
                        <li>• <strong>Ethics:</strong> CSR and sustainability</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🎯 Business Strategy & Operations</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Planning and execution of growth, marketing, and operational efficiency initiatives.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Strategic Planning</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Market analysis and competitive positioning</li>
                          <li>• Long-term vision and goal setting</li>
                          <li>• Resource allocation and prioritization</li>
                          <li>• Performance measurement and KPIs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Operational Excellence</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Process optimization and automation</li>
                          <li>• Supply chain management</li>
                          <li>• Quality control and improvement</li>
                          <li>• Technology integration and innovation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      These six core components work synergistically to create a robust corporate finance and business management framework. Financial planning guides resource allocation, capital structure ensures adequate funding, investment decisions drive growth, risk management protects value, governance ensures accountability, and strategic operations deliver competitive advantage.
                    </p>
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
                      onClick={() => navigateToSection('financial-planning')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Financial Planning & Analysis
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Financial Planning & Analysis Section */}
            {activeSection === 'financial-planning' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="financial-planning"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Financial Planning & Analysis</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('financial-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('financial-planning') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('financial-planning') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('financial-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('financial-planning')
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
                    Financial planning and analysis (FP&A) is the backbone of corporate decision-making, involving budgeting, forecasting, and performance evaluation to guide strategic initiatives and ensure financial health.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Budgeting</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Creating annual or project-based budgets to allocate resources efficiently.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Operating Budget</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Revenue Budget:</strong> Sales forecasts by product/region</li>
                          <li>• <strong>Expense Budget:</strong> Fixed and variable cost planning</li>
                          <li>• <strong>Personnel Budget:</strong> Headcount and compensation</li>
                          <li>• <strong>Marketing Budget:</strong> Advertising and promotion spend</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Capital Budget</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>CapEx Planning:</strong> Equipment and infrastructure</li>
                          <li>• <strong>Technology Investments:</strong> IT systems and software</li>
                          <li>• <strong>Facility Expansion:</strong> Real estate and construction</li>
                          <li>• <strong>R&D Budget:</strong> Innovation and development projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📈 Financial Forecasting</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Projecting revenue, expenses, cash flow, and profitability.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Revenue Forecasting</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Market trends, seasonality, growth projections</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Cash Flow Forecasting</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Working capital, payment cycles, liquidity planning</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Scenario Planning</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Best case, worst case, most likely scenarios</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📊 Performance Metrics</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Key financial ratios and KPIs for business evaluation.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">ROI (Return on Investment)</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Net Profit / Investment</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">ROE (Return on Equity)</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Net Income / Equity</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">EBITDA Margin</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">EBITDA / Revenue</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔍 Variance Analysis</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Comparing actual results with budgeted/forecasted figures to inform decisions.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Revenue Variance</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Volume variance analysis</li>
                          <li>• Price variance impact</li>
                          <li>• Mix variance effects</li>
                          <li>• Market share changes</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Cost Variance</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Material cost changes</li>
                          <li>• Labor efficiency variance</li>
                          <li>• Overhead allocation</li>
                          <li>• Inflation impact</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Corrective Actions</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Process improvements</li>
                          <li>• Cost optimization</li>
                          <li>• Revenue enhancement</li>
                          <li>• Strategic adjustments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Financial planning and analysis provides the foundation for strategic decision-making through systematic budgeting, accurate forecasting, comprehensive performance measurement, and thorough variance analysis. This enables organizations to optimize resource allocation and achieve financial objectives.
                    </p>
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
                      onClick={() => navigateToSection('capital-structure')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Capital Structure & Funding
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Capital Structure & Funding Section */}
            {activeSection === 'capital-structure' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="capital-structure"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Capital Structure & Funding</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 18 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('capital-structure')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('capital-structure') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('capital-structure') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('capital-structure')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('capital-structure')
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
                    Capital structure represents the mix of debt, equity, and hybrid financing that companies use to fund operations and growth. Optimal capital structure balances cost of capital, risk, control, and flexibility to maximize firm value.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📈 Equity Financing</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Issuing shares to investors through various mechanisms and stages.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">IPO (Initial Public Offering)</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• First-time public listing</li>
                          <li>• SEBI approval required</li>
                          <li>• Book building process</li>
                          <li>• Retail and institutional investors</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Private Equity</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Institutional investors</li>
                          <li>• Growth capital funding</li>
                          <li>• Strategic value addition</li>
                          <li>• Exit through IPO/acquisition</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Venture Capital</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Early-stage startups</li>
                          <li>• High-risk, high-return</li>
                          <li>• Mentorship and networks</li>
                          <li>• Series A, B, C funding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💳 Debt Financing</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Borrowing funds through various debt instruments and lenders.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Bank Loans</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Term loans for expansion</li>
                            <li>• Working capital loans</li>
                            <li>• Equipment financing</li>
                            <li>• Credit lines and overdrafts</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Bonds & Debentures</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Corporate bonds (secured/unsecured)</li>
                            <li>• Convertible debentures</li>
                            <li>• Commercial papers (short-term)</li>
                            <li>• External commercial borrowings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔄 Hybrid Instruments</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Combining features of debt and equity financing.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Convertible Debentures</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Debt convertible to equity at predetermined terms</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Preference Shares</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Fixed dividend with priority over equity</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Mezzanine Financing</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Debt with equity conversion options</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">⚖️ Funding Decisions</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Balancing cost of capital, risk, control, and flexibility in financing choices.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Cost Considerations</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Cost of Equity:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Dividend yield + capital appreciation expectations</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Cost of Debt:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Interest rate adjusted for tax benefits</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">WACC:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Weighted Average Cost of Capital optimization</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Strategic Factors</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Control:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Ownership dilution vs. debt obligations</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Flexibility:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Financial covenants and repayment terms</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Risk:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Financial leverage and business risk balance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700 mb-6">
                    <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🔄 Working Capital Management</h3>
                    <p className="text-teal-700 dark:text-teal-300 mb-4">Optimizing cash, receivables, payables, and inventory for operational efficiency.</p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Cash Management</h4>
                        <ul className="text-xs text-teal-600 dark:text-teal-400 space-y-1">
                          <li>• Liquidity planning</li>
                          <li>• Cash flow optimization</li>
                          <li>• Short-term investments</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Receivables</h4>
                        <ul className="text-xs text-teal-600 dark:text-teal-400 space-y-1">
                          <li>• Credit policy</li>
                          <li>• Collection efficiency</li>
                          <li>• Factoring options</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Payables</h4>
                        <ul className="text-xs text-teal-600 dark:text-teal-400 space-y-1">
                          <li>• Payment terms</li>
                          <li>• Supplier relationships</li>
                          <li>• Cash discounts</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Inventory</h4>
                        <ul className="text-xs text-teal-600 dark:text-teal-400 space-y-1">
                          <li>• Just-in-time</li>
                          <li>• Economic order quantity</li>
                          <li>• Turnover optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      Optimal capital structure balances the cost, risk, and control implications of different financing sources. Companies must consider their growth stage, industry characteristics, and strategic objectives when choosing between equity, debt, and hybrid instruments while maintaining efficient working capital management.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('financial-planning')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Financial Planning
                    </button>
                    <button
                      onClick={() => navigateToSection('investment-decisions')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Investment Decisions
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investment & Corporate Growth Decisions Section */}
            {activeSection === 'investment-decisions' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="investment-decisions"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <ChartPieIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Investment & Corporate Growth Decisions</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('investment-decisions')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('investment-decisions') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('investment-decisions') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('investment-decisions')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('investment-decisions')
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
                    Investment and corporate growth decisions involve evaluating long-term projects, strategic acquisitions, and expansion opportunities to maximize shareholder value and achieve sustainable competitive advantages.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Capital Budgeting</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Evaluating long-term investment projects using financial metrics and analysis.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">NPV (Net Present Value)</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Present value of cash inflows minus initial investment</p>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-xs">
                          <strong>Decision Rule:</strong> Accept if NPV {">"}  0
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">IRR (Internal Rate of Return)</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Discount rate that makes NPV equal to zero</p>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-xs">
                          <strong>Decision Rule:</strong> Accept if IRR {">"}  Cost of Capital
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Payback Period</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Time required to recover initial investment</p>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-xs">
                          <strong>Decision Rule:</strong> Shorter payback preferred
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🤝 Mergers & Acquisitions (M&A)</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Growth through acquisition, consolidation, or strategic alliances.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Strategic Rationale</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Market expansion and customer base</li>
                            <li>• Technology and capability acquisition</li>
                            <li>• Economies of scale and synergies</li>
                            <li>• Vertical/horizontal integration</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Valuation Methods</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Discounted Cash Flow (DCF)</li>
                            <li>• Comparable company analysis</li>
                            <li>• Precedent transaction analysis</li>
                            <li>• Asset-based valuation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🌍 Expansion & Diversification</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Entering new markets, products, or geographies for growth.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Market Expansion</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Geographic expansion (domestic/international)</li>
                            <li>• New customer segments</li>
                            <li>• Distribution channel expansion</li>
                            <li>• Digital transformation initiatives</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Product Diversification</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• New product development</li>
                            <li>• Related diversification</li>
                            <li>• Unrelated diversification</li>
                            <li>• Innovation and R&D investments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔄 Divestment & Restructuring</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Selling non-core assets or reorganizing operations for efficiency and focus.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Divestment Strategies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Asset Sales:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Selling non-core business units or assets</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Spin-offs:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Creating independent companies from divisions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Joint Ventures:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Partnering with other companies</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Restructuring Benefits</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Focus:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Concentrate on core competencies</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Efficiency:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Improve operational performance</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Value:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unlock shareholder value</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                      Investment and growth decisions require rigorous financial analysis using NPV, IRR, and payback period metrics. Companies must evaluate M&A opportunities, expansion strategies, and divestment options to optimize their portfolio and maximize long-term value creation.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('capital-structure')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Capital Structure
                    </button>
                    <button
                      onClick={() => navigateToSection('risk-management')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risk Management in Corporate Finance</h2>
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
                    Risk management in corporate finance involves identifying, measuring, and mitigating financial, operational, and market risks that could impact business performance and stakeholder value.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Market Risk</h3>
                      <p className="text-red-700 dark:text-red-300 mb-4">Exposure to interest rates, currency, and commodity price fluctuations.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Interest Rate Risk</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Impact on borrowing costs and investment returns</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Currency Risk</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Foreign exchange exposure in international operations</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Commodity Risk</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Raw material price volatility impact</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">💳 Credit Risk</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Risk of default by clients, suppliers, or counterparties.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Customer Credit Risk</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Accounts receivable and bad debt exposure</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Counterparty Risk</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Financial institution and trading partner defaults</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Concentration Risk</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Over-dependence on major customers or suppliers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚙️ Operational Risk</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Risks from processes, systems, or human errors affecting business operations.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Process Risk</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Workflow inefficiencies</li>
                          <li>• Quality control failures</li>
                          <li>• Supply chain disruptions</li>
                          <li>• Regulatory compliance gaps</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Technology Risk</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• System failures and downtime</li>
                          <li>• Cybersecurity breaches</li>
                          <li>• Data loss and corruption</li>
                          <li>• Technology obsolescence</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Human Risk</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Key personnel departure</li>
                          <li>• Fraud and misconduct</li>
                          <li>• Skills and training gaps</li>
                          <li>• Human error impact</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔄 Hedging & Derivatives</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Using financial instruments to mitigate various types of risk exposure.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Hedging Instruments</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Forward Contracts:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Lock in future prices for currencies or commodities</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Options:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Right to buy/sell at predetermined prices</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Swaps:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Exchange cash flows or interest rate exposures</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Risk Mitigation Strategies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Diversification:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Spread risk across markets, products, customers</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Insurance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Transfer specific risks to insurance companies</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Contingency Planning:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Prepare for various risk scenarios</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">⚖️ Compliance & Legal Risk</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Ensuring adherence to corporate law, taxation, and regulatory requirements.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Regulatory Compliance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• SEBI regulations for listed companies</li>
                          <li>• Companies Act 2013 compliance</li>
                          <li>• Tax law adherence (GST, Income Tax)</li>
                          <li>• Industry-specific regulations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Legal Risk Management</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Contract management and disputes</li>
                          <li>• Intellectual property protection</li>
                          <li>• Employment law compliance</li>
                          <li>• Environmental and safety regulations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Effective risk management requires identifying market, credit, and operational risks, then implementing appropriate hedging strategies, diversification, and compliance frameworks. Companies must balance risk mitigation costs with potential impact to optimize their risk-return profile.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('investment-decisions')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Investment Decisions
                    </button>
                    <button
                      onClick={() => navigateToSection('corporate-governance')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Corporate Governance
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Corporate Governance Section */}
            {activeSection === 'corporate-governance' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="corporate-governance"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <ScaleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Corporate Governance & Ethics</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 12 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('corporate-governance')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('corporate-governance') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('corporate-governance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('corporate-governance')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('corporate-governance')
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
                    Corporate governance encompasses policies and frameworks ensuring accountability, transparency, and stakeholder protection while promoting ethical business practices and sustainable value creation.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">👥 Board of Directors & Management</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Oversight and strategic guidance for organizational objectives and stakeholder interests.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Board Composition</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Independent Directors:</strong> Minimum 50% for listed companies</li>
                          <li>• <strong>Executive Directors:</strong> Company management representation</li>
                          <li>• <strong>Non-Executive Directors:</strong> External expertise and oversight</li>
                          <li>• <strong>Diversity:</strong> Gender, skills, and experience diversity</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Board Committees</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Audit Committee:</strong> Financial reporting oversight</li>
                          <li>• <strong>Nomination & Remuneration:</strong> Executive compensation</li>
                          <li>• <strong>Risk Management:</strong> Risk oversight and mitigation</li>
                          <li>• <strong>CSR Committee:</strong> Corporate social responsibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📊 Transparency & Accountability</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Accurate reporting, audits, and disclosures to stakeholders.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Financial Reporting</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Quarterly and annual financial statements</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Audit & Assurance</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Independent auditor verification</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Regulatory Disclosures</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Material events and price-sensitive information</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🤝 Stakeholder Management</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Balancing interests of shareholders, employees, customers, and society.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Shareholders</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Returns & governance</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Employees</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Fair compensation & growth</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Customers</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Quality & service</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Society</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Environmental & social impact</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🌱 Ethical Practices</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Corporate social responsibility, anti-corruption, and sustainability initiatives.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">CSR Initiatives</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Education and skill development</li>
                          <li>• Healthcare and sanitation</li>
                          <li>• Environmental conservation</li>
                          <li>• Rural development programs</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Anti-Corruption</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Code of conduct policies</li>
                          <li>• Whistleblower mechanisms</li>
                          <li>• Regular compliance training</li>
                          <li>• Third-party due diligence</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Sustainability</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Carbon footprint reduction</li>
                          <li>• Renewable energy adoption</li>
                          <li>• Waste management programs</li>
                          <li>• Sustainable supply chains</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-teal-700 dark:text-teal-300 text-sm">
                      Strong corporate governance builds stakeholder trust through effective board oversight, transparent reporting, and ethical practices. Companies with robust governance frameworks typically achieve better long-term performance and sustainable value creation.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('risk-management')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Risk Management
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in Corporate Finance & Business</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p>
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
                    Modern corporate finance is being transformed by fintech integration, ESG considerations, data-driven decision making, globalization, and innovative funding mechanisms in startup ecosystems.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🚀 Fintech Integration</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Digital lending, automated treasury management, and blockchain for transparency.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Digital Lending</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• AI-powered credit scoring</li>
                          <li>• Instant loan approvals</li>
                          <li>• Alternative data sources</li>
                          <li>• Peer-to-peer lending platforms</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Treasury Management</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Automated cash management</li>
                          <li>• Real-time liquidity monitoring</li>
                          <li>• Smart payment systems</li>
                          <li>• Digital banking integration</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Blockchain Technology</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Smart contracts for automation</li>
                          <li>• Supply chain transparency</li>
                          <li>• Immutable transaction records</li>
                          <li>• Decentralized finance (DeFi)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌱 ESG (Environmental, Social, Governance)</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Sustainable and socially responsible business practices driving investment decisions.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">ESG Investment Criteria</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Environmental:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Carbon emissions, renewable energy, waste reduction</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Social:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Employee welfare, community impact, diversity</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Governance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Board independence, transparency, ethics</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Business Impact (2025)</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">ESG-focused investments</span>
                              <span className="font-semibold">$35+ trillion globally</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Indian ESG funds AUM</span>
                              <span className="font-semibold">₹25,000+ crores</span>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <div className="flex justify-between">
                              <span className="text-sm">Companies with ESG reporting</span>
                              <span className="font-semibold">85%+ (Top 1000)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📊 Data-Driven Decision Making</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Big data and analytics for financial planning and strategic insights.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Predictive Analytics</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Forecasting market trends and customer behavior</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Real-time Reporting</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Dynamic dashboards and automated insights</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Risk Analytics</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Advanced risk modeling and scenario analysis</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🌍 Globalization</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Cross-border investments, international financing, and supply chain management.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">International Expansion</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Global market entry and cross-border M&A</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Currency Management</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Multi-currency operations and hedging</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Supply Chain Finance</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Global supplier financing and trade finance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🚀 Startups & Venture Ecosystems</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Innovative funding methods like crowdfunding, angel investing, and incubators.</p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Crowdfunding</h4>
                        <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Equity crowdfunding</li>
                          <li>• Reward-based funding</li>
                          <li>• Peer-to-peer lending</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Angel Investing</h4>
                        <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• High-net-worth individuals</li>
                          <li>• Early-stage funding</li>
                          <li>• Mentorship and networks</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Incubators</h4>
                        <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Business development</li>
                          <li>• Seed funding programs</li>
                          <li>• Shared resources</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Accelerators</h4>
                        <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Intensive programs</li>
                          <li>• Rapid scaling support</li>
                          <li>• Demo day presentations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-pink-700 dark:text-pink-300 text-sm">
                      Modern corporate finance is evolving rapidly with fintech integration, ESG considerations, data analytics, and global connectivity. Companies must adapt to these trends while maintaining strong fundamentals in financial management and governance.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('corporate-governance')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Corporate Governance
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
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in Corporate Finance & Business</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 12 min read • Advanced</p>
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
                    Corporate finance and business management face significant challenges from market volatility, regulatory complexity, governance failures, and the need to balance short-term profitability with long-term sustainability.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Market Volatility & Economic Uncertainty</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Global Economic Shocks</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Pandemic impacts, geopolitical tensions, supply chain disruptions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Interest Rate Volatility</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Central bank policy changes affecting borrowing costs</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Currency Fluctuations</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Exchange rate risks for multinational operations</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">💰 Access to Affordable Capital</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">SME Funding Gap</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Limited access to formal credit for small businesses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Startup Capital Constraints</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Early-stage funding challenges and high equity dilution</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Credit Rating Dependencies</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">High borrowing costs for lower-rated companies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚖️ Regulatory Complexity</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Navigating complex and evolving regulatory frameworks across jurisdictions.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Compliance Burden</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Multiple regulatory bodies</li>
                          <li>• Frequent rule changes</li>
                          <li>• High compliance costs</li>
                          <li>• Penalty risks</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Cross-border Issues</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Different jurisdictions</li>
                          <li>• Tax treaty complexities</li>
                          <li>• Transfer pricing rules</li>
                          <li>• FEMA regulations</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Reporting Requirements</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• ESG disclosures</li>
                          <li>• Related party transactions</li>
                          <li>• Insider trading compliance</li>
                          <li>• Quarterly reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🚫 Governance Failures & Fraud</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Corporate Scandals</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Financial fraud, accounting irregularities, management misconduct</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Board Ineffectiveness</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Lack of independent oversight and strategic guidance</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Stakeholder Conflicts</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Misaligned interests between management and shareholders</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">⏰ Short-term vs Long-term Balance</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Quarterly Pressure</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Market expectations for consistent quarterly earnings</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Investment Horizons</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Balancing immediate returns with long-term value creation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Sustainability Goals</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Integrating ESG objectives with financial performance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🛠️ Solutions & Best Practices</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Risk Mitigation</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Diversification:</strong> Geographic and business line diversification</li>
                          <li>• <strong>Hedging:</strong> Financial instruments to manage market risks</li>
                          <li>• <strong>Scenario Planning:</strong> Stress testing and contingency planning</li>
                          <li>• <strong>Insurance:</strong> Comprehensive risk transfer mechanisms</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Governance Enhancement</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Board Independence:</strong> Strong independent director presence</li>
                          <li>• <strong>Transparency:</strong> Regular and comprehensive disclosures</li>
                          <li>• <strong>Ethics Programs:</strong> Robust compliance and ethics frameworks</li>
                          <li>• <strong>Stakeholder Engagement:</strong> Regular communication with all stakeholders</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Corporate finance challenges require proactive management through diversification, robust governance, regulatory compliance, and balanced decision-making. Companies must build resilience while maintaining agility to navigate an increasingly complex business environment.
                    </p>
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
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">🎯 Key Insights</h3>
                    <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                      Corporate finance and business management are critical for organizational success, growth, and financial stability. By effectively managing capital, investments, risk, and governance, companies can maximize value for shareholders while ensuring operational efficiency and sustainability. The integration of technology, ESG considerations, and global strategies is shaping the future of corporate finance, enabling businesses to adapt, innovate, and thrive in an increasingly complex financial ecosystem.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Essential Corporate Finance Principles</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Financial Management</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-700">Capital Optimization</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Balance debt and equity to minimize cost of capital</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-700">Investment Discipline</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Use NPV, IRR analysis for capital allocation decisions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
                            <h5 className="font-semibold text-purple-700">Risk Management</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Identify, measure, and mitigate financial and operational risks</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Business Excellence</h4>
                        <div className="space-y-2">
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">📊</span>
                            <div>
                              <strong className="text-sm">Strategic Planning</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Long-term vision with measurable objectives</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚙️</span>
                            <div>
                              <strong className="text-sm">Operational Efficiency</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Process optimization and cost management</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div>
                              <strong className="text-sm">Corporate Governance</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Transparency, accountability, and ethical practices</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🌱</span>
                            <div>
                              <strong className="text-sm">Sustainability Focus</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">ESG integration for long-term value creation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Future of Corporate Finance</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">🚀</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Technology Integration</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">AI, blockchain, and automation</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">🌱</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">ESG Leadership</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Sustainable business practices</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">🌍</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Global Connectivity</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Cross-border operations</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Action Framework for Success</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Plan</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Strategic financial planning and budgeting</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">💰</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Fund</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Optimal capital structure and funding</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🔄</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Execute</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Investment decisions and operations</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Monitor</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Performance tracking and governance</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 p-8 rounded-xl text-center border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">🎆 Build Your Corporate Finance Expertise!</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      Master the art and science of corporate finance to drive business success and create sustainable value.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-blue-600">💡 Strategic Thinking</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-green-600">💰 Financial Discipline</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-purple-600">⚖️ Ethical Leadership</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Challenges
                    </button>
                    <Link
                      to="/learn/government-finance"
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Government Finance
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="flex justify-center items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Link
                        to="/learn/government-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🏛️ Government
                      </Link>
                      
                      <Link
                        to="/learn/alternative-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🔄 Alternative
                      </Link>
                      
                      <Link
                        to="/learn/international-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🌍 International
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
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Corporate Finance & Business Tools
                    </h3>
                    <p className="text-blue-100">Calculate business metrics, analyze performance, and plan corporate strategies</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Business Loan EMI', path: '/calculators/business-loan', icon: '🏢', desc: 'Business loan calculations' },
                    { name: 'ROI Calculator', path: '/calculators/roi', icon: '📊', desc: 'Return on investment analysis' },
                    { name: 'Break-even Analysis', path: '/calculators/breakeven', icon: '⚖️', desc: 'Break-even point calculator' },
                    { name: 'Cash Flow Planner', path: '/calculators/cashflow', icon: '💰', desc: 'Cash flow projections' },
                    { name: 'Valuation Calculator', path: '/calculators/valuation', icon: '💎', desc: 'Business valuation tools' },
                    { name: 'Working Capital', path: '/calculators/working-capital', icon: '🔄', desc: 'Working capital analysis' },
                    { name: 'Debt-to-Equity', path: '/calculators/debt-equity', icon: '📈', desc: 'Capital structure ratios' },
                    { name: 'NPV Calculator', path: '/calculators/npv', icon: '🎯', desc: 'Net present value analysis' }
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