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
  CreditCardIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function TaxOptimization() {
  const [activeSection, setActiveSection] = useState('what-is-tax-planning');
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
      id: 'what-is-tax-planning', 
      title: 'What is Tax Planning?', 
      icon: InformationCircleIcon, 
      emoji: '💸', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'why-important', 
      title: 'Why is it Important?', 
      icon: TrophyIcon, 
      emoji: '🏆', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'types-of-taxes', 
      title: 'Types of Taxes in India', 
      icon: BanknotesIcon, 
      emoji: '📋', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'tax-saving-sections', 
      title: 'Major Tax-saving Sections', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      duration: '8 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'capital-gains', 
      title: 'Capital Gains Tax Planning', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'common-mistakes', 
      title: 'Common Tax Saving Mistakes', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'smart-strategy', 
      title: 'Smart Tax Planning Strategy', 
      icon: LightBulbIcon, 
      emoji: '💡', 
      duration: '4 min read',
      difficulty: 'Advanced'
    },
    { 
      id: 'old-vs-new-regime', 
      title: 'Old vs New Tax Regime (2025)', 
      icon: UserGroupIcon, 
      emoji: '⚖️', 
      duration: '6 min read',
      difficulty: 'Advanced'
    },
    { 
      id: 'action-plan', 
      title: 'Step-by-Step Action Plan', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '5 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'example-case', 
      title: 'Example Case & Final Takeaway', 
      icon: AcademicCapIcon, 
      emoji: '📋', 
      duration: '4 min read',
      difficulty: 'All Levels'
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-pink-500 to-rose-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-rose-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-pink-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">💸 Tax Optimization (Complete 2025 Guide)</h1>
              <p className="text-pink-100">Complete Guide • 10 Sections • 2025 Updated • All Levels</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/insurance-strategy"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Previous: Insurance Strategy
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <Link
                to="/learn"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Back to Learn Hub
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <CurrencyRupeeIcon className="h-8 w-8" />
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
                <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-1 rounded-full">
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
                          ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-l-4 border-pink-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-pink-200 dark:bg-pink-800' : 'bg-gray-100 dark:bg-gray-600'
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
            {/* What is Tax Planning Section */}
            {activeSection === 'what-is-tax-planning' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is Tax Planning?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('what-is-tax-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('what-is-tax-planning') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('what-is-tax-planning') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('what-is-tax-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('what-is-tax-planning')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl mb-8 border border-pink-200 dark:border-pink-700">
                    <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-4">💸 Complete Definition</h3>
                    <p className="text-pink-700 dark:text-pink-300 leading-relaxed mb-4">
                      Tax planning is the legal process of organizing your finances to minimize tax liability under the Income Tax Act. It means using all available deductions, exemptions, and rebates to pay only what's required—not extra.
                    </p>
                    <div className="bg-pink-100 dark:bg-pink-800/30 p-4 rounded-lg">
                      <p className="text-pink-800 dark:text-pink-200 font-medium">
                        <strong>Important:</strong> It is NOT tax evasion (illegal), but tax optimization (legal).
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-pink-500" />
                        Key Principles of Tax Planning
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            principle: "Legal Compliance",
                            description: "Use only legal methods and provisions under Income Tax Act",
                            example: "Claiming 80C deductions for PPF, ELSS investments"
                          },
                          {
                            principle: "Advance Planning",
                            description: "Plan investments and expenses throughout the year, not last minute",
                            example: "Start SIP in ELSS in April, not March rush"
                          },
                          {
                            principle: "Goal Alignment",
                            description: "Align tax-saving investments with your financial goals",
                            example: "Use PPF for retirement + tax saving, ELSS for wealth creation + tax saving"
                          },
                          {
                            principle: "Documentation",
                            description: "Maintain proper records and proofs for all claims",
                            example: "Keep receipts for health insurance, investment certificates"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 rounded-xl bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700">
                            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">{item.principle}</h4>
                            <p className="text-pink-700 dark:text-pink-300 text-sm mb-2">{item.description}</p>
                            <p className="text-pink-600 dark:text-pink-400 text-xs font-medium">Example: {item.example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('why-important')}
                      className="flex items-center px-6 py-3 text-base bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Why Important Section */}
            {activeSection === 'why-important' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why is Tax Planning Important?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Benefits • 2 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('why-important')} className={`p-2 rounded-full transition-colors ${bookmarks.has('why-important') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('why-important') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('why-important')} className={`p-2 rounded-full transition-colors ${completedSections.has('why-important') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-6">
                    {[
                      {
                        benefit: "Reduces tax burden → more disposable income",
                        icon: "💰",
                        description: "Legal tax optimization increases your take-home income",
                        example: "Save ₹46,800 tax on ₹10L income through proper planning"
                      },
                      {
                        benefit: "Helps in achieving financial goals (via investments that also give tax benefits)",
                        icon: "🎯",
                        description: "Tax-saving investments serve dual purpose - wealth creation + tax reduction",
                        example: "ELSS gives 12% returns + ₹46,800 tax saving on ₹1.5L investment"
                      },
                      {
                        benefit: "Encourages savings & investments → supports the economy",
                        icon: "📈",
                        description: "Government incentivizes savings through tax benefits",
                        example: "PPF, NPS, ELSS all promote long-term wealth building"
                      },
                      {
                        benefit: "Prevents penalties & ensures compliance with tax laws",
                        icon: "⚖️",
                        description: "Proper planning avoids last-minute mistakes and penalties",
                        example: "Timely ITR filing prevents ₹5,000-10,000 late fees"
                      },
                      {
                        benefit: "Gives peace of mind while filing returns",
                        icon: "😌",
                        description: "Organized documentation and planning reduces stress",
                        example: "All proofs ready, no scrambling during ITR filing"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.benefit}</h4>
                            <p className="text-green-700 dark:text-green-300 mb-3">{item.description}</p>
                            <div className="bg-green-100 dark:bg-green-800/30 p-3 rounded-lg">
                              <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                                <strong>Example:</strong> {item.example}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mt-8">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                      <LightBulbIcon className="w-5 h-5 mr-2" />
                      💡 Economic Impact
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Higher tax compliance = stronger government revenue = better infrastructure, healthcare, subsidies → which again benefits individuals.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('what-is-tax-planning')} className="flex items-center px-5 py-3 text-base text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('types-of-taxes')} className="flex items-center px-6 py-3 text-base bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Taxes Section */}
            {activeSection === 'types-of-taxes' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Taxes in India (for individuals)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Categories • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('types-of-taxes')} className={`p-2 rounded-full transition-colors ${bookmarks.has('types-of-taxes') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('types-of-taxes') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('types-of-taxes')} className={`p-2 rounded-full transition-colors ${completedSections.has('types-of-taxes') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-6">
                    {[
                      {
                        category: "Direct Taxes",
                        types: "Income Tax, Capital Gains Tax",
                        description: "Taxes paid directly to government on income and capital gains",
                        focus: "Primary focus for tax planning",
                        color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                      },
                      {
                        category: "Indirect Taxes",
                        types: "GST (applies when buying goods/services)",
                        description: "Taxes included in price of goods and services",
                        focus: "Limited planning scope for individuals",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                      },
                      {
                        category: "Wealth/Property-related",
                        types: "Stamp Duty, Property Tax, Inheritance (Estate planning side)",
                        description: "Taxes on property transactions and wealth transfer",
                        focus: "Important for real estate investors",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      }
                    ].map((tax, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${tax.color}`}>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-3">{tax.category}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Types:</div>
                            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{tax.types}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Description:</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">{tax.description}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Planning Focus:</div>
                            <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{tax.focus}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">👉 Tax Planning Focus</h4>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      For tax planning, focus is mainly on <strong>Income Tax & Capital Gains</strong>. These are the areas where individuals can legally optimize their tax liability through proper planning and investment choices.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('why-important')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('tax-saving-sections')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Major Tax-saving Sections */}
            {activeSection === 'tax-saving-sections' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Major Tax-saving Sections under Income Tax Act</h2>
                      <p className="text-gray-600 dark:text-gray-400">Deductions • 8 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('tax-saving-sections')} className={`p-2 rounded-full transition-colors ${bookmarks.has('tax-saving-sections') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('tax-saving-sections') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('tax-saving-sections')} className={`p-2 rounded-full transition-colors ${completedSections.has('tax-saving-sections') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {/* Section 80C */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <CurrencyRupeeIcon className="w-5 h-5 mr-2 text-green-500" />
                        A. Section 80C (Limit ₹1.5 Lakh per year)
                      </h3>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                        <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Eligible Investments/Expenses:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { item: "PPF (Public Provident Fund)", returns: "7.1% (2024-25)", lockIn: "15 years" },
                            { item: "EPF (Employees' Provident Fund)", returns: "8.15% (2024-25)", lockIn: "Till retirement" },
                            { item: "ELSS (Equity Linked Savings Schemes)", returns: "10-12% CAGR", lockIn: "3 years" },
                            { item: "NSC (National Savings Certificate)", returns: "6.8% (2024-25)", lockIn: "5 years" },
                            { item: "Sukanya Samriddhi Yojana", returns: "8.2% (2024-25)", lockIn: "21 years" },
                            { item: "Life Insurance Premiums", returns: "Protection + tax", lockIn: "Policy term" },
                            { item: "Principal repayment on Home Loan", returns: "Asset building", lockIn: "Loan tenure" },
                            { item: "Tuition Fees (for children)", returns: "Education", lockIn: "Academic year" }
                          ].map((investment, index) => (
                            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-green-200 dark:border-green-600">
                              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">{investment.item}</h5>
                              <div className="text-sm space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-gray-600 dark:text-gray-400">Returns:</span>
                                  <span className="text-green-600 dark:text-green-400 font-medium">{investment.returns}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600 dark:text-gray-400">Lock-in:</span>
                                  <span className="text-blue-600 dark:text-blue-400 font-medium">{investment.lockIn}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium">
                            💡 <strong>Tip:</strong> ELSS (3-year lock-in) gives market-linked returns & tax saving → best for wealth + tax.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section 80D */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <HeartIcon className="w-5 h-5 mr-2 text-blue-500" />
                        B. Section 80D – Health Insurance
                      </h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            { category: "Self/Family", limit: "₹25,000", description: "Health insurance premium for self, spouse, children" },
                            { category: "Parents (<60 years)", limit: "Additional ₹25,000", description: "Health insurance premium for parents below 60" },
                            { category: "Senior Citizen Parents", limit: "₹50,000", description: "If parents are senior citizens (60+)" },
                            { category: "Preventive Health Check-up", limit: "Up to ₹5,000", description: "Included within above limits" }
                          ].map((item, index) => (
                            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                              <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">{item.category}</h5>
                              <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{item.limit}</div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Other Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          section: "C. Section 80CCD (1B) – NPS",
                          limit: "Additional ₹50,000",
                          benefit: "Beyond 80C limit",
                          description: "Promotes retirement savings + reduces taxable income",
                          color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                        },
                        {
                          section: "D. Home Loan Tax Benefits",
                          limit: "Up to ₹2,00,000",
                          benefit: "Interest deduction",
                          description: "Section 24(b): Interest on self-occupied property + 80C covers principal",
                          color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                        }
                      ].map((item, index) => (
                        <div key={index} className={`p-6 rounded-xl border ${item.color}`}>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3">{item.section}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Limit:</span>
                              <span className="text-lg font-bold text-green-600 dark:text-green-400">{item.limit}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Benefit:</span>
                              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.benefit}</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Other Deductions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">E. Other Deductions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { section: "80E", description: "Education loan interest", limit: "No limit, 8 years" },
                          { section: "80G", description: "Donations to charities/NGOs", limit: "50-100% of donation" },
                          { section: "80TTA/80TTB", description: "Savings account interest", limit: "₹10K/₹50K (seniors)" }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <h5 className="font-bold text-gray-900 dark:text-white mb-2">{item.section}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                            <div className="text-sm font-medium text-purple-600 dark:text-purple-400">{item.limit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('types-of-taxes')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('capital-gains')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Capital Gains Section */}
            {activeSection === 'capital-gains' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Capital Gains Tax Planning (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Investment Gains • 4 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('capital-gains')} className={`p-2 rounded-full transition-colors ${bookmarks.has('capital-gains') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('capital-gains') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('capital-gains')} className={`p-2 rounded-full transition-colors ${completedSections.has('capital-gains') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {/* Types of Capital Gains */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📊 Types of Capital Gains (2025)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            type: "Short Term Capital Gains (STCG)",
                            equity: "Holding ≤ 1 year",
                            tax: "15% (+ cess)",
                            example: "Buy shares in Jan, sell in Nov → 15% tax",
                            color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                          },
                          {
                            type: "Long Term Capital Gains (LTCG)",
                            equity: "Holding > 1 year",
                            tax: "10% on gains > ₹1L (+ cess)",
                            example: "₹1L exemption per year, then 10% tax",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          }
                        ].map((gain, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${gain.color}`}>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{gain.type}</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Equity/MF:</span>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{gain.equity}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Tax Rate:</span>
                                <span className="text-sm font-bold text-red-600 dark:text-red-400">{gain.tax}</span>
                              </div>
                              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                  <strong>Example:</strong> {gain.example}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Real Estate Capital Gains */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">🏠 Real Estate Capital Gains</h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">STCG (≤ 2 years)</h4>
                            <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Added to income, taxed as per slab</p>
                            <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-lg">
                              <p className="text-xs text-blue-800 dark:text-blue-200">
                                <strong>Example:</strong> ₹50L gain → 30% tax if in 30% slab
                              </p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">LTCG (&gt; 2 years)</h4>
                            <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">20% with indexation benefit</p>
                            <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-lg">
                              <p className="text-xs text-blue-800 dark:text-blue-200">
                                <strong>Benefit:</strong> Cost adjusted for inflation → lower taxable gain
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tax Saving Strategies */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">💡 Tax Saving Strategies</h3>
                      <div className="space-y-4">
                        {[
                          {
                            strategy: "Hold equity/MF for >1 year",
                            benefit: "Get ₹1L LTCG exemption + 10% vs 15% tax",
                            example: "₹2L gain: STCG ₹30K tax vs LTCG ₹10K tax"
                          },
                          {
                            strategy: "Use Section 54/54EC for real estate",
                            benefit: "Reinvest in another property or bonds to save tax",
                            example: "₹1Cr gain → buy ₹1Cr property → zero tax"
                          },
                          {
                            strategy: "Harvest losses to offset gains",
                            benefit: "Sell loss-making investments to reduce tax",
                            example: "₹1L gain + ₹50K loss = ₹50K taxable gain"
                          },
                          {
                            strategy: "Time your sales strategically",
                            benefit: "Spread gains across financial years",
                            example: "Sell ₹1L worth in March, ₹1L in April → 2x exemption"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-700">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-yellow-200 dark:bg-yellow-800 rounded-lg">
                                <LightBulbIcon className="h-4 w-4 text-yellow-800 dark:text-yellow-200" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">{item.strategy}</h4>
                                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">{item.benefit}</p>
                                <div className="bg-yellow-100 dark:bg-yellow-800/30 p-2 rounded-lg">
                                  <p className="text-xs text-yellow-800 dark:text-yellow-200">
                                    <strong>Example:</strong> {item.example}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('tax-saving-sections')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Tax Saving Mistakes (Avoid These!)</h2>
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
                        mistake: "❌ Last-minute tax planning (March rush)",
                        problem: "Leads to poor investment choices and missed opportunities",
                        solution: "✅ Start planning in April, invest systematically via SIP",
                        impact: "Better returns + stress-free planning"
                      },
                      {
                        mistake: "❌ Buying insurance only for tax saving",
                        problem: "Inadequate coverage, poor returns on investment-cum-insurance",
                        solution: "✅ Buy term insurance for protection + ELSS for tax + returns",
                        impact: "Higher coverage + better investment returns"
                      },
                      {
                        mistake: "❌ Not comparing Old vs New tax regime",
                        problem: "May pay higher tax by choosing wrong regime",
                        solution: "✅ Calculate tax under both regimes annually",
                        impact: "Can save ₹20K-50K+ per year"
                      },
                      {
                        mistake: "❌ Ignoring employer's tax-saving benefits",
                        problem: "Missing out on HRA, LTA, meal vouchers, etc.",
                        solution: "✅ Optimize salary structure with HR/CA",
                        impact: "Additional ₹50K-1L tax savings"
                      },
                      {
                        mistake: "❌ Not maintaining proper documentation",
                        problem: "Penalties, disallowed claims during IT scrutiny",
                        solution: "✅ Keep all receipts, certificates organized digitally",
                        impact: "Avoid penalties + smooth ITR filing"
                      },
                      {
                        mistake: "❌ Investing in tax-saving FDs/NSC for high returns",
                        problem: "Low returns (6-7%) don't beat inflation",
                        solution: "✅ Use ELSS for tax saving + wealth creation (10-12% returns)",
                        impact: "₹1.5L in ELSS vs FD = ₹3L+ extra in 10 years"
                      },
                      {
                        mistake: "❌ Not using full 80C limit or other deductions",
                        problem: "Paying unnecessary tax",
                        solution: "✅ Maximize 80C (₹1.5L) + 80D + 80CCD(1B)",
                        impact: "Save up to ₹75K+ tax annually"
                      },
                      {
                        mistake: "❌ Selling equity investments within 1 year",
                        problem: "15% STCG tax vs 10% LTCG (with ₹1L exemption)",
                        solution: "✅ Hold equity/ELSS for >1 year",
                        impact: "₹1L gain: ₹15K vs ₹0 tax"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
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
                          <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                              <strong>Impact:</strong> {item.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mt-8">
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
                      <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                      💡 Golden Rule
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      <strong>"Tax planning should align with your financial goals, not just tax savings."</strong> Don't invest in something just because it saves tax — ensure it also helps you build wealth.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('capital-gains')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('smart-strategy')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Smart Strategy Section */}
            {activeSection === 'smart-strategy' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl">
                      <LightBulbIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Smart Tax Planning Strategy (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 4 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('smart-strategy')} className={`p-2 rounded-full transition-colors ${bookmarks.has('smart-strategy') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('smart-strategy') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('smart-strategy')} className={`p-2 rounded-full transition-colors ${completedSections.has('smart-strategy') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {/* Age-wise Strategy */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">🎯 Age-wise Tax Planning Strategy</h3>
                      <div className="space-y-6">
                        {[
                          {
                            age: "20s (Fresh Graduates)",
                            strategy: "Focus on ELSS + Term Insurance + Health Insurance",
                            allocation: "ELSS ₹1L + Term ₹25K + Health ₹25K = ₹1.5L (80C) + ₹25K (80D)",
                            reason: "High risk appetite, long investment horizon, build wealth early",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          },
                          {
                            age: "30s (Career Growth)",
                            strategy: "ELSS + PPF + Home Loan + NPS + Health Insurance",
                            allocation: "ELSS ₹75K + PPF ₹50K + Insurance ₹25K + NPS ₹50K + Health ₹25K",
                            reason: "Balanced approach, home buying, family planning, retirement start",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                          },
                          {
                            age: "40s (Peak Earning)",
                            strategy: "Maximize all deductions + Children's education planning",
                            allocation: "Full 80C + 80D + 80CCD(1B) + Education expenses + Real estate",
                            reason: "High income, maximum tax liability, children's future, retirement focus",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                          },
                          {
                            age: "50s+ (Pre-retirement)",
                            strategy: "Conservative investments + Senior citizen benefits",
                            allocation: "PPF + NSC + SCSS + Senior citizen health insurance benefits",
                            reason: "Capital preservation, lower risk, prepare for retirement income",
                            color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                          }
                        ].map((item, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${item.color}`}>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{item.age}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Strategy:</div>
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.strategy}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Allocation:</div>
                                <div className="text-sm text-green-600 dark:text-green-400 font-medium">{item.allocation}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Reason:</div>
                                <div className="text-sm text-gray-700 dark:text-gray-300">{item.reason}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Income-wise Strategy */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">💰 Income-wise Tax Strategy</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                          <thead>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Annual Income</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Tax Regime</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Priority Investments</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Expected Tax Saving</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { income: "₹3-5L", regime: "New Regime", investments: "Basic health insurance + ELSS", saving: "₹10-15K" },
                              { income: "₹5-8L", regime: "Compare both", investments: "ELSS + PPF + Health insurance", saving: "₹25-40K" },
                              { income: "₹8-12L", regime: "Old Regime", investments: "Full 80C + 80D + NPS", saving: "₹50-75K" },
                              { income: "₹12-20L", regime: "Old Regime", investments: "All deductions + Home loan", saving: "₹75K-1.5L" },
                              { income: "₹20L+", regime: "Old Regime", investments: "Maximum deductions + Tax planning", saving: "₹1.5L+" }
                            ].map((row, index) => (
                              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">{row.income}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.regime}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.investments}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-600 dark:text-green-400 font-medium">{row.saving}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Advanced Strategies */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">🚀 Advanced Tax Optimization Techniques</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            technique: "Salary Structure Optimization",
                            description: "Negotiate with employer for tax-friendly components",
                            benefits: ["HRA allowance", "LTA benefits", "Meal vouchers", "Mobile/Internet reimbursement"],
                            impact: "Save ₹50K-1L annually"
                          },
                          {
                            technique: "Family Tax Planning",
                            description: "Distribute investments among family members",
                            benefits: ["Spouse's separate 80C limit", "Parents' health insurance", "Children's education expenses", "Joint property ownership"],
                            impact: "Double the tax benefits"
                          },
                          {
                            technique: "Timing of Income & Expenses",
                            description: "Strategic timing of bonuses and investments",
                            benefits: ["Defer bonus to next FY", "Prepay insurance premiums", "Time capital gains", "Advance tax payments"],
                            impact: "Optimize tax across years"
                          },
                          {
                            technique: "Business Income Optimization",
                            description: "For freelancers and business owners",
                            benefits: ["Business expense deductions", "Depreciation benefits", "Professional tax", "Office rent deduction"],
                            impact: "Significant tax reduction"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">{item.technique}</h4>
                            <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-4">{item.description}</p>
                            <div className="space-y-2 mb-4">
                              {item.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-indigo-600 dark:text-indigo-400">
                                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                            <div className="bg-indigo-100 dark:bg-indigo-800/30 p-3 rounded-lg">
                              <p className="text-sm text-indigo-800 dark:text-indigo-200 font-medium">
                                <strong>Impact:</strong> {item.impact}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('old-vs-new-regime')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Old vs New Tax Regime Section */}
            {activeSection === 'old-vs-new-regime' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Old Tax Regime vs New Tax Regime (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Comparison • 6 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('old-vs-new-regime')} className={`p-2 rounded-full transition-colors ${bookmarks.has('old-vs-new-regime') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('old-vs-new-regime') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('old-vs-new-regime')} className={`p-2 rounded-full transition-colors ${completedSections.has('old-vs-new-regime') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {/* Tax Slabs Comparison */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📌 1. Tax Slabs (FY 2025-26)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                          <thead>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Income Slab</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Old Regime</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">New Regime (default)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { slab: "0 – ₹2.5L", old: "Nil", new: "Nil" },
                              { slab: "₹2.5L – ₹3L", old: "5%", new: "Nil" },
                              { slab: "₹3L – ₹5L", old: "5%", new: "5%" },
                              { slab: "₹5L – ₹6L", old: "20%", new: "5%" },
                              { slab: "₹6L – ₹9L", old: "20%", new: "10%" },
                              { slab: "₹9L – ₹10L", old: "20%", new: "15%" },
                              { slab: "₹10L – ₹12L", old: "30%", new: "15%" },
                              { slab: "₹12L – ₹15L", old: "30%", new: "20%" },
                              { slab: "Above ₹15L", old: "30%", new: "30%" }
                            ].map((row, index) => (
                              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">{row.slab}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.old}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.new}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Rebate under Section 87A</h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• <strong>Old Regime:</strong> Up to ₹5L income → Nil tax</li>
                          <li>• <strong>New Regime:</strong> Up to ₹7L income → Nil tax</li>
                        </ul>
                      </div>
                    </div>

                    {/* When to Choose Which */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">👉 4. When to Choose Which?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                          <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">👉 Choose Old Regime if:</h4>
                          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                            <li>• You invest in 80C (PF, ELSS, Insurance)</li>
                            <li>• You have HRA, home loan interest, health insurance, NPS</li>
                            <li>• Your deductions are above ₹2.5L (approx)</li>
                          </ul>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-700">
                          <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">👉 Choose New Regime if:</h4>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                            <li>• You are young, just started working, or don't invest much</li>
                            <li>• Your salary package has fewer allowances</li>
                            <li>• You want simplicity & higher take-home salary</li>
                            <li>• Your annual income is ₹7–12L without big deductions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Example Scenarios */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📌 5. Example Scenarios</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                          <thead>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Income</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Deductions Claimed</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Old Regime Tax</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">New Regime Tax</th>
                              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Better Option</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { income: "₹6L", deductions: "Nil", oldTax: "~₹23,400", newTax: "Nil (rebate up to 7L)", better: "New" },
                              { income: "₹9L", deductions: "₹2.5L", oldTax: "~₹46,800", newTax: "~₹46,800", better: "Equal" },
                              { income: "₹12L", deductions: "Nil", oldTax: "~₹1.6L", newTax: "~₹1.2L", better: "New" },
                              { income: "₹12L", deductions: "₹3L (80C, HRA, 80D)", oldTax: "~₹1L", newTax: "~₹1.2L", better: "Old" },
                              { income: "₹20L", deductions: "₹4L deductions", oldTax: "~₹4.3L", newTax: "~₹4.7L", better: "Old" }
                            ].map((row, index) => (
                              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">{row.income}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.deductions}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.oldTax}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{row.newTax}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    row.better === 'Old' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                                    row.better === 'New' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                                  }`}>
                                    {row.better}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">✅ Rule of Thumb:</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                          <li>• If deductions &gt; ₹2.5L → <strong>Old Regime</strong> is better</li>
                          <li>• If deductions &lt; ₹2.5L → <strong>New Regime</strong> is better</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('smart-strategy')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('action-plan')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Plan Section */}
            {activeSection === 'action-plan' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step-by-Step Action Plan (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Implementation • 5 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('action-plan')} className={`p-2 rounded-full transition-colors ${bookmarks.has('action-plan') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('action-plan') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('action-plan')} className={`p-2 rounded-full transition-colors ${completedSections.has('action-plan') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-6">
                    {[
                      {
                        step: "✅ Step 1: Check your taxable income & which slab you fall into",
                        details: "Calculate gross income, identify applicable tax slab in old vs new regime",
                        action: "Use salary calculator or consult CA for complex cases"
                      },
                      {
                        step: "✅ Step 2: Use 80C fully (₹1.5 lakh) with a mix of ELSS + PPF/SSY + Insurance",
                        details: "Diversify 80C investments for optimal returns and risk management",
                        action: "ELSS ₹75K + PPF ₹50K + Term Insurance ₹25K = ₹1.5L"
                      },
                      {
                        step: "✅ Step 3: Add Health Insurance (80D) & NPS (80CCD 1B)",
                        details: "Maximize health deductions and get additional NPS benefit",
                        action: "Health insurance ₹25K + NPS ₹50K = ₹75K additional deduction"
                      },
                      {
                        step: "✅ Step 4: If you have home loan → claim 80C (principal) + 24(b) (interest)",
                        details: "Home loan provides dual tax benefits on principal and interest",
                        action: "Principal under 80C + Interest up to ₹2L under 24(b)"
                      },
                      {
                        step: "✅ Step 5: Plan for capital gains if investing in real estate/equity",
                        details: "Use LTCG exemptions and reinvestment options strategically",
                        action: "Hold equity >1 year, use 54/54EC for real estate gains"
                      },
                      {
                        step: "✅ Step 6: Choose between Old Tax Regime vs New Tax Regime",
                        details: "Compare tax liability under both regimes based on your deductions",
                        action: "If deductions >₹2.5L choose Old, else choose New regime"
                      },
                      {
                        step: "✅ Step 7: File ITR on time & keep documents ready",
                        details: "Maintain proper documentation and file before due date",
                        action: "File by July 31st, keep all investment proofs organized"
                      }
                    ].map((step, index) => (
                      <div key={index} className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">{step.step}</h4>
                        <p className="text-blue-700 dark:text-blue-300 mb-2">{step.details}</p>
                        <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                            <strong>Action:</strong> {step.action}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('old-vs-new-regime')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('example-case')} className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Example Case Section */}
            {activeSection === 'example-case' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Example Case & Final Takeaway (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Real Example • 4 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('example-case')} className={`p-2 rounded-full transition-colors ${bookmarks.has('example-case') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('example-case') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('example-case')} className={`p-2 rounded-full transition-colors ${completedSections.has('example-case') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {/* Example Case */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">10. Example Case (Salary ₹10,00,000)</h3>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">Tax Optimization Strategy:</h4>
                        <div className="space-y-4">
                          {[
                            { item: "80C: ELSS ₹75,000 + PPF ₹50,000 + Term Insurance ₹25,000", amount: "₹1,50,000", saving: "₹46,800" },
                            { item: "80D: Health Insurance ₹20,000", amount: "₹20,000", saving: "₹6,240" },
                            { item: "80CCD (1B): NPS ₹50,000", amount: "₹50,000", saving: "₹15,600" },
                            { item: "Home Loan Interest: ₹2,00,000", amount: "₹2,00,000", saving: "₹62,400" }
                          ].map((deduction, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 dark:text-white">{deduction.item}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-blue-600 dark:text-blue-400">{deduction.amount}</div>
                                <div className="text-sm text-green-600 dark:text-green-400">Saves: {deduction.saving}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-yellow-700 dark:text-yellow-300 mb-1">Taxable income reduced from:</div>
                              <div className="text-lg font-bold text-red-600 dark:text-red-400">₹10,00,000 → ₹6,55,000</div>
                            </div>
                            <div>
                              <div className="text-sm text-yellow-700 dark:text-yellow-300 mb-1">Total Tax Saved:</div>
                              <div className="text-lg font-bold text-green-600 dark:text-green-400">₹75,000 legally</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Final Takeaway */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">11. Final Key Takeaway</h3>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <p className="text-purple-700 dark:text-purple-300 text-lg leading-relaxed mb-4">
                          Tax planning is not just about saving money but also about <strong>wealth creation, retirement security, and compliance</strong>. The earlier you start, the more compounding benefits you enjoy.
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-800/30 p-4 rounded-lg">
                          <p className="text-purple-800 dark:text-purple-200 font-bold text-center">
                            👉 "Don't save tax for the sake of saving — align tax-saving with your life goals."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          benefit: "Wealth Creation",
                          description: "Tax-saving investments like ELSS create long-term wealth",
                          icon: "📈"
                        },
                        {
                          benefit: "Retirement Security",
                          description: "PPF, NPS build retirement corpus with tax benefits",
                          icon: "🏦"
                        },
                        {
                          benefit: "Legal Compliance",
                          description: "Proper planning ensures full compliance with tax laws",
                          icon: "⚖️"
                        }
                      ].map((item, index) => (
                        <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl text-center">
                          <div className="text-4xl mb-3">{item.icon}</div>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.benefit}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('action-plan')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <Link to="/learn/wealth-tracking" className="flex items-center px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
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
              className="bg-gradient-to-r from-pink-500 via-rose-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Tax Planning Tools
                    </h3>
                    <p className="text-pink-100">Calculate and optimize your taxes with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'HRA Exemption Calculator', path: '/calculators/hra-exemption', icon: '🏠', desc: 'Calculate HRA tax benefits' },
                    { name: 'Form 16 Breakdown', path: '/calculators/form16-breakdown', icon: '📋', desc: 'Analyze your Form 16' },
                    { name: 'Budget Goal Planner', path: '/calculators/budget-goal-planner', icon: '🎯', desc: 'Plan tax-saving investments' },
                    { name: 'PPF Calculator', path: '/calculators/ppf', icon: '💰', desc: 'Calculate PPF returns & tax benefits' }
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
                        <p className="text-xs text-pink-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-pink-200">
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