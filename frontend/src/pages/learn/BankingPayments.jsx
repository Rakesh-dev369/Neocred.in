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
  BuildingLibraryIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CloudIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function BankingPayments() {
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
    // Beginner Level
    { 
      id: 'introduction', 
      title: 'Introduction to Banking & Payments', 
      icon: BuildingLibraryIcon, 
      emoji: '🏦', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding the backbone of modern financial systems'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Banking & Payments', 
      icon: ChartBarIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of banking and payment infrastructure'
    },
    { 
      id: 'types-banking', 
      title: 'Types of Banking', 
      icon: BanknotesIcon, 
      emoji: '🏛️', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Different banking institutions and their services'
    },
    { 
      id: 'payment-systems', 
      title: 'Payment Systems and Methods', 
      icon: CreditCardIcon, 
      emoji: '💳', 
      level: 'foundation',
      duration: '18 min read',
      difficulty: 'Beginner',
      description: 'Traditional and modern payment mechanisms'
    },
    // Intermediate Level
    { 
      id: 'deposit-lending', 
      title: 'Deposit and Lending Services', 
      icon: CurrencyRupeeIcon, 
      emoji: '💰', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Banking products for saving and borrowing'
    },
    { 
      id: 'digital-banking', 
      title: 'Digital Banking and Fintech', 
      icon: DevicePhoneMobileIcon, 
      emoji: '📱', 
      level: 'intermediate',
      duration: '20 min read',
      difficulty: 'Intermediate',
      description: 'Modern digital banking and fintech innovations'
    },
    { 
      id: 'clearing-settlement', 
      title: 'Clearing, Settlement & Infrastructure', 
      icon: CloudIcon, 
      emoji: '⚡', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Backend systems powering financial transactions'
    },
    { 
      id: 'innovations', 
      title: 'Innovations in Payments', 
      icon: SparklesIcon, 
      emoji: '🚀', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Cutting-edge payment technologies and trends'
    },
    // Advanced Level
    { 
      id: 'regulation', 
      title: 'Regulation and Consumer Protection', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Regulatory framework and consumer safeguards'
    },
    { 
      id: 'global-perspectives', 
      title: 'Global Perspectives in Banking', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'International banking systems and practices'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Banking & Payments', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'Current challenges and future solutions'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Future Outlook', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '10 min read',
      difficulty: 'All Levels',
      description: 'Key insights and future of banking & payments'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '96%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.8', icon: StarIcon },
    { label: 'Active Learners', value: '30K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Personal Finance', 
      path: '/learn/personal-finance', 
      icon: '💰',
      description: 'Individual financial management'
    },
    { 
      name: 'Investments & Capital Markets', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Investment strategies and markets'
    },
    { 
      name: 'Insurance & Risk Management', 
      path: '/learn/insurance', 
      icon: '🛡️',
      description: 'Risk protection strategies'
    },
    { 
      name: 'Alternative Finance & Emerging Tech', 
      path: '/learn/alternative-finance', 
      icon: '🚀',
      description: 'Fintech and emerging technologies'
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Banking & Payments</h1>
              <p className="text-blue-100">Pillar 2 of 8 • Financial Infrastructure • 12 Sections • 2025 Updated</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/insurance"
                className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Next: Insurance & Risk Management
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <BuildingLibraryIcon className="h-8 w-8" />
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
                      <BuildingLibraryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Banking & Payments</h2>
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
                      What is Banking & Payments?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      Banking and payments represent the backbone of modern financial systems, enabling individuals, businesses, and governments to store money, access credit, and transfer funds securely. This sector covers a wide spectrum of activities, from traditional brick-and-mortar banking to cutting-edge digital and decentralized payment systems.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Why Banking & Payments Matter
                      </h4>
                      <ul className="space-y-3 text-green-700 dark:text-green-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Economic Growth:</strong> Efficient financial infrastructure drives economic development</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Financial Inclusion:</strong> Access to banking services for all segments of society</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Global Trade:</strong> Facilitates international commerce and cross-border transactions</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Security:</strong> Safe storage and transfer of funds with regulatory protection</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Indian Banking Context (2025)
                      </h4>
                      <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>UPI Revolution:</strong> ₹100+ lakh crores monthly transaction volume</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Digital Banking:</strong> 500M+ mobile banking users</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Financial Inclusion:</strong> 80% population with bank accounts</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Fintech Growth:</strong> World's 3rd largest fintech ecosystem</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Banking and payments form the circulatory system of the economy, enabling money to flow efficiently between individuals, businesses, and institutions. Understanding this ecosystem is crucial for navigating modern financial life and leveraging opportunities in the digital economy.
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Banking & Payments</h2>
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
                    The banking and payments ecosystem consists of interconnected components that work together to facilitate financial transactions, store value, and provide credit. Understanding these core elements is essential for navigating the modern financial landscape.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 Banking Institutions</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Commercial Banks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Full-service banks offering deposits, loans, and payment services</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Cooperative Banks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Member-owned institutions serving local communities</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Development Banks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Long-term financing for infrastructure and industry</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Central Banks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Monetary policy, regulation, and currency management</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💳 Payment Systems</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Traditional Cash</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Physical currency for immediate transactions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Card Networks</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Visa, Mastercard, RuPay for electronic payments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Electronic Transfers</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">NEFT, RTGS, IMPS for bank-to-bank transfers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Digital Wallets</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">UPI, mobile wallets for instant payments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💰 Deposit & Credit Services</h3>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• Savings & Current Accounts</li>
                        <li>• Fixed & Recurring Deposits</li>
                        <li>• Personal & Business Loans</li>
                        <li>• Credit Cards & Overdrafts</li>
                        <li>• Trade Finance Solutions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📱 Digital Banking</h3>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• Mobile Banking Apps</li>
                        <li>• Internet Banking Portals</li>
                        <li>• Neobanks & Digital-only Banks</li>
                        <li>• Banking APIs & Open Banking</li>
                        <li>• AI-powered Services</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">⚡ Clearing & Settlement</h3>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• Real-time Payment Systems</li>
                        <li>• Automated Clearing Houses</li>
                        <li>• SWIFT Network</li>
                        <li>• Payment Gateways</li>
                        <li>• Blockchain Infrastructure</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🛡️ Regulatory Oversight</h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">Regulatory bodies ensure consumer protection, compliance, and systemic stability across the banking and payments ecosystem.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Functions</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Consumer protection and dispute resolution</li>
                          <li>• Anti-money laundering (AML) compliance</li>
                          <li>• Data security and privacy standards</li>
                          <li>• Systemic risk monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Indian Regulators</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• RBI (Reserve Bank of India)</li>
                          <li>• NPCI (National Payments Corporation)</li>
                          <li>• SEBI (Securities regulator)</li>
                          <li>• IRDAI (Insurance regulator)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      These six core components work in harmony to create a robust financial ecosystem. Banking institutions provide the foundation, payment systems enable transactions, digital platforms enhance accessibility, while regulatory oversight ensures stability and consumer protection.
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
                      onClick={() => navigateToSection('types-banking')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Types of Banking
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Banking Section */}
            {activeSection === 'types-banking' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="types-banking"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Banking</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('types-banking')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('types-banking') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('types-banking') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('types-banking')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('types-banking')
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
                    Banking institutions serve different segments of the economy with specialized services. Understanding the various types of banks helps in choosing the right financial partner for specific needs, whether personal, business, or institutional.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 Retail Banking</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Services designed for individual consumers and small businesses.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Core Services</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Savings and current accounts</li>
                            <li>• Personal loans and mortgages</li>
                            <li>• Debit and credit cards</li>
                            <li>• Fixed deposits and investments</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Examples in India</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• HDFC Bank, ICICI Bank</li>
                            <li>• State Bank of India (SBI)</li>
                            <li>• Axis Bank, Kotak Mahindra</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🏢 Corporate Banking</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Customized financial solutions for large businesses and corporations.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Specialized Services</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Working capital financing</li>
                            <li>• Trade finance and letters of credit</li>
                            <li>• Cash management solutions</li>
                            <li>• Foreign exchange services</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Key Features</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Relationship managers</li>
                            <li>• Customized credit facilities</li>
                            <li>• Treasury and risk management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💼 Investment Banking</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-3">Capital market services and advisory for large corporations.</p>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• IPO underwriting</li>
                        <li>• M&A advisory</li>
                        <li>• Debt capital markets</li>
                        <li>• Equity research</li>
                        <li>• Trading services</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏦 Central Banking</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-3">Monetary policy and financial system oversight.</p>
                      <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                        <li>• Currency issuance</li>
                        <li>• Interest rate policy</li>
                        <li>• Banking regulation</li>
                        <li>• Foreign exchange reserves</li>
                        <li>• Financial stability</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🏗️ Development Banks</h3>
                      <p className="text-teal-700 dark:text-teal-300 mb-3">Long-term financing for infrastructure and development.</p>
                      <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                        <li>• Infrastructure projects</li>
                        <li>• Agricultural financing</li>
                        <li>• Industrial development</li>
                        <li>• Export-import finance</li>
                        <li>• Rural development</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Cooperative & Regional Banks</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Community-focused banking institutions serving local needs.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Cooperative Banks</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Member-owned institutions</li>
                          <li>• Local community focus</li>
                          <li>• Agricultural and rural banking</li>
                          <li>• Lower interest rates for members</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Regional Rural Banks</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Government-sponsored institutions</li>
                          <li>• Rural and semi-urban areas</li>
                          <li>• Priority sector lending</li>
                          <li>• Financial inclusion focus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Different types of banks serve specific market segments and needs. Retail banks focus on individuals, corporate banks serve businesses, investment banks handle capital markets, while central banks manage monetary policy. Choose the right banking partner based on your specific requirements.
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
                      onClick={() => navigateToSection('payment-systems')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Payment Systems
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Payment Systems Section */}
            {activeSection === 'payment-systems' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="payment-systems"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <CreditCardIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Payment Systems and Methods</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 18 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('payment-systems')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('payment-systems') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('payment-systems') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('payment-systems')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('payment-systems')
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
                    Payment systems form the infrastructure that enables money to move between parties. From traditional cash transactions to cutting-edge digital payments, understanding these methods is crucial for navigating the modern financial landscape.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💵 Traditional Methods</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Cash Payments</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Immediate settlement, no intermediaries</li>
                            <li>• Anonymous transactions</li>
                            <li>• No transaction fees</li>
                            <li>• Limited to face-to-face transactions</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Cheques</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Written payment instructions</li>
                            <li>• 2-3 day clearing cycle</li>
                            <li>• Audit trail and proof of payment</li>
                            <li>• Risk of bouncing due to insufficient funds</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Demand Drafts</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Bank-guaranteed payment instrument</li>
                            <li>• Prepaid, no bouncing risk</li>
                            <li>• Used for large transactions</li>
                            <li>• Higher fees compared to other methods</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">💳 Card Payments</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Debit Cards</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Direct deduction from bank account</li>
                            <li>• Real-time transaction processing</li>
                            <li>• PIN or contactless authentication</li>
                            <li>• Daily transaction limits</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Credit Cards</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Revolving credit facility</li>
                            <li>• Interest-free period (20-50 days)</li>
                            <li>• Rewards and cashback programs</li>
                            <li>• High interest rates on outstanding balances</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Prepaid Cards</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Preloaded with specific amount</li>
                            <li>• No bank account required</li>
                            <li>• Gift cards and travel cards</li>
                            <li>• Limited to loaded amount</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Electronic Transfers (India)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">NEFT</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">National Electronic Funds Transfer</p>
                        <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Batch processing (hourly settlements)</li>
                          <li>• ₹1 to ₹10 lakh per transaction</li>
                          <li>• Available 24x7 including holidays</li>
                          <li>• Low cost for retail transfers</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">RTGS</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Real Time Gross Settlement</p>
                        <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Real-time individual transaction processing</li>
                          <li>• Minimum ₹2 lakh per transaction</li>
                          <li>• Immediate settlement</li>
                          <li>• Higher fees for large value transfers</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">IMPS</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Immediate Payment Service</p>
                        <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Instant 24x7 fund transfer</li>
                          <li>• Up to ₹5 lakh per transaction</li>
                          <li>• Mobile and internet banking</li>
                          <li>• Moderate fees for instant transfers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📱 Digital & Mobile Payments</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">UPI (Unified Payments Interface)</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Real-time payment system enabling instant bank-to-bank transfers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Mobile Wallets</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Paytm, PhonePe, Google Pay for digital transactions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">QR Code Payments</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Scan and pay using smartphone cameras</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Contactless Payments</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">NFC-enabled cards and mobile payments</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🌍 Cross-Border Payments</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">SWIFT Network</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Global messaging system for international wire transfers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Remittances</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Money transfers to family abroad (Western Union, MoneyGram)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Forex Settlements</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Currency exchange for international transactions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Digital Remittance</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Wise, Remitly, and other fintech solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Emerging Payment Methods (2025)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Buy Now Pay Later (BNPL)</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Instant credit at checkout</li>
                          <li>• Split payments over time</li>
                          <li>• Minimal credit checks</li>
                          <li>• Popular with millennials</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Central Bank Digital Currencies</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Digital rupee (e-RUPI pilot)</li>
                          <li>• Government-backed digital currency</li>
                          <li>• Programmable money features</li>
                          <li>• Enhanced financial inclusion</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Biometric Payments</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Fingerprint authentication</li>
                          <li>• Facial recognition payments</li>
                          <li>• Voice-based transactions</li>
                          <li>• Enhanced security features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300">
                      Payment systems have evolved from cash and cheques to instant digital transfers. UPI has revolutionized payments in India, while emerging technologies like CBDCs and biometric payments promise further innovation. Choose payment methods based on convenience, security, and cost considerations.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('types-banking')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Types of Banking
                    </button>
                    <button
                      onClick={() => navigateToSection('deposit-lending')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Deposit & Lending Services
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Deposit and Lending Services Section */}
            {activeSection === 'deposit-lending' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="deposit-lending"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <CurrencyRupeeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Deposit and Lending Services</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('deposit-lending')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('deposit-lending') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('deposit-lending') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('deposit-lending')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('deposit-lending')
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
                    Deposit and lending services form the core of traditional banking, enabling customers to save money safely while providing banks with funds to lend to borrowers. These services are fundamental to the banking business model and economic growth.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Deposit Services</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Banks offer various deposit products to help customers save money while earning returns.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Savings Accounts</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Interest Rate:</strong> 3-7% per annum (2025)</li>
                          <li>• <strong>Liquidity:</strong> Instant access to funds</li>
                          <li>• <strong>Minimum Balance:</strong> ₹500-₹10,000</li>
                          <li>• <strong>Features:</strong> Debit card, mobile banking, checkbook</li>
                          <li>• <strong>Tax:</strong> Interest taxable above ₹10,000</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Current Accounts</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Purpose:</strong> Business transactions</li>
                          <li>• <strong>Interest:</strong> Usually no interest earned</li>
                          <li>• <strong>Transactions:</strong> Unlimited deposits/withdrawals</li>
                          <li>• <strong>Overdraft:</strong> Facility available</li>
                          <li>• <strong>Charges:</strong> Monthly maintenance fees</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Fixed Deposits (FD)</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Interest Rate:</strong> 6.5-8.5% per annum</li>
                          <li>• <strong>Tenure:</strong> 7 days to 10 years</li>
                          <li>• <strong>Premature Withdrawal:</strong> Penalty charges</li>
                          <li>• <strong>Loan Against FD:</strong> Up to 90% of value</li>
                          <li>• <strong>Tax:</strong> TDS if interest &gt; ₹40,000</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Recurring Deposits (RD)</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Monthly Investment:</strong> ₹100 to ₹1,00,000</li>
                          <li>• <strong>Tenure:</strong> 6 months to 10 years</li>
                          <li>• <strong>Interest:</strong> Similar to FD rates</li>
                          <li>• <strong>Compounding:</strong> Quarterly compounding</li>
                          <li>• <strong>Flexibility:</strong> Systematic saving habit</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏠 Lending Products</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">Banks provide various credit facilities to meet different financing needs of individuals and businesses.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Personal Loans</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Interest: 10-24% per annum</li>
                          <li>• Amount: ₹50,000-₹40 lakh</li>
                          <li>• Tenure: 1-7 years</li>
                          <li>• Unsecured loan</li>
                          <li>• Quick processing</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Home Loans</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Interest: 8.5-12% per annum</li>
                          <li>• Amount: Up to ₹10 crore</li>
                          <li>• Tenure: Up to 30 years</li>
                          <li>• Property as collateral</li>
                          <li>• Tax benefits available</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Education Loans</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Interest: 8-15% per annum</li>
                          <li>• Amount: Up to ₹1.5 crore</li>
                          <li>• Moratorium period available</li>
                          <li>• Collateral for higher amounts</li>
                          <li>• Tax deduction on interest</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Business Loans</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Working Capital:</strong> Short-term operational needs</li>
                          <li>• <strong>Term Loans:</strong> Long-term asset financing</li>
                          <li>• <strong>MSME Loans:</strong> Special schemes for small businesses</li>
                          <li>• <strong>Trade Finance:</strong> Import/export financing</li>
                          <li>• <strong>Equipment Finance:</strong> Machinery and equipment</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Credit Cards & Overdrafts</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Credit Cards:</strong> Revolving credit facility</li>
                          <li>• <strong>Interest:</strong> 36-48% per annum on outstanding</li>
                          <li>• <strong>Overdraft:</strong> Linked to savings/current account</li>
                          <li>• <strong>Limit:</strong> Based on income and credit score</li>
                          <li>• <strong>Features:</strong> Rewards, cashback, EMI conversion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Loan Approval Process & Factors</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Key Factors for Approval</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Credit Score:</strong> CIBIL score 750+ preferred</li>
                          <li>• <strong>Income Stability:</strong> Regular employment/business income</li>
                          <li>• <strong>Debt-to-Income Ratio:</strong> Should be &lt;40%</li>
                          <li>• <strong>Collateral:</strong> For secured loans</li>
                          <li>• <strong>Age:</strong> 21-65 years typically</li>
                          <li>• <strong>Documentation:</strong> Income proof, identity, address</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Processing Timeline</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Personal Loans:</strong> 1-7 days</li>
                          <li>• <strong>Home Loans:</strong> 15-30 days</li>
                          <li>• <strong>Business Loans:</strong> 7-21 days</li>
                          <li>• <strong>Credit Cards:</strong> 7-14 days</li>
                          <li>• <strong>Digital Loans:</strong> Instant to 24 hours</li>
                          <li>• <strong>Documentation:</strong> Major factor in timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Deposit and lending services are the foundation of banking. Choose deposit products based on liquidity needs and return expectations. For loans, maintain a good credit score, stable income, and compare interest rates across banks. Always read terms and conditions carefully before committing.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('payment-systems')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Payment Systems
                    </button>
                    <button
                      onClick={() => navigateToSection('digital-banking')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Digital Banking & Fintech
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Digital Banking Section */}
            {activeSection === 'digital-banking' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="digital-banking"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
                      <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Banking and Fintech</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 20 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('digital-banking')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('digital-banking') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('digital-banking') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('digital-banking')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('digital-banking')
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
                    Digital banking and fintech have revolutionized financial services, making banking more accessible, convenient, and efficient. From mobile banking apps to AI-powered financial advice, technology is reshaping how we interact with money.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📱 Mobile Banking & Net Banking</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Mobile Banking Features</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Account balance and transaction history</li>
                            <li>• Fund transfers (NEFT, RTGS, IMPS, UPI)</li>
                            <li>• Bill payments and recharges</li>
                            <li>• Fixed deposit and loan applications</li>
                            <li>• Investment in mutual funds</li>
                            <li>• Cardless ATM withdrawals</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Security Features</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Biometric authentication (fingerprint, face)</li>
                            <li>• Two-factor authentication (2FA)</li>
                            <li>• Transaction limits and alerts</li>
                            <li>• Device binding and registration</li>
                            <li>• Automatic session timeout</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🏦 Neobanks & Digital-only Banks</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Characteristics</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• No physical branches</li>
                            <li>• Lower operational costs</li>
                            <li>• Better interest rates</li>
                            <li>• Superior user experience</li>
                            <li>• 24/7 customer support</li>
                            <li>• Instant account opening</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Examples in India</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Jupiter, Fi Money, NiYO</li>
                            <li>• Open (business banking)</li>
                            <li>• RazorpayX (business accounts)</li>
                            <li>• Kotak 811 (digital savings)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">APIs & Open Banking</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Open banking allows third-party applications to access banking data and services through secure APIs.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Benefits of Open Banking</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Innovation:</strong> Third-party fintech solutions</li>
                          <li>• <strong>Competition:</strong> Better products and pricing</li>
                          <li>• <strong>Convenience:</strong> Integrated financial services</li>
                          <li>• <strong>Personalization:</strong> Tailored financial products</li>
                          <li>• <strong>Transparency:</strong> Better comparison of services</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Use Cases</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Account Aggregation:</strong> View all accounts in one app</li>
                          <li>• <strong>Payment Initiation:</strong> Third-party payment apps</li>
                          <li>• <strong>Credit Scoring:</strong> Alternative credit assessment</li>
                          <li>• <strong>Personal Finance:</strong> Budgeting and expense tracking</li>
                          <li>• <strong>Investment Platforms:</strong> Robo-advisors and wealth management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🤖 Robo-Advisors & AI Banking</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">AI Applications</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Personalized financial advice</li>
                            <li>• Fraud detection and prevention</li>
                            <li>• Credit risk assessment</li>
                            <li>• Chatbots for customer service</li>
                            <li>• Automated investment management</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Robo-Advisory Services</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Goal-based investment planning</li>
                            <li>• Automated portfolio rebalancing</li>
                            <li>• Tax-loss harvesting</li>
                            <li>• Low-cost investment management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">⛓️ Blockchain & DeFi</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Blockchain Applications</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Cross-border payments</li>
                            <li>• Trade finance documentation</li>
                            <li>• Identity verification (KYC)</li>
                            <li>• Smart contracts for loans</li>
                            <li>• Supply chain financing</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">DeFi Services</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Peer-to-peer lending</li>
                            <li>• Decentralized exchanges</li>
                            <li>• Yield farming and staking</li>
                            <li>• Crypto wallets and custody</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Fintech Ecosystem in India (2025)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Payment Fintechs</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Paytm, PhonePe, Google Pay</li>
                          <li>• Razorpay, Cashfree (B2B)</li>
                          <li>• BharatPe (merchant payments)</li>
                          <li>• Pine Labs (POS solutions)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Lending Fintechs</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Lendingkart, Capital Float</li>
                          <li>• KreditBee, MoneyTap</li>
                          <li>• Slice, Uni Cards</li>
                          <li>• Faircent (P2P lending)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Wealth & Investment</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Zerodha, Groww, Upstox</li>
                          <li>• Kuvera, ET Money</li>
                          <li>• Smallcase (thematic investing)</li>
                          <li>• INDmoney (wealth management)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Digital banking and fintech have democratized financial services, making them more accessible and affordable. Embrace digital tools for convenience but ensure security. The future of banking is digital-first, with AI, blockchain, and open banking driving innovation.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('deposit-lending')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Deposit & Lending Services
                    </button>
                    <button
                      onClick={() => navigateToSection('clearing-settlement')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Clearing & Settlement
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Clearing Settlement Section */}
            {activeSection === 'clearing-settlement' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="clearing-settlement"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <CloudIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Clearing, Settlement & Infrastructure</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('clearing-settlement')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('clearing-settlement') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('clearing-settlement') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('clearing-settlement')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('clearing-settlement')
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
                    Clearing and settlement infrastructure forms the invisible backbone of the financial system, ensuring that payments are processed securely and efficiently. These systems handle trillions of dollars in transactions daily, maintaining the stability of the global economy.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 National Payment Switches</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">NPCI (India)</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• National Payments Corporation of India</li>
                            <li>• Operates UPI, RuPay, IMPS systems</li>
                            <li>• Processes 10+ billion transactions monthly</li>
                            <li>• Enables interbank connectivity</li>
                            <li>• Promotes financial inclusion</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Global Examples</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• NACHA (USA) - ACH network</li>
                            <li>• SEPA (EU) - Single Euro Payments Area</li>
                            <li>• Faster Payments (UK)</li>
                            <li>• Interac (Canada)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">⚡ Real-Time Gross Settlement (RTGS)</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Key Features</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Real-time processing of high-value transactions</li>
                            <li>• Gross settlement (individual transaction basis)</li>
                            <li>• Irrevocable and final settlement</li>
                            <li>• Central bank operated system</li>
                            <li>• Minimum transaction limits</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Usage</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Large corporate payments</li>
                            <li>• Interbank settlements</li>
                            <li>• Government transactions</li>
                            <li>• Time-critical payments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Automated Clearing Houses (ACH)</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">ACH systems process bulk transactions like salaries, utility payments, and recurring transfers in batches.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">ACH Transaction Types</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• <strong>Direct Deposits:</strong> Salary, pension, benefits</li>
                          <li>• <strong>Direct Debits:</strong> Utility bills, loan EMIs</li>
                          <li>• <strong>P2P Transfers:</strong> Person-to-person payments</li>
                          <li>• <strong>B2B Payments:</strong> Vendor payments, supply chain</li>
                          <li>• <strong>Government Payments:</strong> Tax refunds, subsidies</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Processing Characteristics</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• <strong>Batch Processing:</strong> Multiple transactions together</li>
                          <li>• <strong>Lower Costs:</strong> Economies of scale</li>
                          <li>• <strong>Settlement Cycles:</strong> T+1 or T+2 days</li>
                          <li>• <strong>High Volume:</strong> Millions of transactions daily</li>
                          <li>• <strong>Standardized:</strong> Common message formats</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🌍 SWIFT Network</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">What is SWIFT?</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Society for Worldwide Interbank Financial Telecommunication - global messaging network for international payments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Key Features</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• 11,000+ financial institutions</li>
                            <li>• 200+ countries and territories</li>
                            <li>• 42 million messages daily</li>
                            <li>• Standardized message formats</li>
                            <li>• High security and reliability</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Challenges</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Slow processing (2-5 days)</li>
                            <li>• High costs for small amounts</li>
                            <li>• Limited transparency</li>
                            <li>• Geopolitical risks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🚀 UPI & Instant Payments</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">UPI Architecture</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Real-time payment system</li>
                            <li>• 24x7 availability</li>
                            <li>• Interoperable across banks</li>
                            <li>• Mobile-first design</li>
                            <li>• Low-cost transactions</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Global Impact</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Model for other countries</li>
                            <li>• Singapore, UAE adoption</li>
                            <li>• Cross-border UPI expansion</li>
                            <li>• Financial inclusion driver</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">2025 Statistics</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• 10+ billion monthly transactions</li>
                            <li>• ₹15+ lakh crore monthly value</li>
                            <li>• 400+ million users</li>
                            <li>• 99.9% success rate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Payment Infrastructure Components</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Core Banking Systems</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Account management</li>
                          <li>• Transaction processing</li>
                          <li>• Risk management</li>
                          <li>• Regulatory reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Payment Gateways</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Merchant integration</li>
                          <li>• Multiple payment methods</li>
                          <li>• Security and encryption</li>
                          <li>• Settlement services</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Network Infrastructure</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• High-speed connectivity</li>
                          <li>• Redundancy and backup</li>
                          <li>• Load balancing</li>
                          <li>• Disaster recovery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-teal-700 dark:text-teal-300 text-sm">
                      Clearing and settlement infrastructure is the invisible backbone enabling seamless financial transactions. UPI has revolutionized instant payments in India, while SWIFT continues to dominate international transfers. The future lies in real-time, low-cost, and interoperable payment systems.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('digital-banking')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Digital Banking & Fintech
                    </button>
                    <button
                      onClick={() => navigateToSection('innovations')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Innovations in Payments
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Innovations Section */}
            {activeSection === 'innovations' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="innovations"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Innovations in Payments</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('innovations')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('innovations') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('innovations') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('innovations')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('innovations')
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
                    Payment innovations are transforming how we transact, making payments faster, more secure, and more convenient. From contactless payments to central bank digital currencies, these technologies are reshaping the financial landscape.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🚀 Unified Payments Interface (UPI) Revolution</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">UPI has become India's flagship payment innovation, revolutionizing digital payments with its real-time, low-cost, and interoperable architecture.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Key Innovations</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Virtual Payment Address:</strong> No need to share bank details</li>
                          <li>• <strong>QR Code Payments:</strong> Scan and pay instantly</li>
                          <li>• <strong>Request Money:</strong> Send payment requests</li>
                          <li>• <strong>Mandate Payments:</strong> Recurring payment setup</li>
                          <li>• <strong>UPI Lite:</strong> Offline payments for small amounts</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Global Expansion</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Singapore:</strong> UPI-PayNow linkage</li>
                          <li>• <strong>UAE:</strong> UPI acceptance at merchants</li>
                          <li>• <strong>Bhutan:</strong> UPI implementation</li>
                          <li>• <strong>Nepal:</strong> Cross-border UPI payments</li>
                          <li>• <strong>France:</strong> UPI at Eiffel Tower</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📱 Tap-to-Pay & NFC Technology</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Contactless Cards</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• NFC-enabled debit/credit cards</li>
                            <li>• Tap payments up to ₹5,000</li>
                            <li>• No PIN required for small amounts</li>
                            <li>• Faster checkout experience</li>
                            <li>• Enhanced hygiene (post-COVID)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Mobile NFC Payments</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Google Pay, Apple Pay, Samsung Pay</li>
                            <li>• Tokenized card information</li>
                            <li>• Biometric authentication</li>
                            <li>• Works with existing POS terminals</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📷 QR Code Payment Evolution</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Static QR Codes</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Fixed merchant QR codes</li>
                            <li>• Customer enters amount</li>
                            <li>• Low-cost merchant adoption</li>
                            <li>• Suitable for small businesses</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Dynamic QR Codes</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Transaction-specific codes</li>
                            <li>• Pre-filled amount and details</li>
                            <li>• Enhanced security features</li>
                            <li>• Better for larger merchants</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Buy Now Pay Later (BNPL) Revolution</h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-4">BNPL has transformed e-commerce payments by offering instant credit at checkout without traditional credit checks.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">How BNPL Works</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Instant approval at checkout</li>
                          <li>• Split payment into installments</li>
                          <li>• No interest if paid on time</li>
                          <li>• Minimal documentation required</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Popular BNPL Players</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Simpl, LazyPay, ZestMoney</li>
                          <li>• Flipkart Pay Later</li>
                          <li>• Amazon Pay Later</li>
                          <li>• Payme India, Slice</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Benefits & Risks</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• ✅ Improved cash flow</li>
                          <li>• ✅ No credit card needed</li>
                          <li>• ⚠️ High penalty charges</li>
                          <li>• ⚠️ Potential overspending</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">💰 Central Bank Digital Currencies (CBDCs)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Digital Rupee (e-RUPI)</h4>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">RBI's pilot program for digital currency with programmable features</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Key Features</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• Government-backed digital currency</li>
                            <li>• Programmable money features</li>
                            <li>• Enhanced financial inclusion</li>
                            <li>• Reduced transaction costs</li>
                            <li>• Better monetary policy control</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Global CBDC Status</h4>
                          <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                            <li>• China: Digital Yuan (pilot)</li>
                            <li>• EU: Digital Euro (research)</li>
                            <li>• USA: Digital Dollar (study)</li>
                            <li>• UK: Digital Pound (exploration)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🌍 Cross-Border Fintech Solutions</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Ripple & Blockchain</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Real-time cross-border payments</li>
                            <li>• Lower costs than SWIFT</li>
                            <li>• Cryptocurrency-based settlements</li>
                            <li>• Bank partnerships globally</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Digital Remittance</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Wise (formerly TransferWise)</li>
                            <li>• Remitly, WorldRemit</li>
                            <li>• PayPal, Western Union digital</li>
                            <li>• Cryptocurrency remittances</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Benefits</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Faster settlement (minutes vs days)</li>
                            <li>• Lower fees (1-3% vs 5-10%)</li>
                            <li>• Better exchange rates</li>
                            <li>• Enhanced transparency</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Emerging Payment Technologies (2025)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Biometric Payments</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Fingerprint authentication</li>
                          <li>• Facial recognition payments</li>
                          <li>• Voice-based transactions</li>
                          <li>• Iris scanning technology</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">IoT Payments</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Smart car payments</li>
                          <li>• Wearable device transactions</li>
                          <li>• Smart home payments</li>
                          <li>• Vending machine integration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">AI-Powered Payments</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Predictive payment suggestions</li>
                          <li>• Fraud detection in real-time</li>
                          <li>• Personalized payment experiences</li>
                          <li>• Automated bill payments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-pink-700 dark:text-pink-300 text-sm">
                      Payment innovations are making transactions faster, cheaper, and more convenient. UPI has set a global benchmark, while BNPL is changing e-commerce. The future promises even more seamless experiences with CBDCs, biometric payments, and AI-powered solutions.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('clearing-settlement')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Clearing & Settlement
                    </button>
                    <button
                      onClick={() => navigateToSection('regulation')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Regulation & Consumer Protection
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regulation Section */}
            {activeSection === 'regulation' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="regulation"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Regulation and Consumer Protection</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 18 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('regulation')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('regulation') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('regulation') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('regulation')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('regulation')
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
                    Banking regulation ensures financial system stability, consumer protection, and fair market practices. Regulatory frameworks vary globally but share common objectives of maintaining trust, preventing systemic risks, and protecting depositors.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Global Banking Regulators</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">International Bodies</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                          <li>• <strong>Basel Committee (BCBS):</strong> Global banking supervision standards</li>
                          <li>• <strong>FATF:</strong> Anti-money laundering and terrorism financing</li>
                          <li>• <strong>FSB:</strong> Financial Stability Board coordination</li>
                          <li>• <strong>BIS:</strong> Bank for International Settlements</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Major National Regulators</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                          <li>• <strong>Federal Reserve (USA):</strong> Central banking and supervision</li>
                          <li>• <strong>ECB (Europe):</strong> European Central Bank oversight</li>
                          <li>• <strong>PRA/FCA (UK):</strong> Prudential and conduct regulation</li>
                          <li>• <strong>APRA (Australia):</strong> Banking supervision</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🇮🇳 Indian Banking Regulators</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">RBI (Reserve Bank of India)</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Central bank and primary regulator</li>
                            <li>• Monetary policy formulation</li>
                            <li>• Banking license and supervision</li>
                            <li>• Payment system oversight</li>
                            <li>• Foreign exchange management</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">NPCI (National Payments Corporation)</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Payment system operator</li>
                            <li>• UPI, RuPay, IMPS management</li>
                            <li>• Retail payment innovation</li>
                            <li>• Interbank settlement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🛡️ Consumer Protection Measures</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Deposit Insurance</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• DICGC (India): ₹5 lakh per depositor</li>
                            <li>• FDIC (USA): $250,000 per depositor</li>
                            <li>• FSCS (UK): £85,000 per person</li>
                            <li>• Covers bank failures and defaults</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Ombudsman Services</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Banking Ombudsman (India)</li>
                            <li>• Free dispute resolution</li>
                            <li>• Covers service deficiencies</li>
                            <li>• Alternative to court proceedings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">KYC/AML Compliance Framework</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Know Your Customer and Anti-Money Laundering rules ensure financial system integrity and prevent illicit activities.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">KYC Requirements</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Identity verification (Aadhaar, PAN)</li>
                          <li>• Address proof documents</li>
                          <li>• Photograph and signature</li>
                          <li>• Periodic KYC updates</li>
                          <li>• Enhanced due diligence for high-risk customers</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">AML Monitoring</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Suspicious transaction reporting</li>
                          <li>• Cash transaction reporting (₹10L+)</li>
                          <li>• Customer risk profiling</li>
                          <li>• Sanctions screening</li>
                          <li>• Beneficial ownership identification</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Penalties & Enforcement</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Account freezing for non-compliance</li>
                          <li>• Heavy fines for banks</li>
                          <li>• Criminal prosecution for violations</li>
                          <li>• License revocation in severe cases</li>
                          <li>• International cooperation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔒 Data Security & Privacy</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">PCI-DSS Standards</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Payment Card Industry Data Security Standards for card data protection</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">RBI Data Localization</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Payment data must be stored within India for regulatory oversight</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">GDPR Compliance</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">European data protection regulation affecting global banks</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Cybersecurity Framework</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Multi-layered security controls and incident response procedures</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">⚖️ Fair Banking Practices</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Transparent Pricing</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Clear disclosure of fees, charges, and interest rates</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Responsible Lending</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Proper credit assessment and affordability checks</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Grievance Redressal</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Timely resolution of customer complaints and disputes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Financial Inclusion</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Basic banking services for all segments of society</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Banking regulation balances innovation with stability and consumer protection. Strong regulatory frameworks build trust in the financial system while ensuring fair treatment of customers. Compliance with KYC/AML rules and data security standards is essential for maintaining banking licenses.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('innovations')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Innovations in Payments
                    </button>
                    <button
                      onClick={() => navigateToSection('global-perspectives')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Global Perspectives
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Global Perspectives Section */}
            {activeSection === 'global-perspectives' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="global-perspectives"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-xl">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Global Perspectives in Banking</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 20 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('global-perspectives')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('global-perspectives') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('global-perspectives') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('global-perspectives')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('global-perspectives')
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
                    Banking systems vary significantly across countries, reflecting different economic structures, regulatory approaches, and technological adoption levels. Understanding global banking perspectives helps in appreciating diverse financial ecosystems and their impact on international commerce.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 Developed Nations Banking</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Advanced Credit Systems</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Sophisticated credit scoring (FICO, Experian)</li>
                            <li>• Extensive credit history tracking</li>
                            <li>• Multiple credit products and tiers</li>
                            <li>• Credit rehabilitation programs</li>
                            <li>• Consumer credit protection laws</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Digital Adoption</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• 90%+ digital banking penetration</li>
                            <li>• Contactless payment dominance</li>
                            <li>• Open banking implementation</li>
                            <li>• Robo-advisory services</li>
                            <li>• AI-powered fraud detection</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Examples</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• USA: JPMorgan Chase, Bank of America</li>
                            <li>• UK: Barclays, HSBC, Lloyds</li>
                            <li>• Germany: Deutsche Bank, Commerzbank</li>
                            <li>• Japan: Mitsubishi UFJ, Sumitomo</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌍 Developing Nations Banking</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Financial Inclusion Focus</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Basic banking account programs</li>
                            <li>• Microfinance institutions</li>
                            <li>• Agent banking networks</li>
                            <li>• Government-backed financial inclusion</li>
                            <li>• Digital identity systems</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Mobile-First Approach</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Mobile wallet dominance</li>
                            <li>• USSD-based banking</li>
                            <li>• Leapfrogging traditional infrastructure</li>
                            <li>• QR code payment adoption</li>
                            <li>• Biometric authentication</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Success Stories</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• India: UPI ecosystem, Jan Dhan Yojana</li>
                            <li>• Kenya: M-Pesa mobile money</li>
                            <li>• China: Alipay, WeChat Pay</li>
                            <li>• Brazil: PIX instant payments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Unbanked/Underbanked Populations</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Approximately 1.4 billion adults globally remain unbanked, with innovative solutions emerging to address this challenge.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Barriers to Banking</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Lack of documentation</li>
                          <li>• Geographic remoteness</li>
                          <li>• Low income levels</li>
                          <li>• Cultural and language barriers</li>
                          <li>• Distrust of formal institutions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Innovative Solutions</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Mobile banking (M-Pesa model)</li>
                          <li>• Aadhaar-based accounts (India)</li>
                          <li>• Agent banking networks</li>
                          <li>• Biometric identification</li>
                          <li>• Simplified KYC procedures</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Impact Measurement</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Account ownership rates</li>
                          <li>• Digital payment adoption</li>
                          <li>• Credit access improvement</li>
                          <li>• Economic empowerment metrics</li>
                          <li>• Gender inclusion progress</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🇪🇺 Open Banking (EU/UK Model)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">PSD2 Directive</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Payment Services Directive 2 mandating open banking in Europe</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Key Features</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Mandatory API access for banks</li>
                            <li>• Third-party provider licensing</li>
                            <li>• Customer consent-based data sharing</li>
                            <li>• Enhanced competition and innovation</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Benefits</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Better financial products</li>
                            <li>• Improved customer experience</li>
                            <li>• Lower costs and fees</li>
                            <li>• Fintech innovation acceleration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🇨🇳 China's Digital Banking Revolution</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Super Apps Ecosystem</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Alipay: 1.3 billion users</li>
                            <li>• WeChat Pay: 900 million users</li>
                            <li>• Integrated lifestyle services</li>
                            <li>• QR code payment ubiquity</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Digital Currency (DCEP)</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• World's first major CBDC pilot</li>
                            <li>• Digital yuan implementation</li>
                            <li>• Offline payment capability</li>
                            <li>• Government transaction tracking</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Credit Innovation</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Sesame Credit scoring system</li>
                            <li>• Alternative data for credit assessment</li>
                            <li>• Instant micro-lending</li>
                            <li>• Social credit integration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Regional Banking Innovations (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Africa</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>M-Pesa (Kenya):</strong> Mobile money pioneer, 50M+ users</li>
                          <li>• <strong>Agent Banking:</strong> Rural financial service delivery</li>
                          <li>• <strong>Microfinance:</strong> Small-scale lending for entrepreneurs</li>
                          <li>• <strong>Blockchain Remittances:</strong> Lower-cost cross-border transfers</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Latin America</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>PIX (Brazil):</strong> Instant payment system, 140M+ users</li>
                          <li>• <strong>Neobanks:</strong> Nubank (Brazil), Banco Azteca (Mexico)</li>
                          <li>• <strong>Cryptocurrency Adoption:</strong> El Salvador's Bitcoin experiment</li>
                          <li>• <strong>Remittance Corridors:</strong> USA-Mexico digital transfers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Global banking systems reflect diverse economic, regulatory, and technological contexts. Developing nations often leapfrog traditional banking infrastructure with mobile-first solutions, while developed nations focus on open banking and advanced credit systems. Cross-border learning and collaboration drive innovation worldwide.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('regulation')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Regulation & Consumer Protection
                    </button>
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Challenges in Banking
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in Banking & Payments</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 14 min read • Advanced</p>
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
                    The banking and payments industry faces numerous challenges in the digital age, from cybersecurity threats to regulatory complexities. Understanding these challenges is crucial for building resilient financial systems and protecting consumers.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🔒 Cybersecurity Threats</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Digital Fraud Types</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Phishing and social engineering attacks</li>
                            <li>• Card skimming and cloning</li>
                            <li>• Account takeover fraud</li>
                            <li>• SIM swapping for OTP bypass</li>
                            <li>• Malware and ransomware attacks</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Impact & Statistics</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• ₹1,000+ crores annual fraud losses (India)</li>
                            <li>• 50% increase in digital fraud (2020-2025)</li>
                            <li>• Average fraud detection time: 14 months</li>
                            <li>• Customer trust erosion</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🌍 Cross-Border Payment Inefficiencies</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Current Problems</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• High costs (5-10% of transaction value)</li>
                            <li>• Slow processing (2-5 business days)</li>
                            <li>• Limited transparency and tracking</li>
                            <li>• Complex compliance requirements</li>
                            <li>• Multiple intermediary banks</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Emerging Solutions</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Blockchain-based settlements</li>
                            <li>• Central bank digital currencies</li>
                            <li>• Fintech corridor partnerships</li>
                            <li>• Real-time gross settlement systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Financial Exclusion Challenges</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Despite progress, significant portions of the population remain excluded from formal banking services.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Rural & Remote Areas</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Limited branch network</li>
                          <li>• Poor internet connectivity</li>
                          <li>• Low smartphone penetration</li>
                          <li>• Language and literacy barriers</li>
                          <li>• Irregular income patterns</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Low-Income Populations</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Minimum balance requirements</li>
                          <li>• High transaction fees</li>
                          <li>• Lack of credit history</li>
                          <li>• Documentation challenges</li>
                          <li>• Informal economy participation</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Solutions & Progress</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Jan Dhan Yojana (India): 460M+ accounts</li>
                          <li>• Business correspondent model</li>
                          <li>• Aadhaar-enabled payments</li>
                          <li>• Zero-balance accounts</li>
                          <li>• Mobile banking solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚖️ Regulatory Challenges</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Fintech Regulation</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Balancing innovation with consumer protection and systemic stability</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Cryptocurrency Oversight</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Unclear regulatory frameworks for digital assets and DeFi</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Cross-Border Compliance</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Multiple jurisdictions with different regulatory requirements</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Data Localization</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Conflicting data residency requirements across countries</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💰 Banking Channel Misuse</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Money Laundering</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Criminal organizations exploiting banking systems for illicit fund flows</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Terrorism Financing</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Using financial channels to fund terrorist activities</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Tax Evasion</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Offshore accounts and complex structures to avoid taxes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Sanctions Evasion</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Circumventing international sanctions through banking channels</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Specific Challenges in Developing Economies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Non-Performing Assets (NPAs)</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>India:</strong> ₹8+ lakh crore gross NPAs (2025)</li>
                          <li>• <strong>Causes:</strong> Economic slowdowns, poor credit assessment</li>
                          <li>• <strong>Impact:</strong> Reduced lending capacity, higher interest rates</li>
                          <li>• <strong>Solutions:</strong> Asset reconstruction, bankruptcy codes</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Infrastructure Gaps</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Connectivity:</strong> Poor internet and mobile coverage</li>
                          <li>• <strong>Power:</strong> Unreliable electricity supply</li>
                          <li>• <strong>Skills:</strong> Limited digital literacy</li>
                          <li>• <strong>Trust:</strong> Low confidence in digital systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Banking and payment challenges require coordinated responses from regulators, financial institutions, and technology providers. Success depends on balancing innovation with security, inclusion with compliance, and efficiency with stability. Continuous adaptation and collaboration are essential for addressing evolving threats and opportunities.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('global-perspectives')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Global Perspectives
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Conclusion & Future Outlook
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Future Outlook</h2>
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
                    Banking and payments are the pillars of financial systems, shaping how money flows across individuals, businesses, and governments. From traditional cash and banking models to advanced digital ecosystems, the sector is evolving rapidly with fintech, AI, blockchain, and CBDCs driving transformation.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Key Insights from Banking & Payments Journey</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Foundational Understanding</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Banking institutions serve different market segments with specialized services</li>
                          <li>• Payment systems have evolved from cash to instant digital transfers</li>
                          <li>• Deposit and lending services form the core of traditional banking</li>
                          <li>• Regulatory frameworks ensure stability and consumer protection</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Digital Transformation</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Fintech and neobanks are reshaping customer expectations</li>
                          <li>• UPI has set a global benchmark for instant payments</li>
                          <li>• AI and blockchain are driving innovation in financial services</li>
                          <li>• Open banking is fostering competition and innovation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Future of Banking & Payments (2025-2030)</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Technology Trends</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>CBDCs:</strong> Central bank digital currencies mainstream adoption</li>
                          <li>• <strong>Quantum Computing:</strong> Enhanced security and processing power</li>
                          <li>• <strong>IoT Payments:</strong> Connected devices enabling seamless transactions</li>
                          <li>• <strong>Biometric Authentication:</strong> Passwordless banking experiences</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Business Models</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Embedded Finance:</strong> Banking services integrated into non-financial apps</li>
                          <li>• <strong>Banking-as-a-Service:</strong> API-driven financial infrastructure</li>
                          <li>• <strong>Subscription Banking:</strong> Fee-based service models</li>
                          <li>• <strong>Ecosystem Banking:</strong> Comprehensive lifestyle platforms</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Global Impact</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Financial Inclusion:</strong> 1 billion+ new banked individuals</li>
                          <li>• <strong>Cross-Border Efficiency:</strong> Real-time international payments</li>
                          <li>• <strong>Sustainability:</strong> Green finance and ESG integration</li>
                          <li>• <strong>Interoperability:</strong> Seamless global payment networks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Action Plan for Banking & Payments Mastery</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">For Individuals</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Choose banks based on digital capabilities and service quality</li>
                          <li>• Embrace digital payment methods while maintaining security awareness</li>
                          <li>• Understand your rights and protections as a banking customer</li>
                          <li>• Stay informed about new financial products and services</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">For Businesses</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Integrate multiple payment options for customer convenience</li>
                          <li>• Leverage banking APIs for embedded financial services</li>
                          <li>• Implement robust cybersecurity measures for financial data</li>
                          <li>• Explore fintech partnerships for innovation and efficiency</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">For Professionals</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Develop expertise in digital banking and fintech trends</li>
                          <li>• Understand regulatory compliance and risk management</li>
                          <li>• Build skills in data analytics and customer experience</li>
                          <li>• Stay updated with global banking innovations and best practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Resources for Continued Learning</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Regulatory & Industry Resources</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• RBI guidelines and circulars for Indian banking</li>
                          <li>• NPCI documentation for payment systems</li>
                          <li>• Basel Committee publications for global standards</li>
                          <li>• Fintech industry reports and research</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Tools & Platforms</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• NeoCred banking calculators and tools</li>
                          <li>• Banking comparison platforms</li>
                          <li>• Payment gateway documentation</li>
                          <li>• Fintech sandbox environments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      Banking and payments form the circulatory system of the global economy. By strengthening regulation, promoting inclusion, and leveraging technology, this sector can drive economic growth and empower billions with financial access. The future belongs to those who can balance innovation with stability, efficiency with security, and growth with responsibility.
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
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                        <Link
                          to="/learn/insurance"
                          className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <span className="mr-2">🛡️</span>
                          Insurance & Risk Management
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                        </Link>
                      </div>
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
                      Banking & Payment Tools
                    </h3>
                    <p className="text-blue-100">Explore banking calculators and payment tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'EMI Calculator', path: '/calculators/home-loan-emi', icon: '🏠', desc: 'Calculate loan EMIs' },
                    { name: 'FD Calculator', path: '/calculators/fd-calculator', icon: '💰', desc: 'Fixed deposit returns' },
                    { name: 'RD Calculator', path: '/calculators/rd-calculator', icon: '📈', desc: 'Recurring deposit planning' },
                    { name: 'Loan Comparison', path: '/calculators/loan-comparison', icon: '⚖️', desc: 'Compare loan options' },
                    { name: 'Credit Score', path: '/tools/credit-score', icon: '📊', desc: 'Check credit health' },
                    { name: 'Currency Converter', path: '/tools/currency-converter', icon: '💱', desc: 'Exchange rates' },
                    { name: 'IFSC Finder', path: '/tools/ifsc-finder', icon: '🔍', desc: 'Find bank codes' },
                    { name: 'Interest Calculator', path: '/calculators/compound-interest', icon: '🧮', desc: 'Calculate interest' }
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