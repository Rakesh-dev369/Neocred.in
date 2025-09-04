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

export default function EmergencyFundPlan() {
  const [activeSection, setActiveSection] = useState('what-is-emergency-fund');
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
      id: 'what-is-emergency-fund', 
      title: 'What is an Emergency Fund?', 
      icon: LightBulbIcon, 
      emoji: '💡', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'importance', 
      title: 'Why is it Important?', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'how-much-save', 
      title: 'How Much Should You Save?', 
      icon: CalculatorIcon, 
      emoji: '🧮', 
      duration: '4 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'where-to-keep', 
      title: 'Where to Keep Your Emergency Fund?', 
      icon: BanknotesIcon, 
      emoji: '🏦', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'how-to-build', 
      title: 'How to Build an Emergency Fund?', 
      icon: ChartBarIcon, 
      emoji: '📈', 
      duration: '4 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'by-age-stage', 
      title: 'Emergency Fund by Age & Life Stage', 
      icon: UserGroupIcon, 
      emoji: '👥', 
      duration: '5 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'action-checklist', 
      title: 'Action Checklist for Users', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '3 min read',
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Emergency Fund Plan 🛡️💰</h1>
              <p className="text-blue-100">Complete Guide • 7 Sections • 2025 Updated • Foundation Level</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/bonds-complete-guide"
                className="flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-sm"
              >
                Next: Bonds Guide
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8" />
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
            {/* What is an Emergency Fund Section */}
            {activeSection === 'what-is-emergency-fund' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is an Emergency Fund?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('what-is-emergency-fund')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('what-is-emergency-fund') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('what-is-emergency-fund') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('what-is-emergency-fund')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('what-is-emergency-fund')
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
                    <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                      An emergency fund is a dedicated savings buffer set aside for unexpected financial shocks—like job loss, medical emergencies, car breakdowns, or urgent home repairs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🩹</div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300">Financial First Aid Kit</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Ready for unexpected expenses</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">🚫</div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300">Prevents Debt</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Avoid high-interest loans</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎯</div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300">Protects Goals</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Keeps investments untouched</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('importance')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Why is it Important Section */}
            {activeSection === 'importance' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why is it Important?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 2 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('importance')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('importance') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('importance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('importance')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('importance')
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
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🚫 Protects from Debt</h3>
                      <p className="text-red-700 dark:text-red-300 mb-3">Prevents you from dipping into high-interest credit cards or personal loans during emergencies.</p>
                      <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                        <li>• Avoid 36-48% credit card interest</li>
                        <li>• No need for 12-24% personal loans</li>
                        <li>• Prevents debt spiral situations</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🧠 Mental Peace & Stability</h3>
                      <p className="text-green-700 dark:text-green-300 mb-3">Provides psychological comfort knowing you can handle unexpected expenses.</p>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• Reduces financial stress and anxiety</li>
                        <li>• Better sleep and mental health</li>
                        <li>• Confidence in financial decisions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🎯 Protects Long-term Goals</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-3">Keeps investments and long-term savings untouched during emergencies.</p>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Home purchase plans stay on track</li>
                        <li>• Retirement savings remain intact</li>
                        <li>• Children's education fund protected</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💪 Financial Discipline</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-3">Helps maintain healthy financial habits and behaviors.</p>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• Develops systematic saving habit</li>
                        <li>• Improves money management skills</li>
                        <li>• Creates financial responsibility mindset</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('what-is-emergency-fund')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('how-much-save')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* How Much Should You Save Section */}
            {activeSection === 'how-much-save' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Much Should You Save?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 4 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('how-much-save')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('how-much-save') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('how-much-save') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('how-much-save')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('how-much-save')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-8 border border-yellow-200 dark:border-yellow-700">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📏 The Standard Thumb Rule</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl mb-2">👤</div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Individuals</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">Unmarried, No Dependents</p>
                        <p className="font-bold text-yellow-800 dark:text-yellow-200">3–4 months</p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">of monthly expenses</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Salaried</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">Married / Dependents</p>
                        <p className="font-bold text-yellow-800 dark:text-yellow-200">6–9 months</p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">of monthly expenses</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl mb-2">💼</div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Self-Employed</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">Business Owners</p>
                        <p className="font-bold text-yellow-800 dark:text-yellow-200">9–12 months</p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">uncertain income</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">👉 What Expenses Should Include:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Essential Monthly Expenses</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Rent/EMI payments</li>
                          <li>• Groceries and food</li>
                          <li>• Utilities (electricity, water, gas)</li>
                          <li>• Insurance premiums</li>
                          <li>• Transportation costs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Family Obligations</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Children's education fees</li>
                          <li>• Healthcare and medicines</li>
                          <li>• Dependent family support</li>
                          <li>• Loan EMIs (if any)</li>
                          <li>• Basic communication (phone, internet)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('importance')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('where-to-keep')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Where to Keep Your Emergency Fund Section */}
            {activeSection === 'where-to-keep' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Where to Keep Your Emergency Fund?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('where-to-keep')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('where-to-keep') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('where-to-keep') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('where-to-keep')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('where-to-keep')
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
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🎯 Key Principles: Safety and Liquidity</h3>
                    <p className="text-green-700 dark:text-green-300">Emergency funds should be easily accessible and safe from market volatility. Returns are secondary to availability when you need it most.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Recommended Options</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">High-Yield Savings Account</h4>
                          <p className="text-sm text-green-600 dark:text-green-400 mb-2">AU Small Finance, IDFC First, etc. (7-8% returns)</p>
                          <p className="text-xs text-green-500 dark:text-green-400">✓ Immediate access • ✓ FDIC insured • ✓ No lock-in</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Liquid Mutual Funds</h4>
                          <p className="text-sm text-green-600 dark:text-green-400 mb-2">Better returns than savings (6-7%)</p>
                          <p className="text-xs text-green-500 dark:text-green-400">✓ Redeem within 24 hours • ✓ Low risk • ✓ Tax efficient</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Short-Term Fixed Deposits</h4>
                          <p className="text-sm text-green-600 dark:text-green-400 mb-2">3-6 month FDs for higher interest</p>
                          <p className="text-xs text-green-500 dark:text-green-400">✓ Guaranteed returns • ✓ Safe locking • ✓ Premature withdrawal option</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">❌ Avoid These Options</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Stocks & Equity Funds</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">High volatility, may lose value when you need money</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Long-term FDs</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Penalty on premature withdrawal, reduces liquidity</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Real Estate</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Illiquid, takes months to convert to cash</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">PPF, NPS</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">Long lock-in periods, not accessible during emergencies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('how-much-save')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('how-to-build')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* How to Build an Emergency Fund Section */}
            {activeSection === 'how-to-build' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Build an Emergency Fund?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 4 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('how-to-build')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('how-to-build') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('how-to-build') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('how-to-build')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('how-to-build')
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
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🎯 Set Your Target</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Calculate Monthly Expenses</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Track 2-3 months to get accurate average</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Set Initial Target</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">₹2–5 lakhs depending on lifestyle and family size</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Break into Milestones</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">₹50k → ₹1L → ₹2L → Final target</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🤖 Automate Your Savings</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Auto-debit to Liquid MF</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Set up monthly SIP to liquid funds</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Recurring Deposits</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Monthly RD for disciplined saving</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Salary Day Transfer</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Move money on salary day before expenses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">💡 Smart Building Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">For Regular Income</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Save 10-20% of monthly income consistently</li>
                          <li>• Use salary increments to boost emergency fund</li>
                          <li>• Redirect one EMI amount after loan closure</li>
                          <li>• Cut one major expense category temporarily</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">For Irregular Income</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Save 15-25% of every earning immediately</li>
                          <li>• Use good months to accelerate building</li>
                          <li>• Maintain separate business and personal funds</li>
                          <li>• Build larger fund (12+ months expenses)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🚀 Accelerate with Windfalls</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl mb-2">💰</div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Bonuses</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Annual performance bonuses</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">📄</div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Tax Refunds</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Income tax returns</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🎁</div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Gifts</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Festival money, wedding gifts</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">💼</div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Side Income</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Freelancing, part-time work</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('where-to-keep')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('by-age-stage')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Emergency Fund by Age & Life Stage Section */}
            {activeSection === 'by-age-stage' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Emergency Fund by Age & Life Stage</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 5 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('by-age-stage')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('by-age-stage') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('by-age-stage') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('by-age-stage')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('by-age-stage')
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
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">👶 Young (20s, Fresh Job)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Target Amount</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Start with 1–2 months' expenses</li>
                            <li>• Gradually increase to 3–4 months</li>
                            <li>• Focus on building the habit first</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Where to Keep</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• High-yield savings account (simple)</li>
                            <li>• Short-term FDs for better rates</li>
                            <li>• Avoid complex products initially</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">👨👩👧👦 30s (Married, Dependents, EMIs)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Target Amount</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Build 6–9 months' expenses</li>
                            <li>• Include family healthcare costs</li>
                            <li>• Account for EMI obligations</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Smart Distribution</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Savings Account: 1–2 months (immediate liquidity)</li>
                            <li>• Liquid MF: 2–3 months (better returns)</li>
                            <li>• FD: 3–4 months (stability and growth)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">👨👩👧👦 40s & 50s (High Responsibilities)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Target Amount</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Minimum 9–12 months' expenses</li>
                            <li>• Children's education emergencies</li>
                            <li>• Higher healthcare risks</li>
                            <li>• Job market challenges at this age</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Strategy</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Larger portion in liquid MF + FD</li>
                            <li>• Ensure health insurance is adequate</li>
                            <li>• Term insurance to protect family</li>
                            <li>• Separate fund for children's needs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">👴👵 Retirement (60s+)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Target Amount</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• 12+ months for medical + household</li>
                            <li>• Higher healthcare emergency needs</li>
                            <li>• Fixed income, limited earning ability</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Where to Keep</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Senior citizen FDs (higher rates)</li>
                            <li>• SCSS (Senior Citizens Savings Scheme)</li>
                            <li>• Liquid MF for better returns</li>
                            <li>• Avoid equity exposure for emergency fund</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">💡 Key Considerations by Life Stage</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Income Stability</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">More stable income = smaller emergency fund. Freelancers and business owners need larger funds.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Family Dependencies</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">More dependents = larger emergency fund. Consider elderly parents, children's needs.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Health Risks</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Age increases health risks. Ensure adequate health insurance + emergency fund.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('how-to-build')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('action-checklist')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Action Checklist Section */}
            {activeSection === 'action-checklist' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Action Checklist for Users</h2>
                      <p className="text-gray-600 dark:text-gray-400">All Levels • 3 min read • Implementation Guide</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('action-checklist')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('action-checklist') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('action-checklist') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('action-checklist')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('action-checklist')
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
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Your Emergency Fund Action Plan</h3>
                    <p className="text-green-700 dark:text-green-300">Follow this step-by-step checklist to build and maintain your emergency fund effectively.</p>
                  </div>
                  
                  <div className="grid gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                        Calculate Your Monthly Essential Expenses
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Track for 2-3 Months</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Rent/EMI payments</li>
                            <li>• Groceries and essential food</li>
                            <li>• Utilities (electricity, water, gas)</li>
                            <li>• Transportation costs</li>
                            <li>• Insurance premiums</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Include Family Costs</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Children's school fees</li>
                            <li>• Healthcare and medicines</li>
                            <li>• Dependent family support</li>
                            <li>• Loan EMIs (if any)</li>
                            <li>• Communication (phone, internet)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                        Decide Your Target (3–12 months depending on situation)
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Single/Young</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">3-4 months expenses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Family/Salaried</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">6-9 months expenses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Self-Employed</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">9-12 months expenses</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                        Open Dedicated Emergency Fund Account/MF
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Don't Mix with Regular Savings</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Separate high-yield savings account</li>
                            <li>• Liquid mutual fund account</li>
                            <li>• Short-term FD ladder</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Recommended Options</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• AU Small Finance Bank (7-8%)</li>
                            <li>• IDFC First Bank savings</li>
                            <li>• Liquid funds (Parag Parikh, HDFC)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                        Automate Monthly Savings
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Set Up Auto-transfers</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Monthly SIP to liquid funds</li>
                            <li>• Recurring deposit setup</li>
                            <li>• Salary day auto-debit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Start Small, Be Consistent</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Begin with ₹5,000-10,000/month</li>
                            <li>• Increase with salary increments</li>
                            <li>• Use windfalls to accelerate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                        <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
                        Review Every Year and Adjust with Lifestyle Inflation
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Annual Review</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Recalculate monthly expenses</li>
                            <li>• Adjust target amount if needed</li>
                            <li>• Review investment options</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Life Changes</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Marriage, children, new home</li>
                            <li>• Job change, income increase</li>
                            <li>• Health issues, aging parents</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📌 Critical Foundation Message</h3>
                    <p className="text-red-700 dark:text-red-300 text-lg leading-relaxed">
                      This is the foundation of financial security. Without an emergency fund, your investments in bonds, stocks, or SIPs may collapse during a crisis because you'll be forced to withdraw them at the worst possible time. Build this first, then invest for growth.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('by-age-stage')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <div className="flex items-center space-x-2">
                      <Link
                        to="/learn"
                        className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                      >
                        Learn Hub
                      </Link>
                      <Link
                        to="/learn/bonds-complete-guide"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Next Guide
                        <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
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
                      Emergency Fund Tools & Calculators
                    </h3>
                    <p className="text-blue-100">Calculate and plan your emergency fund with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Emergency Fund Calculator', path: '/calculators/emergency-fund', icon: '🛡️', desc: 'Calculate your emergency fund needs' },
                    { name: 'Budget Planner', path: '/calculators/budget-planner', icon: '📊', desc: 'Plan monthly expenses' },
                    { name: 'Savings Goal Planner', path: '/calculators/goal-based-investment', icon: '🎯', desc: 'Set and track savings goals' },
                    { name: 'Liquid Fund Returns', path: '/calculators/fd', icon: '💧', desc: 'Compare liquid investment options' }
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