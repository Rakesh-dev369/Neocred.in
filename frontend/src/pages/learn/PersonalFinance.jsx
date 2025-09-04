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
import { getNextPillar, getPreviousPillar } from '../../data/learningData';

export default function PersonalFinance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 1; // Personal Finance is pillar 1
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
      title: 'Introduction to Personal Finance', 
      icon: AcademicCapIcon, 
      emoji: '📖', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding the fundamentals of personal finance and its importance in modern life'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Personal Finance', 
      icon: ChartBarIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential building blocks of personal financial management'
    },
    { 
      id: 'budgeting', 
      title: 'Budgeting & Expense Planning', 
      icon: CalculatorIcon, 
      emoji: '📊', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Creating and managing budgets for financial success'
    },
    { 
      id: 'saving', 
      title: 'Saving & Emergency Planning', 
      icon: BanknotesIcon, 
      emoji: '🏦', 
      level: 'foundation',
      duration: '10 min read',
      difficulty: 'Beginner',
      description: 'Building emergency funds and systematic saving strategies'
    },
    // Intermediate Level
    { 
      id: 'investing', 
      title: 'Investment Management', 
      icon: TrophyIcon, 
      emoji: '📈', 
      level: 'intermediate',
      duration: '20 min read',
      difficulty: 'Intermediate',
      description: 'Growing wealth through strategic investment planning'
    },
    { 
      id: 'debt', 
      title: 'Debt & Credit Management', 
      icon: CurrencyRupeeIcon, 
      emoji: '💳', 
      level: 'intermediate',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'Managing debt effectively and building credit score'
    },
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in Personal Finance', 
      icon: SparklesIcon, 
      emoji: '💻', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Digital finance tools and emerging trends'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Personal Finance', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'intermediate',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Common financial challenges and solutions'
    },
    // Advanced Level
    { 
      id: 'retirement', 
      title: 'Retirement Planning', 
      icon: HomeIcon, 
      emoji: '🏖️', 
      level: 'advanced',
      duration: '25 min read',
      difficulty: 'Advanced',
      description: 'Long-term planning for financial independence'
    },
    { 
      id: 'insurance', 
      title: 'Insurance & Risk Management', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Protecting wealth through comprehensive insurance planning'
    },
    { 
      id: 'tax', 
      title: 'Tax Planning & Optimization', 
      icon: InformationCircleIcon, 
      emoji: '📄', 
      level: 'advanced',
      duration: '22 min read',
      difficulty: 'Advanced',
      description: 'Legal tax optimization strategies and compliance'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Action Plan', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '10 min read',
      difficulty: 'All Levels',
      description: 'Key takeaways and implementation roadmap'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '94%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.9', icon: StarIcon },
    { label: 'Active Learners', value: '25K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Next: Digital banking and payment systems'
    },
    { 
      name: 'Insurance & Risk Shield', 
      path: '/learn/insurance', 
      icon: '🛡️',
      description: 'Intermediate: Risk management and protection'
    },
    { 
      name: 'Investment & Wealth Building', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Intermediate: Build wealth through investments'
    },
    { 
      name: 'Tax & Government Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Intermediate: Tax planning and schemes'
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
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Reduced Hero Section */}
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Personal Finance</h1>
              <p className="text-blue-100">Pillar 1 of 8 • Complete Financial Mastery • 12 Sections • 2025 Updated</p>
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
                <CurrencyRupeeIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation Buttons */}
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
          {/* Sidebar - Mobile: Below hero, Desktop: Left side */}
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
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Personal Finance</h2>
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
                      What is Personal Finance?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      Personal finance is the comprehensive management of an individual's or household's financial activities, encompassing earning, saving, investing, budgeting, spending, and protecting money. It involves both short-term decisions like daily expense management and long-term strategies such as retirement planning, wealth building, and intergenerational financial security.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Personal finance is not just about money management—it's about creating the life you want. In India's rapidly evolving economy, financial literacy has become essential for navigating opportunities and protecting against risks. Start your journey today with small, consistent steps.
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
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Personal Finance</h2>
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
                    The core components of personal finance are interconnected areas that help individuals achieve financial health and independence. Understanding each component is crucial for building a comprehensive financial strategy.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Income Management</h3>
                      <p className="text-green-700 dark:text-green-300 mb-3">Understanding sources of income such as salaries, business profits, investments, and passive income.</p>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• Primary income (salary, wages)</li>
                        <li>• Business profits and entrepreneurship</li>
                        <li>• Investment returns and dividends</li>
                        <li>• Passive income streams</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 Budgeting & Expense Management</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-3">Creating a spending plan to balance needs, wants, and savings effectively.</p>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• 50/30/20 rule implementation</li>
                        <li>• Zero-based budgeting</li>
                        <li>• Expense tracking and categorization</li>
                        <li>• Budget optimization strategies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🏦 Saving</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-3">Allocating income for emergencies, short-term goals, and long-term objectives.</p>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• Emergency fund (3-12 months expenses)</li>
                        <li>• Short-term savings goals</li>
                        <li>• Long-term wealth accumulation</li>
                        <li>• High-yield savings strategies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📈 Investing</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-3">Growing wealth through financial instruments like stocks, bonds, mutual funds, and real estate.</p>
                      <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                        <li>• Equity investments (stocks, mutual funds)</li>
                        <li>• Debt instruments (bonds, FDs)</li>
                        <li>• Real estate and REITs</li>
                        <li>• Alternative investments</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">💳 Debt Management</h3>
                      <p className="text-red-700 dark:text-red-300 mb-3">Handling loans, credit cards, and liabilities effectively to avoid financial strain.</p>
                      <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                        <li>• Credit score optimization</li>
                        <li>• Debt consolidation strategies</li>
                        <li>• EMI management</li>
                        <li>• Good vs bad debt understanding</li>
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🛡️ Insurance & Risk Management</h3>
                      <p className="text-indigo-700 dark:text-indigo-300 mb-3">Protecting against unforeseen risks with comprehensive insurance coverage.</p>
                      <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                        <li>• Life insurance (term plans)</li>
                        <li>• Health insurance coverage</li>
                        <li>• Property and auto insurance</li>
                        <li>• Risk assessment strategies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🏖️ Retirement Planning</h3>
                      <p className="text-teal-700 dark:text-teal-300 mb-3">Building wealth to sustain post-retirement life through various instruments.</p>
                      <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                        <li>• EPF and PPF contributions</li>
                        <li>• NPS (National Pension Scheme)</li>
                        <li>• Retirement corpus calculation</li>
                        <li>• Post-retirement income planning</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📄 Tax Planning</h3>
                      <p className="text-yellow-700 dark:text-yellow-300 mb-3">Legally optimizing taxes through deductions, exemptions, and tax-saving investments.</p>
                      <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                        <li>• Section 80C investments</li>
                        <li>• Health insurance deductions</li>
                        <li>• Tax regime optimization</li>
                        <li>• Capital gains planning</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      These eight components work together as an integrated system. Success in personal finance comes from understanding how each component affects the others and creating a balanced approach that aligns with your life goals, risk tolerance, and financial situation.
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
                      onClick={() => navigateToSection('budgeting')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Budgeting & Expense Planning
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Budgeting Section */}
            {activeSection === 'budgeting' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="budgeting"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <CalculatorIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Budgeting & Expense Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('budgeting')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('budgeting') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('budgeting') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('budgeting')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('budgeting')
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
                    Budgeting is the foundation of personal finance. It helps track income and expenses, avoid overspending, and achieve financial goals. A well-structured budget provides clarity on where your money goes and ensures you're making progress toward your financial objectives.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Types of Budgeting</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Traditional Budgeting</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Itemizing all expenses and income sources with detailed categorization</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">50/30/20 Rule</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">50% needs, 30% wants, 20% savings - simple and effective for beginners</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Zero-Based Budgeting</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Every rupee is assigned a purpose, income minus expenses equals zero</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Envelope System</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Cash-based tracking for different spending categories</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Tools for Budgeting</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Manual Tools</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Excel, Google Sheets, pen & paper for complete control</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Indian Apps</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">ET Money, Walnut, Money View, Expense Manager</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Global Apps</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">YNAB, Mint, PocketGuard, Goodbudget</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Importance of Budgeting</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl mb-2">🚫</div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Avoids Debt Traps</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Prevents overspending and accumulating high-interest debt</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">📈</div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Increases Savings Rate</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Systematic approach to building wealth over time</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Creates Discipline</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Develops healthy financial habits and behaviors</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Budgeting is about conscious spending, not restriction. Start with the 50/30/20 rule and adjust based on your lifestyle and goals. The key is consistency and regular review to ensure you stay on track with your financial objectives.
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
                      onClick={() => navigateToSection('saving')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Saving & Emergency Planning
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Saving Section */}
            {activeSection === 'saving' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="saving"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Saving & Emergency Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 10 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('saving')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('saving') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('saving') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('saving')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('saving')
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
                    Savings are the backbone of financial resilience. An emergency fund acts as a financial safety net for unforeseen expenses, while systematic saving helps achieve both short-term and long-term financial goals.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Types of Savings</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Short-term Savings</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Holidays, gadgets, home appliances (1-2 years)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Long-term Savings</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Education, home purchase, major life events (3+ years)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Emergency Savings</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">3-12 months of living expenses for unexpected situations</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Best Practices</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Automate Savings</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Set up SIPs, recurring deposits, and automatic transfers</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300">High-yield Accounts</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Use savings accounts, liquid funds with better returns</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Separate Accounts</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Keep emergency funds separate from regular savings</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">2025 Rates in India</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300">Savings Account</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">7-8% (high-yield banks)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300">Fixed Deposits</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">7-8.5% (1-5 years)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300">Liquid Funds</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">6-7% (instant liquidity)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Emergency funds provide financial security and peace of mind. Aim to build 6 months of expenses in high-yield savings accounts. Start small but be consistent - even ₹1,000 monthly can build substantial savings over time.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('budgeting')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Budgeting & Expense Planning
                    </button>
                    <button
                      onClick={() => navigateToSection('investing')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Investment Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Investment Management Section */}
            {activeSection === 'investing' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="investing"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <TrophyIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Investment Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 20 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('investing')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('investing') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('investing') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('investing')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('investing')
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
                    Investments are critical to wealth building and beating inflation. Understanding different asset classes, risk-return relationships, and diversification strategies is essential for long-term financial success and achieving your financial goals.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Asset Classes</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Equity</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Stocks, mutual funds, ETFs (15-22% historical returns)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Debt</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Bonds, FDs, debt funds (7-9% returns)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Real Estate</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Property, REITs (10-12% returns)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Alternative Assets</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Gold, commodities, crypto, startups</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Risk & Return Trade-off</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">High Risk, High Return</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Equity, startups, crypto (potential 15-25%+ returns)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-1">Medium Risk, Medium Return</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Hybrid funds, REITs (8-12% returns)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">Low Risk, Low Return</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">FDs, government bonds (6-8% returns)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Popular Indian Investment Options (2025)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Equity Investments</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• SIP in Large Cap Funds</li>
                          <li>• Index Funds (Nifty 50, Sensex)</li>
                          <li>• ELSS for Tax Saving</li>
                          <li>• Direct Stocks (Blue Chip)</li>
                          <li>• Sectoral/Thematic Funds</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Debt Investments</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• PPF (7.1% tax-free)</li>
                          <li>• EPF (8.25% return)</li>
                          <li>• Bank FDs (7-8.5% rates)</li>
                          <li>• Debt Mutual Funds</li>
                          <li>• Government Bonds</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Alternative Options</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Gold ETFs/Sovereign Gold Bonds</li>
                          <li>• REITs (Real Estate Investment Trusts)</li>
                          <li>• NPS (National Pension Scheme)</li>
                          <li>• International Funds</li>
                          <li>• Commodity Funds</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Diversification Strategy</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Spreading investments across asset classes to minimize risks while maximizing returns. The key is not putting all eggs in one basket.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Asset Allocation by Age</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• 20s-30s: 70% Equity, 20% Debt, 10% Alternative</li>
                          <li>• 40s: 60% Equity, 30% Debt, 10% Alternative</li>
                          <li>• 50s+: 40% Equity, 50% Debt, 10% Alternative</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Geographic Diversification</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• 80% Domestic (Indian markets)</li>
                          <li>• 20% International (US, Global funds)</li>
                          <li>• Emerging markets exposure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Start investing early to leverage the power of compounding. Diversify across asset classes and maintain a long-term perspective. SIP in equity mutual funds is an excellent starting point for beginners. Remember: time in the market beats timing the market.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('saving')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Saving & Emergency Planning
                    </button>
                    <button
                      onClick={() => navigateToSection('debt')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Debt & Credit Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Debt & Credit Management Section */}
            {activeSection === 'debt' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="debt"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <CurrencyRupeeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Debt & Credit Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 18 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('debt')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('debt') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('debt') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('debt')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('debt')
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
                    Debt can be constructive (home loan, education loan) or destructive (credit card debt, personal loans for lifestyle expenses). Managing credit wisely is crucial for financial health and building a strong credit profile.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Types of Debt</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Secured Debt (Good Debt)</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Home Loan (8.5-12% interest) - Asset appreciation</li>
                            <li>• Car Loan (9-15% interest) - Transportation necessity</li>
                            <li>• Education Loan (8-12% interest) - Income enhancement</li>
                            <li>• Gold Loan (10-16% interest) - Lower rates, secured</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Unsecured Debt (Risky Debt)</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Credit Card (36-48% interest) - Very high cost</li>
                            <li>• Personal Loan (12-24% interest) - Lifestyle expenses</li>
                            <li>• Payday Loans (Very High) - Emergency only</li>
                            <li>• Buy Now Pay Later - Hidden charges</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Credit Score Management</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">CIBIL Score Ranges</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• 750-900: Excellent (Best loan rates, instant approval)</li>
                            <li>• 700-749: Good (Decent rates, easy approval)</li>
                            <li>• 650-699: Fair (Higher rates, conditional approval)</li>
                            <li>• 300-649: Poor (Loan rejection, high deposits)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Score Improvement Tips</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Pay EMIs on time (35% weightage)</li>
                            <li>• Keep credit utilization under 30%</li>
                            <li>• Maintain old credit accounts (length of history)</li>
                            <li>• Check credit report annually for errors</li>
                            <li>• Avoid multiple loan applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-4">💡 Debt Repayment Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Debt Snowball Method</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Pay minimum on all debts</li>
                          <li>• Focus extra money on smallest debt first</li>
                          <li>• Build momentum with quick wins</li>
                          <li>• Good for psychological motivation</li>
                          <li>• May cost more in interest long-term</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Debt Avalanche Method</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Pay minimum on all debts</li>
                          <li>• Focus extra money on highest interest debt</li>
                          <li>• Mathematically optimal approach</li>
                          <li>• Saves more money in long-term</li>
                          <li>• Requires discipline and patience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Best Practices for Debt Management</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Prevention</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Live within your means</li>
                          <li>• Build emergency fund first</li>
                          <li>• Avoid lifestyle inflation</li>
                          <li>• Use credit cards responsibly</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Management</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Balance transfers for high-interest debt</li>
                          <li>• Negotiate with lenders for better rates</li>
                          <li>• Consider debt consolidation</li>
                          <li>• Avoid taking new debt while repaying</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Manage debt wisely by prioritizing high-interest debt repayment and maintaining a CIBIL score above 750 for the best loan rates. Good debt can help build wealth, while bad debt can destroy it. Always have a clear repayment strategy.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('investing')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Investment Management
                    </button>
                    <button
                      onClick={() => navigateToSection('retirement')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Retirement Planning
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Retirement Planning Section */}
            {activeSection === 'retirement' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="retirement"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <HomeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Retirement Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 25 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('retirement')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('retirement') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('retirement') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('retirement')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('retirement')
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
                    Retirement planning ensures financial security post-employment. Starting early leverages the power of compounding for wealth creation, while proper planning accounts for inflation, healthcare costs, and changing lifestyle needs.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Retirement Needs Assessment</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Future Expenses</h4>
                            <p className="text-xs text-blue-600 dark:text-blue-400">Estimate inflation-adjusted living costs</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Healthcare Costs</h4>
                            <p className="text-xs text-blue-600 dark:text-blue-400">Medical expenses increase with age</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Lifestyle Changes</h4>
                            <p className="text-xs text-blue-600 dark:text-blue-400">Travel, hobbies, family support</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Longevity Planning</h4>
                            <p className="text-xs text-blue-600 dark:text-blue-400">Plan for 80+ years lifespan</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Inflation Factor</h4>
                            <p className="text-xs text-blue-600 dark:text-blue-400">6-7% annual inflation in India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Indian Retirement Instruments</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">EPF (Employees' Provident Fund)</h4>
                          <p className="text-xs text-green-600 dark:text-green-400">8.25% return, tax-free, employer contribution</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">PPF (Public Provident Fund)</h4>
                          <p className="text-xs text-green-600 dark:text-green-400">7.1% return, 15-year lock-in, tax benefits</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">NPS (National Pension Scheme)</h4>
                          <p className="text-xs text-green-600 dark:text-green-400">Market-linked, tax benefits, low cost</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Annuities & Pension Funds</h4>
                          <p className="text-xs text-green-600 dark:text-green-400">Guaranteed pension, insurance companies</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Equity Mutual Funds</h4>
                          <p className="text-xs text-green-600 dark:text-green-400">Long-term wealth creation, SIP approach</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Global Retirement Options</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">401(k) - USA</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Employer-sponsored, tax-deferred</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Roth IRA - USA</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Tax-free withdrawals in retirement</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">State Pensions - UK/EU</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Government-backed pension systems</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Superannuation - Australia</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Mandatory employer contributions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">RRSP - Canada</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Registered Retirement Savings Plan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Retirement Planning Best Practices (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Start Early Strategy</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Begin investing at 25 vs 35 = 2x more corpus</li>
                          <li>• ₹5,000 monthly SIP for 35 years = ₹2.8 Cr (12% return)</li>
                          <li>• Same amount for 25 years = ₹1.2 Cr</li>
                          <li>• Power of compounding maximized with time</li>
                          <li>• Lower monthly commitment when started early</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Diversification Strategy</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• 60% Equity (growth phase, long-term)</li>
                          <li>• 30% Debt (stability, capital protection)</li>
                          <li>• 10% Alternative (gold, REITs, international)</li>
                          <li>• Rebalance annually based on market conditions</li>
                          <li>• Reduce equity exposure as retirement approaches</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      Start retirement planning early to leverage compounding. Diversify between EPF, PPF, NPS, and equity investments for optimal returns. Aim to replace 70-80% of your pre-retirement income through your retirement corpus.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('debt')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Debt Management
                    </button>
                    <button
                      onClick={() => navigateToSection('insurance')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Insurance & Risk Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Insurance & Risk Management Section */}
            {activeSection === 'insurance' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="insurance"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Insurance & Risk Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('insurance')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('insurance') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('insurance')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('insurance')
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
                    Insurance protects against financial shocks due to unforeseen events. It's a crucial component of comprehensive financial planning that complements savings and investments by transferring risk to insurance companies.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Types of Insurance</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Life Insurance</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Term Plans (₹1Cr cover for ₹15k/year)</li>
                            <li>• Whole Life Policies (investment + insurance)</li>
                            <li>• ULIPs (market-linked insurance)</li>
                            <li>• Group Life Insurance (employer-provided)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Health Insurance</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Individual Plans (₹5-10L coverage)</li>
                            <li>• Family Floater (shared sum insured)</li>
                            <li>• Critical Illness (specific diseases)</li>
                            <li>• Top-up Plans (additional coverage)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">General Insurance</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Motor Insurance (mandatory for vehicles)</li>
                            <li>• Travel Insurance (domestic/international)</li>
                            <li>• Home Insurance (property protection)</li>
                            <li>• Cyber Insurance (digital risks)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Risk Management Strategy</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">1. Identify Risks</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Death or disability of earning member</li>
                            <li>• Medical emergencies and hospitalization</li>
                            <li>• Property damage (fire, theft, natural disasters)</li>
                            <li>• Liability risks (accidents, legal issues)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">2. Assess Impact</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Financial impact on family income</li>
                            <li>• Effect on long-term financial goals</li>
                            <li>• Immediate cash flow requirements</li>
                            <li>• Replacement cost of assets</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">3. Mitigate & Insure</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Prevent risks through safety measures</li>
                            <li>• Transfer risks through insurance</li>
                            <li>• Self-insure for small, manageable risks</li>
                            <li>• Regular review and update coverage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Insurance Planning Guidelines (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Coverage Recommendations</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Life Insurance: 10-15x annual income</li>
                          <li>• Health Insurance: ₹10-20L for family</li>
                          <li>• Critical Illness: 5-10x annual income</li>
                          <li>• Disability Insurance: 60-70% of income</li>
                          <li>• Review coverage every 3-5 years</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Best Practices</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Buy insurance early for lower premiums</li>
                          <li>• Choose term plans over investment plans</li>
                          <li>• Maintain good health for better rates</li>
                          <li>• Read policy documents carefully</li>
                          <li>• Keep beneficiaries updated</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                      Insurance protects your wealth from unexpected events and prevents financial ruin. Get adequate life and health coverage as priorities. Insurance is not an investment - it's protection for your family's financial future.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('retirement')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Retirement Planning
                    </button>
                    <button
                      onClick={() => navigateToSection('tax')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Tax Planning
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tax Planning Section */}
            {activeSection === 'tax' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="tax"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tax Planning & Optimization</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 22 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('tax')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('tax') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('tax') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('tax')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('tax')
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
                    Tax planning ensures legal savings and efficient allocation of income through various exemptions, deductions, and tax-saving investments. Proper planning can save significant amounts while building wealth.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Indian Tax-Saving Options (2025)</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Section 80C (₹1.5L limit)</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• ELSS Mutual Funds (3-year lock-in)</li>
                            <li>• PPF (15-year lock-in, 7.1% return)</li>
                            <li>• NPS (retirement planning)</li>
                            <li>• EPF (employer deduction)</li>
                            <li>• Life Insurance Premiums</li>
                            <li>• Home Loan Principal Repayment</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Section 80D (₹25k-75k)</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Health Insurance Premiums (self & family)</li>
                            <li>• Parents' Health Insurance (additional ₹25k)</li>
                            <li>• Senior Citizens (60+): ₹50k limit</li>
                            <li>• Preventive Health Check-up: ₹5k</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Other Sections</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• 80E: Education Loan Interest (no limit)</li>
                            <li>• 24B: Home Loan Interest (₹2L limit)</li>
                            <li>• 80G: Donations to Charity</li>
                            <li>• 80TTA/TTB: Savings Account Interest</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Tax Regimes Comparison (2025)</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Old Tax Regime</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Higher tax rates (5%, 20%, 30%)</li>
                            <li>• Multiple deductions available</li>
                            <li>• Standard deduction: ₹50,000</li>
                            <li>• Better for high deduction users</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">New Tax Regime</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Lower tax rates (5%, 10%, 15%, 20%, 30%)</li>
                            <li>• Limited deductions allowed</li>
                            <li>• Standard deduction: ₹75,000</li>
                            <li>• Better for lower income/fewer deductions</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Best Choice Strategy</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• New regime: Income &lt; ₹15L</li>
                            <li>• Old regime: High deductions available</li>
                            <li>• Calculate both scenarios annually</li>
                            <li>• Can switch between regimes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Global Tax Planning Concepts</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Tax-Deferred Accounts</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• 401(k), Traditional IRA (USA)</li>
                          <li>• Contributions reduce current tax</li>
                          <li>• Tax paid on withdrawal</li>
                          <li>• Compound growth without tax drag</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Tax-Free Growth</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• Roth IRA, ISA (UK)</li>
                          <li>• After-tax contributions</li>
                          <li>• Tax-free withdrawals in retirement</li>
                          <li>• No required minimum distributions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Tax Planning Best Practices</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Legal Compliance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Avoid tax evasion (illegal)</li>
                          <li>• Focus on legal tax avoidance</li>
                          <li>• Maintain proper documentation</li>
                          <li>• File returns on time</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Strategic Planning</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Plan investments for tax efficiency</li>
                          <li>• Time income and expenses</li>
                          <li>• Use exemptions and rebates</li>
                          <li>• Consider long-term capital gains</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Professional Help</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Consult CA for complex situations</li>
                          <li>• Stay updated with tax law changes</li>
                          <li>• Use tax planning software</li>
                          <li>• Regular portfolio review</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-teal-700 dark:text-teal-300 text-sm">
                      Optimize taxes legally through available deductions and exemptions. Choose the right tax regime based on your income and deductions. Tax planning should align with your overall financial goals, not just minimize current taxes.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('insurance')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Insurance & Risk Management
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
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in Personal Finance</h2>
                      <p className="text-gray-600 dark:text-gray-400">Modern • 14 min read • Intermediate</p>
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
                    The financial landscape is rapidly evolving with technology, changing consumer behavior, and new investment opportunities. Understanding these trends helps in making informed financial decisions and staying ahead of the curve.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Digital Finance Revolution</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">UPI & Digital Payments</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">₹100L+ daily volume, instant transfers, QR code payments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Mobile Banking</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">500M+ users, 24/7 banking, AI-powered insights</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Robo-Advisors</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Algorithm-based investment advice, low-cost portfolio management</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Neobanks</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Digital-first banks, better user experience, lower costs</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Investment Innovations</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Fractional Investing</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">₹100 SIPs, invest in expensive stocks with small amounts</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">ESG & Sustainable Investing</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Environmental, Social, Governance focused investments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Cryptocurrency</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Bitcoin, Ethereum, regulated crypto exchanges in India</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">International Diversification</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">US stocks, global funds, LRS limit ₹2.5L annually</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Behavioral Finance & Psychology</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Understanding psychology behind money decisions helps make better financial choices.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Common Biases</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Loss Aversion: Fear of losses over gains</li>
                          <li>• Herd Mentality: Following crowd decisions</li>
                          <li>• Recency Bias: Overweighting recent events</li>
                          <li>• Confirmation Bias: Seeking confirming information</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Solutions</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Systematic investment approach (SIP)</li>
                          <li>• Long-term perspective and patience</li>
                          <li>• Diversification to reduce risk</li>
                          <li>• Regular review and rebalancing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">FIRE Movement & Financial Independence</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Financial Independence, Retire Early - achieving financial freedom through aggressive saving and investing.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Lean FIRE</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">₹1-2 Cr corpus, minimalist lifestyle, early retirement</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Fat FIRE</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">₹5+ Cr corpus, comfortable lifestyle, higher expenses</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Coast FIRE</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">Enough saved to grow to retirement, work optional</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Fintech Innovations in India (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Lending & Credit</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• P2P Lending platforms</li>
                          <li>• Buy Now Pay Later (BNPL)</li>
                          <li>• AI-based credit scoring</li>
                          <li>• Instant personal loans</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Investment Tech</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Micro-investing apps</li>
                          <li>• Goal-based investing</li>
                          <li>• Social trading platforms</li>
                          <li>• Crypto-based investments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Embrace technology to simplify financial management, but don't lose sight of fundamental principles. Digital tools should enhance, not replace, sound financial planning. Stay informed about trends but avoid chasing every new fad.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('tax')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Tax Planning
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in Personal Finance</h2>
                      <p className="text-gray-600 dark:text-gray-400">Modern • 12 min read • Intermediate</p>
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
                    Personal finance faces numerous challenges in the modern era, from inflation and rising costs to behavioral biases and information overload. Understanding these challenges helps in developing effective strategies to overcome them.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Major Challenges</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Inflation & Rising Costs</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• 6-7% annual inflation eroding purchasing power</li>
                            <li>• Healthcare costs rising 10-15% annually</li>
                            <li>• Education expenses increasing rapidly</li>
                            <li>• Real estate prices outpacing income growth</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Financial Literacy Gap</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Only 27% Indians are financially literate</li>
                            <li>• Rural areas have lower awareness</li>
                            <li>• Complex financial products confuse consumers</li>
                            <li>• Lack of formal financial education</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Debt Traps & Lifestyle Inflation</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Easy credit leading to overspending</li>
                            <li>• Lifestyle inflation with income growth</li>
                            <li>• High-interest personal loans and credit cards</li>
                            <li>• Social pressure for material possessions</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Market Volatility & Uncertainty</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Stock market fluctuations causing panic</li>
                            <li>• Economic cycles affecting investments</li>
                            <li>• Regulatory changes impacting returns</li>
                            <li>• Global events affecting local markets</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Solutions & Best Practices</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Combat Inflation</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Invest in equity for inflation-beating returns</li>
                            <li>• Diversify across asset classes</li>
                            <li>• Increase income through skill development</li>
                            <li>• Review and adjust financial goals regularly</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Improve Financial Literacy</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Continuous learning through books, courses</li>
                            <li>• Follow reputable financial advisors</li>
                            <li>• Use reliable financial planning tools</li>
                            <li>• Start with basic concepts and build up</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Avoid Debt Traps</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Live within means, avoid lifestyle inflation</li>
                            <li>• Build emergency fund before investing</li>
                            <li>• Use credit responsibly, pay full amounts</li>
                            <li>• Focus on needs vs wants distinction</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Manage Market Volatility</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Systematic investment approach (SIP)</li>
                            <li>• Long-term perspective and patience</li>
                            <li>• Regular portfolio review and rebalancing</li>
                            <li>• Don't panic during market downturns</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Specific Indian Challenges (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Regulatory & Structural</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Frequent changes in tax laws and regulations</li>
                          <li>• Complex compliance requirements</li>
                          <li>• Limited social security coverage</li>
                          <li>• Inadequate pension system for private sector</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Behavioral & Cultural</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Preference for gold and real estate over equity</li>
                          <li>• Mis-selling of financial products by agents</li>
                          <li>• Family financial obligations and dependencies</li>
                          <li>• Short-term thinking over long-term planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Challenges in personal finance are real but surmountable with proper planning, education, and discipline. Focus on what you can control - your savings rate, investment choices, and financial behavior. Stay informed but don't let challenges paralyze your financial progress.
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Action Plan</h2>
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
                    Personal finance is an evolving field, deeply influenced by economic conditions, government policies, and global markets. By mastering budgeting, saving, investing, debt management, retirement planning, insurance, and tax strategies, individuals can build financial independence, security, and prosperity for themselves and future generations.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Key Takeaways for 2025</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Financial Fundamentals</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Start investing early to leverage compounding</li>
                          <li>• Maintain 6-month emergency fund in high-yield savings</li>
                          <li>• Follow 50/30/20 budgeting rule as baseline</li>
                          <li>• Automate savings and investments for consistency</li>
                          <li>• Diversify across asset classes and geographies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Advanced Strategies</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Optimize taxes through available deductions</li>
                          <li>• Protect wealth through adequate insurance</li>
                          <li>• Plan for retirement from your first salary</li>
                          <li>• Stay updated with financial regulations</li>
                          <li>• Seek professional advice for complex decisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Your Financial Action Plan</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Month 1-3: Foundation</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Track expenses for 1 month</li>
                          <li>• Create basic budget (50/30/20)</li>
                          <li>• Open high-yield savings account</li>
                          <li>• Start building emergency fund</li>
                          <li>• Get basic health insurance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Month 4-12: Growth</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Start SIP in equity mutual funds</li>
                          <li>• Optimize tax-saving investments</li>
                          <li>• Get adequate life insurance</li>
                          <li>• Complete 6-month emergency fund</li>
                          <li>• Learn about different investments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Year 2+: Optimization</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Diversify investment portfolio</li>
                          <li>• Plan for major life goals</li>
                          <li>• Consider international investments</li>
                          <li>• Review and rebalance annually</li>
                          <li>• Increase income through skills</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Resources for Continued Learning</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Educational Resources</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• SEBI Investor Education materials</li>
                          <li>• RBI Financial Literacy resources</li>
                          <li>• Reputable financial blogs and YouTube channels</li>
                          <li>• Books by Indian and global financial experts</li>
                          <li>• Professional financial planning courses</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Tools & Platforms</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• NeoCred calculators and tools</li>
                          <li>• Mutual fund platforms (Groww, Zerodha Coin)</li>
                          <li>• Stock brokers with research (Zerodha, Upstox)</li>
                          <li>• Tax filing software (ClearTax, QuickBooks)</li>
                          <li>• Expense tracking apps (ET Money, Walnut)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      Personal finance is a journey, not a destination. Start where you are, use what you have, and do what you can. The best time to start was yesterday, the second-best time is now. Small, consistent actions compound into significant results over time. Your future self will thank you for the financial decisions you make today.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Challenges
                    </button>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Back to Learn Hub
                      </Link>
                      <Link
                        to="/calculators"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Explore Calculators
                      </Link>
                      {nextPillar && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                          <Link
                            to={nextPillar.path}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            <span className="mr-2">🏦</span>
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
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎉 Congratulations! You've completed Personal Finance</h3>
                  <p className="text-blue-100 mb-6">Ready to continue your financial learning journey?</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {nextPillar && (
                      <div className="text-center">
                        <p className="text-sm text-blue-200 mb-2">Next Pillar:</p>
                        <Link
                          to={nextPillar.path}
                          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <span className="text-2xl mr-3">🏦</span>
                          <div className="text-left">
                            <div className="text-lg">{nextPillar.title}</div>
                            <div className="text-sm opacity-75">Pillar 2 of 8</div>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
                        </Link>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className="text-sm text-blue-200 mb-2">Or explore:</p>
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
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Financial Tools & Calculators
                    </h3>
                    <p className="text-blue-100">Apply your knowledge with our comprehensive financial tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Budget Planner', path: '/calculators/budget-planner', icon: '📊', desc: 'Plan your monthly budget' },
                    { name: 'Emergency Fund', path: '/calculators/emergency-fund', icon: '🛡️', desc: 'Calculate emergency needs' },
                    { name: 'SIP Calculator', path: '/calculators/sip', icon: '📈', desc: 'Plan systematic investments' },
                    { name: 'Debt Planner', path: '/calculators/debt-repayment', icon: '💳', desc: 'Optimize debt repayment' },
                    { name: 'Retirement Goal', path: '/calculators/retirement-goal', icon: '🏖️', desc: 'Plan for retirement' },
                    { name: 'Tax Optimizer', path: '/calculators/form16-breakdown', icon: '📄', desc: 'Optimize tax savings' },
                    { name: 'Home Loan EMI', path: '/calculators/home-loan-emi', icon: '🏠', desc: 'Calculate loan EMIs' },
                    { name: 'Goal Planner', path: '/calculators/goal-based-investment', icon: '🎯', desc: 'Plan financial goals' }
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