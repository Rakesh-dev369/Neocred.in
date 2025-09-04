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
  XMarkIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function CreditScoreDebtManagement() {
  const [activeSection, setActiveSection] = useState('what-it-is');
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
      id: 'what-it-is', 
      title: 'What It Is', 
      icon: InformationCircleIcon, 
      emoji: '💡', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'importance', 
      title: 'Importance', 
      icon: TrophyIcon, 
      emoji: '🏆', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'benefits', 
      title: 'Benefits', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'how-to-start', 
      title: 'How to Start', 
      icon: LightBulbIcon, 
      emoji: '🚀', 
      duration: '4 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'types-of-debt', 
      title: 'Types of Debt', 
      icon: CreditCardIcon, 
      emoji: '💳', 
      duration: '3 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'risks', 
      title: 'Risks', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      duration: '3 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'age-based-planning', 
      title: 'Age-Based Planning', 
      icon: UserGroupIcon, 
      emoji: '👥', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'common-mistakes', 
      title: 'Common Mistakes', 
      icon: XMarkIcon, 
      emoji: '❌', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'action-steps', 
      title: 'Action Steps', 
      icon: ChartBarIcon, 
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-orange-500 to-amber-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-orange-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">💳 Credit Score & Debt Management</h1>
              <p className="text-orange-100">Complete Guide • 9 Sections • 2025 Updated • Foundation Level</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/investment-portfolio"
                className="flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-sm"
              >
                Previous: Investment Portfolio
                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 ml-1" />
              </Link>
              <Link
                to="/learn/retirement-planning"
                className="flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-sm"
              >
                Next: Retirement Planning
                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 ml-1" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <CreditCardIcon className="h-8 w-8" />
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
                <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
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
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-l-4 border-orange-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-orange-200 dark:bg-orange-800' : 'bg-gray-100 dark:bg-gray-600'
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
            {/* What It Is Section */}
            {activeSection === 'what-it-is' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What It Is</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('what-it-is')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('what-it-is') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('what-it-is') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('what-it-is')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('what-it-is')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl mb-8 border border-orange-200 dark:border-orange-700">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
                          <CreditCardIcon className="w-5 h-5 mr-2" />
                          Credit Score
                        </h3>
                        <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                          A 3-digit number (300–900 in India) that represents your creditworthiness. It's calculated based on your credit history, payment behavior, and debt management.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
                          <BanknotesIcon className="w-5 h-5 mr-2" />
                          Debt Management
                        </h3>
                        <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                          The process of handling loans, credit cards, and other debts in a way that keeps you financially stable and helps maintain/improve your credit score.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <StarIcon className="w-5 h-5 mr-2 text-orange-500" />
                        Credit Score Ranges in India (2025)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { range: '300-549', label: 'Poor', color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200', desc: 'Loan rejection likely' },
                          { range: '550-649', label: 'Fair', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200', desc: 'High interest rates' },
                          { range: '650-749', label: 'Good', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200', desc: 'Moderate rates' },
                          { range: '750-900', label: 'Excellent', color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200', desc: 'Best rates &amp; terms' }
                        ].map((score, index) => (
                          <div key={index} className="p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                            <div className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${score.color}`}>
                              {score.label}
                            </div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{score.range}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{score.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-blue-500" />
                        Credit Bureaus in India (2025)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { 
                            name: 'CIBIL (TransUnion)', 
                            market: '85% market share', 
                            free: 'Once per year', 
                            website: 'cibil.com',
                            features: ['Most widely used', 'CIBIL Score 2.0', 'Credit monitoring alerts']
                          },
                          { 
                            name: 'Experian', 
                            market: '10% market share', 
                            free: 'Once per year', 
                            website: 'experian.in',
                            features: ['Detailed credit report', 'Identity theft monitoring', 'Credit education']
                          },
                          { 
                            name: 'Equifax', 
                            market: '3% market share', 
                            free: 'Once per year', 
                            website: 'equifax.co.in',
                            features: ['Credit score simulator', 'Dispute resolution', 'Financial planning tools']
                          },
                          { 
                            name: 'CRIF High Mark', 
                            market: '2% market share', 
                            free: 'Once per year', 
                            website: 'crifhighmark.com',
                            features: ['Commercial credit reports', 'SME focus', 'Risk assessment tools']
                          }
                        ].map((bureau, index) => (
                          <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-gray-900 dark:text-white">{bureau.name}</h4>
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                {bureau.market}
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                <strong>Free Report:</strong> {bureau.free}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                <strong>Website:</strong> {bureau.website}
                              </div>
                              <div className="mt-3">
                                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</div>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                  {bureau.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                      <CheckCircleIcon className="w-3 h-3 mr-2 text-green-500" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <ChartBarIcon className="w-5 h-5 mr-2 text-purple-500" />
                        Credit Score Factors (2025 Weightage)
                      </h3>
                      <div className="space-y-4">
                        {[
                          { factor: 'Payment History', weight: '35%', desc: 'On-time payments, defaults, late payments', impact: 'High' },
                          { factor: 'Credit Utilization', weight: '30%', desc: 'Credit used vs. credit available', impact: 'High' },
                          { factor: 'Length of Credit History', weight: '15%', desc: 'Age of oldest account, average account age', impact: 'Medium' },
                          { factor: 'Credit Mix', weight: '10%', desc: 'Types of credit (cards, loans, mortgages)', impact: 'Low' },
                          { factor: 'New Credit Inquiries', weight: '10%', desc: 'Recent credit applications and hard inquiries', impact: 'Low' }
                        ].map((factor, index) => (
                          <div key={index} className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900 dark:text-white">{factor.factor}</h4>
                                <div className="flex items-center space-x-2">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    factor.impact === 'High' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' :
                                    factor.impact === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                                    'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                  }`}>
                                    {factor.impact} Impact
                                  </span>
                                  <span className="text-lg font-bold text-orange-600 dark:text-orange-400">{factor.weight}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{factor.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">2025 Update</span>
                      </div>
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">New RBI Guidelines for Credit Scoring</h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• Alternative data sources (UPI transactions, utility payments) now considered</li>
                        <li>• Faster credit score updates (monthly instead of quarterly)</li>
                        <li>• Enhanced dispute resolution process (30-day timeline)</li>
                        <li>• Mandatory credit score disclosure for all loan rejections</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('importance')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Importance
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Importance Section */}
            {activeSection === 'importance' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                      <TrophyIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Importance</h2>
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
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-8 border border-yellow-200 dark:border-yellow-700">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🏆 Why Credit Score &amp; Debt Management Matter</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Your credit score is your financial passport - it determines your access to loans, credit cards, and even job opportunities in India.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <CurrencyRupeeIcon className="w-5 h-5 mr-2 text-green-500" />
                        Financial Impact (2025 Data)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            title: 'Home Loan Interest Rates',
                            excellent: '8.5% - 9.0%',
                            poor: '11.0% - 13.0%',
                            savings: '₹5.2L on ₹50L loan',
                            icon: HomeIcon
                          },
                          {
                            title: 'Personal Loan Rates',
                            excellent: '10.5% - 12.0%',
                            poor: '18.0% - 24.0%',
                            savings: '₹2.8L on ₹10L loan',
                            icon: BanknotesIcon
                          },
                          {
                            title: 'Credit Card Limits',
                            excellent: '₹5L - ₹25L+',
                            poor: '₹25K - ₹1L',
                            savings: '10x higher limits',
                            icon: CreditCardIcon
                          },
                          {
                            title: 'Car Loan Rates',
                            excellent: '7.5% - 8.5%',
                            poor: '12.0% - 15.0%',
                            savings: '₹1.8L on ₹8L loan',
                            icon: GlobeAltIcon
                          }
                        ].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                              <div className="flex items-center mb-4">
                                <IconComponent className="w-6 h-6 mr-3 text-blue-500" />
                                <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                              </div>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600 dark:text-gray-400">Excellent Score (750+):</span>
                                  <span className="font-semibold text-green-600 dark:text-green-400">{item.excellent}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600 dark:text-gray-400">Poor Score (&lt;650):</span>
                                  <span className="font-semibold text-red-600 dark:text-red-400">{item.poor}</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Potential Savings:</span>
                                    <span className="font-bold text-orange-600 dark:text-orange-400">{item.savings}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-purple-500" />
                        Beyond Loans: Other Benefits
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            title: 'Employment Opportunities',
                            desc: 'Many companies check credit scores for financial roles',
                            impact: 'Career Growth',
                            color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
                          },
                          {
                            title: 'Rental Approvals',
                            desc: 'Landlords prefer tenants with good credit scores',
                            impact: 'Housing Access',
                            color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                          },
                          {
                            title: 'Insurance Premiums',
                            desc: 'Better credit can lead to lower insurance costs',
                            impact: 'Cost Savings',
                            color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700'
                          },
                          {
                            title: 'Business Loans',
                            desc: 'Personal credit affects business loan eligibility',
                            impact: 'Entrepreneurship',
                            color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700'
                          },
                          {
                            title: 'Utility Deposits',
                            desc: 'Good credit may waive security deposits',
                            impact: 'Cash Flow',
                            color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700'
                          },
                          {
                            title: 'Investment Opportunities',
                            desc: 'Access to margin trading and premium services',
                            impact: 'Wealth Building',
                            color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700'
                          }
                        ].map((benefit, index) => (
                          <div key={index} className={`p-4 rounded-xl border ${benefit.color}`}>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{benefit.desc}</p>
                            <div className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full inline-block">
                              {benefit.impact}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                        Cost of Poor Credit (Real Examples)
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">₹50L Home Loan (20 years)</span>
                          <span className="font-bold text-red-600 dark:text-red-400">+₹5.2L extra interest</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">₹10L Personal Loan (5 years)</span>
                          <span className="font-bold text-red-600 dark:text-red-400">+₹2.8L extra interest</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">Credit Card Limit Reduction</span>
                          <span className="font-bold text-red-600 dark:text-red-400">90% lower limits</span>
                        </div>
                        <div className="pt-3 border-t border-red-200 dark:border-red-700">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-red-800 dark:text-red-200">Total Lifetime Cost:</span>
                            <span className="text-xl font-bold text-red-600 dark:text-red-400">₹8L+ extra</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('what-it-is')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: What It Is
                    </button>
                    <button
                      onClick={() => navigateToSection('benefits')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Benefits
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Benefits Section */}
            {activeSection === 'benefits' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Benefits</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 2 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('benefits')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('benefits') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('benefits') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('benefits')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('benefits')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Key Benefits of Good Credit Score & Debt Management</h3>
                    <p className="text-green-700 dark:text-green-300">Maintaining a good credit score and managing debt effectively opens doors to financial opportunities and saves significant money over time.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <CurrencyRupeeIcon className="w-5 h-5 mr-2 text-green-500" />
                        Financial Benefits (2025)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            title: 'Lower Interest Rates',
                            desc: 'Save 2-5% on all loans with excellent credit',
                            example: 'Home loan: 8.5% vs 12% = ₹5.2L savings',
                            icon: '💰',
                            color: 'bg-green-50 dark:bg-green-900/20'
                          },
                          {
                            title: 'Higher Credit Limits',
                            desc: 'Access to premium credit cards and higher limits',
                            example: 'Credit cards: ₹25L vs ₹50K limits',
                            icon: '💳',
                            color: 'bg-blue-50 dark:bg-blue-900/20'
                          },
                          {
                            title: 'Faster Loan Approvals',
                            desc: 'Pre-approved offers and instant processing',
                            example: 'Personal loans approved in 24 hours',
                            icon: '⚡',
                            color: 'bg-yellow-50 dark:bg-yellow-900/20'
                          },
                          {
                            title: 'Better Negotiation Power',
                            desc: 'Leverage good credit for better terms',
                            example: 'Waived processing fees and charges',
                            icon: '🤝',
                            color: 'bg-purple-50 dark:bg-purple-900/20'
                          },
                          {
                            title: 'Investment Opportunities',
                            desc: 'Access to margin trading and premium services',
                            example: 'Margin funding at 9-12% vs 18-24%',
                            icon: '📈',
                            color: 'bg-indigo-50 dark:bg-indigo-900/20'
                          },
                          {
                            title: 'Emergency Access',
                            desc: 'Quick access to funds during emergencies',
                            example: 'Pre-approved credit lines up to ₹10L',
                            icon: '🚨',
                            color: 'bg-red-50 dark:bg-red-900/20'
                          }
                        ].map((benefit, index) => (
                          <div key={index} className={`p-6 rounded-xl border border-gray-200 dark:border-gray-600 ${benefit.color}`}>
                            <div className="flex items-center mb-3">
                              <span className="text-2xl mr-3">{benefit.icon}</span>
                              <h4 className="font-bold text-gray-900 dark:text-white">{benefit.title}</h4>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{benefit.desc}</p>
                            <div className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <strong>Example:</strong> {benefit.example}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <HeartIcon className="w-5 h-5 mr-2 text-red-500" />
                        Lifestyle Benefits
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            category: 'Peace of Mind',
                            benefits: ['Reduced financial stress', 'Better sleep and mental health', 'Confidence in financial decisions'],
                            impact: 'Improved quality of life'
                          },
                          {
                            category: 'Career Opportunities',
                            benefits: ['Eligibility for financial sector jobs', 'Background checks for senior roles', 'Entrepreneurship funding access'],
                            impact: 'Enhanced career prospects'
                          },
                          {
                            category: 'Social Benefits',
                            benefits: ['Easier rental approvals', 'Better insurance rates', 'Premium banking services'],
                            impact: 'Improved social standing'
                          },
                          {
                            category: 'Future Planning',
                            benefits: ['Home ownership accessibility', 'Children\'s education funding', 'Retirement planning options'],
                            impact: 'Secured future goals'
                          }
                        ].map((category, index) => (
                          <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white">{category.category}</h4>
                              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                                {category.impact}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {category.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                  <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <SparklesIcon className="w-5 h-5 mr-2 text-purple-500" />
                        Premium Services Access (750+ Score)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          {
                            service: 'Premium Credit Cards',
                            features: ['Airport lounge access', 'Concierge services', 'Travel insurance'],
                            value: '₹50K+ annual value'
                          },
                          {
                            service: 'Priority Banking',
                            features: ['Dedicated relationship manager', 'Zero balance accounts', 'Preferential rates'],
                            value: 'VIP treatment'
                          },
                          {
                            service: 'Investment Services',
                            features: ['Margin trading facility', 'IPO financing', 'Portfolio management'],
                            value: 'Wealth building'
                          },
                          {
                            service: 'Insurance Benefits',
                            features: ['Lower premiums', 'Higher coverage', 'Fast claim processing'],
                            value: '20-30% savings'
                          },
                          {
                            service: 'Business Advantages',
                            features: ['Business loan eligibility', 'Vendor financing', 'Trade credit lines'],
                            value: 'Growth opportunities'
                          },
                          {
                            service: 'Real Estate Benefits',
                            features: ['Pre-approved home loans', 'Builder financing', 'Property investment loans'],
                            value: 'Asset building'
                          }
                        ].map((service, index) => (
                          <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700">
                            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{service.service}</h4>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 mb-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <StarIcon className="w-3 h-3 mr-2 text-purple-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="text-xs font-medium text-purple-800 dark:text-purple-200 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full inline-block">
                              {service.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <TrophyIcon className="w-5 h-5 mr-2" />
                        Success Story: The Power of Good Credit
                      </h3>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          <strong>Rajesh, 32, Software Engineer:</strong> Improved credit score from 580 to 780 in 18 months
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">Before (Score: 580)</h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                              <li>• Personal loan rejected</li>
                              <li>• Credit card limit: ₹25K</li>
                              <li>• Home loan at 12.5%</li>
                              <li>• High insurance premiums</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">After (Score: 780)</h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                              <li>• Pre-approved loans up to ₹15L</li>
                              <li>• Credit card limit: ₹8L</li>
                              <li>• Home loan at 8.75%</li>
                              <li>• Premium insurance rates</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Total Savings:</strong> ₹4.2L over 20 years on home loan + ₹50K annual benefits
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('importance')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Importance
                    </button>
                    <button
                      onClick={() => navigateToSection('how-to-start')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: How to Start
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* How to Start Section */}
            {activeSection === 'how-to-start' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Start</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 4 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('how-to-start')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('how-to-start') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('how-to-start') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('how-to-start')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('how-to-start')
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
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🚀 Your Credit Journey Starts Here</h3>
                    <p className="text-blue-700 dark:text-blue-300">Follow this step-by-step guide to build and improve your credit score from scratch or recover from poor credit.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <InformationCircleIcon className="w-5 h-5 mr-2 text-blue-500" />
                        Step 1: Know Your Current Status (Week 1)
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            action: 'Get Your Free Credit Report',
                            desc: 'Check your CIBIL score and report for free',
                            steps: [
                              'Visit cibil.com or use official mobile app',
                              'Provide PAN, Aadhaar, and basic details',
                              'Verify identity via OTP',
                              'Download detailed credit report'
                            ],
                            cost: 'Free (once per year)',
                            time: '10 minutes'
                          },
                          {
                            action: 'Review Your Credit Report',
                            desc: 'Analyze all sections for errors and issues',
                            steps: [
                              'Check personal information accuracy',
                              'Verify all accounts and loans listed',
                              'Look for payment history errors',
                              'Identify unauthorized accounts'
                            ],
                            cost: 'Free',
                            time: '30 minutes'
                          },
                          {
                            action: 'List All Current Debts',
                            desc: 'Create a comprehensive debt inventory',
                            steps: [
                              'Credit cards: Outstanding, limit, APR',
                              'Loans: EMI, tenure, interest rate',
                              'Other debts: Personal loans, overdrafts',
                              'Calculate total debt-to-income ratio'
                            ],
                            cost: 'Free',
                            time: '45 minutes'
                          }
                        ].map((step, index) => (
                          <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white">{step.action}</h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                  {step.cost}
                                </span>
                                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                                  {step.time}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{step.desc}</p>
                            <div className="space-y-2">
                              {step.steps.map((substep, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                                    {idx + 1}
                                  </div>
                                  {substep}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <CreditCardIcon className="w-5 h-5 mr-2 text-green-500" />
                        Step 2: Build Credit Foundation (Month 1-3)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            title: 'If You Have No Credit History',
                            strategies: [
                              'Apply for secured credit card (₹5K-₹50K deposit)',
                              'Become authorized user on family member\'s card',
                              'Take small personal loan (₹50K-₹1L)',
                              'Use credit builder loans from NBFCs'
                            ],
                            timeline: '3-6 months to see score',
                            color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
                          },
                          {
                            title: 'If You Have Poor Credit (300-549)',
                            strategies: [
                              'Pay all current EMIs on time (most important)',
                              'Settle any defaulted accounts',
                              'Dispute errors in credit report',
                              'Keep old accounts open (credit history length)'
                            ],
                            timeline: '6-12 months for improvement',
                            color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                          },
                          {
                            title: 'If You Have Fair Credit (550-649)',
                            strategies: [
                              'Reduce credit utilization below 30%',
                              'Pay more than minimum on credit cards',
                              'Avoid new credit applications',
                              'Set up automatic payments'
                            ],
                            timeline: '3-6 months for improvement',
                            color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700'
                          },
                          {
                            title: 'If You Have Good Credit (650-749)',
                            strategies: [
                              'Optimize credit mix (cards + loans)',
                              'Negotiate higher credit limits',
                              'Consider premium credit cards',
                              'Monitor score monthly'
                            ],
                            timeline: '6-12 months to reach excellent',
                            color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                          }
                        ].map((strategy, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${strategy.color}`}>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{strategy.title}</h4>
                            <ul className="space-y-2 mb-4">
                              {strategy.strategies.map((item, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                  <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full inline-block">
                              {strategy.timeline}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-purple-500" />
                        Step 3: Debt Management Strategy (Ongoing)
                      </h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700">
                            <h4 className="font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
                              <FireIcon className="w-5 h-5 mr-2" />
                              Debt Snowball Method
                            </h4>
                            <p className="text-red-700 dark:text-red-300 text-sm mb-4">Pay minimum on all debts, extra on smallest balance</p>
                            <div className="space-y-2">
                              <div className="text-sm text-red-600 dark:text-red-400"><strong>Best for:</strong> Motivation &amp; quick wins</div>
                              <div className="text-sm text-red-600 dark:text-red-400"><strong>Example:</strong> ₹25K card → ₹50K loan → ₹5L home loan</div>
                            </div>
                          </div>
                          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                              <ChartBarIcon className="w-5 h-5 mr-2" />
                              Debt Avalanche Method
                            </h4>
                            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">Pay minimum on all debts, extra on highest interest</p>
                            <div className="space-y-2">
                              <div className="text-sm text-blue-600 dark:text-blue-400"><strong>Best for:</strong> Maximum savings</div>
                              <div className="text-sm text-blue-600 dark:text-blue-400"><strong>Example:</strong> 24% credit card → 18% personal loan → 8.5% home loan</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Debt Consolidation Options (2025)</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              {
                                option: 'Personal Loan',
                                rate: '10.5% - 24%',
                                pros: ['Fixed EMI', 'Lower than credit cards'],
                                cons: ['Processing fees', 'Collateral may be required']
                              },
                              {
                                option: 'Balance Transfer',
                                rate: '0% - 3% (6-12 months)',
                                pros: ['Promotional rates', 'Same credit limit'],
                                cons: ['Temporary benefit', 'Transfer fees']
                              },
                              {
                                option: 'Home Equity Loan',
                                rate: '8.5% - 11%',
                                pros: ['Lowest rates', 'Tax benefits'],
                                cons: ['Property at risk', 'Longer process']
                              }
                            ].map((option, index) => (
                              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{option.option}</h5>
                                <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-3">{option.rate}</div>
                                <div className="space-y-2">
                                  <div>
                                    <div className="text-xs font-medium text-green-700 dark:text-green-300 mb-1">Pros:</div>
                                    {option.pros.map((pro, idx) => (
                                      <div key={idx} className="text-xs text-gray-600 dark:text-gray-400">• {pro}</div>
                                    ))}
                                  </div>
                                  <div>
                                    <div className="text-xs font-medium text-red-700 dark:text-red-300 mb-1">Cons:</div>
                                    {option.cons.map((con, idx) => (
                                      <div key={idx} className="text-xs text-gray-600 dark:text-gray-400">• {con}</div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <AcademicCapIcon className="w-5 h-5 mr-2" />
                        Quick Start Checklist (First 30 Days)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Week 1-2: Assessment</h5>
                          <div className="space-y-2">
                            {[
                              'Download free CIBIL report',
                              'List all debts and EMIs',
                              'Calculate debt-to-income ratio',
                              'Identify credit report errors'
                            ].map((task, idx) => (
                              <div key={idx} className="flex items-center text-sm text-green-700 dark:text-green-300">
                                <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                                {task}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Week 3-4: Action</h5>
                          <div className="space-y-2">
                            {[
                              'Set up automatic EMI payments',
                              'Reduce credit utilization below 30%',
                              'Dispute any credit report errors',
                              'Choose debt repayment strategy'
                            ].map((task, idx) => (
                              <div key={idx} className="flex items-center text-sm text-green-700 dark:text-green-300">
                                <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                                {task}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('benefits')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Benefits
                    </button>
                    <button
                      onClick={() => navigateToSection('types-of-debt')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Types of Debt
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Debt Section */}
            {activeSection === 'types-of-debt' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <CreditCardIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Debt</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 3 min read • Understanding Debt Categories</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('types-of-debt')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('types-of-debt') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('types-of-debt') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('types-of-debt')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('types-of-debt')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💳 Understanding Different Types of Debt</h3>
                    <p className="text-purple-700 dark:text-purple-300">Not all debts are created equal. Learn about good debt vs bad debt and how each type affects your credit score differently.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                        Good Debt vs Bad Debt (2025 Classification)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                          <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                            <TrophyIcon className="w-5 h-5 mr-2" />
                            Good Debt (Asset Building)
                          </h4>
                          <div className="space-y-4">
                            {[
                              {
                                type: 'Home Loans',
                                rate: '8.5% - 11%',
                                benefits: ['Property appreciation', 'Tax benefits under 80C & 24', 'Forced savings'],
                                impact: 'Positive credit impact'
                              },
                              {
                                type: 'Education Loans',
                                rate: '7.5% - 12%',
                                benefits: ['Career advancement', 'Higher earning potential', 'Tax deduction on interest'],
                                impact: 'Builds credit history'
                              },
                              {
                                type: 'Business Loans',
                                rate: '9% - 18%',
                                benefits: ['Income generation', 'Business growth', 'Tax deductible interest'],
                                impact: 'Establishes business credit'
                              }
                            ].map((debt, index) => (
                              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                  <h5 className="font-semibold text-gray-900 dark:text-white">{debt.type}</h5>
                                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{debt.rate}</span>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-xs text-gray-600 dark:text-gray-400">
                                    <strong>Benefits:</strong> {debt.benefits.join(', ')}
                                  </div>
                                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                                    {debt.impact}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                          <h4 className="font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            Bad Debt (Consumption)
                          </h4>
                          <div className="space-y-4">
                            {[
                              {
                                type: 'Credit Card Debt',
                                rate: '18% - 48%',
                                risks: ['High interest rates', 'Compound interest trap', 'Impulse spending'],
                                impact: 'High utilization hurts score'
                              },
                              {
                                type: 'Personal Loans',
                                rate: '10.5% - 24%',
                                risks: ['Unsecured high rates', 'No asset backing', 'Easy to overspend'],
                                impact: 'Multiple loans lower score'
                              },
                              {
                                type: 'Payday/Quick Loans',
                                rate: '24% - 60%',
                                risks: ['Extremely high rates', 'Short repayment terms', 'Debt cycle trap'],
                                impact: 'Severely damages credit'
                              }
                            ].map((debt, index) => (
                              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                  <h5 className="font-semibold text-gray-900 dark:text-white">{debt.type}</h5>
                                  <span className="text-sm font-medium text-red-600 dark:text-red-400">{debt.rate}</span>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-xs text-gray-600 dark:text-gray-400">
                                    <strong>Risks:</strong> {debt.risks.join(', ')}
                                  </div>
                                  <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                                    {debt.impact}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <LightBulbIcon className="w-5 h-5 mr-2" />
                        Smart Debt Strategy (2025 Recommendations)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Debt Priority Order</h5>
                          <div className="space-y-2">
                            {[
                              '1. Pay off credit card debt first (highest interest)',
                              '2. Clear personal loans (unsecured debt)',
                              '3. Prepay car loans (if rate &gt; 10%)',
                              '4. Consider home loan prepayment last'
                            ].map((priority, idx) => (
                              <div key={idx} className="flex items-center text-sm text-blue-700 dark:text-blue-300">
                                <CheckCircleIcon className="w-4 h-4 mr-2 text-blue-500" />
                                {priority}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Optimal Debt Mix</h5>
                          <div className="space-y-2">
                            {[
                              'Secured debt: 70-80% (home, car loans)',
                              'Unsecured debt: 20-30% (personal, credit cards)',
                              'Credit utilization: Below 30% always',
                              'Total EMI: Maximum 40% of income'
                            ].map((mix, idx) => (
                              <div key={idx} className="flex items-center text-sm text-blue-700 dark:text-blue-300">
                                <StarIcon className="w-4 h-4 mr-2 text-blue-500" />
                                {mix}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('how-to-start')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: How to Start
                    </button>
                    <button
                      onClick={() => navigateToSection('risks')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Risks
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Risks Section */}
            {activeSection === 'risks' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risks</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 3 min read • Risk Management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('risks')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('risks') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('risks') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('risks')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('risks')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-8 border border-red-200 dark:border-red-700">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Credit Score & Debt Management Risks</h3>
                    <p className="text-red-700 dark:text-red-300">Understanding and avoiding these risks can save you from financial disasters and protect your credit score for life.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <FireIcon className="w-5 h-5 mr-2 text-red-500" />
                        High-Risk Scenarios (2025 Data)
                      </h3>
                      <div className="bg-gradient-to-r from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                        <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
                          <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                          Real Case Study: The Debt Spiral (2024)
                        </h4>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300 mb-3">
                            <strong>Priya, 28, Marketing Manager:</strong> How poor debt management destroyed her financial life
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">The Trigger (Month 1)</h5>
                              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• Used credit card for wedding expenses</li>
                                <li>• Outstanding: ₹2.5L (85% utilization)</li>
                                <li>• Paid only minimum (₹5,000)</li>
                                <li>• Credit score: 720 → 680</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">The Spiral (Month 6)</h5>
                              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• Took personal loan to pay credit card</li>
                                <li>• New debt: ₹3L at 18% interest</li>
                                <li>• Total EMI: ₹45K (75% of salary)</li>
                                <li>• Credit score: 680 → 580</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">The Crash (Month 12)</h5>
                              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• Missed EMIs due to job change</li>
                                <li>• Accounts marked as defaulted</li>
                                <li>• Total debt: ₹4.2L with penalties</li>
                                <li>• Credit score: 580 → 420</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <p className="text-sm text-red-800 dark:text-red-200">
                              <strong>Recovery Time:</strong> 3 years to rebuild credit score, ₹1.2L extra in interest and penalties
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('types-of-debt')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Types of Debt
                    </button>
                    <button
                      onClick={() => navigateToSection('age-based-planning')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Age-Based Planning
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Age-Based Planning Section */}
            {activeSection === 'age-based-planning' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Age-Based Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 4 min read • Life Stage Strategies</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('age-based-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('age-based-planning') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('age-based-planning') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('age-based-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('age-based-planning')
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
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">👥 Credit & Debt Strategy by Life Stage</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Your credit and debt management strategy should evolve with your age, income, and life goals. Here's how to optimize for each stage.</p>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        ageGroup: '20s (22-29): Building Foundation',
                        icon: '🌱',
                        income: '₹3-8L annually',
                        priorities: ['Build credit history', 'Establish emergency fund', 'Avoid lifestyle inflation'],
                        creditStrategy: {
                          target: '650-750 score',
                          actions: [
                            'Get first credit card (secured if needed)',
                            'Keep utilization below 30%',
                            'Build 6-month emergency fund',
                            'Avoid multiple loans'
                          ]
                        },
                        debtApproach: {
                          recommended: ['Education loan (if needed)', 'Small personal loan for credit building'],
                          avoid: ['High credit card debt', 'Multiple personal loans', 'Lifestyle loans'],
                          maxDebt: '20-30% of income'
                        },
                        tips: [
                          'Start with secured credit card if no credit history',
                          'Use credit card for small purchases and pay full amount',
                          'Set up automatic payments to never miss due dates',
                          'Monitor credit score monthly using free apps'
                        ]
                      },
                      {
                        ageGroup: '30s (30-39): Growth & Responsibility',
                        icon: '🏠',
                        income: '₹8-20L annually',
                        priorities: ['Home purchase', 'Family planning', 'Career advancement'],
                        creditStrategy: {
                          target: '750+ score',
                          actions: [
                            'Maintain excellent payment history',
                            'Optimize credit mix (cards + loans)',
                            'Negotiate higher credit limits',
                            'Consider premium credit cards'
                          ]
                        },
                        debtApproach: {
                          recommended: ['Home loan (primary residence)', 'Car loan (if needed)', 'Education loan for spouse/self'],
                          avoid: ['Excessive personal loans', 'Luxury purchases on credit'],
                          maxDebt: '40-50% of income (including home EMI)'
                        },
                        tips: [
                          'Home loan EMI should not exceed 30% of income',
                          'Maintain life insurance of 10x annual income',
                          'Build emergency fund of 12 months expenses',
                          'Consider joint credit cards with spouse for better limits'
                        ]
                      },
                      {
                        ageGroup: '40s (40-49): Peak Earning & Optimization',
                        icon: '📈',
                        income: '₹15-40L annually',
                        priorities: ['Wealth building', 'Children\'s education', 'Debt optimization'],
                        creditStrategy: {
                          target: '780+ score',
                          actions: [
                            'Leverage excellent credit for best rates',
                            'Consider business credit if entrepreneur',
                            'Optimize existing loans for lower rates',
                            'Use credit strategically for investments'
                          ]
                        },
                        debtApproach: {
                          recommended: ['Investment property loans', 'Business loans', 'Education loans for children'],
                          avoid: ['High-interest personal loans', 'Credit card debt'],
                          maxDebt: '30-40% of income (focus on good debt)'
                        },
                        tips: [
                          'Prepay high-interest loans (personal, credit cards)',
                          'Consider loan against property for lower rates',
                          'Use credit cards for rewards but pay full amount',
                          'Negotiate with banks for better rates on existing loans'
                        ]
                      },
                      {
                        ageGroup: '50s+ (50-60): Pre-Retirement Planning',
                        icon: '🌅',
                        income: '₹20-50L annually',
                        priorities: ['Debt reduction', 'Retirement planning', 'Wealth preservation'],
                        creditStrategy: {
                          target: '800+ score',
                          actions: [
                            'Maintain excellent credit for emergencies',
                            'Reduce overall debt burden',
                            'Keep credit cards active but low utilization',
                            'Plan for post-retirement credit needs'
                          ]
                        },
                        debtApproach: {
                          recommended: ['Strategic prepayments', 'Debt consolidation at lower rates'],
                          avoid: ['New long-term loans', 'High-risk debt'],
                          maxDebt: '20-30% of income (reducing towards retirement)'
                        },
                        tips: [
                          'Aim to be debt-free by retirement',
                          'Keep one primary credit card active for emergencies',
                          'Consider reverse mortgage if house-rich, cash-poor',
                          'Maintain good credit for potential medical emergencies'
                        ]
                      }
                    ].map((stage, index) => (
                      <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center mb-6">
                          <span className="text-3xl mr-4">{stage.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stage.ageGroup}</h3>
                            <p className="text-gray-600 dark:text-gray-400">Typical Income: {stage.income}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Credit Strategy</h4>
                            <div className="mb-3">
                              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Target: {stage.creditStrategy.target}</span>
                            </div>
                            <ul className="space-y-2">
                              {stage.creditStrategy.actions.map((action, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                  <CheckCircleIcon className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Debt Approach</h4>
                            <div className="mb-3">
                              <span className="text-sm font-medium text-green-600 dark:text-green-400">Max Debt: {stage.debtApproach.maxDebt}</span>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <div className="text-xs font-medium text-green-700 dark:text-green-300 mb-1">Recommended:</div>
                                {stage.debtApproach.recommended.map((item, idx) => (
                                  <div key={idx} className="text-xs text-gray-600 dark:text-gray-400">• {item}</div>
                                ))}
                              </div>
                              <div>
                                <div className="text-xs font-medium text-red-700 dark:text-red-300 mb-1">Avoid:</div>
                                {stage.debtApproach.avoid.map((item, idx) => (
                                  <div key={idx} className="text-xs text-gray-600 dark:text-gray-400">• {item}</div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Key Tips</h4>
                            <ul className="space-y-2">
                              {stage.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                  <LightBulbIcon className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('risks')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Risks
                    </button>
                    <button
                      onClick={() => navigateToSection('common-mistakes')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Common Mistakes
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <XMarkIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Mistakes</h2>
                      <p className="text-gray-600 dark:text-gray-400">All Levels • 3 min read • Avoid These Pitfalls</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('common-mistakes')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('common-mistakes') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('common-mistakes') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('common-mistakes')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('common-mistakes')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8 border border-red-200 dark:border-red-700">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">❌ Top Credit Score & Debt Management Mistakes</h3>
                    <p className="text-red-700 dark:text-red-300">Learn from others' mistakes. These common errors can cost you thousands and damage your credit score for years.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ExclamationTriangleIcon className="w-5 h-5 mr-2 text-red-500" />
                        Critical Mistakes (2025 Most Common)
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            mistake: 'Paying Only Minimum on Credit Cards',
                            frequency: '78% of credit card users',
                            cost: '₹2-5L over lifetime',
                            why: 'Minimum payments barely cover interest, principal remains almost unchanged',
                            example: '₹1L debt at 24% APR: Minimum payments = 47 years to pay off, ₹4.2L total interest',
                            solution: 'Pay full amount monthly, or at least 5x minimum payment',
                            impact: 'High utilization destroys credit score (-100 to -200 points)'
                          },
                          {
                            mistake: 'Closing Old Credit Cards',
                            frequency: '65% of users close cards',
                            cost: '50-100 point credit score drop',
                            why: 'Reduces credit history length and available credit limit',
                            example: '5-year-old card with ₹2L limit closed = Lost 5 years history + ₹2L credit',
                            solution: 'Keep old cards active with small monthly purchases',
                            impact: 'Immediate score drop, takes 2-3 years to recover'
                          },
                          {
                            mistake: 'Multiple Loan Applications in Short Time',
                            frequency: '45% during loan shopping',
                            cost: '20-50 point score drop per inquiry',
                            why: 'Each application creates hard inquiry, multiple inquiries signal desperation',
                            example: '5 personal loan applications in 1 month = 100+ point score drop',
                            solution: 'Research and apply to 1-2 lenders only, space applications 6+ months apart',
                            impact: 'Temporary but significant, affects loan approval chances'
                          },
                          {
                            mistake: 'Ignoring Credit Report Errors',
                            frequency: '85% never check reports',
                            cost: 'Wrongful loan rejections',
                            why: 'Errors in credit reports are common (30% have errors), affect creditworthiness',
                            example: 'Wrong default entry can drop score by 150+ points',
                            solution: 'Check credit report every 6 months, dispute errors immediately',
                            impact: 'Can take 6-12 months to correct, meanwhile affects all applications'
                          },
                          {
                            mistake: 'Using Credit Cards for Cash Advances',
                            frequency: '35% have used cash advance',
                            cost: '2.5% fee + 40-48% annual interest',
                            why: 'No grace period, interest starts immediately, very high rates',
                            example: '₹50K cash advance = ₹1,250 fee + ₹20K annual interest',
                            solution: 'Use personal loan or overdraft facility instead',
                            impact: 'Expensive debt that\'s hard to pay off, increases utilization'
                          },
                          {
                            mistake: 'Settling Debts Instead of Paying Full',
                            frequency: '25% choose settlement',
                            cost: 'Permanent credit damage',
                            why: 'Settlement marked as \'settled\' not \'paid\', stays on record 7 years',
                            example: 'Settled account shows as negative even after payment',
                            solution: 'Negotiate payment plan, avoid settlement unless absolutely necessary',
                            impact: 'Severe negative impact, affects future loan eligibility'
                          }
                        ].map((mistake, index) => (
                          <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{mistake.mistake}</h4>
                                <div className="flex items-center space-x-4 mb-3">
                                  <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-1 rounded-full">
                                    {mistake.frequency}
                                  </span>
                                  <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full">
                                    Cost: {mistake.cost}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                <div className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">Why It\'s Bad:</div>
                                <div className="text-sm text-red-700 dark:text-red-300">{mistake.why}</div>
                              </div>
                              
                              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">Real Example:</div>
                                <div className="text-sm text-yellow-700 dark:text-yellow-300">{mistake.example}</div>
                              </div>
                              
                              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">Solution:</div>
                                <div className="text-sm text-green-700 dark:text-green-300">{mistake.solution}</div>
                              </div>
                              
                              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">Credit Impact:</div>
                                <div className="text-sm text-blue-700 dark:text-blue-300">{mistake.impact}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                        Mistake Prevention Checklist
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Monthly Habits</h5>
                          <div className="space-y-2">
                            {[
                              'Pay credit card bills in full before due date',
                              'Check credit utilization (keep below 30%)',
                              'Review all bank statements for errors',
                              'Monitor credit score using free apps'
                            ].map((habit, idx) => (
                              <div key={idx} className="flex items-center text-sm text-green-700 dark:text-green-300">
                                <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                                {habit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Quarterly Actions</h5>
                          <div className="space-y-2">
                            {[
                              'Download and review full credit report',
                              'Dispute any errors found in credit report',
                              'Evaluate and optimize existing loans',
                              'Review and adjust debt repayment strategy'
                            ].map((action, idx) => (
                              <div key={idx} className="flex items-center text-sm text-green-700 dark:text-green-300">
                                <StarIcon className="w-4 h-4 mr-2 text-green-500" />
                                {action}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('age-based-planning')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Age-Based Planning
                    </button>
                    <button
                      onClick={() => navigateToSection('action-steps')}
                      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Next: Action Steps
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Action Steps</h2>
                      <p className="text-gray-600 dark:text-gray-400">All Levels • 4 min read • Implementation Guide</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('action-steps')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('action-steps') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('action-steps') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('action-steps')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('action-steps')
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
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Your Credit Score & Debt Management Action Plan</h3>
                    <p className="text-green-700 dark:text-green-300">Follow this step-by-step checklist to build and maintain good credit while managing debt effectively.</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { step: "Get your CIBIL/credit report today", desc: "Free once per year from official websites", priority: "immediate" },
                      { step: "List all debts", desc: "Amount, EMI, interest rate, tenure remaining", priority: "immediate" },
                      { step: "Choose debt repayment strategy", desc: "Snowball method (pay smallest first) or avalanche method (pay highest interest first)", priority: "immediate" },
                      { step: "Automate EMI/bill payments", desc: "Set up auto-debit to never miss deadlines", priority: "high" },
                      { step: "Keep credit utilization below 30%", desc: "Monitor monthly and adjust spending accordingly", priority: "high" },
                      { step: "Negotiate with lenders", desc: "For lower interest rates or restructuring if facing difficulties", priority: "medium" },
                      { step: "Review score every 6 months", desc: "Track progress and aim for 750+ score", priority: "medium" }
                    ].map((item, index) => (
                      <div key={index} className={`p-4 rounded-xl border-l-4 ${
                        item.priority === 'immediate' ? 'bg-red-50 dark:bg-red-900/20 border-red-500' :
                        item.priority === 'high' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-500' :
                        'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                      }`}>
                        <div className="flex items-start space-x-3">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            item.priority === 'immediate' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' :
                            item.priority === 'high' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200' :
                            'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                          }`}>
                            {item.priority.toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.step}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 2025 Update Badge */}
                  <div className="mb-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Updated for 2025</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      All information, credit bureau details, and strategies are current as of 2025. Interest rates and regulations may vary.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('common-mistakes')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Common Mistakes
                    </button>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                      >
                        Back to Learn Hub
                      </Link>
                      <Link
                        to="/learn/retirement-planning"
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        <span className="mr-2">🏖️</span>
                        Next: Retirement Planning
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
              className="bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Credit Score & Debt Management Tools
                    </h3>
                    <p className="text-orange-100">Calculate and manage your credit score and debt with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Credit Score Simulator', path: '/calculators/credit-score-simulator', icon: '📊', desc: 'Simulate credit score changes' },
                    { name: 'Debt Repayment Calculator', path: '/calculators/debt-repayment', icon: '💳', desc: 'Plan debt payoff strategy' },
                    { name: 'Credit Card EMI Calculator', path: '/calculators/credit-card-emi', icon: '🧮', desc: 'Calculate EMI and interest' },
                    { name: 'Loan Eligibility Calculator', path: '/calculators/loan-eligibility', icon: '🏦', desc: 'Check loan eligibility' }
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
                        <p className="text-xs text-orange-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-orange-200">
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