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
  ReceiptPercentIcon,
  BanknotesIcon as MoneyIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function GovernmentPublicFinance() {
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
      title: 'Introduction to Government & Public Finance', 
      icon: BuildingLibraryIcon, 
      emoji: '🏛️', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding government revenue, expenditure, and fiscal management'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Government & Public Finance', 
      icon: CubeIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of public financial management'
    },
    { 
      id: 'government-revenue', 
      title: 'Government Revenue', 
      icon: ReceiptPercentIcon, 
      emoji: '💰', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Tax and non-tax revenue sources for government'
    },
    { 
      id: 'public-expenditure', 
      title: 'Public Expenditure', 
      icon: MoneyIcon, 
      emoji: '💸', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Government spending on infrastructure, welfare, and services'
    },
    { 
      id: 'public-debt', 
      title: 'Public Debt & Borrowing', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Domestic and external borrowing for fiscal management'
    },
    { 
      id: 'fiscal-policy', 
      title: 'Fiscal Policy & Economic Management', 
      icon: ChartPieIcon, 
      emoji: '📈', 
      level: 'intermediate',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'Using fiscal tools to influence economic activity'
    },
    { 
      id: 'budgeting-planning', 
      title: 'Budgeting and Planning', 
      icon: DocumentTextIcon, 
      emoji: '📋', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Annual budgets and multi-year fiscal planning'
    },
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in Government & Public Finance', 
      icon: SparklesIcon, 
      emoji: '🚀', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Digital governance, green finance, and PPP models'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Government & Public Finance', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Fiscal deficits, corruption, and policy challenges'
    },
    { 
      id: 'conclusion', 
      title: 'Conclusion', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '8 min read',
      difficulty: 'All Levels',
      description: 'Key insights and future of public finance'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '92%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.6', icon: StarIcon },
    { label: 'Active Learners', value: '22K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
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
      description: 'Fintech and innovative financing'
    },
    { 
      name: 'International Finance & Trade', 
      path: '/learn/international-finance', 
      icon: '🌍',
      description: 'Global finance and trade operations'
    },
    { 
      name: 'Personal Finance', 
      path: '/learn/personal-finance', 
      icon: '💰',
      description: 'Individual financial management'
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-8">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Government & Public Finance</h1>
              <p className="text-indigo-100">Pillar 2 of 8 • Public Policy • 10 Sections • 2025 Updated</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/learn/alternative-finance"
                className="hidden md:flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors group"
              >
                <span className="mr-2">Next: Alternative Finance</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="hidden md:block">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <BuildingLibraryIcon className="h-8 w-8" />
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
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl">
                      <BuildingLibraryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Government & Public Finance</h2>
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
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-8 border border-indigo-200 dark:border-indigo-700">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is Government & Public Finance?
                    </h3>
                    <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed">
                      Government and public finance involve the management of a country's revenue, expenditure, and debt to ensure economic stability, growth, and the welfare of citizens. It encompasses taxation, government spending, borrowing, budgeting, and fiscal policies. Effective public finance supports infrastructure, social programs, defense, and public services while maintaining macroeconomic balance and fiscal sustainability.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Key Functions of Public Finance
                      </h4>
                      <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Resource Allocation:</strong> Directing funds to essential services and infrastructure</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Economic Stabilization:</strong> Managing inflation, unemployment, and growth</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Income Redistribution:</strong> Reducing inequality through progressive taxation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Public Goods Provision:</strong> Defense, law enforcement, and public infrastructure</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Indian Public Finance Context (2025)
                      </h4>
                      <ul className="space-y-3 text-green-700 dark:text-green-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Union Budget:</strong> ₹48+ lakh crore total expenditure (2024-25)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Tax-to-GDP Ratio:</strong> 11.7% (direct + indirect taxes)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Fiscal Deficit:</strong> 5.1% of GDP target for FY25</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Public Debt:</strong> 84% of GDP (Central + State combined)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Government and public finance are fundamental to national development and citizen welfare. Through effective management of revenues, expenditures, and debt, governments can promote economic growth, ensure social equity, and provide essential public services while maintaining fiscal sustainability.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <CubeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Government & Public Finance</h2>
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
                    Government and public finance consists of six core components that work together to ensure effective fiscal management, economic stability, and public welfare delivery.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">💰 Revenue Generation</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Taxes, fees, fines, and non-tax revenues to fund government operations.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Tax Revenue</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Direct taxes (income, corporate) and indirect taxes (GST, customs)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Non-Tax Revenue</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Fees, fines, dividends from PSUs, interest receipts</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💸 Public Expenditure</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Allocation of funds for infrastructure, healthcare, education, and welfare.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Capital Expenditure</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Infrastructure, roads, hospitals, defense equipment</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Revenue Expenditure</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Salaries, subsidies, pensions, operational costs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📊 Public Debt & Borrowing</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Managing domestic and international borrowing to finance deficits.</p>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• <strong>Domestic Borrowing:</strong> Government bonds, treasury bills</li>
                        <li>• <strong>External Borrowing:</strong> IMF, World Bank loans</li>
                        <li>• <strong>Debt Management:</strong> Sustainable debt levels</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📈 Fiscal Policy</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Using government spending and taxation to influence economic activity.</p>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• <strong>Expansionary Policy:</strong> Increase spending, reduce taxes</li>
                        <li>• <strong>Contractionary Policy:</strong> Reduce spending, increase taxes</li>
                        <li>• <strong>Counter-Cyclical:</strong> Stabilize economic cycles</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">📋 Budgeting & Planning</h3>
                      <p className="text-teal-700 dark:text-teal-300 mb-4">Annual and multi-year financial planning for resource allocation.</p>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• <strong>Annual Budget:</strong> Revenue and expenditure estimates</li>
                        <li>• <strong>Medium-Term Plans:</strong> Multi-year frameworks</li>
                        <li>• <strong>Performance Budgeting:</strong> Outcome-based allocation</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">⚖️ Regulatory Oversight</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Ensures transparency, accountability, and adherence to legal frameworks.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Oversight Bodies</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Comptroller and Auditor General (CAG)</li>
                          <li>• Parliamentary committees</li>
                          <li>• Central Vigilance Commission</li>
                          <li>• Public Accounts Committee</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Transparency Measures</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Right to Information Act</li>
                          <li>• Public financial disclosures</li>
                          <li>• Audit reports publication</li>
                          <li>• Citizen engagement platforms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                      These six core components work synergistically to create an effective public finance system. Revenue generation funds government operations, expenditure delivers public services, debt management ensures fiscal sustainability, fiscal policy guides economic direction, budgeting optimizes resource allocation, and regulatory oversight maintains accountability.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('introduction')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Introduction
                    </button>
                    <button
                      onClick={() => navigateToSection('government-revenue')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Government Revenue
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Government Revenue Section */}
            {activeSection === 'government-revenue' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="government-revenue"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <ReceiptPercentIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Government Revenue</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('government-revenue')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('government-revenue') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('government-revenue') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('government-revenue')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('government-revenue')
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
                    Government revenue comprises tax and non-tax sources that fund public expenditure, infrastructure development, and social welfare programs. Understanding revenue structure is crucial for fiscal policy and economic management.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Tax Revenue</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Primary source of government income through direct and indirect taxation.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Direct Taxes</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Income Tax:</strong> Individual and HUF taxation (5%-30% slabs)</li>
                          <li>• <strong>Corporate Tax:</strong> 25%-30% on company profits</li>
                          <li>• <strong>Capital Gains Tax:</strong> 10%-20% on investment gains</li>
                          <li>• <strong>Wealth Tax:</strong> Abolished in 2015, replaced by surcharge</li>
                          <li>• <strong>Securities Transaction Tax:</strong> 0.001%-0.1% on trades</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Indirect Taxes</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>GST:</strong> 5%, 12%, 18%, 28% on goods and services</li>
                          <li>• <strong>Customs Duties:</strong> Import/export tariffs (0%-150%)</li>
                          <li>• <strong>Excise Duties:</strong> Petroleum, tobacco, alcohol</li>
                          <li>• <strong>Service Tax:</strong> Merged into GST from 2017</li>
                          <li>• <strong>Cess:</strong> Education, health, Swachh Bharat cess</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏛️ Non-Tax Revenue</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Revenue from government services, assets, and enterprises.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Fees & Charges</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">License fees, registration charges, court fees</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">PSU Dividends</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Profits from public sector enterprises</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Interest Receipts</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Returns on government investments and loans</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🌍 Grants & Aid</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">External funding from international organizations and governments.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">World Bank</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Development projects</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">IMF</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Balance of payments</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Bilateral Aid</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Country partnerships</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📊 Indian Revenue Statistics (2024-25)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">₹30.8L Cr</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Total Tax Revenue</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Union Budget 2024-25</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">₹4.3L Cr</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Non-Tax Revenue</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Fees, dividends, interest</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">11.7%</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Tax-to-GDP Ratio</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Direct + Indirect taxes</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Government revenue structure balances direct taxes (progressive), indirect taxes (broad-based), and non-tax sources. Effective tax policy ensures adequate revenue generation while promoting economic growth and maintaining taxpayer compliance.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Core Components
                    </button>
                    <button
                      onClick={() => navigateToSection('public-expenditure')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Public Expenditure
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Public Expenditure Section */}
            {activeSection === 'public-expenditure' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="public-expenditure"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <MoneyIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Public Expenditure</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('public-expenditure')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('public-expenditure') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('public-expenditure') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('public-expenditure')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('public-expenditure')
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
                    Public expenditure represents government spending on infrastructure, social programs, defense, and public services to promote economic development and citizen welfare.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏗️ Capital Expenditure</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Long-term investments in infrastructure and asset creation.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Infrastructure</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Roads, highways, bridges (₹2.4L cr in 2024-25)</li>
                            <li>• Railways expansion and modernization</li>
                            <li>• Airports, ports, and logistics hubs</li>
                            <li>• Digital infrastructure and connectivity</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Social Infrastructure</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Schools, colleges, universities</li>
                            <li>• Hospitals and healthcare facilities</li>
                            <li>• Housing projects (PM Awas Yojana)</li>
                            <li>• Water supply and sanitation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">💼 Revenue Expenditure</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Day-to-day operational expenses and recurring costs.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Administrative Costs</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Government employee salaries (₹4.2L cr)</li>
                            <li>• Pensions and retirement benefits</li>
                            <li>• Office maintenance and operations</li>
                            <li>• Travel and communication expenses</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Interest Payments</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Debt servicing (₹11.9L cr in 2024-25)</li>
                            <li>• Bond interest payments</li>
                            <li>• External debt obligations</li>
                            <li>• State government transfers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌱 Social Spending</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Welfare programs, healthcare, education, and poverty alleviation initiatives.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Healthcare</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Ayushman Bharat (₹7,200 cr)</li>
                          <li>• National Health Mission</li>
                          <li>• Medical infrastructure</li>
                          <li>• Vaccination programs</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Education</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Samagra Shiksha Abhiyan</li>
                          <li>• Mid-day meal scheme</li>
                          <li>• Higher education funding</li>
                          <li>• Skill development programs</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Welfare</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• MGNREGA (₹60,000 cr)</li>
                          <li>• PM-KISAN direct transfers</li>
                          <li>• Food subsidies (PDS)</li>
                          <li>• Social security pensions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🌾 Subsidies & Incentives</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Support for agriculture, industries, and vulnerable populations.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Agricultural Subsidies</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Fertilizer Subsidy:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">₹1.75L cr to reduce farmer input costs</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Crop Insurance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">PM Fasal Bima Yojana coverage</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">MSP Support:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Minimum Support Price procurement</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Industrial Incentives</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">PLI Schemes:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Production Linked Incentives for manufacturing</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Startup Support:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Fund of Funds, tax exemptions</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Green Energy:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Solar, wind power subsidies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      Public expenditure balances capital investments for long-term growth with revenue expenses for current operations. Effective spending prioritizes infrastructure, social welfare, and economic development while maintaining fiscal discipline and targeting maximum public benefit.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('government-revenue')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Government Revenue
                    </button>
                    <button
                      onClick={() => navigateToSection('public-debt')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Public Debt & Borrowing
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Public Debt Section */}
            {activeSection === 'public-debt' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="public-debt"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Public Debt & Borrowing</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('public-debt')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('public-debt') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('public-debt') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('public-debt')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('public-debt')
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
                    Public debt management involves strategic borrowing to finance government operations while maintaining fiscal sustainability and economic stability.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🏦 Domestic Borrowing</h3>
                      <p className="text-red-700 dark:text-red-300 mb-4">Government securities issued in domestic markets.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Government Bonds</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Long-term securities (5-40 years) with fixed/floating rates</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Treasury Bills</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Short-term (91, 182, 364 days) zero-coupon securities</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Cash Management Bills</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Ultra-short term (less than 91 days) liquidity management</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🌍 External Borrowing</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">International loans and multilateral funding sources.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">World Bank</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Development projects, infrastructure financing</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">IMF</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Balance of payments support, structural reforms</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Bilateral Loans</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Government-to-government lending arrangements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📊 India's Debt Profile (2024-25)</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">84%</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Debt-to-GDP</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Central + State</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">₹156L Cr</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Total Debt</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Outstanding amount</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Domestic Share</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Rupee denominated</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">5.1%</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Fiscal Deficit</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Target for FY25</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('public-expenditure')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Public Expenditure
                    </button>
                    <button
                      onClick={() => navigateToSection('fiscal-policy')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Fiscal Policy
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fiscal Policy Section */}
            {activeSection === 'fiscal-policy' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="fiscal-policy"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                      <ChartPieIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fiscal Policy & Economic Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 18 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('fiscal-policy')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('fiscal-policy') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('fiscal-policy') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('fiscal-policy')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('fiscal-policy')
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
                    Fiscal policy uses government spending and taxation to influence economic activity, manage inflation, promote growth, and achieve macroeconomic stability.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📈 Expansionary Policy</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Stimulating economic growth during recessions or slowdowns.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Increased Spending</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Infrastructure projects, welfare programs, public employment</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Tax Reductions</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Lower income tax rates, corporate tax cuts, GST reductions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Subsidies & Transfers</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Direct benefit transfers, industry incentives, farmer support</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Contractionary Policy</h3>
                      <p className="text-red-700 dark:text-red-300 mb-4">Controlling inflation and preventing economic overheating.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Reduced Spending</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Cutting non-essential expenditure, delaying projects</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Tax Increases</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Higher tax rates, additional cess, luxury taxes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Subsidy Rationalization</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Reducing subsidies, targeting benefits, improving efficiency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔄 Counter-Cyclical Measures</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Policies to stabilize the economy during booms and recessions.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Economic Stimulus</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• COVID-19 relief packages</li>
                          <li>• Atmanirbhar Bharat initiatives</li>
                          <li>• MGNREGA expansion</li>
                          <li>• Credit guarantee schemes</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Automatic Stabilizers</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Progressive income tax</li>
                          <li>• Unemployment benefits</li>
                          <li>• Agricultural support prices</li>
                          <li>• Social safety nets</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Fiscal Rules</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• FRBM Act compliance</li>
                          <li>• Deficit reduction targets</li>
                          <li>• Debt sustainability limits</li>
                          <li>• Medium-term frameworks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('public-debt')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Public Debt
                    </button>
                    <button
                      onClick={() => navigateToSection('budgeting-planning')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Budgeting & Planning
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Budgeting and Planning Section */}
            {activeSection === 'budgeting-planning' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="budgeting-planning"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Budgeting and Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('budgeting-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('budgeting-planning') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('budgeting-planning') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('budgeting-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('budgeting-planning')
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
                    Government budgeting involves systematic planning of revenues and expenditures to achieve policy objectives while ensuring fiscal discipline and transparency.
                  </p>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700 mb-8">
                    <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">📋 Annual Budget</h3>
                    <p className="text-teal-700 dark:text-teal-300 mb-4">Presentation of estimated revenues and proposed expenditures for the financial year.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">Budget Process</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Pre-Budget:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Economic survey, consultations, revenue estimates</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Budget Presentation:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Finance Minister's speech, budget documents</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-teal-700">Parliamentary Approval:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Discussion, voting, appropriation bills</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">Budget Components</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-blue-700">Revenue Budget:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Tax revenue, non-tax revenue, revenue expenditure</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-green-700">Capital Budget:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Capital receipts, capital expenditure, borrowings</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Deficit Indicators:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Fiscal deficit, revenue deficit, primary deficit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📈 Medium-Term Fiscal Plans</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Multi-year expenditure frameworks for sustainable development.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">FRBM Framework</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Fiscal Responsibility and Budget Management Act targets</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Five-Year Plans</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Long-term development strategy and resource allocation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">SDG Alignment</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Sustainable Development Goals integration</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🎯 Performance-Based Budgeting</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Linking fund allocation to measurable outcomes and efficiency.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-green-700 dark:text-green-300">Output Budgeting</span>
                            <span className="text-sm text-green-600 dark:text-green-400">Deliverable targets</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-green-700 dark:text-green-300">Outcome Budgeting</span>
                            <span className="text-sm text-green-600 dark:text-green-400">Impact measurement</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-green-700 dark:text-green-300">Gender Budgeting</span>
                            <span className="text-sm text-green-600 dark:text-green-400">Gender impact analysis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">⚖️ Transparency & Accountability</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Public audits, parliamentary oversight, and citizen engagement.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Audit Mechanisms</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• CAG audit reports</li>
                          <li>• Performance audits</li>
                          <li>• Compliance audits</li>
                          <li>• Social audits</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Parliamentary Oversight</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Public Accounts Committee</li>
                          <li>• Estimates Committee</li>
                          <li>• Standing committees</li>
                          <li>• Budget discussions</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Citizen Participation</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Budget consultations</li>
                          <li>• Public feedback</li>
                          <li>• RTI applications</li>
                          <li>• Digital platforms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('fiscal-policy')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Fiscal Policy
                    </button>
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in Government & Public Finance</h2>
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
                    Modern public finance is being transformed by digital governance, sustainable finance, public-private partnerships, and behavioral economics applications.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📱 Digital Governance</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">E-governance platforms, direct benefit transfers, and online tax filing.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Digital Payments</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• UPI transactions (₹200L cr/month)</li>
                          <li>• Direct Benefit Transfer (DBT)</li>
                          <li>• Digital wallets integration</li>
                          <li>• Blockchain for transparency</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">E-Governance</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Digital India initiatives</li>
                          <li>• Online service delivery</li>
                          <li>• Aadhaar-based authentication</li>
                          <li>• Common Service Centers</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Tax Technology</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• GST Network (GSTN)</li>
                          <li>• E-filing platforms</li>
                          <li>• AI-based compliance</li>
                          <li>• Data analytics for revenue</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌱 Green & Sustainable Finance</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Funding renewable energy and climate adaptation programs.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Green Bonds</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">₹50,000 cr target for climate projects</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Carbon Pricing</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Emissions trading, carbon tax mechanisms</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Climate Budget</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Net-zero commitments, adaptation funding</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🤝 Public-Private Partnerships</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Collaborations for infrastructure and service delivery.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Infrastructure PPP</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">₹8L cr projects</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Healthcare PPP</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Hospital management</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Smart Cities</span>
                            <span className="text-sm text-purple-600 dark:text-purple-400">Urban development</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🧠 Behavioral Economics in Policy</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Using nudges to improve tax compliance and public welfare programs.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Tax Compliance Nudges</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Social Norms:</strong> "Most taxpayers in your area file on time"</li>
                          <li>• <strong>Simplification:</strong> Pre-filled tax returns, easy e-filing</li>
                          <li>• <strong>Timely Reminders:</strong> SMS alerts, deadline notifications</li>
                          <li>• <strong>Positive Framing:</strong> Benefits of compliance messaging</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Welfare Program Design</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Default Options:</strong> Auto-enrollment in pension schemes</li>
                          <li>• <strong>Choice Architecture:</strong> Simplified benefit applications</li>
                          <li>• <strong>Loss Aversion:</strong> Highlighting opportunity costs</li>
                          <li>• <strong>Feedback Loops:</strong> Progress tracking, achievement badges</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('budgeting-planning')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Budgeting & Planning
                    </button>
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in Government & Public Finance</h2>
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
                    Government and public finance face significant challenges from fiscal deficits, resource misallocation, corruption, and the need to balance development with fiscal prudence.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Fiscal Deficits & Rising Debt</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">High Deficit Levels</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Fiscal deficit at 5.1% of GDP, above sustainable levels</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Debt Sustainability</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Combined debt-to-GDP ratio at 84%, limiting fiscal space</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Interest Burden</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">25% of revenue goes to debt servicing</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🚫 Corruption & Governance Issues</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Leakages in Welfare</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Subsidy leakages, ghost beneficiaries, middleman exploitation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Procurement Issues</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Cost overruns, delays, quality compromises</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Tax Evasion</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Black money, under-reporting, compliance gaps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚖️ Balancing Development with Fiscal Prudence</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Managing competing demands for resources while maintaining fiscal discipline.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Infrastructure Needs</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• ₹111L cr investment gap</li>
                          <li>• Urban infrastructure deficit</li>
                          <li>• Rural connectivity challenges</li>
                          <li>• Digital infrastructure requirements</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Social Obligations</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Healthcare system strengthening</li>
                          <li>• Education quality improvement</li>
                          <li>• Employment generation programs</li>
                          <li>• Social security expansion</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Fiscal Constraints</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Limited borrowing capacity</li>
                          <li>• Revenue mobilization challenges</li>
                          <li>• Expenditure rationalization needs</li>
                          <li>• Subsidy reform requirements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🛠️ Solutions & Reform Measures</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Revenue Enhancement</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Tax Base Expansion:</strong> Bringing more taxpayers into the net</li>
                          <li>• <strong>GST Optimization:</strong> Rate rationalization, compliance improvement</li>
                          <li>• <strong>Asset Monetization:</strong> Divestment, land monetization</li>
                          <li>• <strong>Digital Tax:</strong> Technology-enabled compliance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Expenditure Efficiency</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Subsidy Targeting:</strong> JAM trinity, DBT expansion</li>
                          <li>• <strong>Performance Budgeting:</strong> Outcome-based allocation</li>
                          <li>• <strong>Digital Governance:</strong> Reduced leakages, transparency</li>
                          <li>• <strong>PPP Models:</strong> Private sector efficiency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Modern Trends
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-8 border border-indigo-200 dark:border-indigo-700">
                    <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-200 mb-4">🎯 Key Insights</h3>
                    <p className="text-lg text-indigo-700 dark:text-indigo-300 leading-relaxed">
                      Government and public finance are central to national development, economic stability, and social welfare. Through prudent management of revenue, expenditure, debt, and fiscal policies, governments can drive growth, reduce inequality, and provide essential services. Modern innovations such as digital governance, sustainable finance, and public-private partnerships are enhancing efficiency, transparency, and responsiveness in public finance worldwide.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Essential Public Finance Principles</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Fiscal Management</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-700">Revenue Optimization</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Balance tax burden with economic growth incentives</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-700">Expenditure Efficiency</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Prioritize high-impact social and infrastructure spending</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
                            <h5 className="font-semibold text-purple-700">Debt Sustainability</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Maintain manageable debt levels for fiscal stability</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Governance Excellence</h4>
                        <div className="space-y-2">
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">📊</span>
                            <div>
                              <strong className="text-sm">Transparency</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Open budget processes and public disclosures</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div>
                              <strong className="text-sm">Accountability</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Regular audits and performance monitoring</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🎯</span>
                            <div>
                              <strong className="text-sm">Effectiveness</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Outcome-based budgeting and policy evaluation</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🌱</span>
                            <div>
                              <strong className="text-sm">Sustainability</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Long-term fiscal health and environmental responsibility</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">India's Public Finance Achievements</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">₹48L Cr</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Union Budget 2024-25</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Total expenditure allocation</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">5th</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Largest Economy</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Global GDP ranking</div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">7%+</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">GDP Growth</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Fastest growing major economy</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl text-center border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">🎆 Master Public Finance for Better Governance!</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      Understanding government finance empowers citizens to participate in democratic processes and hold leaders accountable.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-blue-600">💡 Informed Citizenship</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-green-600">💰 Fiscal Awareness</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-purple-600">🏛️ Democratic Participation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Challenges
                    </button>
                    <Link
                      to="/learn/alternative-finance"
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Next: Alternative Finance
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="flex justify-center items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Link
                        to="/learn/corporate-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🏢 Corporation
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
              className="bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Government & Public Finance Tools
                    </h3>
                    <p className="text-indigo-100">Calculate taxes, analyze budgets, and understand government schemes</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Income Tax Calculator', path: '/calculators/income-tax', icon: '💰', desc: 'Calculate tax liability' },
                    { name: 'GST Calculator', path: '/calculators/gst', icon: '🧾', desc: 'GST computation tool' },
                    { name: 'HRA Exemption', path: '/calculators/hra-exemption', icon: '🏠', desc: 'House rent allowance' },
                    { name: '80C Tax Savings', path: '/calculators/80c-savings', icon: '💸', desc: 'Tax deduction calculator' },
                    { name: 'EPF Calculator', path: '/calculators/epf-maturity', icon: '🏦', desc: 'Provident fund returns' },
                    { name: 'PPF Calculator', path: '/calculators/ppf', icon: '📈', desc: 'Public Provident Fund' },
                    { name: 'Budget Planner', path: '/calculators/budget-planner', icon: '📊', desc: 'Personal budget planning' },
                    { name: 'Retirement Goal', path: '/calculators/retirement-goal', icon: '🎯', desc: 'Retirement planning tool' }
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