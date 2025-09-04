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
  ShieldCheckIcon,
  HeartIcon,
  HomeIcon,
  TruckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';
import { getNextPillar, getPreviousPillar } from '../../data/learningData';
import { Helmet } from 'react-helmet-async';

function Insurance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 3; // Insurance & Risk Shield is pillar 3
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
      title: 'Introduction to Insurance', 
      icon: AcademicCapIcon, 
      emoji: '📖', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding insurance fundamentals and risk management principles'
    },
    { 
      id: 'types-overview', 
      title: 'Types of Insurance Overview', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Comprehensive overview of different insurance categories'
    },
    { 
      id: 'life-insurance', 
      title: 'Life Insurance Planning', 
      icon: HeartIcon, 
      emoji: '❤️', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Protecting your family with adequate life coverage'
    },
    { 
      id: 'health-insurance', 
      title: 'Health Insurance Essentials', 
      icon: HeartIcon, 
      emoji: '🏥', 
      level: 'foundation',
      duration: '18 min read',
      difficulty: 'Beginner',
      description: 'Medical coverage for healthcare expenses'
    },
    // Intermediate Level
    { 
      id: 'motor-insurance', 
      title: 'Motor & Vehicle Insurance', 
      icon: TruckIcon, 
      emoji: '🚗', 
      level: 'intermediate',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Protecting your vehicles and third-party liability'
    },
    { 
      id: 'property-insurance', 
      title: 'Property & Home Insurance', 
      icon: HomeIcon, 
      emoji: '🏠', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Safeguarding your property and belongings'
    },
    { 
      id: 'travel-insurance', 
      title: 'Travel Insurance', 
      icon: GlobeAltIcon, 
      emoji: '✈️', 
      level: 'intermediate',
      duration: '10 min read',
      difficulty: 'Intermediate',
      description: 'Coverage for domestic and international travel'
    },
    { 
      id: 'business-insurance', 
      title: 'Business & Professional Insurance', 
      icon: DocumentTextIcon, 
      emoji: '💼', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Protecting business assets and professional liability'
    },
    // Advanced Level
    { 
      id: 'risk-assessment', 
      title: 'Risk Assessment & Management', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚖️', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'Systematic approach to identifying and managing risks'
    },
    { 
      id: 'claims-process', 
      title: 'Claims Process & Documentation', 
      icon: DocumentTextIcon, 
      emoji: '📋', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'Efficient claim filing and settlement procedures'
    },
    { 
      id: 'advanced-products', 
      title: 'Advanced Insurance Products', 
      icon: SparklesIcon, 
      emoji: '💎', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Specialized insurance for unique needs and situations'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Implementation', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '10 min read',
      difficulty: 'All Levels',
      description: 'Creating your comprehensive insurance portfolio'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '92%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.8', icon: StarIcon },
    { label: 'Active Learners', value: '18K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Previous: Digital banking and payments'
    },
    { 
      name: 'Investment & Wealth Building', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Next: Build wealth through investments'
    },
    { 
      name: 'Tax & Government Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Intermediate: Tax planning and schemes'
    },
    { 
      name: 'Business & Corporate Finance', 
      path: '/learn/corporate-finance', 
      icon: '🏢',
      description: 'Advanced: Business financial management'
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
    <>
      <Helmet>
        <title>Insurance & Risk Management - NeoCred</title>
        <meta name="description" content="Master insurance planning and risk management with comprehensive coverage of life, health, motor, property, and business insurance strategies." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
          <motion.div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
            style={{ width: `${readingProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${readingProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <Link 
              to="/learn"
              className="inline-flex items-center text-green-200 hover:text-white transition-colors group mb-4"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Learn
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Insurance & Risk Shield</h1>
                <p className="text-green-100">Pillar 3 of 8 • Complete Protection Strategy • 12 Sections • 2025 Updated</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                {previousPillar && (
                  <Link
                    to={previousPillar.path}
                    className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                  >
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Previous: {previousPillar.title}
                  </Link>
                )}
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
                  <ShieldCheckIcon className="h-8 w-8" />
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
            {/* Sidebar */}
            <div className="w-full lg:w-80 mb-8 lg:mb-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit lg:sticky lg:top-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white flex items-center">
                    <BookmarkIcon className="h-5 w-5 mr-2" />
                    Contents
                  </h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
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
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-l-4 border-green-500 shadow-md' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          isActive ? 'bg-green-200 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-600'
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
                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200"
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
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                        <AcademicCapIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Insurance</h2>
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
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                        <LightBulbIcon className="h-6 w-6 mr-2" />
                        What is Insurance?
                      </h3>
                      <p className="text-green-800 dark:text-green-200 leading-relaxed">
                        Insurance is a financial contract that provides protection against potential future losses in exchange for regular premium payments. It transfers the risk of significant financial loss from individuals to insurance companies, ensuring financial security and peace of mind for policyholders and their families.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Core Principles</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Risk Pooling</h4>
                              <p className="text-sm text-blue-600 dark:text-blue-400">Many people contribute premiums to cover losses of few</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Risk Transfer</h4>
                              <p className="text-sm text-blue-600 dark:text-blue-400">Financial risk shifts from individual to insurance company</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Indemnity</h4>
                              <p className="text-sm text-blue-600 dark:text-blue-400">Compensation for actual loss, not profit generation</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Utmost Good Faith</h4>
                              <p className="text-sm text-blue-600 dark:text-blue-400">Honest disclosure of all material facts</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Benefits of Insurance</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Financial Security</h4>
                              <p className="text-sm text-purple-600 dark:text-purple-400">Protection against unexpected financial losses</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Peace of Mind</h4>
                              <p className="text-sm text-purple-600 dark:text-purple-400">Reduced anxiety about potential future risks</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Tax Benefits</h4>
                              <p className="text-sm text-purple-600 dark:text-purple-400">Deductions under various sections of Income Tax Act</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Wealth Preservation</h4>
                              <p className="text-sm text-purple-600 dark:text-purple-400">Protects accumulated wealth from unforeseen events</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-green-700 dark:text-green-300">
                        Insurance is not an expense but an investment in financial security. It ensures that unexpected events don't derail your financial goals and provides a safety net for your family's future. Start with basic coverage and gradually build a comprehensive insurance portfolio.
                      </p>
                    </div>
                    
                    <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => navigateToSection('types-overview')}
                        className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Next: Types of Insurance
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Types Overview Section */}
              {activeSection === 'types-overview' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                        <ShieldCheckIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Insurance Overview</h2>
                        <p className="text-gray-600 dark:text-gray-400">Foundation • 12 min read • Beginner</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('types-overview')} className={`p-2 rounded-full transition-colors ${bookmarks.has('types-overview') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('types-overview') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('types-overview')} className={`p-2 rounded-full transition-colors ${completedSections.has('types-overview') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                        <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Life Insurance</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Term Life Insurance</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Pure protection, lowest cost, highest coverage</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Whole Life Insurance</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Lifelong coverage with cash value component</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">ULIPs</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Unit Linked Insurance Plans with investment</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Health Insurance</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Individual Health Plans</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Personal medical coverage for individuals</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Family Floater</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Shared sum insured for entire family</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Critical Illness</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Lump sum for specific serious diseases</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">General Insurance</h3>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Motor Insurance (Car, Bike)</li>
                          <li>• Home Insurance</li>
                          <li>• Travel Insurance</li>
                          <li>• Fire Insurance</li>
                          <li>• Marine Insurance</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Business Insurance</h3>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• Professional Indemnity</li>
                          <li>• Public Liability</li>
                          <li>• Directors & Officers</li>
                          <li>• Cyber Insurance</li>
                          <li>• Key Person Insurance</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                        <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Specialized Insurance</h3>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Crop Insurance</li>
                          <li>• Livestock Insurance</li>
                          <li>• Aviation Insurance</li>
                          <li>• Sports Insurance</li>
                          <li>• Event Insurance</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-blue-700 dark:text-blue-300">Different types of insurance serve different purposes. Start with essential coverage (life and health) and gradually add other types based on your lifestyle, assets, and risk exposure.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('introduction')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Introduction
                      </button>
                      <button onClick={() => navigateToSection('life-insurance')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Life Insurance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Life Insurance Section */}
              {activeSection === 'life-insurance' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                        <HeartIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Life Insurance Planning</h2>
                        <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('life-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('life-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('life-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('life-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('life-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-8 border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">Coverage Calculation Formula (2025)</h3>
                      <p className="text-red-800 dark:text-red-200 mb-4">Life Insurance Coverage = (Annual Income × 10-15) + Outstanding Debts + Future Goals - Existing Savings</p>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Example Calculation</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">Annual Income: ₹8L, Debts: ₹25L, Goals: ₹50L, Savings: ₹15L</p>
                        <p className="text-sm text-red-600 dark:text-red-400">Coverage = (8L × 12) + 25L + 50L - 15L = ₹1.56 Crore</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Term Insurance (Recommended)</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-green-700 dark:text-green-300">Pure Protection</h4>
                              <p className="text-sm text-green-600 dark:text-green-400">No investment component, maximum coverage at lowest cost</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-green-700 dark:text-green-300">High Coverage</h4>
                              <p className="text-sm text-green-600 dark:text-green-400">₹1 Crore coverage for ₹15,000-20,000 annual premium</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-green-700 dark:text-green-300">Flexible Terms</h4>
                              <p className="text-sm text-green-600 dark:text-green-400">10-40 year terms, renewable options available</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                        <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">2025 Premium Rates (₹1 Cr Coverage)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Age 25-30 (Male)</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">₹12,000-15,000 annually</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Age 35-40 (Male)</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">₹18,000-25,000 annually</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Age 45-50 (Male)</h4>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">₹35,000-50,000 annually</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-red-700 dark:text-red-300">Buy term insurance early when premiums are low. Avoid mixing insurance with investment - keep them separate for better returns and lower costs.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('types-overview')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Types Overview
                      </button>
                      <button onClick={() => navigateToSection('health-insurance')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Health Insurance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Health Insurance Section */}
              {activeSection === 'health-insurance' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
                        <HeartIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Health Insurance Essentials</h2>
                        <p className="text-gray-600 dark:text-gray-400">Foundation • 18 min read • Beginner</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('health-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('health-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('health-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('health-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('health-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">2025 Healthcare Cost Reality</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Average Treatment Costs</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Heart Surgery: ₹3-8 Lakhs</li>
                            <li>• Cancer Treatment: ₹5-15 Lakhs</li>
                            <li>• Kidney Transplant: ₹8-12 Lakhs</li>
                            <li>• ICU per day: ₹8,000-25,000</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Recommended Coverage</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Individual: ₹5-10 Lakhs</li>
                            <li>• Family: ₹10-20 Lakhs</li>
                            <li>• Senior Citizens: ₹15-25 Lakhs</li>
                            <li>• Top-up: Additional ₹50L-1Cr</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Individual Plans</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Basic Coverage</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">₹3-5L coverage, ₹8,000-12,000 premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Comprehensive</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">₹10-15L coverage, ₹15,000-25,000 premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Premium Plans</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">₹25L+ coverage, ₹35,000+ premium</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Family Floater</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Shared Sum Insured</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">All family members share total coverage</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Cost Effective</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Lower premium than individual policies</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Age Consideration</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Premium based on eldest member's age</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                        <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Key Features (2025)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Cashless Treatment</h4>
                            <p className="text-sm text-orange-600 dark:text-orange-400">15,000+ network hospitals</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">No Claim Bonus</h4>
                            <p className="text-sm text-orange-600 dark:text-orange-400">5-50% increase in sum insured</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Pre & Post Hospitalization</h4>
                            <p className="text-sm text-orange-600 dark:text-orange-400">30-60 days before, 60-180 days after</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-blue-700 dark:text-blue-300">Health insurance is essential given rising medical costs. Buy early to avoid waiting periods and get lower premiums. Consider top-up plans for higher coverage at lower cost.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('life-insurance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Life Insurance
                      </button>
                      <button onClick={() => navigateToSection('motor-insurance')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Motor Insurance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Motor Insurance Section */}
              {activeSection === 'motor-insurance' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                        <TruckIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Motor & Vehicle Insurance</h2>
                        <p className="text-gray-600 dark:text-gray-400">Intermediate • 12 min read • Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('motor-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('motor-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('motor-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('motor-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('motor-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl mb-8 border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">Motor Insurance Mandatory in India</h3>
                      <p className="text-orange-800 dark:text-orange-200 mb-4">Third-party insurance is legally mandatory under Motor Vehicles Act. Driving without insurance can result in ₹2,000 fine and/or 3 months imprisonment.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Third-Party Coverage (2025)</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Death: ₹15 Lakhs</li>
                            <li>• Permanent Disability: ₹7.5 Lakhs</li>
                            <li>• Property Damage: ₹1 Lakh</li>
                            <li>• Medical Expenses: ₹50,000</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Comprehensive Benefits</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Own Damage Coverage</li>
                            <li>• Theft Protection</li>
                            <li>• Natural Calamities</li>
                            <li>• Personal Accident Cover</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Car Insurance (2025 Rates)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Hatchback (₹5-8L)</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Third-party: ₹2,094, Comprehensive: ₹15,000-25,000</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Sedan (₹8-15L)</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Third-party: ₹2,094, Comprehensive: ₹25,000-40,000</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">SUV (₹15L+)</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Third-party: ₹2,094, Comprehensive: ₹40,000-80,000</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Two-Wheeler Insurance</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Scooter (₹50k-1L)</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Third-party: ₹482, Comprehensive: ₹2,500-4,000</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Motorcycle (₹1-3L)</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Third-party: ₹482-1,730, Comprehensive: ₹4,000-8,000</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Premium Bike (₹3L+)</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Third-party: ₹1,730, Comprehensive: ₹8,000-15,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Add-on Covers (2025)</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Essential Add-ons</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Zero Depreciation</li>
                            <li>• Engine Protection</li>
                            <li>• Roadside Assistance</li>
                            <li>• Return to Invoice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Convenience Add-ons</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Key Replacement</li>
                            <li>• Tyre Protection</li>
                            <li>• Emergency Transport</li>
                            <li>• Daily Allowance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Premium Add-ons</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Consumables Cover</li>
                            <li>• NCB Protection</li>
                            <li>• Passenger Cover</li>
                            <li>• Vintage Car Cover</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-orange-700 dark:text-orange-300">Comprehensive motor insurance is worth the extra cost for valuable vehicles. Choose add-ons based on vehicle age, usage, and local conditions. Maintain claim-free record for NCB benefits.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('health-insurance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Health Insurance
                      </button>
                      <button onClick={() => navigateToSection('property-insurance')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Property Insurance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Property Insurance Section */}
              {activeSection === 'property-insurance' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                        <HomeIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Property & Home Insurance</h2>
                        <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('property-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('property-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('property-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('property-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('property-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8 border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Home Insurance Coverage (2025)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Structure Coverage</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Fire and Allied Perils</li>
                            <li>• Earthquake and Flood</li>
                            <li>• Burglary and Theft</li>
                            <li>• Riots and Strikes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Contents Coverage</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Furniture and Appliances</li>
                            <li>• Electronics and Gadgets</li>
                            <li>• Jewelry and Valuables</li>
                            <li>• Personal Belongings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Premium Calculation</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">₹50L Property</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Annual Premium: ₹8,000-12,000</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">₹1Cr Property</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Annual Premium: ₹15,000-25,000</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">₹2Cr+ Property</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Annual Premium: ₹30,000-50,000</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Liability Coverage</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Public Liability</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">₹10-50L coverage for third-party injuries</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Domestic Help</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">₹2-5L coverage for household staff</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Legal Expenses</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">₹1-3L for legal proceedings</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Additional Benefits</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Temporary Accommodation</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">₹5,000-10,000 per month</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Loss of Rent</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Up to 12 months rental income</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Emergency Services</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">24/7 helpline and assistance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-indigo-700 dark:text-indigo-300">Home insurance protects your largest asset. Ensure adequate coverage for both structure and contents. Consider liability coverage for comprehensive protection against lawsuits.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('motor-insurance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Motor Insurance
                      </button>
                      <button onClick={() => navigateToSection('travel-insurance')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Travel Insurance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Travel Insurance Section */}
              {activeSection === 'travel-insurance' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                        <GlobeAltIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Travel Insurance</h2>
                        <p className="text-gray-600 dark:text-gray-400">Intermediate • 10 min read • Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('travel-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('travel-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('travel-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('travel-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('travel-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Domestic Travel (2025)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Basic Coverage</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">₹1-2L medical, ₹200-500 premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Comprehensive</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">₹5L medical + trip cancellation, ₹800-1,500</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Adventure Sports</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">₹10L+ coverage, ₹2,000-5,000 premium</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">International Travel</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Asia Coverage</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">$50k medical, ₹2,000-4,000 premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Europe/USA</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">$100k+ medical, ₹5,000-15,000 premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Worldwide</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">$500k+ medical, ₹10,000-25,000 premium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-700 mb-6">
                      <h3 className="text-xl font-bold text-cyan-800 dark:text-cyan-200 mb-4">Essential Coverage Areas</h3>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Medical</h4>
                          <ul className="text-sm text-cyan-600 dark:text-cyan-400 space-y-1">
                            <li>• Emergency Treatment</li>
                            <li>• Hospitalization</li>
                            <li>• Medical Evacuation</li>
                            <li>• Repatriation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Trip Protection</h4>
                          <ul className="text-sm text-cyan-600 dark:text-cyan-400 space-y-1">
                            <li>• Trip Cancellation</li>
                            <li>• Trip Interruption</li>
                            <li>• Flight Delays</li>
                            <li>• Missed Connections</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Baggage</h4>
                          <ul className="text-sm text-cyan-600 dark:text-cyan-400 space-y-1">
                            <li>• Lost Luggage</li>
                            <li>• Delayed Baggage</li>
                            <li>• Personal Effects</li>
                            <li>• Passport Loss</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Liability</h4>
                          <ul className="text-sm text-cyan-600 dark:text-cyan-400 space-y-1">
                            <li>• Personal Liability</li>
                            <li>• Legal Expenses</li>
                            <li>• Accidental Damage</li>
                            <li>• Third-party Claims</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-cyan-700 dark:text-cyan-300">Travel insurance is essential for international trips and recommended for domestic travel. Choose coverage based on destination, activities, and trip value. Buy before departure for full protection.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('property-insurance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Property Insurance
                      </button>
                      <button onClick={() => navigateToSection('business-insurance')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Business Insurance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Business Insurance Section */}
              {activeSection === 'business-insurance' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                        <DocumentTextIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Business & Professional Insurance</h2>
                        <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('business-insurance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('business-insurance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('business-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('business-insurance')} className={`p-2 rounded-full transition-colors ${completedSections.has('business-insurance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Professional Indemnity (2025)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Doctors/Lawyers</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">₹1-5Cr coverage, ₹50k-2L premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">IT Professionals</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">₹50L-2Cr coverage, ₹25k-1L premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Consultants</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">₹25L-1Cr coverage, ₹15k-50k premium</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Cyber Insurance</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Small Business</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">₹25L-50L coverage, ₹10k-25k premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Medium Enterprise</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">₹1-5Cr coverage, ₹50k-2L premium</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Large Corporation</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">₹10Cr+ coverage, ₹5L+ premium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Essential Business Coverage</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Property Insurance</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Office/Factory Building</li>
                            <li>• Equipment & Machinery</li>
                            <li>• Inventory & Stock</li>
                            <li>• Business Interruption</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Liability Coverage</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Public Liability</li>
                            <li>• Product Liability</li>
                            <li>• Employer Liability</li>
                            <li>• Directors & Officers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Specialized Covers</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Key Person Insurance</li>
                            <li>• Credit Insurance</li>
                            <li>• Marine Insurance</li>
                            <li>• Group Health Plans</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-purple-700 dark:text-purple-300">Business insurance protects against operational risks and legal liabilities. Professional indemnity and cyber insurance are increasingly important in the digital age. Tailor coverage to your industry risks.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('travel-insurance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Travel Insurance
                      </button>
                      <button onClick={() => navigateToSection('risk-assessment')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Risk Assessment<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Risk Assessment Section */}
              {activeSection === 'risk-assessment' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                        <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risk Assessment & Management</h2>
                        <p className="text-gray-600 dark:text-gray-400">Advanced • 20 min read • Advanced</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('risk-assessment')} className={`p-2 rounded-full transition-colors ${bookmarks.has('risk-assessment') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('risk-assessment') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('risk-assessment')} className={`p-2 rounded-full transition-colors ${completedSections.has('risk-assessment') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">Risk Assessment Framework</h3>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🔍</div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Identify</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">List all potential risks</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">📊</div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Analyze</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Assess probability & impact</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">🎯</div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Prioritize</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Rank by severity</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">🛡️</div>
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Mitigate</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Implement solutions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                        <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Personal Risk Categories</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Health Risks</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Illness, accidents, disability, aging</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Financial Risks</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Job loss, market crashes, inflation</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Property Risks</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Fire, theft, natural disasters</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Liability Risks</h4>
                            <p className="text-sm text-red-600 dark:text-red-400">Legal claims, third-party damages</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Risk Management Strategies</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Risk Avoidance</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Eliminate activities that create risk</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Risk Reduction</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Minimize probability or impact</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Risk Transfer</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Use insurance or contracts</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Risk Retention</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Self-insure for manageable risks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-yellow-700 dark:text-yellow-300">Systematic risk assessment helps prioritize insurance needs and optimize coverage. Not all risks need insurance - some can be avoided, reduced, or retained based on cost-benefit analysis.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('business-insurance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Business Insurance
                      </button>
                      <button onClick={() => navigateToSection('claims-process')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Claims Process<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Claims Process Section */}
              {activeSection === 'claims-process' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                        <DocumentTextIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Claims Process & Documentation</h2>
                        <p className="text-gray-600 dark:text-gray-400">Advanced • 14 min read • Advanced</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('claims-process')} className={`p-2 rounded-full transition-colors ${bookmarks.has('claims-process') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('claims-process') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('claims-process')} className={`p-2 rounded-full transition-colors ${completedSections.has('claims-process') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl mb-8 border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-3">Claims Settlement Process (2025)</h3>
                      <div className="grid md:grid-cols-5 gap-4">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📞</div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Intimation</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">24-48 hours</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">📄</div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Documentation</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Submit forms</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">🔍</div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Investigation</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Surveyor visit</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">⚖️</div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Assessment</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Damage evaluation</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">💰</div>
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Settlement</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Payment release</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Essential Documents</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Health Claims</h4>
                            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                              <li>• Claim form & policy copy</li>
                              <li>• Medical reports & bills</li>
                              <li>• Discharge summary</li>
                              <li>• Investigation reports</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Motor Claims</h4>
                            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                              <li>• FIR & police report</li>
                              <li>• Driving license & RC</li>
                              <li>• Repair estimates</li>
                              <li>• Photos of damage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Claim Settlement Ratios (2025)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Top Insurers</h4>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                              <li>• LIC: 98.74%</li>
                              <li>• HDFC Life: 98.66%</li>
                              <li>• ICICI Prudential: 97.90%</li>
                              <li>• SBI Life: 96.30%</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Health Insurers</h4>
                            <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                              <li>• Star Health: 92.5%</li>
                              <li>• HDFC ERGO: 89.8%</li>
                              <li>• ICICI Lombard: 88.2%</li>
                              <li>• Bajaj Allianz: 87.1%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-teal-700 dark:text-teal-300">Prompt intimation and proper documentation are crucial for smooth claim settlement. Choose insurers with high claim settlement ratios and good customer service records.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('risk-assessment')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Risk Assessment
                      </button>
                      <button onClick={() => navigateToSection('advanced-products')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Advanced Products<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Advanced Products Section */}
              {activeSection === 'advanced-products' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                        <SparklesIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Advanced Insurance Products</h2>
                        <p className="text-gray-600 dark:text-gray-400">Advanced • 18 min read • Advanced</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('advanced-products')} className={`p-2 rounded-full transition-colors ${bookmarks.has('advanced-products') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('advanced-products') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('advanced-products')} className={`p-2 rounded-full transition-colors ${completedSections.has('advanced-products') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700">
                        <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-4">Parametric Insurance (2025)</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Weather Insurance</h4>
                            <p className="text-sm text-pink-600 dark:text-pink-400">Automatic payouts based on weather data</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Flight Delay Insurance</h4>
                            <p className="text-sm text-pink-600 dark:text-pink-400">Instant compensation for delays</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Earthquake Insurance</h4>
                            <p className="text-sm text-pink-600 dark:text-pink-400">Payouts based on seismic intensity</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Digital-First Products</h3>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Usage-Based Insurance</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Premiums based on actual usage/behavior</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Micro-Insurance</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Small-ticket, affordable coverage</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">On-Demand Insurance</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Activate/deactivate coverage as needed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700 mb-6">
                      <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-4">Emerging Insurance Trends (2025)</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Technology Integration</h4>
                          <ul className="text-sm text-pink-600 dark:text-pink-400 space-y-1">
                            <li>• AI-powered underwriting</li>
                            <li>• IoT-based risk monitoring</li>
                            <li>• Blockchain for claims</li>
                            <li>• Telematics in motor insurance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">New Risk Categories</h4>
                          <ul className="text-sm text-pink-600 dark:text-pink-400 space-y-1">
                            <li>• Climate change risks</li>
                            <li>• Cyber security threats</li>
                            <li>• Pandemic coverage</li>
                            <li>• Mental health insurance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Customer Experience</h4>
                          <ul className="text-sm text-pink-600 dark:text-pink-400 space-y-1">
                            <li>• Instant policy issuance</li>
                            <li>• Self-service portals</li>
                            <li>• Video-based claims</li>
                            <li>• Personalized products</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                      <p className="text-purple-700 dark:text-purple-300">Advanced insurance products offer more precise risk coverage and better customer experience. Stay informed about emerging products that may better suit your evolving needs and lifestyle.</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => navigateToSection('claims-process')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Claims Process
                      </button>
                      <button onClick={() => navigateToSection('conclusion')} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Next: Conclusion<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                        <CheckCircleIcon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Implementation</h2>
                        <p className="text-gray-600 dark:text-gray-400">Resources • 10 min read • All Levels</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => toggleBookmark('conclusion')} className={`p-2 rounded-full transition-colors ${bookmarks.has('conclusion') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                        {bookmarks.has('conclusion') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                      </button>
                      <button onClick={() => markSectionComplete('conclusion')} className={`p-2 rounded-full transition-colors ${completedSections.has('conclusion') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                        <CheckCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Your Insurance Action Plan (2025)</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Priority 1: Essential Coverage</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Term Life Insurance (10-15x income)</li>
                            <li>• Health Insurance (₹10-20L family)</li>
                            <li>• Motor Insurance (if applicable)</li>
                            <li>• Employer group insurance review</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Priority 2: Enhanced Protection</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Critical illness coverage</li>
                            <li>• Home insurance (if homeowner)</li>
                            <li>• Travel insurance (frequent travelers)</li>
                            <li>• Top-up health plans</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Priority 3: Specialized Needs</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Professional indemnity</li>
                            <li>• Cyber insurance</li>
                            <li>• Business insurance</li>
                            <li>• International coverage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Insurance Portfolio Review Checklist</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Annual Review Items</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Coverage adequacy vs current needs</li>
                            <li>• Premium payment optimization</li>
                            <li>• Beneficiary updates</li>
                            <li>• Policy terms and conditions</li>
                            <li>• Claim settlement ratio of insurers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Life Event Triggers</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Marriage: Add spouse to health plan</li>
                            <li>• Children: Increase life coverage</li>
                            <li>• Home purchase: Add home insurance</li>
                            <li>• Job change: Review group benefits</li>
                            <li>• Retirement: Adjust coverage needs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🎯 Final Message</h4>
                      <p className="text-green-700 dark:text-green-300 leading-relaxed">
                        Insurance is your financial safety net. Start with essential coverage and build systematically. Remember: the best time to buy insurance is when you don't need it. Regular reviews ensure your coverage evolves with your life.
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Link to="/learn" className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Back to Learn Hub
                      </Link>
                      {nextPillar && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                          <Link
                            to={nextPillar.path}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            <span className="mr-2">{nextPillar.icon}</span>
                            {nextPillar.title}
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tools Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center">
                        <CalculatorIcon className="h-6 w-6 mr-3" />
                        Insurance Calculators & Tools
                      </h3>
                      <p className="text-green-100">Calculate your insurance needs with our specialized tools</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'Life Insurance', path: '/calculators/life-insurance', icon: '❤️', desc: 'Calculate coverage needs' },
                      { name: 'Health Insurance', path: '/calculators/health-insurance', icon: '🏥', desc: 'Medical coverage planning' },
                      { name: 'Motor Insurance', path: '/calculators/motor-insurance', icon: '🚗', desc: 'Vehicle insurance quotes' },
                      { name: 'Home Insurance', path: '/calculators/home-insurance', icon: '🏠', desc: 'Property protection' },
                      { name: 'Travel Insurance', path: '/calculators/travel-insurance', icon: '✈️', desc: 'Trip coverage calculator' },
                      { name: 'Term Insurance', path: '/calculators/term-insurance', icon: '🛡️', desc: 'Pure life coverage' },
                      { name: 'Premium Calculator', path: '/calculators/insurance-premium', icon: '💰', desc: 'Compare premiums' },
                      { name: 'Claim Tracker', path: '/calculators/insurance-claim', icon: '📋', desc: 'Track claim status' }
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
                          <p className="text-xs text-green-100 opacity-90">{tool.desc}</p>
                          <div className="mt-2 flex items-center text-xs text-green-200">
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
    </>
  );
}

export default Insurance;