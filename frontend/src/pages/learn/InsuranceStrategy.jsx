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

export default function InsuranceStrategy() {
  const [activeSection, setActiveSection] = useState('what-is-insurance');
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
      id: 'what-is-insurance', 
      title: 'What is Insurance?', 
      icon: InformationCircleIcon, 
      emoji: '🛡️', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'why-insurance-matters', 
      title: 'Why Insurance Matters', 
      icon: TrophyIcon, 
      emoji: '🏆', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'types-of-insurance', 
      title: 'Types of Insurance', 
      icon: BanknotesIcon, 
      emoji: '📋', 
      duration: '8 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'how-much-insurance', 
      title: 'How Much Insurance Do You Need?', 
      icon: CalculatorIcon, 
      emoji: '🧮', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'age-based-planning', 
      title: 'Age-Based Insurance Planning', 
      icon: UserGroupIcon, 
      emoji: '👥', 
      duration: '6 min read',
      difficulty: 'Advanced'
    },
    { 
      id: 'common-mistakes', 
      title: 'Common Mistakes to Avoid', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'action-plan', 
      title: 'Insurance Action Plan', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '5 min read',
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">🛡️ Insurance Strategy (Complete 2025 Guide)</h1>
              <p className="text-blue-100">Complete Guide • 7 Sections • 2025 Updated • All Levels</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/credit-score-debt-management"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Previous: Credit Score & Debt Management
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <Link
                to="/learn/tax-optimization"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Next: Tax Optimization
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
            {/* What is Insurance Section */}
            {activeSection === 'what-is-insurance' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is Insurance?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('what-is-insurance')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('what-is-insurance') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('what-is-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('what-is-insurance')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('what-is-insurance')
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
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🛡️ Complete Definition</h3>
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      Insurance is a financial safety net that protects you and your family from unexpected risks (death, health issues, accidents, property loss). You pay a small premium regularly, and the insurer covers large, unforeseen expenses.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-blue-500" />
                        How Insurance Works (Simple Example)
                      </h3>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <CurrencyRupeeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">You Pay Premium</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">₹15,000/year for ₹1 Cr term insurance</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <ExclamationTriangleIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Risk Occurs</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unexpected death or illness</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <ShieldCheckIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Insurance Pays</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">₹1 Crore to your family</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Insurance Principles (2025)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            principle: "Risk Transfer",
                            description: "Transfer financial risk from you to insurance company",
                            example: "Your ₹50L medical bill becomes insurer's responsibility"
                          },
                          {
                            principle: "Premium vs Coverage",
                            description: "Small regular payments for large protection",
                            example: "₹15K annual premium for ₹1Cr life cover"
                          },
                          {
                            principle: "Pooling of Risks",
                            description: "Many people contribute, few claim at any time",
                            example: "1000 people pay ₹15K, only 2-3 may claim annually"
                          },
                          {
                            principle: "Financial Protection",
                            description: "Prevents bankruptcy due to large unexpected expenses",
                            example: "₹30L heart surgery doesn't drain your savings"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.principle}</h4>
                            <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">{item.description}</p>
                            <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">Example: {item.example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('why-insurance-matters')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Why Insurance Matters Section */}
            {activeSection === 'why-insurance-matters' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Insurance Matters</h2>
                      <p className="text-gray-600 dark:text-gray-400">Importance • 2 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('why-insurance-matters')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('why-insurance-matters') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('why-insurance-matters') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('why-insurance-matters')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('why-insurance-matters')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-6">
                    {[
                      {
                        benefit: "Protects family's financial stability in case of death or illness",
                        icon: "👨‍👩‍👧‍👦",
                        description: "Ensures your family can maintain their lifestyle even without your income",
                        example: "₹1Cr term insurance replaces 10-15 years of ₹8L annual income"
                      },
                      {
                        benefit: "Covers medical emergencies without draining savings",
                        icon: "🏥",
                        description: "Healthcare costs are rising 10-15% annually in India",
                        example: "₹25L health insurance covers heart surgery, cancer treatment"
                      },
                      {
                        benefit: "Acts as income replacement for dependents",
                        icon: "💰",
                        description: "Life insurance provides financial support when earning member is gone",
                        example: "₹50L annual income → ₹10-15Cr life insurance needed"
                      },
                      {
                        benefit: "Reduces risk of debt due to sudden large expenses",
                        icon: "🚫",
                        description: "Prevents borrowing money or selling assets during emergencies",
                        example: "No need to sell house or take loan for medical treatment"
                      },
                      {
                        benefit: "Essential foundation before investments",
                        icon: "🏗️",
                        description: "Insurance first, then investments - protects your wealth building journey",
                        example: "Secure ₹1Cr life + ₹25L health, then start SIP investments"
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
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('what-is-insurance')}
                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('types-of-insurance')}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Insurance Section */}
            {activeSection === 'types-of-insurance' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Insurance (2025 Complete Guide)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Categories • 8 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('types-of-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('types-of-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('types-of-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('types-of-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('types-of-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {/* Life Insurance */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <HeartIcon className="w-5 h-5 mr-2 text-red-500" />
                        A. Life Insurance
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            type: "Term Insurance (Recommended)",
                            description: "Pure protection, high cover, low premium",
                            coverage: "₹50L - ₹10Cr+",
                            premium: "₹8K-25K annually",
                            pros: "Highest coverage at lowest cost, pure protection",
                            cons: "No maturity benefit, premium lost if no claim",
                            bestFor: "Everyone - primary life insurance",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          },
                          {
                            type: "Endowment/Whole Life (Avoid)",
                            description: "Savings + insurance, but low returns",
                            coverage: "₹5L - ₹50L",
                            premium: "₹50K-2L annually",
                            pros: "Guaranteed maturity benefit, forced savings",
                            cons: "Very low returns (4-6%), high premium, low coverage",
                            bestFor: "Not recommended - do term + separate investment",
                            color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                          },
                          {
                            type: "ULIP (Unit Linked)",
                            description: "Investment + insurance, market-linked",
                            coverage: "₹10L - ₹1Cr",
                            premium: "₹25K-1L annually",
                            pros: "Market-linked returns, flexibility",
                            cons: "High charges (3-5%), complex, low insurance component",
                            bestFor: "Avoid - do term + mutual funds separately",
                            color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                          }
                        ].map((insurance, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${insurance.color}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{insurance.type}</h4>
                              <div className="text-right">
                                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{insurance.coverage}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Coverage Range</div>
                              </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{insurance.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Annual Premium:</div>
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{insurance.premium}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Best For:</div>
                                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{insurance.bestFor}</div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Pros:</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">{insurance.pros}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Cons:</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">{insurance.cons}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Health Insurance */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <HeartIcon className="w-5 h-5 mr-2 text-blue-500" />
                        B. Health Insurance
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            type: "Individual Health Policy",
                            coverage: "₹5L - ₹1Cr per person",
                            premium: "₹8K-40K annually",
                            features: "Personal coverage, no sharing, higher premium",
                            bestFor: "Single individuals, specific health needs"
                          },
                          {
                            type: "Family Floater Policy (Recommended)",
                            coverage: "₹10L - ₹1Cr for family",
                            premium: "₹15K-60K annually",
                            features: "Shared coverage, cost-effective, covers spouse & children",
                            bestFor: "Married couples, families with children"
                          },
                          {
                            type: "Critical Illness Cover",
                            coverage: "₹25L - ₹2Cr lump sum",
                            premium: "₹10K-50K annually",
                            features: "Covers 30+ critical illnesses, lump sum payout",
                            bestFor: "Additional protection for cancer, heart disease, etc."
                          },
                          {
                            type: "Top-up/Super Top-up",
                            coverage: "₹50L - ₹5Cr additional",
                            premium: "₹5K-25K annually",
                            features: "Kicks in after base policy limit, very cost-effective",
                            bestFor: "Increasing coverage at low cost"
                          }
                        ].map((health, index) => (
                          <div key={index} className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-blue-900 dark:text-blue-100">{health.type}</h4>
                              <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{health.coverage}</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Premium:</div>
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{health.premium}</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Features:</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">{health.features}</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Best For:</div>
                                <div className="text-xs text-teal-600 dark:text-teal-400">{health.bestFor}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* General Insurance */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <HomeIcon className="w-5 h-5 mr-2 text-orange-500" />
                        C. General Insurance
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            type: "Motor Insurance (Mandatory)",
                            coverage: "₹5L - ₹20L third party + own damage",
                            premium: "₹5K-25K annually",
                            note: "Legally required for all vehicles"
                          },
                          {
                            type: "Home/Property Insurance",
                            coverage: "₹10L - ₹5Cr property value",
                            premium: "₹3K-15K annually",
                            note: "Covers fire, theft, natural disasters"
                          },
                          {
                            type: "Travel Insurance",
                            coverage: "₹5L - ₹1Cr per trip",
                            premium: "₹500-5K per trip",
                            note: "Essential for international travel"
                          }
                        ].map((general, index) => (
                          <div key={index} className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700">
                            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">{general.type}</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Coverage:</span>
                                <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">{general.coverage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Premium:</span>
                                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{general.premium}</span>
                              </div>
                              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">{general.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Other Important Covers */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-indigo-500" />
                        D. Other Important Covers
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            type: "Personal Accident Insurance",
                            coverage: "₹25L - ₹2Cr",
                            premium: "₹2K-8K annually",
                            covers: "Accidental death, disability, medical expenses"
                          },
                          {
                            type: "Disability Insurance",
                            coverage: "50-75% of income",
                            premium: "₹5K-20K annually",
                            covers: "Income replacement during disability"
                          },
                          {
                            type: "Keyman Insurance",
                            coverage: "₹1Cr - ₹10Cr",
                            premium: "₹25K-1L annually",
                            covers: "Business protection against key person loss"
                          }
                        ].map((other, index) => (
                          <div key={index} className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700">
                            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">{other.type}</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Coverage:</span>
                                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{other.coverage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Premium:</span>
                                <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">{other.premium}</span>
                              </div>
                              <p className="text-xs text-gray-700 dark:text-gray-300">{other.covers}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('why-insurance-matters')} className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />Previous
                    </button>
                    <button onClick={() => navigateToSection('how-much-insurance')} className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* How Much Insurance Section */}
            {activeSection === 'how-much-insurance' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <CalculatorIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Much Insurance Do You Need? (2025 Calculation)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Calculation Guide • 4 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('how-much-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('how-much-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('how-much-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('how-much-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('how-much-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {[
                      {
                        type: "Term Insurance Cover (Life)",
                        formula: "At least 15–20× your annual income",
                        example: "₹10L annual income → ₹1.5-2Cr term insurance",
                        reasoning: "Replaces 15-20 years of income for family",
                        additionalFactors: "Add outstanding loans (home loan ₹50L), children's education (₹25L each), inflation buffer (25%)",
                        finalCalculation: "₹10L × 20 + ₹50L + ₹50L + 25% buffer = ₹2.75Cr",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                      },
                      {
                        type: "Health Insurance Cover",
                        formula: "Minimum ₹10–25 Lakhs for family (urban India)",
                        example: "Family of 4 in Mumbai → ₹25L family floater + ₹50L top-up",
                        reasoning: "Healthcare costs rising 10-15% annually",
                        additionalFactors: "ICU costs ₹15K-25K/day, surgeries ₹5-50L, cancer treatment ₹10-30L",
                        finalCalculation: "Base ₹25L + Top-up ₹50L = ₹75L total health coverage",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      },
                      {
                        type: "Accident/Disability Cover",
                        formula: "Equal to annual income × 5–10",
                        example: "₹10L annual income → ₹50L-1Cr accident cover",
                        reasoning: "Covers income loss during disability period",
                        additionalFactors: "Permanent disability needs lifetime income replacement",
                        finalCalculation: "₹10L × 10 years = ₹1Cr personal accident insurance",
                        color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                      },
                      {
                        type: "Emergency Coverage",
                        formula: "Add riders like critical illness",
                        example: "₹50L critical illness rider with term insurance",
                        reasoning: "Covers treatment costs + income loss during illness",
                        additionalFactors: "Critical illness affects 1 in 4 people before age 65",
                        finalCalculation: "₹50L critical illness + ₹25L health = Complete protection",
                        color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                      }
                    ].map((insurance, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${insurance.color}`}>
                        <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-4">{insurance.type}</h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Formula:</div>
                              <div className="text-lg font-bold text-teal-600 dark:text-teal-400">{insurance.formula}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Example:</div>
                              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{insurance.example}</div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Reasoning:</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">{insurance.reasoning}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Additional Factors:</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">{insurance.additionalFactors}</div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Final Calculation:</div>
                            <div className="text-sm font-bold text-green-700 dark:text-green-300">{insurance.finalCalculation}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('types-of-insurance')} className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />Previous
                    </button>
                    <button onClick={() => navigateToSection('age-based-planning')} className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Age-Based Planning Section */}
            {activeSection === 'age-based-planning' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <UserGroupIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Age-Based Insurance Planning (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Life Stages • 6 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('age-based-planning')} className={`p-2 rounded-full transition-colors ${bookmarks.has('age-based-planning') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('age-based-planning') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('age-based-planning')} className={`p-2 rounded-full transition-colors ${completedSections.has('age-based-planning') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {[
                      {
                        stage: "20s (Early Career)",
                        focus: "Building Foundation",
                        actions: [
                          "Buy Term Insurance early (low premiums locked for life)",
                          "Basic Health Insurance (₹5–10L cover)",
                          "Add accident cover if traveling/driving frequently"
                        ],
                        coverage: "Term: ₹50L-1Cr, Health: ₹5-10L",
                        premium: "₹15K-25K annually",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      },
                      {
                        stage: "30s (Family Stage)",
                        focus: "Comprehensive Protection",
                        actions: [
                          "Increase Health Insurance (family floater)",
                          "Increase Term Insurance based on income rise & dependents",
                          "Critical illness rider"
                        ],
                        coverage: "Term: ₹1-2Cr, Health: ₹15-25L family",
                        premium: "₹35K-60K annually",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                      },
                      {
                        stage: "40s–50s (Peak Earnings)",
                        focus: "Maximum Coverage",
                        actions: [
                          "Ensure health + life coverage is sufficient",
                          "Buy higher top-up health cover",
                          "Avoid buying costly ULIPs or endowments (focus on term + investments separately)"
                        ],
                        coverage: "Term: ₹2-5Cr, Health: ₹25-50L + top-up",
                        premium: "₹60K-1.5L annually",
                        color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                      },
                      {
                        stage: "60s+ (Retirement)",
                        focus: "Health Focus",
                        actions: [
                          "Ensure health insurance continues (avoid policy lapses)",
                          "Focus on medical riders, not term (not needed if kids are independent)",
                          "Keep emergency fund for uncovered health costs"
                        ],
                        coverage: "Health: ₹50L-1Cr, Term: Reduce/Stop",
                        premium: "₹50K-2L annually (health focus)",
                        color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                      }
                    ].map((stage, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${stage.color}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-xl">{stage.stage}</h4>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{stage.focus}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{stage.coverage}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{stage.premium}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Key Actions:</div>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            {stage.actions.map((action, actionIndex) => (
                              <li key={actionIndex}>• {action}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('how-much-insurance')} className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />Previous
                    </button>
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Common Mistakes Section */}
            {activeSection === 'common-mistakes' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                      <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Mistakes to Avoid (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Avoid These • 3 min read • All Levels</p>
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
                        mistake: "❌ Delaying purchase (premiums increase with age)",
                        consequence: "₹15K at age 25 becomes ₹35K at age 35 for same ₹1Cr cover",
                        solution: "Buy term insurance immediately after first job"
                      },
                      {
                        mistake: "❌ Relying only on employer-provided health insurance",
                        consequence: "Coverage lost when changing jobs, usually insufficient (₹2-5L only)",
                        solution: "Buy personal health insurance, treat employer coverage as bonus"
                      },
                      {
                        mistake: "❌ Mixing investment + insurance (ULIPs, Endowment = low returns + low cover)",
                        consequence: "₹1L ULIP premium gives ₹10L cover vs ₹15K term gives ₹1Cr cover",
                        solution: "Buy pure term insurance + invest remaining in mutual funds"
                      },
                      {
                        mistake: "❌ Underinsuring (too low sum assured)",
                        consequence: "₹25L term insurance insufficient for ₹10L annual income family",
                        solution: "Follow 15-20x annual income rule for term insurance"
                      },
                      {
                        mistake: "❌ Not disclosing pre-existing diseases (claims may get rejected)",
                        consequence: "Claim rejection during critical time when family needs money most",
                        solution: "Full disclosure during application, pay higher premium if needed"
                      }
                    ].map((mistake, index) => (
                      <div key={index} className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                        <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">{mistake.mistake}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Consequence:</div>
                            <div className="text-sm text-gray-800 dark:text-gray-200">{mistake.consequence}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Solution:</div>
                            <div className="text-sm text-gray-800 dark:text-gray-200">{mistake.solution}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('age-based-planning')} className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />Previous
                    </button>
                    <button onClick={() => navigateToSection('action-plan')} className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Plan Section */}
            {activeSection === 'action-plan' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Insurance Action Plan (Step-by-Step 2025)</h2>
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
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Bottom Line</h3>
                    <p className="text-green-700 dark:text-green-300">
                      Insurance is not an investment, it's financial protection. First secure life + health, then add riders and general insurance. Review periodically as income and family responsibilities grow.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        step: "✅ Step 1: Buy Term Life Insurance (15–20× annual income)",
                        details: "Priority #1 - Get ₹1-2Cr term insurance immediately",
                        action: "Compare online: PolicyBazaar, Coverfox, direct company websites"
                      },
                      {
                        step: "✅ Step 2: Buy Health Insurance (₹10–25L family floater) + critical illness rider",
                        details: "Essential protection against medical emergencies",
                        action: "Family floater + top-up for higher coverage at lower cost"
                      },
                      {
                        step: "✅ Step 3: Add Accident & Disability Cover",
                        details: "Personal accident insurance for income protection",
                        action: "₹50L-1Cr personal accident cover, often available as rider"
                      },
                      {
                        step: "✅ Step 4: Review policies every 3–5 years or with major life events",
                        details: "Marriage, child birth, new loan, salary increase",
                        action: "Increase coverage with life changes, update nominees"
                      },
                      {
                        step: "✅ Step 5: Avoid ULIPs/Endowments → Do Investments separately",
                        details: "Keep insurance and investment separate for better returns",
                        action: "Term insurance + SIP in mutual funds = better wealth creation"
                      },
                      {
                        step: "✅ Step 6: Maintain emergency fund for deductibles and uncovered expenses",
                        details: "6-12 months expenses in liquid funds",
                        action: "₹3-6L emergency fund for medical deductibles, co-payments"
                      },
                      {
                        step: "✅ Step 7: Ensure nominee details are updated & family knows policy details",
                        details: "Critical for claim settlement during emergencies",
                        action: "Update nominees, share policy numbers with family, keep documents safe"
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
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                      <ArrowLeftIcon className="h-3 w-3 mr-1" />Previous
                    </button>
                    <Link to="/learn/tax-optimization" className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
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
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Insurance Planning Tools
                    </h3>
                    <p className="text-blue-100">Calculate and plan your insurance needs with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Term Life Insurance Calculator', path: '/calculators/term-life-insurance', icon: '🛡️', desc: 'Calculate life insurance needs' },
                    { name: 'Health Insurance Calculator', path: '/calculators/health-insurance', icon: '🏥', desc: 'Plan health coverage' },
                    { name: 'Vehicle Insurance Calculator', path: '/calculators/vehicle-insurance', icon: '🚗', desc: 'Motor insurance planning' },
                    { name: 'Emergency Fund Calculator', path: '/calculators/emergency-fund', icon: '🚨', desc: 'Build emergency corpus' }
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