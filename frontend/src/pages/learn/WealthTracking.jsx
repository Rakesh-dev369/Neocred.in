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
  CreditCardIcon,
  DocumentTextIcon,
  EyeIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function WealthTracking() {
  const [activeSection, setActiveSection] = useState('why-it-matters');
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
      id: 'why-it-matters', 
      title: 'Why It Matters', 
      icon: InformationCircleIcon, 
      emoji: '📊', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'key-components', 
      title: 'Key Components', 
      icon: ChartBarIcon, 
      emoji: '🔍', 
      duration: '5 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'tools-methods', 
      title: 'Tools & Methods', 
      icon: CalculatorIcon, 
      emoji: '🛠️', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'best-practices', 
      title: 'Best Practices', 
      icon: TrophyIcon, 
      emoji: '✅', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'common-mistakes', 
      title: 'Common Mistakes', 
      icon: ExclamationTriangleIcon, 
      emoji: '❌', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'dashboard-example', 
      title: 'Dashboard Example', 
      icon: DocumentTextIcon, 
      emoji: '📋', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'action-steps', 
      title: 'Action Steps', 
      icon: CheckCircleIcon, 
      emoji: '🎯', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'excel-template', 
      title: 'Excel Template', 
      icon: ArrowTrendingUpIcon, 
      emoji: '📈', 
      duration: '5 min read',
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">📊 Wealth Tracking & Monitoring (2025)</h1>
              <p className="text-blue-100">Complete Guide • 8 Sections • 2025 Updated • All Levels</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/tax-optimization"
                className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Previous: Tax Optimization
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </Link>
              <Link
                to="/learn/estate-planning"
                className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Next: Estate Planning
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
            {/* Why It Matters Section */}
            {activeSection === 'why-it-matters' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Wealth Tracking Matters</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('why-it-matters')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('why-it-matters') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('why-it-matters') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('why-it-matters')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('why-it-matters')
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
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📊 What is Wealth Tracking?</h3>
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      Wealth tracking is the process of continuously monitoring your income, expenses, assets, liabilities, and net worth to understand financial health and progress toward goals. Without it, you may save and invest blindly, not knowing if you're actually getting wealthier or falling behind.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <EyeIcon className="w-5 h-5 mr-2 text-blue-500" />
                        Key Questions It Answers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            question: "How much am I really worth today?",
                            answer: "Net worth calculation shows your true financial position",
                            icon: "💰"
                          },
                          {
                            question: "Am I improving or stagnating?",
                            answer: "Track month-over-month growth in assets and net worth",
                            icon: "📈"
                          },
                          {
                            question: "Are my investments beating inflation?",
                            answer: "Compare returns vs inflation rate (6-7% in India 2025)",
                            icon: "🎯"
                          },
                          {
                            question: "Do I have the right asset mix?",
                            answer: "Monitor equity-debt allocation based on age and goals",
                            icon: "⚖️"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                            <div className="flex items-start space-x-3">
                              <div className="text-2xl">{item.icon}</div>
                              <div>
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.question}</h4>
                                <p className="text-blue-700 dark:text-blue-300 text-sm">{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('key-components')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Key Components
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Key Components Section */}
            {activeSection === 'key-components' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Key Components of Wealth Tracking</h2>
                      <p className="text-gray-600 dark:text-gray-400">Components • 5 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('key-components')} className={`p-2 rounded-full transition-colors ${bookmarks.has('key-components') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('key-components') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('key-components')} className={`p-2 rounded-full transition-colors ${completedSections.has('key-components') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {[
                      {
                        component: "Net Worth Tracking",
                        formula: "Net Worth = Assets – Liabilities",
                        details: [
                          "Assets: Bank deposits, investments (stocks, bonds, mutual funds, gold, real estate, retirement accounts)",
                          "Liabilities: Loans (personal, home, education, credit card debt, EMIs)",
                          "Track changes monthly/quarterly"
                        ],
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
                        icon: "💰"
                      },
                      {
                        component: "Cash Flow Monitoring",
                        formula: "Savings Rate = (Income - Expenses) / Income × 100",
                        details: [
                          "Track income vs. expenses",
                          "Identify leaks (unnecessary subscriptions, impulse spends)",
                          "Ensure savings rate = at least 20–30% of income"
                        ],
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
                        icon: "💸"
                      },
                      {
                        component: "Investment Performance Tracking",
                        formula: "CAGR = (Ending Value / Beginning Value)^(1/years) - 1",
                        details: [
                          "Check portfolio returns vs benchmarks (Nifty 50, S&P 500, Debt Fund Index)",
                          "Calculate CAGR (Compound Annual Growth Rate) and XIRR",
                          "Monitor dividend/interest inflows"
                        ],
                        color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700",
                        icon: "📈"
                      },
                      {
                        component: "Goal Progress Tracking",
                        formula: "Goal Progress = (Current Value / Target Value) × 100",
                        details: [
                          "Link each investment to a goal (retirement, house, children's education, travel)",
                          "Track % completion of each goal",
                          "Adjust allocation if falling short"
                        ],
                        color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
                        icon: "🎯"
                      },
                      {
                        component: "Risk Exposure Monitoring",
                        formula: "Asset Allocation = Equity:Debt:Alternatives (Age-based)",
                        details: [
                          "Equity vs Debt vs Alternatives mix (ideal ratio depends on age/risk appetite)",
                          "Check concentration risk (too much in one stock, one property, one asset class)",
                          "Monitor insurance coverage as protection against shocks"
                        ],
                        color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",
                        icon: "⚖️"
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${item.color}`}>
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.component}</h3>
                            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-4">
                              <p className="text-sm font-mono text-gray-800 dark:text-gray-200">{item.formula}</p>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                              <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('why-it-matters')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Why It Matters
                    </button>
                    <button onClick={() => navigateToSection('tools-methods')} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Next: Tools & Methods<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tools & Methods Section */}
            {activeSection === 'tools-methods' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                      <CalculatorIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tools & Methods (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Implementation • 4 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('tools-methods')} className={`p-2 rounded-full transition-colors ${bookmarks.has('tools-methods') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('tools-methods') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('tools-methods')} className={`p-2 rounded-full transition-colors ${completedSections.has('tools-methods') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          method: "Spreadsheets (DIY)",
                          tools: ["Google Sheets", "Excel", "Custom dashboards"],
                          pros: ["Full control", "Customizable", "Free"],
                          cons: ["Manual effort", "Time consuming"],
                          color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                        },
                        {
                          method: "Indian Apps",
                          tools: ["ET Money", "INDmoney", "Kuvera", "Zerodha Console"],
                          pros: ["Auto sync", "Real-time updates", "Indian focus"],
                          cons: ["Limited customization", "Privacy concerns"],
                          color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                        },
                        {
                          method: "Global Platforms",
                          tools: ["Mint", "Personal Capital", "YNAB", "Tiller Money"],
                          pros: ["Advanced features", "Comprehensive", "AI insights"],
                          cons: ["May not support Indian banks", "Subscription cost"],
                          color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                        }
                      ].map((category, index) => (
                        <div key={index} className={`p-6 rounded-xl border ${category.color}`}>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.method}</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Popular Tools:</h4>
                              <ul className="space-y-1">
                                {category.tools.map((tool, idx) => (
                                  <li key={idx} className="text-sm text-blue-600 dark:text-blue-400">• {tool}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Pros:</h4>
                              <ul className="space-y-1">
                                {category.pros.map((pro, idx) => (
                                  <li key={idx} className="text-sm text-green-600 dark:text-green-400">✓ {pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Cons:</h4>
                              <ul className="space-y-1">
                                {category.cons.map((con, idx) => (
                                  <li key={idx} className="text-sm text-red-600 dark:text-red-400">✗ {con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-4">🤖 Manual vs Automated Tracking</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Manual Tracking</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">You input data yourself</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-green-600 dark:text-green-400">✓ More control over data</li>
                            <li className="text-green-600 dark:text-green-400">✓ Better understanding of finances</li>
                            <li className="text-red-600 dark:text-red-400">✗ Time consuming</li>
                            <li className="text-red-600 dark:text-red-400">✗ Prone to errors</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Automated Tracking</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Syncs with bank/investment accounts</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-green-600 dark:text-green-400">✓ Real-time updates</li>
                            <li className="text-green-600 dark:text-green-400">✓ Less effort required</li>
                            <li className="text-red-600 dark:text-red-400">✗ Privacy concerns</li>
                            <li className="text-red-600 dark:text-red-400">✗ Limited customization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('key-components')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Key Components
                    </button>
                    <button onClick={() => navigateToSection('best-practices')} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Next: Best Practices<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Best Practices Section */}
            {activeSection === 'best-practices' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <TrophyIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Best Practices (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Guidelines • 3 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('best-practices')} className={`p-2 rounded-full transition-colors ${bookmarks.has('best-practices') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('best-practices') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('best-practices')} className={`p-2 rounded-full transition-colors ${completedSections.has('best-practices') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        practice: "Update net worth monthly",
                        description: "End of month snapshot for consistent tracking",
                        tip: "Set calendar reminder for last day of each month",
                        frequency: "Monthly",
                        icon: "📅"
                      },
                      {
                        practice: "Review portfolio performance quarterly",
                        description: "Check returns vs benchmarks and rebalance if needed",
                        tip: "Compare with Nifty 50 (equity) and 10-year G-Sec (debt)",
                        frequency: "Quarterly",
                        icon: "📊"
                      },
                      {
                        practice: "Rebalance asset allocation annually",
                        description: "Maintain target equity-debt ratio based on age",
                        tip: "Rule: Equity % = 100 - Age (e.g., 30 years = 70% equity)",
                        frequency: "Yearly",
                        icon: "⚖️"
                      },
                      {
                        practice: "Always adjust for inflation",
                        description: "₹1 crore today won't be equal in 20 years",
                        tip: "Use 6-7% inflation rate for India in 2025 calculations",
                        frequency: "Always",
                        icon: "📈"
                      },
                      {
                        practice: "Consolidate scattered investments",
                        description: "Too many accounts = tracking confusion",
                        tip: "Limit to 2-3 brokers, 1-2 banks for easier management",
                        frequency: "As needed",
                        icon: "🔗"
                      },
                      {
                        practice: "Keep a financial journal",
                        description: "Note major expenses, bonuses, investments",
                        tip: "Use notes app or diary to record financial decisions",
                        frequency: "Ongoing",
                        icon: "📝"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ {item.practice}</h3>
                            <p className="text-green-700 dark:text-green-300 text-sm mb-3">{item.description}</p>
                            <div className="bg-green-100 dark:bg-green-800/30 p-3 rounded-lg mb-2">
                              <p className="text-xs text-green-800 dark:text-green-200">
                                <strong>Tip:</strong> {item.tip}
                              </p>
                            </div>
                            <span className="inline-block px-2 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs rounded-full">
                              {item.frequency}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('tools-methods')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Tools & Methods
                    </button>
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Next: Common Mistakes<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Common Mistakes Section */}
            {activeSection === 'common-mistakes' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Mistakes to Avoid</h2>
                      <p className="text-gray-600 dark:text-gray-400">Pitfalls • 3 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('common-mistakes')} className={`p-2 rounded-full transition-colors ${bookmarks.has('common-mistakes') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('common-mistakes') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('common-mistakes')} className={`p-2 rounded-full transition-colors ${completedSections.has('common-mistakes') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-6">
                    {[
                      {
                        mistake: "Tracking only income, ignoring expenses",
                        problem: "You may think you're saving but actually overspending",
                        solution: "Track both income AND all expenses monthly",
                        icon: "❌"
                      },
                      {
                        mistake: "Not including all liabilities",
                        problem: "Credit card debt often hidden, gives false net worth",
                        solution: "Include ALL debts: credit cards, personal loans, EMIs",
                        icon: "❌"
                      },
                      {
                        mistake: "Overestimating asset values",
                        problem: "Real estate, gold without current market value",
                        solution: "Use current market rates, not purchase price",
                        icon: "❌"
                      },
                      {
                        mistake: "Ignoring taxation on investment returns",
                        problem: "Gross returns don't reflect actual gains",
                        solution: "Calculate post-tax returns for realistic tracking",
                        icon: "❌"
                      },
                      {
                        mistake: "Tracking irregularly (once a year)",
                        problem: "Can't identify trends or make timely corrections",
                        solution: "Monthly net worth updates, quarterly performance review",
                        icon: "❌"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">{item.mistake}</h4>
                            <div className="space-y-3">
                              <div className="p-3 bg-red-100 dark:bg-red-800/30 rounded-lg">
                                <p className="text-sm text-red-800 dark:text-red-200">
                                  <strong>Problem:</strong> {item.problem}
                                </p>
                              </div>
                              <div className="p-3 bg-green-100 dark:bg-green-800/30 rounded-lg">
                                <p className="text-sm text-green-800 dark:text-green-200">
                                  <strong>Solution:</strong> {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('best-practices')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Best Practices
                    </button>
                    <button onClick={() => navigateToSection('dashboard-example')} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Next: Dashboard Example<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Dashboard Example Section */}
            {activeSection === 'dashboard-example' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Wealth Tracking Dashboard Example</h2>
                      <p className="text-gray-600 dark:text-gray-400">Template • 4 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('dashboard-example')} className={`p-2 rounded-full transition-colors ${bookmarks.has('dashboard-example') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('dashboard-example') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('dashboard-example')} className={`p-2 rounded-full transition-colors ${completedSections.has('dashboard-example') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-8">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">📊 Sample Wealth Dashboard (2025)</h3>
                    <p className="text-indigo-700 dark:text-indigo-300 mb-4">
                      Here's a practical example of how to structure your wealth tracking dashboard with actionable insights:
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-8">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Category</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Current Value</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Target Value</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Growth %</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Status & Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            category: "Cash & Savings",
                            current: "₹3,00,000",
                            target: "₹5,00,000",
                            growth: "+7%",
                            status: "Emergency fund 60% ready",
                            color: "text-yellow-600 dark:text-yellow-400"
                          },
                          {
                            category: "Equity (Stocks/MF)",
                            current: "₹8,50,000",
                            target: "₹20,00,000",
                            growth: "+12% CAGR",
                            status: "Long-term wealth growth on track",
                            color: "text-green-600 dark:text-green-400"
                          },
                          {
                            category: "Bonds/FDs",
                            current: "₹2,00,000",
                            target: "₹4,00,000",
                            growth: "+6%",
                            status: "Stability component adequate",
                            color: "text-blue-600 dark:text-blue-400"
                          },
                          {
                            category: "Gold/Real Estate",
                            current: "₹6,00,000",
                            target: "₹10,00,000",
                            growth: "+5%",
                            status: "Diversification asset",
                            color: "text-purple-600 dark:text-purple-400"
                          },
                          {
                            category: "Liabilities (Loans)",
                            current: "₹4,50,000",
                            target: "0",
                            growth: "-8%",
                            status: "Reducing monthly via EMIs",
                            color: "text-red-600 dark:text-red-400"
                          }
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{row.category}</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">{row.current}</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{row.target}</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{row.growth}</td>
                            <td className={`border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm ${row.color}`}>{row.status}</td>
                          </tr>
                        ))}
                        <tr className="bg-green-50 dark:bg-green-900/20 font-bold">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">**Net Worth**</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600 dark:text-green-400 text-lg">₹15,00,000</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">₹35,00,000</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">–</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600 dark:text-green-400">On track (42% complete)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        metric: "Savings Rate",
                        value: "28%",
                        target: "30%",
                        status: "Good",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      },
                      {
                        metric: "Asset Allocation",
                        value: "Equity 57%",
                        target: "Equity 60%",
                        status: "Balanced",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                      },
                      {
                        metric: "Emergency Fund",
                        value: "6 months",
                        target: "8 months",
                        status: "Adequate",
                        color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-4 rounded-xl border ${item.color}`}>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.metric}</h4>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{item.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Target: {item.target}</div>
                        <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Common Mistakes
                    </button>
                    <button onClick={() => navigateToSection('action-steps')} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Next: Action Steps<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Steps Section */}
            {activeSection === 'action-steps' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Action Steps to Start Today</h2>
                      <p className="text-gray-600 dark:text-gray-400">Implementation • 3 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('action-steps')} className={`p-2 rounded-full transition-colors ${bookmarks.has('action-steps') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('action-steps') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('action-steps')} className={`p-2 rounded-full transition-colors ${completedSections.has('action-steps') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-6">
                    {[
                      {
                        step: "1. Create a Wealth Tracking System",
                        action: "Choose spreadsheet or app for tracking",
                        details: "Download our Excel template or use apps like ET Money, INDmoney",
                        timeframe: "Today"
                      },
                      {
                        step: "2. List all assets and liabilities",
                        action: "Complete financial inventory",
                        details: "Bank accounts, investments, loans, credit cards - everything in one place",
                        timeframe: "This week"
                      },
                      {
                        step: "3. Calculate current net worth",
                        action: "Baseline measurement",
                        details: "Assets minus liabilities = your starting point for tracking growth",
                        timeframe: "This week"
                      },
                      {
                        step: "4. Map investments to specific goals",
                        action: "Goal-based allocation",
                        details: "Emergency fund, house, retirement, children's education - assign purpose",
                        timeframe: "This month"
                      },
                      {
                        step: "5. Monitor cash flow & savings ratio",
                        action: "Track income vs expenses",
                        details: "Aim for 20-30% savings rate, identify spending leaks",
                        timeframe: "Monthly"
                      },
                      {
                        step: "6. Review portfolio performance",
                        action: "Benchmark comparison",
                        details: "Compare returns with Nifty 50, debt indices, inflation rate",
                        timeframe: "Quarterly"
                      },
                      {
                        step: "7. Rebalance investments",
                        action: "Maintain target allocation",
                        details: "Adjust equity-debt ratio based on age and market conditions",
                        timeframe: "Annually"
                      },
                      {
                        step: "8. Maintain annual wealth report",
                        action: "Year-end reflection",
                        details: "Analyze growth, set next year's targets, celebrate progress",
                        timeframe: "Yearly"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-blue-200 dark:bg-blue-800 rounded-lg">
                            <CheckCircleIcon className="h-5 w-5 text-blue-800 dark:text-blue-200" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.step}</h4>
                            <p className="text-blue-700 dark:text-blue-300 mb-3">{item.action}</p>
                            <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-lg mb-3">
                              <p className="text-sm text-blue-800 dark:text-blue-200">{item.details}</p>
                            </div>
                            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm rounded-full font-medium">
                              {item.timeframe}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mt-8">
                    <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                      <TrophyIcon className="w-5 h-5 mr-2" />
                      ✅ Success Outcome
                    </h4>
                    <p className="text-green-700 dark:text-green-300">
                      With this system, you'll always know whether your wealth is growing in line with your financial goals and economic conditions. You'll make informed decisions and stay on track for financial freedom.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('dashboard-example')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Dashboard Example
                    </button>
                    <button onClick={() => navigateToSection('excel-template')} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Next: Excel Template<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Excel Template Section */}
            {activeSection === 'excel-template' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready-to-Use Excel Template (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Template • 5 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('excel-template')} className={`p-2 rounded-full transition-colors ${bookmarks.has('excel-template') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('excel-template') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('excel-template')} className={`p-2 rounded-full transition-colors ${completedSections.has('excel-template') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📊 Complete Wealth Tracking Excel Template</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">
                      Download our comprehensive Excel template with built-in formulas for Net Worth calculation, CAGR tracking, Goal monitoring, and automated charts.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a 
                        href="#" 
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                      >
                        Download Excel Template
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </a>
                      <a 
                        href="#" 
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Google Sheets Version
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📝 Template Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            feature: "Net Worth Calculator",
                            description: "Automatic calculation with Assets - Liabilities formula",
                            formula: "=SUM(Assets_Range)-SUM(Liabilities_Range)"
                          },
                          {
                            feature: "CAGR Tracker",
                            description: "Compound Annual Growth Rate for all investments",
                            formula: "=POWER(Ending_Value/Beginning_Value,1/Years)-1"
                          },
                          {
                            feature: "Goal Progress Monitor",
                            description: "Track completion percentage for each financial goal",
                            formula: "=Current_Value/Target_Value*100"
                          },
                          {
                            feature: "Asset Allocation Chart",
                            description: "Visual pie chart showing equity-debt-alternatives mix",
                            formula: "Auto-generated from asset categories"
                          },
                          {
                            feature: "Monthly Trend Analysis",
                            description: "Line chart showing net worth growth over time",
                            formula: "Dynamic chart with month-over-month data"
                          },
                          {
                            feature: "Savings Rate Calculator",
                            description: "Automatic calculation of monthly savings percentage",
                            formula: "=(Income-Expenses)/Income*100"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.description}</p>
                            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
                              <code className="text-xs text-gray-800 dark:text-gray-200">{item.formula}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📊 Template Sheets Structure</h3>
                      <div className="space-y-4">
                        {[
                          {
                            sheet: "Dashboard",
                            purpose: "Overview of net worth, key metrics, and charts",
                            updates: "Auto-calculated from other sheets"
                          },
                          {
                            sheet: "Assets",
                            purpose: "List all investments, bank accounts, properties",
                            updates: "Update monthly with current values"
                          },
                          {
                            sheet: "Liabilities",
                            purpose: "Track all loans, credit cards, EMIs",
                            updates: "Update monthly with outstanding amounts"
                          },
                          {
                            sheet: "Goals",
                            purpose: "Define financial goals and track progress",
                            updates: "Set targets and monitor quarterly"
                          },
                          {
                            sheet: "Monthly Tracker",
                            purpose: "Income, expenses, and savings rate tracking",
                            updates: "Input monthly income and expense data"
                          },
                          {
                            sheet: "Performance",
                            purpose: "Investment returns and benchmark comparison",
                            updates: "Quarterly performance review"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">{item.sheet}</h4>
                                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">{item.purpose}</p>
                                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                  {item.updates}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('action-steps')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Action Steps
                    </button>
                    <Link to="/learn/estate-planning" className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <span className="mr-2">🏦</span>
                      Next: Estate Planning<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tools Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Wealth Tracking Tools
                    </h3>
                    <p className="text-blue-100">Track and monitor your financial progress with our tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Net Worth Calculator', path: '/calculators/net-worth', icon: '💰', desc: 'Calculate total net worth' },
                    { name: 'Goal Planner', path: '/calculators/budget-goal-planner', icon: '🎯', desc: 'Track goal progress' },
                    { name: 'SIP Calculator', path: '/calculators/sip', icon: '📈', desc: 'Monitor SIP growth' },
                    { name: 'Portfolio Tracker', path: '/calculators/investment-tracker', icon: '📊', desc: 'Track investments' }
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