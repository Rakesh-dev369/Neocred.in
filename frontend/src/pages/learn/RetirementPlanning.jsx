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

export default function RetirementPlanning() {
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
      duration: '4 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'importance', 
      title: 'Importance & Benefits', 
      icon: TrophyIcon, 
      emoji: '🏆', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'when-to-start', 
      title: 'When to Start', 
      icon: ClockIcon, 
      emoji: '⏰', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'schemes-2025', 
      title: 'Schemes & Tools (2025)', 
      icon: BanknotesIcon, 
      emoji: '🏦', 
      duration: '8 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'returns-risks', 
      title: 'Returns & Risks', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      duration: '4 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'age-based-planning', 
      title: 'Age-Based Planning', 
      icon: UserGroupIcon, 
      emoji: '👥', 
      duration: '6 min read',
      difficulty: 'Advanced'
    },
    { 
      id: 'common-mistakes', 
      title: 'Common Mistakes', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      duration: '3 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'action-plan', 
      title: 'Action Plan', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '5 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'example-2025', 
      title: 'Complete Example', 
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-teal-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">🏖️ Retirement Planning (Complete 2025 Guide)</h1>
              <p className="text-teal-100">Complete Guide • 9 Sections • 2025 Updated • All Levels</p>
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
                to="/learn/insurance-strategy"
                className="flex items-center px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-xs"
              >
                Next: Insurance Strategy
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <BanknotesIcon className="h-8 w-8" />
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
                <span className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full">
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
                          ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-l-4 border-teal-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-teal-200 dark:bg-teal-800' : 'bg-gray-100 dark:bg-gray-600'
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
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is Retirement Planning?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 4 min read • Beginner</p>
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
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl mb-8 border border-teal-200 dark:border-teal-700">
                    <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🏖️ Complete Definition</h3>
                    <p className="text-teal-700 dark:text-teal-300 leading-relaxed mb-4">
                      Retirement planning is the comprehensive process of setting financial goals and building a strategic roadmap to ensure you have sufficient money to maintain your desired lifestyle after you stop working. It encompasses estimating future expenses, building diversified savings, investing wisely across asset classes, and creating multiple income streams for your non-working years.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-teal-500" />
                        Key Components of Retirement Planning
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            component: "Future Expense Estimation",
                            description: "Calculate how much you'll need monthly/annually after retirement, factoring in inflation",
                            icon: "📊"
                          },
                          {
                            component: "Corpus Calculation (Rule of 25)",
                            description: "Required Corpus = 25 × Annual Expenses. This ensures 4% safe withdrawal rate",
                            icon: "🧮"
                          },
                          {
                            component: "Asset Allocation Strategy",
                            description: "Age-based portfolio mix of equity, debt, and alternative investments",
                            icon: "📈"
                          },
                          {
                            component: "Tax-Efficient Planning",
                            description: "Maximize tax benefits through NPS, EPF, PPF, and other instruments",
                            icon: "💰"
                          },
                          {
                            component: "Healthcare & Emergency Fund",
                            description: "Separate corpus for medical expenses and unexpected costs",
                            icon: "🏥"
                          },
                          {
                            component: "Estate Planning",
                            description: "Will creation, nominee updates, and wealth transfer planning",
                            icon: "📋"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center mb-3">
                              <span className="text-2xl mr-3">{item.icon}</span>
                              <h4 className="font-bold text-gray-900 dark:text-white">{item.component}</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">2025 Update</span>
                      </div>
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">New Retirement Planning Trends</h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• Digital-first retirement planning with robo-advisors</li>
                        <li>• Increased focus on healthcare inflation (8-10% annually)</li>
                        <li>• ESG and sustainable investing in retirement portfolios</li>
                        <li>• Flexible retirement age planning (55-70 years)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('importance')}
                      className="flex items-center px-6 py-3 text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Next
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Retirement Planning Matters (2025 Reality)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
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
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🏆 Critical Benefits</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Retirement planning isn't optional—it's essential for financial security and dignity in your golden years.</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-500" />
                        Key Benefits (2025 Data)
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            benefit: "Financial Security & Independence",
                            description: "Ensures you don't run out of money during retirement and can maintain your lifestyle",
                            impact: "Avoid dependency on children/family for daily expenses",
                            example: "₹50K monthly expenses maintained without family support",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          },
                          {
                            benefit: "Inflation Protection",
                            description: "₹50,000 monthly expenses today = ₹2.9L monthly in 30 years (6% inflation)",
                            impact: "Planning helps build corpus to beat inflation effectively",
                            example: "₹8.75Cr corpus needed for ₹50K current monthly expenses",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                          },
                          {
                            benefit: "Healthcare Coverage",
                            description: "Medical costs increase exponentially with age - average ₹8-12L annually post-60",
                            impact: "Dedicated health corpus prevents depletion of retirement savings",
                            example: "Separate ₹50L health corpus for 20-year retirement",
                            color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                          },
                          {
                            benefit: "Peace of Mind & Dignity",
                            description: "Financial independence allows you to enjoy retirement stress-free",
                            impact: "Maintain social status and personal dignity in golden years",
                            example: "Continue hobbies, travel, and lifestyle without compromise",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                          },
                          {
                            benefit: "Legacy Building",
                            description: "Proper planning ensures wealth transfer to next generation",
                            impact: "Leave behind assets instead of liabilities for your children",
                            example: "₹2-5Cr inheritance vs ₹50L medical debt burden",
                            color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700"
                          }
                        ].map((item, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${item.color}`}>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">{item.benefit}</h4>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Impact:</div>
                                <div className="text-sm text-gray-800 dark:text-gray-200">{item.impact}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Example:</div>
                                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{item.example}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ExclamationTriangleIcon className="w-5 h-5 mr-2 text-red-500" />
                        Cost of Delaying Retirement Planning
                      </h3>
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                        <div className="space-y-4">
                          {[
                            {
                              scenario: "Starting at 25 vs 35 (10-year delay)",
                              monthlyRequired25: "₹15,000/month",
                              monthlyRequired35: "₹35,000/month",
                              extraCost: "2.3x more investment needed"
                            },
                            {
                              scenario: "Starting at 25 vs 45 (20-year delay)",
                              monthlyRequired25: "₹15,000/month",
                              monthlyRequired45: "₹85,000/month",
                              extraCost: "5.7x more investment needed"
                            }
                          ].map((example, index) => (
                            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{example.scenario}</h5>
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                  <div className="text-gray-600 dark:text-gray-400">Early Start:</div>
                                  <div className="font-medium text-green-600 dark:text-green-400">{example.monthlyRequired25}</div>
                                </div>
                                <div>
                                  <div className="text-gray-600 dark:text-gray-400">Late Start:</div>
                                  <div className="font-medium text-red-600 dark:text-red-400">{example.monthlyRequired35 || example.monthlyRequired45}</div>
                                </div>
                                <div>
                                  <div className="text-gray-600 dark:text-gray-400">Extra Cost:</div>
                                  <div className="font-bold text-orange-600 dark:text-orange-400">{example.extraCost}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('what-it-is')}
                      className="flex items-center px-5 py-3 text-base text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('when-to-start')}
                      className="flex items-center px-6 py-3 text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* When to Start Section */}
            {activeSection === 'when-to-start' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <ClockIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">When to Start Retirement Planning (2025 Guide)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Timing • 2 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('when-to-start')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('when-to-start') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('when-to-start') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('when-to-start')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('when-to-start')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl mb-8 border border-orange-200 dark:border-orange-700">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">⏰ The Golden Rule</h3>
                    <p className="text-orange-700 dark:text-orange-300 text-lg font-medium">
                      "The best time to start retirement planning was 20 years ago. The second best time is NOW."
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <FireIcon className="w-5 h-5 mr-2 text-red-500" />
                        Age-Based Starting Guide (2025)
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            ageGroup: "20-25 Years (Fresh Graduates)",
                            priority: "HIGH",
                            monthlyInvestment: "₹5,000-10,000",
                            targetCorpus: "₹15-25 Crores",
                            strategy: "Aggressive equity focus (80-90%), start SIP immediately after first salary",
                            advantage: "40+ years of compounding, can take maximum risk",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
                            priorityColor: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                          },
                          {
                            ageGroup: "25-30 Years (Career Building)",
                            priority: "HIGH",
                            monthlyInvestment: "₹10,000-20,000",
                            targetCorpus: "₹12-20 Crores",
                            strategy: "Equity-heavy portfolio (70-80%), increase SIP with salary hikes",
                            advantage: "35+ years for growth, peak earning years ahead",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
                            priorityColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                          },
                          {
                            ageGroup: "30-35 Years (Family Phase)",
                            priority: "CRITICAL",
                            monthlyInvestment: "₹20,000-35,000",
                            targetCorpus: "₹8-15 Crores",
                            strategy: "Balanced approach (60-70% equity), maximize EPF/NPS contributions",
                            advantage: "30 years left, still good compounding potential",
                            color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700",
                            priorityColor: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400"
                          },
                          {
                            ageGroup: "35-40 Years (Peak Earning)",
                            priority: "URGENT",
                            monthlyInvestment: "₹35,000-60,000",
                            targetCorpus: "₹6-10 Crores",
                            strategy: "Aggressive catch-up mode, maximize all tax-saving instruments",
                            advantage: "25 years left, highest earning capacity",
                            color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
                            priorityColor: "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400"
                          },
                          {
                            ageGroup: "40-45 Years (Late Starter)",
                            priority: "EMERGENCY",
                            monthlyInvestment: "₹60,000-1,00,000",
                            targetCorpus: "₹4-8 Crores",
                            strategy: "High-risk high-return investments, consider delayed retirement",
                            advantage: "20 years left, need aggressive approach",
                            color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",
                            priorityColor: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400"
                          },
                          {
                            ageGroup: "45+ Years (Crisis Mode)",
                            priority: "CRISIS",
                            monthlyInvestment: "₹1,00,000+",
                            targetCorpus: "₹2-5 Crores",
                            strategy: "Maximum possible investment, consider working till 65-70",
                            advantage: "Limited time, requires extreme discipline",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700",
                            priorityColor: "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400"
                          }
                        ].map((group, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${group.color}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{group.ageGroup}</h4>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${group.priorityColor}`}>
                                {group.priority}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Monthly Investment:</div>
                                <div className="text-lg font-bold text-teal-600 dark:text-teal-400">{group.monthlyInvestment}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Target Corpus:</div>
                                <div className="text-lg font-bold text-green-600 dark:text-green-400">{group.targetCorpus}</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Strategy:</div>
                                <div className="text-sm text-gray-800 dark:text-gray-200">{group.strategy}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Advantage:</div>
                                <div className="text-sm text-blue-600 dark:text-blue-400">{group.advantage}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Power of Starting Early (Real Example)
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">Early Bird (Age 25)</h5>
                          <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• Monthly SIP: ₹15,000</li>
                            <li>• Investment Period: 35 years</li>
                            <li>• Total Investment: ₹63 Lakhs</li>
                            <li>• <strong className="text-green-600 dark:text-green-400">Final Corpus: ₹15.2 Crores</strong></li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">Late Starter (Age 40)</h5>
                          <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• Monthly SIP: ₹60,000</li>
                            <li>• Investment Period: 20 years</li>
                            <li>• Total Investment: ₹1.44 Crores</li>
                            <li>• <strong className="text-red-600 dark:text-red-400">Final Corpus: ₹4.6 Crores</strong></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          <strong>Result:</strong> Early starter invests 56% less but gets 3.3x more corpus! This is the magic of compounding.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('importance')}
                      className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('schemes-2025')}
                      className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Schemes & Tools 2025 Section */}
            {activeSection === 'schemes-2025' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Retirement Schemes & Tools (2025 Updated)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Investment Options • 8 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('schemes-2025')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('schemes-2025') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('schemes-2025') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('schemes-2025')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('schemes-2025')
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
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 Complete 2025 Retirement Portfolio</h3>
                    <p className="text-blue-700 dark:text-blue-300">
                      Build a diversified retirement portfolio using government schemes, market investments, and tax-efficient instruments.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-500" />
                        Government Schemes (Tax-Efficient + Guaranteed)
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            scheme: "Employee Provident Fund (EPF)",
                            returns: "8.15% (2024-25)",
                            taxBenefit: "80C + Tax-free maturity",
                            contribution: "12% of salary (matched by employer)",
                            maturity: "Age 58 or retirement",
                            pros: "Guaranteed returns, employer matching, tax-free growth",
                            cons: "Limited to salaried employees, low returns vs inflation",
                            bestFor: "All salaried employees (mandatory)",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          },
                          {
                            scheme: "Public Provident Fund (PPF)",
                            returns: "7.1% (Q3 2024-25)",
                            taxBenefit: "EEE (Exempt-Exempt-Exempt)",
                            contribution: "₹500 to ₹1.5L annually",
                            maturity: "15 years (extendable in 5-year blocks)",
                            pros: "Triple tax benefit, government backing, partial withdrawal after 7 years",
                            cons: "15-year lock-in, low returns, ₹1.5L annual limit",
                            bestFor: "Conservative investors, tax planning",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                          },
                          {
                            scheme: "National Pension System (NPS)",
                            returns: "10-14% CAGR (equity exposure)",
                            taxBenefit: "80C + 80CCD(1B) + 80CCD(2)",
                            contribution: "No limit (additional ₹50K under 80CCD(1B))",
                            maturity: "Age 60 (40% lump sum + 60% annuity)",
                            pros: "Market-linked returns, extra tax deduction, professional management",
                            cons: "60% annuity mandatory, market risk, exit restrictions",
                            bestFor: "Long-term investors seeking market returns",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                          },
                          {
                            scheme: "Senior Citizens Savings Scheme (SCSS)",
                            returns: "8.2% (Q3 2024-25)",
                            taxBenefit: "80C deduction",
                            contribution: "₹30L maximum (age 60+)",
                            maturity: "5 years (extendable by 3 years)",
                            pros: "High guaranteed returns, quarterly interest, senior citizen focused",
                            cons: "Only for 60+ age, ₹30L limit, taxable interest",
                            bestFor: "Senior citizens seeking guaranteed income",
                            color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                          }
                        ].map((scheme, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${scheme.color}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{scheme.scheme}</h4>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600 dark:text-green-400">{scheme.returns}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Current Rate</div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Tax Benefit:</div>
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{scheme.taxBenefit}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Contribution:</div>
                                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{scheme.contribution}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Maturity:</div>
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{scheme.maturity}</div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Pros:</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">{scheme.pros}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Cons:</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">{scheme.cons}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Best For:</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">{scheme.bestFor}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ChartBarIcon className="w-5 h-5 mr-2 text-blue-500" />
                        Market-Linked Investments (Higher Returns)
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            investment: "Equity Mutual Funds (Large Cap)",
                            returns: "10-12% CAGR (15+ years)",
                            riskLevel: "Moderate",
                            investment_horizon: "15+ years",
                            allocation: "40-60% of portfolio",
                            platforms: "Groww, Zerodha Coin, Paytm Money, ET Money",
                            examples: "HDFC Top 100, ICICI Pru Bluechip, SBI Large Cap",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                          },
                          {
                            investment: "Equity Mutual Funds (Mid & Small Cap)",
                            returns: "12-15% CAGR (15+ years)",
                            riskLevel: "High",
                            investment_horizon: "20+ years",
                            allocation: "20-30% of portfolio",
                            platforms: "Groww, Zerodha Coin, Paytm Money, ET Money",
                            examples: "HDFC Mid-Cap, Kotak Small Cap, DSP Midcap",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                          },
                          {
                            investment: "Hybrid Mutual Funds",
                            returns: "8-10% CAGR (10+ years)",
                            riskLevel: "Moderate",
                            investment_horizon: "10+ years",
                            allocation: "20-30% of portfolio",
                            platforms: "All major platforms",
                            examples: "HDFC Hybrid Equity, ICICI Pru Balanced Advantage",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          },
                          {
                            investment: "ELSS (Tax Saving Mutual Funds)",
                            returns: "10-12% CAGR (10+ years)",
                            riskLevel: "Moderate-High",
                            investment_horizon: "3+ years (lock-in)",
                            allocation: "Up to ₹1.5L (80C limit)",
                            platforms: "All major platforms",
                            examples: "Axis Long Term Equity, Mirae Asset Tax Saver",
                            color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                          }
                        ].map((investment, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${investment.color}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{investment.investment}</h4>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600 dark:text-green-400">{investment.returns}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Expected Returns</div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Risk Level:</div>
                                <div className="text-sm text-red-600 dark:text-red-400 font-medium">{investment.riskLevel}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Time Horizon:</div>
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{investment.investment_horizon}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Allocation:</div>
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{investment.allocation}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Platforms:</div>
                                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{investment.platforms}</div>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Top Funds (2025):</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">{investment.examples}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center">
                        <AcademicCapIcon className="w-5 h-5 mr-2" />
                        Recommended Portfolio Allocation (2025)
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-green-600 dark:text-green-400 mb-3">Conservative (Age 50+)</h5>
                          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                            <li>• EPF/PPF: 40%</li>
                            <li>• Debt Funds: 30%</li>
                            <li>• Large Cap Equity: 20%</li>
                            <li>• Gold/REITs: 10%</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Balanced (Age 35-50)</h5>
                          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                            <li>• Equity Funds: 50%</li>
                            <li>• EPF/NPS: 25%</li>
                            <li>• PPF/Debt: 15%</li>
                            <li>• Alternative: 10%</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Aggressive (Age 25-35)</h5>
                          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                            <li>• Equity Funds: 70%</li>
                            <li>• NPS: 15%</li>
                            <li>• EPF: 10%</li>
                            <li>• Emergency Fund: 5%</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('when-to-start')}
                      className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('returns-risks')}
                      className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Returns & Risks Section */}
            {activeSection === 'returns-risks' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Returns & Risks Analysis (2025 Data)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Risk Management • 4 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('returns-risks')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('returns-risks') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('returns-risks') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('returns-risks')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('returns-risks')
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
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📈 Risk-Return Balance</h3>
                    <p className="text-red-700 dark:text-red-300">
                      Understanding the relationship between risk and returns is crucial for building a successful retirement portfolio.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <TrophyIcon className="w-5 h-5 mr-2 text-yellow-500" />
                        Historical Returns Analysis (15+ Year Data)
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            asset: "Large Cap Equity Funds",
                            returns_15yr: "11.2%",
                            returns_10yr: "10.8%",
                            returns_5yr: "9.4%",
                            volatility: "15-20%",
                            riskLevel: "Moderate",
                            inflationBeat: "Yes (6-7% above)",
                            color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                          },
                          {
                            asset: "Mid Cap Equity Funds",
                            returns_15yr: "13.8%",
                            returns_10yr: "12.5%",
                            returns_5yr: "8.2%",
                            volatility: "25-35%",
                            riskLevel: "High",
                            inflationBeat: "Yes (8-9% above)",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                          },
                          {
                            asset: "Hybrid Funds (Balanced)",
                            returns_15yr: "9.1%",
                            returns_10yr: "8.7%",
                            returns_5yr: "7.8%",
                            volatility: "8-12%",
                            riskLevel: "Low-Moderate",
                            inflationBeat: "Marginal (2-3% above)",
                            color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                          },
                          {
                            asset: "PPF (Government)",
                            returns_15yr: "7.8%",
                            returns_10yr: "7.6%",
                            returns_5yr: "7.1%",
                            volatility: "0%",
                            riskLevel: "Zero",
                            inflationBeat: "Barely (1-2% above)",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                          },
                          {
                            asset: "NPS (Aggressive)",
                            returns_15yr: "10.5%",
                            returns_10yr: "9.8%",
                            returns_5yr: "8.9%",
                            volatility: "12-18%",
                            riskLevel: "Moderate",
                            inflationBeat: "Yes (4-5% above)",
                            color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700"
                          }
                        ].map((asset, index) => (
                          <div key={index} className={`p-6 rounded-xl border ${asset.color}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{asset.asset}</h4>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600 dark:text-green-400">{asset.returns_15yr}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">15-Year CAGR</div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">10-Year:</div>
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{asset.returns_10yr}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">5-Year:</div>
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{asset.returns_5yr}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Volatility:</div>
                                <div className="text-sm text-red-600 dark:text-red-400 font-medium">{asset.volatility}</div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Risk Level:</div>
                                <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">{asset.riskLevel}</div>
                              </div>
                              <div className="col-span-2">
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Inflation Beat:</div>
                                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{asset.inflationBeat}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <ExclamationTriangleIcon className="w-5 h-5 mr-2 text-red-500" />
                        Key Retirement Planning Risks (2025)
                      </h3>
                      <div className="space-y-6">
                        {[
                          {
                            risk: "Inflation Risk",
                            description: "Rising costs erode purchasing power over 20-30 year retirement",
                            impact: "₹50K today = ₹2.9L in 30 years (6% inflation)",
                            mitigation: "Invest 60-70% in equity for long-term inflation beating",
                            severity: "HIGH",
                            color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                          },
                          {
                            risk: "Longevity Risk",
                            description: "Living longer than expected, money running out",
                            impact: "Life expectancy increased to 75+ years in India",
                            mitigation: "Plan for 25-30 year retirement, build larger corpus",
                            severity: "HIGH",
                            color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                          },
                          {
                            risk: "Healthcare Inflation",
                            description: "Medical costs rising 8-10% annually vs 6% general inflation",
                            impact: "₹5L medical expense today = ₹50L in 30 years",
                            mitigation: "Separate health corpus + comprehensive insurance",
                            severity: "CRITICAL",
                            color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                          },
                          {
                            risk: "Market Volatility Risk",
                            description: "Short-term market crashes affecting retirement corpus",
                            impact: "2008: -50%, 2020: -35% market falls",
                            mitigation: "Asset allocation, SIP, long-term investing",
                            severity: "MODERATE",
                            color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                          },
                          {
                            risk: "Sequence of Returns Risk",
                            description: "Poor returns in early retirement years",
                            impact: "Early losses harder to recover during withdrawal phase",
                            mitigation: "Bucket strategy, gradual equity reduction near retirement",
                            severity: "MODERATE",
                            color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                          }
                        ].map((risk, index) => {
                          const severityColor = {
                            'CRITICAL': 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
                            'HIGH': 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
                            'MODERATE': 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400'
                          };
                          
                          return (
                            <div key={index} className={`p-6 rounded-xl border ${risk.color}`}>
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{risk.risk}</h4>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${severityColor[risk.severity]}`}>
                                  {risk.severity}
                                </span>
                              </div>
                              <p className="text-gray-700 dark:text-gray-300 mb-4">{risk.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Impact:</div>
                                  <div className="text-sm text-gray-800 dark:text-gray-200">{risk.impact}</div>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Mitigation:</div>
                                  <div className="text-sm text-gray-800 dark:text-gray-200">{risk.mitigation}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2" />
                        Risk Mitigation Strategies (2025 Best Practices)
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">Diversification Strategy</h5>
                          <ul className="text-sm space-y-2 text-teal-600 dark:text-teal-400">
                            <li>• Asset Class: Equity + Debt + Gold + Real Estate</li>
                            <li>• Geographic: India + International exposure</li>
                            <li>• Sector: Large + Mid + Small cap funds</li>
                            <li>• Time: SIP across market cycles</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-3">Withdrawal Strategy</h5>
                          <ul className="text-sm space-y-2 text-teal-600 dark:text-teal-400">
                            <li>• 4% Rule: Withdraw 4% of corpus annually</li>
                            <li>• Bucket Strategy: 3 buckets for different time horizons</li>
                            <li>• Flexible Withdrawal: Adjust based on market conditions</li>
                            <li>• Annuity Ladder: Guaranteed income for essentials</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('schemes-2025')}
                      className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('age-based-planning')}
                      className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Age-Based Retirement Planning (2025 Strategy)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Strategic Planning • 6 min read • Advanced</p>
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
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-8 border border-indigo-200 dark:border-indigo-700">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">👥 Life-Stage Strategy</h3>
                    <p className="text-indigo-700 dark:text-indigo-300">Your retirement strategy should evolve with your age, income, and life circumstances.</p>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        stage: "Early Career (22-30 years)",
                        focus: "Building Foundation",
                        monthlyIncome: "₹30K-80K",
                        investmentCapacity: "20-30% of income",
                        riskTolerance: "Very High (90% equity)",
                        keyActions: [
                          "Start SIP with first salary (₹5K-15K)",
                          "Maximize EPF contribution",
                          "Build emergency fund (6 months)",
                          "Take term life insurance",
                          "Focus on skill development for salary growth"
                        ],
                        targetCorpus: "₹15-25 Crores",
                        timeline: "35-40 years to retirement",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      },
                      {
                        stage: "Growth Phase (30-40 years)",
                        focus: "Wealth Accumulation",
                        monthlyIncome: "₹80K-2L",
                        investmentCapacity: "30-40% of income",
                        riskTolerance: "High (70-80% equity)",
                        keyActions: [
                          "Increase SIP with salary hikes (₹20K-50K)",
                          "Start NPS for extra tax benefit",
                          "Diversify across large, mid, small cap",
                          "Consider international funds (10-15%)",
                          "Review and rebalance annually"
                        ],
                        targetCorpus: "₹8-15 Crores",
                        timeline: "25-30 years to retirement",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                      },
                      {
                        stage: "Peak Earning (40-50 years)",
                        focus: "Aggressive Accumulation",
                        monthlyIncome: "₹1.5L-5L",
                        investmentCapacity: "40-50% of income",
                        riskTolerance: "Moderate-High (60-70% equity)",
                        keyActions: [
                          "Maximize all investments (₹50K-1.5L)",
                          "Add real estate/REITs (10-15%)",
                          "Increase insurance coverage",
                          "Plan children's education separately",
                          "Consider alternative investments"
                        ],
                        targetCorpus: "₹5-10 Crores",
                        timeline: "15-20 years to retirement",
                        color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                      },
                      {
                        stage: "Pre-Retirement (50-60 years)",
                        focus: "Risk Reduction & Preservation",
                        monthlyIncome: "₹2L-8L",
                        investmentCapacity: "50-60% of income",
                        riskTolerance: "Moderate (40-50% equity)",
                        keyActions: [
                          "Gradually shift to debt/hybrid funds",
                          "Build healthcare corpus separately",
                          "Clear all loans before retirement",
                          "Create will and estate planning",
                          "Plan post-retirement income sources"
                        ],
                        targetCorpus: "₹3-8 Crores",
                        timeline: "5-10 years to retirement",
                        color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                      },
                      {
                        stage: "Retirement (60+ years)",
                        focus: "Income Generation & Preservation",
                        monthlyIncome: "₹50K-2L (from corpus)",
                        investmentCapacity: "Withdrawal phase",
                        riskTolerance: "Low (20-30% equity)",
                        keyActions: [
                          "Follow 4% withdrawal rule",
                          "Maintain 2-3 years expenses in liquid funds",
                          "Keep some equity for inflation protection",
                          "Consider annuity for guaranteed income",
                          "Regular health checkups and insurance"
                        ],
                        targetCorpus: "Withdrawal Phase",
                        timeline: "20-30 years of retirement",
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
                            <div className="text-lg font-bold text-green-600 dark:text-green-400">{stage.targetCorpus}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{stage.timeline}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Monthly Income:</div>
                            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{stage.monthlyIncome}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Investment %:</div>
                            <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">{stage.investmentCapacity}</div>
                          </div>
                          <div className="col-span-2">
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Risk Tolerance:</div>
                            <div className="text-sm text-red-600 dark:text-red-400 font-medium">{stage.riskTolerance}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Key Actions:</div>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            {stage.keyActions.map((action, actionIndex) => (
                              <li key={actionIndex}>• {action}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('returns-risks')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Retirement Planning Mistakes (2025)</h2>
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
                        mistake: "Starting Too Late",
                        description: "Delaying retirement planning thinking 'I'll start next year'",
                        consequence: "Need 5-10x more monthly investment if started 10-15 years late",
                        solution: "Start with ₹1000 SIP today, increase gradually with salary hikes",
                        severity: "CRITICAL"
                      },
                      {
                        mistake: "Underestimating Inflation",
                        description: "Planning based on current expenses without considering inflation",
                        consequence: "₹50K monthly need today = ₹2.9L in 30 years (6% inflation)",
                        solution: "Use inflation-adjusted calculations, target 8-10% real returns",
                        severity: "HIGH"
                      },
                      {
                        mistake: "Ignoring Healthcare Costs",
                        description: "Not planning separate corpus for medical expenses",
                        consequence: "Medical costs can consume 40-60% of retirement corpus",
                        solution: "Build separate ₹50L+ health corpus + comprehensive insurance",
                        severity: "CRITICAL"
                      },
                      {
                        mistake: "Over-Conservative Approach",
                        description: "Investing only in FD, PPF thinking they're 'safe'",
                        consequence: "7% returns can't beat 6% inflation + taxes effectively",
                        solution: "Allocate 60-70% to equity for long-term wealth creation",
                        severity: "HIGH"
                      },
                      {
                        mistake: "No Asset Allocation Strategy",
                        description: "Random investments without proper diversification",
                        consequence: "Either too much risk or too little returns",
                        solution: "Follow age-based allocation: 100-age in equity, rest in debt",
                        severity: "MODERATE"
                      },
                      {
                        mistake: "Emotional Investing",
                        description: "Stopping SIP during market falls, investing lump sum at peaks",
                        consequence: "Buy high, sell low - opposite of wealth creation",
                        solution: "Automate SIP, ignore short-term market volatility",
                        severity: "HIGH"
                      },
                      {
                        mistake: "Not Increasing Investments",
                        description: "Starting ₹5K SIP and never increasing it",
                        consequence: "Inflation erodes the real value of fixed SIP amounts",
                        solution: "Increase SIP by 10-15% annually or with salary hikes",
                        severity: "MODERATE"
                      },
                      {
                        mistake: "Mixing Goals",
                        description: "Using retirement corpus for children's education/marriage",
                        consequence: "Retirement planning gets derailed, inadequate corpus",
                        solution: "Separate goal-based investing, don't touch retirement money",
                        severity: "HIGH"
                      }
                    ].map((mistake, index) => {
                      const severityColors = {
                        'CRITICAL': 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700 text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
                        'HIGH': 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700 text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
                        'MODERATE': 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400'
                      };
                      const [bgColor, badgeColor] = severityColors[mistake.severity].split(' text-');
                      
                      return (
                        <div key={index} className={`p-6 rounded-xl border ${bgColor}`}>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-gray-900 dark:text-white text-lg">❌ {mistake.mistake}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-${badgeColor}`}>{mistake.severity}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-3">{mistake.description}</p>
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
                      );
                    })}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('age-based-planning')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('action-plan')} className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Retirement Action Plan (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Step-by-Step • 5 min read • All Levels</p>
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
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Ready to Start?</h3>
                    <p className="text-green-700 dark:text-green-300">Follow this step-by-step action plan to build your retirement corpus systematically.</p>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        step: "Step 1: Calculate Your Retirement Corpus",
                        timeframe: "Week 1",
                        actions: [
                          "Estimate current monthly expenses (₹50K example)",
                          "Apply inflation (6% for 30 years = ₹2.9L monthly)",
                          "Calculate annual need (₹2.9L × 12 = ₹34.8L)",
                          "Apply Rule of 25 (₹34.8L × 25 = ₹8.7 Crores)",
                          "Add healthcare corpus (₹50L separate)"
                        ],
                        tools: "Use NeoCred Retirement Calculator",
                        outcome: "Target corpus: ₹9.2 Crores",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                      },
                      {
                        step: "Step 2: Assess Current Financial Position",
                        timeframe: "Week 2",
                        actions: [
                          "List all current investments (EPF, PPF, MF, etc.)",
                          "Calculate current corpus value",
                          "Project growth at current rate",
                          "Identify the gap vs target corpus",
                          "Determine additional monthly investment needed"
                        ],
                        tools: "Excel/Google Sheets for tracking",
                        outcome: "Gap analysis and monthly SIP requirement",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      },
                      {
                        step: "Step 3: Choose Investment Platforms & Funds",
                        timeframe: "Week 3",
                        actions: [
                          "Open account on Groww/Zerodha Coin/Paytm Money",
                          "Complete KYC and bank linking",
                          "Select 3-4 mutual funds (Large, Mid, Hybrid)",
                          "Set up automatic SIP dates",
                          "Enable auto-increase feature (10% annually)"
                        ],
                        tools: "Groww, Zerodha Coin, ET Money apps",
                        outcome: "Investment platform ready with fund selection",
                        color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                      },
                      {
                        step: "Step 4: Maximize Tax-Efficient Instruments",
                        timeframe: "Week 4",
                        actions: [
                          "Maximize EPF contribution (if salaried)",
                          "Start PPF account (₹1.5L annually)",
                          "Open NPS account (extra ₹50K deduction)",
                          "Invest in ELSS funds for 80C benefit",
                          "Ensure total tax saving = ₹2L+ annually"
                        ],
                        tools: "Bank branches, online portals",
                        outcome: "Tax-efficient retirement portfolio setup",
                        color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                      },
                      {
                        step: "Step 5: Set Up Monitoring & Review System",
                        timeframe: "Month 2",
                        actions: [
                          "Create investment tracking spreadsheet",
                          "Set quarterly review reminders",
                          "Monitor fund performance vs benchmark",
                          "Rebalance portfolio annually",
                          "Increase SIP with salary hikes (10-15%)"
                        ],
                        tools: "Excel, Google Sheets, Portfolio apps",
                        outcome: "Systematic monitoring and growth system",
                        color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700"
                      },
                      {
                        step: "Step 6: Build Additional Safety Nets",
                        timeframe: "Month 3-6",
                        actions: [
                          "Build emergency fund (6-12 months expenses)",
                          "Take adequate term life insurance (10x annual income)",
                          "Get comprehensive health insurance (family floater)",
                          "Create will and update nominees",
                          "Consider critical illness cover"
                        ],
                        tools: "Insurance companies, legal advisors",
                        outcome: "Complete financial protection ecosystem",
                        color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                      }
                    ].map((step, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${step.color}`}>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">{step.step}</h4>
                          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">{step.timeframe}</span>
                        </div>
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Actions to Take:</div>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            {step.actions.map((action, actionIndex) => (
                              <li key={actionIndex}>• {action}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Tools Needed:</div>
                            <div className="text-sm text-gray-800 dark:text-gray-200">{step.tools}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Expected Outcome:</div>
                            <div className="text-sm text-gray-800 dark:text-gray-200">{step.outcome}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <button onClick={() => navigateToSection('example-2025')} className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                      Next<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Complete Example Section */}
            {activeSection === 'example-2025' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Complete Retirement Example (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Real Case Study • 4 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('example-2025')} className={`p-2 rounded-full transition-colors ${bookmarks.has('example-2025') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('example-2025') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('example-2025')} className={`p-2 rounded-full transition-colors ${completedSections.has('example-2025') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Case Study: Rahul's Retirement Journey</h3>
                    <p className="text-purple-700 dark:text-purple-300">A complete real-world example of retirement planning from age 28 to 60.</p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Profile: Rahul Sharma (Age 28, Software Engineer)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                            <li>• <strong>Current Salary:</strong> ₹12 LPA (₹1L monthly)</li>
                            <li>• <strong>Current Expenses:</strong> ₹60K monthly</li>
                            <li>• <strong>Savings Capacity:</strong> ₹40K monthly</li>
                            <li>• <strong>Target Retirement Age:</strong> 60 years</li>
                          </ul>
                        </div>
                        <div>
                          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                            <li>• <strong>Investment Horizon:</strong> 32 years</li>
                            <li>• <strong>Risk Tolerance:</strong> High (young age)</li>
                            <li>• <strong>Family:</strong> Married, planning 1 child</li>
                            <li>• <strong>Current Investments:</strong> EPF only</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Step 1: Retirement Corpus Calculation</h4>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Current Monthly Expenses:</span>
                            <span className="font-medium">₹60,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Inflation-Adjusted (6% for 32 years):</span>
                            <span className="font-medium">₹3,84,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Annual Requirement:</span>
                            <span className="font-medium">₹46,08,000</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-bold">Required Corpus (25x Rule):</span>
                            <span className="font-bold text-green-600 dark:text-green-400">₹11.52 Crores</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Healthcare Corpus (separate):</span>
                            <span className="font-medium text-red-600 dark:text-red-400">₹50 Lakhs</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-bold text-lg">Total Target:</span>
                            <span className="font-bold text-lg text-purple-600 dark:text-purple-400">₹12.02 Crores</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Step 2: Investment Strategy & Allocation</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">Monthly Investment Plan</h5>
                          <ul className="text-sm space-y-2 text-green-600 dark:text-green-400">
                            <li>• Large Cap SIP: ₹15,000 (40%)</li>
                            <li>• Mid Cap SIP: ₹10,000 (25%)</li>
                            <li>• Hybrid Fund SIP: ₹5,000 (15%)</li>
                            <li>• NPS: ₹5,000 (15%)</li>
                            <li>• PPF: ₹12,500 (5%)</li>
                            <li className="font-bold border-t pt-2">Total: ₹47,500/month</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                          <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Expected Returns</h5>
                          <ul className="text-sm space-y-2 text-purple-600 dark:text-purple-400">
                            <li>• Large Cap: 11% CAGR</li>
                            <li>• Mid Cap: 13% CAGR</li>
                            <li>• Hybrid: 9% CAGR</li>
                            <li>• NPS: 10% CAGR</li>
                            <li>• PPF: 7.1% (current)</li>
                            <li className="font-bold border-t pt-2">Blended: ~10.5% CAGR</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Step 3: Projected Growth Over 32 Years</h4>
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">₹1.82 Cr</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Total Investment</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">(32 years × ₹57K avg)</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹14.8 Cr</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Final Corpus</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">(10.5% CAGR)</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹12.98 Cr</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Wealth Created</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">(Returns - Investment)</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8.1x</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Wealth Multiplier</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">(Power of Compounding)</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Step 4: Retirement Income Strategy (Age 60+)</h4>
                      <div className="space-y-4">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                          <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">4% Withdrawal Strategy</h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Withdrawal (4%):</div>
                              <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">₹59.2 Lakhs</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Income:</div>
                              <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">₹4.93 Lakhs</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">vs Required (₹3.84L):</div>
                              <div className="text-lg font-bold text-green-600 dark:text-green-400">28% Surplus</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                          <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Additional Income Sources</h5>
                          <ul className="text-sm space-y-2 text-indigo-600 dark:text-indigo-400">
                            <li>• NPS Annuity: ₹30,000-50,000/month (from 60% mandatory annuity)</li>
                            <li>• EPF Corpus: ₹1.5-2 Crores (lump sum at retirement)</li>
                            <li>• Rental Income: ₹20,000-40,000/month (if property investment)</li>
                            <li>• Part-time Consulting: ₹50,000-1,00,000/month (optional)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">✅ Success Factors in Rahul's Plan</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">What Worked:</h5>
                          <ul className="text-sm space-y-1 text-green-600 dark:text-green-400">
                            <li>• Started early at age 28</li>
                            <li>• Consistent SIP discipline</li>
                            <li>• Diversified portfolio</li>
                            <li>• Regular annual increases</li>
                            <li>• Long-term perspective</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Final Result:</h5>
                          <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                            <li>• Target: ₹12 Cr → Achieved: ₹14.8 Cr</li>
                            <li>• Monthly need: ₹3.84L → Income: ₹4.93L</li>
                            <li>• Comfortable retirement with surplus</li>
                            <li>• Legacy for next generation</li>
                            <li>• Financial independence achieved</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('action-plan')} className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <ArrowLeftIcon className="h-3 w-3 mr-2" />Previous
                    </button>
                    <Link to="/learn/insurance-strategy" className="flex items-center px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
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
              className="bg-gradient-to-r from-teal-500 via-cyan-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Retirement Planning Tools
                    </h3>
                    <p className="text-teal-100">Calculate and plan your retirement with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Retirement Calculator', path: '/calculators/retirement-calculator', icon: '🏖️', desc: 'Calculate retirement corpus' },
                    { name: 'SIP Calculator', path: '/calculators/sip-calculator', icon: '📈', desc: 'Plan systematic investments' },
                    { name: 'NPS Calculator', path: '/calculators/nps-calculator', icon: '🏦', desc: 'National Pension System' },
                    { name: 'PPF Calculator', path: '/calculators/ppf-calculator', icon: '💰', desc: 'Public Provident Fund' }
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
                        <p className="text-xs text-teal-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-teal-200">
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